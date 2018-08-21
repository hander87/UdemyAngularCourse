import { Component } from '@angular/core';

import { DatabaseService } from '../../shared/database.service';
import { AuthService } from '../../auth/auth.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private databaseService: DatabaseService,
    private authService: AuthService
  ) { }

  saveData() {
    return this.databaseService.saveRecipes()
      .subscribe(
        (response: HttpEvent<Object>) => {
          console.log(response.type === HttpEventType.Sent);
        }
      );
  }

  fetchData() {
    this.databaseService.getRecipes();
  }

  checkAuth() {
    return this.authService.isAuthenticated();
  }

  onLogout() {
    this.authService.logout();
  }

}
