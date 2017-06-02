import { Component, HostListener, Input, ViewChild, ElementRef } from '@angular/core';
import { Sprite } from "../pojo/sprite";
import { CanvasService } from "../service/canvas.service";
import {Wrapper} from "../pojo/wrapper";



@Component({
  selector: 'app-canvas',
  template: `<!--<h1>{{wrapper.canvasName}}</h1>-->
              <canvas #refCanvas class="center" style="border: solid;" height="256"></canvas>`,
  styles: [`
            h1 {
              text-align: center;
              font-family: Anton;
              font-size: 26px;
            }
            .center {
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
  private isDrawing = false;

  ngAfterViewInit() {
    this.canvas = this.refCanvas.nativeElement;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvasService.setCanvas(this.canvas);
    this.canvasService.drawGrid();
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent) {
    this.isDrawing = true;
    let x:number = event.offsetX;
    let y:number = event.offsetY;
    console.log("mouse down : " + x + ";" + y);
    this.canvasService.drawSprite(x, y)
  }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    if(this.isDrawing){
      this.onMousedown(event);
    }
  }

  @HostListener('mouseup', ['$event'])
  onMouseup(event: MouseEvent) {
    this.isDrawing = false;
  }
}
