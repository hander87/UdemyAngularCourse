import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

import { RecipeBookListService } from './recipe-book.service';
import { Recipe } from '../recipe-book/recipe.model';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DatabaseService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeBookListService,
    private authService: AuthService
  ) {}
  fblink = 'https://udemyangularcourse-courseapp.firebaseio.com';

  // const headers = new HttpHeaders().set('Authorization',  'Bearer *TOKEN CODE*').append('...More headers');

  saveRecipes() {
    const token = this.authService.getToken();
    return this.httpClient.put(this.fblink + '/recipes.json?auth=' + token, this.recipeService.getRecipes(), {
      observe: 'body',
      // headers: headers
    });
  }

  getRecipes() {
    const token = this.authService.getToken();

    // return this.httpClient.get<Recipe[]>(this.fblink + '/recipes.json?auth=' + token)
    return this.httpClient.get<Recipe[]>(this.fblink + '/recipes.json?auth=' + token, {
        observe: 'body',
        responseType: 'json'
      })
      .pipe(map(
        (recipes) => {
          console.log(recipes); // This gives FULL HttpResponse! (body, header etc)
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
