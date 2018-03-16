// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Collection ../../core/Evented ../../core/HandleRegistry ../../core/Logger ../../core/watchUtils ./ListItem ./support/layerListUtils dojo/debounce dojo/has ../../core/accessorSupport/decorators".split(" "),function(v,w,l,e,m,n,p,q,r,f,g,t,u,x,d){r.getLogger("esri.widgets.LayerList.LayerListViewModel");var h=n.ofType(g);return function(k){function b(a){var c=k.call(this)||
this;c._actionsOpenMap=new Map;c._itemOpenMap=new Map;c._handles=new q;c.listItemCreatedFunction=null;c.operationalItems=new h;c.view=null;c._handles.add(f.init(c,"view",function(){return c._viewHandles()}),"view");c._compileList=u(c._compileList,0);return c}l(b,k);b.prototype.destroy=function(){this._handles.destroy();this.view=this._handles=null;this.operationalItems.removeAll()};Object.defineProperty(b.prototype,"createActionsFunction",{get:function(){return this._get("createActionsFunction")||
null},set:function(a){this._set("createActionsFunction",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){var a=this.get("view");return this.get("view.ready")?"ready":a?"loading":"disabled"},enumerable:!0,configurable:!0});b.prototype.triggerAction=function(a,c){a&&this.emit("trigger-action",{action:a,item:c})};b.prototype._createMapHandles=function(a){var c=this;this._handles.remove("map");var b=a&&a.get("map.layers");b&&(b=b.on("change",function(){return c._compileList(a)}),
this._handles.add(b,"map"))};b.prototype._resetMapItems=function(a){this._actionsOpenMap.clear();this._itemOpenMap.clear();this._createMapHandles(a);this._compileList(a)};b.prototype._setUpChildActions=function(a){var c=this;a.forEach(function(a){return c._setupActions(a)})};b.prototype._watchItemProperties=function(a){var c=this;this._handles.add([f.watch(a,"actionsOpen",function(b){c._actionsOpenMap.set(a.layer,b)}),f.watch(a,"open",function(b){c._itemOpenMap.set(a.layer,b)}),a.children.on("change",
function(){c._setUpChildActions(a.children)})],"list-items")};b.prototype._modifyListItemChildren=function(a){var c=this;a.forEach(function(a){return c._modifyListItem(a)})};b.prototype._modifyListItem=function(a){"function"===typeof this.listItemCreatedFunction&&this.listItemCreatedFunction.call(null,{item:a});this._modifyListItemChildren(a.children)};b.prototype._setupActions=function(a){if("function"===typeof this.createActionsFunction){var c=this.createActionsFunction.call(null,{item:a});c&&c.length&&
(a.actionsSections=c)}this._setUpChildActions(a.children)};b.prototype._createListItem=function(a){var c=!!this._actionsOpenMap.get(a),b=!!this._itemOpenMap.get(a);a=new g({actionsOpen:c,open:b,layer:a,view:this.view});this._setupActions(a);this._watchItemProperties(a);this._modifyListItem(a);return a};b.prototype._compileList=function(a){var c=this;if(!this.destroyed){this._handles.remove("list-items");var b=a&&a.get("map.layers"),d=[];b&&b.forEach(function(b){f.watch(b,"listMode",function(){return c._compileList(a)});
"hide"!==t.findLayerListMode(b)&&(b=c._createListItem(b),d.unshift(b))});this.operationalItems.removeAll();this.operationalItems.addMany(d)}};b.prototype._viewHandles=function(){var a=this,b=this.view;this._handles.remove("layers");this._resetMapItems(b);b&&b.when(function(){a._handles.add([f.init(b,"map",function(){return a._resetMapItems(b)}),b.layerViews.on("change",function(){return a._compileList(b)}),f.init(a,"createActionsFunction",function(){return a._compileList(b)}),f.init(a,"listItemCreatedFunction",
function(){return a._compileList(b)})],"layers")})};e([d.property()],b.prototype,"createActionsFunction",null);e([d.property()],b.prototype,"listItemCreatedFunction",void 0);e([d.property({type:h})],b.prototype,"operationalItems",void 0);e([d.property({dependsOn:["view.ready"],readOnly:!0})],b.prototype,"state",null);e([d.property()],b.prototype,"view",void 0);e([d.property()],b.prototype,"triggerAction",null);return b=e([d.subclass("esri.widgets.LayerList.LayerListViewModel")],b)}(d.declared(m,p))});