import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingrdient } from '../shared/ingrdient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // private recipes: Recipe[] = [
  //   new Recipe("Tasty Schintezel",
  //     "A super testy food.",
  //     "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG",
  //     [
  //       new Ingrdient('Meat', 1),
  //       new Ingrdient('French Fries', 15)
  //     ]),
  //   new Recipe("Big Burger", "Another yummy food",
  //     "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg",
  //     [
  //       new Ingrdient('Buns', 2),
  //       new Ingrdient('Meat', 1)
  //     ])
  // ]
  private recipes: Recipe[] = [];
  recipeChanged = new Subject<Recipe[]>();
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  setRecipe(recipes: Recipe[]) {
    this.recipes = recipes ; 
    this.recipeChanged.next(this.recipes.slice());
  }

  addIngridientToShoppingLists(ingrdients: Ingrdient[]) {
    this.shoppingListService.addIngridients(ingrdients);
  }

  updateRecipe(id: number, recipe: Recipe) {
    this.recipes[id] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
