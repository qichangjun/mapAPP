// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["../../../core/arrayUtils","../webgl-engine/lib/Util"],function(y,t){return function(q,z,A,r,g){function k(){return"workers: "+e+", queues: "+f.map(function(a){return a.length})}var d=0,h={},f=[],e=[],l=[],c=[],m=0,n=0,p;for(p in r)f[d]=[],e[d]=0,c[d]={requests:0,size:0,duration:0,speed:0},l[d]=r[p],h[p]=d++,n+=r[p];var u=f.length,d=0;this.setWorkerQuota=function(a){t.assert(y.equals(Object.keys(this.typeWorkerAllication),Object.keys(a)));this.typeWorkerAllication=a;n=0;for(var b in a)l[h[b]]=
a[b],n+=a[b]};this.setWorkerFunc=function(a){q=a};this.push=function(a){var b=h[a.clientType];m<n?(e[b]++,m++,g&&console.log("queue start type "+b+", "+k()),q(a,v)):(f[b].push(a),g&&console.log("queue push type "+b+", "+k()))};this._getStatsForType=function(a){a=h[a];return{quota:l[a],workers:e[a],queueSize:f[a].length,requestStats:c[a]}};this.removeTasks=function(a,b){for(var c=[],d=f[h[b]],e=0;e<d.length;e++){var g=d[e];-1<a.indexOf(g)||c.push(g)}f[h[b]]=c};this.workerCancelled=function(a){w(a);
a._cancelledInQueue=!0};this.clear=function(){for(var a=0;a<f.length;a++)f[a]=[]};var w=function(a){var b=h[a.clientType];e[b]--;m--;c[b].requests++;c[b].size+=a.size||0;c[b].duration+=a.duration||0;c[b].speed=0<c[b].duration?c[b].size/c[b].duration:0;t.assert(0<=e[b]);a=d;b=!1;do e[a]<l[a]&&x(a)&&(b=!0),a=(a+1)%u;while(!b&&a!=d);if(!b){do x(a)&&(b=!0),a=(a+1)%u;while(!b&&a!=d)}!b&&g&&console.log("queue sink, "+k());d=a},x=function(a){for(;0<f[a].length;){if(q(f[a].shift(),v))return g&&console.log("queue startqueued clientType "+
a+", "+k()),e[a]++,m++,!0;g&&console.log("queue task cancelled, "+k())}return!1},v=function(a){a._cancelledInQueue||(z.apply(A,arguments),w(a))}}});