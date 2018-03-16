// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ./Renderer ./Camera ./Util ./gl-matrix ../materials/internal/TexOnlyGLMaterial ./ModelDirtyTypesTs ./RenderPass ./HighlightUtils ./ComponentUtils ../../../webgl/FramebufferObject ../../../webgl/VertexArrayObject ../../../webgl/BufferObject ../../../webgl/Util ../../../webgl/Texture ../../support/debugFlags ../lighting/Lightsources ../../../webgl/enums ./DefaultVertexBufferLayouts ./DefaultVertexAttributeLocations".split(" "),function(t,M,y,z,A,q,B,N,r,C,u,D,E,F,G,H,v,I,O,J,
K){var w=q.vec3d,L=q.vec4d,l=q.mat4d;t=function(){function b(a,c,f,k,e,d){var g=this;this._acquiredTextures={};this._clearColor=L.createFrom(0,0,0,0);this._id2origin={};this._uniqueIdx=0;this._rctx=a;this._canvas=c;this._programRep=f;this._textureRep=e;this._modelDirtySet=d;this._renderer=new y(f,k,e,this._rctx,!0);this._renderer.onHasHighlightsChanged=function(a){if(g.onHasHighlightsChanged)g.onHasHighlightsChanged(a)};this._renderer.setLighting({lights:[new I.AmbientLight(w.createFrom(1,1,1))],
groundLightingFactor:1,globalFactor:0})}b.prototype.dispose=function(){for(var a in this._acquiredTextures)this._acquiredTextures[a].fbo.dispose(),this._textureRep.release(a);this._acquiredTextures=null;this._renderer.dispose();this._renderer=null};b.prototype.addRenderGeometries=function(a){var c=this;a.forEach(function(a){null==a.origin&&(a.origin=c.getOrigin(a.center,a.bsRadius));a.idx=c._uniqueIdx++});this._renderer.modify(a,[])};b.prototype.removeRenderGeometries=function(a){this._renderer.modify([],
a)};b.prototype.updateRenderGeometries=function(a,c){a=a.map(function(a){return{renderGeometry:a,updateType:c}});this._renderer.modify([],[],a,{})};b.prototype.updateRenderOrder=function(a){0<Object.keys(a).length&&this._renderer.modifyRenderOrder(a)};b.prototype.setBackgroundColor=function(a){this._clearColor=a};b.prototype.addRenderGeometryHighlight=function(a,c){var f=a.instanceParameters,k=C.generateHighlightId();f.componentHighlights=u.addHighlight(f.componentHighlights,null,c,k);this.updateRenderGeometries([a],
32);return k};b.prototype.removeRenderGeometryHighlight=function(a,c){var f=a.instanceParameters;f.componentHighlights=u.removeHighlight(f.componentHighlights,c);this.updateRenderGeometries([a],32)};b.prototype.isEmpty=function(){return this._renderer.isEmpty()};b.prototype.processDirtyMaterials=function(){var a=this._modelDirtySet.getDirtyMaterials();a&&this._renderer.modify([],[],[],a);this._modelDirtySet.clearDirtyMaterials()};Object.defineProperty(b.prototype,"hasHighlights",{get:function(){return this._renderer.hasHighlights},
enumerable:!0,configurable:!0});b.prototype.draw=function(a,c){return this.drawPass(r.MATERIAL,a,c)};b.prototype.drawHighlights=function(a,c){return this.drawPass(r.MATERIAL_HIGHLIGHT,a,c)};b.prototype.drawPass=function(a,c,f){if(this.isEmpty()&&!v.OVERLAY_DRAW_TEST_TEXTURE)return!1;this.processDirtyMaterials();if(a===r.MATERIAL_HIGHLIGHT&&!this.hasHighlights||!f.views.some(function(a){return a.extent[0]!==a.extent[2]&&a.extent[1]!==a.extent[3]}))return!1;var k=c.getId(),e,d=this._rctx,g=d.gl;if(this._acquiredTextures[k])e=
this._acquiredTextures[k].fbo;else{e=this._textureRep.aquire(k).getGLTexture();e=D.createWithAttachments(this._rctx,e,{colorTarget:0,depthStencilTarget:0});var b=Object.keys(this._acquiredTextures).length;this._acquiredTextures[k]={texture:c,fbo:e,idx:b}}c=f.width;b=f.height;if(e.width!==c||e.height!==b)e.resize(c,b),e.colorTexture.setSamplingMode(9729);h.near=1;h.far=1E4;d.bindFramebuffer(e);d.setDepthTestEnabled(!1);d.setBlendFunctionSeparate(770,771,1,771);d.setClearColor.apply(d,this._clearColor);
d.clear(g.COLOR_BUFFER_BIT);this._renderer.setPixelRatio(f.pixelRatio||1);for(g=0;g<f.views.length;g++)e=f.views[g],h.viewport=e.viewport,l.ortho(0,e.extent[2]-e.extent[0],0,e.extent[3]-e.extent[1],h.near,h.far,h.projectionMatrix),l.identity(h.viewMatrix),l.translate(h.viewMatrix,[-e.extent[0],-e.extent[1],0]),h.setGLViewport(this._rctx),v.OVERLAY_DRAW_TEST_TEXTURE&&this._drawTestTexture(c,b,x[this._acquiredTextures[k].idx%x.length]),this._renderer.renderGeometryPass(a,h);d.setDepthTestEnabled(!0);
d.setBlendFunctionSeparate(770,771,1,771);d.bindFramebuffer(null);d.setViewport(0,0,this._canvas.width,this._canvas.height);return!0};b.prototype._drawTestTexture=function(a,c,f){var b=this._rctx,e=b.gl;if(!this._testPatternMat){for(var d=new Uint8Array(a*c*4),g=0,h=0;h<c;h++)for(var m=0;m<a;m++){var n=Math.floor(m/10),p=Math.floor(h/10);2>n||2>p||10*n>a-20||10*p>c-20?(d[g++]=255,d[g++]=255,d[g++]=255,d[g++]=255):(d[g++]=255,d[g++]=255,d[g++]=255,n&1&&p&1?d[g++]=m&1^h&1?0:255:d[g++]=n&1^p&1?0:128)}a=
new H(b,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:a,height:c},d);this._testPatternMat=new B(this._programRep,a,[1,1,1,1],!0,e.ALWAYS);this._testPatternBindParams={proj:l.identity(),view:l.identity(),nearFar:[-1,1],origin:[0,0,0]};e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,-1,1,0,0,1,1,1,0,1,1]);this._quadVAO=new E(b,K.Default3D,{geometry:J.Pos3Tex},{geometry:F.createVertex(b,35044,e)})}this._testPatternMat.setColor([f[0],f[1],f[2],1]);this._testPatternMat.bind(b,this._testPatternBindParams);
this._testPatternMat.bindView(b,this._testPatternBindParams);b.bindVAO(this._quadVAO);b.drawArrays(5,0,G.vertexCount(this._quadVAO,"geometry"));this._testPatternMat.release(b)};b.prototype.getOrigin=function(a,c){var b=0;c=10*c/1E4;1<c&&(b=Math.ceil(A.logWithBase(c,2)));c=1E4*Math.pow(2,b);var h=Math.round(a[0]/c),e=Math.round(a[1]/c);a=Math.round(a[2]/c);var b=b+"_"+h+"_"+e+"_"+a,d=this._id2origin[b];null==d&&(d={vec3:w.createFrom(h*c,e*c,a*c),id:b},this._id2origin[b]=d);return d};return b}();var x=
[[1,.5,.5],[.5,.5,1],[.5,1,.5]],h=new z;return t});