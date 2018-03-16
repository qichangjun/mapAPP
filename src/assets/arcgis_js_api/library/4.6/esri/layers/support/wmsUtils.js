// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","../../geometry/Extent","../../geometry/SpatialReference","../../core/urlUtils"],function(H,l,v,q,y){function r(a){return z.some(function(b){var c=b[1];return a>=b[0]&&a<=c})}function B(a){var b=[];a.forEach(function(a){b.push(a);a.sublayers&&a.sublayers.length&&(b=b.concat(B(a.sublayers)),delete a.sublayers)});return b}function A(a,b,c,e){return(a=g(a,c))?a.getAttribute(b):e}function g(a,b){return(a=b&&b.getElementsByTagName(a))&&0<a.length?a[0]:null}function k(a,b,c){return(a=
g(a,b))?a.textContent:c}function n(a,b,c){if(!a)return null;var e=parseFloat(a.getAttribute("minx")),d=parseFloat(a.getAttribute("miny")),f=parseFloat(a.getAttribute("maxx"));a=parseFloat(a.getAttribute("maxy"));c?(c=isNaN(d)?-Number.MAX_VALUE:d,e=isNaN(e)?-Number.MAX_VALUE:e,d=isNaN(a)?Number.MAX_VALUE:a,f=isNaN(f)?Number.MAX_VALUE:f):(c=isNaN(e)?-Number.MAX_VALUE:e,e=isNaN(d)?-Number.MAX_VALUE:d,d=isNaN(f)?Number.MAX_VALUE:f,f=isNaN(a)?Number.MAX_VALUE:a);b=new q({wkid:b});return new v({xmin:c,
ymin:e,xmax:d,ymax:f,spatialReference:b})}function C(a,b){a=g(b,a);if(a=g("DCPType",a))if(a=g("HTTP",a))if(a=g("Get",a)){var c=A("OnlineResource","xlink:href",a,null);if(c){c.indexOf("\x26")===c.length-1&&(c=c.substring(0,c.length-1));a=["service","request"];b=[];var c=y.urlToObject(c),e;for(e in c.query)c.query.hasOwnProperty(e)&&-1===a.indexOf(e.toLowerCase())&&b.push(e+"\x3d"+c.query[e]);return c.path+(b.length?"?"+b.join("\x26"):"")}}return null}function D(a,b){var c=a.getElementsByTagName("Operation");
if(c&&c.length){var e=[];Array.prototype.slice.call(c).forEach(function(a){a.getAttribute("name")===b&&(a=a.getElementsByTagName("Format"),Array.prototype.slice.call(a).forEach(function(a){e.push(a.textContent)}))});return e}a=g(b,a).getElementsByTagName("Format");return Array.prototype.slice.call(a).map(function(a){return a.textContent})}function w(a,b){if(!a)return null;var c={id:E++,fullExtents:[],parentLayerId:null,queryable:"1"===a.getAttribute("queryable"),spatialReferences:[],sublayers:null},
e=g("LatLonBoundingBox",a),d=g("EX_GeographicBoundingBox",a),f=null;e&&(f=n(e,4326));d&&(f=new v(0,0,0,0,new q({wkid:4326})),f.xmin=parseFloat(k("westBoundLongitude",d,0)),f.ymin=parseFloat(k("southBoundLatitude",d,0)),f.xmax=parseFloat(k("eastBoundLongitude",d,0)),f.ymax=parseFloat(k("northBoundLatitude",d,0)));e||d||(f=new v(-180,-90,180,90,new q({wkid:4326})));var l=-1<["1.0.0","1.1.0","1.1.1"].indexOf(b)?"SRS":"CRS";Array.prototype.slice.call(a.childNodes).forEach(function(a){if("Name"===a.nodeName)c.name=
a.textContent||"";else if("Title"===a.nodeName)c.title=a.textContent||"";else if("Abstract"===a.nodeName)c.description=a.textContent||"";else if("BoundingBox"===a.nodeName){var e=a.getAttribute(l);if(e&&0===e.indexOf("EPSG:")){var d=parseInt(e.substring(5),10);0===d||isNaN(d)||f||(f="1.3.0"===b?n(a,d,r(d)):n(a,d))}(d=e&&e.indexOf(":"))&&-1<d&&(d=parseInt(e.substring(d+1,e.length),10),0===d||isNaN(d)||(d=m[d]?m[d]:d),a="1.3.0"===b?n(a,d,r(d)):n(a,d),c.fullExtents.push(a))}else if(a.nodeName===l)a.textContent.split(" ").forEach(function(a){a=
-1<a.indexOf(":")?parseInt(a.split(":")[1],10):parseInt(a,10);0===a||isNaN(a)||(m[a]&&(a=m[a]),-1===c.spatialReferences.indexOf(a)&&c.spatialReferences.push(a))});else if("Style"!==a.nodeName||c.legendURL)"Layer"===a.nodeName&&(a=w(a,b))&&(a.parentLayerId=c.id,c.sublayers||(c.sublayers=[]),c.sublayers.push(a));else if(a=g("LegendURL",a))if(a=g("OnlineResource",a))c.legendURL=a.getAttribute("xlink:href")});c.extent=f&&f.toJSON();return c}Object.defineProperty(l,"__esModule",{value:!0});var z=[[4001,
4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],
[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],m={84:4326,83:4269,27:4267},E;l.parseCapabilities=function(a){if(a){E=-1;"string"===typeof a&&(a=(new DOMParser).parseFromString(a,"text/xml"));var b=a.documentElement,c=g("Layer",b);if(c){var e=A("WMS_Capabilities","version",b,null)||A("WMT_MS_Capabilities","version",b,"1.3.0"),d=g("Service",b);a=k("Title",d,"")||k("Name",d,"");var f=k("AccessConstraints",d,
""),l=k("Abstract",d,""),n=parseInt(k("MaxWidth",d,5E3),10),d=parseInt(k("MaxHeight",d,5E3),10),h=w(c,e),m=0,q,c=g("Capability",b);Array.prototype.slice.call(c.childNodes).forEach(function(a){"Layer"===a.nodeName&&(0===m?q=a:(1===m&&h.name&&(h.name="",h.sublayers.push(w(q,e))),h.sublayers.push(w(a,e))),m++)});if(!h)return null;var p=[],t,u,c=h.fullExtents;(p=h.sublayers)&&0!==p.length||p.push(h);t=h.extent;t||(t=new v(p[0].extent),h.extent=t.toJSON(),t=h.extent);u=h.spatialReferences;if(!u.length&&
0<p.length){var r=function(a){var b=[];a.sublayers.forEach(function(a){!b.length&&a.spatialReferences.length&&(b=a.spatialReferences||r(a))});return b};p.forEach(function(a){u.length||(u=a.spatialReferences||r(a))})}var y=C(b,"GetMap"),z=D(b,"GetMap"),F=C(b,"GetFeatureInfo"),x;F&&(b=D(b,"GetFeatureInfo"),-1<b.indexOf("text/html")?x="text/html":-1<b.indexOf("text/plain")&&(x="text/plain"));if(!x){var G=function(a){a&&(a.queryable=!1,a.sublayers&&a.sublayers.forEach(function(a){G(a)}))};G(h)}b=B(p);
return{copyright:f,description:l,extent:t,fullExtents:c,featureInfoFormat:x,featureInfoUrl:F,mapUrl:y,maxImageWidth:n,maxImageHeight:d,layers:b,spatialReferences:u,supportedImageFormatTypes:z,title:a,version:e}}}};l.coordsReversed=r;l.getPopupLayers=function(a){return a.length?a.filter(function(a){return a.popupEnabled&&a.name&&a.queryable}).map(function(a){return a.name}).join(","):""}});