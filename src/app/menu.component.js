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
var sprite_1 = require("./sprite");
var MenuComponent = (function () {
    function MenuComponent(canvasService) {
        this.canvasService = canvasService;
    }
    MenuComponent.prototype.setCanvasName = function (name) {
        this.canvasService.setName(name);
    };
    MenuComponent.prototype.addSprite = function (name, code) {
        this.canvasService.addSprite(new sprite_1.Sprite(name, code));
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: "app-menu",
        template: "<section class=\"menu\">\n                <div class=\"form canvas-name\">\n                  <h2>Level properties</h2>\n                  <li>\n                    <label>Name</label> \n                    <input #canvasName/>\n                  </li>\n                  <li>\n                    <input type=\"submit\" value=\"Update\" (click)=\"setCanvasName(canvasName.value)\"/>\n                  </li>\n                </div>\n                <div class=\"form sprite-creator\">\n                  <h2>Sprites creator</h2>\n                  <li>\n                    <label>Name</label>\n                    <input #name>\n                  </li>\n                  <li>\n                    <label>Code</label>\n                    <input #code>\n                  </li>\n                  <li>\n                    <input type='submit' value='Create' (click)=\"addSprite(name.value, code.value)\"/>\n                   </li>\n                </div>\n              </section>",
        styles: ["\n              .menu{\n                  text-align:center;\n                  width: 80%;\n                  margin: 0 auto;\n              }\n              .canvas-name,\n              .sprite-creator{\n                  display: inline-block;\n                  vertical-align:top;\n                  width: 20%;\n                  border: 2px solid;\n                  border-radius: 10px;\n              }\n              h2 {\n                font-size: 18px;\n                color: #248f8f;\n              }\n              .form {\n                margin:10px auto;\n                padding: 20px 12px 10px 20px;\n                font: 13px \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;\n              }\n              .form li {\n                padding: 0;\n                display: block;\n                list-style: none;\n                margin: 10px 0 0 0;\n              }\n              .form label {\n                margin:0 0 3px 0;\n                padding:0px;\n                display:block;\n                font-weight: bold;\n              }\n              .form input[type=submit] {\n                background: #4B99AD;\n                padding: 8px 15px 8px 15px;\n                border: none;\n                color: #fff;\n              }\n              .form input[type=submit]:hover {\n                background: #4691A4;\n                box-shadow:none;\n                -moz-box-shadow:none;\n                -webkit-box-shadow:none;\n              }\n          "]
    }),
    __metadata("design:paramtypes", [canvas_service_1.CanvasService])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map