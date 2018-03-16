// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Error ../geometry/Extent ../geometry/SpatialReference ./Layer ./support/TileInfo ../core/accessorSupport/decorators".split(" "),function(p,q,k,c,l,m,f,n,h,b){var d={id:"0/0/0",level:0,row:0,col:0,extent:null};return function(g){function a(){var a=null!==g&&g.apply(this,arguments)||this;a.tileInfo=h.create({spatialReference:f.WebMercator,size:256});a.fullExtent=new m(-2.0037508342787E7,-2.003750834278E7,
2.003750834278E7,2.0037508342787E7,f.WebMercator);a.spatialReference=f.WebMercator;a.type="base-elevation";return a}k(a,g);a.prototype.getTileBounds=function(a,b,c,e){e=e||[0,0,0,0];d.level=a;d.row=b;d.col=c;d.extent=e;this.tileInfo.updateTileInfo(d);d.extent=null;return e};a.prototype.fetchTile=function(a,b,c,d){throw new l("BaseElevationLayer:fetchtile-not-implemented","fetchTile() is not implemented");};c([b.shared({"3d":"../views/3d/layers/ElevationLayerView3D"})],a.prototype,"viewModulePaths",
void 0);c([b.property({type:h})],a.prototype,"tileInfo",void 0);c([b.property()],a.prototype,"fullExtent",void 0);c([b.property()],a.prototype,"spatialReference",void 0);c([b.property({readOnly:!0,value:"base-elevation"})],a.prototype,"type",void 0);return a=c([b.subclass("esri.layers.BaseElevationLayer")],a)}(b.declared(n))});