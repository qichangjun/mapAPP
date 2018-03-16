// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../config ../../core/lang ../../request ../support/KMLSublayer ../../tasks/support/FeatureSet ../../PopupTemplate ../../renderers/support/jsonUtils".split(" "),function(y,f,n,g,p,q,r,t,u){function l(a,d,c){c.forEach(function(c){a.set(c.attributes[d],c)})}function v(a,d){var c;d.some(function(d){return d.id===a?(c=d,!0):!1});return c}Object.defineProperty(f,"__esModule",{value:!0});var w={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};
f.parseKML=function(a){var d=a.folders.slice(),c=new Map,m=new Map,h=new Map,k=new Map,f=new Map,x={esriGeometryPoint:m,esriGeometryPolyline:h,esriGeometryPolygon:k};a.featureCollection.layers.forEach(function(b){var e=g.clone(b);e.featureSet.features=[];var a=b.featureSet.geometryType;c.set(a,e);e=b.layerDefinition.objectIdField;"esriGeometryPoint"===a?l(m,e,b.featureSet.features):"esriGeometryPolyline"===a?l(h,e,b.featureSet.features):"esriGeometryPolygon"===a&&l(k,e,b.featureSet.features)});a.groundOverlays&&
a.groundOverlays.forEach(function(b){f.set(b.id,b)});a.folders.forEach(function(b){b.networkLinkIds.forEach(function(e){var c=b.id;if(e=v(e,a.networkLinks))e.parentFolderId=c,e.networkLink=e;e&&d.push(e)})});d.forEach(function(b){b.featureInfos&&(b.points=g.clone(c.get("esriGeometryPoint")),b.polylines=g.clone(c.get("esriGeometryPolyline")),b.polygons=g.clone(c.get("esriGeometryPolygon")),b.mapImages=[],b.featureInfos.map(function(a){switch(a.type){case "esriGeometryPoint":case "esriGeometryPolyline":case "esriGeometryPolygon":var c=
x[a.type].get(a.id);c&&b[w[a.type]].featureSet.features.push(c);break;case "GroundOverlay":(a=f.get(a.id))&&b.mapImages.push(a)}}))});return{folders:a.folders,sublayers:d}};f.fetchService=function(a,d,c){return p(n.kmlServiceUrl,{callbackParamName:"callback",query:{url:a,model:"simple",folders:"",refresh:0!==c?!0:void 0,outSR:JSON.stringify(d)},responseType:"json"})};f.sublayersFromJSON=function(a,d,c){void 0===d&&(d=null);void 0===c&&(c=[]);var f=[],h={},k=a.sublayers,g=a.folders.map(function(a){return a.id});
k.forEach(function(a){var b=new q;d?b.read(a,d):b.read(a);c.length&&-1<g.indexOf(b.id)&&(b.visible=-1!==c.indexOf(b.id));h[a.id]=b;null!=a.parentFolderId&&-1!==a.parentFolderId?(a=h[a.parentFolderId],a.sublayers||(a.sublayers=[]),a.sublayers.unshift(b)):f.unshift(b)});return f};f.getGraphics=function(a){var d=r.fromJSON(a.featureSet).features,c=u.fromJSON(a.layerDefinition.drawingInfo.renderer),f=t.fromJSON(a.popupInfo);return d.map(function(a){var d=c.getSymbol(a);a.symbol=d;a.popupTemplate=f;return a})}});