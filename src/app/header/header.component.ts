import { Component , EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from '../Shared/dropdown.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports :[CommonModule , DropdownDirective],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  collapsed = true;
  @Output() featureSelected= new EventEmitter<string>();

  onSelect(feature:string) {
    this.featureSelected.emit(feature);

  }

}
