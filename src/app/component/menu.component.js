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
var sprites_1 = require("../pojo/sprites");
var MenuComponent = (function () {
    function MenuComponent(canvasService) {
        this.canvasService = canvasService;
        //TODO: spriteService to get SPRITES
        this.sprites = sprites_1.SPRITES;
    }
    MenuComponent.prototype.updateCanvas = function (name, size) {
        this.canvasService.updateCanvas(name, size);
    };
    MenuComponent.prototype.onSelect = function (sprite) {
        console.log("selected : " + sprite.name);
        this.selectedSprite = sprite;
        this.canvasService.updateSelectedSprite(sprite);
    };
    MenuComponent.prototype.generateForUnity = function () {
        this.wrapper = this.canvasService.getWrapper(); //this.canvasService.generateForUnity();
        //this.downloadJsonHref = this.canvasService.generateForUnity();
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: "app-menu",
        template: "\n              <section class=\"menu\">\n                <div class=\"form canvas-name\">\n                  <h2>Level properties</h2>\n                  <li>\n                    <label>Name</label> \n                    <input #canvasName value=\"My First Level\"/>\n                  </li>\n                  <li>\n                    <label>Size</label> \n                    <input #canvasSize value=\"512\"/>\n                  </li>\n                  <li>\n                    <input type=\"submit\" value=\"Update\" (click)=\"updateCanvas(canvasName.value, canvasSize.value)\"/>\n                  </li>\n                </div>\n                <div class=\"form sprite-selector\">\n                  <h2>Sprites selector</h2>\n                     <ul class=\"sprites\">\n                        <li *ngFor=\"let sprite of sprites\" [class.selected]=\"sprite === selectedSprite\" (click)=\"onSelect(sprite)\">\n                          <span>{{sprite.name}}</span>\n                        </li>\n                      </ul>\n<!--                  <li>\n                    <input type='submit' value='Create' (click)=\"addSprite(name.value, code.value)\"/>\n                  </li>-->\n                </div>\n              </section>\n               <div class=\"form generate-for-unity\">\n                  <li>\n                    <input type=\"submit\" value=\"Generate JSON for Unity\" (click)=\"generateForUnity()\"/>\n                  </li>\n                  <textarea rows=\"10\" cols=\"50\">{{wrapper | json}}</textarea>\n                  <!--<a title=\"Download JSON\" [href]=\"downloadJsonHref\" download=\"download.json\"></a>-->\n                </div>",
        styles: ["\n              .menu{\n                  text-align:center;\n                  width: 80%;\n                  margin: 0 auto;\n              }\n              .generate-for-unity{\n                /*position: relative;*/\n                width: auto;\n              }\n              .canvas-name,\n              .sprite-selector{\n                  display: inline-block;\n                  vertical-align:top;\n                  width: auto;\n                  border: 2px solid;\n                  border-radius: 10px;\n              }\n              h2 {\n                font-size: 18px;\n                color: #248f8f;\n              }\n              .form {\n                margin:10px auto;\n                padding: 20px 12px 10px 20px;\n                font: 13px \"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif;\n              }\n              .form li {\n                padding: 0;\n                display: block;\n                list-style: none;\n                margin: 10px 0 0 0;\n              }\n              .form label {\n                margin:0 0 3px 0;\n                padding:0px;\n                display:block;\n                font-weight: bold;\n              }\n              .form input[type=submit] {\n                background: #4B99AD;\n                padding: 8px 15px 8px 15px;\n                border: none;\n                color: #fff;\n              }\n              .form input[type=submit]:hover {\n                background: #4691A4;\n                box-shadow:none;\n                -moz-box-shadow:none;\n                -webkit-box-shadow:none;\n              }\n              .selected {\n                background-color: #CFD8DC !important;\n                color: white;\n              }\n              .sprites {\n                margin: 0 0 2em 0;\n                list-style-type: none;\n                padding: 0;\n                width: auto;\n              }\n              .sprites li {\n                cursor: pointer;\n                position: relative;\n                left: 0;\n                background-color: #EEE;\n                margin: .5em;\n                padding: .3em 0;\n                height: 1.6em;\n                border-radius: 4px;\n              }\n              .sprites li.selected:hover {\n                background-color: #BBD8DC !important;\n                color: white;\n              }\n              .sprites li:hover {\n                color: #607D8B;\n                background-color: #DDD;\n                left: .1em;\n              }\n              .sprites .text {\n                position: relative;\n                top: -3px;\n              }\n          "],
    }),
    __metadata("design:paramtypes", [canvas_service_1.CanvasService])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map