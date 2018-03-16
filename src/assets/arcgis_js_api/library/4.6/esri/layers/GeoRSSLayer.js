// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators dojo/_base/lang ./Layer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ../core/promiseUtils ../config ../request ../symbols/SimpleLineSymbol ../symbols/PictureMarkerSymbol ../symbols/SimpleFillSymbol".split(" "),function(w,x,f,d,c,g,h,k,l,m,n,p,q,r,t,u,v){return function(e){function a(b,a){b=e.call(this)||this;b.description=
null;b.title=null;b.lineSymbol=null;b.pointSymbol=null;b.polygonSymbol=null;b.outSpatialReference=null;b.url=null;b.type="geo-rss";return b}f(a,e);a.prototype.normalizeCtorArgs=function(b,a){return"string"===typeof b?g.mixin({},{url:b},a):b};a.prototype.readFeatureCollections=function(b,a){return a.featureCollection.layers};a.prototype.load=function(){var a=this;this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]}).always(function(){return a._fetchService()}));
return this.when()};a.prototype._fetchService=function(){var a=this;return p.resolve().then(function(){return r(q.geoRSSServiceUrl,{callbackParamName:"callback",query:{url:a.url,refresh:a.loaded?!0:void 0,outSR:a.outSpatialReference?JSON.stringify(a.outSpatialReference.toJSON()):void 0}})}).then(function(b){a.read(b.data,{origin:"service"})})};d([c.shared({"2d":"../views/2d/layers/GeoRSSLayerView2D"})],a.prototype,"viewModulePaths",void 0);d([c.property()],a.prototype,"description",void 0);d([c.property()],
a.prototype,"title",void 0);d([c.property()],a.prototype,"featureCollections",void 0);d([c.reader("service","featureCollections",["featureCollection.layers"])],a.prototype,"readFeatureCollections",null);d([c.property({type:t})],a.prototype,"lineSymbol",void 0);d([c.property({type:u})],a.prototype,"pointSymbol",void 0);d([c.property({type:v})],a.prototype,"polygonSymbol",void 0);d([c.property()],a.prototype,"outSpatialReference",void 0);d([c.property()],a.prototype,"url",void 0);d([c.property({readOnly:!0,
json:{read:!1},value:"geo-rss"})],a.prototype,"type",void 0);return a=d([c.subclass("esri.layers.GeoRSSLayer")],a)}(c.declared(h,k,l,m,n))});