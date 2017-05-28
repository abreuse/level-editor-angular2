import {Sprite} from "./sprite";

export class Canvas {

  constructor(private canvasName: string, private sprites: Array<Sprite>, private width:number, private height:number)
  {}

  getSprites()
  {
    return this.sprites;
  }

  setName(name: string) {
    this.canvasName = name;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }
}
