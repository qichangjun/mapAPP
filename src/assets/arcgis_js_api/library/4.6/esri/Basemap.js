// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./core/accessorSupport/decorators dojo/_base/lang ./support/basemapDefinitions ./core/Collection ./core/collectionUtils ./core/Evented ./core/JSONSupport ./core/Loadable ./core/promiseUtils ./core/requireUtils ./core/urlUtils ./core/Logger ./portal/Portal ./portal/PortalItem ./layers/Layer".split(" "),function(u,F,v,e,c,h,w,m,g,x,y,z,p,A,n,B,q,C,D){var E=0,k=m.ofType(D),r=B.getLogger("esri.Basemap");return function(t){function b(a){a=
t.call(this)||this;a.id=null;a.portalItem=null;a.thumbnailUrl=null;a.title="Basemap";a.id=Date.now().toString(16)+"-basemap-"+E++;a.baseLayers=new m;a.referenceLayers=new m;var d=function(a){"elevation"===a.type&&r.error("Layer '"+a.title+", id:"+a.id+"' of type '"+a.type+"' is not supported as a basemap layer and will therefore be ignored.")};a.baseLayers.on("after-add",function(a){return d(a.item)});a.referenceLayers.on("after-add",function(a){return d(a.item)});return a}v(b,t);l=b;b.prototype.initialize=
function(){var a=this;this.when().catch(function(d){r.error("#load()","Failed to load basemap (title: '"+a.title+"', id: '"+a.id+"')",d)});this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)};b.prototype.normalizeCtorArgs=function(a){a&&"resourceInfo"in a&&(this._set("resourceInfo",a.resourceInfo),a=h.mixin({},a),delete a.resourceInfo);return a};Object.defineProperty(b.prototype,"baseLayers",{set:function(a){this._set("baseLayers",g.referenceSetter(a,this._get("baseLayers"),
k))},enumerable:!0,configurable:!0});b.prototype.writeBaseLayers=function(a,d,b,c){var f=[];a&&(c=h.mixin({},c,{layerContainerType:"basemap"}),this.baseLayers.forEach(function(a){if(a.write){var b={};a.write(b,c)&&f.push(b)}}),this.referenceLayers.forEach(function(a){if(a.write){var b={isReference:!0};a.write(b,c)&&f.push(b)}}));d[b]=f};Object.defineProperty(b.prototype,"referenceLayers",{set:function(a){this._set("referenceLayers",g.referenceSetter(a,this._get("referenceLayers"),k))},enumerable:!0,
configurable:!0});b.prototype.writeTitle=function(a,b){b.title=a||"Basemap"};b.prototype.load=function(){this.addResolvingPromise(this._loadFromSource());return this.when()};b.prototype.clone=function(){var a={id:this.id,title:this.title,portalItem:this.portalItem,resourceInfo:this.resourceInfo,baseLayers:this.baseLayers.slice(),referenceLayers:this.referenceLayers.slice()};this.loaded&&(a.loadStatus="loaded");return new l(a)};b.prototype.read=function(a,b){this.resourceInfo||this._set("resourceInfo",
{data:a,context:b});return this.inherited(arguments)};b.prototype.write=function(a,b){a=a||{};b&&b.origin||(b=h.mixin({origin:"web-map"},b));this.inherited(arguments,[a,b]);!this.loaded&&this.resourceInfo&&this.resourceInfo.data.baseMapLayers&&(a.baseMapLayers=this.resourceInfo.data.baseMapLayers.map(function(a){a=h.clone(a);a.url&&n.isProtocolRelative(a.url)&&(a.url="https:"+a.url);a.templateUrl&&n.isProtocolRelative(a.templateUrl)&&(a.templateUrl="https:"+a.templateUrl);return a}));return a};b.prototype._loadFromSource=
function(){var a=this.resourceInfo,b=this.portalItem;return a?this._loadLayersFromJSON(a.data,a.context?a.context.url:null):b?this._loadFromItem(b):p.resolve(null)};b.prototype._loadLayersFromJSON=function(a,b){var c=this,d=this.resourceInfo&&this.resourceInfo.context,e=this.portalItem&&this.portalItem.portal||d&&d.portal||null,h=d&&"web-scene"===d.origin?"web-scene":"web-map";return A.when(u,"./portal/support/layersCreator").then(function(d){var f=[];if(a.baseMapLayers&&Array.isArray(a.baseMapLayers)){var g=
{context:{origin:h,url:b,portal:e,layerContainerType:"basemap"},defaultLayerType:"DefaultTileLayer"},k=d.populateOperationalLayers(c.baseLayers,a.baseMapLayers.filter(function(a){return!a.isReference}),g);f.push.apply(f,k);d=d.populateOperationalLayers(c.referenceLayers,a.baseMapLayers.filter(function(a){return a.isReference}),g);f.push.apply(f,d)}return p.eachAlways(f)}).then(function(){})};b.prototype._loadFromItem=function(a){var b=this;return a.load().then(function(a){return a.fetchData()}).then(function(c){var d=
n.urlToObject(a.itemUrl);b._set("resourceInfo",{data:c.baseMap,context:{origin:"web-map",portal:a.portal||q.getDefault(),url:d}});b.read(b.resourceInfo.data,b.resourceInfo.context);b.read({title:a.title,thumbnailUrl:a.thumbnailUrl},{origin:"portal-item",portal:a.portal||q.getDefault(),url:d});return b._loadLayersFromJSON(b.resourceInfo.data,d)})};b.fromId=function(a){return(a=w[a])?l.fromJSON(a):null};e([c.property({type:k,json:{write:{ignoreOrigin:!0,target:"baseMapLayers"}}}),c.cast(g.castForReferenceSetter)],
b.prototype,"baseLayers",null);e([c.writer("baseLayers")],b.prototype,"writeBaseLayers",null);e([c.property({type:String,json:{origins:{"web-scene":{write:!0}}}})],b.prototype,"id",void 0);e([c.property({type:C})],b.prototype,"portalItem",void 0);e([c.property({type:k}),c.cast(g.castForReferenceSetter)],b.prototype,"referenceLayers",null);e([c.property({readOnly:!0})],b.prototype,"resourceInfo",void 0);e([c.property()],b.prototype,"thumbnailUrl",void 0);e([c.property({type:String,json:{origins:{"web-scene":{write:{isRequired:!0}}}}})],
b.prototype,"title",void 0);e([c.writer("title")],b.prototype,"writeTitle",null);return b=l=e([c.subclass("esri.Basemap")],b);var l}(c.declared(y,x,z))});