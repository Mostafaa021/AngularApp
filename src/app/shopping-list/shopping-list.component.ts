import { Ingredient } from './../Shared/Ingredient.model';
import {  Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule,ShoppingEditComponent],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {

ingredients : Ingredient[]  =[
new Ingredient('Apples' , 10) ,
new Ingredient ('bananas' , 3),
];

 OnIngredientAdded(newIngredient : Ingredient ){
  this.ingredients.push(newIngredient);
}

}

