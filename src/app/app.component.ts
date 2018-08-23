import { Component } from '@angular/core';
import { trigger , state , style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('dState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(400)),
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)',
      })),
      transition('normal => highlighted', animate(200)),
      transition('highlighted => normal', animate(900)),
      transition('shrunken <=> *', [
        style({
          borderRadius: '0',
          'background-color': 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ]),
    ]),
    // List Animations
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ]),
    ]),
  ]

})
export class AppComponent {
  dstate = 'normal';
  wildstate = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

    onAnimate() {
      this.dstate === 'normal' ? this.dstate = 'highlighted' : this.dstate = 'normal';
      this.wildstate === 'normal' ? this.wildstate = 'highlighted' : this.wildstate = 'normal';
    }

    onShrink() {
      this.wildstate = 'shrunken';
    }

    onAdd(item) {
      this.list.push(item);
    }

    onDelete(item) {
      this.list.splice(this.list.indexOf(item), 1);
    }

    animationStarted(event) {
      console.log(event);
    }

    animationEnded(event) {
      console.log(event);
    }
}
