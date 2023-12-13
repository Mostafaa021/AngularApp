import { RecipesListComponent } from './../recipes-list.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
  @Input() recipe : Recipe | undefined ;
  @Output() RecipeSelected  = new EventEmitter<void>() ;
  constructor() {

  }

  onSelect(){
    this.RecipeSelected.emit();
  }
}
