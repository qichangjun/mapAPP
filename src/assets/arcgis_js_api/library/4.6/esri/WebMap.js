// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
require({cache:{"esri/webmap/InitialViewProperties":function(){define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../Viewpoint ../core/Accessor ../geometry/SpatialReference ../core/accessorSupport/decorators".split(" "),function(r,u,m,c,n,p,h,f){return function(k){function g(c){c=k.call(this,c)||this;c.spatialReference=null;c.viewpoint=null;return c}m(g,k);l=g;g.prototype.clone=function(){return new l({spatialReference:this.spatialReference?this.spatialReference.clone():
null,viewpoint:this.viewpoint?this.viewpoint.clone():null})};c([f.shared("esri.webmap.InitialViewProperties")],g.prototype,"declaredClass",void 0);c([f.property({value:null,type:h})],g.prototype,"spatialReference",void 0);c([f.property({value:null,type:n})],g.prototype,"viewpoint",void 0);return g=l=c([f.subclass()],g);var l}(f.declared(p))})},"*noref":1}});
define("require exports ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./Map ./Viewpoint ./core/Error ./core/JSONSupport ./core/Loadable ./core/promiseUtils ./core/requireUtils ./core/Logger ./geometry/SpatialReference ./geometry/support/webMercatorUtils ./portal/Portal ./portal/PortalItem ./portal/support/geometryServiceUtils ./tasks/support/ProjectParameters ./webmap/InitialViewProperties ./core/accessorSupport/decorators dojo/_base/lang".split(" "),function(r,u,m,c,n,p,h,
f,k,g,l,v,w,x,t,y,z,A,q,d,B){var C=v.getLogger("esri.WebMap");return function(f){function b(a){a=f.call(this)||this;a.applicationProperties=null;a.authoringApp=null;a.authoringAppVersion=null;a.bookmarks=null;a.initialViewProperties=null;a.portalItem=null;a.presentation=null;a.sourceVersion=null;a.tables=null;a.widgets=null;return a}m(b,f);k=b;b.prototype.initialize=function(){this.when().catch(function(a){C.error("#load()","Failed to load web map",a)});if(this.resourceInfo){var a=void 0;try{a=this._validateJSON(this.resourceInfo)}catch(e){this.addResolvingPromise(g.reject(e));
return}this.read(a)}};b.prototype.readInitialViewProperties=function(a,e){a={};e.spatialReference&&(a.spatialReference=w.fromJSON(e.spatialReference));return new q(a)};b.prototype.readSourceVersion=function(a,e){a=e.version.split(".");e=a[1];return{major:parseInt(a[0],10),minor:parseInt(e,10)}};b.prototype.load=function(){this.addResolvingPromise(this._loadFromSource());return this.when()};b.prototype.toJSON=function(){throw new h("internal:not-yet-implemented","WebMap.toJSON is not yet implemented");
};b.fromJSON=function(a){if(!a)return null;if(a.declaredClass)throw Error("JSON object is already hydrated");return new k({resourceInfo:a})};b.prototype._loadFromSource=function(){return this.resourceInfo?this._loadFromJSON(this.resourceInfo,{origin:"web-map"}):this.portalItem&&this.portalItem.id?this._loadFromItem(this.portalItem):g.resolve(null)};b.prototype._loadFromItem=function(a){var e=this;return a.load().otherwise(function(a){throw new h("webmap:load-portal-item","Failed to load portal item",
{error:a});}).then(function(){if("Web Map"!==a.type)throw new h("webmap:invalid-portal-item","Invalid portal item type '${type}', expected 'Web Map'",{type:a.type});}).then(function(){return a.fetchData()}).then(function(b){e.resourceInfo=b;return e._readAndLoadFromJSON(b,{origin:"web-map",portal:a.portal||t.getDefault()})}).then(function(){return e._getInitialExtent()}).then(function(a){if(a){var b=e.initialViewProperties?e.initialViewProperties.clone():new q;b.viewpoint=new p;b.viewpoint.targetGeometry=
a;e.initialViewProperties=b}})};b.prototype._readAndLoadFromJSON=function(a,b){a=this._validateJSON(a);this.read(a,b);return this._loadFromJSON(a,b)};b.prototype._validateJSON=function(a){a=this._sanitizeJSON(a);var b=this._validateVersion(a.version);a.version=b.major+"."+b.minor;return a};b.prototype._sanitizeJSON=function(a){return{authoringApp:a.authoringApp||"",authoringAppVersion:a.authoringAppVersion||"",applicationProperties:a.applicationProperties,baseMap:a.baseMap,bookmarks:a.bookmarks,operationalLayers:a.operationalLayers,
presentation:a.presentation,spatialReference:a.spatialReference,tables:a.tables,version:a.version||"0.0",widgets:a.widgets}};b.prototype._validateVersion=function(a){var b=a.split("."),c=b[0],b=b[1],d=/^\s*\d+\s*$/;if(!d.test(c))throw new h("webmap:invalid-version","Expected major version to be a number, but got '"+a+"'",{version:a});if(!d.test(b))throw new h("webmap:invalid-version","Expected minor version to be a number, but got '"+a+"'",{version:a});c=parseInt(c,10);b=parseInt(b,10);if(2!==c)throw new h("webmap:unsupported-version",
"Required major version is '2', but got '"+c+"'",{version:a});return{major:c,minor:b}};b.prototype._loadFromJSON=function(a,b){var c=this,e={context:B.mixin({},b,{layerContainerType:"operational-layers"})};this.portalItem&&(e.context.portal=this.portalItem.portal||t.getDefault());return l.when(r,"./portal/support/layersCreator").then(function(b){var d=[],f=a.operationalLayers;f&&f.length&&d.push.apply(d,b.populateOperationalLayers(c.layers,f,e));return g.eachAlways(d).then(function(){})})};b.prototype._getInitialExtent=
function(){var a=null,b=this.initialViewProperties&&this.initialViewProperties.spatialReference,c=this.portalItem&&this.portalItem.extent;if(b&&c)if(b.isWGS84)a=c.clone();else if(b.isWebMercator)a=x.geographicToWebMercator(c);else return z.create(this.portalItem).then(function(a){var d=new A;d.geometries=[c];d.outSpatialReference=b;return a.project(d)}).then(function(a){return a[0]}).otherwise(function(a){console.log("Error projecting item's extent:",a);return null});return g.resolve(a)};c([d.property()],
b.prototype,"applicationProperties",void 0);c([d.property()],b.prototype,"authoringApp",void 0);c([d.property()],b.prototype,"authoringAppVersion",void 0);c([d.property({json:{read:{source:"baseMap"}}})],b.prototype,"basemap",void 0);c([d.property()],b.prototype,"bookmarks",void 0);c([d.property({type:q})],b.prototype,"initialViewProperties",void 0);c([d.reader("initialViewProperties",["spatialReference"])],b.prototype,"readInitialViewProperties",null);c([d.property({type:y})],b.prototype,"portalItem",
void 0);c([d.property()],b.prototype,"presentation",void 0);c([d.property()],b.prototype,"resourceInfo",void 0);c([d.property({readOnly:!0})],b.prototype,"sourceVersion",void 0);c([d.reader("sourceVersion",["version"])],b.prototype,"readSourceVersion",null);c([d.property()],b.prototype,"tables",void 0);c([d.property()],b.prototype,"widgets",void 0);return b=k=c([d.subclass("esri.WebMap")],b);var k}(d.declared(n,k,f))});