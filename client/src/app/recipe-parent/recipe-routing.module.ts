import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeParentComponent } from './recipe-parent.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipeParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
