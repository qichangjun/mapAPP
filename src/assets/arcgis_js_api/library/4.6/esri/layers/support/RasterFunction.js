// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["../../core/kebabDictionary","../../core/JSONSupport","../../core/lang"],function(g,h,d){var k=g({C128:"c128",C64:"c64",F32:"f32",F64:"f64",S16:"s16",S32:"s32",S8:"s8",U1:"u1",U16:"u16",U2:"u2",U32:"u32",U4:"u4",U8:"u8",UNKNOWN:"unknown"}),e=h.createSubclass({declaredClass:"esri.layers.support.RasterFunction",properties:{functionArguments:{value:null,json:{read:{source:["rasterFunctionArguments"],reader:function(a,b){return this._resolveFunctionArguments(d.clone(b.rasterFunctionArguments))}}}},
functionName:{value:null,json:{read:{source:["rasterFunction","rasterFunctionInfos"],reader:function(a,b){a=b.rasterFunction;(b=b.rasterFunctionInfos)&&b.length&&"None"!==b[0].name&&(a=b[0].name);return a}}}},outputPixelType:{value:"unknown"},variableName:{value:null}},clone:function(){return e.fromJSON(this.toJSON())},toJSON:function(){var a=d.clone(this.functionArguments),b=function(a){return a&&"esri.layers.support.RasterFunction"===a.declaredClass?a.toJSON():a};if(a&&(a.Raster=b(a.Raster),a.Raster2=
b(a.Raster2),a.DEM=b(a.DEM),a.FillRaster=b(a.FillRaster),a.Rasters&&a.Rasters.length)){var c,f=[];for(c=0;c<a.Rasters.length;c++)f.push(b(a.Rasters[c]));a.Rasters=f}b=k.toJSON(this.outputPixelType);return d.filter({rasterFunction:this.functionName,rasterFunctionArguments:a,variableName:this.variableName,outputPixelType:"UNKNOWN"!==b?b:null},function(a){return null!=a})},_resolveFunctionArguments:function(a){var b=function(a){return a&&a.rasterFunction?e.fromJSON(a):a};if(a&&(a.Raster=b(a.Raster),
a.Raster2=b(a.Raster2),a.DEM=b(a.DEM),a.FillRaster=b(a.FillRaster),a.Rasters&&a.Rasters.length))for(var c=0;c<a.Rasters.length;c++)a.Rasters[c]=b(a.Rasters[c]);return a}});return e});