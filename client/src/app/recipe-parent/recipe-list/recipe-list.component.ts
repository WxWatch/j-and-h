import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'jh-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnChanges {
  @Input() filter: string;

  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnChanges(changes: SimpleChanges): void {
    const filter = changes.filter.currentValue;
    this.recipes = this.recipeService.list(filter);
  }

  ngOnInit() {
  }

}
