// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../input/InputHandler"],function(c,g,h,k){Object.defineProperty(g,"__esModule",{value:!0});c=function(c){function b(a,f,b){var d=c.call(this,!0)||this;d.view=a;d.keys=f;d._keyMap=(e={},e[f.left]="left",e[f.right]="right",e[f.up]="up",e[f.down]="down",e);d.registerIncoming("key-down",b,function(a){return d._handleKeyDown(a)});d.registerIncoming("key-up",b,function(a){return d._handleKeyUp(a)});return d;var e}h(b,c);b.prototype._handleKeyDown=
function(a){a.data.repeat||this._handleKey(a,!0)};b.prototype._handleKeyUp=function(a){this._handleKey(a,!1)};b.prototype._handleKey=function(a,b){var c=this._keyMap[a.data.key];if(null!=c){if(b)switch(c){case "left":this.view.navigation.continousPanLeft();break;case "right":this.view.navigation.continousPanRight();break;case "up":this.view.navigation.continousPanUp();break;case "down":this.view.navigation.continousPanDown()}else this.view.navigation.stop();a.stopPropagation()}};return b}(k.InputHandler);
g.KeyPan=c});