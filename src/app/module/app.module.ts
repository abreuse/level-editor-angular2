import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {AppComponent} from "../component/app.component";
import {CanvasComponent} from "../component/canvas.component";
import {MenuComponent} from "../component/menu.component";
import {CanvasService} from "../service/canvas.service";
/*import { Autosize } from '../../../node_modules/angular2-autosize/src/autosize.directive.js';*/

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CanvasComponent, MenuComponent/*, Autosize*/ ],
  bootstrap:    [ AppComponent ],
  providers :   [ CanvasService ]
})
export class AppModule { }
