import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  dropDownStatus = false;

  @HostBinding('class.open') isTrue = false;

  @HostListener('click') mouseclick(eventData: Event) {
    this.isTrue = !this.isTrue;

  }
}
