//>>built
define("dojo/_base/declare dojo/dom-class dojo/on dojo/has dojo/aspect ./List dojo/has!touch?./util/touch dojo/query dojo/_base/sniff dojo/dom".split(" "),function(w,n,g,e,k,h,p){function q(a,b){b=a.unselectable=b?"on":"";a=a.getElementsByTagName("*");for(var c=a.length;--c;)"INPUT"!==a[c].tagName&&"TEXTAREA"!==a[c].tagName&&(a[c].unselectable=b)}function r(a,b){var c=a.bodyNode,d=b?"text":"-moz-none";l&&"msUserSelect"!==l?c.style[l]=d:e("dom-selectstart")?b||a._selectstartHandle?b&&a._selectstartHandle&&
(a._selectstartHandle.remove(),delete a._selectstartHandle):a._selectstartHandle=g(c,"selectstart",function(a){var b=a.target&&a.target.tagName;"INPUT"!==b&&"TEXTAREA"!==b&&a.preventDefault()}):(q(c,!b),b||a._unselectableHandle)?b&&a._unselectableHandle&&(a._unselectableHandle.remove(),delete a._unselectableHandle):a._unselectableHandle=k.after(a,"renderRow",function(a){q(a,!0);return a})}e.add("dom-comparedocumentposition",function(a,b,c){return!!c.compareDocumentPosition});e.add("dom-selectstart",
"undefined"!==typeof document.onselectstart);var l=e("css-user-select"),u=(h=e("pointer"))&&"MS"===h.slice(0,2),v=h?h+(u?"Down":"down"):"mousedown",m=h?h+(u?"Up":"up"):"mouseup";"WebkitUserSelect"===l&&"undefined"!==typeof document.documentElement.style.msUserSelect&&(l=!1);return w(null,{selectionDelegate:".dgrid-row",selectionEvents:v+","+m+",dgrid-cellfocusin",selectionTouchEvents:e("touch")?p.tap:null,deselectOnRefresh:!0,allowSelectAll:!1,selection:{},selectionMode:"extended",allowTextSelection:void 0,
_selectionTargetType:"rows",create:function(){this.selection={};return this.inherited(arguments)},postCreate:function(){this.inherited(arguments);this._initSelectionEvents();var a=this.selectionMode;this.selectionMode="";this._setSelectionMode(a)},destroy:function(){this.inherited(arguments);this._selectstartHandle&&this._selectstartHandle.remove();this._unselectableHandle&&this._unselectableHandle.remove();this._removeDeselectSignals&&this._removeDeselectSignals()},_setSelectionMode:function(a){a!==
this.selectionMode&&(this.clearSelection(),this.selectionMode=a,this._selectionHandlerName="_"+a+"SelectionHandler",this._setAllowTextSelection(this.allowTextSelection))},_setAllowTextSelection:function(a){"undefined"!==typeof a?r(this,a):r(this,"none"===this.selectionMode);this.allowTextSelection=a},_handleSelect:function(a,b){if(this[this._selectionHandlerName]&&this.allowSelect(this.row(b))&&("dgrid-cellfocusin"!==a.type||"mousedown"!==a.parentType)&&(a.type!==m||b===this._waitForMouseUp)){this._waitForMouseUp=
null;this._selectionTriggerEvent=a;if(!a.keyCode||!a.ctrlKey||32===a.keyCode)if(!a.shiftKey&&a.type===v&&this.isSelected(b))this._waitForMouseUp=b;else this[this._selectionHandlerName](a,b);this._selectionTriggerEvent=null}},_singleSelectionHandler:function(a,b){a=a.keyCode?a.ctrlKey:a.metaKey;this._lastSelected===b?this.select(b,null,!a||!this.isSelected(b)):(this.clearSelection(),this.select(b),this._lastSelected=b)},_multipleSelectionHandler:function(a,b){var c=this._lastSelected,d=a.keyCode?a.ctrlKey:
a.metaKey,t;a.shiftKey||(t=d?null:!0,c=null);this.select(b,c,t);c||(this._lastSelected=b)},_extendedSelectionHandler:function(a,b){(2===a.button?this.isSelected(b):a.keyCode?a.ctrlKey:a.metaKey)||this.clearSelection(null,!0);this._multipleSelectionHandler(a,b)},_toggleSelectionHandler:function(a,b){this.select(b,null,null)},_initSelectionEvents:function(){var a=this,b=this.contentNode,c=this.selectionDelegate;this._selectionEventQueues={deselect:[],select:[]};e("touch")&&!e("pointer")&&this.selectionTouchEvents?
(g(b,p.selector(c,this.selectionTouchEvents),function(b){a._handleSelect(b,this);a._ignoreMouseSelect=this}),g(b,g.selector(c,this.selectionEvents),function(b){a._ignoreMouseSelect!==this?a._handleSelect(b,this):b.type===m&&(a._ignoreMouseSelect=null)})):g(b,g.selector(c,this.selectionEvents),function(b){a._handleSelect(b,this)});this.addKeyHandler&&this.addKeyHandler(32,function(b){a._handleSelect(b,b.target)});if(this.allowSelectAll)this.on("keydown",function(b){b.metaKey&&65===b.keyCode&&!/\bdgrid-input\b/.test(b.target.className)&&
(b.preventDefault(),a[a.allSelected?"clearSelection":"selectAll"]())});this._setCollection&&k.before(this,"_setCollection",function(b){a._updateDeselectionAspect(b)});this._updateDeselectionAspect()},_updateDeselectionAspect:function(a){function b(a,b){if((a=c.row(a))&&c.selection[a.id])c[b](a)}var c=this,d;this._removeDeselectSignals&&this._removeDeselectSignals();d=a&&a.track&&this._observeCollection?[k.before(this,"_observeCollection",function(a){d.push(a.on("delete",function(a){"undefined"===
typeof a.index&&b(a.id,"deselect")}))}),k.after(this,"_observeCollection",function(a){d.push(a.on("update",function(c){"undefined"!==typeof c.index&&b(a.getIdentity(c.target),"select")}))},!0)]:[k.before(this,"removeRow",function(a,b){b||(a=this.row(a))&&a.id in this.selection&&this.deselect(a)})];this._removeDeselectSignals=function(){for(var a=d.length;a--;)d[a].remove();d=[]}},allowSelect:function(){return!0},_fireSelectionEvent:function(a){var b=this._selectionEventQueues[a],c=this._selectionTriggerEvent,
d;d={bubbles:!0,grid:this};c&&(d.parentType=c.type);d[this._selectionTargetType]=b;this._selectionEventQueues[a]=[];g.emit(this.contentNode,"dgrid-"+a,d)},_fireSelectionEvents:function(){var a=this._selectionEventQueues,b;for(b in a)a[b].length&&this._fireSelectionEvent(b)},_select:function(a,b,c){var d,e,f;"undefined"===typeof c&&(c=!0);a.element||(a=this.row(a));if(!1===c||this.allowSelect(a))if(d=this.selection,e=!!d[a.id],null===c&&(c=!e),f=a.element,c||this.allSelected?d[a.id]=c:delete this.selection[a.id],
f&&(c?n.add(f,"dgrid-selected"+(this.addUiClasses?" ui-state-active":"")):n.remove(f,"dgrid-selected ui-state-active")),c!==e&&f&&this._selectionEventQueues[(c?"":"de")+"select"].push(a),b)if(b.element||(b=this.row(b)),b){if(b=b.element)for(d=this._determineSelectionDirection(f,b),d||(b=document.getElementById(b.id),d=this._determineSelectionDirection(f,b));a.element!==b&&(a=this[d](a));)this._select(a,null,c)}else this._lastSelected=f,console.warn("The selection range has been reset because the beginning of the selection is no longer in the DOM. If you are using OnDemandList, you may wish to increase farOffRemoval to avoid this, but note that keeping more nodes in the DOM may impact performance.")},
_determineSelectionDirection:e("dom-comparedocumentposition")?function(a,b){a=b.compareDocumentPosition(a);return a&1?!1:2===a?"down":"up"}:function(a,b){return 1>b.sourceIndex?!1:b.sourceIndex>a.sourceIndex?"down":"up"},select:function(a,b,c){this._select(a,b,c);this._fireSelectionEvents()},deselect:function(a,b){this.select(a,b,!1)},clearSelection:function(a,b){this.allSelected=!1;for(var c in this.selection)a!==c&&this._select(c,null,!1);b||(this._lastSelected=null);this._fireSelectionEvents()},
selectAll:function(){this.allSelected=!0;this.selection={};for(var a in this._rowIdToObject){var b=this.row(this._rowIdToObject[a]);this._select(b.id,null,!0)}this._fireSelectionEvents()},isSelected:function(a){if("undefined"===typeof a||null===a)return!1;a.element||(a=this.row(a));return a.id in this.selection?!!this.selection[a.id]:this.allSelected&&(!a.data||this.allowSelect(a))},refresh:function(){this.deselectOnRefresh&&this.clearSelection();this._lastSelected=null;return this.inherited(arguments)},
renderArray:function(){var a=this.inherited(arguments),b=this.selection,c,d,e;for(c=0;c<a.length;c++)d=this.row(a[c]),(e=d.id in b?b[d.id]:this.allSelected)&&this.select(d,null,e);this._fireSelectionEvents();return a}})});