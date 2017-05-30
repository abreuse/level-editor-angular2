import {Sprite} from "./sprite";
import {Resource} from "./resource";

export class Wrapper {

  constructor(private _canvasName: string, private _canvas:any, private _sprites: Array<Resource>)
  {}

  get sprites()
  {
    return this._sprites;
  }

  get canvasName()
  {
    return this._canvasName;
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
