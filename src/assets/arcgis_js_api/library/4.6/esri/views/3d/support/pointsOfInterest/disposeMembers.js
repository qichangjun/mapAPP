// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/Accessor"],function(k,c,f){function g(a){for(var c=[],b=1;b<arguments.length;b++)c[b-1]=arguments[b];if(a instanceof f&&a.destroyed)try{throw Error("instance is already destroyed");}catch(h){console.warn(h.stack)}else for(b=0;b<c.length;b++){var e=c[b];if(!(e in a))throw Error("Property '"+e+"' does not exist and cannot be disposed");var d=a[e];d&&("function"===typeof d.destroy?d.destroy():"function"===typeof d.dispose?d.dispose():"function"===typeof d.remove&&
d.remove());a instanceof f&&e in a.__accessor__.metadatas?a._set(e,null):a[e]=null}}Object.defineProperty(c,"__esModule",{value:!0});c.disposeMembers=g;c.default=g});