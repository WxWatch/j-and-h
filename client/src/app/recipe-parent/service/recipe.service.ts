import { Injectable } from '@angular/core';
import { Recipe } from '../recipe';

const recipes: Recipe[] = [
  {
    name: 'Test Recipe 1',
    imageUrl: 'https://http.cat/404',
    rating: 3,
    note: 'Hi mom',
    state: 'wishlist'
  },
  {
    name: 'Test Recipe 2',
    imageUrl: 'https://http.cat/404',
    rating: 3,
    note: 'Hi mom',
    state: 'completed'
  },
  {
    name: 'Test Recipe 3',
    imageUrl: 'https://http.cat/404',
    rating: 3,
    note: 'Hi mom',
    state: 'wishlist'
  },
  {
    name: 'Test Recipe 4',
    imageUrl: 'https://http.cat/404',
    rating: 3,
    note: 'Hi mom',
    state: 'completed'
  }
];

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  list(filter: string) {
    if (filter === 'all') {
      return recipes;
    }

    return recipes.filter(r => r.state === filter);
  }

  constructor() { }
}
