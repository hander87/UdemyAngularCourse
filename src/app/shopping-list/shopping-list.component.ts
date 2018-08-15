import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'

import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingridients: Ingridient[];
  private subscription: Subscription;

  constructor( private shoppingListService: ShoppingListService ) {}

  ngOnInit() {
    this.ingridients = this.shoppingListService.getShoppingIngridient();
    this.subscription = this.shoppingListService.ingridientsChanged
      .subscribe(
          (ingredients: Ingridient[]) => {
            this.ingridients = ingredients;
          }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
