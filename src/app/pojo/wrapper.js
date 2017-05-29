"use strict";
var Wrapper = (function () {
    function Wrapper(_canvasName, _canvas, _sprites) {
        this._canvasName = _canvasName;
        this._canvas = _canvas;
        this._sprites = _sprites;
    }
    Object.defineProperty(Wrapper.prototype, "sprites", {
        get: function () {
            return this._sprites;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wrapper.prototype, "canvasName", {
        set: function (name) {
            this._canvasName = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Wrapper.prototype, "canvas", {
        get: function () {
            return this._canvas;
        },
        set: function (canvas) {
            this._canvas = canvas;
        },
        enumerable: true,
        configurable: true
    });
    return Wrapper;
}());
exports.Wrapper = Wrapper;
//# sourceMappingURL=wrapper.js.map