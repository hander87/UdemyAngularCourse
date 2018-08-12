import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { Ingridient } from '../../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput') ingridientName: ElementRef;
  @ViewChild('amountInput') ingridientAmount: ElementRef;

  @Output() shoppingIngridientEvent = new EventEmitter<Ingridient>();

  constructor() { }

  addIngridient() {
    const ingName = this.ingridientName.nativeElement.value;
    const ingAmount = this.ingridientAmount.nativeElement.value;
    const newIngridient = new Ingridient(ingName,ingAmount);

    this.shoppingIngridientEvent.emit(newIngridient);
  }

  ngOnInit() {
  }

}
