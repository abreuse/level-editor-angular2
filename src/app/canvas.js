"use strict";
var Canvas = (function () {
    function Canvas(canvasName, sprites, width, height) {
        this.canvasName = canvasName;
        this.sprites = sprites;
        this.width = width;
        this.height = height;
    }
    Canvas.prototype.getSprites = function () {
        return this.sprites;
    };
    Canvas.prototype.setName = function (name) {
        this.canvasName = name;
    };
    Canvas.prototype.getWidth = function () {
        return this.width;
    };
    Canvas.prototype.getHeight = function () {
        return this.height;
    };
    return Canvas;
}());
exports.Canvas = Canvas;
//# sourceMappingURL=canvas.js.map