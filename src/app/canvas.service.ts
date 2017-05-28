import {Injectable} from "@angular/core";
import {Sprite} from "./sprite";
import {Canvas} from "./canvas";

@Injectable()
export class CanvasService{
  canvas = new Canvas("", [], 256, 256);

  addSprite(sprite: Sprite) {
    this.canvas.getSprites().push(sprite);
    console.log(JSON.stringify(this.canvas));
  };

  getCanvas() {
    return this.canvas;
  }

  setName(name: string) {
    this.canvas.setName(name);
  }

  drawGrid(canvas: any) {
    let context: CanvasRenderingContext2D = canvas.getContext("2d");
    let COLUMN_WIDTH = 32;
    let LINE_HEIGHT = 32;

    context.fillStyle = "black";
    for (let i = 0; i < canvas.width; i += COLUMN_WIDTH) {
      context.beginPath();
      context.moveTo(0, i);
      context.lineTo(canvas.width, i);
      context.stroke();
    }
    console.log("here : " + canvas.width)

    for (let i = 0; i < canvas.height; i += LINE_HEIGHT) {
      context.beginPath();
      context.moveTo(i, 0);
      context.lineTo(i, canvas.height);
      context.stroke();
    }
  }
}
