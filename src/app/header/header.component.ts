import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() topmenuClicked: EventEmitter<string> = new EventEmitter();

  @Input() pageStatus: string;

  constructor() { }

  onSelect(site) {
    this.topmenuClicked.emit(site);
  }

  ngOnInit() {
  }

}
