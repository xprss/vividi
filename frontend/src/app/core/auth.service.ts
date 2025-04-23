import { Injectable } from '@angular/core';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  User,
  signOut,
  UserCredential,
  Auth,
} from '@firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: User | null = null;
  private auth: Auth = getAuth();

  constructor() {}

  /**
   * This method provides the email/password sign-in mechanism towards Google Firebase Authentication.
   * @param email The user email
   * @param password The user password
   */
  public async signInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<void> {
    const result: UserCredential = await signInWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    this.currentUser = result.user;
  }

  /**
   * This method provides the Google Authentication sign-in mechanism.
   */
  public async signInWithGoogleAuthProvider(): Promise<void> {
    const provider = new GoogleAuthProvider();
    const result: UserCredential = await signInWithPopup(this.auth, provider);
    this.currentUser = result.user;
  }

  /**
   * Sign-out method.
   */
  public async signOut(): Promise<void> {
    await signOut(this.auth);
    this.currentUser = null;
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
  public getUser(): User | null {
    return this.currentUser;
  }

  /**
   * This method retrieves whether the user is logged in or not.
   * @returns whether the user is logged in or not
   */
  public isLoggedIn(): boolean {
    return !!this.currentUser;
  }
}
