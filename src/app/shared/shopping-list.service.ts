import { Ingridient } from './ingridient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingridientsChanged = new Subject<Ingridient[]>();

  private ingridients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomatoes', 10)
  ];

  getShoppingIngridient() {
    return this.ingridients.slice();
  }

  addIngridient(ingridient: Ingridient) {
    this.ingridients.push(ingridient);
    this.ingridientsChanged.next(this.ingridients.slice());
  }

  addIngridients(ingridients: Ingridient[]) {
    // for (let ingridient of ingridients) {
    //     this.addIngridient(ingridient);
    // }
    this.ingridients.push(...ingridients);
    this.ingridientsChanged.next(this.ingridients.slice());
  }

}
