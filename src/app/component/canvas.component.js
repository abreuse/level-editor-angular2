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
var canvas_service_1 = require("../service/canvas.service");
var CanvasComponent = (function () {
    function CanvasComponent(canvasService) {
        this.canvasService = canvasService;
        this.wrapper = this.canvasService.getWrapper();
        this.isDrawing = false;
    }
    CanvasComponent.prototype.ngAfterViewInit = function () {
        this.canvas = this.refCanvas.nativeElement;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvasService.setCanvas(this.canvas);
        this.canvasService.drawGrid();
    };
    CanvasComponent.prototype.onMousedown = function (event) {
        this.isDrawing = true;
        var x = event.offsetX;
        var y = event.offsetY;
        console.log("mouse down : " + x + ";" + y);
        this.canvasService.drawSprite(x, y);
    };
    CanvasComponent.prototype.onMousemove = function (event) {
        if (this.isDrawing) {
            this.onMousedown(event);
        }
    };
    CanvasComponent.prototype.onMouseup = function (event) {
        this.isDrawing = false;
    };
    return CanvasComponent;
}());
__decorate([
    core_1.ViewChild("refCanvas"),
    __metadata("design:type", core_1.ElementRef)
], CanvasComponent.prototype, "refCanvas", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CanvasComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CanvasComponent.prototype, "height", void 0);
__decorate([
    core_1.HostListener('mousedown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], CanvasComponent.prototype, "onMousedown", null);
__decorate([
    core_1.HostListener('mousemove', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], CanvasComponent.prototype, "onMousemove", null);
__decorate([
    core_1.HostListener('mouseup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], CanvasComponent.prototype, "onMouseup", null);
CanvasComponent = __decorate([
    core_1.Component({
        selector: 'app-canvas',
        template: "<!--<h1>{{wrapper.canvasName}}</h1>-->\n              <canvas #refCanvas class=\"center\" style=\"border: solid;\" height=\"256\"></canvas>",
        styles: ["\n            h1 {\n              text-align: center;\n              font-family: Anton;\n              font-size: 26px;\n            }\n            .center {\n            }\n            label {\n              text-align: center;\n              display: block;\n              padding: 10px;\n            }\n          "]
    }),
    __metadata("design:paramtypes", [canvas_service_1.CanvasService])
], CanvasComponent);
exports.CanvasComponent = CanvasComponent;
//# sourceMappingURL=canvas.component.js.map