// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ./Container dojox/gfx/_base ./svg ./Circle ./Path ./Image ./Rect ./Text".split(" "),function(e,f,h,k,c,g,l,m,n,p,q){Object.defineProperty(f,"__esModule",{value:!0});e=function(d){function b(){return null!==d&&d.apply(this,arguments)||this}h(b,d);b.prototype.setRawNode=function(a){this.rawNode=a;this.rawNode.__gfxObject__=this};b.prototype.destroy=function(){d.prototype.clear.call(this,!0);d.prototype.destroy.call(this)};b.prototype.createShape=
function(a){switch(a.type){case c.defaultPath.type:return this.createPath(a);case c.defaultRect.type:return this.createRect(a);case c.defaultCircle.type:return this.createCircle(a);case c.defaultImage.type:return this.createImage(a);case c.defaultText.type:return this.createText(a)}console.error("[gfx] unknown shape",a);return null};b.prototype.createGroup=function(){return this.createObject(b)};b.prototype.createRect=function(a){return this.createObject(p.default,a)};b.prototype.createCircle=function(a){return this.createObject(l.default,
a)};b.prototype.createImage=function(a){return this.createObject(n.default,a)};b.prototype.createText=function(a){return this.createObject(q.default,a)};b.prototype.createPath=function(a){return this.createObject(m.default,a)};b.prototype.createObject=function(a,b){if(!this.rawNode)return null;var c=new a;a=g._createElementNS(g.xmlns.svg,a.nodeType);c.setRawNode(a);c.setShape(b);this.add(c);return c};b.nodeType="g";return b}(k.default);f.default=e});