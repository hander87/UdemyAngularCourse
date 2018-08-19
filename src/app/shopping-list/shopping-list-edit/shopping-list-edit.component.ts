import { Component, OnInit} from '@angular/core';

import { Ingridient } from '../../shared/ingridient.model';
import {ShoppingListService} from '../../shared/shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {


  constructor(private shoppingListService: ShoppingListService) { }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngridient = new Ingridient(value.name, value.amount);
    this.shoppingListService.addIngridient(newIngridient);
  }

  ngOnInit() {
  }

}
