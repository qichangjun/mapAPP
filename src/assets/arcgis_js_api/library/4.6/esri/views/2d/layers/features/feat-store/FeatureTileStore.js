// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/lang"],function(l,p,r){function q(a,b,d){for(var g,f,e=0;e<a.length;e++)for(var h=a[e],c=0;c<h.length;c++){var k=h[c];0<c?(g+=k[0],f+=k[1]):(g=k[0],f=k[1]);k[0]=b(g);k[1]=d(f)}}function t(a,b,d){var g=b.translate[0],f=b.translate[1],e=b.scale[0],h=b.scale[1];u[a](d,function(b){return b*e+g},function(b){return f-b*h})}Object.defineProperty(p,"__esModule",{value:!0});var u={esriGeometryEnvelope:function(a,b,d){a.xmin=b(a.xmin);a.ymin=d(a.ymin);a.xmax=
b(a.xmax);a.ymax=d(a.ymax)},esriGeometryMultipoint:function(a,b,d){a=a.points;for(var g,f,e=0,h=a.length;e<h;e++){var c=a[e];0<e?(g+=c[0],f+=c[1]):(g=c[0],f=c[1]);c[0]=b(g);c[1]=d(f)}},esriGeometryPoint:function(a,b,d){a.x=b(a.x);a.y=d(a.y)},esriGeometryPolygon:function(a,b,d){q(a.rings,b,d)},esriGeometryPolyline:function(a,b,d){q(a.paths,b,d)}};l=function(){function a(b,a){this.objectIdField=b;this.geometryType=a;this._itemsById=new Map;this._featureRefCountByFeatureId=new Map;this._featureIdsByTileKey=
new Map}a.prototype.set=function(b,a){var d=a.features;a=a.transform;var f=this.objectIdField,e=this._itemsById,h=this._featureRefCountByFeatureId,c=this._featureIdsByTileKey;if(!c.has(b)){for(var k=[],n=0;n<d.length;n++){var l=d[n],m=l.attributes[f];k.push(m);e.set(m,{feature:l,transform:a});h.set(m,(h.get(m)||0)+1)}c.set(b,k)}};a.prototype.delete=function(a){var b=this._itemsById,g=this._featureRefCountByFeatureId,f=this._featureIdsByTileKey;if(f.has(a)){for(var e=0,h=f.get(a);e<h.length;e++){var c=
h[e],k=g.get(c)-1;0===k?(g.delete(c),b.delete(c)):g.set(c,k)}f.delete(a)}};a.prototype.getFeature=function(a){a=this._itemsById.has(a)?this._itemsById.get(a):null;if(!a)return null;var b=r.clone(a.feature);t(this.geometryType,a.transform,b.geometry);return b};return a}();p.default=l});