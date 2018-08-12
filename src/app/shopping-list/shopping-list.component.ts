import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomatoes', 10)
  ];

  shoppingIngridient(newIngridient: Ingridient) {
    this.ingridients.push(newIngridient);
    console.log(this.ingridients);
  }

  constructor() { }

  ngOnInit() {
  }

}
