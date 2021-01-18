"use strict";
exports.__esModule = true;
var PIXI = require("pixi.js");
var app = new PIXI.Application({
    width: 600,
    height: 600,
    backgroundColor: 0x1099bb
});
var appElement = document.getElementById('app');
appElement.appendChild(app.view);
//# sourceMappingURL=sample.js.map