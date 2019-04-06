import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jh-recipe-filter',
  templateUrl: './recipe-filter.component.html',
  styleUrls: ['./recipe-filter.component.scss']
})
export class RecipeFilterComponent implements OnInit {
  @Input() filter: string;

  onChange(event) {
    const filter = event.target.value;
    this.router.navigate(
      [],
      {
        relativeTo: this.route,
        queryParams: { state: filter }
      }
    );
  }

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

}
