import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeBookComponent } from './recipe-book.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const recipeRoutes: Routes = [
  {path: '', component: RecipeBookComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]},
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})

export class RecipeRoutingModule {

}
