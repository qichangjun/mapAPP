// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports dojo/_base/lang ../../../../core/Error ../../../../core/numberUtils ../../../../core/promiseUtils ../../../../Color ../../statistics/support/utils ../../../../symbols/SimpleMarkerSymbol ../../../../symbols/SimpleLineSymbol ../../../../symbols/SimpleFillSymbol ../../../../symbols/PointSymbol3D ../../../../symbols/IconSymbol3DLayer ../../../../symbols/ObjectSymbol3DLayer ../../support/utils ../../../../symbols/MeshSymbol3D ../../../../symbols/FillSymbol3DLayer ../../../support/pointCloud/PointSizeSplatAlgorithm ../../statistics/classBreaks".split(" "),
function(G,f,q,r,k,t,u,v,w,x,y,l,z,A,B,C,D,E,m){function h(a,b){return new r(a,b)}function n(a,b,c){var d,e;b=v.getSuggestedDataRange({statistics:a,isDate:b});b.defaultValuesUsed?(d=b.min,e=b.max):!c||null!=a.avg&&a.stddev||(d=a.min,e=a.max);return null!=d?[d,e]:null}function F(a){var b=a.layer;return a.fields.filter(function(a){a=b.getFieldUsageInfo(a);return!a||!a.supportsRenderer})}Object.defineProperty(f,"__esModule",{value:!0});var p=/^(\d+(\.\d+)?)\s*(%)$/i;f.createError=h;f.getDefaultDataRange=
n;f.createColors=function(a,b){for(var c=[],d=a.length,e=0;e<b;e++)c.push(new u(a[e%d]));return c};f.createStopValues=function(a,b){void 0===b&&(b=!0);var c=a.avg,d=c-a.stddev,e=c+a.stddev;d<a.min&&(d=a.min);e>a.max&&(e=a.max);b&&(c=d+(e-d)/2);a=k.round([d,e],{strictBounds:!0});d=a[0];e=a[1];a=[d,d+(c-d)/2,c,c+(e-c)/2,e];return k.round(a,{strictBounds:!0})};f.createSymbol=function(a,b,c,d,e,f){var g;switch(c){case "point":case "multipoint":c=null!=f?f:a.size;"2d"===d?g=new w({color:b,size:c,outline:{color:a.outline.color,
width:a.outline.width}}):"3d-flat"===d?g=new l({symbolLayers:[new z({size:c,resource:{primitive:"circle"},material:{color:b},outline:{color:a.outline.color,size:a.outline.width}})]}):-1<d.indexOf("3d-volumetric")&&(g=new l({symbolLayers:[new A({height:c,resource:{primitive:"3d-volumetric-uniform"===d?"sphere":"cylinder"},material:{color:b}})]}));break;case "polyline":a=null!=f?f:a.width;"2d"===d&&(g=new x({color:b,width:a}));break;case "polygon":"2d"===d&&(g=new y({color:b,outline:{color:a.outline.color,
width:a.outline.width}}));break;case "mesh":g=new C({symbolLayers:[new D({material:{color:b,colorMixMode:e}})]})}return g};f.verifyBasicFieldValidity=function(a,b,c){var d=B.getUnknownFields({layer:a,fields:b});if(d.length)return h(c,"Unknown fields: "+d.join(", ")+". You can only use fields defined in the layer schema");a=F({layer:a,fields:b});if(a.length)return h(c,"Unsupported fields: "+a.join(", ")+". You can only use fields that are accessible to the renderer i.e. FieldUsageInfo.supportsRenderer must be true")};
f.getClassBreaks=function(a){return m(a).then(function(b){var c=n({min:b.minValue,max:b.maxValue,avg:null,stddev:null},!1,!1);return(c?m(q.mixin(a,{classificationMethod:"equal-interval",numClasses:1,analyzeData:!1,minValue:c[0],maxValue:c[1],normalizationTotal:c[0]+c[1]})):t.resolve(b)).then(function(a){return{result:a,defaultValuesUsed:!!c}})})};f.isValidPointSize=function(a){return p.test(a)};f.getPointSizeAlgorithm=function(a){a=a.match(p);var b=Number(a[1]);if("%"===a[3])return new E.default({scaleFactor:b/
100,minSize:1.1})}});