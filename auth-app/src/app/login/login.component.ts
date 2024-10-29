import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router,     private snackBar: MatSnackBar
  ) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role);
        
        // Redirection basée sur le rôle
        if (response.role === 'admin') {
          this.router.navigate(['/admin']);
          console.log("admin");
        } else {
          this.router.navigate(['/dashboard']);
          console.log("user");

        }
      },
      (error) => {
        this.snackBar.open('Login failed', 'Close', {
          duration: 3000,
        });
        console.error('Login failed', error);
      }
    );
  }
}