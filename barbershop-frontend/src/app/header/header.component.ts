import { Router } from '@angular/router';
import { Component, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  collapsed = true;
  isAuthenticated = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/');

    location.reload();
  }
}
