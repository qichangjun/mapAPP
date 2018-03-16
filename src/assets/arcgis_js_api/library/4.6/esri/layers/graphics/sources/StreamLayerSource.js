// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("../../../core/declare dojo/_base/lang dojo/Deferred ../../../core/Accessor ../../../core/Promise ../../../core/urlUtils ../../../core/promiseUtils ../../../geometry/Extent ../../support/WebSocketConnector ../../../tasks/QueryTask ../../../request".split(" "),function(p,g,q,r,t,m,l,u,v,n,w){return p([r,t],{getDefaults:function(a){var b=this.inherited(arguments),d=a.layer;d&&(b=g.mixin(b,{url:d.url}));return b},initialize:function(){this.addResolvingPromise(this._fetchLayers())},properties:{connectionInfo:{get:function(){if(this.layer.hasMemorySource||
this.layer.socketUrl)return{serviceSocketUrls:[this.layer.socketUrl]};if(this.layerDefinition){var a={},b=this.layerDefinition,d=[],c=[],h=[],e,f,g;b.streamUrls&&b.streamUrls.forEach(function(b){"ws"===b.transport&&(d=b.urls,a.token=b.token)},this);d.forEach(function(a){0===a.lastIndexOf("wss",0)?h.push(a):c.push(a)});if((b="https"===m.appUrl.scheme||0===this.url.lastIndexOf("https:",0)?h:0===c.length?h:c)&&1<b.length)for(e=0;e<b.length-1;e++)f=e+Math.floor(Math.random()*(b.length-e)),g=b[f],b[f]=
b[e],b[e]=g;a.serviceSocketUrls=b;return a}}},latestUrl:{get:function(){var a=this.layerDefinition;return(a=a.keepLatestArchive&&a.keepLatestArchive.featuresUrl)?a:null}},latestQueryTask:{get:function(){var a=this.latestUrl;return a?new n(a):null}},relatedFeaturesInfo:{get:function(){var a=(this.layerDefinition||{}).relatedFeatures;return a=a&&a.featuresUrl?a:null}},relatedFeaturesQueryTask:{get:function(){var a=this.relatedFeaturesInfo;return(a=a?a.featuresUrl:null)?new n(a):null}},parsedUrl:{get:function(){return this.url?
m.urlToObject(this.url):null}},url:null},createWebSocketConnector:function(a){var b=new q;this.when(function(){var d=this.connectionInfo,c,h=this.layer.spatialReference,e,f,k={};try{c=this.makeFilter()}catch(x){b.reject(x);return}d?(d.socketUrl?f=[d.socketUrl]:d.serviceSocketUrls&&(f=d.serviceSocketUrls.map(function(a){return a+"/"+this.layer.socketDirection}.bind(this))),k.socketUrls=f,c&&(c.where||c.geometry||c.outFields)&&((f=c.geometry)&&"string"!==typeof f&&(f=f.toJSON?JSON.stringify(f.toJSON()):
JSON.stringify(f)),e=g.mixin(e||{},{where:c.where,geometry:f,outFields:c.outFields})),d.token&&(e=g.mixin(e||{},{token:d.token})),a&&h&&a.wkid!==h.wkid&&(e=g.mixin(e||{},{outSR:a.wkid})),k.queryParams=e,k.layerSource=this,d=new v(k),b.resolve(d)):b.reject(Error("No web socket urls found"))}.bind(this));return b.promise},getWebSocketToken:function(){return this._fetchStreamLayer().then(function(a){a=a.data;var b=null;a.streamUrls&&a.streamUrls.some(function(a){if("ws"===a.transport)return b=a.token,
!0},this);return b}.bind(this))},makeFilter:function(a){var b=this.layer,d=null,c;if(a){if(c={},a.hasOwnProperty("where")&&(c.where=a.where),a.hasOwnProperty("geometry")){if((b=a.geometry)&&!b.hasOwnProperty("xmin"))throw Error("Cannot make filter. Only Extent is supported for the geometry filter");b&&!b.declaredClass&&(b=new u(b));c.geometry=b}}else if(c=b.filter||{},c={where:c.where,geometry:c.geometry},(a=this.relatedFeaturesInfo&&this.relatedFeaturesInfo.outFields||b.outFields)&&-1===a.indexOf("*")){var h=
b.fields.map(function(a){return a.name}),d=a.filter(function(a){return-1!==h.indexOf(a)}).join(",");c=g.mixin(c||{},{outFields:d})}return c},_fetchLayers:function(){return this._fetchStreamLayer().then(function(a){a.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));this.layerDefinition=a.data;return this._fetchArchiveLayer()}.bind(this)).then(function(a){this.archivedLayerDefinition=a&&a.data;return this._fetchRelatedLayer()}.bind(this)).then(function(a){this.relatedLayerDefinition=a&&a.data}.bind(this))},
_fetchStreamLayer:function(){return this._requestServiceDefinition({url:this.layer.parsedUrl.path,content:g.mixin({f:"json"},this.layer.parsedUrl.query)})},_fetchArchiveLayer:function(){var a=this.latestUrl;return a?this._requestServiceDefinition({url:a}):l.resolve()},_fetchRelatedLayer:function(){var a=this.relatedFeaturesInfo;return a?this._requestServiceDefinition({url:a.featuresUrl}):l.resolve()},_requestServiceDefinition:function(a){return a&&a.url?w(a.url,{query:g.mixin(a.content||{},{f:"json"}),
responseType:"json",callbackParamName:"callback"}):l.reject(Error("url is a required options property"))}})});