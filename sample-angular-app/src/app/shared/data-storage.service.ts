import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import {map, tap, take, exhaustMap} from 'rxjs/operators';
import { Ingrdient } from './ingrdient.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient , private recipeService: RecipeService, private authService: AuthService) { }

  storeRecipe() {
    const recipe = this.recipeService.getRecipes();
    return this.http.put('https://recipe-book-28cd5.firebaseio.com/recipes.json', recipe).subscribe(response=>{
      console.log(response);
    });
  }

  fetchRecipe(){
    return this.http.get<Recipe[]>('https://recipe-book-28cd5.firebaseio.com/recipes.json').pipe(map(recipes => {
      return recipes.map(recipe => {
        return {...recipe, ingridients: recipe.ingridients ? recipe.ingridients : [] }
      });
    }) ,
    tap(recipes => {
      console.log(recipes);
      this.recipeService.setRecipe(recipes);
    }));


    // return this.http.get<Recipe[]>('https://recipe-book-28cd5.firebaseio.com/recipes.json').pipe(
    //   map(recipes => {
    //     return recipes.map(recipe => {
    //       return {...recipe, ingridients: recipe.ingridients ? recipe.ingridients : [] }
    //     });
    //   }) ,
    //   tap(recipes => {
    //     console.log(recipes);
    //     this.recipeService.setRecipe(recipes);
    //   })
    // );
  }
}
