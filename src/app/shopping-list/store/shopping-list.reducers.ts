
import * as ShoppingListActions from './shopping-list.actions';

import { Action } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';

const initialState = {
  ingridients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ]
};

export function shoppingListRecucer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGRIDIENT:
      return {
        ...state,
        ingridients: [...state.ingridients, action.payload]
      };
      default:
        return state;
  }
}
