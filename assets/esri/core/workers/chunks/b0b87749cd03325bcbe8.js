"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8691,5732,661],{92835:(t,e,s)=>{s.d(e,{Z:()=>g});var n,r=s(43697),i=s(96674),a=s(70586),o=s(35463),l=s(5600),h=(s(67676),s(75215),s(71715)),c=s(52011),u=s(30556);let f=n=class extends i.wq{constructor(t){super(t),this.end=null,this.start=null}static get allTime(){return m}static get empty(){return d}readEnd(t,e){return null!=e.end?new Date(e.end):null}writeEnd(t,e){e.end=t?t.getTime():null}get isAllTime(){return this.equals(n.allTime)}get isEmpty(){return this.equals(n.empty)}readStart(t,e){return null!=e.start?new Date(e.start):null}writeStart(t,e){e.start=t?t.getTime():null}clone(){return new n({end:this.end,start:this.start})}equals(t){if(!t)return!1;const e=(0,a.pC)(this.start)?this.start.getTime():this.start,s=(0,a.pC)(this.end)?this.end.getTime():this.end,n=(0,a.pC)(t.start)?t.start.getTime():t.start,r=(0,a.pC)(t.end)?t.end.getTime():t.end;return e===n&&s===r}expandTo(t){if(this.isEmpty||this.isAllTime)return this.clone();const e=(0,a.yw)(this.start,(e=>(0,o.JE)(e,t))),s=(0,a.yw)(this.end,(e=>{const s=(0,o.JE)(e,t);return e.getTime()===s.getTime()?s:(0,o.Nm)(s,1,t)}));return new n({start:e,end:s})}intersection(t){if(!t)return this.clone();if(this.isEmpty||t.isEmpty)return n.empty;if(this.isAllTime)return t.clone();if(t.isAllTime)return this.clone();const e=(0,a.R2)(this.start,-1/0,(t=>t.getTime())),s=(0,a.R2)(this.end,1/0,(t=>t.getTime())),r=(0,a.R2)(t.start,-1/0,(t=>t.getTime())),i=(0,a.R2)(t.end,1/0,(t=>t.getTime()));let o,l;if(r>=e&&r<=s?o=r:e>=r&&e<=i&&(o=e),s>=r&&s<=i?l=s:i>=e&&i<=s&&(l=i),null!=o&&null!=l&&!isNaN(o)&&!isNaN(l)){const t=new n;return t.start=o===-1/0?null:new Date(o),t.end=l===1/0?null:new Date(l),t}return n.empty}offset(t,e){if(this.isEmpty||this.isAllTime)return this.clone();const s=new n,{start:r,end:i}=this;return(0,a.pC)(r)&&(s.start=(0,o.Nm)(r,t,e)),(0,a.pC)(i)&&(s.end=(0,o.Nm)(i,t,e)),s}union(t){if(!t||t.isEmpty)return this.clone();if(this.isEmpty)return t.clone();if(this.isAllTime||t.isAllTime)return m.clone();const e=(0,a.pC)(this.start)&&(0,a.pC)(t.start)?new Date(Math.min(this.start.getTime(),t.start.getTime())):null,s=(0,a.pC)(this.end)&&(0,a.pC)(t.end)?new Date(Math.max(this.end.getTime(),t.end.getTime())):null;return new n({start:e,end:s})}};(0,r._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],f.prototype,"end",void 0),(0,r._)([(0,h.r)("end")],f.prototype,"readEnd",null),(0,r._)([(0,u.c)("end")],f.prototype,"writeEnd",null),(0,r._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],f.prototype,"isAllTime",null),(0,r._)([(0,l.Cb)({readOnly:!0,json:{read:!1}})],f.prototype,"isEmpty",null),(0,r._)([(0,l.Cb)({type:Date,json:{write:{allowNull:!0}}})],f.prototype,"start",void 0),(0,r._)([(0,h.r)("start")],f.prototype,"readStart",null),(0,r._)([(0,u.c)("start")],f.prototype,"writeStart",null),f=n=(0,r._)([(0,c.j)("esri.TimeExtent")],f);const m=new f,d=new f({start:void 0,end:void 0}),g=f},5732:(t,e,s)=>{s.d(e,{a:()=>i,c:()=>n,g:()=>r});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function i(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}},52138:(t,e,s)=>{s.d(e,{a:()=>l,d:()=>d,e:()=>f,f:()=>m,g:()=>_,h:()=>v,i:()=>a,j:()=>M,k:()=>u,m:()=>h,s:()=>i,t:()=>o,v:()=>c,x:()=>C,y:()=>g});var n=s(65617),r=s(46851);function i(t,e,s,n,r,i,a,o,l,h,c,u,f,m,d,g,p){return t[0]=e,t[1]=s,t[2]=n,t[3]=r,t[4]=i,t[5]=a,t[6]=o,t[7]=l,t[8]=h,t[9]=c,t[10]=u,t[11]=f,t[12]=m,t[13]=d,t[14]=g,t[15]=p,t}function a(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function o(t,e){if(t===e){const s=e[1],n=e[2],r=e[3],i=e[6],a=e[7],o=e[11];t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=s,t[6]=e[9],t[7]=e[13],t[8]=n,t[9]=i,t[11]=e[14],t[12]=r,t[13]=a,t[14]=o}else t[0]=e[0],t[1]=e[4],t[2]=e[8],t[3]=e[12],t[4]=e[1],t[5]=e[5],t[6]=e[9],t[7]=e[13],t[8]=e[2],t[9]=e[6],t[10]=e[10],t[11]=e[14],t[12]=e[3],t[13]=e[7],t[14]=e[11],t[15]=e[15];return t}function l(t,e){const s=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=e[9],f=e[10],m=e[11],d=e[12],g=e[13],p=e[14],b=e[15],_=s*o-n*a,y=s*l-r*a,M=s*h-i*a,v=n*l-r*o,C=n*h-i*o,E=r*h-i*l,w=c*g-u*d,D=c*p-f*d,x=c*b-m*d,S=u*p-f*g,T=u*b-m*g,A=f*b-m*p;let O=_*A-y*T+M*S+v*x-C*D+E*w;return O?(O=1/O,t[0]=(o*A-l*T+h*S)*O,t[1]=(r*T-n*A-i*S)*O,t[2]=(g*E-p*C+b*v)*O,t[3]=(f*C-u*E-m*v)*O,t[4]=(l*x-a*A-h*D)*O,t[5]=(s*A-r*x+i*D)*O,t[6]=(p*M-d*E-b*y)*O,t[7]=(c*E-f*M+m*y)*O,t[8]=(a*T-o*x+h*w)*O,t[9]=(n*x-s*T-i*w)*O,t[10]=(d*C-g*M+b*_)*O,t[11]=(u*M-c*C-m*_)*O,t[12]=(o*D-a*S-l*w)*O,t[13]=(s*S-n*D+r*w)*O,t[14]=(g*y-d*v-p*_)*O,t[15]=(c*v-u*y+f*_)*O,t):null}function h(t,e,s){const n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],l=e[5],h=e[6],c=e[7],u=e[8],f=e[9],m=e[10],d=e[11],g=e[12],p=e[13],b=e[14],_=e[15];let y=s[0],M=s[1],v=s[2],C=s[3];return t[0]=y*n+M*o+v*u+C*g,t[1]=y*r+M*l+v*f+C*p,t[2]=y*i+M*h+v*m+C*b,t[3]=y*a+M*c+v*d+C*_,y=s[4],M=s[5],v=s[6],C=s[7],t[4]=y*n+M*o+v*u+C*g,t[5]=y*r+M*l+v*f+C*p,t[6]=y*i+M*h+v*m+C*b,t[7]=y*a+M*c+v*d+C*_,y=s[8],M=s[9],v=s[10],C=s[11],t[8]=y*n+M*o+v*u+C*g,t[9]=y*r+M*l+v*f+C*p,t[10]=y*i+M*h+v*m+C*b,t[11]=y*a+M*c+v*d+C*_,y=s[12],M=s[13],v=s[14],C=s[15],t[12]=y*n+M*o+v*u+C*g,t[13]=y*r+M*l+v*f+C*p,t[14]=y*i+M*h+v*m+C*b,t[15]=y*a+M*c+v*d+C*_,t}function c(t,e,s){const n=s[0],r=s[1],i=s[2];if(e===t)t[12]=e[0]*n+e[4]*r+e[8]*i+e[12],t[13]=e[1]*n+e[5]*r+e[9]*i+e[13],t[14]=e[2]*n+e[6]*r+e[10]*i+e[14],t[15]=e[3]*n+e[7]*r+e[11]*i+e[15];else{const s=e[0],a=e[1],o=e[2],l=e[3],h=e[4],c=e[5],u=e[6],f=e[7],m=e[8],d=e[9],g=e[10],p=e[11];t[0]=s,t[1]=a,t[2]=o,t[3]=l,t[4]=h,t[5]=c,t[6]=u,t[7]=f,t[8]=m,t[9]=d,t[10]=g,t[11]=p,t[12]=s*n+h*r+m*i+e[12],t[13]=a*n+c*r+d*i+e[13],t[14]=o*n+u*r+g*i+e[14],t[15]=l*n+f*r+p*i+e[15]}return t}function u(t,e,s){const n=s[0],r=s[1],i=s[2];return t[0]=e[0]*n,t[1]=e[1]*n,t[2]=e[2]*n,t[3]=e[3]*n,t[4]=e[4]*r,t[5]=e[5]*r,t[6]=e[6]*r,t[7]=e[7]*r,t[8]=e[8]*i,t[9]=e[9]*i,t[10]=e[10]*i,t[11]=e[11]*i,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function f(t,e,s,n){let i,a,o,l,h,c,u,f,m,d,g,p,b,_,y,M,v,C,E,w,D,x,S,T,A=n[0],O=n[1],R=n[2],I=Math.sqrt(A*A+O*O+R*R);return I<(0,r.g)()?null:(I=1/I,A*=I,O*=I,R*=I,i=Math.sin(s),a=Math.cos(s),o=1-a,l=e[0],h=e[1],c=e[2],u=e[3],f=e[4],m=e[5],d=e[6],g=e[7],p=e[8],b=e[9],_=e[10],y=e[11],M=A*A*o+a,v=O*A*o+R*i,C=R*A*o-O*i,E=A*O*o-R*i,w=O*O*o+a,D=R*O*o+A*i,x=A*R*o+O*i,S=O*R*o-A*i,T=R*R*o+a,t[0]=l*M+f*v+p*C,t[1]=h*M+m*v+b*C,t[2]=c*M+d*v+_*C,t[3]=u*M+g*v+y*C,t[4]=l*E+f*w+p*D,t[5]=h*E+m*w+b*D,t[6]=c*E+d*w+_*D,t[7]=u*E+g*w+y*D,t[8]=l*x+f*S+p*T,t[9]=h*x+m*S+b*T,t[10]=c*x+d*S+_*T,t[11]=u*x+g*S+y*T,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function m(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e[0],t[13]=e[1],t[14]=e[2],t[15]=1,t}function d(t,e,s){if(0===e)return a(t);let n,i,o,l=s[0],h=s[1],c=s[2],u=Math.sqrt(l*l+h*h+c*c);return u<(0,r.g)()?null:(u=1/u,l*=u,h*=u,c*=u,n=Math.sin(e),i=Math.cos(e),o=1-i,t[0]=l*l*o+i,t[1]=h*l*o+c*n,t[2]=c*l*o-h*n,t[3]=0,t[4]=l*h*o-c*n,t[5]=h*h*o+i,t[6]=c*h*o+l*n,t[7]=0,t[8]=l*c*o+h*n,t[9]=h*c*o-l*n,t[10]=c*c*o+i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t)}function g(t,e){const s=Math.sin(e),n=Math.cos(e);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=s,t[7]=0,t[8]=0,t[9]=-s,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function p(t,e,s){const n=e[0],r=e[1],i=e[2],a=e[3],o=n+n,l=r+r,h=i+i,c=n*o,u=n*l,f=n*h,m=r*l,d=r*h,g=i*h,p=a*o,b=a*l,_=a*h;return t[0]=1-(m+g),t[1]=u+_,t[2]=f-b,t[3]=0,t[4]=u-_,t[5]=1-(c+g),t[6]=d+p,t[7]=0,t[8]=f+b,t[9]=d-p,t[10]=1-(c+m),t[11]=0,t[12]=s[0],t[13]=s[1],t[14]=s[2],t[15]=1,t}const b=(0,n.c)();function _(t,e,s,n){const r=e[0],i=e[1],a=e[2],o=e[3],l=r+r,h=i+i,c=a+a,u=r*l,f=r*h,m=r*c,d=i*h,g=i*c,p=a*c,b=o*l,_=o*h,y=o*c,M=n[0],v=n[1],C=n[2];return t[0]=(1-(d+p))*M,t[1]=(f+y)*M,t[2]=(m-_)*M,t[3]=0,t[4]=(f-y)*v,t[5]=(1-(u+p))*v,t[6]=(g+b)*v,t[7]=0,t[8]=(m+_)*C,t[9]=(g-b)*C,t[10]=(1-(u+d))*C,t[11]=0,t[12]=s[0],t[13]=s[1],t[14]=s[2],t[15]=1,t}function y(t,e,s){return t[0]=e[0]-s[0],t[1]=e[1]-s[1],t[2]=e[2]-s[2],t[3]=e[3]-s[3],t[4]=e[4]-s[4],t[5]=e[5]-s[5],t[6]=e[6]-s[6],t[7]=e[7]-s[7],t[8]=e[8]-s[8],t[9]=e[9]-s[9],t[10]=e[10]-s[10],t[11]=e[11]-s[11],t[12]=e[12]-s[12],t[13]=e[13]-s[13],t[14]=e[14]-s[14],t[15]=e[15]-s[15],t}function M(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[7]===e[7]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[11]===e[11]&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[15]===e[15]}function v(t,e){if(t===e)return!0;const s=t[0],n=t[1],i=t[2],a=t[3],o=t[4],l=t[5],h=t[6],c=t[7],u=t[8],f=t[9],m=t[10],d=t[11],g=t[12],p=t[13],b=t[14],_=t[15],y=e[0],M=e[1],v=e[2],C=e[3],E=e[4],w=e[5],D=e[6],x=e[7],S=e[8],T=e[9],A=e[10],O=e[11],R=e[12],I=e[13],q=e[14],F=e[15],N=(0,r.g)();return Math.abs(s-y)<=N*Math.max(1,Math.abs(s),Math.abs(y))&&Math.abs(n-M)<=N*Math.max(1,Math.abs(n),Math.abs(M))&&Math.abs(i-v)<=N*Math.max(1,Math.abs(i),Math.abs(v))&&Math.abs(a-C)<=N*Math.max(1,Math.abs(a),Math.abs(C))&&Math.abs(o-E)<=N*Math.max(1,Math.abs(o),Math.abs(E))&&Math.abs(l-w)<=N*Math.max(1,Math.abs(l),Math.abs(w))&&Math.abs(h-D)<=N*Math.max(1,Math.abs(h),Math.abs(D))&&Math.abs(c-x)<=N*Math.max(1,Math.abs(c),Math.abs(x))&&Math.abs(u-S)<=N*Math.max(1,Math.abs(u),Math.abs(S))&&Math.abs(f-T)<=N*Math.max(1,Math.abs(f),Math.abs(T))&&Math.abs(m-A)<=N*Math.max(1,Math.abs(m),Math.abs(A))&&Math.abs(d-O)<=N*Math.max(1,Math.abs(d),Math.abs(O))&&Math.abs(g-R)<=N*Math.max(1,Math.abs(g),Math.abs(R))&&Math.abs(p-I)<=N*Math.max(1,Math.abs(p),Math.abs(I))&&Math.abs(b-q)<=N*Math.max(1,Math.abs(b),Math.abs(q))&&Math.abs(_-F)<=N*Math.max(1,Math.abs(_),Math.abs(F))}function C(t){const e=(0,r.g)(),s=t[0],n=t[1],i=t[2],a=t[4],o=t[5],l=t[6],h=t[8],c=t[9],u=t[10];return Math.abs(1-(s*s+a*a+h*h))<=e&&Math.abs(1-(n*n+o*o+c*c))<=e&&Math.abs(1-(i*i+l*l+u*u))<=e}const E=h,w=y;Object.freeze(Object.defineProperty({__proto__:null,copy:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t},set:i,identity:a,transpose:o,invert:l,adjoint:function(t,e){const s=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],u=e[9],f=e[10],m=e[11],d=e[12],g=e[13],p=e[14],b=e[15];return t[0]=o*(f*b-m*p)-u*(l*b-h*p)+g*(l*m-h*f),t[1]=-(n*(f*b-m*p)-u*(r*b-i*p)+g*(r*m-i*f)),t[2]=n*(l*b-h*p)-o*(r*b-i*p)+g*(r*h-i*l),t[3]=-(n*(l*m-h*f)-o*(r*m-i*f)+u*(r*h-i*l)),t[4]=-(a*(f*b-m*p)-c*(l*b-h*p)+d*(l*m-h*f)),t[5]=s*(f*b-m*p)-c*(r*b-i*p)+d*(r*m-i*f),t[6]=-(s*(l*b-h*p)-a*(r*b-i*p)+d*(r*h-i*l)),t[7]=s*(l*m-h*f)-a*(r*m-i*f)+c*(r*h-i*l),t[8]=a*(u*b-m*g)-c*(o*b-h*g)+d*(o*m-h*u),t[9]=-(s*(u*b-m*g)-c*(n*b-i*g)+d*(n*m-i*u)),t[10]=s*(o*b-h*g)-a*(n*b-i*g)+d*(n*h-i*o),t[11]=-(s*(o*m-h*u)-a*(n*m-i*u)+c*(n*h-i*o)),t[12]=-(a*(u*p-f*g)-c*(o*p-l*g)+d*(o*f-l*u)),t[13]=s*(u*p-f*g)-c*(n*p-r*g)+d*(n*f-r*u),t[14]=-(s*(o*p-l*g)-a*(n*p-r*g)+d*(n*l-r*o)),t[15]=s*(o*f-l*u)-a*(n*f-r*u)+c*(n*l-r*o),t},determinant:function(t){const e=t[0],s=t[1],n=t[2],r=t[3],i=t[4],a=t[5],o=t[6],l=t[7],h=t[8],c=t[9],u=t[10],f=t[11],m=t[12],d=t[13],g=t[14],p=t[15];return(e*a-s*i)*(u*p-f*g)-(e*o-n*i)*(c*p-f*d)+(e*l-r*i)*(c*g-u*d)+(s*o-n*a)*(h*p-f*m)-(s*l-r*a)*(h*g-u*m)+(n*l-r*o)*(h*d-c*m)},multiply:h,translate:c,scale:u,rotate:f,rotateX:function(t,e,s){const n=Math.sin(s),r=Math.cos(s),i=e[4],a=e[5],o=e[6],l=e[7],h=e[8],c=e[9],u=e[10],f=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=i*r+h*n,t[5]=a*r+c*n,t[6]=o*r+u*n,t[7]=l*r+f*n,t[8]=h*r-i*n,t[9]=c*r-a*n,t[10]=u*r-o*n,t[11]=f*r-l*n,t},rotateY:function(t,e,s){const n=Math.sin(s),r=Math.cos(s),i=e[0],a=e[1],o=e[2],l=e[3],h=e[8],c=e[9],u=e[10],f=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=i*r-h*n,t[1]=a*r-c*n,t[2]=o*r-u*n,t[3]=l*r-f*n,t[8]=i*n+h*r,t[9]=a*n+c*r,t[10]=o*n+u*r,t[11]=l*n+f*r,t},rotateZ:function(t,e,s){const n=Math.sin(s),r=Math.cos(s),i=e[0],a=e[1],o=e[2],l=e[3],h=e[4],c=e[5],u=e[6],f=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=i*r+h*n,t[1]=a*r+c*n,t[2]=o*r+u*n,t[3]=l*r+f*n,t[4]=h*r-i*n,t[5]=c*r-a*n,t[6]=u*r-o*n,t[7]=f*r-l*n,t},fromTranslation:m,fromScaling:function(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=e[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromRotation:d,fromXRotation:g,fromYRotation:function(t,e){const s=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=0,t[2]=-s,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=s,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromZRotation:function(t,e){const s=Math.sin(e),n=Math.cos(e);return t[0]=n,t[1]=s,t[2]=0,t[3]=0,t[4]=-s,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},fromRotationTranslation:p,fromQuat2:function(t,e){const s=b,n=-e[0],r=-e[1],i=-e[2],a=e[3],o=e[4],l=e[5],h=e[6],c=e[7],u=n*n+r*r+i*i+a*a;return u>0?(s[0]=2*(o*a+c*n+l*i-h*r)/u,s[1]=2*(l*a+c*r+h*n-o*i)/u,s[2]=2*(h*a+c*i+o*r-l*n)/u):(s[0]=2*(o*a+c*n+l*i-h*r),s[1]=2*(l*a+c*r+h*n-o*i),s[2]=2*(h*a+c*i+o*r-l*n)),p(t,e,s),t},getTranslation:function(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t},getScaling:function(t,e){const s=e[0],n=e[1],r=e[2],i=e[4],a=e[5],o=e[6],l=e[8],h=e[9],c=e[10];return t[0]=Math.sqrt(s*s+n*n+r*r),t[1]=Math.sqrt(i*i+a*a+o*o),t[2]=Math.sqrt(l*l+h*h+c*c),t},getRotation:function(t,e){const s=e[0]+e[5]+e[10];let n=0;return s>0?(n=2*Math.sqrt(s+1),t[3]=.25*n,t[0]=(e[6]-e[9])/n,t[1]=(e[8]-e[2])/n,t[2]=(e[1]-e[4])/n):e[0]>e[5]&&e[0]>e[10]?(n=2*Math.sqrt(1+e[0]-e[5]-e[10]),t[3]=(e[6]-e[9])/n,t[0]=.25*n,t[1]=(e[1]+e[4])/n,t[2]=(e[8]+e[2])/n):e[5]>e[10]?(n=2*Math.sqrt(1+e[5]-e[0]-e[10]),t[3]=(e[8]-e[2])/n,t[0]=(e[1]+e[4])/n,t[1]=.25*n,t[2]=(e[6]+e[9])/n):(n=2*Math.sqrt(1+e[10]-e[0]-e[5]),t[3]=(e[1]-e[4])/n,t[0]=(e[8]+e[2])/n,t[1]=(e[6]+e[9])/n,t[2]=.25*n),t},fromRotationTranslationScale:_,fromRotationTranslationScaleOrigin:function(t,e,s,n,r){const i=e[0],a=e[1],o=e[2],l=e[3],h=i+i,c=a+a,u=o+o,f=i*h,m=i*c,d=i*u,g=a*c,p=a*u,b=o*u,_=l*h,y=l*c,M=l*u,v=n[0],C=n[1],E=n[2],w=r[0],D=r[1],x=r[2],S=(1-(g+b))*v,T=(m+M)*v,A=(d-y)*v,O=(m-M)*C,R=(1-(f+b))*C,I=(p+_)*C,q=(d+y)*E,F=(p-_)*E,N=(1-(f+g))*E;return t[0]=S,t[1]=T,t[2]=A,t[3]=0,t[4]=O,t[5]=R,t[6]=I,t[7]=0,t[8]=q,t[9]=F,t[10]=N,t[11]=0,t[12]=s[0]+w-(S*w+O*D+q*x),t[13]=s[1]+D-(T*w+R*D+F*x),t[14]=s[2]+x-(A*w+I*D+N*x),t[15]=1,t},fromQuat:function(t,e){const s=e[0],n=e[1],r=e[2],i=e[3],a=s+s,o=n+n,l=r+r,h=s*a,c=n*a,u=n*o,f=r*a,m=r*o,d=r*l,g=i*a,p=i*o,b=i*l;return t[0]=1-u-d,t[1]=c+b,t[2]=f-p,t[3]=0,t[4]=c-b,t[5]=1-h-d,t[6]=m+g,t[7]=0,t[8]=f+p,t[9]=m-g,t[10]=1-h-u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},frustum:function(t,e,s,n,r,i,a){const o=1/(s-e),l=1/(r-n),h=1/(i-a);return t[0]=2*i*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*i*l,t[6]=0,t[7]=0,t[8]=(s+e)*o,t[9]=(r+n)*l,t[10]=(a+i)*h,t[11]=-1,t[12]=0,t[13]=0,t[14]=a*i*2*h,t[15]=0,t},perspective:function(t,e,s,n,r){const i=1/Math.tan(e/2);let a;return t[0]=i/s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,null!=r&&r!==1/0?(a=1/(n-r),t[10]=(r+n)*a,t[14]=2*r*n*a):(t[10]=-1,t[14]=-2*n),t},perspectiveFromFieldOfView:function(t,e,s,n){const r=Math.tan(e.upDegrees*Math.PI/180),i=Math.tan(e.downDegrees*Math.PI/180),a=Math.tan(e.leftDegrees*Math.PI/180),o=Math.tan(e.rightDegrees*Math.PI/180),l=2/(a+o),h=2/(r+i);return t[0]=l,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=h,t[6]=0,t[7]=0,t[8]=-(a-o)*l*.5,t[9]=(r-i)*h*.5,t[10]=n/(s-n),t[11]=-1,t[12]=0,t[13]=0,t[14]=n*s/(s-n),t[15]=0,t},ortho:function(t,e,s,n,r,i,a){const o=1/(e-s),l=1/(n-r),h=1/(i-a);return t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*l,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*h,t[11]=0,t[12]=(e+s)*o,t[13]=(r+n)*l,t[14]=(a+i)*h,t[15]=1,t},lookAt:function(t,e,s,n){let i,o,l,h,c,u,f,m,d,g;const p=e[0],b=e[1],_=e[2],y=n[0],M=n[1],v=n[2],C=s[0],E=s[1],w=s[2],D=(0,r.g)();return Math.abs(p-C)<D&&Math.abs(b-E)<D&&Math.abs(_-w)<D?a(t):(f=p-C,m=b-E,d=_-w,g=1/Math.sqrt(f*f+m*m+d*d),f*=g,m*=g,d*=g,i=M*d-v*m,o=v*f-y*d,l=y*m-M*f,g=Math.sqrt(i*i+o*o+l*l),g?(g=1/g,i*=g,o*=g,l*=g):(i=0,o=0,l=0),h=m*l-d*o,c=d*i-f*l,u=f*o-m*i,g=Math.sqrt(h*h+c*c+u*u),g?(g=1/g,h*=g,c*=g,u*=g):(h=0,c=0,u=0),t[0]=i,t[1]=h,t[2]=f,t[3]=0,t[4]=o,t[5]=c,t[6]=m,t[7]=0,t[8]=l,t[9]=u,t[10]=d,t[11]=0,t[12]=-(i*p+o*b+l*_),t[13]=-(h*p+c*b+u*_),t[14]=-(f*p+m*b+d*_),t[15]=1,t)},targetTo:function(t,e,s,n){const r=e[0],i=e[1],a=e[2],o=n[0],l=n[1],h=n[2];let c=r-s[0],u=i-s[1],f=a-s[2],m=c*c+u*u+f*f;m>0&&(m=1/Math.sqrt(m),c*=m,u*=m,f*=m);let d=l*f-h*u,g=h*c-o*f,p=o*u-l*c;return m=d*d+g*g+p*p,m>0&&(m=1/Math.sqrt(m),d*=m,g*=m,p*=m),t[0]=d,t[1]=g,t[2]=p,t[3]=0,t[4]=u*p-f*g,t[5]=f*d-c*p,t[6]=c*g-u*d,t[7]=0,t[8]=c,t[9]=u,t[10]=f,t[11]=0,t[12]=r,t[13]=i,t[14]=a,t[15]=1,t},str:function(t){return"mat4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+")"},frob:function(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+t[6]**2+t[7]**2+t[8]**2+t[9]**2+t[10]**2+t[11]**2+t[12]**2+t[13]**2+t[14]**2+t[15]**2)},add:function(t,e,s){return t[0]=e[0]+s[0],t[1]=e[1]+s[1],t[2]=e[2]+s[2],t[3]=e[3]+s[3],t[4]=e[4]+s[4],t[5]=e[5]+s[5],t[6]=e[6]+s[6],t[7]=e[7]+s[7],t[8]=e[8]+s[8],t[9]=e[9]+s[9],t[10]=e[10]+s[10],t[11]=e[11]+s[11],t[12]=e[12]+s[12],t[13]=e[13]+s[13],t[14]=e[14]+s[14],t[15]=e[15]+s[15],t},subtract:y,multiplyScalar:function(t,e,s){return t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t[3]=e[3]*s,t[4]=e[4]*s,t[5]=e[5]*s,t[6]=e[6]*s,t[7]=e[7]*s,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12]*s,t[13]=e[13]*s,t[14]=e[14]*s,t[15]=e[15]*s,t},multiplyScalarAndAdd:function(t,e,s,n){return t[0]=e[0]+s[0]*n,t[1]=e[1]+s[1]*n,t[2]=e[2]+s[2]*n,t[3]=e[3]+s[3]*n,t[4]=e[4]+s[4]*n,t[5]=e[5]+s[5]*n,t[6]=e[6]+s[6]*n,t[7]=e[7]+s[7]*n,t[8]=e[8]+s[8]*n,t[9]=e[9]+s[9]*n,t[10]=e[10]+s[10]*n,t[11]=e[11]+s[11]*n,t[12]=e[12]+s[12]*n,t[13]=e[13]+s[13]*n,t[14]=e[14]+s[14]*n,t[15]=e[15]+s[15]*n,t},exactEquals:M,equals:v,isOrthoNormal:C,mul:E,sub:w},Symbol.toStringTag,{value:"Module"}))},2368:(t,e,s)=>{s.d(e,{J:()=>c,j:()=>u});var n=s(43697),r=s(15923),i=(s(80442),s(22974)),a=(s(92604),s(70586)),o=s(31263),l=s(1153),h=s(52011);const c=t=>{let e=class extends t{clone(){const t=(0,a.s3)((0,l.vw)(this),"unable to clone instance of non-accessor class"),e=t.metadatas,s=t.store,n={},r=new Map;for(const a in e){const t=e[a],l=s?.originOf(a),h=t.clonable;if(t.readOnly||!1===h||l!==o.s3.USER&&l!==o.s3.DEFAULTS&&l!==o.s3.WEB_MAP&&l!==o.s3.WEB_SCENE)continue;const c=this[a];let u=null;u="function"==typeof h?h(c):"reference"===h?c:(0,i.Vo)(c),null!=c&&null==u||(l===o.s3.DEFAULTS?r.set(a,u):n[a]=u)}const h=new(0,Object.getPrototypeOf(this).constructor)(n);if(r.size){const t=(0,l.vw)(h)?.store;if(t)for(const[e,s]of r)t.set(e,s,o.s3.DEFAULTS)}return h}};return e=(0,n._)([(0,h.j)("esri.core.Clonable")],e),e};let u=class extends(c(r.Z)){};u=(0,n._)([(0,h.j)("esri.core.Clonable")],u)},46791:(t,e,s)=>{s.d(e,{Z:()=>O});var n,r=s(43697),i=s(3894),a=s(32448),o=s(22974),l=s(70586),h=s(71143);!function(t){t[t.ADD=1]="ADD",t[t.REMOVE=2]="REMOVE",t[t.MOVE=4]="MOVE"}(n||(n={}));var c,u=s(1654),f=s(5600),m=s(75215),d=s(52421),g=s(52011),p=s(58971),b=s(10661);const _=new h.Z(class{constructor(){this.target=null,this.cancellable=!1,this.defaultPrevented=!1,this.item=void 0,this.type=void 0}preventDefault(){this.cancellable&&(this.defaultPrevented=!0)}reset(t){this.defaultPrevented=!1,this.item=t}},void 0,(t=>{t.item=null,t.target=null,t.defaultPrevented=!1,t.cancellable=!1})),y=()=>{};function M(t){return t?t instanceof A?t.toArray():t.length?Array.prototype.slice.apply(t):[]:[]}function v(t){if(t&&t.length)return t[0]}function C(t,e,s,n){const r=Math.min(t.length-s,e.length-n);let i=0;for(;i<r&&t[s+i]===e[n+i];)i++;return i}function E(t,e,s,n){e&&e.forEach(((e,r,i)=>{t.push(e),E(t,s.call(n,e,r,i),s,n)}))}const w=new Set,D=new Set,x=new Set,S=new Map;let T=0,A=c=class extends a.Z.EventedAccessor{constructor(t){super(t),this._chgListeners=[],this._notifications=null,this._timer=null,this._observable=new b.s,this.length=0,this._items=[],Object.defineProperty(this,"uid",{value:T++})}static isCollection(t){return null!=t&&t instanceof c}normalizeCtorArgs(t){return t?Array.isArray(t)||t instanceof c?{items:t}:t:{}}destroy(){this.removeAll()}*[Symbol.iterator](){yield*this.items}get items(){return(0,p.it)(this._observable),this._items}set items(t){this._emitBeforeChanges(n.ADD)||(this._splice(0,this.length,M(t)),this._emitAfterChanges(n.ADD))}hasEventListener(t){return"change"===t?this._chgListeners.length>0:this._emitter.hasEventListener(t)}on(t,e){if("change"===t){const t=this._chgListeners,s={removed:!1,callback:e};return t.push(s),this._notifications&&this._notifications.push({listeners:t.slice(),items:this._items.slice(),changes:[]}),{remove(){this.remove=y,s.removed=!0,t.splice(t.indexOf(s),1)}}}return this._emitter.on(t,e)}once(t,e){const s=this.on(t,e);return{remove(){s.remove()}}}add(t,e){if((0,p.it)(this._observable),this._emitBeforeChanges(n.ADD))return this;const s=this.getNextIndex(e??null);return this._splice(s,0,[t]),this._emitAfterChanges(n.ADD),this}addMany(t,e=this._items.length){if((0,p.it)(this._observable),!t||!t.length)return this;if(this._emitBeforeChanges(n.ADD))return this;const s=this.getNextIndex(e);return this._splice(s,0,M(t)),this._emitAfterChanges(n.ADD),this}at(t){if((0,p.it)(this._observable),(t=Math.trunc(t)||0)<0&&(t+=this.length),!(t<0||t>=this.length))return this._items[t]}removeAll(){if((0,p.it)(this._observable),!this.length||this._emitBeforeChanges(n.REMOVE))return[];const t=this._splice(0,this.length)||[];return this._emitAfterChanges(n.REMOVE),t}clone(){return(0,p.it)(this._observable),this._createNewInstance({items:this._items.map(o.d9)})}concat(...t){(0,p.it)(this._observable);const e=t.map(M);return this._createNewInstance({items:this._items.concat(...e)})}drain(t,e){if((0,p.it)(this._observable),!this.length||this._emitBeforeChanges(n.REMOVE))return;const s=(0,l.j0)(this._splice(0,this.length)),r=s.length;for(let n=0;n<r;n++)t.call(e,s[n],n,s);this._emitAfterChanges(n.REMOVE)}every(t,e){return(0,p.it)(this._observable),this._items.every(t,e)}filter(t,e){let s;return(0,p.it)(this._observable),s=2===arguments.length?this._items.filter(t,e):this._items.filter(t),this._createNewInstance({items:s})}find(t,e){return(0,p.it)(this._observable),this._items.find(t,e)}findIndex(t,e){return(0,p.it)(this._observable),this._items.findIndex(t,e)}flatten(t,e){(0,p.it)(this._observable);const s=[];return E(s,this,t,e),new c(s)}forEach(t,e){return(0,p.it)(this._observable),this._items.forEach(t,e)}getItemAt(t){return(0,p.it)(this._observable),this._items[t]}getNextIndex(t){(0,p.it)(this._observable);const e=this.length;return(t=t??e)<0?t=0:t>e&&(t=e),t}includes(t,e=0){return(0,p.it)(this._observable),this._items.includes(t,e)}indexOf(t,e=0){return(0,p.it)(this._observable),this._items.indexOf(t,e)}join(t=","){return(0,p.it)(this._observable),this._items.join(t)}lastIndexOf(t,e=this.length-1){return(0,p.it)(this._observable),this._items.lastIndexOf(t,e)}map(t,e){(0,p.it)(this._observable);const s=this._items.map(t,e);return new c({items:s})}reorder(t,e=this.length-1){(0,p.it)(this._observable);const s=this.indexOf(t);if(-1!==s){if(e<0?e=0:e>=this.length&&(e=this.length-1),s!==e){if(this._emitBeforeChanges(n.MOVE))return t;this._splice(s,1),this._splice(e,0,[t]),this._emitAfterChanges(n.MOVE)}return t}}pop(){if((0,p.it)(this._observable),!this.length||this._emitBeforeChanges(n.REMOVE))return;const t=v(this._splice(this.length-1,1));return this._emitAfterChanges(n.REMOVE),t}push(...t){return(0,p.it)(this._observable),this._emitBeforeChanges(n.ADD)||(this._splice(this.length,0,t),this._emitAfterChanges(n.ADD)),this.length}reduce(t,e){(0,p.it)(this._observable);const s=this._items;return 2===arguments.length?s.reduce(t,e):s.reduce(t)}reduceRight(t,e){(0,p.it)(this._observable);const s=this._items;return 2===arguments.length?s.reduceRight(t,e):s.reduceRight(t)}remove(t){return(0,p.it)(this._observable),this.removeAt(this.indexOf(t))}removeAt(t){if((0,p.it)(this._observable),t<0||t>=this.length||this._emitBeforeChanges(n.REMOVE))return;const e=v(this._splice(t,1));return this._emitAfterChanges(n.REMOVE),e}removeMany(t){if((0,p.it)(this._observable),!t||!t.length||this._emitBeforeChanges(n.REMOVE))return[];const e=t instanceof c?t.toArray():t,s=this._items,r=[],i=e.length;for(let n=0;n<i;n++){const t=e[n],i=s.indexOf(t);if(i>-1){const t=1+C(e,s,n+1,i+1),a=this._splice(i,t);a&&a.length>0&&r.push.apply(r,a),n+=t-1}}return this._emitAfterChanges(n.REMOVE),r}reverse(){if((0,p.it)(this._observable),this._emitBeforeChanges(n.MOVE))return this;const t=this._splice(0,this.length);return t&&(t.reverse(),this._splice(0,0,t)),this._emitAfterChanges(n.MOVE),this}shift(){if((0,p.it)(this._observable),!this.length||this._emitBeforeChanges(n.REMOVE))return;const t=v(this._splice(0,1));return this._emitAfterChanges(n.REMOVE),t}slice(t=0,e=this.length){return(0,p.it)(this._observable),this._createNewInstance({items:this._items.slice(t,e)})}some(t,e){return(0,p.it)(this._observable),this._items.some(t,e)}sort(t){if((0,p.it)(this._observable),!this.length||this._emitBeforeChanges(n.MOVE))return this;const e=(0,l.j0)(this._splice(0,this.length));return arguments.length?e.sort(t):e.sort(),this._splice(0,0,e),this._emitAfterChanges(n.MOVE),this}splice(t,e,...s){(0,p.it)(this._observable);const r=(e?n.REMOVE:0)|(s.length?n.ADD:0);if(this._emitBeforeChanges(r))return[];const i=this._splice(t,e,s)||[];return this._emitAfterChanges(r),i}toArray(){return(0,p.it)(this._observable),this._items.slice()}toJSON(){return(0,p.it)(this._observable),this.toArray()}toLocaleString(){return(0,p.it)(this._observable),this._items.toLocaleString()}toString(){return(0,p.it)(this._observable),this._items.toString()}unshift(...t){return(0,p.it)(this._observable),!t.length||this._emitBeforeChanges(n.ADD)||(this._splice(0,0,t),this._emitAfterChanges(n.ADD)),this.length}_createNewInstance(t){return new this.constructor(t)}_splice(t,e,s){const n=this._items,r=this.itemType;let i,a;if(!this._notifications&&this.hasEventListener("change")&&(this._notifications=[{listeners:this._chgListeners.slice(),items:this._items.slice(),changes:[]}],this._timer&&this._timer.remove(),this._timer=(0,u.Os)((()=>this._dispatchChange()))),e){if(a=n.splice(t,e),this.hasEventListener("before-remove")){const e=_.acquire();e.target=this,e.cancellable=!0;for(let s=0,r=a.length;s<r;s++)i=a[s],e.reset(i),this.emit("before-remove",e),e.defaultPrevented&&(a.splice(s,1),n.splice(t,0,i),t+=1,s-=1,r-=1);_.release(e)}if(this.length=this._items.length,this.hasEventListener("after-remove")){const t=_.acquire();t.target=this,t.cancellable=!1;const e=a.length;for(let s=0;s<e;s++)t.reset(a[s]),this.emit("after-remove",t);_.release(t)}}if(s&&s.length){if(r){const t=[];for(const e of s){const s=r.ensureType(e);null==s&&null!=e||t.push(s)}s=t}const e=this.hasEventListener("before-add"),i=this.hasEventListener("after-add"),a=t===this.length;if(e||i){const r=_.acquire();r.target=this,r.cancellable=!0;const o=_.acquire();o.target=this,o.cancellable=!1;for(const l of s)e?(r.reset(l),this.emit("before-add",r),r.defaultPrevented||(a?n.push(l):n.splice(t++,0,l),this._set("length",n.length),i&&(o.reset(l),this.emit("after-add",o)))):(a?n.push(l):n.splice(t++,0,l),this._set("length",n.length),o.reset(l),this.emit("after-add",o));_.release(o),_.release(r)}else{if(a)for(const t of s)n.push(t);else n.splice(t,0,...s);this._set("length",n.length)}}return(s&&s.length||a&&a.length)&&this._notifyChangeEvent(s,a),a}_emitBeforeChanges(t){let e=!1;if(this.hasEventListener("before-changes")){const s=_.acquire();s.target=this,s.cancellable=!0,s.type=t,this.emit("before-changes",s),e=s.defaultPrevented,_.release(s)}return e}_emitAfterChanges(t){if(this.hasEventListener("after-changes")){const e=_.acquire();e.target=this,e.cancellable=!1,e.type=t,this.emit("after-changes",e),_.release(e)}this._observable.notify()}_notifyChangeEvent(t,e){this.hasEventListener("change")&&this._notifications&&this._notifications[this._notifications.length-1].changes.push({added:t,removed:e})}_dispatchChange(){if(this._timer&&(this._timer.remove(),this._timer=null),!this._notifications)return;const t=this._notifications;this._notifications=null;for(const e of t){const t=e.changes;w.clear(),D.clear(),x.clear();for(const{added:e,removed:i}of t){if(e)if(0===x.size&&0===D.size)for(const t of e)w.add(t);else for(const t of e)D.has(t)?(x.add(t),D.delete(t)):x.has(t)||w.add(t);if(i)if(0===x.size&&0===w.size)for(const t of i)D.add(t);else for(const t of i)w.has(t)?w.delete(t):(x.delete(t),D.add(t))}const s=i.Z.acquire();w.forEach((t=>{s.push(t)}));const n=i.Z.acquire();D.forEach((t=>{n.push(t)}));const r=this._items,a=e.items,o=i.Z.acquire();if(x.forEach((t=>{a.indexOf(t)!==r.indexOf(t)&&o.push(t)})),e.listeners&&(s.length||n.length||o.length)){const t={target:this,added:s,removed:n,moved:o},r=e.listeners.length;for(let s=0;s<r;s++){const n=e.listeners[s];n.removed||n.callback.call(this,t)}}i.Z.release(s),i.Z.release(n),i.Z.release(o)}w.clear(),D.clear(),x.clear()}};A.ofType=t=>{if(!t)return c;if(S.has(t))return S.get(t);let e=null;if("function"==typeof t)e=t.prototype.declaredClass;else if(t.base)e=t.base.prototype.declaredClass;else for(const n in t.typeMap){const s=t.typeMap[n].prototype.declaredClass;e?e+=` | ${s}`:e=s}let s=class extends c{};return(0,r._)([(0,d.c)({Type:t,ensureType:"function"==typeof t?(0,m.se)(t):(0,m.N7)(t)})],s.prototype,"itemType",void 0),s=(0,r._)([(0,g.j)(`esri.core.Collection<${e}>`)],s),S.set(t,s),s},(0,r._)([(0,f.Cb)()],A.prototype,"length",void 0),(0,r._)([(0,f.Cb)()],A.prototype,"items",null),A=c=(0,r._)([(0,g.j)("esri.core.Collection")],A);const O=A},52421:(t,e,s)=>{function n(t){return(e,s)=>{e[s]=t}}s.d(e,{c:()=>n})},10661:(t,e,s)=>{s.d(e,{s:()=>r});var n=s(39020);class r{constructor(){this._observers=[]}observe(t){return this._observers.includes(t)||this._observers.push(t),new n.X(this._observers,t)}notify(){const t=this._observers.slice();for(let e=0;e<t.length;++e){const s=t[e];s.onInvalidated(),s.onCommitted()}}}},35463:(t,e,s)=>{s.d(e,{JE:()=>a,Nm:()=>i,rJ:()=>o}),s(80442);const n={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5,weeks:6048e5,months:26784e5,years:31536e6,decades:31536e7,centuries:31536e8},r={milliseconds:{getter:"getMilliseconds",setter:"setMilliseconds",multiplier:1},seconds:{getter:"getSeconds",setter:"setSeconds",multiplier:1},minutes:{getter:"getMinutes",setter:"setMinutes",multiplier:1},hours:{getter:"getHours",setter:"setHours",multiplier:1},days:{getter:"getDate",setter:"setDate",multiplier:1},weeks:{getter:"getDate",setter:"setDate",multiplier:7},months:{getter:"getMonth",setter:"setMonth",multiplier:1},years:{getter:"getFullYear",setter:"setFullYear",multiplier:1},decades:{getter:"getFullYear",setter:"setFullYear",multiplier:10},centuries:{getter:"getFullYear",setter:"setFullYear",multiplier:100}};function i(t,e,s){const n=new Date(t.getTime());if(e&&s){const t=r[s],{getter:i,setter:a,multiplier:o}=t;if("months"===s){const t=function(t,e){const s=new Date(t,e+1,1);return s.setDate(0),s.getDate()}(n.getFullYear(),n.getMonth()+e);n.getDate()>t&&n.setDate(t)}n[a](n[i]()+e*o)}return n}function a(t,e){switch(e){case"milliseconds":return new Date(t.getTime());case"seconds":return new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds());case"minutes":return new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes());case"hours":return new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours());case"days":return new Date(t.getFullYear(),t.getMonth(),t.getDate());case"weeks":return new Date(t.getFullYear(),t.getMonth(),t.getDate()-t.getDay());case"months":return new Date(t.getFullYear(),t.getMonth(),1);case"years":return new Date(t.getFullYear(),0,1);case"decades":return new Date(t.getFullYear()-t.getFullYear()%10,0,1);case"centuries":return new Date(t.getFullYear()-t.getFullYear()%100,0,1);default:return new Date}}function o(t,e,s){return 0===t?0:t*n[e]/n[s]}},60437:(t,e,s)=>{s.d(e,{Gv:()=>_,HH:()=>o,JR:()=>g,TC:()=>l,Tn:()=>f,Ue:()=>i,al:()=>a,cS:()=>d,dp:()=>c,fS:()=>b,op:()=>u,pp:()=>h,t8:()=>m});var n=s(70586),r=s(6570);function i(t=y){return[t[0],t[1],t[2],t[3],t[4],t[5]]}function a(t,e,s,n,r,a,o=i()){return o[0]=t,o[1]=e,o[2]=s,o[3]=n,o[4]=r,o[5]=a,o}function o(t,e){const s=isFinite(t[2])||isFinite(t[5]);return new r.Z(s?{xmin:t[0],xmax:t[3],ymin:t[1],ymax:t[4],zmin:t[2],zmax:t[5],spatialReference:e}:{xmin:t[0],xmax:t[3],ymin:t[1],ymax:t[4],spatialReference:e})}function l(t,e){t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.min(t[2],e[2]),t[3]=Math.max(t[3],e[3]),t[4]=Math.max(t[4],e[4]),t[5]=Math.max(t[5],e[5])}function h(t,e){t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.min(t[2],e[2]),t[3]=Math.max(t[3],e[0]),t[4]=Math.max(t[4],e[1]),t[5]=Math.max(t[5],e[2])}function c(t,e=[0,0,0]){return e[0]=function(t){return t[0]>=t[3]?0:t[3]-t[0]}(t),e[1]=function(t){return t[1]>=t[4]?0:t[4]-t[1]}(t),e[2]=function(t){return t[2]>=t[5]?0:t[5]-t[2]}(t),e}function u(t,e,s=t){return s[0]=e[0],s[1]=e[1],s[2]=e[2],s!==t&&(s[3]=t[3],s[4]=t[4],s[5]=t[5]),s}function f(t,e,s=t){return s[3]=e[0],s[4]=e[1],s[5]=e[2],s!==t&&(s[0]=t[0],s[1]=t[1],s[2]=t[2]),t}function m(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function d(t){return t?m(t,_):i(_)}function g(t,e){return t[0]=e[0],t[1]=e[1],t[2]=Number.NEGATIVE_INFINITY,t[3]=e[2],t[4]=e[3],t[5]=Number.POSITIVE_INFINITY,t}function p(t){return 6===t.length}function b(t,e,s){if((0,n.Wi)(t)||(0,n.Wi)(e))return t===e;if(!p(t)||!p(e))return!1;if(s){for(let n=0;n<t.length;n++)if(!s(t[n],e[n]))return!1}else for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}s(24470);const _=[1/0,1/0,1/0,-1/0,-1/0,-1/0],y=[0,0,0,0,0,0];i()},3723:(t,e,s)=>{s.r(e),s.d(e,{default:()=>I});var n=s(43697),r=s(68773),i=s(3172),a=(s(9790),s(70586)),o=s(16453),l=s(95330),h=s(17452),c=s(5600),u=(s(67676),s(75215),s(71715)),f=s(52011),m=s(6570),d=s(8744),g=s(87085),p=s(71612),b=s(38009),_=s(16859),y=s(34760),M=s(72965),v=s(21506),C=s(89164),E=s(4095),w=s(37898),D=s(77987),x=s(20256);const S=["atom","xml"],T={base:C.Z,key:"type",typeMap:{"simple-line":E.Z},errorContext:"symbol"},A={base:C.Z,key:"type",typeMap:{"picture-marker":w.Z,"simple-marker":D.Z},errorContext:"symbol"},O={base:C.Z,key:"type",typeMap:{"simple-fill":x.Z},errorContext:"symbol"};let R=class extends((0,p.h)((0,y.Q)((0,b.q)((0,_.I)((0,M.M)((0,o.R)(g.Z))))))){constructor(...t){super(...t),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(t,e){return"string"==typeof t?{url:t,...e}:t}readFeatureCollections(t,e){return e.featureCollection.layers.forEach((t=>{const e=t.layerDefinition.drawingInfo.renderer.symbol;e&&"esriSFS"===e.type&&e.outline?.style.includes("esriSFS")&&(e.outline.style="esriSLSSolid")})),e.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const t=this._get("title");return t&&"defaults"!==this.originOf("title")?t:this.url?(0,h.vt)(this.url,S)||"GeoRSS":t||""}set title(t){this._set("title",t)}load(t){const e=(0,a.pC)(t)?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},t).catch(l.r9).then((()=>this._fetchService(e))).then((t=>{this.read(t,{origin:"service"})}))),Promise.resolve(this)}async hasDataChanged(){const t=await this._fetchService();return this.read(t,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(t){const e=this.spatialReference,{data:s}=await(0,i.default)(r.Z.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:(0,d.oR)(e)?void 0:e.wkid??JSON.stringify(e)},signal:t});return s}_hasGeometry(t){return this.featureCollections?.some((e=>e.featureSet?.geometryType===t&&e.featureSet.features?.length>0))??!1}};(0,n._)([(0,c.Cb)()],R.prototype,"description",void 0),(0,n._)([(0,c.Cb)()],R.prototype,"featureCollections",void 0),(0,n._)([(0,u.r)("service","featureCollections",["featureCollection.layers"])],R.prototype,"readFeatureCollections",null),(0,n._)([(0,c.Cb)({type:m.Z,json:{name:"lookAtExtent"}})],R.prototype,"fullExtent",void 0),(0,n._)([(0,c.Cb)(v.id)],R.prototype,"id",void 0),(0,n._)([(0,c.Cb)(v.rn)],R.prototype,"legendEnabled",void 0),(0,n._)([(0,c.Cb)({types:T,json:{write:!0}})],R.prototype,"lineSymbol",void 0),(0,n._)([(0,c.Cb)({type:["show","hide"]})],R.prototype,"listMode",void 0),(0,n._)([(0,c.Cb)({types:A,json:{write:!0}})],R.prototype,"pointSymbol",void 0),(0,n._)([(0,c.Cb)({types:O,json:{write:!0}})],R.prototype,"polygonSymbol",void 0),(0,n._)([(0,c.Cb)({type:["GeoRSS"]})],R.prototype,"operationalLayerType",void 0),(0,n._)([(0,c.Cb)(v.HQ)],R.prototype,"url",void 0),(0,n._)([(0,c.Cb)({json:{origins:{service:{read:{source:"name",reader:t=>t||void 0}}}}})],R.prototype,"title",null),(0,n._)([(0,c.Cb)({readOnly:!0,json:{read:!1},value:"geo-rss"})],R.prototype,"type",void 0),R=(0,n._)([(0,f.j)("esri.layers.GeoRSSLayer")],R);const I=R},34760:(t,e,s)=>{s.d(e,{Q:()=>b});var n=s(43697),r=s(92604),i=s(95330),a=s(5600),o=(s(67676),s(75215),s(52011)),l=s(46791),h=(s(80442),s(20102),s(26258),s(87538));const c=new l.Z,u=new WeakMap;function f(t){return null!=t&&"object"==typeof t&&"refreshInterval"in t&&"refresh"in t}function m(t,e){return Number.isFinite(t)&&Number.isFinite(e)?e<=0?t:m(e,t%e):0}let d=0,g=0;function p(){const t=Date.now();for(const e of c)e.refreshInterval&&t-(u.get(e)??0)+5>=6e4*e.refreshInterval&&(u.set(e,t),e.refresh(t))}(0,h.EH)((()=>{const t=Date.now();let e=0;for(const s of c)e=m(Math.round(6e4*s.refreshInterval),e),s.refreshInterval?u.get(s)||u.set(s,t):u.delete(s);if(e!==g){if(g=e,clearInterval(d),0===g)return void(d=0);d=setInterval(p,g)}}));const b=t=>{let e=class extends t{constructor(...t){super(...t),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,i.Ds)((()=>this.hasDataChanged())),this.when().then((()=>{!function(t){f(t)&&c.push(t)}(this)}),(()=>{}))}destroy(){f(this)&&c.includes(this)&&c.remove(this)}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(t=Date.now()){(0,i.R8)(this._debounceHasDataChanged()).then((e=>{e&&this._set("refreshTimestamp",t),this.emit("refresh",{dataChanged:e})}),(t=>{r.Z.getLogger(this.declaredClass).error(t),this.emit("refresh",{dataChanged:!1,error:t})}))}async hasDataChanged(){return!0}};return(0,n._)([(0,a.Cb)({type:Number,cast:t=>t>=.1?t:t<=0?0:.1,json:{write:!0}})],e.prototype,"refreshInterval",void 0),(0,n._)([(0,a.Cb)({readOnly:!0})],e.prototype,"refreshTimestamp",void 0),(0,n._)([(0,a.Cb)()],e.prototype,"refreshParameters",null),e=(0,n._)([(0,o.j)("esri.layers.mixins.RefreshableLayer")],e),e}}}]);