// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ../core/JSONSupport ./support/spatialReferenceUtils".split(" "),function(c,n,g,e,d,h,k){c=function(c){function b(a){a=c.call(this)||this;a.latestWkid=null;a.wkid=null;a.wkt=null;return a}g(b,c);f=b;b.fromJSON=function(a){if(!a)return null;if(a.wkid){if(102100===a.wkid)return f.WebMercator;if(4326===a.wkid)return f.WGS84}var b=new f;b.read(a);return b};b.prototype.normalizeCtorArgs=
function(a){return a&&"object"===typeof a?a:(b={},b["string"===typeof a?"wkt":"wkid"]=a,b);var b};Object.defineProperty(b.prototype,"isWGS84",{get:function(){return 4326===this.wkid},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"isWebMercator",{get:function(){return-1!==l.indexOf(this.wkid)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"isGeographic",{get:function(){return k.isGeographic(this)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"isWrappable",{get:function(){return-1!==m.indexOf(this.wkid)},enumerable:!0,configurable:!0});b.prototype.writeWkt=function(a,b){this.wkid||(b.wkt=a)};b.prototype.clone=function(){if(this===f.WGS84)return f.WGS84;if(this===f.WebMercator)return f.WebMercator;var a=new f;null!=this.wkid?(a.wkid=this.wkid,null!=this.latestWkid&&(a.latestWkid=this.latestWkid),null!=this.vcsWkid&&(a.vcsWkid=this.vcsWkid),null!=this.latestVcsWkid&&(a.latestVcsWkid=this.latestVcsWkid)):null!=this.wkt&&(a.wkt=this.wkt);
return a};b.prototype.equals=function(a){if(a){if(this===a)return!0;if(null!=this.wkid||null!=a.wkid)return this.wkid===a.wkid||this.isWebMercator&&a.isWebMercator||null!=a.latestWkid&&this.wkid===a.latestWkid||null!=this.latestWkid&&a.wkid===this.latestWkid;if(this.wkt&&a.wkt)return this.wkt.toUpperCase()===a.wkt.toUpperCase()}return!1};b.prototype.toJSON=function(a){return this.write(null,a)};b.GCS_NAD_1927=null;b.WGS84=null;b.WebMercator=null;e([d.property({dependsOn:["wkid"],readOnly:!0})],b.prototype,
"isWGS84",null);e([d.property({dependsOn:["wkid"],readOnly:!0})],b.prototype,"isWebMercator",null);e([d.property({dependsOn:["wkid","wkt"],readOnly:!0})],b.prototype,"isGeographic",null);e([d.property({dependsOn:["wkid"],readOnly:!0})],b.prototype,"isWrappable",null);e([d.property({type:Number,json:{write:!0}})],b.prototype,"latestWkid",void 0);e([d.property({type:Number,json:{write:!0,origins:{"web-scene":{write:{overridePolicy:function(){return{isRequired:null===this.wkt?!0:!1}}}}}}})],b.prototype,
"wkid",void 0);e([d.property({type:String,json:{origins:{"web-scene":{write:{overridePolicy:function(){return{isRequired:null===this.wkid?!0:!1}}}}}}})],b.prototype,"wkt",void 0);e([d.writer("wkt")],b.prototype,"writeWkt",null);e([d.property({type:Number,json:{write:!0}})],b.prototype,"vcsWkid",void 0);e([d.property({type:Number,json:{write:!0}})],b.prototype,"latestVcsWkid",void 0);return b=f=e([d.subclass("esri.SpatialReference")],b);var f}(d.declared(h));c.prototype.toJSON.isDefaultToJSON=!0;c.GCS_NAD_1927=
new c({wkid:4267,wkt:'GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]'});c.WGS84=new c(4326);c.WebMercator=new c({wkid:102100,latestWkid:3857});Object.freeze&&(Object.freeze(c.GCS_NAD_1927),Object.freeze(c.WGS84),Object.freeze(c.WebMercator));var l=[102113,102100,3857,3785],m=[102113,102100,3857,3785,4326];return c});