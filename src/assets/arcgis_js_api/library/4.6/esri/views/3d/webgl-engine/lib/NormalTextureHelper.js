// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","./Util","../../../webgl/FramebufferObject","../../../webgl/enums"],function(e,f,c,d,g){return function(){function b(a){this.rctx=a;this.normalFBO=void 0;this.height=this.width=this.viewportToRestore=null}b.prototype.setEnableState=function(a){a!==this.getEnableState()&&(a?this.enable():this.disable())};b.prototype.getEnableState=function(){return void 0!==this.normalFBO};b.prototype.getNormalFBO=function(){return this.normalFBO};b.prototype.enable=function(){c.assert(!this.getEnableState());
this.normalFBO=d.createWithAttachments(this.rctx,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:0,height:0},{colorTarget:0,depthStencilTarget:1})};b.prototype.disable=function(){c.assert(this.getEnableState());this.normalFBO.dispose();this.normalFBO=void 0};b.prototype.setupFBOs=function(a){c.assert(this.getEnableState());this.viewportToRestore=a=a.viewport;this.width=a[2];this.height=a[3];this.rctx.setViewport(0,0,this.width,this.height)};b.prototype.prepareNormalPass=
function(){c.assert(this.getEnableState());var a=this.rctx,b=a.gl;this.normalFBO.resize(this.width,this.height);a.bindFramebuffer(this.normalFBO);a.setClearColor(0,0,0,0);a.clear(b.COLOR_BUFFER_BIT|b.DEPTH_BUFFER_BIT)};b.prototype.finish=function(a){var b=this.rctx;b.bindFramebuffer(a);b.setViewport(this.viewportToRestore[0],this.viewportToRestore[1],this.viewportToRestore[2],this.viewportToRestore[3])};return b}()});