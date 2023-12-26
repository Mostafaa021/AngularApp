import { Ingredient } from './../Shared/Ingredient.model';
import {  Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppinglistService } from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports : [CommonModule,ShoppingEditComponent] ,
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  providers : [ShoppinglistService]
})
export class ShoppingListComponent implements OnInit {

ingredients : Ingredient[] = []


constructor(private shoppingListServ : ShoppinglistService){

}
  ngOnInit(): void {
   this.ingredients = this.shoppingListServ.getIngredients();
   // Second approach
  //  this.shoppingListServ.ingredientChanged.subscribe(
  //   (ingredients : Ingredient[])=> {
  //     this.ingredients= ingredients
  //   }
  //  )
   
  }

 


}

