// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../input/InputHandler ../../../input/handlers/support ../../state/controllers/RotateController ../../state/helpers/PickingHelper".split(" "),function(c,e,g,h,k,l,m){Object.defineProperty(e,"__esModule",{value:!0});c=function(c){function b(f,n,a,b){var d=c.call(this,!0)||this;d.view=f;d.pointerType=n;d.pivotPoint=a;d.pickingHelper=new m.PickingHelper(f);d.registerIncoming("drag",b,function(a){return d.handleDrag(a)});return d}g(b,
c);b.prototype.handleDrag=function(c){var b=c.data;if(!(1<b.pointers.length)){var a=b.pointers[0];if(k.eventMatchesMousePointerType(a.startEvent.native,this.pointerType)){a=[a.currentEvent.x,this.view.height-a.currentEvent.y];switch(b.action){case "start":this.cameraController=new l.RotateController(this.view,this.pickingHelper,this.pivotPoint);this.view.state.switchCameraController(this.cameraController);this.cameraController.begin(a);break;case "update":this.cameraController.update(a);break;case "end":this.cameraController.end(),
this.cameraController=null}c.stopPropagation()}}};return b}(h.InputHandler);e.DragRotate=c});