import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Ingridient } from '../../shared/ingridient.model';
import {ShoppingListService} from '../../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') ingridientName: ElementRef;
  @ViewChild('amountInput') ingridientAmount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  addIngridient() {
    const ingName = this.ingridientName.nativeElement.value;
    const ingAmount = this.ingridientAmount.nativeElement.value;
    const newIngridient = new Ingridient(ingName,ingAmount);
    this.shoppingListService.addIngridient(newIngridient);
  }

  ngOnInit() {
  }

}
