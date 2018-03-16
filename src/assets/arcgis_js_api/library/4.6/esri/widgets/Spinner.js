// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ./support/widget ../core/accessorSupport/decorators ./Widget ../core/promiseUtils ../core/watchUtils ./support/AnchorElementViewModel".split(" "),function(p,q,k,e,f,d,l,m,n,g){return function(h){function b(a){a=h.call(this)||this;a._animationDelay=500;a._animationPromise=null;a.location=null;a.view=null;a.visible=!1;a.viewModel=new g;return a}k(b,h);b.prototype.postInitialize=function(){var a=this;this.own([n.watch(this,
"visible",function(b){return a._visibleChange(b)})])};b.prototype.destroy=function(){this._cancelAnimationPromise()};b.prototype.show=function(a){var b=this,c=a.location;a=a.promise;c&&(this.viewModel.location=c);this.visible=!0;a&&a.always(function(){return b.hide()})};b.prototype.hide=function(){this.visible=!1};b.prototype.render=function(){var a=this.visible,b=!!this.viewModel.screenLocation,a=(c={},c["esri-spinner--start"]=a&&b,c["esri-spinner--finish"]=!a&&b,c),c=this._getPositionStyles();return f.tsx("div",
{class:"esri-spinner",classes:a,styles:c});var c};b.prototype._cancelAnimationPromise=function(){this._animationPromise&&(this._animationPromise.cancel(),this._animationPromise=null)};b.prototype._visibleChange=function(a){var b=this;a?this.viewModel.screenLocationEnabled=!0:(this._cancelAnimationPromise(),this._animationPromise=m.after(this._animationDelay).then(function(){b.viewModel.screenLocationEnabled=!1;b._animationPromise=null}))};b.prototype._getPositionStyles=function(){var a=this.viewModel.screenLocation;
return a?{left:a.x+"px",top:a.y+"px"}:{}};e([d.aliasOf("viewModel.location")],b.prototype,"location",void 0);e([d.aliasOf("viewModel.view")],b.prototype,"view",void 0);e([d.property(),f.renderable()],b.prototype,"visible",void 0);e([d.property({type:g}),f.renderable(["viewModel.screenLocation","viewModel.screenLocationEnabled"])],b.prototype,"viewModel",void 0);return b=e([d.subclass("esri.widgets.Spinner")],b)}(d.declared(l))});