import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';


import { RecipeParentComponent } from './recipe-parent.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeFilterComponent } from './recipe-filter/recipe-filter.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeListItemComponent } from './recipe-list/recipe-list-item/recipe-list-item.component';
import { FormsModule } from '@angular/forms';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { RecipeFeaturedItemComponent } from './recipe-list/recipe-featured-item/recipe-featured-item.component';

@NgModule({
  declarations: [
    RecipeParentComponent,
    RecipeFilterComponent,
    RecipeListComponent,
    RecipeListItemComponent,
    RecipeDetailComponent,
    StarRatingComponent,
    RecipeFeaturedItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RecipeRoutingModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class RecipeModule { }
