import { Component, ElementRef,OnInit,ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ingredient } from '../../Shared/Ingredient.model';
import { ShoppinglistService } from '../shoppinglist.service';


@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput'  ) NameInputRef!: ElementRef;
  @ViewChild('amountInput') AmountInputRef!: ElementRef;
  
  constructor(private shoppingListServ : ShoppinglistService ){

  }

  ngOnInit(){
    

  }
  onAddItem(){
    const ingredientName = this.NameInputRef.nativeElement.value;
    const ingredientAmount = parseInt(this.AmountInputRef.nativeElement.value);
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.shoppingListServ.addIngredient(newIngredient);
  }
}
