// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ./support/widget ./Widget ./Home/HomeViewModel dojo/i18n!./Home/nls/Home".split(" "),function(m,n,k,c,b,d,l,g,f){return function(h){function a(a){a=h.call(this)||this;a.view=null;a.viewModel=new g;a.viewpoint=null;return a}k(a,h);a.prototype.go=function(){return null};a.prototype.render=function(){var a=this.get("viewModel.state"),c=(b={},b["esri-disabled"]="disabled"===
a,b),a=(e={},e["esri-icon-loading-indicator"]="going-home"===a,e["esri-rotating"]="going-home"===a,e);return d.tsx("div",{bind:this,class:"esri-home esri-widget-button esri-widget",classes:c,role:"button",tabIndex:0,onclick:this._go,onkeydown:this._go,"aria-label":f.title,title:f.title},d.tsx("span",{classes:a,"aria-hidden":"true",class:"esri-icon esri-icon-home"}),d.tsx("span",{class:"esri-icon-font-fallback-text"},f.button));var b,e};a.prototype._go=function(){this.go()};c([b.aliasOf("viewModel.view"),
d.renderable()],a.prototype,"view",void 0);c([b.property({type:g}),d.renderable("viewModel.state"),d.vmEvent("go")],a.prototype,"viewModel",void 0);c([b.aliasOf("viewModel.viewpoint")],a.prototype,"viewpoint",void 0);c([b.aliasOf("viewModel.go")],a.prototype,"go",null);c([d.accessibleHandler()],a.prototype,"_go",null);return a=c([b.subclass("esri.widgets.Home")],a)}(b.declared(l))});