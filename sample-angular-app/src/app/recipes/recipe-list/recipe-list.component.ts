import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //@Output() recipeWasSelected=new EventEmitter<Recipe>()
  recipes:Recipe[];

  constructor(private recipeService:RecipeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes=this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }

  onRecipeSelected(recipe:Recipe){
    console.log('clicked');
    //this.recipeWasSelected.emit(recipe);
  }

}
