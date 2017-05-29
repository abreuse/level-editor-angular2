import {Injectable} from "@angular/core";
import {Sprite} from "../pojo/sprite";
import {Wrapper} from "../pojo/wrapper";

@Injectable()
export class CanvasService{
  wrapper = new Wrapper("", {}, []);

  addSprite(sprite: Sprite) {
    this.wrapper.sprites.push(sprite);
    console.log(JSON.stringify(this.wrapper));
  };

  getWrapper() {
    return this.wrapper;
  }

  setName(name: string) {
    this.wrapper.canvasName = name;
  }

  setSize(size: number) {
    this.wrapper.canvas.width = size;
    this.wrapper.canvas.height = size;
  }

  setCanvas(refCanvas: any)
  {
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
  }
}
