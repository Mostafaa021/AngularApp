import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports :[CommonModule],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe : Recipe | undefined ;
  
  constructor(private recipeServ : RecipeService) {

  }
  onSelect(){
    this.recipeServ.RecipeSelected.emit(this.recipe);
  }

  
}
