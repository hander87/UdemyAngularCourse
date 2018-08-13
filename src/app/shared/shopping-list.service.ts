import { EventEmitter } from '@angular/core';

import { Ingridient } from './ingridient.model';

export class ShoppingListService {
  ingridientsChanged = new EventEmitter<Ingridient[]>();

  private ingridients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomatoes', 10)
  ];

  getShoppingIngridient() {
    return this.ingridients.slice();
  }

  addIngridient(ingridient: Ingridient) {
    this.ingridients.push(ingridient);
    this.ingridientsChanged.emit(this.ingridients.slice());
  }

}
