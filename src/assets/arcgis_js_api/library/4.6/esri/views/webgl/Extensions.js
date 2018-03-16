// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,d){return function(){function a(b,a){this._colorBufferFloatInit=this._textureFloatLinearInit=this._textureFloatInit=this._disjointTimerQueryInit=this._compressedTextureS3TCInit=this._shaderTextureLODInit=this._textureFilterAnisotropicInit=this._depthTextureInit=this._elementIndexUintInit=this._standardDerivativesInit=this._angleInstancedArraysInit=this._vaoInit=!1;this._gl=b;a&&a.disabledExtensions&&(b=a.disabledExtensions,b.vao&&(this._vao=null,this._vaoInit=
!0),b.angleInstancedArrays&&(this._angleInstancedArrays=null,this._angleInstancedArraysInit=!0),b.standardDerivatives&&(this._standardDerivatives=null,this._standardDerivativesInit=!0),b.elementIndexUint&&(this._elementIndexUint=null,this._elementIndexUintInit=!0),b.depthTexture&&(this._depthTexture=null,this._depthTextureInit=!0),b.textureFilterAnisotropic&&(this._textureFilterAnisotropic=null,this._textureFilterAnisotropicInit=!0),b.compressedTextureS3TC&&(this._compressedTextureS3TC=null,this._compressedTextureS3TCInit=
!0),b.shaderTextureLOD&&(this._shaderTextureLOD=null,this._shaderTextureLODInit=!0),b.disjointTimerQuery&&(this._disjointTimerQuery=null,this._disjointTimerQueryInit=!0),b.textureFloat&&(this._textureFloat=null,this._textureFloatInit=!0),b.textureFloatLinear&&(this._textureFloatLinear=null,this._textureFloatLinearInit=!0),b.colorBufferFloat&&(this._colorBufferFloat=null,this._colorBufferFloatInit=!0))}Object.defineProperty(a.prototype,"vao",{get:function(){this._vaoInit||(this._vao=this._gl.getExtension("OES_vertex_array_object")||
this._gl.getExtension("MOZ_OES_vertex_array_object")||this._gl.getExtension("WEBKIT_OES_vertex_array_object"),this._vaoInit=!0);return this._vao},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"angleInstancedArrays",{get:function(){this._angleInstancedArraysInit||(this._angleInstancedArrays=this._gl.getExtension("ANGLE_instanced_arrays"),this._angleInstancedArraysInit=!0);return this._angleInstancedArrays},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"standardDerivatives",
{get:function(){this._standardDerivativesInit||(this._standardDerivatives=this._gl.getExtension("OES_standard_derivatives"),this._standardDerivativesInit=!0);return this._standardDerivatives},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"elementIndexUint",{get:function(){this._elementIndexUintInit||(this._elementIndexUint=this._gl.getExtension("OES_element_index_uint"),this._elementIndexUintInit=!0);return this._elementIndexUint},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"depthTexture",{get:function(){this._depthTextureInit||(this._depthTexture=this._gl.getExtension("WEBGL_depth_texture")||this._gl.getExtension("MOZ_WEBGL_depth_texture")||this._gl.getExtension("WEBKIT_WEBGL_depth_texture"),this._depthTextureInit=!0);return this._depthTexture},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"textureFilterAnisotropic",{get:function(){this._textureFilterAnisotropicInit||(this._textureFilterAnisotropic=this._gl.getExtension("EXT_texture_filter_anisotropic")||
this._gl.getExtension("MOZ_EXT_texture_filter_anisotropic")||this._gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),this._textureFilterAnisotropicInit=!0);return this._textureFilterAnisotropic},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"shaderTextureLOD",{get:function(){this._shaderTextureLODInit||(this._shaderTextureLOD=this._gl.getExtension("EXT_shader_texture_lod"),this._shaderTextureLODInit=!0);return this._shaderTextureLOD},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"compressedTextureS3TC",{get:function(){this._compressedTextureS3TCInit||(this._compressedTextureS3TC=this._gl.getExtension("WEBGL_compressed_texture_s3tc"),this._compressedTextureS3TCInit=!0);return this._compressedTextureS3TC},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"disjointTimerQuery",{get:function(){this._disjointTimerQueryInit||(this._disjointTimerQuery=this._gl.getExtension("EXT_disjoint_timer_query"),this._disjointTimerQueryInit=!0);return this._disjointTimerQuery},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"textureFloat",{get:function(){this._textureFloatInit||(this._textureFloat=this._gl.getExtension("OES_texture_float"),this._textureFloatInit=!0);return this._textureFloat},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"textureFloatLinear",{get:function(){this._textureFloatLinearInit||(this._textureFloatLinear=this._gl.getExtension("OES_texture_float_linear"),this._textureFloatLinearInit=!0);return this._textureFloatLinear},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"colorBufferFloat",{get:function(){this._colorBufferFloatInit||(this._colorBufferFloat=this._gl.getExtension("EXT_color_buffer_float"),this._colorBufferFloatInit=!0);return this._colorBufferFloat},enumerable:!0,configurable:!0});return a}()});