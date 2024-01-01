import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Recipe } from '../recipe.model';
import { DropdownDirective } from '../../Shared/dropdown.directive';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports:[CommonModule , DropdownDirective],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe|undefined

  constructor(private recipeService: RecipeService) { 
    
  }

  ngOnInit() {
  
  }

   onAddToShoppingList() {
    if(this.recipe !== undefined){
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
      
    }
    
   }

}