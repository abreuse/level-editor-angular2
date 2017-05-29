import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Sprite } from "../pojo/sprite";
import { CanvasService } from "../service/canvas.service";
import {Wrapper} from "../pojo/wrapper";



@Component({
  selector: 'app-canvas',
  template: `<h1>{{wrapper.canvasName}}</h1>
              <canvas #refCanvas class="center" width="256" style="border: solid;" height="256"></canvas>
              <label>sprites stored : {{wrapper.sprites.length}}</label>`,
  styles: [`
            h1 {
              text-align: center;
              font-family: Anton;
              font-size: 26px;
            }
            .center {
              display: block;
              margin: 0 auto;
            }
            label {
              text-align: center;
              display: block;
              padding: 10px;
            }
          `]
})

export class CanvasComponent  {

  @ViewChild("refCanvas") refCanvas: ElementRef;
  private canvas: any;
  constructor(private canvasService: CanvasService) {}
  wrapper = this.canvasService.getWrapper();

  @Input() width: number;
  @Input() height: number;

  ngAfterViewInit() {
    this.canvas = this.refCanvas.nativeElement;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvasService.setCanvas(this.canvas);
    this.canvasService.drawGrid();
  }
}
