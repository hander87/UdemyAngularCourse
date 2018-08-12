import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  dropDownStatus = false;

  @HostBinding('class') class = '';

  @HostListener('click') mouseclick(eventData: Event) {
    if (this.dropDownStatus == false) {
      this.class = 'open';
      this.dropDownStatus = true;
    } else {
      this.class = '';
      this.dropDownStatus = false;
    }

  }
}
