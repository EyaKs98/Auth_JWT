// register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  username = '';
  password = '';
  role = 'user'; 
  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {}

  onSubmit() {
    this.authService.register(this.username, this.password, this.role).subscribe(
      () => {
        this.snackBar.open('Registration successful', 'Close', {
          duration: 3000,
        });
        this.router.navigate(['/login']); // Redirige vers la page de connexion après l'inscription
      },
      (error) => {
        this.snackBar.open('Registration failed', 'Close', {
          duration: 3000,
        });
      }
    );
  }
}
