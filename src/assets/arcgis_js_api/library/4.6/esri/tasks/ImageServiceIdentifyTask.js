// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["dojo/_base/lang","../request","../geometry/support/normalizeUtils","./Task","./support/ImageServiceIdentifyResult"],function(c,e,f,g,h){return g.createSubclass({declaredClass:"esri.tasks.ImageServiceIdentifyTask",properties:{parsedUrl:{get:function(){var a=this._parseUrl(this.url);a.path+="/identify";return a}},url:{}},execute:function(a,d){return f.normalizeCentralMeridian(a.geometry?[a.geometry]:[]).then(function(b){b={query:this._encode(c.mixin({},this.parsedUrl.query,{f:"json"},a.toJSON({geometry:b&&
b[0]}))),callbackParamName:"callback"};if(this.requestOptions||d)b=c.mixin({},this.requestOptions,d,b);return e(this.parsedUrl.path,b)}.bind(this)).then(this._handleExecuteResponse)},_handleExecuteResponse:function(a){return h.fromJSON(a.data)}})});