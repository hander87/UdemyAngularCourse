import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeBookListService } from '../../shared/recipe-book.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(
    private recipeBookListService: RecipeBookListService,
    private route: ActivatedRoute) { }



  addToShoppingList() {
    this.recipeBookListService.addToShoppingList(this.recipe.ingridients);
  }

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          const id = +params['id']
          this.recipe = this.recipeBookListService.getRecipe(id);
        }
      );

  }

}
