// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ../../../core/HandleRegistry ../../../core/watchUtils ../../../core/promiseUtils ../../../core/Logger ../../../core/screenUtils ../../../geometry/support/scaleUtils ../../../symbols/support/unitConversionUtils ../../../request ../support/projectionUtils ../support/orientedBoundingBox ./LayerView3D ./support/LayerViewUpdatingPercentage ../lib/glMatrix ./i3s/I3SBinaryReader ./i3s/I3SUtil ./i3s/PointCloudRendererUtil ./i3s/PointRenderer ./i3s/PagedNodeIndex ./i3s/LoDUtil ./i3s/LEPCC ./i3s/IdleQueue dojo/promise/all dojo/errors/CancelError ../webgl-engine/lib/RenderSlot".split(" "),
function(R,S,C,k,d,D,g,t,E,u,F,v,w,x,G,H,I,p,y,z,l,J,K,q,L,M,A,N,O){function B(d){var b=[];d.forEach(function(a){return b.push(a)});return b}var P=E.getLogger("esri.views.3d.layers.PointCloudLayerView3D"),Q=p.vec4d.create();return function(r){function b(){var a=null!==r&&r.apply(this,arguments)||this;a.maximumPointCount=4E6;a._renderer=null;a._rendererAdded=!1;a._renderedNodes=new Set;a._updateViewNeeded=!0;a._idleUpdatesEnabled=!0;a._lodFactor=1;a._handles=new D;a._indexQueue=[];a._workQueue=[];
a._idleQueue=new M.IdleQueue;a._indexPagesLoading=new Map;a._loadingNodes=new Map;a._layerIsVisible=!1;a._totalWork=0;a._index=null;a._loadingInitNodePage=!1;a._nodeIdArray=[];return a}C(b,r);Object.defineProperty(b.prototype,"pointScale",{get:function(){var a=l.getSplatSizeAlgorithm(this.layer.renderer);return a&&null!=a.scaleFactor?a.scaleFactor:1},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"pointMinSize",{get:function(){return l.getMinSize(this.layer.renderer)},enumerable:!0,
configurable:!0});Object.defineProperty(b.prototype,"useRealWorldSymbolSizes",{get:function(){var a=l.getFixedSizeAlgorithm(this.layer.renderer);return a&&null!=a.useRealWorldSymbolSizes?a.useRealWorldSymbolSizes:!1},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"pointSize",{get:function(){var a=l.getFixedSizeAlgorithm(this.layer.renderer);return a&&null!=a.size?a.size:0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"inverseDensity",{get:function(){return this.layer.renderer?
96/this.layer.renderer.pointsPerInch:5},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"_clippingBox",{get:function(){var a=[];return x.extentToBoundingBox(this.view.clippingArea,a,this.view.renderSpatialReference)?a:null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"_elevationOffset",{get:function(){var a=this.layer.elevationInfo;if(a&&"absolute-height"===a.mode){var c=F.getMetersPerVerticalUnitForSR(this.layer.spatialReference),b=v.getMetersPerUnit(a.unit);
return(a.offset||0)*b/c}return 0},enumerable:!0,configurable:!0});b.prototype.initialize=function(){var a=this;z.checkPointCloudLayerValid(this.layer);z.checkPointCloudLayerCompatibleWithView(this.layer,this.view);this._initRenderer();var c=this._initNodePages(),b={idleBegin:function(){return a._idleBegin()},idleEnd:function(){return a._idleEnd()},needsUpdate:function(){return!0},idleFrame:function(c){return a._idleFrame(c)}},e={idleBegin:function(){return a._idleBegin()},idleEnd:function(){return a._idleEnd()},
needsUpdate:function(){return a._updateViewNeeded||0<a._workQueue.length},idleFrame:function(c){return a._idleFrameWhileSuspended(c)}};c.then(function(){a._handles.add(g.init(a,"suspended",function(c){c?(a.view.resourceController.deregisterIdleFrameWorker(a),a.view.resourceController.registerIdleFrameWorker(a,e)):(a.view.resourceController.deregisterIdleFrameWorker(a),a.view.resourceController.registerIdleFrameWorker(a,b))}))});this._handles.add(g.init(this,"_clippingBox",function(){return a._updateViewNeeded=
!0}));this._handles.add(g.init(this.layer,"elevationInfo",function(){return a._elevationInfoChanged()}));this._handles.add(g.init(this,"_elevationOffset",function(){return a._elevationOffsetChanged()}));this._handles.add(g.init(this.layer,"renderer",function(){return a._rendererChanged()}));this.addResolvingPromise(c)};b.prototype.destroy=function(){this.view.resourceController.deregisterIdleFrameWorker(this);this._handles.destroy();this._destroyRenderer()};b.prototype._initRenderer=function(){var a=
this;this._renderer=new J;this._renderer.layerUid=this.layer.uid;this._handles.add(g.init(this,"_clippingBox",function(c){a._renderer.clippingBox=c}));this._handles.add(g.init(this,"_clippingBox",function(c){a._renderer.clippingBox=c}));this._handles.add(g.init(this,"suspended",function(c){a._setPointsVisible(!c)}));this._handles.add(g.init(this,"pointScale",function(c){a._renderer.scaleFactor=c}));this._handles.add(g.init(this,"pointMinSize",function(c){c=u.pt2px(c);a._renderer.minSizePx=c}));this._handles.add(g.init(this,
"useRealWorldSymbolSizes",function(c){a._renderer.useRealWorldSymbolSizes=c}));this._handles.add(g.init(this,"pointSize",function(c){var b=u.pt2px(c);a._renderer.size=c;a._renderer.sizePx=b}));this._handles.add(g.init(this,["inverseDensity","maximumPointCount"],function(){a._updateViewNeeded=!0}));this._handles.add(g.init(this.view,"qualitySettings.sceneService.pointCloud.lodFactor",function(c){a._lodFactor=c;a._updateViewNeeded=!0}))};b.prototype._destroyRenderer=function(){this._setPointsVisible(!1)};
b.prototype._setPointsVisible=function(a){a&&!this._rendererAdded?(this.view._stage.addExternalRenderer([O.OPAQUE_EXTERNAL],this._renderer),this._rendererAdded=!0):!a&&this._rendererAdded&&(this.view._stage.removeExternalRenderer(this._renderer),this._rendererAdded=!1)};b.prototype._rendererChanged=function(){this._clearNodeState();this._renderer.useFixedSizes=l.rendererUsesFixedSizes(this.layer.renderer);this._updateViewNeeded=!0};b.prototype._elevationInfoChanged=function(){var a=this.layer.elevationInfo&&
this.layer.elevationInfo.unit;a&&!v.supportsUnit(a)&&P.warn("elevationInfo.unit","'"+a+"' is not a valid unit")};b.prototype._elevationOffsetChanged=function(){var a=this;this._clearNodeState();this._initNodePages().then(function(){a._updateViewNeeded=!0})};b.prototype.displayNodes=function(a){this._cancelNodeLoading();this._workQueue=q.nodeDiff(B(this._renderedNodes),a,this._index);q.sortFrontToBack(this._workQueue,this.view.state.camera.viewForward,this._index);this._totalWork=this._computeWork();
this._updateLoading();this._layerIsVisible=0<a.length;this.notifyChange("suspended")};b.prototype.cancelLoading=function(){this._cancelNodeLoading();this._cancelIndexLoading()};b.prototype._cancelNodeLoading=function(){var a=[];this._loadingNodes.forEach(function(c){return a.push(c)});this._loadingNodes.clear();for(var c=0;c<a.length;c++)a[c].cancel();this._workQueue=[];this._idleQueue.cancelAll();this._totalWork=this._computeWork();this._updateLoading()};b.prototype._cancelIndexLoading=function(){this._indexQueue=
[];this._indexPagesLoading.forEach(function(a){return a.cancel()});this._indexPagesLoading.clear();this._totalWork=this._computeWork();this._updateLoading()};b.prototype._clearNodeState=function(){var a=this;this._renderedNodes.forEach(function(c){return a._removeFromRenderer(c)});this._cancelNodeLoading()};b.prototype._idleBegin=function(){this._idleUpdatesEnabled&&(this._updateViewNeeded=!1,this.updateViewWhenIdle())};b.prototype._idleEnd=function(){this.cancelLoading()};b.prototype._idleFrame=
function(a){if(this._idleUpdatesEnabled){this._updateViewNeeded&&!a.done()&&(this._updateViewNeeded=!1,this.updateViewWhenIdle());for(;0<this._indexQueue.length&&!a.done();)this._processIndexQueue();for(;0<this._workQueue.length&&this._canSchedule(this._workQueue[0])&&!a.done();)this._processWorkQueue();for(;0<this._idleQueue.length()&&!a.done();)this._idleQueue.process()}};b.prototype._idleFrameWhileSuspended=function(a){if(this._idleUpdatesEnabled)for(this._updateViewNeeded&&!a.done()&&(this._updateViewNeeded=
!1,this.updateViewWhenIdle());0<this._workQueue.length&&!a.done();)this._processWorkQueueRemoveOnly()};b.prototype._processIndexQueue=function(){var a=this,c=this._indexQueue.shift();this._indexPagesLoading.set(c,this._loadNodePage(c));this._indexPagesLoading.get(c).then(function(b){a._index.addPage(c,b,a._elevationOffset);a._updateViewNeeded=!0}).always(function(){a._indexPagesLoading.delete(c)})};b.prototype._canSchedule=function(a){if(8<=this._loadingNodes.size)return!1;for(var c=0;c<a.remove.length;c++)if(!this._renderedNodes.has(a.remove[c]))return!1;
return!0};b.prototype._processWorkQueue=function(){var a=this,c=this._workQueue.shift();if(0===c.load.length)for(var b=0;b<c.remove.length;b++)this._removeFromRenderer(c.remove[b]);else{if(8<c.load.length&&1===c.remove.length)for(var e=q.splitWorkEntry(c,this._index),c=e[0],b=1;b<e.length;b++)this._workQueue.push(e[b]);A(c.load.map(function(c){a._loadingNodes.has(c)||a._loadingNodes.set(c,a.loadNode(c));return a._loadingNodes.get(c)})).then(function(b){for(var f=0;f<c.load.length;f++)a._addToRenderer(c.load[f],
b[f]);for(f=0;f<c.remove.length;f++)a._removeFromRenderer(c.remove[f])}).always(function(){for(var b=0;b<c.load.length;b++)a._loadingNodes.delete(c.load[b]);a._updateLoading()});this._updateLoading()}};b.prototype._processWorkQueueRemoveOnly=function(){for(var a=this._workQueue.shift(),c=0;c<a.remove.length;c++)this._removeFromRenderer(a.remove[c]);this._updateLoading()};b.prototype._computeWork=function(){for(var a=0,c=0;c<this._workQueue.length;c++)a+=this._workQueue[c].load.length;a+=this._loadingNodes.size;
a+=(this._indexQueue.length+this._indexPagesLoading.size)*this._index.pageSize;a+=this._loadingInitNodePage?100:0;return a+=this._updateViewNeeded?100:0};Object.defineProperty(b.prototype,"updating",{get:function(){return 0<this._computeWork()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"updatingPercentageValue",{get:function(){var a=this._computeWork();return 100*Math.max(0,this._totalWork-a)/this._totalWork},enumerable:!0,configurable:!0});b.prototype._updateLoading=function(){this.notifyChange("updating");
this.notifyChange("updatingPercentageValue")};b.prototype.canResume=function(){return this.inherited(arguments)&&this._layerIsVisible};b.prototype._initNodePages=function(){var a=this;this._index=new K(this.layer.spatialReference,this.view.renderCoordsHelper.spatialReference,this.layer.store.index.nodePerIndexBlock);this._cancelIndexLoading();this._traverseVisible=this._index.createVisibilityTraverse();this._loadingInitNodePage=!0;this._updateLoading();return this._loadNodePage(0).then(function(c){a._index.addPage(0,
c,a._elevationOffset);a._loadingInitNodePage=!1;a._updateLoading()})};b.prototype._loadNodePage=function(a){return this._requestJSON(this.baseUrl+"/nodepages/"+a*this._index.pageSize).then(function(a){return a.data.nodes})};b.prototype.updateViewWhenIdle=function(){for(var a=this.inverseDensity/this._lodFactor,c=this.maximumPointCount*this._lodFactor,b=this._computeNodesForMinimumDensity(a),e=this._computePointCount(b),h=Math.sqrt(e/(.75*c));e>c;)a*=h,b=this._computeNodesForMinimumDensity(a),e=this._computePointCount(b),
h=Math.sqrt(2);this.displayNodes(b)};b.prototype._computePointCount=function(a){for(var c=0,b=0;b<a.length;b++){var e=this._index.getNode(a[b]);e&&(c+=e.pointCount)}return c};b.prototype._computeNodesForMinimumDensity=function(a){var c=this,b=this.view.state.camera,e=b.frustumPlanes,h=this._clippingBox,m=b.viewForward,d=p.vec3d.dot(m,b.eye),g=p.vec4d.set4(m[0],m[1],m[2],-d,Q),k=b.perPixelRatio,l=a*a,n=this._nodeIdArray;n.length=0;this._traverseVisible({frustumPlanes:e,clippingBox:h},{predicate:function(a,
b,f){if(!f)return!1;if(0===b.childCount)return n.push(a),!1;f=c._index.getRenderObb(a);return c._computeAveragePixelArea(f,b.effectiveArea,b.pointCount,g,k)<=l?(n.push(a),!1):!0},pageMiss:function(a,b){n.push(a);0>c._indexQueue.indexOf(b)&&c._indexQueue.push(b)}});return n};b.prototype._computeAveragePixelArea=function(a,c,b,e,h){a=Math.max(1E-7,G.minimumDistancePlane(a,e));return c/(a*a)/(4*h*h)/b};b.prototype.loadNode=function(a){var c=this,b=this._index.getNode(a),e=l.getRendererInfo(this.layer),
h=[];return this._idleQueue.push().then(function(){var f=null!=b.resourceId?b.resourceId:a,d=c.loadGeometry(f),g=c.loadAttribute(f,e.primaryAttribute),f=c.loadAttribute(f,e.modulationAttribute);h=[d,g,f];return A(h)}).then(function(a){var f=a[1],h=a[2],m=c.readGeometry(c.layer.store.defaultGeometrySchema,a[0]),d=l.evaluateRenderer(e,f,h,m,b.pointCount);return c._idleQueue.push().then(function(){return{positions:m,rgb:d}})}).then(function(b){var f=b.positions;b=b.rgb;var e=p.vec3.create(c._index.getRenderCenter(a));
c._applyElevationOffsetInPlace(f,c._elevationOffset);f=c._transformCoordinates(f,e);return{origin:f.origin,points:f.points,rgb:b}}).otherwise(function(a){if(a instanceof N)for(var c=0,b=h;c<b.length;c++)b[c].cancel();return t.reject(a)})};b.prototype.readGeometry=function(a,c){if(null==a.encoding||""===a.encoding){a=y.createGeometryDataIndex(c,a,!1);c=y.createTypedView(c,a.vertexAttributes.position);var b=a.header.fields;a=[b.offsetX,b.offsetY,b.offsetZ];for(var b=[b.scaleX,b.scaleY,b.scaleZ],e=c.length/
3,h=new Float64Array(3*e),d=0;d<e;d++)h[3*d]=c[3*d]*b[0]+a[0],h[3*d+1]=c[3*d+1]*b[1]+a[1],h[3*d+2]=c[3*d+2]*b[2]+a[2];return h}if("lepcc-xyz"===a.encoding)return L.decodeXYZ(c).result};b.prototype.loadGeometry=function(a){return this._requestBinary(this.baseUrl+"/nodes/"+a+"/geometries/0").then(function(a){return a.data})};b.prototype.loadAttribute=function(a,b){return b&&b.storageInfo?this._requestBinary(this.baseUrl+"/nodes/"+a+"/attributes/"+b.storageInfo.key).then(function(a){return a.data}):
t.resolve(null)};b.prototype._requestJSON=function(a){return w(a,{query:{f:"json"},responseType:"json"})};b.prototype._requestBinary=function(a){return w(a,{responseType:"array-buffer"})};b.prototype._removeFromRenderer=function(a){this._renderedNodes.has(a)&&(this._renderer.removeNode(""+a),this._renderedNodes.delete(a))};b.prototype._addToRenderer=function(a,b){if(!this._renderedNodes.has(a)){this._renderedNodes.add(a);var c=this._index.getNode(a),e=this._index.getRenderObb(a);this._renderer.addNode({id:""+
a,coordinates:b.points,origin:b.origin,rgb:b.rgb,splatSize:Math.sqrt(c.effectiveArea/c.pointCount),obb:e,isLeaf:0===c.childCount})}};b.prototype._transformCoordinates=function(a,b){var c=a.length/3;if(!x.bufferToBuffer(a,this.layer.spatialReference,0,a,this.view.renderCoordsHelper.spatialReference,0,c))throw Error("Can't reproject");for(var e=new Float32Array(3*c),d=0;d<c;d++)e[3*d]=a[3*d]-b[0],e[3*d+1]=a[3*d+1]-b[1],e[3*d+2]=a[3*d+2]-b[2];return{points:e,origin:b}};b.prototype._applyElevationOffsetInPlace=
function(a,b){var c=a.length/3;if(0!==b)for(var d=0;d<c;d++)a[3*d+2]+=b};b.prototype.getStats=function(){var a=this;return{"Rendered Nodes":this._renderedNodes.size,"Rendered Points":B(this._renderedNodes).reduce(function(b,d){return b+a._index.getNode(d).pointCount},0),"Loading Nodes":this._loadingNodes.size,"Index Queue":this._indexQueue.length,"Work Queue":this._workQueue.length}};k([d.property()],b.prototype,"layer",void 0);k([d.property({readOnly:!0,aliasOf:"layer.parsedUrl.path"})],b.prototype,
"baseUrl",void 0);k([d.property({readOnly:!0,dependsOn:["layer.renderer"]})],b.prototype,"pointScale",null);k([d.property({readOnly:!0,dependsOn:["layer.renderer"]})],b.prototype,"pointMinSize",null);k([d.property({readOnly:!0,dependsOn:["layer.renderer"]})],b.prototype,"useRealWorldSymbolSizes",null);k([d.property({readOnly:!0,dependsOn:["layer.renderer"]})],b.prototype,"pointSize",null);k([d.property({readOnly:!0,dependsOn:["layer.renderer"]})],b.prototype,"inverseDensity",null);k([d.property()],
b.prototype,"maximumPointCount",void 0);k([d.property({readOnly:!0,dependsOn:["view.clippingArea"]})],b.prototype,"_clippingBox",null);k([d.property({readOnly:!0,dependsOn:["layer.elevationInfo"]})],b.prototype,"_elevationOffset",null);k([d.property()],b.prototype,"updating",null);k([d.property()],b.prototype,"updatingPercentageValue",null);return b=k([d.subclass("esri.views.3d.layers.PointCloudLayerView3D")],b)}(d.declared(H,I))});