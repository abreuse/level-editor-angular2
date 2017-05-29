import { Component } from '@angular/core';

@Component({
  selector: 'level-editor',
  template: `    
    <app-canvas [width]="256" [height]="256">Canvas is loading...</app-canvas>
    <app-menu>Menu is loading...</app-menu>
  `
})
export class AppComponent {

}
