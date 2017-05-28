import { Component, ViewChild, ElementRef } from '@angular/core';
import { Sprite } from "./sprite";
import { CanvasService } from "./canvas.service";
import {Canvas} from "./canvas";



@Component({
  selector: 'app-canvas',
  template: `<h1>{{canvas.canvasName}}</h1>
              <canvas #refCanvas class="center" width="256" style="border: solid;" height="256"></canvas>
              <label>sprites stored : {{canvas.sprites.length}}</label>`,
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

  @ViewChild("refCanvas") canvasRef: ElementRef;
  private htmlCanvas: any;
  constructor(private canvasService: CanvasService) {}
  canvas = this.canvasService.getCanvas();

  ngOnInit(): void {
    //this.canvasService.addSprite(new Sprite("Wall", "W"));
  }

  ngAfterViewInit() {
    this.htmlCanvas = this.canvasRef.nativeElement;
    this.htmlCanvas.width = this.canvas.getWidth();
    this.htmlCanvas.height = this.canvas.getHeight();
    this.canvasService.drawGrid(this.htmlCanvas);
  }
}
