import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeParentComponent } from './recipe-parent.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipeParentComponent
  },
  {
    path: 'recipes/:id',
    component: RecipeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
