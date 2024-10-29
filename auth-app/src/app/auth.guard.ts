// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;  // Autorise l'accès si l'utilisateur est authentifié
    } else {
      this.router.navigate(['/login']);  // Redirige vers la page de connexion si non authentifié
      return false;
    }
  }
}