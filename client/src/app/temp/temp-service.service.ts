import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempServiceService {

  getMyStuff() {
    return 'My Stuff';
  }

  constructor() { }
}
