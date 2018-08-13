import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeBookListService } from '../../../shared/recipe-book.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeBookListService: RecipeBookListService) { }

  ngOnInit() {
  }

  onSelected() {
    this.recipeBookListService.recipeSelected.emit(this.recipe);
  }

}
