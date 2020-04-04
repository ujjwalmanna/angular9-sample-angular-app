import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.recipe = this.recipeService.getRecipe(this.id);
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"]
      this.recipe = this.recipeService.getRecipe(this.id);
    })
  }
  onEditRecipe() {
    //this.router.navigate(['edit'],{relativeTo:this.route})
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route })
  }

  onAddToShoppingList(): void {

    this.recipeService.addIngridientToShoppingLists(this.recipe.ingridients)
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['/recipes'])
  }

}
