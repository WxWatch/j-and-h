import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeParentComponent } from './recipe-parent.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeFilterComponent } from './recipe-filter/recipe-filter.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './recipe-list/recipe-list-item/recipe-list-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecipeParentComponent,
    RecipeFilterComponent,
    RecipeListComponent,
    RecipeListItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RecipeRoutingModule
  ]
})
export class RecipeModule { }
