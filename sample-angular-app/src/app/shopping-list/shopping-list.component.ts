import { Component, OnInit } from '@angular/core';
import { Ingrdient } from '../shared/ingrdient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingrdient[];//=[
//   new Ingrdient("apple",20),
//   new Ingrdient("orange",30)
//  ];
 
  constructor(private shoppingListService:ShoppingListService ) { }

  ngOnInit(): void {
    this.ingredients=this.shoppingListService.getIngridents();
    this.shoppingListService.inngridientsChanged.subscribe((ingridients:Ingrdient[])=>this.ingredients=ingridients);
  }

  // onIngredientAdded(ingrdient:Ingrdient){
  //   this.ingredients.
  //   push(ingrdient);
  // }

}
