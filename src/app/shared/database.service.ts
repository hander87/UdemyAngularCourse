import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { map } from 'rxjs/operators';

import { RecipeBookListService } from './recipe-book.service';
import { Recipe } from '../recipe-book/recipe.model';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DatabaseService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeBookListService,
    private authService: AuthService
  ) {}
  fblink = 'https://udemyangularcourse-courseapp.firebaseio.com';

  saveRecipes() {
    const token = this.authService.getToken();
    return this.httpClient.put(this.fblink + '/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();

    return this.httpClient.get<Recipe[]>(this.fblink + '/recipes.json?auth=' + token)
      .pipe(map(
        (recipes) => {
          for (const recipe of recipes) {
            if (!recipe['ingridients']) {
              console.log(recipe);
              recipe['ingridients'] = [];
            }
          }
          return recipes;
        }
      ))
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }

}
