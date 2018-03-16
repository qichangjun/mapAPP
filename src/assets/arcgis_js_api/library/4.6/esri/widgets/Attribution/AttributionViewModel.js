// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ../../geometry/support/webMercatorUtils ../../core/HandleRegistry ../../core/Accessor ../../core/lang ../../core/watchUtils ../../core/Collection ../../geometry/Extent".split(" "),function(w,x,q,k,h,r,t,u,m,l,n,v){return function(p){function b(a){a=p.call(this,a)||this;a._handles=new t;a._pendingAttributionItemsByLayerId={};a._attributionDataByLayerId={};a.items=
new n;a.view=null;a._updateAttributionItems=a._updateAttributionItems.bind(a);return a}q(b,p);b.prototype.initialize=function(){this._handles.add(l.init(this,"view",this._viewWatcher))};b.prototype.destroy=function(){this._handles.destroy();this.view=this._handles=null};Object.defineProperty(b.prototype,"state",{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!0,configurable:!0});b.prototype._viewWatcher=function(a){var d=this,e=this._handles;e&&e.remove();a&&(e.add([a.allLayerViews.on("change",
function(a){d._addLayerViews(a.added);0<a.removed.length&&(a.removed.forEach(function(a){e.remove(a.uid)}),d._updateAttributionItems())}),l.init(a,"stationary",this._updateAttributionItems)]),this._addLayerViews(a.allLayerViews))};b.prototype._addLayerViews=function(a){var d=this;a.forEach(function(a){d._handles.has(a.uid)||d._handles.add(l.init(a,"suspended",d._updateAttributionItems),a.uid)})};b.prototype._updateAttributionItems=function(){var a=this,d=[];this._getActiveLayerViews().forEach(function(e){var c=
e.layer;if(!c.hasAttributionData){var b=c.get("copyright");b&&((e=a._findItem(d,b))?a._updateItemSource(e,c):d.push({text:b,layers:[c]}))}else if(c&&c.tileInfo){var f=a._attributionDataByLayerId;if(f[c.uid]){if(b=a._getDynamicAttribution(f[c.uid],a.view,c))(e=a._findItem(d,b))?a._updateItemSource(e,c):d.push({text:b,layers:[c]})}else{var g=a._pendingAttributionItemsByLayerId;a._inProgress(g[c.uid])||(g[c.uid]=c.fetchAttributionData().then(function(d){d=a._createContributionIndex(d,a._isBingLayer(c));
delete g[c.uid];f[c.uid]=d;a._updateAttributionItems()}))}}});this._itemsChanged(this.items,d)&&(this.items.removeAll(),this.items.addMany(d))};b.prototype._itemsChanged=function(a,d){return a.length!==d.length||a.some(function(a,c){return a.text!==d[c].text})};b.prototype._inProgress=function(a){return a&&!a.isFulfilled()};b.prototype._getActiveLayerViews=function(){return this.get("view.allLayerViews").filter(function(a){return!a.suspended&&a.get("layer.attributionVisible")})};b.prototype._findItem=
function(a,d){var b;a.some(function(a){var c=a.text===d;c&&(b=a);return c});return b};b.prototype._updateItemSource=function(a,d){-1===a.layers.indexOf(d)&&a.layers.push(d)};b.prototype._isBingLayer=function(a){return-1!==a.declaredClass.toLowerCase().indexOf("vetiledlayer")};b.prototype._createContributionIndex=function(a,d){a=a.contributors;var b={};if(!a)return b;a.forEach(function(a,e){var c=a.coverageAreas;c&&c.forEach(function(c){var g=c.bbox,f=c.zoomMin-(d&&c.zoomMin?1:0),h=c.zoomMax-(d&&c.zoomMax?
1:0);a={extent:r.geographicToWebMercator(new v({xmin:g[1],ymin:g[0],xmax:g[3],ymax:g[2]})),attribution:a.attribution||"",score:m.isDefined(c.score)?c.score:100,id:e};for(c=f;c<=h;c++)b[c]=b[c]||[],b[c].push(a)})});b.maxKey=Math.max.apply(null,Object.keys(b));return b};b.prototype._getDynamicAttribution=function(a,b,e){var c=b.extent;b=e.tileInfo.scaleToZoom(b.scale);b=Math.min(a.maxKey,Math.round(b));if(!c||!m.isDefined(b)||-1>=b)return"";a=a[b];var d=c.center.clone().normalize(),f={};return a.filter(function(a){var b=
!f[a.id]&&a.extent.contains(d);b&&(f[a.id]=!0);return b}).sort(function(a,b){return b.score-a.score||a.objectId-b.objectId}).map(function(a){return a.attribution}).join(", ")};k([h.property({readOnly:!0,type:n})],b.prototype,"items",void 0);k([h.property({dependsOn:["view.ready"],readOnly:!0})],b.prototype,"state",null);k([h.property()],b.prototype,"view",void 0);return b=k([h.subclass("esri.widgets.Attribution.AttributionViewModel")],b)}(h.declared(u))});