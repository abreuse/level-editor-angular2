import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {CanvasComponent} from "./canvas.component";
import {MenuComponent} from "./menu.component";
import {CanvasService} from "./canvas.service";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ CanvasComponent, MenuComponent ],
  bootstrap:    [ CanvasComponent, MenuComponent  ],
  providers :   [ CanvasService]
})
export class AppModule { }
