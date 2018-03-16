// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ./tsSupport/declareExtendsHelper ./tsSupport/decorateHelper dojo/aspect ./accessorSupport/decorators ./accessorSupport/ensureType ./Accessor ./ArrayPool ./Evented ./ObjectPool ./Scheduler ./lang".split(" "),function(D,Q,H,z,I,v,E,J,w,K,L,M,N){function x(f){return f?f.isInstanceOf&&f.isInstanceOf(F)?!0:!1:!1}function A(f){return f?x(f)?f.toArray():f.length?Array.prototype.slice.apply(f):[]:[]}function B(f){if(f&&f.length)return f[0]}function G(f,b,k,a){b&&b.forEach(function(c,
b,d){f.push(c);G(f,k.call(a,c,b,d),k,a)})}D=function(){function f(){this.target=null;this.defaultPrevented=this.cancellable=!1}f.prototype.preventDefault=function(){this.cancellable&&(this.defaultPrevented=!0)};f.prototype.reset=function(b){this.defaultPrevented=!1;this.item=b};return f}();var O=function(){},k=new L(D,!0,function(f){f.item=null;f.target=null}),q=new Set,r=new Set,t=new Set,C=new Map,P=0,F=function(f){function b(a){a=f.call(this,a)||this;a._boundDispatch=a._dispatchColChange.bind(a);
a._chgListeners=[];a._notifications=null;a._timer=null;a.length=0;a._items=[];Object.defineProperty(a,"uid",{value:P++});return a}H(b,f);m=b;b.ofType=function(a){if(!a)return m;if(C.has(a))return C.get(a);var c;if("function"===typeof a)c=a.prototype.declaredClass;else if(a.base)c=a.base.prototype.declaredClass;else for(var b in a.typeMap){var d=a.typeMap[b].prototype.declaredClass;c=c?c+(" | "+d):d}c=m.createSubclass({declaredClass:"esri.core.Collection\x3c"+c+"\x3e"});b={Type:a,ensureType:"function"===
typeof a?E.ensureType(a):E.ensureOneOfType(a)};Object.defineProperty(c.prototype,"itemType",{value:b});C.set(a,c);return c};b.prototype.normalizeCtorArgs=function(a){return a?Array.isArray(a)||x(a)?{items:a}:a:{}};Object.defineProperty(b.prototype,"items",{get:function(){return this._items},set:function(a){this._emitBeforeChanges()||(this._splice.apply(this,[0,this.length].concat(A(a))),this._emitAfterChanges())},enumerable:!0,configurable:!0});b.prototype.on=function(a,c){var b;Array.isArray(a)?
b=a:-1<a.indexOf(",")&&(b=a.split(/\s*,\s*/));if(b){var d=[];for(a=0;a<b.length;a++)d.push(this.on(b[a],c));d.remove=function(){for(var a=0;a<d.length;a++)d[a].remove()};return d}if("change"===a){var e=this._chgListeners,f={removed:!1,callback:c};e.push(f);this._notifications&&this._notifications.push({listeners:e.slice(),items:this._items.slice(),changes:[]});return{remove:function(){this.remove=O;f.removed=!0;e.splice(e.indexOf(f),1)}}}return I.after(this,"on"+a,c,!0)};b.prototype.hasEventListener=
function(a){return"change"===a?0<this._chgListeners.length:this.inherited(arguments)};b.prototype.add=function(a,c){if(this._emitBeforeChanges())return this;c=this.getNextIndex(c);this._splice(c,0,a);this._emitAfterChanges();return this};b.prototype.addMany=function(a,c){void 0===c&&(c=this._items.length);if(this._emitBeforeChanges())return this;c=this.getNextIndex(c);this._splice.apply(this,[c,0].concat(A(a)));this._emitAfterChanges();return this};b.prototype.removeAll=function(){if(!this.length||
this._emitBeforeChanges())return[];var a=this._splice(0,this.length)||[];this._emitAfterChanges();return a};b.prototype.clone=function(){return this._createNewInstance({items:this._items.map(N.clone)})};b.prototype.concat=function(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];a=a.map(A);return this._createNewInstance({items:(b=this._items).concat.apply(b,a)});var b};b.prototype.drain=function(a,c){if(this.length&&!this._emitBeforeChanges()){for(var b=this._splice(0,this.length),d=b.length,
e=0;e<d;e++)a.call(c,b[e],e,b);this._emitAfterChanges()}};b.prototype.every=function(a,c){return this._items.every(a,c)};b.prototype.filter=function(a,c){var b;b=2===arguments.length?this._items.filter(a,c):this._items.filter(a);return this._createNewInstance({items:b})};b.prototype.find=function(a,c){if("function"!==typeof a)throw new TypeError(a+" is not a function");for(var b=this._items,d=b.length,e=0;e<d;e++){var f=b[e];if(a.call(c,f,e,b))return f}};b.prototype.findIndex=function(a,c){if("function"!==
typeof a)throw new TypeError(a+" is not a function");for(var b=this._items,d=b.length,e=0;e<d;e++)if(a.call(c,b[e],e,b))return e;return-1};b.prototype.flatten=function(a,c){var b=[];G(b,this,a,c);return new m(b)};b.prototype.forEach=function(a,c){for(var b=this._items,d=b.length,e=0;e<d;e++)a.call(c,b[e],e,b)};b.prototype.getItemAt=function(a){return this._items[a]};b.prototype.getNextIndex=function(a){var c=this.length;a=null==a?c:a;0>a?a=0:a>c&&(a=c);return a};b.prototype.includes=function(a,c){void 0===
c&&(c=0);return arguments.length?-1!==this._items.indexOf(a,c):!1};b.prototype.indexOf=function(a,c){void 0===c&&(c=0);return this._items.indexOf(a,c)};b.prototype.join=function(a){void 0===a&&(a=",");return this._items.join(a)};b.prototype.lastIndexOf=function(a,c){void 0===c&&(c=this.length-1);return this._items.lastIndexOf(a,c)};b.prototype.map=function(a,c){a=this._items.map(a,c);return new m({items:a})};b.prototype.reorder=function(a,c){void 0===c&&(c=this.length-1);var b=this.indexOf(a);if(-1!==
b){0>c?c=0:c>=this.length&&(c=this.length-1);if(b!==c){if(this._emitBeforeChanges())return a;this._splice(b,1);this._splice(c,0,a);this._emitAfterChanges()}return a}};b.prototype.pop=function(){if(this.length&&!this._emitBeforeChanges()){var a=B(this._splice(this.length-1,1));this._emitAfterChanges();return a}};b.prototype.push=function(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];if(this._emitBeforeChanges())return this.length;this._splice.apply(this,[this.length,0].concat(a));this._emitAfterChanges();
return this.length};b.prototype.reduce=function(a,c){var b=this._items;return 2===arguments.length?b.reduce(a,c):b.reduce(a)};b.prototype.reduceRight=function(a,c){var b=this._items;return 2===arguments.length?b.reduceRight(a,c):b.reduceRight(a)};b.prototype.remove=function(a){return this.removeAt(this.indexOf(a))};b.prototype.removeAt=function(a){if(!(0>a||a>=this.length||this._emitBeforeChanges()))return a=B(this._splice(a,1)),this._emitAfterChanges(),a};b.prototype.removeMany=function(a){if(!a||
!a.length||this._emitBeforeChanges())return[];a=x(a)?a.toArray():a;for(var c=this._items,b=[],d=a.length,e=0;e<d;e++){var f=c.indexOf(a[e]);if(-1<f){for(var h=e+1,l=f+1,p=Math.min(a.length-h,c.length-l),g=0;g<p&&a[h+g]===c[l+g];)g++;h=1+g;(f=this._splice(f,h))&&0<f.length&&b.push.apply(b,f);e+=h-1}}this._emitAfterChanges();return b};b.prototype.reverse=function(){if(this._emitBeforeChanges())return this;var a=this._splice(0,this.length);a&&(a.reverse(),this._splice.apply(this,[0,0].concat(a)));this._emitAfterChanges();
return this};b.prototype.shift=function(){if(this.length&&!this._emitBeforeChanges()){var a=B(this._splice(0,1));this._emitAfterChanges();return a}};b.prototype.slice=function(a,c){void 0===a&&(a=0);void 0===c&&(c=this.length);return this._createNewInstance({items:this._items.slice(a,c)})};b.prototype.some=function(a,c){return this._items.some(a,c)};b.prototype.sort=function(a){if(!this.length||this._emitBeforeChanges())return this;var c=this._splice(0,this.length);arguments.length?c.sort(a):c.sort();
this._splice.apply(this,[0,0].concat(c));return this};b.prototype.splice=function(a,c){for(var b=[],d=2;d<arguments.length;d++)b[d-2]=arguments[d];if(this._emitBeforeChanges())return[];b=this._splice.apply(this,[a,c].concat(b))||[];this._emitAfterChanges();return b};b.prototype.toArray=function(){return this._items.slice()};b.prototype.toJSON=function(){return this.toArray()};b.prototype.toLocaleString=function(){return this._items.toLocaleString()};b.prototype.toString=function(){return this._items.toString()};
b.prototype.unshift=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];if(this._emitBeforeChanges())return this.length;this._splice.apply(this,[0,0].concat(a));this._emitAfterChanges();return this.length};b.prototype._createNewInstance=function(a){return new this.constructor(a)};b.prototype._splice=function(a,b){for(var c=this,d=[],e=2;e<arguments.length;e++)d[e-2]=arguments[e];var e=this._items,f=this.constructor.prototype.itemType,h,l,p;!this._notifications&&this.hasEventListener("change")&&
(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=M.schedule(this._boundDispatch));if(b){p=e.splice(a,b);if(this.hasEventListener("before-remove")){h=k.acquire();h.target=this;h.cancellable=!0;for(var g=0,u=p.length;g<u;g++)l=p[g],h.reset(l),this.emit("before-remove",h),h.defaultPrevented&&(p.splice(g,1),e.splice(a,0,l),a+=1,--g,--u);k.release(h)}this.length=this._items.length;if(this.hasEventListener("after-remove")){h=
k.acquire();h.target=this;h.cancellable=!1;u=p.length;for(g=0;g<u;g++)h.reset(p[g]),this.emit("after-remove",h);k.release(h)}this._notifyChangeEvent(null,p)}if(d&&d.length){if(f){h=[];for(l=0;l<d.length;l++)g=d[l],u=f.ensureType(g),null==u&&null!=g||h.push(u);d=h}if(this.hasEventListener("before-add")){var n=k.acquire();n.target=this;n.cancellable=!0;d=d.filter(function(a){n.reset(a);c.emit("before-add",n);return!n.defaultPrevented});k.release(n)}e.splice.apply(e,[a,0].concat(d));this.length=this._items.length;
if(this.hasEventListener("after-add")){h=k.acquire();h.target=this;h.cancellable=!1;e=0;for(f=d;e<f.length;e++)l=f[e],h.reset(l),this.emit("after-add",h);k.release(h)}this._notifyChangeEvent(d,null)}return p};b.prototype._emitBeforeChanges=function(){var a=!1;if(this.hasEventListener("before-changes")){var b=k.acquire();b.target=this;b.cancellable=!0;this.emit("before-changes",b);a=b.defaultPrevented;k.release(b)}return a};b.prototype._emitAfterChanges=function(){if(this.hasEventListener("after-changes")){var a=
k.acquire();a.target=this;a.cancellable=!1;this.emit("after-changes",a);k.release(a)}};b.prototype._notifyChangeEvent=function(a,b){this.hasEventListener("change")&&this._notifications[this._notifications.length-1].changes.push({added:a,removed:b})};b.prototype._dispatchColChange=function(){this._timer&&(this._timer.remove(),this._timer=null);if(this._notifications){var a=this._notifications;this._notifications=null;for(var b=function(a){var b=a.changes;q.clear();r.clear();t.clear();for(var c=0;c<
b.length;c++){var e=b[c],d=e.added,e=e.removed;if(d)if(0===t.size&&0===r.size)for(var g=0,k=d;g<k.length;g++)d=k[g],q.add(d);else for(g=0,k=d;g<k.length;g++)d=k[g],r.has(d)?(t.add(d),r.delete(d)):t.has(d)||q.add(d);if(e)if(0===t.size&&0===q.size)for(g=0;g<e.length;g++)d=e[g],r.add(d);else for(g=0;g<e.length;g++)d=e[g],q.has(d)?q.delete(d):(t.delete(d),r.add(d))}var n=w.acquire();q.forEach(function(a){n.push(a)});var m=w.acquire();r.forEach(function(a){m.push(a)});var v=f._items,x=a.items,y=w.acquire();
t.forEach(function(a){x.indexOf(a)!==v.indexOf(a)&&y.push(a)});if(a.listeners&&(n.length||m.length||y.length))for(b={target:f,added:n,removed:m,moved:y},c=a.listeners.length,d=0;d<c;d++)e=a.listeners[d],e.removed||e.callback.call(f,b);w.release(n);w.release(m);w.release(y)},f=this,d=0;d<a.length;d++)b(a[d]);q.clear();r.clear();t.clear()}};b.isCollection=x;z([v.property()],b.prototype,"length",void 0);z([v.property()],b.prototype,"items",null);return b=m=z([v.subclass("esri.core.Collection")],b);var m}(v.declared(J,
K));return F});