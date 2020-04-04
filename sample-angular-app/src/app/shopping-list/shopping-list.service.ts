import { Injectable, EventEmitter, Output } from '@angular/core';
import { Ingrdient } from '../shared/ingrdient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingrdient[] = [
    new Ingrdient('apple', 20),
    new Ingrdient('orange', 30)
  ];

  inngridientsChanged = new Subject<Ingrdient[]>();
  startedEditing = new Subject<number>();
  constructor() { }

  getIngridents() {
    return this.ingredients.slice();
  }

  getIngrident(index: number) {
    return this.ingredients[index];
  }

  addIngridient(ingrdient: Ingrdient) {
    this.ingredients.push(ingrdient);
    this.inngridientsChanged.next(this.ingredients.slice());

  }

  addIngridients(ingrdients: Ingrdient[]) {
    // for (let ingrdient of ingrdients)
    //   this.ingredients.push(ingrdient);  

    this.ingredients.push(...ingrdients);
    this.inngridientsChanged.next(this.ingredients.slice());
  }

  updateIngridient(index: number, ingrdient: Ingrdient) {
    this.ingredients[index] = ingrdient;
    this.inngridientsChanged.next(this.ingredients.slice());
  }

  deleteIngridient(index: number) {
    this.ingredients.splice(index,1);
    this.inngridientsChanged.next(this.ingredients.slice());
  }
}
