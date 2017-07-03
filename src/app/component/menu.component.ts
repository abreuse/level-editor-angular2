import { Component, Input } from "@angular/core";
import {CanvasService} from "../service/canvas.service";
import {Sprite} from "../pojo/sprite";
import {CanvasComponent} from "./canvas.component";
import {SPRITES} from "../pojo/sprites";
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: "app-menu",
  template: `
              <section class="menu">
                <div class="form canvas-name">
                  <h2>Level properties</h2>
                  <li>
                    <label>Name</label> 
                    <input #canvasName value="My First Level"/>
                  </li>
                  <li>
                    <label>Size</label> 
                    <input #canvasSize value="512"/>
                  </li>
                  <li>
                    <input type="submit" value="Update" (click)="updateCanvas(canvasName.value, canvasSize.value)"/>
                  </li>
                </div>
                <div class="form sprite-selector">
                  <h2>Sprites selector</h2>
                     <ul class="sprites">
                        <li *ngFor="let sprite of sprites" [class.selected]="sprite === selectedSprite" (click)="onSelect(sprite)">
                          <span><img src="{{sprite.url}}"/> {{sprite.name}}</span>
                        </li>
                      </ul>
<!--                  <li>
                    <input type='submit' value='Create' (click)="addSprite(name.value, code.value)"/>
                  </li>-->
                  <h2>Add a sprite</h2>
                  <li>
                    <label>Name</label> 
                    <input #spriteName value=""/>
                  </li>
                  <li>
                    <input type="submit" value="Add" (click)="addSprite(spriteName.value)" (click)="spriteName.value=''"/>
                  </li>
                </div>
              </section>
               <div class="form generate-for-unity">
                  <li>
                    <input type="submit" value="Generate JSON for Unity" (click)="generateForUnity()"/>
                  </li>
                  <textarea rows="10" cols="50">{{wrapper | json}}</textarea>
                  <!--<a title="Download JSON" [href]="downloadJsonHref" download="download.json"></a>-->
                </div>`,
  styles: [`
              .menu{
                  text-align:center;
                  width: 80%;
                  margin: 0 auto;
              }
              .generate-for-unity{
                /*position: relative;*/
                width: auto;
              }
              .canvas-name,
              .sprite-selector{
                  display: inline-block;
                  vertical-align:top;
                  width: auto;
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
              .selected {
                background-color: #CFD8DC !important;
                color: white;
              }
              .sprites {
                margin: 0 0 2em 0;
                list-style-type: none;
                padding: 0;
                width: auto;
              }
              .sprites li {
                cursor: pointer;
                text-align: center;
                position: relative;
                left: 0;
                background-color: #EEE;
                margin: 20px;
                padding: 20px;
                height: 1.6em;
                border-radius: 4px;
              }
              .sprites li.selected:hover {
                background-color: #BBD8DC !important;
                color: white;
              }
              .sprites li:hover {
                color: #607D8B;
                background-color: #DDD;
                left: .1em;
              }
              .sprites .text {
                position: relative;
                top: -3px;
              }
          `],
})

export class MenuComponent{

  constructor(private canvasService: CanvasService) {}

  //TODO: spriteService to get SPRITES
  sprites = SPRITES;
  selectedSprite: Sprite;
  wrapper: any;
  alreadyRandomize: number[];

  addSprite(name: string)
  {
    this.sprites.push(new Sprite(name, name.charAt(0), "app/sprites/" + this.random(1, 9) + ".png"));
    console.log(JSON.stringify(this.sprites));
  }

  random(min: number, max: number): number
  {
    if(this.alreadyRandomize == undefined)
      this.alreadyRandomize = [];

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if(this.alreadyRandomize.indexOf(randomNumber) === -1)
    {
      this.alreadyRandomize.push(randomNumber);
      return randomNumber;
    }
    else
    {
      return this.random(1,9)
    }
  }

  updateCanvas(name: string, size: number)
  {
    this.canvasService.updateCanvas(name, size);
  }

  onSelect(sprite: Sprite): void {
    console.log("selected : " + sprite.name);
    this.selectedSprite = sprite;
    this.canvasService.updateSelectedSprite(sprite);
  }

  generateForUnity()
  {
    this.wrapper = this.canvasService.getWrapper();//this.canvasService.generateForUnity();
     //this.downloadJsonHref = this.canvasService.generateForUnity();
  }
}
