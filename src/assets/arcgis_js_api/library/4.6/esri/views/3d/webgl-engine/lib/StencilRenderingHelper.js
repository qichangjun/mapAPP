// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","./Util","../../../webgl/enums"],function(c,d,b,e){return function(){function a(a){this._enabled=!1;this._rctx=a}a.prototype.enable=function(){this._enabled=!0;this._rctx.setStencilTestEnabled(!0)};a.prototype.disable=function(){this._enabled=!1;this._rctx.setStencilTestEnabled(!1)};a.prototype.getIsSupported=function(){return!!this._rctx.contextAttributes.stencil};a.prototype.setEnableState=function(a){a?this.enable():this.disable()};a.prototype.getEnableState=function(){return this._enabled};
a.prototype.prepareStencilWritePass=function(){b.assert(this.getEnableState());var a=this._rctx;a.setStencilFunction(519,1,255);a.setStencilOp(7680,7680,7681);a.setStencilWriteMask(255)};a.prototype.finish=function(){if(this.getEnableState()){var a=this._rctx;a.setStencilFunction(519,0,0);a.setStencilOp(7680,7680,7680)}};a.prototype.enableStencilRead=function(){this.getEnableState()&&this._rctx.setStencilFunction(517,1,255)};a.prototype.disableStencilRead=function(){this.getEnableState()&&this._rctx.setStencilFunction(519,
0,0)};return a}()});