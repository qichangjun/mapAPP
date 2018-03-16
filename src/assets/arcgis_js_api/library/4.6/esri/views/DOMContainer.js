// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/_base/lang dojo/on dojo/dom dojo/dom-construct ../core/Accessor ../core/Evented ../core/HandleRegistry ../core/Scheduler ../core/watchUtils ../widgets/Popup ./PopupManager ./overlay/ViewOverlay ./ui/DefaultUI ../core/accessorSupport/decorators".split(" "),function(A,B,t,f,u,v,h,k,w,x,y,l,m,n,p,q,z,e){var g=[0,0];return function(r){function b(){var a=r.call(this)||this;a._domHandles=new y;a._freqInfo=
{freq:16,time:750};a._overlayRenderTaskHandle=null;a.height=0;a.position=null;a.resizing=!1;a.root=null;a.surface=null;a.suspended=!0;a.width=0;a.watch("cursor",function(d){var c=a.surface;c&&c.setAttribute("data-cursor",d)});a.watch("interacting",function(d){var c=a.surface;c&&c.setAttribute("data-interacting",d.toString())});return a}t(b,r);b.prototype.getDefaults=function(){return u.mixin(this.inherited(arguments),{popup:{},ui:{}})};b.prototype.destroy=function(){this.ui.destroy();this.popup&&
this.popup.destroy();this.container=null;this._domHandles.destroy()};Object.defineProperty(b.prototype,"container",{set:function(a){var d=this,c=this._get("container");if(c!==a)if(this._stopMeasuring(),c&&(c.classList.remove("esri-view"),this.popupManager.destroy(),this._set("popupManager",null),this._overlayRenderTaskHandle&&(this._overlayRenderTaskHandle.remove(),this._overlayRenderTaskHandle=null),this.overlay.destroy(),this._set("overlay",null),k.destroy(this.root),this._set("root",null)),a){a.classList.add("esri-view");
c=document.createElement("div");c.className="esri-view-root";a.insertBefore(c,a.firstChild);this._set("root",c);var b=document.createElement("div");b.className="esri-view-surface";h.setSelectable(b,!1);c.appendChild(b);this._set("surface",b);b=new q;c.appendChild(b.surface);this._set("overlay",b);b.watch("needsRender",function(a){a&&!d._overlayRenderTaskHandle?d._overlayRenderTaskHandle=l.addFrameTask({render:function(){d.overlay.render()}}):d._overlayRenderTaskHandle&&(d._overlayRenderTaskHandle.remove(),
d._overlayRenderTaskHandle=null)});this._forceReadyCycle();this._set("container",a);this._startMeasuring();a=new p({enabled:!0,view:this});this._set("popupManager",a)}else this._set("width",0),this._set("height",0),this._set("position",null),this._set("suspended",!0),this._set("surface",null),this._set("container",null)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"popup",{set:function(a){var d=this._get("popup");a!==d&&(a||(a=new n({container:document.createElement("div")})),
this._domHandles.remove("view-popup"),d&&d.destroy(),a&&(a.viewModel.view=this,this._domHandles.add([m.init(this,"root",function(c,d){var b=a.container;b||(a.container=document.createElement("div"));var e=b&&b.parentNode;h.isDescendant(e,d)&&e.removeChild(b);c&&!e&&k.place(a.container,c)})],"view-popup")),this._set("popup",a))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"size",{get:function(){return[this.width,this.height]},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"ui",{set:function(a){var b=this._get("ui");a!==b&&(this._domHandles.remove("ui"),b&&b.destroy(),a&&(a.view=this,this._domHandles.add([m.init(this,"root",function(b){a.container=b?k.create("div",null,b):null})],"ui")),this._set("ui",a))},enumerable:!0,configurable:!0});b.prototype.focus=function(){this.surface&&this.surface.focus()};b.prototype.pageToContainer=function(a,b,c){var d=this.position;a-=d[0];b-=d[1];c?(c[0]=a,c[1]=b):c=[a,b];return c};b.prototype.containerToPage=function(a,b,c){var d=
this.position;a+=d[0];b+=d[1];c?(c[0]=a,c[1]=b):c=[a,b];return c};b.prototype._stopMeasuring=function(){this._domHandles.remove("measuring");this._get("resizing")&&this._set("resizing",!1)};b.prototype._startMeasuring=function(){var a=this,b=this._freqInfo;b.freq=16;b.time=750;this._domHandles.add([v(window,"resize",function(){b.freq=16;b.time=750}),l.addFrameTask({prepare:function(b){var c=a._measure(),d=a._freqInfo;d.time+=b.deltaTime;c&&(d.freq=16,a._get("resizing")||a._set("resizing",!0));d.time<
d.freq||(d.time=0,a._position()||c?d.freq=16:d.freq=Math.min(750,2*d.freq),!c&&512<=d.freq&&a._get("resizing")&&a._set("resizing",!1))}})],"measuring");this._measure();this._position()};b.prototype._measure=function(){var a=this.container,b=a?a.clientWidth:0,c=a?a.clientHeight:0;if(0===b||0===c||"hidden"===window.getComputedStyle(a).visibility)return this.suspended||this._set("suspended",!0),!1;var a=this.width,e=this.height;if(b===a&&c===e)return this.suspended&&this._set("suspended",!1),!1;this._set("width",
b);this._set("height",c);this.suspended&&this._set("suspended",!1);this.emit("resize",{oldWidth:a,oldHeight:e,width:b,height:c});return!0};b.prototype._position=function(){var a=this.container,b=this.position,c=(a.ownerDocument||window.document).defaultView,a=a.getBoundingClientRect();g[0]=a.left+c.pageXOffset;g[1]=a.top+c.pageYOffset;return b&&g[0]===b[0]&&g[1]===b[1]?!1:(this._set("position",g.slice()),!0)};f([e.property({value:null,cast:function(a){return h.byId(a)}})],b.prototype,"container",
null);f([e.property({readOnly:!0})],b.prototype,"height",void 0);f([e.property({type:n})],b.prototype,"popup",null);f([e.property({type:p})],b.prototype,"popupManager",void 0);f([e.property({type:q})],b.prototype,"overlay",void 0);f([e.property({readOnly:!0})],b.prototype,"position",void 0);f([e.property({readOnly:!0})],b.prototype,"resizing",void 0);f([e.property({readOnly:!0})],b.prototype,"root",void 0);f([e.property({value:null,dependsOn:["width","height"],readOnly:!0})],b.prototype,"size",null);
f([e.property({readOnly:!0})],b.prototype,"surface",void 0);f([e.property({readOnly:!0})],b.prototype,"suspended",void 0);f([e.property({type:z})],b.prototype,"ui",null);f([e.property({readOnly:!0})],b.prototype,"width",void 0);return b=f([e.subclass("esri.views.DOMContainer")],b)}(e.declared(w,x))});