import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { RecipeBookListService } from './recipe-book.service';

@Injectable()
export class DatabaseService {
  constructor(
    private http: Http,
    private recipeService: RecipeBookListService
  ) {}
  fblink = 'https://udemyangularcourse-courseapp.firebaseio.com';

  saveRecipes() {
    return this.http.put(this.fblink + '/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get(this.fblink + '/recipes.json');
  }
}
