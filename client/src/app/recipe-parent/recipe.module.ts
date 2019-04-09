import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeParentComponent } from './recipe-parent.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeFilterComponent } from './recipe-filter/recipe-filter.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './recipe-list/recipe-list-item/recipe-list-item.component';
import { FormsModule } from '@angular/forms';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  declarations: [
    RecipeParentComponent,
    RecipeFilterComponent,
    RecipeListComponent,
    RecipeListItemComponent,
    RecipeDetailComponent,
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RecipeRoutingModule
  ]
})
export class RecipeModule { }
