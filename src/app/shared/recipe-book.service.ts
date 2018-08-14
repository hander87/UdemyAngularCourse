import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from '../recipe-book/recipe.model';
import { Ingridient } from './ingridient.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Injectable()
export class RecipeBookListService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is desc for Test Resipe',
      'https://www.inspiredtaste.net/wp-content/uploads/2013/01/Roasted-Pepper-Pinwheel-Pastry-Recipe-2-1200.jpg',
      [
        new Ingridient('Apples', 4),
        new Ingridient('Bread', 1)
      ]
    ),
    new Recipe(
      'Test Recipe 2',
      'This is ANOTHER desc for Test Resipe',
      'https://minimalistbaker.com/wp-content/uploads/2016/08/AMAZING-Chickpea-SHAKSHUKA-1-Pot-30-minutes-so-much-plantprotein-vegan-glutenfree-plantbased-shakshuka-recipe-easy-healthy.jpg',
      [
        new Ingridient('Banana', 1),
        new Ingridient('Chockalate', 11),
      ]
    )
  ];

  constructor( private shoppingListService: ShoppingListService ) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addToShoppingList(recipeIngridients: Ingridient[]) {
    // for (let i = 0; i < recipeIngridients.length; i++) {
    //     this.recipeBookListService.addIngridient(recipeIngridients[i]);
    //}

    this.shoppingListService.addIngridients(recipeIngridients);
  }

}