import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe';

@Component({
  selector: 'jh-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.scss']
})
export class RecipeListItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
