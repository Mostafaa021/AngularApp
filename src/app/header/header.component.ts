import { Component , EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  collapsed = true;
  @Output() featureSelected= new EventEmitter<string>();

  onSelect(feature:string) {
    this.featureSelected.emit(feature);

  }

}
