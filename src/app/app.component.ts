import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule, RouterOutlet , FormsModule,
    HeaderComponent , RecipesComponent , ShoppingListComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  name = 'Mostafa';
  loadedFeature : string = 'recipe' ;

  onNavigate(feature:string){
    this.loadedFeature = feature ;
  }
}
