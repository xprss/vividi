import { Injectable } from '@angular/core';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  UserCredential,
  Auth,
  createUserWithEmailAndPassword,
} from '@firebase/auth';
import { LocalStorageEnum } from '../../lib/local-storage.enum';
import { NavbarService } from './navbar.service';
import { ServerService } from './server.service';
import { BehaviorSubject } from 'rxjs';
import { DialogService } from './dialog.service';
import { VividiUser } from '../../lib/vividi-user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: VividiUser | null = null;
  public loggedIn: boolean = false;
  public $loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private auth: Auth = getAuth();

  constructor(
    private readonly navbarService: NavbarService,
    private readonly serverService: ServerService,
    private readonly dialogService: DialogService
  ) {
    this.loggedIn = this.isLoggedIn();
    this.$loggedIn.next(this.loggedIn);
  }

  /**
   * This method provides the email/password sign-in mechanism towards Google Firebase Authentication.
   * @param email The user email
   * @param password The user password
   */
  public async signInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<void> {
    return this.serverService
      .getAccount(email)
      .then(async (response: Response) => {
        if (response.ok) {
          const data = await response.json();
          const userCredential: UserCredential =
            await signInWithEmailAndPassword(this.auth, email, password);
          this.currentUser = {
            ...userCredential.user,
            id: data.id,
            firstName: data.firstName,
            lastName: data.lastName,
            badges: data.roles,
          };
          localStorage.setItem(
            LocalStorageEnum.USER_CREDENTIAL,
            JSON.stringify(this.currentUser)
          );
          this.navbarService.navigateToHomePage();

          this.loggedIn = true;
          this.$loggedIn.next(this.loggedIn);
        }
      })
      .catch((error: string) => {
        this.dialogService.showDialog(
          '🫣 Utente non trovato',
          'Controlla di aver inserito correttamente email e password.',
          [
            {
              label: 'Chiudi',
              severity: 'primary',
              action: () => {
                this.dialogService.hideDialog();
              },
            },
          ]
        );
        this.loggedIn = false;
        this.$loggedIn.next(this.loggedIn);
        throw error;
      });
  }

  /**
   * This method provides the sign-on mechanism towards Google Firebase Authentication.
   * Moreover, the user is created in the backend.
   * @param firstName the user's first name
   * @param lastName the user's last name
   * @param email the user's email
   * @param password the user's password
   */
  public async signOnWithEmailAndPassword(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<void> {
    const userData: any = this.serverService
      .createAccount(firstName, lastName, email)
      .then(async (response: Response) => {
        if (response.ok) {
          const userCredential: UserCredential =
            await createUserWithEmailAndPassword(this.auth, email, password);
          this.currentUser = {
            ...userCredential.user,
            id: (await response.json()).id,
            firstName: firstName,
            lastName: lastName,
            badges: [],
          };
          localStorage.setItem(
            LocalStorageEnum.USER_CREDENTIAL,
            JSON.stringify(this.currentUser)
          );
          this.navbarService.navigateToHomePage();
          this.loggedIn = true;
          this.$loggedIn.next(this.loggedIn);
        }
      })
      .catch((error: string) => {
        console.error('Error creating account:', error);
        this.loggedIn = false;
        this.$loggedIn.next(this.loggedIn);
        throw error;
      });
  }

  /**
   * This method provides the Google Authentication sign-in mechanism.
   */
  public async signInWithGoogleAuthProvider(): Promise<void> {
    const provider = new GoogleAuthProvider();
    const userCredential: UserCredential = await signInWithPopup(
      this.auth,
      provider
    );
    this.currentUser = {
      ...userCredential.user,
      id: userCredential.user.uid,
      firstName: userCredential.user.displayName!,
      lastName: '',
      badges: [],
    };
    localStorage.setItem(
      LocalStorageEnum.USER_CREDENTIAL,
      JSON.stringify(this.currentUser)
    );
    this.navbarService.navigateToHomePage();

    this.loggedIn = true;
    this.$loggedIn.next(this.loggedIn);
  }

  /**
   * Sign-out method.
   */
  public async signOut(): Promise<void> {
    localStorage.removeItem(LocalStorageEnum.USER_CREDENTIAL);
    await signOut(this.auth);
    this.currentUser = null;
    this.loggedIn = false;
    this.$loggedIn.next(this.loggedIn);
    this.navbarService.navigateToSignInPage();
  }

  /**
   * This method provides the password reset mechanism towards Google Firebase Authentication.
   * @param email The user email
   */
  public async resetPassword(email?: string): Promise<void> {
    if (email) {
      await sendPasswordResetEmail(this.auth, email);
    }
  }

  /**
   * This method retrieved the idToken to be sent to the backend.
   * @param forceRefresh Forces the retrieve of a freshed idToken
   * @returns the idToken
   */
  public async getIdToken(forceRefresh = false): Promise<string | null> {
    if (!this.currentUser) return null;
    return this.currentUser.getIdToken(forceRefresh);
  }

  /**
   * This method retrieves the user.
   * @returns the user
   */
  public getUser(): VividiUser | null {
    return this.currentUser;
  }

  /**
   * This method retrieves whether the user is logged in or not.
   * @returns whether the user is logged in or not
   */
  private isLoggedIn(): boolean {
    const storedUserCredentialJSON: string | null = localStorage.getItem(
      LocalStorageEnum.USER_CREDENTIAL
    );
    if (storedUserCredentialJSON) {
      const storedUserCredential: VividiUser | null = JSON.parse(
        storedUserCredentialJSON
      );
      if (storedUserCredential) {
        this.currentUser = storedUserCredential;
      }
    }
    return !!this.currentUser;
  }

  public async updateCurrentUser(): Promise<void> {
    if (!this.currentUser) {
      return;
    }
    this.serverService
      .getAccount(this.currentUser!.email!)
      .then(async (response: Response) => {
        if (response.ok) {
          const data = await response.json();
          this.currentUser!.badges = data.roles;
          localStorage.setItem(
            LocalStorageEnum.USER_CREDENTIAL,
            JSON.stringify(this.currentUser)
          );
          this.navbarService.navigateToHomePage();

          this.loggedIn = true;
          this.$loggedIn.next(this.loggedIn);
        }
      })
      .catch((error: string) => {
        this.dialogService.showDialog(
          '🫣 Utente non trovato',
          'Controlla di aver inserito correttamente email e password.',
          [
            {
              label: 'Chiudi',
              severity: 'primary',
              action: () => {
                this.dialogService.hideDialog();
              },
            },
          ]
        );
        this.loggedIn = false;
        this.$loggedIn.next(this.loggedIn);
        throw error;
      });
  }

  public isUserAdmin(): boolean {
    return this.currentUser?.id === environment.adminUserId;
  }
}
