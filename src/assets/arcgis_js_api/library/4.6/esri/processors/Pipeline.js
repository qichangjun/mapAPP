// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["../core/Accessor","../core/Collection","../processors/Filter"],function(h,k,f){var g=h.createSubclass({declaredClass:"esri.processors.Pipeline",constructor:function(){this._workflow=[]},destroy:function(){for(var a,b,d,c,e=this._workflow.length-1;0<=e;e--)if(a=this._workflow[e],b=a.processor,d=b.input,b.isInstanceOf(g)?(b.destroy(),c=b.output):(c=[{processor:b,collection:b.output}],b.input=null),d&&a.parent&&(d.removeAll(),d=null),c&&a.children.length)for(a=0,c=c.length;a<c;a++);this._workflow.splice(0,
this._workflow.length);this._currentStep=null;this.notifyChange("currentStep")},_workflow:null,_changeHandler:null,_currentStep:null,properties:{input:{value:null,set:function(a){this._workflow.length&&(this._workflow[0].processor.input=a);this._set("input",a)}},output:{readOnly:!0,get:function(){var a=[],b,d;if(!this._workflow.length)return a;for(var c=0;c<this._workflow.length;c++)b=this._workflow[c],b.children.length||(d=b.processor,d.isInstanceOf(f)?a.push({collection:d.output,processor:d}):a=
a.concat(b.processor.output));return a}},currentStep:{readOnly:!0,get:function(){return this._currentStep}}},pipe:function(a){if(!a||!a.isInstanceOf(f))throw new TypeError("Invalid value for 'filter' argument");var b,d,c;try{c={processor:a,children:[],parent:null},(d=this.currentStep)?(b=d.processor.output,a.input=b,d.children.push(c),c.parent=d):this.input?c.processor.input=this.input:c.processor.input&&(this.input=c.processor.input),c.processor.output=new k,this._currentStep=c,this.notifyChange("currentStep"),
this._workflow.push(c)}catch(e){throw e;}return this},branch:function(){var a=new g,b=this.currentStep,d;b||(this.pipe(new f),b=this.currentStep);d={processor:a,parent:this.currentStep,children:[]};d.processor.input=b.processor.output;b.children.push(d);this._workflow.push(d);return a}});return g});