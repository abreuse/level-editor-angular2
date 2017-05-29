"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var wrapper_1 = require("../pojo/wrapper");
var CanvasService = (function () {
    function CanvasService() {
        this.wrapper = new wrapper_1.Wrapper("", {}, []);
    }
    CanvasService.prototype.addSprite = function (sprite) {
        this.wrapper.sprites.push(sprite);
        console.log(JSON.stringify(this.wrapper));
    };
    ;
    CanvasService.prototype.getWrapper = function () {
        return this.wrapper;
    };
    CanvasService.prototype.setName = function (name) {
        this.wrapper.canvasName = name;
    };
    CanvasService.prototype.setSize = function (size) {
        this.wrapper.canvas.width = size;
        this.wrapper.canvas.height = size;
    };
    CanvasService.prototype.setCanvas = function (refCanvas) {
        this.wrapper.canvas = refCanvas;
    };
    CanvasService.prototype.drawGrid = function () {
        var context = this.wrapper.canvas.getContext("2d");
        var COLUMN_WIDTH = 32;
        var LINE_HEIGHT = 32;
        context.fillStyle = "black";
        for (var i = 0; i < this.wrapper.canvas.width; i += COLUMN_WIDTH) {
            context.beginPath();
            context.moveTo(0, i);
            context.lineTo(this.wrapper.canvas.width, i);
            context.stroke();
        }
        console.log("here : " + this.wrapper.canvas.width);
        for (var i = 0; i < this.wrapper.canvas.height; i += LINE_HEIGHT) {
            context.beginPath();
            context.moveTo(i, 0);
            context.lineTo(i, this.wrapper.canvas.height);
            context.stroke();
        }
    };
    CanvasService.prototype.updateCanvas = function (name, size) {
        this.setName(name);
        this.setSize(size);
    };
    return CanvasService;
}());
CanvasService = __decorate([
    core_1.Injectable()
], CanvasService);
exports.CanvasService = CanvasService;
//# sourceMappingURL=canvas.service.js.map