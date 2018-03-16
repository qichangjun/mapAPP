// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ../request ./Layer ./mixins/SceneService ./support/Field ../symbols/support/ElevationInfo ../renderers/support/pointCloud/jsonUtils ../renderers/support/pointCloud/typeUtils ./pointCloudFilters/jsonUtils ./pointCloudFilters/typeUtils ../core/promiseUtils ../core/urlUtils ../core/Error ../core/Logger dojo/_base/lang".split(" "),function(A,B,m,d,c,n,p,q,g,r,t,u,f,v,w,x,
e,y,h){function k(c,b,a){c&&((c=t.read(c,b,a)||void 0)||z.error("Failed to create renderer",{rendererDefinition:c,layer:this,context:a}));return c}var z=y.getLogger("esri.layers.PointCloudLayer");return function(l){function b(a,b){a=l.call(this)||this;a.operationalLayerType="PointCloudLayer";a.opacity=1;a.fields=null;a.elevationInfo=null;a.legendEnabled=!0;a.renderer=null;a.type="point-cloud";return a}m(b,l);b.prototype.normalizeCtorArgs=function(a,b){return"string"===typeof a?h.mixin({},{url:a},
b):a};b.prototype.readServiceFields=function(a,b,c){return Array.isArray(a)?a.map(function(a){var b=new g;"FieldTypeInteger"===a.type&&(a=h.clone(a),a.type="esriFieldTypeInteger");b.read(a,c);return b}):null};b.prototype.load=function(){var a=this,b=this.loadFromPortal({supportedTypes:["Scene Service"]}).always(function(){return a._fetchService()});this.addResolvingPromise(b);return this.when()};b.prototype._validateLayer=function(a){if(a.layerType&&"PointCloud"!==a.layerType)throw new e("pointcloudlayer:layer-type-not-supported",
"PointCloudLayer does not support this layer type",{layerType:a.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new e("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(1<this.version.major)throw new e("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});};b.prototype.hasCachedStatistics=function(a){return null!=
this.attributeStorageInfo&&this.attributeStorageInfo.some(function(b){return b.name===a})};b.prototype.queryCachedStatistics=function(a){if(!this.hasCachedStatistics(a))return w.reject(new e("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available"));for(var b=0,c=this.attributeStorageInfo;b<c.length;b++){var d=c[b];if(d.name===a)return a=x.join(this.parsedUrl.path,"./statistics/"+d.key),n(a,{query:{f:"json"},responseType:"json"}).then(function(a){return a.data})}};
d([c.shared({"3d":"../views/3d/layers/PointCloudLayerView3D"})],b.prototype,"viewModulePaths",void 0);d([c.property({readOnly:!0})],b.prototype,"operationalLayerType",void 0);d([c.property({readOnly:!0,json:{write:!1,read:!1}})],b.prototype,"opacity",void 0);d([c.property({types:[v.types],json:{origins:{service:{read:{source:"filters",reader:f.read}}},read:{source:"layerDefinition.filters",reader:f.read},write:{target:"layerDefinition.filters",writer:f.write}}})],b.prototype,"filters",void 0);d([c.property({type:[g]})],
b.prototype,"fields",void 0);d([c.reader("service","fields")],b.prototype,"readServiceFields",null);d([c.property({readOnly:!0})],b.prototype,"attributeStorageInfo",void 0);d([c.property({type:r,json:{origins:{service:{read:{source:"elevationInfo"}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}})],b.prototype,"elevationInfo",void 0);d([c.property({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],
b.prototype,"legendEnabled",void 0);d([c.property({types:u.types,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:k}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:k},write:{target:"layerDefinition.drawingInfo.renderer"}}})],b.prototype,"renderer",void 0);d([c.property({json:{read:!1},readOnly:!0})],b.prototype,"type",void 0);return b=d([c.subclass("esri.layers.PointCloudLayer")],b)}(c.declared(p,q))});