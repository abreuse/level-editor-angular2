import {Sprite} from "./sprite";

export class Wrapper {

  constructor(private _canvasName: string, private _canvas:any, private _sprites: Array<Sprite>)
  {}

  get sprites()
  {
    return this._sprites;
  }

  set canvasName(name: string) {
    this._canvasName = name;
  }

  set canvas(canvas: any)
  {
    this._canvas = canvas;
  }

  get canvas()
  {
    return this._canvas;
  }
}
