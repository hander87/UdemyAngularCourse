import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DatabaseService } from '../shared/database.service';
import { RecipeBookListService } from '../shared/recipe-book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private databaseService: DatabaseService
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
}
