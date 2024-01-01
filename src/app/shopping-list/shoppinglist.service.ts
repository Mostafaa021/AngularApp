import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../Shared/Ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {
  //second Approach to update the shoppinglist with any changes 
  ingredientChanged = new EventEmitter<Ingredient[]>();
   private ingredients : Ingredient[]  =[
    new Ingredient('Apples' , 10) ,
    new Ingredient ('bananas' , 3),
    ];
  constructor() { }

  getIngredients() : Ingredient[]{
    //  return this.ingredients.slice() ==>  return copy of an array so any change or adding to array will not be reflected 
    // so there are 2 approaches => 
    //first approach is to pass reference from array ==> return this.ingredients
    //return this.ingredients
    // Second approach
    return this.ingredients.slice()
  }

  addIngredient(ingredient : Ingredient) {
    this.ingredients.push(ingredient)
    // Second Approach
     this.ingredientChanged.emit(this.ingredients.slice())
  }
  addIngriedents(ingredients : Ingredient[]){
    //Solution
    // for (let ingredient of ingredients ){
    //   this.addIngredient(ingredient)
    // }
    // another Solution
    this.ingredients.push(...ingredients)
    this.ingredientChanged.emit(this.ingredients.slice())
   

  }

}
