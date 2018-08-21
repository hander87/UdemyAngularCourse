import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

import { RecipeBookListService } from './recipe-book.service';
import { Recipe } from '../recipe-book/recipe.model';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class DatabaseService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeBookListService,
    private authService: AuthService
  ) {}
  fblink = 'https://udemyangularcourse-courseapp.firebaseio.com';


  saveRecipes() {
    // const headers = new HttpHeaders().set('Authorization',  'Bearer *TOKEN CODE*').append('...More headers');

    const token = this.authService.getToken();

    // return this.httpClient.put(this.fblink + '/recipes.json', this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token)
    //   // headers: headers
    // });

    const req = new HttpRequest('PUT', this.fblink, this.recipeService.getRecipes(), {
      reportProgress: true, // Gets the download PROGRESS // Type 1 = download, 2 = upload
      params: new HttpParams().set('auth', token)
    });
    return this.httpClient.request(req);

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
