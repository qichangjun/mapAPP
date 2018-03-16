// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators dojo/_base/lang ../../core/Accessor ../../core/HandleRegistry ./wmsUtils".split(" "),function(t,u,l,f,e,m,n,k,p){var q={visible:"visibleSublayers"},g=[102100,3857,102113,900913],r=[3395,54004];return function(h){function b(){var a=null!==h&&h.apply(this,arguments)||this;a._layerHandles=new k;a.extent=null;return a}l(b,h);Object.defineProperty(b.prototype,"layer",
{set:function(a){var c=this;this._get("layer")!==a&&(this._set("layer",a),this._layerHandles&&(this._layerHandles.removeAll(),this._layerHandles=null),a&&(this._layerHandles||(this._layerHandles=new k),this._layerHandles.add([a.sublayers.on("change",function(){return c.notifyChange("visibleSublayers")}),a.on("wms-sublayer-update",function(a){return c.notifyChange(q[a.propertyName])})])))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"layers",{get:function(){return this.visibleSublayers.map(function(a){return a.name}).join(",")},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"version",{get:function(){return(this._get("version")||0)+1},set:function(a){this._set("version",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"visibleSublayers",{get:function(){var a=this.layer.sublayers,c=[],d=function(a){a.visible&&(a.sublayers?a.sublayers.forEach(d):c.unshift(a))};a&&a.forEach(d);return c},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"wkid",{get:function(){var a=this.extent,
c=this.layer.spatialReferences,d=a.spatialReference&&a.spatialReference.wkid;c&&-1===c.indexOf(d)&&a.spatialReference.latestWkid&&(d=a.spatialReference.latestWkid);a=g.some(function(a){return a===d});if(!c)return d;if(a){var b=[];c.forEach(function(a){-1<g.indexOf(a)&&b.push(a)});b.length||c.forEach(function(a){-1<r.indexOf(a)&&b.push(a)});d=0<b.length?b[0]:g[0]}return d},enumerable:!0,configurable:!0});b.prototype.toJSON=function(){var a=this.layer,c=this.extent,b=this.wkid;a.spatialReferences&&
-1===a.spatialReferences.indexOf(b)&&c.spatialReference.latestWkid&&(b=c.spatialReference.latestWkid);c={bbox:"1.3.0"===a.version&&p.coordsReversed(b)?c.ymin+","+c.xmin+","+c.ymax+","+c.xmax:c.xmin+","+c.ymin+","+c.xmax+","+c.ymax,format:a.imageFormat,request:"GetMap",service:"WMS",styles:"",transparent:a.imageTransparency,version:a.version};isNaN(b)||("1.3.0"===a.version?c.crs="EPSG:"+b:c.srs="EPSG:"+b);m.mixin(c,{layers:this.layers});return c};f([e.property()],b.prototype,"extent",void 0);f([e.property()],
b.prototype,"layer",null);f([e.property({readOnly:!0,dependsOn:["visibleSublayers"]})],b.prototype,"layers",null);f([e.property({dependsOn:["layers","layer.imageTransparency"]})],b.prototype,"version",null);f([e.property({readOnly:!0,dependsOn:["layer.sublayers"]})],b.prototype,"visibleSublayers",null);f([e.property()],b.prototype,"wkid",null);return b=f([e.subclass("esri.layers.support.ExportWMSImageParameters")],b)}(e.declared(n))});