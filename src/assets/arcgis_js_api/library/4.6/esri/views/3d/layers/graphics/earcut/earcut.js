// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define([],function(){function x(a,b,c){c=c||2;var g=b&&b.length,f=g?b[0]*c:a.length,l=G(a,0,f,c,!0),k=[];if(!l)return k;var m,e,q,h;if(g){var d=c,g=[],p,n,u;h=0;for(p=b.length;h<p;h++)n=b[h]*d,u=h<p-1?b[h+1]*d:a.length,n=G(a,n,u,d,!1),n===n.next&&(n.steiner=!0),g.push(K(n));g.sort(L);for(h=0;h<g.length;h++){b=g[h];d=l;if(d=M(b,d))b=H(d,b),y(b,b.next);l=y(l,l.next)}}if(a.length>80*c){m=q=a[0];e=g=a[1];for(d=c;d<f;d+=c)h=a[d],b=a[d+1],h<m&&(m=h),b<e&&(e=b),h>q&&(q=h),b>g&&(g=b);q=Math.max(q-m,g-e)}z(l,
k,c,m,e,q);return k}function G(a,b,c,g,f){var l;if(f===0<A(a,b,c,g))for(f=b;f<c;f+=g)l=I(f,a[f],a[f+1],l);else for(f=c-g;f>=b;f-=g)l=I(f,a[f],a[f+1],l);l&&w(l,l.next)&&(B(l),l=l.next);return l}function y(a,b){if(!a)return a;b||(b=a);var c;do if(c=!1,a.steiner||!w(a,a.next)&&0!==u(a.prev,a,a.next))a=a.next;else{B(a);a=b=a.prev;if(a===a.next)return null;c=!0}while(c||a!==b);return b}function z(a,b,c,g,f,l,k){if(a){if(!k&&l){var m=a,e=m;do null===e.z&&(e.z=F(e.x,e.y,g,f,l)),e.prevZ=e.prev,e=e.nextZ=
e.next;while(e!==m);e.prevZ.nextZ=null;e.prevZ=null;var m=e,q,h,d,p,n,v,r=1;do{e=m;d=m=null;for(p=0;e;){p++;h=e;for(q=n=0;q<r&&(n++,h=h.nextZ,h);q++);for(v=r;0<n||0<v&&h;)0===n?(q=h,h=h.nextZ,v--):0!==v&&h?e.z<=h.z?(q=e,e=e.nextZ,n--):(q=h,h=h.nextZ,v--):(q=e,e=e.nextZ,n--),d?d.nextZ=q:m=q,q.prevZ=d,d=q;e=h}d.nextZ=null;r*=2}while(1<p)}for(m=a;a.prev!==a.next;){e=a.prev;h=a.next;if(l)a:{d=a;v=g;var t=f,x=l;p=d.prev;n=d;r=d.next;if(0<=u(p,n,r))d=!1;else{var A=p.x>n.x?p.x>r.x?p.x:r.x:n.x>r.x?n.x:r.x,
D=p.y>n.y?p.y>r.y?p.y:r.y:n.y>r.y?n.y:r.y;q=F(p.x<n.x?p.x<r.x?p.x:r.x:n.x<r.x?n.x:r.x,p.y<n.y?p.y<r.y?p.y:r.y:n.y<r.y?n.y:r.y,v,t,x);v=F(A,D,v,t,x);for(t=d.nextZ;t&&t.z<=v;){if(t!==d.prev&&t!==d.next&&E(p.x,p.y,n.x,n.y,r.x,r.y,t.x,t.y)&&0<=u(t.prev,t,t.next)){d=!1;break a}t=t.nextZ}for(t=d.prevZ;t&&t.z>=q;){if(t!==d.prev&&t!==d.next&&E(p.x,p.y,n.x,n.y,r.x,r.y,t.x,t.y)&&0<=u(t.prev,t,t.next)){d=!1;break a}t=t.prevZ}d=!0}}else a:if(d=a,p=d.prev,n=d,r=d.next,0<=u(p,n,r))d=!1;else{for(q=d.next.next;q!==
d.prev;){if(E(p.x,p.y,n.x,n.y,r.x,r.y,q.x,q.y)&&0<=u(q.prev,q,q.next)){d=!1;break a}q=q.next}d=!0}if(d)b.push(e.i/c),b.push(a.i/c),b.push(h.i/c),B(a),m=a=h.next;else if(a=h,a===m){if(!k)z(y(a),b,c,g,f,l,1);else if(1===k){k=b;m=c;e=a;do h=e.prev,d=e.next.next,!w(h,d)&&J(h,e,e.next,d)&&C(h,d)&&C(d,h)&&(k.push(h.i/m),k.push(e.i/m),k.push(d.i/m),B(e),B(e.next),e=a=d),e=e.next;while(e!==a);a=e;z(a,b,c,g,f,l,2)}else if(2===k)a:{k=a;do{for(m=k.next.next;m!==k.prev;){if(e=k.i!==m.i){e=k;h=m;d=void 0;if(d=
e.next.i!==h.i&&e.prev.i!==h.i){d=void 0;b:{d=e;do{if(d.i!==e.i&&d.next.i!==e.i&&d.i!==h.i&&d.next.i!==h.i&&J(d,d.next,e,h)){d=!0;break b}d=d.next}while(d!==e);d=!1}d=!d}p=void 0;if(p=d&&C(e,h)&&C(h,e)){d=e;p=!1;n=(e.x+h.x)/2;h=(e.y+h.y)/2;do d.y>h!==d.next.y>h&&n<(d.next.x-d.x)*(h-d.y)/(d.next.y-d.y)+d.x&&(p=!p),d=d.next;while(d!==e)}e=p}if(e){a=H(k,m);k=y(k,k.next);a=y(a,a.next);z(k,b,c,g,f,l);z(a,b,c,g,f,l);break a}m=m.next}k=k.next}while(k!==a)}break}}}}function L(a,b){return a.x-b.x}function M(a,
b){var c=b,g=a.x,f=a.y,l=-Infinity,k;do{if(f<=c.y&&f>=c.next.y){var m=c.x+(f-c.y)*(c.next.x-c.x)/(c.next.y-c.y);if(m<=g&&m>l){l=m;if(m===g){if(f===c.y)return c;if(f===c.next.y)return c.next}k=c.x<c.next.x?c:c.next}}c=c.next}while(c!==b);if(!k)return null;if(g===l)return k.prev;b=k;for(var m=k.x,e=k.y,q=Infinity,h,c=k.next;c!==b;)g>=c.x&&c.x>=m&&E(f<e?g:l,f,m,e,f<e?l:g,f,c.x,c.y)&&(h=Math.abs(f-c.y)/(g-c.x),(h<q||h===q&&c.x>k.x)&&C(c,a)&&(k=c,q=h)),c=c.next;return k}function F(a,b,c,g,f){a=32767*(a-
c)/f;b=32767*(b-g)/f;a=(a|a<<8)&16711935;a=(a|a<<4)&252645135;a=(a|a<<2)&858993459;b=(b|b<<8)&16711935;b=(b|b<<4)&252645135;b=(b|b<<2)&858993459;return(a|a<<1)&1431655765|((b|b<<1)&1431655765)<<1}function K(a){var b=a,c=a;do b.x<c.x&&(c=b),b=b.next;while(b!==a);return c}function E(a,b,c,g,f,l,k,m){return 0<=(f-k)*(b-m)-(a-k)*(l-m)&&0<=(a-k)*(g-m)-(c-k)*(b-m)&&0<=(c-k)*(l-m)-(f-k)*(g-m)}function u(a,b,c){return(b.y-a.y)*(c.x-b.x)-(b.x-a.x)*(c.y-b.y)}function w(a,b){return a.x===b.x&&a.y===b.y}function J(a,
b,c,g){return w(a,b)&&w(c,g)||w(a,g)&&w(c,b)?!0:0<u(a,b,c)!==0<u(a,b,g)&&0<u(c,g,a)!==0<u(c,g,b)}function C(a,b){return 0>u(a.prev,a,a.next)?0<=u(a,b,a.next)&&0<=u(a,a.prev,b):0>u(a,b,a.prev)||0>u(a,a.next,b)}function H(a,b){var c=new D(a.i,a.x,a.y),g=new D(b.i,b.x,b.y),f=a.next,l=b.prev;a.next=b;b.prev=a;c.next=f;f.prev=c;g.next=c;c.prev=g;l.next=g;g.prev=l;return g}function I(a,b,c,g){a=new D(a,b,c);g?(a.next=g.next,a.prev=g,g.next.prev=a,g.next=a):(a.prev=a,a.next=a);return a}function B(a){a.next.prev=
a.prev;a.prev.next=a.next;a.prevZ&&(a.prevZ.nextZ=a.nextZ);a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function D(a,b,c){this.i=a;this.x=b;this.y=c;this.nextZ=this.prevZ=this.z=this.next=this.prev=null;this.steiner=!1}function A(a,b,c,g){for(var f=0,l=c-g;b<c;b+=g)f+=(a[l]-a[b])*(a[b+1]+a[l+1]),l=b;return f}x.deviation=function(a,b,c,g){var f=b&&b.length,l=Math.abs(A(a,0,f?b[0]*c:a.length,c));if(f)for(var f=0,k=b.length;f<k;f++)l-=Math.abs(A(a,b[f]*c,f<k-1?b[f+1]*c:a.length,c));for(f=b=0;f<g.length;f+=3){var k=
g[f]*c,m=g[f+1]*c,e=g[f+2]*c;b+=Math.abs((a[k]-a[e])*(a[m+1]-a[k+1])-(a[k]-a[m])*(a[e+1]-a[k+1]))}return 0===l&&0===b?0:Math.abs((b-l)/l)};x.flatten=function(a){for(var b=a[0][0].length,c={vertices:[],holes:[],dimensions:b},g=0,f=0;f<a.length;f++){for(var l=0;l<a[f].length;l++)for(var k=0;k<b;k++)c.vertices.push(a[f][l][k]);0<f&&(g+=a[f-1].length,c.holes.push(g))}return c};return x});