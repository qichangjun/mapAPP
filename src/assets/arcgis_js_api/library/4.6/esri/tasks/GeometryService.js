// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("../core/kebabDictionary ../core/accessorSupport/ensureType ../geometry/Extent ../geometry/Multipoint ../geometry/Polyline ../geometry/Polygon ../geometry/support/jsonUtils ../request ./Task ./support/ProjectParameters dojo/_base/lang".split(" "),function(h,r,n,t,p,m,g,f,u,v,d){var q=h({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"}),w=r.ensureType(v);h=u.createSubclass({declaredClass:"esri.tasks.GeometryService",areasAndLengths:function(a,b){a=
{query:d.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON()),callbackParamName:"callback"};if(this.requestOptions||b)a=d.mixin({},this.requestOptions,b,a);return f(this.parsedUrl.path+"/areasAndLengths",a).then(function(a){return a.data})},autoComplete:function(a,b,c){var e=a[0].spatialReference;a={query:d.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(e.toJSON()),polygons:JSON.stringify(this._encodeGeometries(a).geometries),polylines:JSON.stringify(this._encodeGeometries(b).geometries)}),
callbackParamName:"callback"};if(this.requestOptions||c)a=d.mixin({},this.requestOptions,c,a);return f(this.parsedUrl.path+"/autoComplete",a).then(function(a){return(a.data.geometries||[]).map(function(a){return new m({spatialReference:e,rings:a.rings})})})},buffer:function(a,b){var c=d.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON()),e=a.outSpatialReference||a.geometries[0].spatialReference;a={query:c,callbackParamName:"callback"};if(this.requestOptions||b)a=d.mixin({},this.requestOptions,b,
a);return f(this.parsedUrl.path+"/buffer",a).then(function(a){return(a.data.geometries||[]).map(function(a){return new m({spatialReference:e,rings:a.rings})})})},cut:function(a,b,c){var e=a[0].spatialReference,k=a.map(function(a){return a.toJSON()});a={query:d.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(e.toJSON()),target:JSON.stringify({geometryType:g.getJsonType(a[0]),geometries:k}),cutter:JSON.stringify(b.toJSON())}),callbackParamName:"callback"};if(this.requestOptions||c)a=d.mixin({},
this.requestOptions,c,a);return f(this.parsedUrl.path+"/cut",a).then(function(a){a=a.data;return{cutIndexes:a.cutIndexes,geometries:(a.geometries||[]).map(function(a){return g.fromJSON(a).set("spatialReference",e)})}})},convexHull:function(a,b){var c=a[0].spatialReference;a={query:d.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(c.toJSON()),geometries:JSON.stringify(this._encodeGeometries(a))}),callbackParamName:"callback"};if(this.requestOptions||b)a=d.mixin({},this.requestOptions,b,a);
return f(this.parsedUrl.path+"/convexHull",a).then(function(a){return g.fromJSON(a.data.geometry).set("spatialReference",c)})},densify:function(a,b){var c=d.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON()),e=a.geometries[0].spatialReference;a={query:c,callbackParamName:"callback"};if(this.requestOptions||b)a=d.mixin({},this.requestOptions,b,a);return f(this.parsedUrl.path+"/densify",a).then(function(a){return(a.data.geometries||[]).map(function(a){return g.fromJSON(a).set("spatialReference",e)})})},
difference:function(a,b,c){var e=a[0].spatialReference;a={query:d.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(e.toJSON()),geometries:JSON.stringify(this._encodeGeometries(a)),geometry:JSON.stringify({geometryType:g.getJsonType(b),geometry:b.toJSON()})}),callbackParamName:"callback"};if(this.requestOptions||c)a=d.mixin({},this.requestOptions,c,a);return f(this.parsedUrl.path+"/difference",a).then(function(a){return(a.data.geometries||[]).map(function(a){return g.fromJSON(a).set("spatialReference",
e)})})},distance:function(a,b){a={query:d.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON()),callbackParamName:"callback"};if(this.requestOptions||b)a=d.mixin({},this.requestOptions,b,a);return f(this.parsedUrl.path+"/distance",a).then(this._handleDistanceResponse)},fromGeoCoordinateString:function(a,b){var c={};d.isObject(a.sr)?c.sr=a.sr.wkid||JSON.stringify(a.sr.toJSON()):c.sr=a.sr;c.strings=JSON.stringify(a.strings);c.conversionType=q.toJSON(a.conversionType||"mgrs");c.conversionMode=a.conversionMode;
a={query:d.mixin({},this.parsedUrl.query,{f:"json"},c),callbackParamName:"callback"};if(this.requestOptions||b)a=d.mixin({},this.requestOptions,b,a);return f(this.parsedUrl.path+"/fromGeoCoordinateString",a).then(this._handleFromGeoCoordinateResponse)},generalize:function(a,b){var c=d.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON()),e=a.geometries[0].spatialReference;a={query:c,callbackParamName:"callback"};if(this.requestOptions||b)a=d.mixin({},this.requestOptions,b,a);return f(this.parsedUrl.path+
"/generalize",a).then(function(a){return(a.data.geometries||[]).map(function(a){return g.fromJSON(a).set("spatialReference",e)})})},intersect:function(a,b,c){var e=a[0].spatialReference;a={query:d.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(e.toJSON()),geometries:JSON.stringify(this._encodeGeometries(a)),geometry:JSON.stringify({geometryType:g.getJsonType(b),geometry:b.toJSON()})}),callbackParamName:"callback"};if(this.requestOptions||c)a=d.mixin({},this.requestOptions,c,a);return f(this.parsedUrl.path+
"/intersect",a).then(function(a){return(a.data.geometries||[]).map(function(a){return g.fromJSON(a).set("spatialReference",e)})})},lengths:function(a,b){a={query:d.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON()),callbackParamName:"callback"};if(this.requestOptions||b)a=d.mixin({},this.requestOptions,b,a);return f(this.parsedUrl.path+"/lengths",a).then(function(a){return a.data})},labelPoints:function(a,b){var c=a.map(function(a){return a.toJSON()}),e=a[0].spatialReference;a={query:d.mixin({},
this.parsedUrl.query,{f:"json",sr:e.wkid?e.wkid:JSON.stringify(e.toJSON()),polygons:JSON.stringify(c)}),callbackParamName:"callback"};if(this.requestOptions||b)a=d.mixin({},this.requestOptions,b,a);return f(this.parsedUrl.path+"/labelPoints",a).then(function(a){return(a.data.labelPoints||[]).map(function(a){return g.fromJSON(a).set("spatialReference",e)})})},offset:function(a,b){var c=d.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON()),e=a.geometries[0].spatialReference;a={query:c,callbackParamName:"callback"};
if(this.requestOptions||b)a=d.mixin({},this.requestOptions,b,a);return f(this.parsedUrl.path+"/offset",a).then(function(a){return(a.data.geometries||[]).map(function(a){return g.fromJSON(a).set("spatialReference",e)})})},project:function(a,b){a=w(a);var c=d.mixin({},a.toJSON(),this.parsedUrl.query,{f:"json"}),e=a.outSpatialReference,k=g.getJsonType(a.geometries[0]),l=this._decodeGeometries;a={query:c,callbackParamName:"callback"};if(this.requestOptions||b)a=d.mixin({},this.requestOptions,b,a);return f(this.parsedUrl.path+
"/project",a).then(function(a){return l(a.data,k,e)})},relation:function(a,b){a={query:d.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON()),callbackParamName:"callback"};if(this.requestOptions||b)a=d.mixin({},this.requestOptions,b,a);return f(this.parsedUrl.path+"/relation",a).then(this._handleRelationResponse)},reshape:function(a,b,c){var e=a.spatialReference;a={query:d.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(e.toJSON()),target:JSON.stringify({geometryType:g.getJsonType(a),geometry:a.toJSON()}),
reshaper:JSON.stringify(b.toJSON())}),callbackParamName:"callback"};if(this.requestOptions||c)a=d.mixin({},this.requestOptions,c,a);return f(this.parsedUrl.path+"/reshape",a).then(function(a){return g.fromJSON(a.data.geometry).set("spatialReference",e)})},simplify:function(a,b){var c=a[0].spatialReference,e=d.mixin({},this.parsedUrl.query,{f:"json",sr:c.wkid?c.wkid:JSON.stringify(c.toJSON()),geometries:JSON.stringify(this._encodeGeometries(a))}),k=g.getJsonType(a[0]),l=this._decodeGeometries;a={query:e,
callbackParamName:"callback"};if(this.requestOptions||b)a=d.mixin({},this.requestOptions,b,a);return f(this.parsedUrl.path+"/simplify",a).then(function(a){return l(a.data,k,c)})},toGeoCoordinateString:function(a,b){var c={};d.isObject(a.sr)?c.sr=a.sr.wkid||JSON.stringify(a.sr.toJSON()):c.sr=a.sr;c.coordinates=JSON.stringify(a.coordinates);c.conversionType=q.toJSON(a.conversionType||"mgrs");c.conversionMode=a.conversionMode;c.numOfDigits=a.numOfDigits;c.rounding=a.rounding;c.addSpaces=a.addSpaces;
a={query:d.mixin({},this.parsedUrl.query,{f:"json"},c),callbackParamName:"callback"};if(this.requestOptions||b)a=d.mixin({},this.requestOptions,b,a);return f(this.parsedUrl.path+"/toGeoCoordinateString",a).then(this._handleToGeoCoordinateResponse)},trimExtend:function(a,b){var c=d.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON()),e=a.sr;a={query:c,callbackParamName:"callback"};if(this.requestOptions||b)a=d.mixin({},this.requestOptions,b,a);return f(this.parsedUrl.path+"/trimExtend",a).then(function(a){return(a.data.geometries||
[]).map(function(a){return new p({spatialReference:e,paths:a.paths})})})},union:function(a,b){var c=a[0].spatialReference;a={query:d.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(c.toJSON()),geometries:JSON.stringify(this._encodeGeometries(a))}),callbackParamName:"callback"};if(this.requestOptions||b)a=d.mixin({},this.requestOptions,b,a);return f(this.parsedUrl.path+"/union",a).then(function(a){return g.fromJSON(a.data.geometry).set("spatialReference",c)})},_handleRelationResponse:function(a){return a.data.relations},
_handleDistanceResponse:function(a){return(a=a.data)&&a.distance},_handleToGeoCoordinateResponse:function(a){return a.data.strings},_handleFromGeoCoordinateResponse:function(a){return a.data.coordinates},_encodeGeometries:function(a){var b=[],c,d=a.length;for(c=0;c<d;c++)b.push(a[c].toJSON());return{geometryType:g.getJsonType(a[0]),geometries:b}},_decodeGeometries:function(a,b,c){var e=g.getGeometryType(b);a=a.geometries;var f=[],l={spatialReference:c.toJSON()},h=d.mixin;a.forEach(function(a,b){f[b]=
new e(h(a,l))});return f},_toProjectGeometry:function(a){var b=a.spatialReference.toJSON();return a instanceof n?new m({rings:[[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]]],spatialReference:b}):new p({paths:[[].concat(a.points)],spatialReference:b})},_fromProjectedGeometry:function(a,b,c){return"extent"===b?(a=a.rings[0],new n(a[0][0],a[0][1],a[2][0],a[2][1],c)):new t({points:a.paths[0],spatialReference:c.toJSON()})}});d.mixin(h,{UNIT_METER:9001,UNIT_GERMAN_METER:9031,
UNIT_FOOT:9002,UNIT_SURVEY_FOOT:9003,UNIT_CLARKE_FOOT:9005,UNIT_FATHOM:9014,UNIT_NAUTICAL_MILE:9030,UNIT_SURVEY_CHAIN:9033,UNIT_SURVEY_LINK:9034,UNIT_SURVEY_MILE:9035,UNIT_KILOMETER:9036,UNIT_CLARKE_YARD:9037,UNIT_CLARKE_CHAIN:9038,UNIT_CLARKE_LINK:9039,UNIT_SEARS_YARD:9040,UNIT_SEARS_FOOT:9041,UNIT_SEARS_CHAIN:9042,UNIT_SEARS_LINK:9043,UNIT_BENOIT_1895A_YARD:9050,UNIT_BENOIT_1895A_FOOT:9051,UNIT_BENOIT_1895A_CHAIN:9052,UNIT_BENOIT_1895A_LINK:9053,UNIT_BENOIT_1895B_YARD:9060,UNIT_BENOIT_1895B_FOOT:9061,
UNIT_BENOIT_1895B_CHAIN:9062,UNIT_BENOIT_1895B_LINK:9063,UNIT_INDIAN_FOOT:9080,UNIT_INDIAN_1937_FOOT:9081,UNIT_INDIAN_1962_FOOT:9082,UNIT_INDIAN_1975_FOOT:9083,UNIT_INDIAN_YARD:9084,UNIT_INDIAN_1937_YARD:9085,UNIT_INDIAN_1962_YARD:9086,UNIT_INDIAN_1975_YARD:9087,UNIT_FOOT_1865:9070,UNIT_RADIAN:9101,UNIT_DEGREE:9102,UNIT_ARCMINUTE:9103,UNIT_ARCSECOND:9104,UNIT_GRAD:9105,UNIT_GON:9106,UNIT_MICRORADIAN:9109,UNIT_ARCMINUTE_CENTESIMAL:9112,UNIT_ARCSECOND_CENTESIMAL:9113,UNIT_MIL6400:9114,UNIT_BRITISH_1936_FOOT:9095,
UNIT_GOLDCOAST_FOOT:9094,UNIT_INTERNATIONAL_CHAIN:109003,UNIT_INTERNATIONAL_LINK:109004,UNIT_INTERNATIONAL_YARD:109001,UNIT_STATUTE_MILE:9093,UNIT_SURVEY_YARD:109002,UNIT_50KILOMETER_LENGTH:109030,UNIT_150KILOMETER_LENGTH:109031,UNIT_DECIMETER:109005,UNIT_CENTIMETER:109006,UNIT_MILLIMETER:109007,UNIT_INTERNATIONAL_INCH:109008,UNIT_US_SURVEY_INCH:109009,UNIT_INTERNATIONAL_ROD:109010,UNIT_US_SURVEY_ROD:109011,UNIT_US_NAUTICAL_MILE:109012,UNIT_UK_NAUTICAL_MILE:109013,UNIT_SQUARE_INCHES:"esriSquareInches",
UNIT_SQUARE_FEET:"esriSquareFeet",UNIT_SQUARE_YARDS:"esriSquareYards",UNIT_ACRES:"esriAcres",UNIT_SQUARE_MILES:"esriSquareMiles",UNIT_SQUARE_MILLIMETERS:"esriSquareMillimeters",UNIT_SQUARE_CENTIMETERS:"esriSquareCentimeters",UNIT_SQUARE_DECIMETERS:"esriSquareDecimeters",UNIT_SQUARE_METERS:"esriSquareMeters",UNIT_ARES:"esriAres",UNIT_HECTARES:"esriHectares",UNIT_SQUARE_KILOMETERS:"esriSquareKilometers"});return h});