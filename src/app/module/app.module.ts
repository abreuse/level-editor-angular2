import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {AppComponent} from "../component/app.component";
import {CanvasComponent} from "../component/canvas.component";
import {MenuComponent} from "../component/menu.component";
import {CanvasService} from "../service/canvas.service";


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CanvasComponent, MenuComponent ],
  bootstrap:    [ AppComponent ],
  providers :   [ CanvasService ]
})
export class AppModule { }
