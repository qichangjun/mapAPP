// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/tsSupport/assignHelper","../../core/Error"],function(p,q,m,n){return function(){function b(){}b.vertexCount=function(a,d){return a.vertexBuffers[d].size/b.getStride(a.layout[d])};b.getStride=function(a){return a[0].stride};b.getBytesPerElement=function(a){switch(a){case 5126:return 4;case 5124:return 4;case 5125:return 4;case 5122:return 2;case 5123:return 2;case 5120:return 1;case 5121:return 1;default:throw Error("Unknown data type");}};b.addDescriptor=function(a,
d,c,f,e,h){var g=b.getBytesPerElement(f);if(0<a.length){var k=a[0].stride,l=k+g*c;a.forEach(function(a){return a.stride=l});a.push({name:d,count:c,type:f,offset:k,stride:l,normalized:e,divisor:h})}else a.push({name:d,count:c,type:f,offset:0,stride:g*c,normalized:e,divisor:h})};b.assertCompatibleVertexAttributeLocations=function(a,d){(a=a.locations===d.locations)||console.error("VertexAttributeLocations are incompatible");return a};b.hasAttribute=function(a,d){for(var c=0;c<a.length;c++)if(a[c].name===
d)return!0;return!1};b.findAttribute=function(a,d){for(var c=0;c<a.length;c++)if(a[c].name===d)return a[c];return null};b.copyFramebufferToTexture=function(a,d,c,b,e){void 0===e&&(e=0);var f=a.getBoundFramebufferObject(),g=a.getBoundTexture(0);a.bindFramebuffer(d);a.bindTexture(c,0);a.gl.copyTexImage2D(a.gl.TEXTURE_2D,e,c.descriptor.pixelFormat,b[0],b[1],b[2],b[3],0);a.gl.flush();a.bindFramebuffer(f);a.bindTexture(g,0)};b.assert=function(a,b){if(!a)throw new n(b);};b.setBaseInstanceOffset=function(a,
b){var c={},d;for(d in a)c[d]=a[d].map(function(a){return a.divisor?m({},a,{baseInstance:b}):a});return c};return b}()});