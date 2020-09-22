"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
exports.default = (function () {
    var point = electron_1.screen.getCursorScreenPoint();
    var _a = electron_1.screen.getDisplayNearestPoint(point), id = _a.id, bounds = _a.bounds, workArea = _a.workArea, scaleFactor = _a.scaleFactor;
    // win32 darwin linux平台分别处理
    var display = process.platform === 'linux' ? workArea : bounds;
    // mac图片太大，导致截图窗口卡顿，并且截图窗口显示延迟很严重
    var scale = process.platform === 'darwin' ? 1 : scaleFactor;
    return {
        bound: {
            x: bounds.x,
            y: bounds.y,
            width: bounds.width,
            height: bounds.height
        },
        display: {
            id: id,
            x: display.x * scale,
            y: display.y * scale,
            width: display.width * scale,
            height: display.height * scale
        }
    };
});
