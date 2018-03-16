// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../Viewpoint ../core/Accessor ../geometry/SpatialReference ./Environment ../core/accessorSupport/decorators".split(" "),function(m,n,g,c,h,k,l,e,b){return function(f){function a(a){a=f.call(this,a)||this;a.environment=new e;a.spatialReference=null;a.viewpoint=null;return a}g(a,f);d=a;Object.defineProperty(a.prototype,"viewingMode",{set:function(a){"local"!==a&&"global"!==a||this._set("viewingMode",a)},
enumerable:!0,configurable:!0});a.prototype.clone=function(){return new d({environment:this.environment.clone(),spatialReference:this.spatialReference?this.spatialReference.clone():null,viewingMode:this.viewingMode,viewpoint:this.viewpoint?this.viewpoint.clone():null})};c([b.property({type:e,json:{write:{isRequired:!0}}})],a.prototype,"environment",void 0);c([b.property({type:l})],a.prototype,"spatialReference",void 0);c([b.property()],a.prototype,"viewingMode",null);c([b.property({type:h,json:{write:{isRequired:!0}}})],
a.prototype,"viewpoint",void 0);return a=d=c([b.subclass("esri.webscene.InitialViewProperties")],a);var d}(b.declared(k))});