// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["../../core/Accessor","../../core/kebabDictionary","../../geometry/support/jsonUtils","dojo/_base/array"],function(b,c,d,e){var f=c({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});return b.createSubclass({declaredClass:"esri.tasks.support.GeneralizeParameters",properties:{geometries:null,deviationUnit:null,maxDeviation:null},toJSON:function(){var b=
e.map(this.geometries,function(a){return a.toJSON()}),a={};this.geometries&&0<this.geometries.length&&(a.geometries=JSON.stringify({geometryType:d.getJsonType(this.geometries[0]),geometries:b}),a.sr=JSON.stringify(this.geometries[0].spatialReference.toJSON()));this.deviationUnit&&(a.deviationUnit=f.toJSON(this.deviationUnit));this.maxDeviation&&(a.maxDeviation=this.maxDeviation);return a}})});