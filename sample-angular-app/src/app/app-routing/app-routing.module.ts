import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  //{path:'recipes',loadChildren:'./recipes/recipes.module.ts#RecipeModule'}
  { path: 'recipes', loadChildren: () => import('../recipes/recipes.module').then(m => m.RecipesModule)},
  { path: 'shopping-list', loadChildren: () => import('../shopping-list/shopping-list.module').then(m => m.ShoppinglistModule)},
  { path: 'auth', loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)}
 
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
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
