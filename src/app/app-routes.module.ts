import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipebook', pathMatch: 'full'},
  {path: 'recipebook', component: RecipeBookComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: ':id', component: RecipeDetailComponent}
  ]},
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
