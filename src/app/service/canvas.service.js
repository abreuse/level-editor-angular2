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
var wrapper_1 = require("../pojo/wrapper");
var _ = require("underscore");
var platform_browser_1 = require("@angular/platform-browser");
var resource_1 = require("../pojo/resource");
var CanvasService = (function () {
    function CanvasService(sanitizer) {
        this.sanitizer = sanitizer;
        this.wrapper = new wrapper_1.Wrapper("My first level", {}, []);
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
        this.drawGrid();
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
        this.wrapper.sprites.length = 0;
    };
    CanvasService.prototype.updateSelectedSprite = function (sprite) {
        this.selectedSprite = sprite;
    };
    CanvasService.prototype.drawSprite = function (x, y) {
        if (this.selectedSprite === undefined) {
            return;
        }
        console.log("sprite drew");
        var context = this.wrapper.canvas.getContext("2d");
        var sprite = new Image();
        sprite.src = this.selectedSprite.url;
        x = Math.floor(x / 32);
        y = Math.floor(y / 32);
        var realX = x * 32;
        var realY = y * 32;
        context.drawImage(sprite, realX, realY, 32, 32);
        this.addSpriteToWrapper(this.selectedSprite.code, realX, realY);
    };
    CanvasService.prototype.addSpriteToWrapper = function (code, x, y) {
        var jsonData = JSON.parse(JSON.stringify(this.wrapper.sprites));
        for (var i = 0; i < jsonData.length; i++) {
            var jsonRow = jsonData[i];
            if (_.isEqual(jsonRow.x, x) && _.isEqual(jsonRow.y, y)) {
                if (jsonRow.code === code) {
                    console.log("already exist");
                    return;
                }
                else {
                    this.wrapper.sprites[i].code = code;
                    return;
                }
            }
            console.log(jsonRow.x);
        }
        this.wrapper.sprites.push(new resource_1.Resource(code, x, y));
        console.log(JSON.stringify(this.wrapper.sprites));
        this.generateForUnity();
    };
    CanvasService.prototype.generateForUnity = function () {
        return JSON.stringify(this.wrapper);
        /*var json = JSON.stringify(this.wrapper);
        var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(json));
        return uri;*/
    };
    return CanvasService;
}());
CanvasService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], CanvasService);
exports.CanvasService = CanvasService;
//# sourceMappingURL=canvas.service.js.map