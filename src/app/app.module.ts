import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShoppingListService } from './shared/shopping-list.service';
import { AppRoutingModule } from './app-routes.module';
import { RecipeBookListService } from './shared/recipe-book.service';
import { DatabaseService } from './shared/database.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    ShoppingListModule,
    AuthModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    ShoppingListService,
    RecipeBookListService,
    DatabaseService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
