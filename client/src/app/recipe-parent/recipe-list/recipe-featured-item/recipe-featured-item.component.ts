import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe';

@Component({
  selector: 'jh-recipe-featured-item',
  templateUrl: './recipe-featured-item.component.html',
  styleUrls: ['./recipe-featured-item.component.scss']
})
export class RecipeFeaturedItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
