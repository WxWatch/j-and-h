import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jh-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input() rating: number;

  stars: string[] = [];

  constructor() { }

  ngOnInit() {
    const inflatedRating = Math.round(this.rating * 2);
    for (let index = 0; index < Math.floor(inflatedRating / 2); index++) {
      this.stars.push('assets/star.svg');
    }

    if (inflatedRating % 2 === 1) {
      this.stars.push('assets/half-star.svg');
    }
  }

}
