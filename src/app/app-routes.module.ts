import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';
// import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipebook', loadChildren: './recipe-book/recipe-book.module#RecipebookModule' }, // Lazy Loading!
  // {path: 'recipebook', loadChildren: './recipe-book/recipe-book.module#RecipebookModule', canLoad: [AuthGuard] }, // Protected route!
  {path: 'shoppinglist', component: ShoppingListComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules // Enable Preloads all Lazy Loading Modules in background
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
