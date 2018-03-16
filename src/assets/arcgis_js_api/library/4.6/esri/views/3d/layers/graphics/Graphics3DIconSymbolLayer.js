// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper dojo/_base/lang dojo/when dojo/errors/CancelError ./Graphics3DSymbolLayer ./Graphics3DGraphicLayer ./Graphics3DDrapedGraphicLayer ./ElevationAligners ./Graphics3DSymbolCommonCode ./SignedDistanceFunctions ../support/FastSymbolUpdates ./graphicUtils ../../../../core/screenUtils ../../../../core/sniff ../../../../core/Error ../../../../symbols/support/symbolUtils ../../../../Color ../../../../geometry/Polygon ../../support/projectionUtils ../../lib/glMatrix ../../webgl-engine/Stage ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/lib/Texture ../../webgl-engine/materials/HUDMaterial ../../../../core/urlUtils".split(" "),
function(y,ga,I,z,J,K,v,L,M,N,l,p,t,O,q,P,A,Q,R,S,T,w,u,U,B,V,W,C,X){function x(g){return"cross"===g||"x"===g}function Y(g){var b;"primitive:"===g.substring(0,10)&&(g=g.substring(10));switch(g){case r.PRIM_CIRCLE:b=p.computeSignedDistancefieldCicle(128,64);break;case r.PRIM_SQUARE:b=p.computeSignedDistancefieldSquare(128,64,!1);break;case r.PRIM_KITE:b=p.computeSignedDistancefieldSquare(128,64,!0);break;case r.PRIM_CROSS:b=p.computeSignedDistancefieldCrossAndX(128,64,!1);break;case r.PRIM_X:b=p.computeSignedDistancefieldCrossAndX(128,
64,!0)}return new W(b,"sdf_"+g,{mipmap:!1,wrapClamp:!0,width:128,height:128,components:4})}var Z=w.vec3d;y=w.vec4d;var D=w.mat4d.identity(),E=[0,0,1],aa=[0,0,0,0],F=[0,0,0],ba=[1,1,1],G="center bottom top left right bottom-left bottom-right top-left top-right".split(" "),ca=[.25,.25,.75,.75],r={PRIM_CIRCLE:"circle",PRIM_SQUARE:"square",PRIM_CROSS:"cross",PRIM_X:"x",PRIM_KITE:"kite"},da=[64,64];v=function(g){function b(){var a=null!==g&&g.apply(this,arguments)||this;a._elevationOptions={supportsOffsetAdjustment:!0,
supportsOnTheGround:!0};return a}I(b,g);b.prototype._prepareResources=function(){var a=this.symbol,c=Math.round(null!=a.size?q.pt2px(a.size):16);this._size=null;this._symbolTextureRatio=1;this._primitive=null;var f=this._getStageIdHint();if(!this._isPropertyDriven("size")){var d=O.validateSymbolLayerSize(c);if(d){this._logWarning(d);this.reject();return}}this._isPropertyDriven("size")&&64>c&&(c=64);var b=a.resource||{primitive:"circle",href:void 0},d={anchorPos:this._getAnchorPos(a)},e=this.symbolContainer;
if(this._hasVisibleVerticalOffset(e)){var e=e.verticalOffset,h=e.minWorldLength,n=e.maxWorldLength;d.verticalOffset={screenLength:q.pt2px(e.screenLength),minWorldLength:h||0,maxWorldLength:null!=n?n:Infinity}}this._context.screenSizePerspectiveEnabled&&(d.screenSizePerspective=this._context.sharedResources.screenSizePerspectiveSettings);b.href?(this._outlineSize=this._getOutlineSize(a,null),d.color=this._getFillColor(a,null),d.outlineColor=this._getOutlineColor(a),d.outlineSize=this._outlineSize,
d.textureIsSignedDistanceField=!1,this._prepareImageResources(c,d,f)):(b=b.primitive||"circle",e="primitive:"+b,this._primitive=b,this._outlineSize=this._getOutlineSize(a,b),d.color=this._getFillColor(a,b),d.outlineColor=this._getOutlineColor(a),d.outlineSize=this._outlineSize,x(b)&&0===d.outlineSize?this.reject():(this.texture=this._context.sharedResources.textures.acquire(e,Y),this._textureURI=e,d.textureIsSignedDistanceField=!0,d.distanceFieldBoundingBox=ca,d.textureId=this.texture.getId(),this._size=
[c,c],this._symbolTextureRatio=2,this._createMaterialsAndAddToStage(d,this._context.stage,f),this.resolve()))};b.prototype._getOutlineSize=function(a,c){var f=0,f=a.outline&&null!=a.outline.size?q.pt2px(a.outline.size):x(c)?1.5:0;return Math.max(f,0)};b.prototype._getOutlineColor=function(a){var c=this._getLayerOpacity();if(a.outline&&null!=a.outline.color){var f=R.toUnitRGB(a.outline.color);return[f[0],f[1],f[2],a.outline.color.a*c]}return[0,0,0,c]};b.prototype._getFillColor=function(a,c){return x(c)?
aa:this._getMaterialOpacityAndColor()};b.prototype._getAnchorPos=function(a){return-1<G.indexOf(a.anchor)?a.anchor:"center"};b.prototype._prepareImageResources=function(a,c,f){var d=this,b=Q.getIconHref(this.symbolContainer,this.symbol);!P("esri-canvas-svg-support")&&X.isSVG(b)?(this._logWarning("IconSymbol3DLayer failed to load (SVG symbols are not supported in IE11)"),this.reject(new A("SVG Not Supported","IconSymbol3DLayer failed to load (SVG symbols are not supported in IE11)"))):(J(this._context.sharedResources.textures.acquire(b,
null,a),function(b){if(!d.isRejected()){var e=b.params,n=e.width/e.height;d._size=a?1<n?[a,Math.round(a/n)]:[Math.round(a*n),a]:[e.width,e.height];c.textureId=b.getId();d._createMaterialsAndAddToStage(c,d._context.stage,f);d.resolve()}},function(a){a instanceof K?d.reject():(a="IconSymbol3DLayer failed to load (Request for icon resource failed: "+b+")",d._logWarning(a),d.reject(new A("Request Failed",a)))}),this._textureURI=b)};b.prototype._createMaterialsAndAddToStage=function(a,c,b){this._fastUpdates=
t.initFastSymbolUpdatesState(this._context.renderer,this._supportsShaderVisualVariables(),this._fastVisualVariableConvertOptions());this._fastUpdates.enabled&&z.mixin(a,this._fastUpdates.materialParameters);var d=z.mixin({},a);d.verticalOffset=null;d.screenSizePerspective=null;d.occlusionTest=!1;d.shaderPolygonOffset=0;this._drapedMaterial=new C(d,b+"_iconDraped");c.add(u.ModelContentType.MATERIAL,this._drapedMaterial);a.occlusionTest=!0;this._material=new C(a,b+"_icon");c.add(u.ModelContentType.MATERIAL,
this._material)};b.prototype.destroy=function(){g.prototype.destroy.call(this);this.isFulfilled()||this.reject();this._material&&(this._context.stage.remove(u.ModelContentType.MATERIAL,this._material.getId()),this._material=null);this._drapedMaterial&&(this._context.stage.remove(u.ModelContentType.MATERIAL,this._drapedMaterial.getId()),this._drapedMaterial=null);this._textureURI&&(this._context.sharedResources.textures.release(this._textureURI),this._textureURI=null)};b.prototype._getGeometry=function(a){a=
this._validateGeometry(a.geometry);if("extent"===a.type)return l.placePointOnPolygon(S.fromExtent(a));if("polyline"===a.type)return l.placePointOnPolyline(a);if("polygon"===a.type)return l.placePointOnPolygon(a);if("point"===a.type)return a;this._logWarning("unsupported geometry type for icon symbol: "+a.type);return null};b.prototype._getScaleFactor=function(a){if(this._isPropertyDriven("size")&&a.size){for(var c=0;3>c;c++){var b=a.size[c];b&&"symbolValue"!==b&&"proportional"!==b&&(a.size[c]=q.pt2px(b))}c=
this._size[0]>this._size[1]?this._size[0]:this._size[1];if("symbolValue"!==a.size[0]){if(isFinite(+a.size[0]))return+a.size[0]/c;if(isFinite(+a.size[2]))return+a.size[2]/c}}return 1};b.prototype.createGraphics3DGraphic=function(a,c){var b=this._getGeometry(a);if(null===b)return null;var d="graphic"+a.uid,H=this._getVertexOpacityAndColor(c),e=1;this._fastUpdates.enabled&&this._fastUpdates.visualVariables.size||(e=this._getScaleFactor(c));e*=this._symbolTextureRatio;c=[this._size[0]*e,this._size[1]*
e];e=this.getGraphicElevationContext(a);return"on-the-ground"===e.mode?this._createAsOverlay(a,b,H,c,e,d,a.uid):this._createAs3DShape(a,b,H,c,e,d,a.uid)};b.prototype.layerPropertyChanged=function(a,c,b){if("opacity"===a)return c=this._getFillColor(this.symbol,this._primitive),this._drapedMaterial.setParameterValues({color:c}),this._material.setParameterValues({color:c}),c=this._getOutlineColor(this.symbol),this._drapedMaterial.setParameterValues({outlineColor:c}),this._material.setParameterValues({outlineColor:c}),
!0;if("elevationInfo"===a){a=this._elevationContext.mode;this._updateElevationContext();var d=this._elevationContext.mode;if("on-the-ground"===a&&"on-the-ground"===d)return!0;if(a!==d&&("on-the-ground"===a||"on-the-ground"===d))return!1;a=l.needsElevationUpdates2D(d)||"absolute-height"===d;for(var f in c){var e=c[f];(d=b(e))&&!d.isDraped()&&(e=this.getGraphicElevationContext(e.graphic),d.needsElevationUpdates=a,d.elevationContext.set(e))}return!0}return!1};b.prototype.applyRendererDiff=function(a,
c,b,d){for(var f in a.diff)switch(f){case "visualVariables":if(t.updateFastSymbolUpdatesState(this._fastUpdates,c,this._fastVisualVariableConvertOptions()))this._material.setParameterValues(this._fastUpdates.materialParameters),this._drapedMaterial.setParameterValues(this._fastUpdates.materialParameters);else return!1;break;default:return!1}return!0};b.prototype.setDrawOrder=function(a,b,f){this._drapedMaterial&&(this._drapedMaterial.setRenderPriority(a),f[this._drapedMaterial.getId()]=!0)};b.prototype._defaultElevationInfoNoZ=
function(){return ea};b.prototype._createAs3DShape=function(a,b,f,d,g,e,h){var c=this,m=this._getFastUpdateAttrValues(a);a=m?function(a){return t.evaluateModelTransform(c._fastUpdates.materialParameters,m,a)}:null;f=B.createPointGeometry(E,null,f,d,fa,null,m);f=[new U(f,e)];e=l.createStageObjectForPoint.call(this,b,f,[[this._material]],null,null,g,e,this._context.layer.uid,h,!0,a);if(null===e)return null;var k=new L(this,e.object,f,null,null,N.perObjectElevationAligner,g);k.alignedTerrainElevation=
e.terrainElevation;k.needsElevationUpdates=l.needsElevationUpdates2D(g.mode)||"absolute-height"===g.mode;k.getScreenSize=this._createScreenSizeGetter(d,a);k.calculateRelativeScreenBounds=function(a){return c._material.calculateRelativeScreenBounds(k.getScreenSize(),1,a)};l.extendPointGraphicElevationContext(k,b,this._context.elevationProvider);return k};b.prototype._createAsOverlay=function(a,b,f,d,g,e,h){var c=this;this._drapedMaterial.setRenderPriority(this._symbolLayerOrder);h=Z.create();T.pointToVector(b,
h,this._context.overlaySR);h[2]=this._getDrapedZ();if((b=this._context.clippingExtent)&&!l.pointInBox2D(h,b))return null;var m=this._getFastUpdateAttrValues(a);a=m?function(a){return t.evaluateModelTransform(c._fastUpdates.materialParameters,m,a)}:null;f=B.createPointGeometry(E,h,f,d,null,null,m);b=new V(f);b.material=this._drapedMaterial;b.center=h;b.bsRadius=0;b.transformation=D;b.name=e;b.uniqueName=e+"#"+f.id;var k=new M(this,[b],null,null,null,g);k.getScreenSize=this._createScreenSizeGetter(d,
a);k.calculateRelativeScreenBounds=function(a){return c._drapedMaterial.calculateRelativeScreenBounds(k.getScreenSize(),1,a)};return k};b.prototype._createScreenSizeGetter=function(a,b){var c=this._outlineSize+2;if(this._fastUpdates.enabled){var d=a[0]/this._symbolTextureRatio,g=a[1]/this._symbolTextureRatio;return function(a){void 0===a&&(a=Array(2));var e=b(D);a[0]=e[0]*d+c;a[1]=e[5]*g+c;return a}}var e=a[0]/this._symbolTextureRatio+c,h=a[1]/this._symbolTextureRatio+c;return function(a){void 0===
a&&(a=Array(2));a[0]=e;a[1]=h;return a}};b.prototype._supportsShaderVisualVariables=function(){return!0};b.prototype._fastVisualVariableConvertOptions=function(){var a=this._size[0]>this._size[1]?this._size[0]:this._size[1],b=[a,a,a],f=q.px2pt(1),a=a*f;return{modelSize:b,symbolSize:[a,a,a],unitInMeters:f,transformation:{anchor:F,scale:ba,rotation:F}}};b.prototype._hasVisibleVerticalOffset=function(a){return this.symbolContainer&&"point-3d"===this.symbolContainer.type&&this.symbolContainer.hasVisibleVerticalOffset()};
b.PRIMITIVE_SIZE=da;b.VALID_ANCHOR_STRINGS=G;return b}(v);var ea={mode:"relative-to-ground",offset:0},fa=y.createFrom(0,0,0,1);return v});