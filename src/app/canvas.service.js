"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var canvas_1 = require("./canvas");
var CanvasService = (function () {
    function CanvasService() {
        this.canvas = new canvas_1.Canvas("", [], 256, 256);
    }
    CanvasService.prototype.addSprite = function (sprite) {
        this.canvas.getSprites().push(sprite);
        console.log(JSON.stringify(this.canvas));
    };
    ;
    CanvasService.prototype.getCanvas = function () {
        return this.canvas;
    };
    CanvasService.prototype.setName = function (name) {
        this.canvas.setName(name);
    };
    CanvasService.prototype.drawGrid = function (canvas) {
        var context = canvas.getContext("2d");
        var COLUMN_WIDTH = 32;
        var LINE_HEIGHT = 32;
        context.fillStyle = "black";
        for (var i = 0; i < canvas.width; i += COLUMN_WIDTH) {
            context.beginPath();
            context.moveTo(0, i);
            context.lineTo(canvas.width, i);
            context.stroke();
        }
        console.log("here : " + canvas.width);
        for (var i = 0; i < canvas.height; i += LINE_HEIGHT) {
            context.beginPath();
            context.moveTo(i, 0);
            context.lineTo(i, canvas.height);
            context.stroke();
        }
    };
    return CanvasService;
}());
CanvasService = __decorate([
    core_1.Injectable()
], CanvasService);
exports.CanvasService = CanvasService;
//# sourceMappingURL=canvas.service.js.map