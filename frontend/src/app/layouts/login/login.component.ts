import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BasePageComponent } from 'src/app/shared/components/base-page/base-page.component';

@Component({
  selector: 'v2d-login',
  imports: [ProgressSpinnerModule, BasePageComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  protected email: string = '';
  protected password: string = '';

  constructor(
    protected readonly authService: AuthService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.email = this.route.snapshot.paramMap.get('email') || '';
    this.password = this.route.snapshot.paramMap.get('password') || '';
  }

  public ngOnInit(): void {
    this.authService
      .signOut()
      .then(() => {
        this.authService
          .signInWithEmailAndPassword(this.email, this.password)
          .catch((error) => {
            console.error('Login error:', error);
            this.router.navigate(['/signin']);
          });
      })
      .catch((error) => {
        console.error('Sign-out error:', error);
        this.router.navigate(['/signin']);
      });
  }
}
