import { Component } from '@angular/core';

@Component({
  selector: 'level-editor',
  template: `
    <div class="wrapper">
      <app-canvas class="app-canvas" [width]="512" [height]="512">Canvas is loading...</app-canvas>
      <app-menu class="app-menu">Menu is loading...</app-menu>
    </div>
  `,
  styles: [
    `
      .wrapper{
        width: auto%;
        margin: 0 auto;
      }
      .app-canvas{
      }
      .app-menu{
        display: inline-block;
        vertical-align:top;
        width: auto;
    `
  ]
})
export class AppComponent {

}
