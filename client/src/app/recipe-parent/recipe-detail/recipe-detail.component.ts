import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { switchMap } from 'rxjs/operators';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'jh-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.recipe = this.recipeService.get(params.get('id'));
    });
  }

}
