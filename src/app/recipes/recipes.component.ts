import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [CommonModule , RecipesListComponent ,RecipeDetailsComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

  recipeSelected : Recipe| undefined ;

}
