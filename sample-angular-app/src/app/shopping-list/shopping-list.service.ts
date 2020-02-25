import { Injectable, EventEmitter, Output } from '@angular/core';
import { Ingrdient } from '../shared/ingrdient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients:Ingrdient[]=[
    new Ingrdient("apple",20),
    new Ingrdient("orange",30)
   ];

   @Output() inngridientsChanged=new EventEmitter<Ingrdient[]>();
  constructor() { }

  getIngridents(){
    return this.ingredients.slice();
  }

  addIngridient(ingrdient:Ingrdient){
    this.ingredients.push(ingrdient);
    this.inngridientsChanged.emit(this.ingredients.slice());

  }

  addIngridients(ingrdients:Ingrdient[]){
    // for (let ingrdient of ingrdients)
    //   this.ingredients.push(ingrdient);  

    this.ingredients.push(...ingrdients);
    this.inngridientsChanged.emit(this.ingredients.slice());
  }
}
