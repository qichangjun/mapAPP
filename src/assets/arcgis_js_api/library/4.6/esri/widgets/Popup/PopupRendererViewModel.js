// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("../Widget ../../core/Accessor ../../core/date ../../core/Error ../../core/HandleRegistry ../../core/lang ../../core/Logger ../../core/urlUtils ../../core/promiseUtils ../../core/watchUtils ../../request ../../support/arcadeUtils ../../tasks/support/StatisticDefinition ../../tasks/support/Query ../../tasks/QueryTask dojo/promise/all dojo/i18n!dojo/cldr/nls/number dojox/html/entities".split(" "),function(F,G,x,z,H,g,I,J,r,K,A,u,L,B,M,y,C,N){var O=/\'/g,P=/href\s*=\s*(?:\"([^\"]+)\"|\'([^\']+)\')/ig,
D=/^\s*expression\//i,Q=/(\{([^\{\r\n]+)\})/g,q={attachments:"attachments",fields:"fields",media:"media",text:"text"},E=I.getLogger("esri.widgets.Popup.PopupRendererViewModel");return G.createSubclass({declaredClass:"esri.widgets.Popup.PopupRendererViewModel",properties:{content:{readOnly:!0},contentEnabled:!0,contentTypes:{readOnly:!0},formattedAttributes:{readOnly:!0},graphic:{},title:{readOnly:!0},view:{},waitingForContent:{readOnly:!0}},constructor:function(){this._handles=new H},initialize:function(){this._handles.add([K.watch(this,
["graphic","graphic.popupTemplate.title","graphic.popupTemplate.content","graphic.popupTemplate.fieldInfos","contentEnabled"],function(){this._updateGraphic(this.graphic,this.contentEnabled)}.bind(this))]);this._updateGraphic(this.graphic,this.contentEnabled)},destroy:function(){this._handles.destroy();this._handles=null;this._clearRelatedInfo();this._cancelPromises();this.graphic=null;this._set("title",null);this._set("content",null);this._set("waitingForContent",null)},content:null,contentEnabled:!0,
contentTypes:q,formattedAttributes:null,graphic:null,title:"",view:null,waitingForContent:!1,_handles:null,_contentPromise:null,_contentElementPromises:null,_relatedRecordsPromise:null,_relatedRecordsQueryPromises:[],_relatedLayersInfo:null,_relatedInfo:null,_addValuesToHref:function(a,b,c,d){b=this._trimString(b);return g.substitute(b&&"{"===b[0]?c:d,a)},_cancelPromises:function(){this._contentElementPromises&&(this._contentElementPromises.forEach(function(a){a.cancel()},this),this._contentElementPromises=
null);this._contentPromise&&(this._contentPromise.cancel(),this._contentPromise=null);this._relatedRecordsQueryPromises.forEach(function(a){a.cancel()});this._relatedRecordsQueryPromises.length=0;this._relatedRecordsPromise&&(this._relatedRecordsPromise.cancel(),this._relatedRecordsPromise=null)},_clearRelatedInfo:function(){this._relatedInfo=this._relatedLayersInfo=null},_compileContent:function(a,b){var c=a.content;if(c&&(c.nodeName||c&&c&&"function"===typeof c.postMixInProperties&&"function"===
typeof c.buildRendering&&"function"===typeof c.postCreate&&"function"===typeof c.startup||c&&c.isInstanceOf&&c.isInstanceOf(F)))return c;if("string"===typeof c)return this._compileText(a,{type:q.text,text:c}).text;if(Array.isArray(c))return c.map(function(c,f){f=(f=b&&b[f])&&f.value;switch(c.type){case q.attachments:return this._proxyAttachments(c,f);case q.fields:return this._compileFields(a,c);case q.media:return this._compileMedia(a,c);case q.text:return this._compileText(a,c)}},this);if(c)try{throw new z(this.declaredClass+
"::invalid content type.");}catch(d){E.warn(d.stack)}},_compileFields:function(a,b){b=g.clone(b);var c=(a=a.template)&&a.expressionInfos;a=a&&g.clone(a.fieldInfos);a=b.fieldInfos||a;var d=[];a&&a.forEach(function(a){var b=a.fieldName.toLowerCase();if(!a.hasOwnProperty("visible")||a.visible)b=this._isExpressionField(b)?this._getExpressionInfo(c,b):null,a.label=b?b.title:a.label,d.push(a)},this);b.fieldInfos=d;return b},_compileMedia:function(a,b){b=g.clone(b);var c=b.mediaInfos,d=a.attributes,f=a.layer,
e=this.formattedAttributes.global,k=a.substOptions,h,l;c&&(h=[],c.forEach(function(b){l=0;var c=b.value;switch(b.type){case "image":var n=c.sourceURL,n=n&&this._trimString(g.substitute(d,this._fixTokens(n,f)));l=!!n;break;case "pie-chart":case "line-chart":case "column-chart":case "bar-chart":var t,n=c.normalizeField;c.fields=c.fields.map(function(a){return(t=this._getLayerFieldInfo(f,a))?t.name:a},this);n&&(t=this._getLayerFieldInfo(f,n),c.normalizeField=t?t.name:n);l=c.fields.some(function(a){return g.isDefined(d[a])||
-1!==a.indexOf("relationships/")&&this._relatedInfo},this);break;default:return}if(l){b=g.clone(b);var c=b.value,n=b.title?this._processFieldsInLinks(this._fixTokens(b.title,f),d):"",p=b.caption?this._processFieldsInLinks(this._fixTokens(b.caption,f),d):"";b.title=n?this._trimString(g.substitute(e,n,k)):"";b.caption=p?this._trimString(g.substitute(e,p,k)):"";if("image"===b.type)c.sourceURL=g.substitute(d,this._fixTokens(c.sourceURL,f)),c.linkURL&&(c.linkURL=this._trimString(g.substitute(d,this._fixTokens(c.linkURL,
f))));else{var v,w=(n=a.template)&&n.fieldInfos;c.fields.forEach(function(a,b){if(-1!==a.indexOf("relationships/"))a=this._getRelatedChartInfos(f,w,a,c,d,k),Array.isArray(a)?c.fields=a:c.fields[b]=a;else{var e=d[a],e=void 0===e?null:e;v=d[c.normalizeField]||0;e&&v&&(e/=v);var m=w&&this._getFieldInfo(w,a);c.fields[b]={y:e,tooltip:(m&&m.label||a)+":"+this._formatValue(e,{fieldInfos:w,fieldName:a,layer:f,substOptions:k,preventPlacesFormatting:!!v})}}},this)}h.push(b)}},this));b.mediaInfos=h;return b},
_compileText:function(a,b){if((b=g.clone(b))&&b.text){var c=a.attributes,d=this.formattedAttributes.global,f=a.substOptions;a=this._processFieldsInLinks(this._fixTokens(b.text,a.layer),c);b.text=this._trimString(g.substitute(d,a,f))}return b},_compileTitle:function(a){var b="",c=a.title,d=a.layer,f=a.attributes,e=a.substOptions,k=this.formattedAttributes.global;c&&("function"===typeof c&&(c=c.call(null,{graphic:a.graphic})),"string"===typeof c&&(a=this._processFieldsInLinks(this._fixTokens(c,d),f),
b=this._trimString(g.substitute(k,a,e))));return b},_getExpressionInfo:function(a,b){if(this._isExpressionField(b)){b=b.replace(D,"");b=b.toLowerCase();var c;a.some(function(a){a.name.toLowerCase()===b&&(c=a);return!!c});return c}},_createGraphicInfo:function(a,b){var c=a.popupTemplate,d=c&&c.title,f=c&&c.content,e=a.layer,k=e&&e._getDateOpts&&e._getDateOpts().properties,h=g.clone(a.attributes)||{},l={dateFormat:{properties:k,formatter:"DateFormat"+x.getFormat("short-date-short-time")}};return{graphic:a,
template:c,title:d,content:f,contentEnabled:b,layer:e,attributes:h,properties:k,substOptions:l}},_fixTokens:function(a,b){return a.replace(Q,function(a,d,f){return(a=this._getLayerFieldInfo(b,f))?"{"+a.name+"}":d}.bind(this))},_encodeAttributes:function(a){var b=g.clone(a)||{};Object.keys(b).forEach(function(a){var c=b[a];"string"===typeof c&&(c=encodeURIComponent(c).replace(O,"\x26apos;"),b[a]=c)});return b},_formatAttributesToFieldInfos:function(a,b,c,d,f){a.forEach(function(e){var k=e.fieldName,
h=this._getLayerFieldInfo(b,k);h&&(k=e.fieldName=h.name);f[k]=this._formatValue(f[k],{fieldInfos:a,fieldName:k,layer:b,substOptions:c});d&&e.format&&e.format.dateFormat&&(e=d.indexOf(k),-1<e&&d.splice(e,1))},this)},_getArcadeViewingMode:function(a){return a&&"local"===a.viewingMode?"localScene":"globalScene"},_formatAttributes:function(a,b,c,d,f,e,k,h){var l=g.clone(f);k&&k.forEach(function(a){var b="expression/"+a.name;a=h[a.name];var c=this.view,c=c&&u.getViewInfo({viewingMode:"3d"===c.type?this._getArcadeViewingMode(c):
"map",scale:c.scale,spatialReference:c.spatialReference});a=u.executeFunction(a&&a.compiledFunc,u.createExecContext(e,c));"string"===typeof a&&(a=N.encode(a));l[b]=a},this);this._relatedInfo&&Object.keys(this._relatedInfo).forEach(function(a){var b=this._relatedInfo[a];a=this._relatedLayersInfo[a];b&&(b.relatedFeatures.forEach(this._relatedFeaturesAttributes.bind(this,a,f,l)),b.relatedStatsFeatures.forEach(this._relatedStatsAttributes.bind(this,a,f,l)))},this);a&&this._formatAttributesToFieldInfos(a,
b,c,d,l);if(b){var p=b.typeIdField;Object.keys(f).forEach(function(a){if(-1===a.indexOf("relationships/")){var c=f[a];if(g.isDefined(c)){var d=this._getDomainName(b,e,a,c);g.isDefined(d)?l[a]=d:a===p&&(c=this._getTypeName(b,e,c),g.isDefined(c)&&(l[a]=c))}}},this)}return l},_formatValue:function(a,b){var c=b.fieldInfos,d=b.fieldName,f=b.substOptions,c=c&&this._getFieldInfo(c,d),e=g.clone(c),c=b.preventPlacesFormatting;(b=this._getLayerFieldInfo(b.layer,d))&&"date"===b.type&&(b=e.format||{},b.dateFormat=
b.dateFormat||"short-date-short-time",e.format=b);b=e&&e.format;d="number"===typeof a&&f.dateFormat.properties&&-1===f.dateFormat.properties.indexOf(d)&&(!b||!b.dateFormat);if(!g.isDefined(a)||!e||!g.isDefined(b))return d?this._forceLTR(a):a;var k="",h=[],e=b.hasOwnProperty("places")||b.hasOwnProperty("digitSeparator"),l=b.hasOwnProperty("digitSeparator")?b.digitSeparator:!0;if(e)k="NumberFormat",g.isDefined(b.places)&&(!c||0<b.places)&&(h.push("places: "+Number(b.places)),k+="("+h.join(",")+")");
else if(b.dateFormat)k="DateFormat"+x.getFormat(b.dateFormat)||x.getFormat("short-date-short-time");else return d?this._forceLTR(a):a;a=g.substitute({myKey:a},"{myKey:"+k+"}",f)||"";e&&!l&&C.group&&(a=a.replace(new RegExp("\\"+C.group,"g"),""));return d?this._forceLTR(a):a},_forceLTR:function(a){return"\x26lrm;"+a},_getDomainName:function(a,b,c,d){return(a=a.getFieldDomain&&a.getFieldDomain(c,{feature:b}))&&a.codedValues?a.getName(d):null},_getFieldInfo:function(a,b){b=b.toLowerCase();for(var c,d=
0;d<a.length;d++){var f=a[d];if(f.fieldName&&f.fieldName.toLowerCase()===b){c=f;break}}return c},_getLayerFieldInfo:function(a,b){return b&&a&&a.getField?a.getField(b):null},_getTypeName:function(a,b){return(a=a.getType&&a.getType(b))&&a.name},_processFieldsInLinks:function(a,b){var c=this._encodeAttributes(b);a&&(a=a.replace(P,function(a,f,e){return this._addValuesToHref(a,f||e,b,c)}.bind(this)));return a},_proxyAttachments:function(a,b){a=g.clone(a);b&&!(b instanceof z)&&b.attachmentInfos&&b.attachmentInfos.length&&
(b=b.attachmentInfos.map(function(a){a.url=J.addProxy(a.url);return a},this),a.attachmentInfos=b);return a},_queryAttachments:function(a){var b=a.layer;if(!b)return r.resolve();"scene"===b.type&&b.associatedLayer&&(b=b.associatedLayer);var c=a.attributes;a=b&&b.objectIdField;c=c&&a&&c[a];if(a&&b.get("capabilities.data.supportsAttachment")&&c)return this._queryAttachmentInfos(b,c)},_queryAttachmentInfos:function(a,b){var c=a.url+"/"+a.layerId+"/"+b+"/attachments",d=a.token||"";return A(c,{query:{f:"json",
token:d},callbackParamName:"callback"}).then(function(a){a=a.data;a.attachmentInfos.forEach(function(a){a.url=c+"/"+a.id;d&&(a.url+="?token\x3d"+d);a.objectId=b});return a})},_queryContentElements:function(a){var b=a.content;if(!b||!Array.isArray(b))return r.resolve();var c=[],d={};b.forEach(function(b,e){b.type===q.attachments&&(b=this._queryAttachments(a))&&(d[e]=b,c.push(b))},this);this._contentElementPromises=c;return 0===c.length?r.resolve():r.eachAlways(d).always(function(a){this._contentElementPromises=
null;return a}.bind(this))},_trimString:function(a){return(a||"").trim()},_getContent:function(a){var b=a.template,b=b&&b.content;"function"===typeof b&&(b=b.call(null,{graphic:a.graphic}));return b&&"function"===typeof b.then?b:r.resolve(b)},_updateContent:function(a){var b;return a.contentEnabled?this._contentPromise=b=this._getContent(a).then(function(b){a.content=b;return this._queryContentElements(a)}.bind(this)).then(function(b){this._set("content",this._compileContent(a,b))}.bind(this)).otherwise(function(a){E.log("error loading template",
a)}.bind(this)).then(function(){this._contentPromise=null}.bind(this)):b=r.resolve()},_isExpressionField:function(a){return D.test(a)},_compileExpressions:function(a){if(a){var b={};a.forEach(function(a){b[a.name]={compiledFunc:u.createFunction(a.expression)}});return b}},_createFormattedAttributes:function(a){var b=a.graphic,c=a.attributes,d=a.layer,f=a.template,e=f&&f.fieldInfos,k=f&&f.expressionInfos,h=this._compileExpressions(k),l=a.substOptions,g=a.properties,m={global:this._formatAttributes(e,
d,l,g,c,b,k,h),content:[]};a=f&&f.content;Array.isArray(a)&&a.forEach(function(a,e){a.type===q.fields&&a.fieldInfos&&(m.content[e]=this._formatAttributes(a.fieldInfos,d,l,g,c,b,k,h))},this);return m},_queryGraphicInfo:function(a,b){var c=this._createGraphicInfo(a,b);return this._checkForRelatedRecords(c).then(function(){this._set("formattedAttributes",this._createFormattedAttributes(c));this._set("title",this._compileTitle(c));return this._updateContent(c)}.bind(this))},_updateGraphic:function(a,
b){this._handles&&(this._clearRelatedInfo(),this._cancelPromises(),this._set("title",""),this._set("content",null),this._set("formattedAttributes",null),this._set("waitingForContent",!1),a&&(this._set("waitingForContent",!0),this._relatedRecordsPromise=this._queryGraphicInfo(a,b).always(function(){this._relatedRecordsPromise=null;this._relatedRecordsQueryPromises.length=0;this._set("waitingForContent",!1)}.bind(this))))},_getAllFieldInfos:function(a){var b=[],c=a.template,d=c&&c.fieldInfos;a=a.contentEnabled;
d&&(b=b.concat(d));a&&(c=c&&c.content,Array.isArray(c)&&c.forEach(function(a){b=b.concat(a&&a.fieldInfos)},this));return b},_checkForRelatedRecords:function(a){var b=this._getAllFieldInfos(a).filter(function(a){return a&&a.fieldName&&-1!==a.fieldName.indexOf("relationships/")},this);return a.layer&&b&&0<b.length?this._getRelatedRecords({graphic:a.graphic,fieldsInfo:b}):r.resolve()},_relatedFeaturesAttributes:function(a,b,c,d){Object.keys(d.attributes).forEach(function(f){if("esriRelCardinalityOneToOne"===
a.relation.cardinality){var e=this._toRelatedFieldName([a.relation.id,f]);b[e]=c[e]=d.attributes[f]}},this)},_relatedStatsAttributes:function(a,b,c,d){Object.keys(d.attributes).forEach(function(f){var e=this._toRelatedFieldName([a.relation.id,f]);b[e]=c[e]=d.attributes[f]},this)},_getRelatedChartInfos:function(a,b,c,d,f,e){var k,h,l,g,m,n;k=[];n=this._fromRelatedFieldName(c);m=n[0];h=this._relatedInfo[m];m=this._relatedLayersInfo[m];h&&h.relatedFeatures.forEach(function(h){var m=h.attributes,p;Object.keys(m).forEach(function(h){if(h===
n[1]){p={};g=m[h];d.normalizeField&&(l=-1!==d.normalizeField.indexOf("relationships/")?m[this._fromRelatedFieldName(d.normalizeField)[1]]:f[d.normalizeField]);g&&l&&(g/=l);if(d.tooltipField)if(-1!==d.tooltipField.indexOf("relationships/"))h=this._fromRelatedFieldName(d.tooltipField)[1],h=m[h],p.tooltip=h+": "+this._formatValue(g,{fieldInfos:b,fieldName:h,layer:a,substOptions:e,preventPlacesFormatting:!!l});else{if(h=this._getLayerFieldInfo(a,c))c=h.name;p.tooltip=c+": "+this._formatValue(g,{fieldInfos:b,
fieldName:d.tooltipField,layer:a,substOptions:e,preventPlacesFormatting:!!l})}else p.tooltip=g;p.y=g;k.push(p)}},this)},this);return"esriRelCardinalityOneToMany"===m.relation.cardinality||"esriRelCardinalityManyToMany"===m.relation.cardinality?k:k[0]},_getRelatedRecords:function(a){var b=a.graphic;return this._relatedLayersInfo?this._queryRelatedLayers(b).then(function(a){this._setRelatedRecords(a);return a}.bind(this)):this._getRelatedLayersInfo(a).then(function(a){Object.keys(a).forEach(function(b){a[b]&&
(this._relatedLayersInfo[b].relatedLayerInfo=a[b].data)},this);return this._queryRelatedLayers(b).then(function(a){this._setRelatedRecords(a);return a}.bind(this))}.bind(this))},_getRelatedLayersInfo:function(a){var b=a.fieldsInfo,c,d={};c=a.graphic.layer;this._relatedLayersInfo||(this._relatedLayersInfo={});b.forEach(function(a){var b,d,f;b=this._fromRelatedFieldName(a.fieldName);d=b[0];b=b[1];if(d){if(!this._relatedLayersInfo[d]){var g=c&&c.relationships;g&&g.some(function(a){if(a.id==d)return f=
a,!0});f&&(this._relatedLayersInfo[d]={relation:f,relatedFields:[],outStatistics:[]})}this._relatedLayersInfo[d]&&(this._relatedLayersInfo[d].relatedFields.push(b),a.statisticType&&(a=new L({statisticType:a.statisticType,onStatisticField:b,outStatisticFieldName:b}),this._relatedLayersInfo[d].outStatistics.push(a)))}},this);Object.keys(this._relatedLayersInfo).forEach(function(a){var b;this._relatedLayersInfo[a]&&(b=this._relatedLayersInfo[a].relation,b=c.url+"/"+b.relatedTableId,this._relatedLayersInfo[a].relatedLayerUrl=
b,d[a]=A(b,{query:{f:"json"},callbackParamName:"callback"}))},this);return y(d)},_queryRelatedLayers:function(a){var b={};Object.keys(this._relatedLayersInfo).forEach(function(c){b[c]=this._queryRelatedLayer({graphic:a,relatedInfo:this._relatedLayersInfo[c]})},this);return y(b)},_queryRelatedLayer:function(a){var b,c,d,f,e,g,h,l,p;b=a.graphic;c=b.layer.layerId;h=a.relatedInfo;a=h.relatedLayerInfo;l=h.relatedLayerUrl;p=h.relation;a&&a.relationships&&a.relationships.some(function(a){if(a.relatedTableId===
parseInt(c,10))return d=a,!0});d&&(a.fields.some(function(a){if(a.name===d.keyField)return f=-1!==["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"].indexOf(a.type)?"number":"string",!0}),e="string"===f?d.keyField+"\x3d'"+b.attributes[p.keyField]+"'":d.keyField+"\x3d"+b.attributes[p.keyField],e=new B({where:e,outFields:h.relatedFields}),h.outStatistics&&0<h.outStatistics.length&&a.supportsStatistics&&(g=new B({where:e.where,outFields:e.outFields,outStatistics:h.outStatistics})),
a=new M({url:l}),e=[a.execute(e)],g&&e.push(a.execute(g)));this._relatedRecordsQueryPromises=this._relatedRecordsQueryPromises.concat(e);return y(e)},_setRelatedRecords:function(a){this._relatedInfo=[];Object.keys(a).forEach(function(b){if(a[b]){var c=a[b];this._relatedInfo[b]={relatedFeatures:c[0].features};g.isDefined(c[1])&&(this._relatedInfo[b].relatedStatsFeatures=c[1].features)}},this)},_fromRelatedFieldName:function(a){return-1!==a.indexOf("relationships/")?a.split("/").slice(1):[]},_toRelatedFieldName:function(a){return a&&
0<a.length?"relationships/"+a[0]+"/"+a[1]:""}})});