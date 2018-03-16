// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../Error ../Logger ./PropertyOrigin ./utils ./extensions/serializableProperty".split(" "),function(u,e,q,r,m,l,n){function p(a,h,c,f,d,b){if(!f||!f.write)return!1;var g=a.get(c);if(void 0===g)return!1;if(!d&&f.write.overridePolicy){var e=f.write.overridePolicy.call(a,g,c,b);void 0!==e&&(d=e)}d||(d=f.write);if(!d||!1===d.enabled)return!1;if(null===g){if(d.allowNull)return!0;d.isRequired&&((a=new q("web-document-write:property-required","Missing value for required property '"+
c+"' on '"+a.declaredClass+"'",{propertyName:c,target:a}),b)&&b.messages?b.messages.push(a):a&&!b&&t.error(a.name,a.message));return!1}return!d.ignoreOrigin&&b&&b.origin&&h.store.originOf(c)<m.nameToId(b.origin)?!1:!0}function k(a,h,c){if(a&&"function"===typeof a.toJSON&&(!a.toJSON.isDefaultToJSON||!a.write))return l.merge(h,a.toJSON());var f=l.getProperties(a),d=f.metadatas,b;for(b in d){var g=n.originSpecificWritePropertyDefinition(d[b],c);if(p(a,f,b,g,null,c)){var e=a.get(b),k={};g.write.writer.call(a,
e,k,"string"===typeof g.write.target?g.write.target:b,c);g=k;0<Object.keys(g).length&&(h=l.merge(h,g),c&&c.writtenProperties&&c.writtenProperties.push({target:a,propName:b,oldOrigin:m.idToReadableName(f.store.originOf(b)),newOrigin:c.origin}))}}return h}Object.defineProperty(e,"__esModule",{value:!0});var t=r.getLogger("esri.core.accessorSupport.write");e.willPropertyWrite=function(a,e,c,f){var d=l.getProperties(a),b=n.originSpecificWritePropertyDefinition(d.metadatas[e],f);return b?p(a,d,e,b,c,f):
!1};e.write=k;e.default=k});