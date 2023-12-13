import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [CommonModule , RecipeItemComponent],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {
  @Output() RecipeWasSelected = new EventEmitter<Recipe>();
  @Input() recipes: Recipe[] = [
    new Recipe('A Test Recipe1', ' First Recipe ', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe2', ' second Recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe3', ' Third Recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe4', ' Fourth Recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

 onRecipeSelected(recipe : Recipe) {
  this.RecipeWasSelected.emit(recipe);
 }
}
