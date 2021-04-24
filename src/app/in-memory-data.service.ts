import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Dr Nice',puntos:21 },
      { id: 2, name: 'Narco',puntos:2 },
      { id: 3, name: 'Bombasto',puntos:3 },
      { id: 4, name: 'Celeritas' ,puntos:4},
      { id: 5, name: 'Magneta',puntos:5 },
      { id: 6, name: 'RubberMan' ,puntos:7},
      { id: 7, name: 'Dynama' ,puntos:9},
      { id: 8, name: 'Dr IQ',puntos:10 },
      { id: 9, name: 'Magma',puntos:12 },
      { id: 10, name: 'Tornado',puntos:15 }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}