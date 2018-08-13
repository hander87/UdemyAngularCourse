import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeBookListService } from '../../shared/recipe-book.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeBookListService: RecipeBookListService) { }

  addToShoppingList() {
    this.recipeBookListService.addToShoppingList(this.recipe.ingridients);
  }

  ngOnInit() {
  }

}
