import { NgModule, Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeBookListService } from '../shared/recipe-book.service'

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeBookListService]
})
export class RecipeBookComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipeBookListService: RecipeBookListService) {}

  ngOnInit() {
    this.recipeBookListService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      );
  }

}
