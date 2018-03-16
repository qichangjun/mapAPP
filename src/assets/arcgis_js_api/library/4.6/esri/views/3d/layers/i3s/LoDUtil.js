// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","../../lib/glMatrix"],function(p,m,l){function n(b,c,e){for(;0<b;){var d=c.indexOf(b);if(0<=d)return d;b=e.getParentId(b)}return c.indexOf(b)}Object.defineProperty(m,"__esModule",{value:!0});m.nodeDiff=function(b,c,e){for(var d=b.map(function(){return!1}),h=b.map(function(){return null}),f=c.map(function(){return!1}),g=c.map(function(){return null}),a=0;a<c.length;a++){var k=n(c[a],b,e);0<=k&&(f[a]=!0,null!=h[k]?h[k].push(c[a]):h[k]=[c[a]])}for(a=0;a<b.length;a++)k=n(b[a],
c,e),0<=k&&(d[a]=!0,null!=g[k]?g[k].push(b[a]):g[k]=[b[a]]);e=[];for(a=0;a<b.length;a++)null!=h[a]||d[a]||e.push({load:[],remove:[b[a]]});for(a=0;a<c.length;a++)null!=g[a]||f[a]||e.push({load:[c[a]],remove:[]});for(a=0;a<c.length;a++)null!=g[a]&&(1<g[a].length||g[a][0]!==c[a])&&e.push({load:[c[a]],remove:g[a]});for(a=0;a<b.length;a++)null!=h[a]&&(1<h[a].length||h[a][0]!==b[a])&&e.push({load:h[a],remove:[b[a]]});return e};m.sortFrontToBack=function(b,c,e){return b.sort(function(d,b){if(0===d.load.length&&
0===b.load.length)return 0;if(0===d.load.length)return-1;if(0===b.load.length)return 1;if(0===d.remove.length&&0===b.remove.length)return d=e.getRenderCenter(d.load[0]),b=e.getRenderCenter(b.load[0]),l.vec3d.dot(d,c)-l.vec3d.dot(b,c);if(0===d.remove.length)return-1;if(0===b.remove.length)return 1;if(1===d.load.length&&1===b.load.length)return d=e.getRenderCenter(d.load[0]),b=e.getRenderCenter(b.load[0]),l.vec3d.dot(d,c)-l.vec3d.dot(b,c);if(1===d.load.length)return-1;if(1===b.load.length)return 1;
d=e.getRenderCenter(d.remove[0]);b=e.getRenderCenter(b.remove[0]);return l.vec3d.dot(d,c)-l.vec3d.dot(b,c)})};m.splitWorkEntry=function(b,c){for(var e=[b.remove[0]],d=[];1===e.length;)for(var h=e.pop(),f=d.length=0;f<b.load.length;f++){for(var g=b.load[f],a=c.getParentId(g);a!==h;)g=a,a=c.getParentId(g);a=e.indexOf(g);0>a&&(a=e.length,e.push(g),d.push([]));d[a].push(b.load[f])}c=[];c.push({remove:b.remove,load:e});for(f=0;f<e.length;f++)1<d[f].length?c.push({remove:[e[f]],load:d[f]}):e[f]=d[f][0];
return c}});