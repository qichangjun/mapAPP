// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/_base/array","../Extent","../../core/Collection"],function(m,e,h,k,l){Object.defineProperty(e,"__esModule",{value:!0});e.graphicsExtent=function(a){if(!a||!a.length)return null;var d=l.isCollection(a)?a.getItemAt(0).geometry:a[0].geometry,c=d.extent,b=d;null===c&&(c=new k(b.x,b.y,b.x,b.y,d.spatialReference));for(var g=1;g<a.length;g++){var b=d=l.isCollection(a)?a.getItemAt(g).geometry:a[g].geometry,f=d.extent;null===f&&(f=new k(b.x,b.y,b.x,b.y,d.spatialReference));
c=c.clone().union(f)}return 0>c.width&&0>c.height?null:c};e.getGeometries=function(a){return h.map(a,function(a){return a.geometry})};e._encodeGraphics=function(a,d){var c=[];h.forEach(a,function(b,a){b=b.toJSON();var f={};if(b.geometry){var e=d&&d[a];f.geometry=e&&e.toJSON()||b.geometry}b.attributes&&(f.attributes=b.attributes);c[a]=f});return c}});