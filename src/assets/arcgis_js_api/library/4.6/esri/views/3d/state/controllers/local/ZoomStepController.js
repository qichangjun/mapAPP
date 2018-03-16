// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../PointToPointAnimationController ../../../camera/constraintUtils ../../../lib/glMatrix ../../../webgl-engine/lib/Camera ../../../../animation/easing".split(" "),function(g,h,l,m,n,e,k,p){Object.defineProperty(h,"__esModule",{value:!0});g=function(g){function b(c,a,d){a=g.call(this,c.state,a,"interaction"===d?null:void 0)||this;a.view=c;a.mode=d;a.zoomLocation=e.vec3d.create();a.tmpCamera=new k;a.tmpRayDir=e.vec3d.create();a.constraintOptions=
{selection:15,interactionType:1,interactionFactor:null,interactionStartCamera:new k,interactionDirection:null};return a}l(b,g);Object.defineProperty(b.prototype,"isInteractive",{get:function(){return"interaction"===this.mode},enumerable:!0,configurable:!0});b.prototype.zoomStep=function(c,a){if(this.active){var d=this.view.state,f=this.constraintOptions.interactionStartCamera;this.animation.finished?f.copyFrom(d.camera):this.animation.cameraAt(1,f);this.tmpCamera.copyFrom(d.camera);0<c?this.pickingHelper.pickPointInScreen(a,
this.zoomLocation)||this.pickingHelper.pickFreePointInScreen(a,this.zoomLocation):this.pickingHelper.pickRaySegment(this.tmpCamera.eye,this.tmpCamera.center,this.zoomLocation)?this.tmpCamera.center=this.zoomLocation:e.vec3d.set(this.tmpCamera.center,this.zoomLocation);this.updateCamera(this.tmpCamera,Math.pow(.6,c),this.zoomLocation,a);this.begin(this.tmpCamera)}};b.prototype.animationSettings=function(){return{apex:null,duration:.6,easing:p.outExpo}};b.prototype.updateCamera=function(c,a,d,f){e.vec3d.subtract(d,
c.eye,this.tmpRayDir);f=e.vec3d.length(this.tmpRayDir);var b=f*a;1>=a&&4>b&&(b=4,a=b/f);1E-6>Math.abs(f-b)||(e.vec3d.scale(this.tmpRayDir,a),e.vec3d.subtract(d,this.tmpRayDir,c.eye),e.vec3d.lerp(c.center,d,1-a),n.applyAll(this.view,this.tmpCamera,this.constraintOptions))};return b}(m.PointToPointAnimationController);h.ZoomStepController=g});