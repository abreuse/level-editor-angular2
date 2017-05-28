import { Component } from "@angular/core";
import {CanvasService} from "./canvas.service";
import {Sprite} from "./sprite";

@Component({
  selector: "app-menu",
  template: `<section class="menu">
                <div class="form canvas-name">
                  <h2>Level properties</h2>
                  <li>
                    <label>Name</label> 
                    <input #canvasName/>
                  </li>
                  <li>
                    <input type="submit" value="Update" (click)="setCanvasName(canvasName.value)"/>
                  </li>
                </div>
                <div class="form sprite-creator">
                  <h2>Sprites creator</h2>
                  <li>
                    <label>Name</label>
                    <input #name>
                  </li>
                  <li>
                    <label>Code</label>
                    <input #code>
                  </li>
                  <li>
                    <input type='submit' value='Create' (click)="addSprite(name.value, code.value)"/>
                   </li>
                </div>
              </section>`,
  styles: [`
              .menu{
                  text-align:center;
                  width: 80%;
                  margin: 0 auto;
              }
              .canvas-name,
              .sprite-creator{
                  display: inline-block;
                  vertical-align:top;
                  width: 20%;
                  border: 2px solid;
                  border-radius: 10px;
              }
              h2 {
                font-size: 18px;
                color: #248f8f;
              }
              .form {
                margin:10px auto;
                padding: 20px 12px 10px 20px;
                font: 13px "Lucida Sans Unicode", "Lucida Grande", sans-serif;
              }
              .form li {
                padding: 0;
                display: block;
                list-style: none;
                margin: 10px 0 0 0;
              }
              .form label {
                margin:0 0 3px 0;
                padding:0px;
                display:block;
                font-weight: bold;
              }
              .form input[type=submit] {
                background: #4B99AD;
                padding: 8px 15px 8px 15px;
                border: none;
                color: #fff;
              }
              .form input[type=submit]:hover {
                background: #4691A4;
                box-shadow:none;
                -moz-box-shadow:none;
                -webkit-box-shadow:none;
              }
          `]
})

export class MenuComponent{
  constructor(private canvasService: CanvasService) {}

  setCanvasName(name: string)
  {
    this.canvasService.setName(name);
  }

  addSprite(name: string, code:string): void
  {
    this.canvasService.addSprite(new Sprite(name, code));
  }
}
