import { Component, OnInit } from '@angular/core';

import { RecipeBookListService } from '../shared/recipe-book.service'

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeBookListService]
})
export class RecipeBookComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }

}
