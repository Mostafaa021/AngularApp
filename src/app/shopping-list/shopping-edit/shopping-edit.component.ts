import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ingredient } from '../../Shared/Ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput'  ) NameInputRef!: ElementRef;
  @ViewChild('amountInput') AmountInputRef!: ElementRef;
  @Output() ingredientadded = new EventEmitter<Ingredient>();


  onAddItem(){
    const ingredientName = this.NameInputRef.nativeElement.value;
    const ingredientAmount = parseInt(this.AmountInputRef.nativeElement.value);
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.ingredientadded.emit(newIngredient);

  }
}
