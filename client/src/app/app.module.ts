import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeModule } from './recipe-parent/recipe.module';
import { RecipeRoutingModule } from './recipe-parent/recipe-routing.module';
import { CallbackComponent } from './auth/callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
