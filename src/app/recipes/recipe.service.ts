import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../Shared/Ingredient.model';
import { ShoppinglistService } from '../shopping-list/shoppinglist.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService { 
   private recipes: Recipe[] = [
    new Recipe('A Test Recipe1', ' First Recipe ', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg' 
    ,[ new Ingredient('ingredient1' , 1), new Ingredient('ingredient2' , 2)]),
    new Recipe('A Test Recipe2', ' second Recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ,[ new Ingredient('ingredient1' , 1), new Ingredient('ingredient2' , 2)]),
    new Recipe('A Test Recipe3', ' Third Recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
     , [ new Ingredient('ingredient1' , 1), new Ingredient('ingredient2' , 2)]),
    new Recipe('A Test Recipe4', ' Fourth Recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ,[ new Ingredient('ingredient1' , 1), new Ingredient('ingredient2' , 2)])
  ];

  public RecipeSelected  = new EventEmitter<Recipe>() ;
  constructor(private shoppingListServ:ShoppinglistService) { }

  getRecipes()  {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients:Ingredient[]) {
    this.shoppingListServ.addIngriedents(ingredients)
  }

}
