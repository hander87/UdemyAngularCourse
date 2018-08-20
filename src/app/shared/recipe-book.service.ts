import { Injectable } from '@angular/core';

import { Recipe } from '../recipe-book/recipe.model';
import { Ingridient } from './ingridient.model';
import { ShoppingListService } from '../shared/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeBookListService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pie (example)',
      'This is an example of recipes you can create',
      'https://image.flaticon.com/icons/svg/135/135564.svg',
      [
        new Ingridient('Apples', 4),
        new Ingridient('Dough', 1),
        new Ingridient('Butter', 1),
      ]
    )
  ];

  constructor( private shoppingListService: ShoppingListService ) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addToShoppingList(recipeIngridients: Ingridient[]) {
    this.shoppingListService.addIngridients(recipeIngridients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
