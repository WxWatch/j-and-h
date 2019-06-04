import { Injectable } from '@angular/core';
import { Recipe } from '../recipe';

const recipes: Recipe[] = [
  {
    name: 'Test Recipe 1',
    imageUrl: 'https://http.cat/404',
    rating: 3.5,
    note: 'Here is some information about this recipe. I don\'t know what information to put here. Should this maybe just be a description? Short and sweet? That can be our “blog” portion; maybe a reason why we added this or what caused us to search for it. Maybe we had a really good meal at some place or whatever. I feel like the description can be typed and stored as a HTML thing that we just put in here. That way I can format and add links when adding it I guess.',
    ingredients: [
      '1 Potato',
      'Okonomiyaki Sauce',
      '3/4 tsp Butter',
      '2 Onions',
      '5 tbsp Chicken Broth',
      '30 Green Onions, finely chopped'
    ],
    directions: [
      'Do lots of things.',
      'Do other stuff'
    ],
    state: 'wishlist',
    dateAdded: new Date(),
    url: 'http://purple.com',
    urlPrettyText: 'Purple'
  },
  {
    name: 'Test Recipe 2',
    imageUrl: 'https://http.cat/404',
    rating: 3,
    note: 'Hi mom',
    state: 'completed',
    dateAdded: new Date()

  },
  {
    name: 'Test Recipe 3',
    imageUrl: 'https://http.cat/404',
    rating: 3,
    note: 'Hi mom',
    state: 'wishlist',
    dateAdded: new Date()

  },
  {
    name: 'Test Recipe 4',
    imageUrl: 'https://http.cat/404',
    rating: 3,
    note: 'Here is some information about this recipe. I don\'t know what information to put here. Should this maybe just be a description? Short and sweet? That can be our “blog” portion; maybe a reason why we added this or what caused us to search for it. Maybe we had a really good meal at some place or whatever. I feel like the description can be typed and stored as a HTML thing that we just put in here. That way I can format and add links when adding it I guess.',
    state: 'completed',
    dateAdded: new Date()
  }
];

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  list(filter: string): Recipe[] {
    if (filter === 'all') {
      return recipes;
    }

    return recipes.filter(r => r.state === filter);
  }

  get(id: string): Recipe {
    return recipes[0];
  }

  constructor() { }
}
