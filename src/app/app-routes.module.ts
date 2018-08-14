import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipebook', pathMatch: 'full'},
  {path: 'recipebook', component: RecipeBookComponent},
  {path: 'shoppinglist', component: ShoppingListComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
