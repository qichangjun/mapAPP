//>>built
define("dojo/_base/kernel dojo/_base/array dojo/_base/declare dojo/_base/Deferred dojo/dom-class dojo/dom-construct dijit/registry ../lazyLoadUtils".split(" "),function(q,r,h,k,l,m,n,p){return h("dojox.mobile.dh.HtmlContentHandler",null,{parse:function(a,d,e){this.execScript&&(a=this.execScript(a));var b=m.create("div",{innerHTML:a,style:{visibility:"hidden"}});d.insertBefore(b,e);return k.when(p.instantiateLazyWidgets(b),function(){var c,a,f;a=0;for(f=b.childNodes.length;a<f;a++){var g=b.firstChild;
c||1!==g.nodeType||(c=n.byNode(g));d.insertBefore(b.firstChild,e)}d.removeChild(b);return c&&l.contains(c.domNode,"mblView")?c.id:(console.log("HtmlContentHandler.parse: invalid view content"),null)})}})});