// get instance of Pixi application
import * as PIXI from "pixi.js";
let app: PIXI.Application = new PIXI.Application({
    width: 600,
    height: 600,
    backgroundColor: 0x1099bb,
});
// HTMLの<main id="app"></main>の中に上で作ったPIXIアプリケーション(app)のビュー(canvas)を突っ込む
const appElement: Document["body"] = document.getElementById('app');
appElement.appendChild(app.view);