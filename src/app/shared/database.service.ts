import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { RecipeBookListService } from './recipe-book.service';
import { Recipe } from '../recipe-book/recipe.model';

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
    return this.http.get(this.fblink + '/recipes.json')
      .subscribe(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
