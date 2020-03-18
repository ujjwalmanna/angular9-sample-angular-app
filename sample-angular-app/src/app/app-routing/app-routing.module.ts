import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from '../recipes/recipes.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {path:'',redirectTo:'/recipes',pathMatch:'full'},
  {path:'recipes',component:RecipesComponent,children:[
    {path:'',component:RecipeStartComponent},
    {path:'new',component:RecipeEditComponent},
    {path:':id',component:RecipeDetailComponent},   
    {path:':id/edit',component:RecipeEditComponent}
  ]},
  {path:'shopping-list',component:ShoppingListComponent},

  // {path:'users',component:UsersComponent,children:[
  //   {path:':id/:name',component:UserComponent}
  // ]},
  
  // {path:'servers',
  //   //canActivate:[AuthGuard],
  //   canActivateChild:[AuthGuard],
  //   component:ServersComponent,children:[
  //   {path:':id',component:ServerComponent,resolve:{server:ServerResolverService}},
  //   {path:':id/edit',component:EditServerComponent,canDeactivate:[CanDeactivateGuard]}
  // ]},
  // //{path:'not-found',component:PageNotFoundComponent},
  // {path:'not-found',component:ErrorPageComponent,data:{message:'PAge not found!'}},
  // {path:'**',redirectTo:'not-found'}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
