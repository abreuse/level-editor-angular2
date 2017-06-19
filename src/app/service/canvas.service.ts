import {Injectable} from "@angular/core";
import {Sprite} from "../pojo/sprite";
import {Wrapper} from "../pojo/wrapper";
import * as _ from 'underscore';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {Resource} from "../pojo/resource";

@Injectable()
export class CanvasService {
  wrapper = new Wrapper("My first level", {}, []);
  selectedSprite: Sprite;
  public downloadJsonHref: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

  getWrapper() {
    return this.wrapper;
  }

  setName(name: string) {
    this.wrapper.canvasName = name;
  }

  setSize(size: number) {
    this.wrapper.canvas.width = size;
    this.wrapper.canvas.height = size;
    this.drawGrid();
  }

  setCanvas(refCanvas: any) {
    this.wrapper.canvas = refCanvas;
  }

  drawGrid() {
    let context: CanvasRenderingContext2D = this.wrapper.canvas.getContext("2d");
    let COLUMN_WIDTH = 32;
    let LINE_HEIGHT = 32;

    context.fillStyle = "black";
    for (let i = 0; i < this.wrapper.canvas.width; i += COLUMN_WIDTH) {
      context.beginPath();
      context.moveTo(0, i);
      context.lineTo(this.wrapper.canvas.width, i);
      context.stroke();
    }
    console.log("here : " + this.wrapper.canvas.width)

    for (let i = 0; i < this.wrapper.canvas.height; i += LINE_HEIGHT) {
      context.beginPath();
      context.moveTo(i, 0);
      context.lineTo(i, this.wrapper.canvas.height);
      context.stroke();
    }
  }

  updateCanvas(name: string, size: number) {
    this.setName(name);
    this.setSize(size);
    this.wrapper.sprites.length = 0;
  }

  updateSelectedSprite(sprite: Sprite) {
    this.selectedSprite = sprite;
  }


  drawSprite(x: number, y: number) {
    if (this.selectedSprite === undefined) {
      return;
    }
    console.log("sprite drew");
    let context: CanvasRenderingContext2D = this.wrapper.canvas.getContext("2d");
    let sprite = new Image();
    sprite.src = this.selectedSprite.url;
    console.log(sprite.src);
    x = Math.floor(x / 32);
    y = Math.floor(y / 32);

    let realX = x * 32;
    let realY = y * 32;

    context.drawImage(sprite, realX, realY, 32, 32);
    if (this.selectedSprite.code === "E") {
      this.deleteSpriteFromWrapper(x, y);
    }
    else
      this.addSpriteToWrapper(this.selectedSprite.code, x, y);
  }

  private addSpriteToWrapper(code: string, x: number, z: number) {
    var jsonData = JSON.parse(JSON.stringify(this.wrapper.sprites));
    for (var i = 0; i < jsonData.length; i++) {
      var jsonRow = jsonData[i];
      if (_.isEqual(jsonRow.x, x) && _.isEqual(jsonRow.z, z)) {
        if (jsonRow.code === code) {
          console.log("already exist");
          return;
        }
        else {
          this.wrapper.sprites[i].code = code;
          return;
        }
      }
      console.log(jsonRow.x);
    }
    this.wrapper.sprites.push(new Resource(code, x, z));
    console.log(JSON.stringify(this.wrapper.sprites));
    this.generateForUnity();
  }


  generateForUnity() {
    return JSON.stringify(this.wrapper);
    /*var wrapper = JSON.stringify(this.wrapper);
     var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/wrapper;charset=UTF-8," + encodeURIComponent(wrapper));
     return uri;*/
  }

  updateName(levelName: string) {
    this.wrapper.canvasName = levelName;
  }

  private deleteSpriteFromWrapper(x: number, z: number) {
    var jsonData = JSON.parse(JSON.stringify(this.wrapper.sprites));
    for (var i = 0; i < jsonData.length; i++) {
      var jsonRow = jsonData[i];
      if (_.isEqual(jsonRow.x, x) && _.isEqual(jsonRow.z, z)) {
        this.wrapper.sprites.splice(i, 1);
      }
    }
  }
}
