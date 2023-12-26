import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';



@Directive({
  selector: '[appDropdown]' , 
  standalone: true ,
})
export class DropdownDirective {

  private isOpen = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  
  @HostListener('click') toggleDropdown() {
    this.isOpen = !this.isOpen;
    this.updateDropdownVisibility();
  }
  
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.isOpen = false;
      this.updateDropdownVisibility();
    }
  }
  
  private updateDropdownVisibility() {
    const dropdownList = this.el.nativeElement.nextElementSibling;
    if (dropdownList) {
      const displayValue = this.isOpen ? 'block' : 'none';
      this.renderer.setStyle(dropdownList, 'display', displayValue);
    }
  }

} 


