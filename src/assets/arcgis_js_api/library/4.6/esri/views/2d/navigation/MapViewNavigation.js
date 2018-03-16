// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../core/Accessor ../../../Viewpoint ../../../geometry/Point ./actions/Pan ./actions/Rotate ./actions/Pinch ./ZoomBox ../viewpointUtils".split(" "),function(x,y,n,e,c,p,q,r,t,u,v,w,f){var g=new q({targetGeometry:new r}),h=[0,0];return function(k){function a(b){b=k.call(this)||this;b.animationManager=null;return b}n(a,k);a.prototype.initialize=function(){this.pan=
new t({navigation:this});this.rotate=new u({navigation:this});this.pinch=new v({navigation:this});this.zoomBox=new w({view:this.view,navigation:this})};a.prototype.destroy=function(){this.zoomBox.destroy();this.animationManager=this.zoomBox=null};a.prototype.begin=function(){this._set("interacting",!0)};a.prototype.end=function(){this._set("interacting",!1)};a.prototype.zoom=function(b,d){void 0===d&&(d=this._getDefaultAnchor());this.stop();this.begin();if(this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return 1>
b?this.zoomIn(d):this.zoomOut(d);this.setViewpoint(d,b,0)};a.prototype.zoomIn=function(b){void 0===b&&(b=this._getDefaultAnchor());this.begin();var d=this.view,a=d.scale,c=d.constraints.snapToNextScale(a);b=d.goTo(this._scaleAndRotateViewpoint(g,b,c/a,0));this.end();return b};a.prototype.zoomOut=function(b){void 0===b&&(b=this._getDefaultAnchor());this.begin();var d=this.view,a=d.scale,c=d.constraints.snapToPreviousScale(a);b=d.goTo(this._scaleAndRotateViewpoint(g,b,c/a,0));this.end();return b};a.prototype.setViewpoint=
function(b,d,a){this.begin();this.view.state.viewpoint=this._scaleAndRotateViewpoint(g,b,d,a);this.end()};a.prototype.animateViewpoint=function(b,a,c){return this.view.goTo(this._scaleAndRotateViewpoint(g,b,a,c))};a.prototype.continousRotateClockwise=function(){var a=this.get("view.viewpoint");this.animationManager.animateContinous(a,function(a){f.rotateBy(a,a,-1)})};a.prototype.continousRotateCounterclockwise=function(){var a=this.get("view.viewpoint");this.animationManager.animateContinous(a,function(a){f.rotateBy(a,
a,1)})};a.prototype.resetRotation=function(){this.view.rotation=0};a.prototype.continousPanLeft=function(){var a=this.get("view.viewpoint");this.animationManager.animateContinous(a,function(a){f.translateBy(a,a,[-10,0])})};a.prototype.continousPanRight=function(){var a=this.get("view.viewpoint");this.animationManager.animateContinous(a,function(a){f.translateBy(a,a,[10,0])})};a.prototype.continousPanUp=function(){var a=this.get("view.viewpoint");this.animationManager.animateContinous(a,function(a){f.translateBy(a,
a,[0,10])})};a.prototype.continousPanDown=function(){var a=this.get("view.viewpoint");this.animationManager.animateContinous(a,function(a){f.translateBy(a,a,[0,-10])})};a.prototype.stop=function(){this.pan.stopMomentumNavigation();this.animationManager.stop();this.end()};a.prototype._getDefaultAnchor=function(){var a=this.view.size;h[0]=.5*a[0];h[1]=.5*a[1];return h};a.prototype._scaleAndRotateViewpoint=function(a,d,c,e){var b=this.view,g=b.size,h=b.padding,l=b.constraints,k=b.viewpoint,m=b.scale*
c,b=l.canZoomInTo(m),l=l.canZoomOutTo(m);return 1>c&&!b||1<c&&!l?k:f.padAndScaleAndRotateBy(a,k,c,e,d,g,h)};e([c.property()],a.prototype,"animationManager",void 0);e([c.property({type:Boolean,readOnly:!0})],a.prototype,"interacting",void 0);e([c.property()],a.prototype,"pan",void 0);e([c.property()],a.prototype,"pinch",void 0);e([c.property()],a.prototype,"rotate",void 0);e([c.property()],a.prototype,"view",void 0);e([c.property()],a.prototype,"zoomBox",void 0);return a=e([c.subclass("esri.views.2d.navigation.MapViewNavigation")],
a)}(c.declared(p))});