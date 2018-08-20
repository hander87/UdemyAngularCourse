import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DatabaseService } from '../shared/database.service';
import { RecipeBookListService } from '../shared/recipe-book.service';
import { AuthService } from '../auth/auth.service';

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
        (response: Response) => console.log(response)
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
