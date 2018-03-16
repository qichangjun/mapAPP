// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ./support/widget ../core/accessorSupport/decorators ./Widget ./BasemapToggle/BasemapToggleViewModel dojo/i18n!./BasemapToggle/nls/BasemapToggle".split(" "),function(m,n,h,d,a,c,k,e,l){function f(a){return(a=e.getThumbnailUrl(a))?{backgroundImage:"url("+a+")"}:{backgroundImage:""}}return function(g){function b(a){a=g.call(this)||this;a.activeBasemap=null;a.nextBasemap=null;a.titleVisible=!1;a.view=null;
a.viewModel=new e;return a}h(b,g);b.prototype.toggle=function(){};b.prototype.render=function(){var b=this.viewModel,d="disabled"===b.state?null:b.activeBasemap,c=(b="disabled"===b.state?null:b.nextBasemap)?b.title:"",e;this.titleVisible&&c&&(e=a.tsx("div",{class:"esri-basemap-thumbnail__overlay esri-basemap-toggle__image-overlay",key:"esri-basemap-toggle__overlay"},a.tsx("span",{class:"esri-basemap-thumbnail__title esri-basemap-toggle__title",title:c},c)));return a.tsx("div",{class:"esri-basemap-toggle esri-widget",
role:"button","data-basemap-id":b?b.id:"",bind:this,onclick:this._toggle,onkeydown:this._toggle,tabIndex:0,title:l.toggle},a.tsx("div",{class:"esri-basemap-thumbnail esri-basemap-toggle__container"},a.tsx("div",{class:"esri-basemap-thumbnail__image esri-basemap-toggle__image",styles:f(b)}),e),a.tsx("div",{class:a.join("esri-basemap-thumbnail esri-basemap-toggle__container","esri-basemap-toggle__image--secondary")},a.tsx("div",{class:"esri-basemap-thumbnail__image esri-basemap-toggle__image",styles:f(d)})))};
b.prototype._toggle=function(){this.toggle()};d([c.aliasOf("viewModel.activeBasemap"),a.renderable()],b.prototype,"activeBasemap",void 0);d([c.aliasOf("viewModel.nextBasemap"),a.renderable()],b.prototype,"nextBasemap",void 0);d([c.property(),a.renderable()],b.prototype,"titleVisible",void 0);d([c.aliasOf("viewModel.view"),a.renderable()],b.prototype,"view",void 0);d([a.vmEvent("toggle"),c.property({type:e}),a.renderable("viewModel.state")],b.prototype,"viewModel",void 0);d([c.aliasOf("viewModel.toggle")],
b.prototype,"toggle",null);d([a.accessibleHandler()],b.prototype,"_toggle",null);return b=d([c.subclass("esri.widgets.BasemapToggle")],b)}(c.declared(k))});