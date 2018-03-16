// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/views/3d/webgl-engine/materials/WaterMaterial.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\r\n\r\n\x3csnippets\x3e\r\n\r\n\x3csnippet name\x3d"vertexShaderWater"\x3e\x3c![CDATA[\r\n  $vsprecisionf\r\n\r\n\tuniform mat4 proj;\r\n\tuniform mat4 view;\r\n\tuniform mat4 model;\r\n\tattribute vec3 $position;\r\n\tvarying vec3 vpos;\r\n\tvarying float linearDepth;\r\n\r\n\tvoid main(void) {\r\n\t\tvpos \x3d (model * vec4($position, 1.0)).xyz;\r\n\t\tgl_Position \x3d proj * view * vec4(vpos, 1.0);\r\n\t\tlinearDepth \x3d gl_Position.w;\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fragmentShaderWater"\x3e\x3c![CDATA[\r\n\t$fsprecisionf\r\n\r\n\tuniform vec3 color;\r\n\tuniform float scale;\r\n\tuniform float speed;\r\n\r\n\tuniform vec4 lightAmbient;\r\n\tuniform vec4 lightDiffuse;\r\n\tuniform vec4 lightSpecular;\r\n\tuniform vec3 lightDirection;\r\n\r\n\tuniform vec3 camPos;\r\n\r\n\tuniform sampler2D noiseTex;\r\n\tuniform sampler2D reflTex;\r\n\r\n\tuniform sampler2D depthTex;\r\n\tuniform int shadowMapNum;\r\n\tuniform vec4 shadowMapDistance;\r\n\tuniform mat4 shadowMapMatrix[4];\r\n\tuniform float depthHalfPixelSz;\r\n\r\n\tvarying vec3 vpos;\r\n\tvarying float linearDepth;\r\n\r\n\t$evalShadow\r\n\r\n\t$normal2envTC\r\n\r\n\tvec2 rotate(vec2 pos, float angle) {\r\n\t\tfloat c \x3d cos(angle);\r\n\t\tfloat s \x3d sin(angle);\r\n\t\treturn vec2(c * pos.x - s * pos.y, s * pos.x + c * pos.y);\r\n\t}\r\n\r\n\tfloat compDelta(vec2 pos) {\r\n\t\tconst float PI_THIRD \x3d 1.04719755;\r\n\r\n\t\tfloat result \x3d .0;\r\n\t\tfloat s \x3d 1.0;\r\n\t\tfor (int i \x3d 0; i \x3c 6; ++i) {\r\n\t\t\tvec2 tc \x3d pos / (20.0 * s);\r\n\t\t\ttc +\x3d rotate(vec2(1.0 + speed, .0), PI_THIRD * float(i));\r\n\t\t\tresult +\x3d s * texture2D(noiseTex, tc).r;\r\n\t\t\ts *\x3d 1.5;\r\n\t\t}\r\n\t\treturn result * scale * .2;\r\n\t}\r\n\r\n\tvoid main() {\r\n\t\tvec3 viewVec \x3d normalize(camPos - vpos);\r\n\r\n\t\tfloat d0 \x3d compDelta(vpos.xz);\r\n\t\tfloat dx \x3d compDelta(vpos.xz + vec2(.05, .0));\r\n\t\tfloat dz \x3d compDelta(vpos.xz + vec2(.0, .05));\r\n\r\n\t\tvec3 normal \x3d normalize(vec3(d0 - dx, .05, d0 - dz));\r\n\r\n\t\tfloat fresnel \x3d clamp(1.0 - 1.25 * dot(viewVec, normal), .0, 1.0);\r\n\r\n\t\tfloat shadow \x3d 0.0;\r\n\t\tif (halfPxSz \x3e\x3d .0) {\r\n\t\t\tshadow \x3d evalShadow(vpos, linearDepth, depthTex, shadowMapNum, shadowMapDistance, shadowMapMatrix, depthHalfPixelSz);\r\n\t\t}\r\n\r\n\t\tvec3 reflDir \x3d reflect(-viewVec, normal);\r\n\t\tif (reflDir.y \x3c .02) reflDir.y \x3d 0.04 - reflDir.y;\r\n\r\n\t\tvec3 reflCol \x3d texture2D(reflTex, normal2envTC(reflDir)).rgb * lightAmbient.rgb*lightSpecular.w;\r\n\t\treflCol *\x3d .5 + max(lightDirection.y, .0) * .5; // ?\t+\r\n\t\tvec3 waterColor \x3d color * (lightAmbient.rgb * lightAmbient.w + (1.0 - shadow) * max(lightDirection.y, .0) * lightDiffuse.rgb * lightDiffuse.w);\r\n\t\tvec3 finalColor \x3d mix(waterColor, reflCol, .15 + .6 * fresnel);\r\n\r\n\t\tvec3 spec \x3d pow(max(dot(reflDir, lightDirection), .001), 80.0) * lightSpecular.rgb * lightSpecular.w * 2.0;\r\n\t\tfinalColor +\x3d (1.0 - shadow) * lightDiffuse.w * spec;\r\n\r\n\t\tgl_FragColor \x3d vec4(finalColor, 1.0);\r\n\t}\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3c/snippets\x3e\r\n'}});
define("dojo/text!./WaterMaterial.xml ./internal/MaterialUtil ../lib/RenderSlot ../../../webgl/Program ../lib/DefaultVertexAttributeLocations ../lib/DefaultVertexBufferLayouts ../../../webgl/Util".split(" "),function(l,d,n,p,q,r,t){var k=function(a,e,g,f,b,m){d.basicMaterialConstructor(this,m);var h=r.Pos3;this.dispose=function(){};this.getNoiseTextureId=function(){return a};this.getReflTextureId=function(){return e};this.getColor=function(){return g};this.getScale=function(){return f};this.getSpeed=
function(){return b};this.getOutputAmount=function(a){return a*t.getStride(h)/4};this.getVertexBufferLayout=function(){return h};this.fillInterleaved=function(a,b,u,c,e,g,f){d.fillInterleaved(a,b,u,c,h,e,g,f)};this.intersect=d.intersectTriangleGeometry;this.getGLMaterials=function(){return{color:v,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}};this.getAllTextureIds=function(){return[a,e]}},v=function(a,e,g){d.basicGLMaterialConstructor(this,a);var f=n.TRANSPARENT_MATERIAL,b=e.get("water");
e={noiseTextureId:a.getNoiseTextureId(),reflTextureId:a.getReflTextureId()};d.multiTextureGLMaterialConstructor(this,g,e,[["noiseTextureId",void 0,"noiseTex"],["reflTextureId",void 0,"reflTex"]]);var m=a.getColor(),h=a.getScale(),k=a.getSpeed(),l=Date.now();this.beginSlot=function(a){return f===a};this.getProgram=function(){return b};this.bind=function(a,c){a.bindProgram(b);this.bindTextures(a,b);b.setUniform3fv("color",m);b.setUniform1f("scale",h);a=(Date.now()-l)/1E5*k;a-=Math.floor(a);b.setUniform1f("speed",
a);c.shadowMappingEnabled||b.setUniform1f("depthHalfPixelSz",-1)};this.release=function(a){};this.bindView=function(a,c){a=c.origin;d.bindView(a,c.view,b);d.bindCamPos(a,c.viewInvTransp,b);c.shadowMappingEnabled&&c.shadowMap.bindView(b,a)};this.bindInstance=function(a,c){b.setUniformMatrix4fv("model",c.transformation)};this.getDrawMode=function(a){return a.gl.TRIANGLES}};k.loadShaders=function(a,e,d,f){a._parse(l);a=new p(f,a.vertexShaderWater,a.fragmentShaderWater,q.Default3D);d.add("water",a)};
return k});