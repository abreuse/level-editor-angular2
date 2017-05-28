"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var canvas_service_1 = require("./canvas.service");
var CanvasComponent = (function () {
    function CanvasComponent(canvasService) {
        this.canvasService = canvasService;
        this.canvas = this.canvasService.getCanvas();
    }
    CanvasComponent.prototype.ngOnInit = function () {
        //this.canvasService.addSprite(new Sprite("Wall", "W"));
    };
    CanvasComponent.prototype.ngAfterViewInit = function () {
        this.htmlCanvas = this.canvasRef.nativeElement;
        this.htmlCanvas.width = this.canvas.getWidth();
        this.htmlCanvas.height = this.canvas.getHeight();
        this.canvasService.drawGrid(this.htmlCanvas);
    };
    return CanvasComponent;
}());
__decorate([
    core_1.ViewChild("refCanvas"),
    __metadata("design:type", core_1.ElementRef)
], CanvasComponent.prototype, "canvasRef", void 0);
CanvasComponent = __decorate([
    core_1.Component({
        selector: 'app-canvas',
        template: "<h1>{{canvas.canvasName}}</h1>\n              <canvas #refCanvas class=\"center\" width=\"256\" style=\"border: solid;\" height=\"256\"></canvas>\n              <label>sprites stored : {{canvas.sprites.length}}</label>",
        styles: ["\n            h1 {\n              text-align: center;\n              font-family: Anton;\n              font-size: 26px;\n            }\n            .center {\n              display: block;\n              margin: 0 auto;\n            }\n            label {\n              text-align: center;\n              display: block;\n              padding: 10px;\n            }\n          "]
    }),
    __metadata("design:paramtypes", [canvas_service_1.CanvasService])
], CanvasComponent);
exports.CanvasComponent = CanvasComponent;
//# sourceMappingURL=canvas.component.js.map