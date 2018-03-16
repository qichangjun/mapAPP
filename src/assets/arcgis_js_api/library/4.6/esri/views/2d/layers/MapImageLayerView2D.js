// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../core/Logger ../../../core/HandleRegistry ../../../core/promiseUtils ../../../layers/support/ExportImageParameters ./LayerView2D ./support/ExportStrategy ../engine/BitmapSource ../engine/Canvas2DContainer ../../layers/RefreshableLayerView dojo/_base/lang".split(" "),function(y,z,h,k,f,l,m,n,p,q,r,t,u,v,w){var x=l.getLogger("esri.views.2d.layers.MapImageLayerView2D");
return function(g){function a(){var b=g.call(this)||this;b._handles=new m;b.container=new u;b.container.hidpi=!0;return b}h(a,g);a.prototype.hitTest=function(b,a){return null};a.prototype.update=function(b){this.strategy.update(b);this.notifyChange("updating")};a.prototype.attach=function(){var b=this,a=this.layer,e=a.imageMaxWidth,c=a.imageMaxHeight,d=a.version,a=10.3<=d,d=10<=d;this.strategy=new r({container:this.container,fetchImage:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),
imageMaxWidth:e,imageMaxHeight:c,imageRotationSupported:a,imageNormalizationSupported:d,hidpi:!0});this._exportImageParameters=new p({layer:this.layer});this._handles.add(this._exportImageParameters.watch("version",function(a){b._exportImageVersion!==a&&(b._exportImageVersion=a,b.requestUpdate())}))};a.prototype.detach=function(){this.container.removeAllChildren();this.strategy.destroy();this._handles.removeAll();this._exportImageParameters.layer=null;this._exportImageParameters.destroy();this._exportImageParameters=
null};a.prototype.moveStart=function(){};a.prototype.viewChange=function(){};a.prototype.moveEnd=function(){this.requestUpdate()};a.prototype.doRefresh=function(){this.requestUpdate()};a.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)};a.prototype.getPopupData=function(a){var b=this,e=this.view.scale;return this.layer.allSublayers.filter(function(a){var b=0===a.minScale||e<=a.minScale,c=0===a.maxScale||e>=a.maxScale;return a.popupTemplate&&a.visible&&
b&&c}).map(function(c){var d=c.createQuery();d.geometry=a;d.outFields=b.getTemplateOutFields(c.popupTemplate);return c.queryFeatures(d).then(function(a){return a.features})})};a.prototype.getTemplateOutFields=function(a){if(!a||!a.fieldInfos)return["*"];var b=[];a.fieldInfos.forEach(function(a){var c=a.fieldName&&a.fieldName.toLowerCase();c&&"shape"!==c&&0!==c.indexOf("relationships/")&&b.push(a.fieldName)});return b};a.prototype.fetchImage=function(a,f,e,c){var b=this;this._exportImageParameters.scale!==
this.view.scale&&(this._exportImageParameters.scale=this.view.scale,this._exportImageVersion=this._exportImageParameters.version);c=w.mixin({timestamp:this.refreshTimestamp},c);return this.layer.fetchImage(a,f,e,c).then(function(a){b.notifyChange("updating");return new t(a)}).otherwise(function(a){"cancel"!==a.dojoType&&x.error(a);b.notifyChange("updating");return n.reject(a)})};return a=k([f.subclass("esri.views.2d.layers.MapImageLayerView2D")],a)}(f.declared(q,v))});