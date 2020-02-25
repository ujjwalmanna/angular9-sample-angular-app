import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingrdient } from '../shared/ingrdient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected=new EventEmitter<Recipe>();

  private recipes:Recipe[]=[
    new Recipe("Tasty Schintezel",
      "A super testy food.",
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG",
      [
        new Ingrdient('Meat',1),
        new Ingrdient('French Fries',15)
      ]),
    new Recipe("Big Burger","Another yummy food",
        "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg",
        [
          new Ingrdient('Buns',2),
          new Ingrdient('Meat',1)
        ])
  ]
  
  constructor(private shoppingListService:ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngridientToShoppingLists(ingrdients:Ingrdient[]){
    this.shoppingListService.addIngridients(ingrdients);
  }
}
