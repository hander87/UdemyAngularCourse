import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGRIDIENT = 'ADD_INGRIDIENT';

export class AddIngridient implements Action {
  readonly type = ADD_INGRIDIENT;
  payload: Ingredient;
}

export type ShoppingListActions = AddIngridient;
