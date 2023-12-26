import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [CommonModule , RecipeItemComponent],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {
  recipes : Recipe[] | undefined ;
  
  constructor(private recipeServ : RecipeService ) {
   
  }
  ngOnInit(): void {
   this.recipes = this.recipeServ.getRecipes();
  }


}
