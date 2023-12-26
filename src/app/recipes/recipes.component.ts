import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule , RecipesListComponent ,RecipeDetailsComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css' , 
  providers : [RecipeService]
})
export class RecipesComponent implements OnInit{

  recipeSelected : Recipe| undefined ;

  constructor(private RecipeServ : RecipeService){

  }
  ngOnInit(){
  this.RecipeServ.RecipeSelected.subscribe(
    (recipe : Recipe) => {
    this.recipeSelected = recipe
    }
  )
  }

}
