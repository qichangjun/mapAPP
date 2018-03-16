// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","../../lib/glMatrix"],function(l,f,b){Object.defineProperty(f,"__esModule",{value:!0});f.createRay=function(a,c,d,e){void 0===e&&(e=!1);b.vec3d.set3(c[0],c[1],0,h);e?b.vec3d.set(a.eye,d.origin):b.vec3d.unproject(h,a.viewMatrix,a.projectionMatrix,a.fullViewport,d.origin);h[2]=1;b.vec3d.unproject(h,a.viewMatrix,a.projectionMatrix,a.fullViewport,d.direction);b.vec3d.subtract(d.direction,d.origin,d.direction);b.vec3d.normalize(d.direction)};f.intersectSphere=function(a,c,d){var e=
b.vec3d.subtract(c.origin,a.center,k),g=b.vec3d.dot(c.direction,c.direction),f=2*b.vec3d.dot(c.direction,e);a=b.vec3d.dot(e,e)-a.radius*a.radius;a=f*f-4*g*a;if(0>a)return!1;e=Math.sqrt(a);a=(-f-e)/(2*g);g=(-f+e)/(2*g);if(0>a||g<a&&0<g)a=g;return 0<a?(b.vec3d.add(c.origin,b.vec3d.scale(c.direction,a,d),d),!0):!1};f.intersectPlane=function(a,c,d){var e=b.vec3d.dot(a.normal,c.direction);if(0===e)return!1;a=-(b.vec3d.dot(a.normal,c.origin)+a.d)/e;if(0>a)return!1;b.vec3d.add(c.origin,b.vec3d.scale(c.direction,
a,d),d);return!0};var h=b.vec3d.create(),k=b.vec3d.create()});