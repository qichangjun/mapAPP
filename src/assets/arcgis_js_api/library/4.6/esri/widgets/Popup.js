// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/assignHelper ./support/widget ../core/accessorSupport/decorators ../core/lang ../core/Logger ../core/HandleRegistry ../core/watchUtils ./Widget ../widgets/support/widgetUtils ./Popup/PopupRenderer ./Popup/PopupViewModel dojo/i18n!./Popup/nls/Popup ./Spinner dojo/dom-geometry dojo/keys".split(" "),function(T,aa,U,d,p,c,g,F,V,W,k,G,N,X,O,l,Y,P,u){function n(c,b){return void 0===b?"esri-popup__"+
c:"esri-popup__"+c+"-"+b}var Z=T.toUrl("./Popup/images/default-action.svg"),R={buttonEnabled:!0,position:"auto",breakpoint:{width:544}},S=V.getLogger("esri.widgets.Popup");return function(Q){function b(a){a=Q.call(this)||this;a._blurContainer=!1;a._containerNode=null;a._mainContainerNode=null;a._featureMenuNode=null;a._focusContainer=!1;a._focusDockButton=!1;a._focusFeatureMenuButton=!1;a._focusFirstFeature=!1;a._handleRegistry=new W;a._displayActionTextLimit=2;a._pointerOffsetInPx=16;a._spinner=
null;a._closeFeatureMenuHandle=null;a.actions=null;a.alignment="auto";a.autoCloseEnabled=null;a.content=null;a.collapsed=!1;a.collapseEnabled=!0;a.dockEnabled=!1;a.featureCount=null;a.featureMenuOpen=!1;a.features=null;a.featureNavigationEnabled=!0;a.highlightEnabled=null;a.location=null;a.popupRenderers=[];a.promises=null;a.selectedFeature=null;a.selectedFeatureIndex=null;a.selectedPopupRenderer=null;a.spinnerEnabled=!0;a.title=null;a.updateLocationEnabled=null;a.view=null;a.viewModel=new O;a.visible=
null;return a}U(b,Q);b.prototype.postInitialize=function(){var a=this,b=k.pausable(this,"\n      viewModel.visible,\n      dockEnabled,\n      viewModel.selectedFeature\n    ",function(){return a._closeFeatureMenu()});this._closeFeatureMenuHandle=b;this.own(k.watch(this,"viewModel.screenLocation",function(){return a._positionContainer()}),k.watch(this,["viewModel.visible","dockEnabled"],function(){return a._toggleScreenLocationEnabled()}),k.watch(this,"viewModel.screenLocation",function(b,q){!!b!==
!!q&&a.reposition()}),k.watch(this,"viewModel.features",function(b){return a._createPopupRenderers(b)}),k.watch(this,"viewModel.view.padding viewModel.view.size viewModel.visible viewModel.waitingForResult viewModel.location alignment".split(" "),function(){return a.reposition()}),b,k.watch(this,"spinnerEnabled",function(b){return a._spinnerEnabledChange(b)}),k.watch(this,["title","content"],function(){return a._hasFeatureUpdated()}),k.watch(this,"viewModel.view.size",function(b,q){return a._updateDockEnabledForViewSize(b,
q)}),k.watch(this,"viewModel.view",function(b,q){return a._viewChange(b,q)}),k.watch(this,"viewModel.view.ready",function(b,q){return a._viewReadyChange(b,q)}),k.watch(this,["viewModel.waitingForResult","viewModel.location"],function(){return a._displaySpinner()}),k.watch(this,["popupRenderers","viewModel.selectedFeatureIndex"],function(){return a._updatePopupRenderer()}),k.watch(this,"selectedPopupRenderer.viewModel.title",function(b){return a._setTitleFromPopupRenderer(b)}),k.watch(this,["selectedPopupRenderer.viewModel.content",
"selectedPopupRenderer.viewModel.waitingForContent"],function(){return a._setContentFromPopupRenderer()}),k.watch(this,"featureMenuOpen",function(b){return a._featureMenuOpenChanged(b)}),k.watch(this,"visible",function(b){return a._visibleChanged(b)}),k.on(this,"viewModel","trigger-action",function(b){return a._zoomToAction(b)}))};b.prototype.destroy=function(){this._destroyPopupRenderers();this._destroySpinner();this._handleRegistry.destroy();this._handleRegistry=null};Object.defineProperty(b.prototype,
"currentAlignment",{get:function(){return this._getCurrentAlignment()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"currentDockPosition",{get:function(){return this._getCurrentDockPosition()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"dockOptions",{get:function(){return this._get("dockOptions")||R},set:function(a){var b=p({},R),e=this.get("viewModel.view.breakpoints"),h={};e&&(h.width=e.xsmall,h.height=e.xsmall);a=p({},b,a);b=p({},b.breakpoint,h);h=a.breakpoint;
!0===h?a.breakpoint=b:"object"===typeof h&&(a.breakpoint=p({},b,h));this._set("dockOptions",a);this._setCurrentDockPosition();this.reposition()},enumerable:!0,configurable:!0});b.prototype.blur=function(){this.visible||S.warn("Popup cannot be blurred while visible is false");this._blurContainer=!0;this.scheduleRender()};b.prototype.clear=function(){};b.prototype.close=function(){this.visible=!1};b.prototype.focus=function(){this.visible||S.warn("Popup cannot be focused while visible is false");this._focusContainer=
!0;this.scheduleRender()};b.prototype.next=function(){return null};b.prototype.open=function(a){a=p({visible:!0},{featureMenuOpen:!1,updateLocationEnabled:!1,promises:[]},a);a.featureMenuOpen&&this._closeFeatureMenuHandle.pause();this.set(a);this._visibleChanged(!0)};b.prototype.previous=function(){return null};b.prototype.reposition=function(){this.renderNow();this._positionContainer();this._setCurrentAlignment()};b.prototype.triggerAction=function(a){return null};b.prototype.render=function(){var a=
this.collapsed,b=this.collapseEnabled,e=this.dockEnabled,h=this.actions,B=this.featureMenuOpen,f=this.featureNavigationEnabled,d=this.popupRenderers,g=this.visible,k=this.viewModel,L=k.featureCount,u=k.promiseCount,p=k.pendingPromisesCount,y=k.selectedFeatureIndex,H=k.title,k=k.waitingForResult,z=1<L&&f,f=1<L&&B,A=b&&!f&&a,G=h&&h.length,r=z&&this._getPageText(L,y),I=this._renderContent(),v=N.isRtl(),J=this.get("selectedPopupRenderer")?this.get("selectedPopupRenderer.viewModel.waitingForContent")||
this.get("selectedPopupRenderer.viewModel.content"):I,C=e?l.undock:l.dock,h=this.currentAlignment,a=this.currentDockPosition,p=p?c.tsx("div",{key:n("loading-container"),role:"presentation",class:"esri-popup__loading-container","aria-label":l.loading,title:l.loading},c.tsx("span",{"aria-hidden":"true",class:c.join("esri-popup__icon","esri-icon-loading-indicator","esri-rotating")})):null,M=(D={},D["esri-icon-layer-list"]=!f,D["esri-icon-close"]=f,D),D=c.tsx("span",{"aria-hidden":"true",class:"esri-popup__icon",
classes:M}),M=(x={},x["esri-icon-right-triangle-arrow"]=v,x["esri-popup__pagination-previous-icon--rtl"]=v,x["esri-icon-left-triangle-arrow"]=!v,x["esri-popup__pagination-previous-icon"]=!v,x),x=c.tsx("span",{"aria-hidden":"true",class:"esri-popup__icon",classes:M}),x=c.tsx("div",{role:"button",tabIndex:0,bind:this,onclick:this._previous,onkeydown:this._previous,class:c.join("esri-popup__button","esri-popup__pagination-previous"),"aria-label":l.previous,title:l.previous},x),v=(w={},w["esri-icon-left-triangle-arrow"]=
v,w["esri-popup__pagination-next-icon--rtl"]=v,w["esri-icon-right-triangle-arrow"]=!v,w["esri-popup__pagination-next-icon"]=!v,w),w=c.tsx("span",{"aria-hidden":"true",class:"esri-popup__icon",classes:v}),v=c.tsx("div",{role:"button",tabIndex:0,bind:this,onclick:this._next,onkeydown:this._next,class:c.join("esri-popup__button","esri-popup__pagination-next"),"aria-label":l.next,title:l.next},w),w=this.id+"-feature-menu",B=c.tsx("div",{role:"button",tabIndex:0,bind:this,onclick:this._toggleFeatureMenu,
onkeydown:this._toggleFeatureMenu,afterCreate:this._focusFeatureMenuButtonNode,afterUpdate:this._focusFeatureMenuButtonNode,class:c.join("esri-popup__button","esri-popup__feature-menu-button"),"aria-haspopup":"true","aria-controls":w,"aria-expanded":B,"aria-label":l.menu,title:l.menu},D),r=c.tsx("div",{class:"esri-popup__pagination-page-text"},r),B=z?c.tsx("div",{class:"esri-popup__navigation-buttons"},x,r,v,B):null,r=this._wouldDockTo(),r=(t={},t["esri-icon-minimize"]=e,t["esri-popup__icon--dock-icon"]=
!e,t["esri-icon-dock-right"]=!e&&("top-right"===r||"bottom-right"===r),t["esri-icon-dock-left"]=!e&&("top-left"===r||"bottom-left"===r),t["esri-icon-maximize"]=!e&&"top-center"===r,t["esri-icon-dock-bottom"]=!e&&"bottom-center"===r,t),t=c.tsx("span",{"aria-hidden":"true",classes:r,class:"esri-popup__icon"}),t=this.get("dockOptions.buttonEnabled")?c.tsx("div",{role:"button","aria-label":C,title:C,tabIndex:0,bind:this,onclick:this._toggleDockEnabled,onkeydown:this._toggleDockEnabled,afterCreate:this._focusDockButtonNode,
afterUpdate:this._focusDockButtonNode,class:c.join("esri-popup__button","esri-popup__button--dock")},t):null,b=b&&(J||G||z),C=(E={},E["esri-popup__header-title--button"]=b,E),r=b?A?l.expand:l.collapse:"",E=this.id+"-popup-title",H=H?c.tsx("h1",{class:"esri-popup__header-title",id:E,role:b?"button":"heading","aria-label":r,title:r,classes:C,bind:this,tabIndex:b?0:-1,onclick:this._toggleCollapsed,onkeydown:this._toggleCollapsed,innerHTML:H}):null,b=c.tsx("span",{"aria-hidden":"true",class:c.join("esri-popup__icon",
"esri-icon-close")}),b=c.tsx("div",{role:"button",tabIndex:0,bind:this,onclick:this._close,onkeydown:this._close,class:"esri-popup__button","aria-label":l.close,title:l.close},b),b=c.tsx("header",{class:"esri-popup__header"},H,c.tsx("div",{class:"esri-popup__header-buttons"},t,b)),t=this.id+"-popup-content",I=J&&!A?c.tsx("article",{key:n("content-container"),id:t,class:"esri-popup__content"},I):null,J=!A&&("bottom-left"===h||"bottom-center"===h||"bottom-right"===h||"top-left"===a||"top-center"===
a||"top-right"===a),A=!A&&("top-left"===h||"top-center"===h||"top-right"===h||"bottom-left"===a||"bottom-center"===a||"bottom-right"===a),C=f?null:c.tsx("div",{key:n("actions"),class:"esri-popup__actions"},this._renderActions()),p=c.tsx("section",{key:n("navigation"),class:"esri-popup__navigation"},p,B),z=z||G?c.tsx("div",{key:n("feature-buttons"),class:"esri-popup__feature-buttons"},C,p):null;(y=this._renderFeatureMenuNode(d,y,f,w))&&this._closeFeatureMenuHandle.resume();d=F.substitute({total:d.length},
l.selectedFeatures);y=c.tsx("section",{key:n("menu"),class:"esri-popup__feature-menu"},c.tsx("h2",{class:"esri-popup__feature-menu-header"},d),c.tsx("nav",{class:"esri-popup__feature-menu-viewport",afterCreate:this._featureMenuViewportNodeUpdated,afterUpdate:this._featureMenuViewportNodeUpdated},y));d=e?null:c.tsx("div",{key:n("pointer"),class:"esri-popup__pointer",role:"presentation"},c.tsx("div",{class:c.join("esri-popup__pointer-direction","esri-popup--shadow")}));f=(m={},m["esri-popup--aligned-top-center"]=
"top-center"===h,m["esri-popup--aligned-bottom-center"]="bottom-center"===h,m["esri-popup--aligned-top-left"]="top-left"===h,m["esri-popup--aligned-bottom-left"]="bottom-left"===h,m["esri-popup--aligned-top-right"]="top-right"===h,m["esri-popup--aligned-bottom-right"]="bottom-right"===h,m["esri-popup--is-docked"]=e,m["esri-popup--shadow"]=!e,m["esri-popup--feature-updated"]=g,m["esri-popup--is-docked-top-left"]="top-left"===a,m["esri-popup--is-docked-top-center"]="top-center"===a,m["esri-popup--is-docked-top-right"]=
"top-right"===a,m["esri-popup--is-docked-bottom-left"]="bottom-left"===a,m["esri-popup--is-docked-bottom-center"]="bottom-center"===a,m["esri-popup--is-docked-bottom-right"]="bottom-right"===a,m["esri-popup--feature-menu-open"]=f,m);m=this.get("selectedFeature.layer.title");h=this.get("selectedFeature.layer.id");e=(K={},K["esri-popup--shadow"]=e,K);K=J?y:null;y=A?y:null;a=J?z:null;z=A?z:null;g=g&&!k&&(u?L:1)?c.tsx("div",{key:n("container"),class:"esri-popup__position-container",classes:f,"data-layer-title":m,
"data-layer-id":h,bind:this,afterCreate:this._positionContainer,afterUpdate:this._positionContainer},c.tsx("div",{class:c.join("esri-popup__main-container","esri-widget"),classes:e,tabIndex:-1,"aria-role":"dialog","aria-labelledby":H?E:"","aria-describedby":I?t:"",bind:this,onkeyup:this._handleMainKeyup,afterCreate:this._mainContainerNodeUpdated,afterUpdate:this._mainContainerNodeUpdated},a,K,b,I,z,y),d):null;return c.tsx("div",{key:n("base"),class:"esri-popup",role:"presentation"},g);var D,x,w,t,
E,m,K};b.prototype._visibleChanged=function(a){a&&(this._focusContainer=!0,this.scheduleRender())};b.prototype._featureMenuOpenChanged=function(a){a?this._focusFirstFeature=!0:this._focusFeatureMenuButton=!0;this.scheduleRender()};b.prototype._setTitleFromPopupRenderer=function(a){this.viewModel.title=a||""};b.prototype._setContentFromPopupRenderer=function(){this.viewModel.content=this.selectedPopupRenderer||null;this.scheduleRender()};b.prototype._handleFeatureMenuKeyup=function(a){a.keyCode===
u.ESCAPE&&(a.stopPropagation(),this.featureMenuOpen=!1)};b.prototype._handleFeatureMenuItemKeyup=function(a){var b=a.keyCode,e=this._featureMenuNode,h=this.get("features.length"),c=a.currentTarget["data-feature-index"];e&&(e=e.querySelectorAll("li"),b===u.UP_ARROW?(a.stopPropagation(),e[(c-1+h)%h].focus()):b===u.DOWN_ARROW?(a.stopPropagation(),e[(c+1+h)%h].focus()):b===u.HOME?(a.stopPropagation(),e[0].focus()):b===u.END&&(a.stopPropagation(),e[e.length-1].focus()))};b.prototype._handleMainKeyup=function(a){var b=
a.keyCode;b===u.LEFT_ARROW&&(a.stopPropagation(),this.previous());b===u.RIGHT_ARROW&&(a.stopPropagation(),this.next())};b.prototype._zoomToAction=function(a){a.action&&"zoom-to"===a.action.id&&this.viewModel.zoomToLocation()};b.prototype._spinnerEnabledChange=function(a){this._destroySpinner();a&&(a=this.get("viewModel.view"),this._createSpinner(a))};b.prototype._displaySpinner=function(){var a=this._spinner;if(a){var b=this.viewModel,e=b.location;b.waitingForResult?a.show({location:e}):a.hide()}};
b.prototype._getIconStyles=function(a){return{"background-image":a?"url("+a+")":""}};b.prototype._renderAction=function(a,b,e,h){var q=this,f=k.watch(a,["id","className","title","image","visible"],function(){return q.scheduleRender()});this._handleRegistry.add(f,h);f=this.get("selectedFeature.attributes");"zoom-to"===a.id&&(a.title=l.zoom,this._handleRegistry.add(k.init(this,"view.animation.state",function(b){a.className="waiting-for-target"===b?c.join("esri-popup__icon","esri-icon-loading-indicator",
"esri-rotating"):c.join("esri-popup__icon","esri-icon-zoom-in-magnifying-glass")}),h));h=a.title;var d=a.className,g=a.image||d?a.image:Z;h=h&&f?F.substitute(f,h):h;d=d&&f?F.substitute(f,d):d;f=g&&f?F.substitute(f,g):g;g=d||"esri-popup__icon";d=(p={},p["esri-popup__action-image"]=!!f,p);p=(u={},u["esri-disabled"]=-1!==g.indexOf("esri-icon-loading-indicator"),u);e=e<=this._displayActionTextLimit?c.tsx("span",{key:n("action-text-"+b+"-"+a.uid),class:"esri-popup__action-text"},h):null;return a.visible?
c.tsx("div",{key:n("action-"+b+"-"+a.uid),role:"button",tabIndex:0,title:h,"aria-label":h,classes:p,class:c.join("esri-popup__button","esri-popup__action"),bind:this,"data-action-index":b,onclick:this._triggerAction,onkeydown:this._triggerAction},c.tsx("span",{key:n("action-icon-"+b+"-"+a.uid+"-"+g),"aria-hidden":"true",class:g,classes:d,styles:this._getIconStyles(f)}),e):null;var p,u};b.prototype._renderActions=function(){var a=this;this._handleRegistry.remove("actions");var b=this.actions;if(b){var e=
b.length;return b.toArray().map(function(b,c){return a._renderAction(b,c,e,"actions")})}};b.prototype._updatePopupRenderer=function(){var a=this.popupRenderers[this.viewModel.selectedFeatureIndex]||null;a&&!a.contentEnabled&&(a.contentEnabled=!0);this._set("selectedPopupRenderer",a)};b.prototype._destroyPopupRenderers=function(){this.popupRenderers.forEach(function(a){return a.destroy()});this._set("popupRenderers",[])};b.prototype._createPopupRenderers=function(a){var b=this;this._destroyPopupRenderers();
var e=[];a&&a.forEach(function(a){a=new X({contentEnabled:!1,graphic:a,view:b.get("viewModel.view")});e.push(a)});this._set("popupRenderers",e)};b.prototype._isScreenLocationWithinView=function(a,b){return-1<a.x&&-1<a.y&&a.x<=b.width&&a.y<=b.height};b.prototype._isOutsideView=function(a){var b=a.popupHeight,e=a.popupWidth,c=a.screenLocation,d=a.side;a=a.view;if(isNaN(e)||isNaN(b)||!a||!c)return!1;var f=a.padding;return"right"===d&&c.x+e/2>a.width-f.right||"left"===d&&c.x-e/2<f.left||"top"===d&&c.y-
b<f.top||"bottom"===d&&c.y+b>a.height-f.bottom?!0:!1};b.prototype._determineCurrentAlignment=function(){var a=this._pointerOffsetInPx,b=this._containerNode,e=this._mainContainerNode,c=this.viewModel,d=c.screenLocation,c=c.view;if(!d||!c||!b)return"top-center";if(!this._isScreenLocationWithinView(d,c))return this._get("currentAlignment")||"top-center";var f=e?window.getComputedStyle(e,null):null,e=f?parseInt(f.getPropertyValue("max-height").replace(/[^-\d\.]/g,""),10):0,f=f?parseInt(f.getPropertyValue("height").replace(/[^-\d\.]/g,
""),10):0,g=P.getContentBox(b),b=g.w+a,g=Math.max(g.h,e,f)+a,a=this._isOutsideView({popupHeight:g,popupWidth:b,screenLocation:d,side:"right",view:c}),e=this._isOutsideView({popupHeight:g,popupWidth:b,screenLocation:d,side:"left",view:c}),f=this._isOutsideView({popupHeight:g,popupWidth:b,screenLocation:d,side:"top",view:c}),d=this._isOutsideView({popupHeight:g,popupWidth:b,screenLocation:d,side:"bottom",view:c});return e?f?"bottom-right":"top-right":a?f?"bottom-left":"top-left":f?d?"top-center":"bottom-center":
"top-center"};b.prototype._getCurrentAlignment=function(){var a=this.alignment;return this.dockEnabled?null:"auto"===a?this._determineCurrentAlignment():"function"===typeof a?a.call(this):a};b.prototype._setCurrentAlignment=function(){this._set("currentAlignment",this._getCurrentAlignment())};b.prototype._setCurrentDockPosition=function(){this._set("currentDockPosition",this._getCurrentDockPosition())};b.prototype._getDockPosition=function(){var a=this.get("dockOptions.position");return"auto"===a?
this._determineCurrentDockPosition():"function"===typeof a?a.call(this):a};b.prototype._getCurrentDockPosition=function(){return this.dockEnabled?this._getDockPosition():null};b.prototype._wouldDockTo=function(){return this.dockEnabled?null:this._getDockPosition()};b.prototype._renderFeatureMenuItemNode=function(a,b,e,d){var q=b===e;d=(f={},f["esri-popup__feature-menu-item--selected"]=q,f);a=a.title||l.untitled;q=q?c.tsx("span",{key:n("feature-menu-selected-feature-"+e),title:l.selectedFeature,"aria-label":l.selectedFeature,
class:"esri-icon-check-mark"}):null;return c.tsx("li",{role:"menuitem",tabIndex:-1,key:n("feature-menu-feature-"+e),classes:d,class:"esri-popup__feature-menu-item",title:a,"aria-label":a,bind:this,"data-feature-index":b,onkeyup:this._handleFeatureMenuItemKeyup,onclick:this._selectFeature,onkeydown:this._selectFeature},c.tsx("span",{class:"esri-popup__feature-menu-title"},a,q));var f};b.prototype._renderFeatureMenuNode=function(a,b,e,d){var q=this;return 1<a.length?c.tsx("ol",{class:"esri-popup__feature-menu-list",
id:d,bind:this,afterCreate:this._featureMenuNodeUpdated,afterUpdate:this._featureMenuNodeUpdated,onkeyup:this._handleFeatureMenuKeyup,role:"menu"},a.map(function(a,c){return q._renderFeatureMenuItemNode(a,c,b,e)})):null};b.prototype._determineCurrentDockPosition=function(){var a=this.get("viewModel.view"),b=N.isRtl()?"top-left":"top-right";if(!a)return b;var c=a.padding||{left:0,right:0,top:0,bottom:0},c=a.width-c.left-c.right;return(a=a.get("breakpoints"))&&c<=a.xsmall?"bottom-center":b};b.prototype._renderContent=
function(){var a=this.get("viewModel.content");if("string"===typeof a)return c.tsx("div",{key:n("content-string"),innerHTML:a});if(a&&a.isInstanceOf&&a.isInstanceOf(G))return c.tsx("div",{key:n("content-widget")},a.render());if(a instanceof HTMLElement)return c.tsx("div",{key:n("content-html-element"),bind:a,afterUpdate:this._attachToNode,afterCreate:this._attachToNode});if(a&&"function"===typeof a.postMixInProperties&&"function"===typeof a.buildRendering&&"function"===typeof a.postCreate&&"function"===
typeof a.startup)return c.tsx("div",{key:n("content-dijit"),bind:a.domNode,afterUpdate:this._attachToNode,afterCreate:this._attachToNode})};b.prototype._attachToNode=function(a){a.appendChild(this)};b.prototype._positionContainer=function(a){void 0===a&&(a=this._containerNode);a&&(this._containerNode=a);if(a){var b=this.viewModel.screenLocation,c=P.getContentBox(a);if(b=this._calculatePositionStyle(b,c))a.style.top=b.top,a.style.left=b.left,a.style.bottom=b.bottom,a.style.right=b.right}};b.prototype._calculateFullWidth=
function(a){var b=this.currentAlignment,c=this._pointerOffsetInPx;return"top-left"===b||"bottom-left"===b||"top-right"===b||"bottom-right"===b?a+c:a};b.prototype._calculateAlignmentPosition=function(a,b,c,d){var e=this.currentAlignment,f=this._pointerOffsetInPx;d/=2;var h=c.height-b;c=c.width-a;if("bottom-center"===e)return{top:b+f,left:a-d};if("top-left"===e)return{bottom:h+f,right:c+f};if("bottom-left"===e)return{top:b+f,right:c+f};if("top-right"===e)return{bottom:h+f,left:a+f};if("bottom-right"===
e)return{top:b+f,left:a+f};if("top-center"===e)return{bottom:h+f,left:a-d}};b.prototype._calculatePositionStyle=function(a,b){var c=this.view;if(c){var d=c.padding;if(this.dockEnabled)return{left:d.left?d.left+"px":"",top:d.top?d.top+"px":"",right:d.right?d.right+"px":"",bottom:d.bottom?d.bottom+"px":""};if(a&&b&&(b=this._calculateFullWidth(b.w),a=this._calculateAlignmentPosition(a.x,a.y,c,b)))return{top:void 0!==a.top?a.top+"px":"auto",left:void 0!==a.left?a.left+"px":"auto",bottom:void 0!==a.bottom?
a.bottom+"px":"auto",right:void 0!==a.right?a.right+"px":"auto"}}};b.prototype._viewChange=function(a,b){a&&b&&(this.close(),this.clear())};b.prototype._viewReadyChange=function(a,b){a?(a=this.get("viewModel.view"),this._wireUpView(a)):b&&(this.close(),this.clear())};b.prototype._wireUpView=function(a){this._destroySpinner();a&&(this.spinnerEnabled&&this._createSpinner(a),this._setDockEnabledForViewSize(this.dockOptions))};b.prototype._dockingThresholdCrossed=function(a,b,c){var d=a[0];a=a[1];var e=
b[0];b=b[1];var f=c.width;c=c.height;return d<=f&&e>f||d>f&&e<=f||a<=c&&b>c||a>c&&b<=c};b.prototype._updateDockEnabledForViewSize=function(a,b){if(a&&b){var c=this.get("viewModel.view.padding")||{left:0,right:0,top:0,bottom:0},d=c.left+c.right,g=c.top+c.bottom,c=[],f=[];c[0]=a[0]-d;c[1]=a[1]-g;f[0]=b[0]-d;f[1]=b[1]-g;a=this.dockOptions;this._dockingThresholdCrossed(c,f,a.breakpoint)&&this._setDockEnabledForViewSize(a);this._setCurrentDockPosition()}};b.prototype._hasFeatureUpdated=function(){var a=
this._containerNode,b=this.viewModel.pendingPromisesCount,c=this.get("selectedPopupRenderer.viewModel.waitingForContent");!a||b||c||(a.classList.remove("esri-popup--feature-updated"),a.offsetHeight,a.classList.add("esri-popup--feature-updated"))};b.prototype._focusDockButtonNode=function(a){this._focusDockButton&&(this._focusDockButton=!1,a.focus())};b.prototype._mainContainerNodeUpdated=function(a){this._mainContainerNode=a;this._focusContainer?(this._focusContainer=!1,a.focus()):this._blurContainer&&
(this._blurContainer=!1,a.blur())};b.prototype._featureMenuNodeUpdated=function(a){(this._featureMenuNode=a)&&this._focusFirstFeature&&(this._focusFirstFeature=!1,a=a.querySelectorAll("li"),a.length&&a[0].focus())};b.prototype._focusFeatureMenuButtonNode=function(a){this._focusFeatureMenuButton&&(this._focusFeatureMenuButton=!1,a.focus())};b.prototype._featureMenuViewportNodeUpdated=function(a){a&&(a.scrollTop=0)};b.prototype._toggleScreenLocationEnabled=function(){var a=this.dockEnabled,b=this.viewModel;
b&&(b.screenLocationEnabled=this.visible&&!a)};b.prototype._shouldDockAtCurrentViewSize=function(a){a=a.breakpoint;var b=this.get("viewModel.view.ui"),c=b.width,b=b.height;if(isNaN(c)||isNaN(b))return!1;c=a.hasOwnProperty("width")&&c<=a.width;a=a.hasOwnProperty("height")&&b<=a.height;return c||a};b.prototype._setDockEnabledForViewSize=function(a){a.breakpoint&&(this.dockEnabled=this._shouldDockAtCurrentViewSize(a))};b.prototype._getPageText=function(a,b){return F.substitute({index:b+1,total:a},l.pageText)};
b.prototype._destroySpinner=function(){this._spinner&&(this._spinner.destroy(),this._spinner=null)};b.prototype._createSpinner=function(a){a&&(this._spinner=new Y({container:document.createElement("div"),view:a}),a.root.appendChild(this._spinner.container))};b.prototype._closeFeatureMenu=function(){this.featureMenuOpen=!1};b.prototype._toggleCollapsed=function(){this.collapsed=!this.collapsed};b.prototype._close=function(){this.close();this.view&&this.view.focus()};b.prototype._toggleDockEnabled=
function(){this.dockEnabled=!this.dockEnabled;this._focusDockButton=!0;this.scheduleRender()};b.prototype._toggleFeatureMenu=function(){this.featureMenuOpen=!this.featureMenuOpen};b.prototype._triggerAction=function(a){this.viewModel.triggerAction(a.currentTarget["data-action-index"])};b.prototype._selectFeature=function(a){a=a.currentTarget["data-feature-index"];isNaN(a)||(this.viewModel.selectedFeatureIndex=a);this._closeFeatureMenu()};b.prototype._next=function(){this.next()};b.prototype._previous=
function(){this.previous()};d([g.aliasOf("viewModel.actions"),c.renderable()],b.prototype,"actions",void 0);d([g.property()],b.prototype,"alignment",void 0);d([g.aliasOf("viewModel.autoCloseEnabled")],b.prototype,"autoCloseEnabled",void 0);d([g.aliasOf("viewModel.content"),c.renderable()],b.prototype,"content",void 0);d([g.property(),c.renderable()],b.prototype,"collapsed",void 0);d([g.property(),c.renderable()],b.prototype,"collapseEnabled",void 0);d([g.property({readOnly:!0,dependsOn:["dockEnabled",
"alignment"]}),c.renderable()],b.prototype,"currentAlignment",null);d([g.property({readOnly:!0,dependsOn:["dockEnabled","dockOptions"]}),c.renderable()],b.prototype,"currentDockPosition",null);d([g.property(),c.renderable()],b.prototype,"dockOptions",null);d([g.property(),c.renderable()],b.prototype,"dockEnabled",void 0);d([g.aliasOf("viewModel.featureCount"),c.renderable()],b.prototype,"featureCount",void 0);d([g.property(),c.renderable()],b.prototype,"featureMenuOpen",void 0);d([g.aliasOf("viewModel.features"),
c.renderable()],b.prototype,"features",void 0);d([g.property(),c.renderable()],b.prototype,"featureNavigationEnabled",void 0);d([g.aliasOf("viewModel.highlightEnabled")],b.prototype,"highlightEnabled",void 0);d([g.aliasOf("viewModel.location"),c.renderable()],b.prototype,"location",void 0);d([g.property({readOnly:!0}),c.renderable()],b.prototype,"popupRenderers",void 0);d([g.aliasOf("viewModel.promises")],b.prototype,"promises",void 0);d([g.aliasOf("viewModel.selectedFeature"),c.renderable()],b.prototype,
"selectedFeature",void 0);d([g.aliasOf("viewModel.selectedFeatureIndex"),c.renderable()],b.prototype,"selectedFeatureIndex",void 0);d([g.property({readOnly:!0}),c.renderable()],b.prototype,"selectedPopupRenderer",void 0);d([g.property()],b.prototype,"spinnerEnabled",void 0);d([g.aliasOf("viewModel.title"),c.renderable()],b.prototype,"title",void 0);d([g.aliasOf("viewModel.updateLocationEnabled")],b.prototype,"updateLocationEnabled",void 0);d([g.aliasOf("viewModel.view")],b.prototype,"view",void 0);
d([g.property({type:O}),c.renderable("viewModel.screenLocation viewModel.screenLocationEnabled viewModel.state viewModel.pendingPromisesCount viewModel.promiseCount viewModel.waitingForResult".split(" ")),c.vmEvent(["triggerAction","trigger-action"])],b.prototype,"viewModel",void 0);d([g.aliasOf("viewModel.visible"),c.renderable()],b.prototype,"visible",void 0);d([g.aliasOf("viewModel.clear")],b.prototype,"clear",null);d([g.aliasOf("viewModel.next")],b.prototype,"next",null);d([g.aliasOf("viewModel.previous")],
b.prototype,"previous",null);d([g.aliasOf("viewModel.triggerAction")],b.prototype,"triggerAction",null);d([c.accessibleHandler()],b.prototype,"_toggleCollapsed",null);d([c.accessibleHandler()],b.prototype,"_close",null);d([c.accessibleHandler()],b.prototype,"_toggleDockEnabled",null);d([c.accessibleHandler()],b.prototype,"_toggleFeatureMenu",null);d([c.accessibleHandler()],b.prototype,"_triggerAction",null);d([c.accessibleHandler()],b.prototype,"_selectFeature",null);d([c.accessibleHandler()],b.prototype,
"_next",null);d([c.accessibleHandler()],b.prototype,"_previous",null);return b=d([g.subclass("esri.widgets.Popup")],b)}(g.declared(G))});