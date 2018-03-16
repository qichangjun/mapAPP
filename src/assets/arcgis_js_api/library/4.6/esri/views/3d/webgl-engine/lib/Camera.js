// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","./Util","./gl-matrix"],function(q,v,k,m){function r(b,a){var t=a[0]-b[0],c=a[1]-b[1],d=a[2]-b[2];b=a[3]-b[3];return t*t+c*c+d*d+b*b}function l(b,a){return b[0]===a[0]&&b[1]===a[1]&&b[2]===a[2]}function u(b,a){return b[0]===a[0]&&b[1]===a[1]&&b[2]===a[2]&&b[3]===a[3]}var c=m.vec3d,f=m.vec4d,e=m.mat4d;q=function(){function b(a,b,h){this._viewUp=c.create();this._viewForward=c.create();this._viewRight=c.create();this._viewport=f.create();this._padding=f.create();this._fov=
55/180*Math.PI;this._near=0;this._far=1E3;this._viewDirty=!0;this._viewMatrix=e.create();this._projectionDirty=!0;this._projectionMatrix=e.create();this._viewInverseTransposeMatrixDirty=!0;this._viewInverseTransposeMatrix=e.create();this._frustumPlanesDirty=!0;this._frustumPlanes=[f.create(),f.create(),f.create(),f.create(),f.create(),f.create()];this._fullViewport=null;this.aboveGround=!0;this._eye=c.create(a);this._center=c.create(b);this._up=void 0!==h?c.create(h):c.create([0,0,1]);this._padding=
f.create()}Object.defineProperty(b.prototype,"eye",{get:function(){return this._eye},set:function(a){this._compareAndSetView(a,this._eye)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"center",{get:function(){return this._center},set:function(a){this._compareAndSetView(a,this._center)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"up",{get:function(){return this._up},set:function(a){this._compareAndSetView(a,this._up)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"viewMatrix",{get:function(){this._ensureViewClean();return this._viewMatrix},set:function(a){e.set(a,this._viewMatrix);this._viewDirty=!1;this._frustumPlanesDirty=this._viewInverseTransposeMatrixDirty=!0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"viewForward",{get:function(){this._ensureViewClean();return this._viewForward},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"viewUp",{get:function(){this._ensureViewClean();return this._viewUp},enumerable:!0,
configurable:!0});Object.defineProperty(b.prototype,"viewRight",{get:function(){this._ensureViewClean();return this._viewRight},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"near",{get:function(){return this._near},set:function(a){this._near!==a&&(this._near=a,this._frustumPlanesDirty=this._projectionDirty=!0)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"far",{get:function(){return this._far},set:function(a){this._far!==a&&(this._far=a,this._frustumPlanesDirty=
this._projectionDirty=!0)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"viewport",{get:function(){return this._viewport},set:function(a){this.x=a[0];this.y=a[1];this.width=a[2];this.height=a[3]},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"x",{get:function(){return this._viewport[0]},set:function(a){a+=this._padding[3];this._viewport[0]!==a&&(this._viewport[0]=a,this._frustumPlanesDirty=this._projectionDirty=!0)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"y",{get:function(){return this._viewport[1]},set:function(a){a+=this._padding[2];this._viewport[1]!==a&&(this._viewport[1]=a,this._frustumPlanesDirty=this._projectionDirty=!0)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"width",{get:function(){return this._viewport[2]},set:function(a){this._viewport[2]!==a&&(this._viewport[2]=a,this._frustumPlanesDirty=this._projectionDirty=!0)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"height",{get:function(){return this._viewport[3]},
set:function(a){this._viewport[3]!==a&&(this._viewport[3]=a,this._frustumPlanesDirty=this._projectionDirty=!0)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"fullWidth",{get:function(){return this._viewport[2]+this._padding[1]+this._padding[3]},set:function(a){this.width=a-(this._padding[1]+this._padding[3])},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"fullHeight",{get:function(){return this._viewport[3]+this._padding[0]+this._padding[2]},set:function(a){this.height=
a-(this._padding[0]+this._padding[2])},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"fullViewport",{get:function(){this._fullViewport||(this._fullViewport=f.create());this._fullViewport[0]=this._viewport[0]-this._padding[3];this._fullViewport[1]=this._viewport[1]-this._padding[2];this._fullViewport[2]=this.fullWidth;this._fullViewport[3]=this.fullHeight;return this._fullViewport},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"aspect",{get:function(){return this.width/
this.height},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"padding",{get:function(){return this._padding},set:function(a){if(this._padding[0]!==a[0]||this._padding[1]!==a[1]||this._padding[2]!==a[2]||this._padding[3]!==a[3])this._viewport[0]+=a[3]-this._padding[3],this._viewport[1]+=a[2]-this._padding[2],this._viewport[2]-=a[1]+a[3]-(this._padding[1]+this._padding[3]),this._viewport[3]-=a[0]+a[2]-(this._padding[0]+this._padding[2]),f.set(a,this._padding),this._frustumPlanesDirty=
this._projectionDirty=!0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"projectionMatrix",{get:function(){if(this._projectionDirty){var a=this.width,b=this.height,c=this.near*Math.tan(this.fovY/2),d=c*this.aspect;e.frustum(-d*(1+2*this._padding[3]/a),d*(1+2*this._padding[1]/a),-c*(1+2*this._padding[2]/b),c*(1+2*this._padding[0]/b),this.near,this.far,this._projectionMatrix);this._projectionDirty=!1}return this._projectionMatrix},set:function(a){e.set(a,this._projectionMatrix);
this._projectionDirty=!1;this._frustumPlanesDirty=!0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"fov",{get:function(){return this._fov},set:function(a){this._fov=a;this._frustumPlanesDirty=this._projectionDirty=!0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"fovX",{get:function(){return k.fovd2fovx(this._fov,this.width,this.height)},set:function(a){this._fov=k.fovx2fovd(a,this.width,this.height);this._frustumPlanesDirty=this._projectionDirty=!0},enumerable:!0,
configurable:!0});Object.defineProperty(b.prototype,"fovY",{get:function(){return k.fovd2fovy(this._fov,this.width,this.height)},set:function(a){this._fov=k.fovy2fovd(a,this.width,this.height);this._frustumPlanesDirty=this._projectionDirty=!0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"distance",{get:function(){return c.dist(this._center,this._eye)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"frustumPoints",{get:function(){return this.computeFrustumPoints()},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"frustumPlanes",{get:function(){this._frustumPlanesDirty&&(this._frustumPlanes=this._computeFrustumPlanes(this._frustumPlanes),this._frustumPlanesDirty=!1);return this._frustumPlanes},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"viewInverseTransposeMatrix",{get:function(){if(this._viewInverseTransposeMatrixDirty||this._viewDirty)this._viewInverseTransposeMatrix||(this._viewInverseTransposeMatrix=e.create()),e.inverse(this.viewMatrix,
this._viewInverseTransposeMatrix),e.transpose(this._viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1;return this._viewInverseTransposeMatrix},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"perPixelRatio",{get:function(){return Math.tan(this.fovX/2)/this.width},enumerable:!0,configurable:!0});b.prototype.copyFrom=function(a){c.set(a._eye,this._eye);c.set(a._center,this._center);c.set(a._up,this._up);f.set(a._viewport,this._viewport);f.set(a._padding,this._padding);
this._near=a._near;this._far=a._far;this._fov=a._fov;this.aboveGround=a.aboveGround;a._viewDirty?this._viewDirty=!0:(e.set(a._viewMatrix,this._viewMatrix),c.set(a._viewRight,this._viewRight),c.set(a._viewUp,this._viewUp),c.set(a._viewForward,this._viewForward),this._viewDirty=!1);a._projectionDirty?this._projectionDirty=!0:(e.set(a._projectionMatrix,this._projectionMatrix),this._projectionDirty=!1);a._frustumPlanesDirty?this._frustumPlanesDirty=!0:(a.copyFrustumPlanes(this._frustumPlanes),this._frustumPlanesDirty=
!1);a._viewInverseTransposeMatrixDirty?this._viewInverseTransposeMatrixDirty=!0:(this._viewInverseTransposeMatrix?e.set(a._viewInverseTransposeMatrix,this._viewInverseTransposeMatrix):this._viewInverseTransposeMatrix=e.create(a._viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1);a._fullViewport?this._fullViewport?f.set(a._fullViewport,this._fullViewport):this._fullViewport=f.create(a._fullViewport):this._fullViewport=null;return this};b.prototype.copyViewFrom=function(a){this.eye=
a.eye;this.center=a.center;this.up=a.up};b.prototype.copy=function(){var a=new b;a.copyFrom(this);return a};b.prototype.equivalent=function(a){return l(this._eye,a._eye)&&l(this._center,a._center)&&l(this._up,a._up)&&u(this._viewport,a._viewport)&&u(this._padding,a._padding)&&this._near===a._near&&this._far===a._far&&this._fov===a._fov};b.prototype.almostEquals=function(a,b,h){void 0===h&&(h=!1);b=c.dist(this._eye,this._center)*(b||5E-4);b*=b;h?(c.direction(a._center,a._eye,g),c.direction(this._center,
this._eye,n),h=1E-10):(c.set(a._center,g),c.set(this._center,n),h=b);return c.dist2(a._eye,this._eye)<b&&c.dist2(g,n)<h&&.001>Math.abs(a._fov-this._fov)&&.5>r(a._padding,this._padding)&&.5>r(a._viewport,this._viewport)};b.prototype.markViewDirty=function(){this._frustumPlanesDirty=this._viewDirty=!0};b.prototype.computePixelSizeAt=function(a){return this.computePixelSizeAtDist(c.dist(a,this._eye))};b.prototype.computePixelSizeAtDist=function(a){return 2*a*Math.tan(this.fovX/2)/this.width};b.prototype.computeDistanceFromRadius=
function(a,b){return a/Math.tan(Math.min(this.fovX,this.fovY)/(2*(b||1)))};b.prototype.copyFrustumPlanes=function(a){if(!a){a=Array(6);for(var b=0;6>b;++b)a[b]=f.create()}for(var c=this.frustumPlanes,b=0;6>b;b++)f.set(c[b],a[b]);return a};b.prototype.computeFrustumPoints=function(a){if(!a){a=Array(8);for(var b=0;8>b;++b)a[b]=c.create()}k.matrix2frustum(this.viewMatrix,this.projectionMatrix,a);return a};b.prototype.setGLViewport=function(a){var b=this.viewport,c=this.padding;a.setViewport(b[0]-c[3],
b[1]-c[2],b[2]+c[1]+c[3],b[3]+c[0]+c[2])};b.prototype.applyProjection=function(a,b,h){void 0===h&&(h=!1);a!==d&&c.set(a,d);d[3]=1;h&&(b[2]=-d[2]);e.multiplyVec4(this.projectionMatrix,d);c.scale(d,1/Math.abs(d[3]));a=this.fullViewport;b[0]=k.lerp(0,a[0]+a[2],.5+.5*d[0]);b[1]=k.lerp(0,a[1]+a[3],.5+.5*d[1]);h||(b[2]=.5*(d[2]+1));return b};b.prototype.projectPoint=function(a,b,c){void 0===c&&(c=!1);e.multiplyVec3(this.viewMatrix,a,d);return this.applyProjection(d,b,c)};b.prototype.unprojectPoint=function(a,
b,c){void 0===c&&(c=!1);if(c)return console.error("Camera.unprojectPoint() not yet implemented for linear Z"),null;e.multiply(this.projectionMatrix,this.viewMatrix,p);if(!e.inverse(p))return null;c=this.fullViewport;d[0]=2*(a[0]-c[0])/c[2]-1;d[1]=2*(a[1]-c[1])/c[3]-1;d[2]=2*a[2]-1;d[3]=1;e.multiplyVec4(p,d);if(0===d[3])return null;b[0]=d[0]/d[3];b[1]=d[1]/d[3];b[2]=d[2]/d[3];return b};b.prototype.computeUp=function(a){"global"===a?this.computeUpGlobal():this.computeUpLocal()};b.prototype.computeUpGlobal=
function(){c.subtract(this.center,this.eye,g);var a=c.length(this.center);1>a?(c.set3(0,0,1,this.up),this.markViewDirty()):Math.abs(c.dot(g,this.center))>.9999*c.length(g)*a||(c.cross(g,this.center,this.up),c.cross(this.up,g,this.up),c.normalize(this.up),this.markViewDirty())};b.prototype.computeUpLocal=function(){c.direction(this.center,this.eye,g);.9999>=Math.abs(g[2])&&(c.scale(g,g[2]),c.set3(-g[0],-g[1],1-g[2],this.up),c.normalize(this.up),this.markViewDirty())};b.prototype._compareAndSetView=
function(a,b){l(a,b)||(c.set(a,b),this._frustumPlanesDirty=this._viewDirty=!0)};b.prototype._computeFrustumPlanes=function(a){if(!a){a=Array(6);for(var b=0;6>b;++b)a[b]=f.create()}k.matrix2frustumPlanes(this.viewMatrix,this.projectionMatrix,a);return a};b.prototype._ensureViewClean=function(){this._viewDirty&&(e.lookAt(this._eye,this._center,this._up,this._viewMatrix),c.set3(-this._viewMatrix[2],-this._viewMatrix[6],-this._viewMatrix[10],this._viewForward),c.set3(this._viewMatrix[1],this._viewMatrix[5],
this._viewMatrix[9],this._viewUp),c.set3(this._viewMatrix[0],this._viewMatrix[4],this._viewMatrix[8],this._viewRight),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0)};return b}();var d=f.create(),p=e.create(),g=c.create(),n=c.create();return q});