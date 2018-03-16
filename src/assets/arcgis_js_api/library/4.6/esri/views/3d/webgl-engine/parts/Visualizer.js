// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../lib/Renderer ../lib/SSAOHelperObscurance ../lib/ShadowMap ../lib/NearFarCalc ../lib/Util ../lib/gl-matrix ../lib/RenderPass ../lib/HighlightHelper ../lib/RenderOccludedHelper ../lib/OffscreenRenderingHelper".split(" "),function(y,z,l,m,n,p,h,k,q,r,t,u){var f=k.vec3d,g=k.mat4d,v=h.assert;return function(){function b(a,e,d,c){this._drawSSAOMapDebugQuad=this._drawShadowMapDebugQuad=!1;this._needsRender=!0;this._content={};this._rctx=c;this._renderer=new l(a,e,d,this._rctx,
!1);this._programRep=a;this._nearFarCalc=new p;this._helpers={shadowMap:new n(a,this._rctx),ssao:new m(a,d,this._rctx,this.setNeedsRender.bind(this)),highlight:new r(a,d,this._rctx),renderOccluded:new t(a,d,this._rctx),offscreenRendering:new u(a,this._rctx)}}b.prototype.getCombinedStats=function(){return this._renderer.getCombinedStats()};b.prototype.dispose=function(){this._renderer.dispose();this._helpers.shadowMap.getEnableState()&&this._helpers.shadowMap.setEnableState(!1);this._helpers.shadowMap.dispose();
this._helpers.ssao.getEnableState()&&this._helpers.ssao.setEnableState(!1);this._helpers.ssao.dispose();this._helpers.highlight.getEnableState()&&this._helpers.highlight.setEnableState(!1);this._helpers.renderOccluded.getEnableState()&&this._helpers.renderOccluded.setEnableState(!1);this._helpers.offscreenRendering.getEnableState()&&this._helpers.offscreenRendering.setEnableState(!1)};b.prototype.setLighting=function(a){this._renderer.setLighting(a)};b.prototype.getViewParams=function(a){var e=a||
{};if(!a||a.pixelRatio)e.pixelRatio=this._renderer.getPixelRatio();return e};b.prototype.setViewParams=function(a){null!=a.pixelRatio&&this._renderer.setPixelRatio(a.pixelRatio)};b.prototype.setRenderParams=function(a){void 0!==a.shadowMapResolution&&!1===this._helpers.shadowMap.getEnableState()&&this._helpers.shadowMap.setTextureResolution(a.shadowMapResolution);void 0!==a.shadowMap&&a.shadowMap!==this._helpers.shadowMap.getEnableState()&&this._helpers.shadowMap.setEnableState(a.shadowMap);void 0!==
a.shadowMapMaxCascades&&this._helpers.shadowMap.setMaxNumCascades(a.shadowMapMaxCascades);!0!==this._helpers.highlight.getEnableState()&&this._helpers.highlight.setEnableState(!0);void 0!==a.ssao&&a.ssao!==this._helpers.ssao.getEnableState()&&this._helpers.ssao.setEnableState(a.ssao);void 0!==a.ssaoAttenuation&&this._helpers.ssao.setAttenuation(a.ssaoAttenuation);void 0!==a.ssaoRadius&&this._helpers.ssao.setRadius(a.ssaoRadius);void 0!==a.ssaoFilterRadius&&console.error("The property ssaoFilterRadius is no longer supported as a render parameter.");
void 0!==a.ssaoSamples&&this._helpers.ssao.setSamples(a.ssaoSamples);void 0!==a.drawShadowMapDebugQuad&&(this._drawShadowMapDebugQuad=a.drawShadowMapDebugQuad);void 0!==a.drawSSAODebugQuad&&(this._drawSSAOMapDebugQuad=a.drawSSAODebugQuad);this._helpers.ssao.getEnableState()?this._renderer.ssaoEnabled=!0:this._renderer.ssaoEnabled=!1;void 0!==a.offscreenRendering&&a.offscreenRendering!==this._helpers.offscreenRendering.getEnableState()&&this._helpers.offscreenRendering.setEnableState(a.offscreenRendering);
void 0!==a.antialiasingEnabled&&(this._renderer.renderOptions.antialiasing=a.antialiasingEnabled?"smaa":"none");void 0!==a.earlyOcclusionPixelDraw&&(this._renderer.renderOptions.earlyOcclusionPixelDraw=a.earlyOcclusionPixelDraw);void 0!==a.defaultHighlightOptions&&this._helpers.highlight.setDefaultOptions(a.defaultHighlightOptions);this._needsRender=!0};b.prototype.getRenderParams=function(){var a={};this._helpers.shadowMap.getIsSupported()&&(a.shadowMap=this._helpers.shadowMap.getEnableState(),a.shadowMapResolution=
this._helpers.shadowMap.getTextureResolution(),a.shadowMapMaxCascades=this._helpers.shadowMap.getMaxNumCascades());this._helpers.ssao.getIsSupported()&&(a.ssao=this._helpers.ssao.getEnableState(),a.ssaoAttenuation=this._helpers.ssao.getAttenuation(),a.ssaoRadius=this._helpers.ssao.getRadius(),a.ssaoFilterRadius=this._helpers.ssao.getFilterRadius(),a.ssaoSamples=this._helpers.ssao.getSamples());return a};b.prototype.modify=function(a,e,d,c){this._renderer.modify(a,e,d,c);for(c=0;c<e.length;++c)delete this._content[e[c].uniqueName];
for(c=0;c<a.length;++c)this._content[a[c].uniqueName]=a[c];for(c=0;c<d.length;++c)v(this._content[d[c].renderGeometry.uniqueName]===d[c].renderGeometry)};b.prototype.getContent=function(){return this._content};b.prototype.getPickRay=function(a,e,d,c,b,x){f.unproject(f.createFrom(a[0],a[1],0),c,d.projectionMatrix,d.fullViewport,b);f.unproject(f.createFrom(a[0],a[1],1),c,d.projectionMatrix,d.fullViewport,x)};b.prototype.getProjectionMatrix=function(a,b,d,c,w){b=h.fovx2fovy(b,a[2],a[3]);g.perspective(180*
b/Math.PI,a[2]/a[3],d,c,w)};b.prototype.addExternalRenderer=function(a,b){return this._renderer.addExternalRenderer(a,b)};b.prototype.removeExternalRenderer=function(a){return this._renderer.removeExternalRenderer(a)};b.prototype.getExternalRenderers=function(){return this._renderer.getExternalRenderers()};b.prototype.resetNeedsRender=function(){this._needsRender=!1;this._renderer.resetNeedsRender()};b.prototype.needsRender=function(){return this._needsRender||this._renderer.needsRender()};b.prototype.setNeedsRender=
function(){this._needsRender=!0};b.prototype.render=function(a,b,d){var c=a.viewport,e;if(this._helpers.shadowMap.getEnableState()){e=this._nearFarCalc.calculateSceneNearFar(a,this._content);this._helpers.shadowMap.prepare(a,b,this._content,e);b=this._helpers.shadowMap.getCascades();for(e=0;e<b.length;++e){var f=b[e];f.camera.setGLViewport(this._rctx);this._renderer.renderGeometryPass(q.MATERIAL_DEPTH_SHADOWMAP,f.camera)}this._helpers.shadowMap.finish(d);a.setGLViewport(this._rctx)}this._helpers.shadowMap.bindAll(this._programRep);
this._renderer.renderAuxiliaryBuffers(a,d,this._helpers);this._renderer.render(a,d,this._helpers);this._drawShadowMapDebugQuad&&this._helpers.shadowMap.getEnableState()&&(a=g.ortho(c[0],c[2],c[1],c[3],-1,1),this._helpers.shadowMap.drawDebugQuad(a));this._drawSSAOMapDebugQuad&&this._helpers.ssao.getEnableState()&&(a=g.ortho(c[0],c[2],c[1],c[3],-1,1),this._helpers.ssao.drawQuad(a))};return b}()});