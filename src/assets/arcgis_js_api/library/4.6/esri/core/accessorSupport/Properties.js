// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports dojo/has ./Store ./PropertyOrigin ./extensions ../Logger".split(" "),function(h,k,p,l,e,m,n){Object.defineProperty(k,"__esModule",{value:!0});n.getLogger("esri.core.accessorSupport.Properties");h=function(){function b(a){this.host=a;this._origin=e.OriginId.USER;this.ctorArgs=this.cursors=null;this.destroyed=!1;this.dirties={};this.lifecycle=0;this.overridden=null;this.store=new l.default;a=this.host.constructor.__accessorMetadata__;this.metadatas=a.properties;this.autoDestroy=
a.autoDestroy}b.prototype.initialize=function(){this.lifecycle=1;m.instanceCreated(this.host,this.metadatas)};b.prototype.constructed=function(){this.lifecycle=2};b.prototype.destroy=function(){this.destroyed=!0;var a=this.cursors;if(this.cursors)for(var c=0,d=Object.getOwnPropertyNames(a);c<d.length;c++){var b=d[c],f=a[b];if(f){for(;0<f.length;)f.pop().propertyDestroyed(this,b);a[b]=null}}if(this.autoDestroy)for(b in this.metadatas)(a=this.internalGet(b))&&a&&"function"===typeof a.destroy&&(a.destroy(),
this.metadatas[b].nonNullable||this.internalSet(b,null))};Object.defineProperty(b.prototype,"initialized",{get:function(){return 0!==this.lifecycle},enumerable:!0,configurable:!0});b.prototype.clearOverride=function(a){this.isOverridden(a)&&(this.overridden[a]=!1,this.propertyInvalidated(a))};b.prototype.get=function(a){var c=this.metadatas[a];if(this.store.has(a)&&!this.dirties[a])return this.store.get(a);var d=c.get;return d?(c=d.call(this.host),this.store.set(a,c,e.OriginId.COMPUTED),this.propertyCommitted(a),
c):c.value};b.prototype.originOf=function(a){var c=this.store.originOf(a);return void 0===c&&(a=this.metadatas[a])&&a.hasOwnProperty("value")?"defaults":e.idToName(c)};b.prototype.has=function(a){return this.metadatas[a]?this.store.has(a):!1};b.prototype.internalGet=function(a){if(this.metadatas[a]){var c=this.store;return c.has(a)?c.get(a):this.metadatas[a].value}};b.prototype.internalSet=function(a,c){this.metadatas[a]&&(this.propertyInvalidated(a),this.initialized?this.store.set(a,c,this._origin):
this.store.set(a,c,e.OriginId.DEFAULTS),this.propertyCommitted(a))};b.prototype.isOverridden=function(a){return null!=this.overridden&&!0===this.overridden[a]};b.prototype.keys=function(){return this.store.keys()};b.prototype.override=function(a,c){if(this.metadatas[a]){this.overridden||(this.overridden={});var d=this.metadatas[a];d.nonNullable&&null==c||((d=d.cast)&&(c=d.call(this.host,c)),this.overridden[a]=!0,this.internalSet(a,c))}};b.prototype.set=function(a,c){if(this.metadatas[a]){var d=this.metadatas[a];
if(!d.nonNullable||null!=c){var b=d.set;(d=d.cast)&&(c=d.call(this.host,c));b?b.call(this.host,c):this.internalSet(a,c)}}};b.prototype.setDefaultOrigin=function(a){this._origin=e.nameToId(a)};b.prototype.propertyInvalidated=function(a){var c=this.dirties,b=this.isOverridden(a),e=this.cursors&&this.cursors[a],f=this.metadatas[a].computes;if(e)for(var g=0;g<e.length;g++)e[g].propertyInvalidated(this,a);b||(c[a]=!0);if(f)for(a=0;a<f.length;a++)this.propertyInvalidated(f[a])};b.prototype.propertyCommitted=
function(a){var c=this.cursors&&this.cursors[a];this.dirties[a]=!1;if(c)for(var b=0;b<c.length;b++)c[b].propertyCommitted(this,a)};b.prototype.addCursor=function(a,c){this.cursors||(this.cursors={});var b=this.cursors[a];b||(this.cursors[a]=b=[]);b.push(c)};b.prototype.removeCursor=function(a,b){var c=this.cursors[a];this.cursors[a]&&(c.splice(c.indexOf(b),1),0===c.length&&(this.cursors[a]=null))};return b}();k.default=h});