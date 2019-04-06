import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const defaultFilter = 'all';

@Component({
  selector: 'jh-recipe-parent',
  templateUrl: './recipe-parent.component.html',
  styleUrls: ['./recipe-parent.component.scss']
})
export class RecipeParentComponent implements OnInit {
  filter = defaultFilter;

  onFilterChanged(filter) {
    this.filter = filter || defaultFilter;
  }

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.onFilterChanged(params.state);
    });
  }

  ngOnInit() {
  }

}
