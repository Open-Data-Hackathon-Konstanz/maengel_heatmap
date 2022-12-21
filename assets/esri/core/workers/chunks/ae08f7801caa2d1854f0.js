"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[690],{28659:(t,e,r)=>{r.d(e,{B:()=>h});var n=r(81153),i=r(17452),o=r(41123),s=r(7628),a=r(31263),l=r(5600);function u(t){return p[function(t){return t instanceof Blob?t.type:function(t){const e=(0,i.Ml)(t);return f[e]||c}(t.url)}(t)]||y}const p={},c="text/plain",y=p[c],f={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const v in f)p[f[v]]=v;var d=r(25929);function h(t){const e=t?.origins??[void 0];return(r,o)=>{const p=function(t,e,r){if("resource"===t?.type)return function(t,e,r){const o=(0,s.VZ)(e,r);return{type:String,read:(t,e,r)=>{const n=(0,d.r)(t,e,r);return o.type===String?n:"function"==typeof o.type?new o.type({url:n}):void 0},write:{writer(e,s,l,p){if(!p||!p.resources)return"string"==typeof e?void(s[l]=(0,d.t)(e,p)):void(s[l]=e.write({},p));const c=function(t){return null==t?null:"string"==typeof t?t:t.url}(e),y=(0,d.t)(c,{...p,verifyItemRelativeUrls:p&&p.verifyItemRelativeUrls?{writtenUrls:p.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},d.M.NO),f=o.type!==String&&(!(0,n.l)(this)||p&&p.origin&&this.originIdOf(r)>(0,a.M9)(p.origin)),h={object:this,propertyName:r,value:e,targetUrl:y,dest:s,targetPropertyName:l,context:p,params:t};p&&p.portalItem&&y&&!(0,i.YP)(y)?f?function(t){const{context:e,targetUrl:r,params:n,value:o,dest:s,targetPropertyName:a}=t;if(!e.portalItem)return;const l=e.portalItem.resourceFromPath(r),p=b(o,r,e),c=u(p),y=(0,i.Ml)(l.path),f=n?.compress??!1;c===y?(e.resources&&m({...t,resource:l,content:p,compress:f,updates:e.resources.toUpdate}),s[a]=r):g(t)}(h):function({context:t,targetUrl:e,dest:r,targetPropertyName:n}){t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(e),compress:!1}),r[n]=e)}(h):p&&p.portalItem&&(null==y||null!=(0,d.i)(y)||(0,i.jc)(y)||f)?g(h):s[l]=y}}}}(t,e,r);switch(t?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:t,write:e}=d.a;return{read:t,write:e}}}}(t,r,o);for(const t of e){const e=(0,l.CJ)(r,t,o);for(const t in p)e[t]=p[t]}}}function g(t){const{targetUrl:e,params:n,value:s,context:a,dest:l,targetPropertyName:p}=t;if(!a.portalItem)return;const c=(0,d.p)(e),y=c?.filename??(0,o.D)(),f=n?.prefix??c?.prefix,h=b(s,e,a),g=(0,i.v_)(f,y),v=`${g}.${u(h)}`,x=a.portalItem.resourceFromPath(v);(0,i.jc)(e)&&a.resources&&a.resources.pendingOperations.push(async function(t){const e=(await Promise.resolve().then(r.bind(r,3172))).default,{data:n}=await e(t,{responseType:"blob"});return n}(e).then((t=>{x.path=`${g}.${u(t)}`,l[p]=x.itemRelativeUrl})).catch((()=>{})));const I=n?.compress??!1;a.resources&&m({...t,resource:x,content:h,compress:I,updates:a.resources.toAdd}),l[p]=x.itemRelativeUrl}function m({object:t,propertyName:e,updates:r,resource:n,content:i,compress:o}){r.push({resource:n,content:i,compress:o,finish:r=>{!function(t,e,r){"string"==typeof t[e]?t[e]=r.url:t[e].url=r.url}(t,e,r)}})}function b(t,e,r){return"string"==typeof t?{url:e}:new Blob([JSON.stringify(t.toJSON(r))],{type:"application/json"})}},81153:(t,e,r)=>{function n(t){return t&&"getAtOrigin"in t&&"originOf"in t}r.d(e,{l:()=>n})},41123:(t,e,r)=>{r.d(e,{D:()=>i});const n="randomUUID"in crypto;function i(){if(n)return crypto.randomUUID();const t=crypto.getRandomValues(new Uint16Array(8));t[3]=4095&t[3]|16384,t[4]=16383&t[4]|32768;const e=e=>t[e].toString(16).padStart(4,"0");return e(0)+e(1)+"-"+e(2)+"-"+e(3)+"-"+e(4)+"-"+e(5)+e(6)+e(7)}},60437:(t,e,r)=>{r.d(e,{Gv:()=>b,HH:()=>a,JR:()=>h,TC:()=>l,Tn:()=>y,Ue:()=>o,al:()=>s,cS:()=>d,dp:()=>p,fS:()=>m,op:()=>c,pp:()=>u,t8:()=>f});var n=r(70586),i=r(6570);function o(t=v){return[t[0],t[1],t[2],t[3],t[4],t[5]]}function s(t,e,r,n,i,s,a=o()){return a[0]=t,a[1]=e,a[2]=r,a[3]=n,a[4]=i,a[5]=s,a}function a(t,e){const r=isFinite(t[2])||isFinite(t[5]);return new i.Z(r?{xmin:t[0],xmax:t[3],ymin:t[1],ymax:t[4],zmin:t[2],zmax:t[5],spatialReference:e}:{xmin:t[0],xmax:t[3],ymin:t[1],ymax:t[4],spatialReference:e})}function l(t,e){t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.min(t[2],e[2]),t[3]=Math.max(t[3],e[3]),t[4]=Math.max(t[4],e[4]),t[5]=Math.max(t[5],e[5])}function u(t,e){t[0]=Math.min(t[0],e[0]),t[1]=Math.min(t[1],e[1]),t[2]=Math.min(t[2],e[2]),t[3]=Math.max(t[3],e[0]),t[4]=Math.max(t[4],e[1]),t[5]=Math.max(t[5],e[2])}function p(t,e=[0,0,0]){return e[0]=function(t){return t[0]>=t[3]?0:t[3]-t[0]}(t),e[1]=function(t){return t[1]>=t[4]?0:t[4]-t[1]}(t),e[2]=function(t){return t[2]>=t[5]?0:t[5]-t[2]}(t),e}function c(t,e,r=t){return r[0]=e[0],r[1]=e[1],r[2]=e[2],r!==t&&(r[3]=t[3],r[4]=t[4],r[5]=t[5]),r}function y(t,e,r=t){return r[3]=e[0],r[4]=e[1],r[5]=e[2],r!==t&&(r[0]=t[0],r[1]=t[1],r[2]=t[2]),t}function f(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function d(t){return t?f(t,b):o(b)}function h(t,e){return t[0]=e[0],t[1]=e[1],t[2]=Number.NEGATIVE_INFINITY,t[3]=e[2],t[4]=e[3],t[5]=Number.POSITIVE_INFINITY,t}function g(t){return 6===t.length}function m(t,e,r){if((0,n.Wi)(t)||(0,n.Wi)(e))return t===e;if(!g(t)||!g(e))return!1;if(r){for(let n=0;n<t.length;n++)if(!r(t[n],e[n]))return!1}else for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}r(24470);const b=[1/0,1/0,1/0,-1/0,-1/0,-1/0],v=[0,0,0,0,0,0];o()},30690:(t,e,r)=>{r.r(e),r.d(e,{default:()=>Z});var n=r(43697),i=r(4757),o=r(70586);function s(t,e){return a(t)===a(e)}function a(t){if((0,o.Wi)(t))return null;const e=null!=t.layer?t.layer.id:"";let r=null;return r=null!=t.objectId?t.objectId:null!=t.layer&&"objectIdField"in t.layer&&null!=t.layer.objectIdField&&null!=t.attributes?t.attributes[t.layer.objectIdField]:t.uid,null==r?null:`o-${e}-${r}`}const l={json:{write:{writer:function(t,e){(0,o.Wi)(t)||null==t.layer?.objectIdField||null==t.attributes||(e.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(t){if(null!=t.layerId&&null!=t.objectId)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}}}}};var u=r(15923),p=r(2368),c=r(96674),y=r(5600),f=(r(67676),r(75215),r(52011)),d=r(28659),h=r(94139),g=r(86787);let m=class extends((0,c.eC)((0,p.J)(u.Z))){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return(0,o._W)(this.position,t.position)&&(0,o._W)(this.elevationInfo,t.elevationInfo)&&s(this.feature,t.feature)}};(0,n._)([(0,y.Cb)({type:h.Z}),(0,d.B)()],m.prototype,"position",void 0),(0,n._)([(0,y.Cb)({type:g.Z}),(0,d.B)()],m.prototype,"elevationInfo",void 0),(0,n._)([(0,y.Cb)(l)],m.prototype,"feature",void 0),m=(0,n._)([(0,f.j)("esri.analysis.LineOfSightAnalysisObserver")],m);const b=m;let v=class extends((0,c.eC)(p.j)){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return(0,o._W)(this.position,t.position)&&(0,o._W)(this.elevationInfo,t.elevationInfo)&&s(this.feature,t.feature)}};(0,n._)([(0,y.Cb)({type:h.Z}),(0,d.B)()],v.prototype,"position",void 0),(0,n._)([(0,y.Cb)({type:g.Z}),(0,d.B)()],v.prototype,"elevationInfo",void 0),(0,n._)([(0,y.Cb)(l)],v.prototype,"feature",void 0),v=(0,n._)([(0,f.j)("esri.analysis.LineOfSightAnalysisTarget")],v);const x=v;var I=r(46791),C=r(70921),w=r(17445),j=r(44547),_=r(60437);r(12541);const O={mode:"absolute-height",offset:0},R={mode:"on-the-ground",offset:null},N=I.Z.ofType(x);let S=class extends i.Z{constructor(t){super(t),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles((0,w.YP)((()=>this._computeExtent()),(t=>{((0,o.Wi)(t)||(0,o.Wi)(t.pending))&&this._set("extent",(0,o.pC)(t)?t.extent:null)}),w.tX))}get targets(){return this._get("targets")||new N}set targets(t){this._set("targets",(0,C.Z)(t,this.targets,N))}get spatialReference(){return(0,o.pC)(this.observer)&&(0,o.pC)(this.observer.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[(0,o.yw)(this.observer,(t=>t.position))]}async waitComputeExtent(){const t=this._computeExtent();return(0,o.pC)(t)?(0,o.Wg)(t.pending):null}_computeExtent(){const t=this.spatialReference;if((0,o.Wi)(this.observer)||(0,o.Wi)(this.observer.position)||(0,o.Wi)(t))return null;const e=t=>"absolute-height"===function(t,e){return function(t,e){return(0,o.Wi)(e)||!e.mode?function(t){return t?O:R}(t).mode:e.mode}(!!(0,o.pC)(t)&&t.hasZ,e)}(t.position,t.elevationInfo),r=this.observer.position,n=(0,_.al)(r.x,r.y,r.z,r.x,r.y,r.z);for(const s of this.targets)if((0,o.pC)(s.position)){const e=(0,j.dz)(s.position,t);if((0,o.pC)(e.pending))return{pending:e.pending,extent:null};if((0,o.pC)(e.geometry)){const{x:t,y:r,z:i}=e.geometry;(0,_.pp)(n,[t,r,i])}}const i=(0,_.HH)(n,t);return e(this.observer)&&this.targets.every(e)||(i.zmin=null,i.zmax=null),{pending:null,extent:i}}clear(){this.observer=null,this.targets.removeAll()}};(0,n._)([(0,y.Cb)({type:["line-of-sight"]})],S.prototype,"type",void 0),(0,n._)([(0,y.Cb)({type:b,json:{read:!0,write:!0}})],S.prototype,"observer",void 0),(0,n._)([(0,y.Cb)({cast:C.R,type:N,nonNullable:!0,json:{read:!0,write:!0}})],S.prototype,"targets",null),(0,n._)([(0,y.Cb)({value:null,readOnly:!0})],S.prototype,"extent",void 0),(0,n._)([(0,y.Cb)({readOnly:!0})],S.prototype,"spatialReference",null),(0,n._)([(0,y.Cb)({readOnly:!0})],S.prototype,"requiredPropertiesForEditing",null),S=(0,n._)([(0,f.j)("esri.analysis.LineOfSightAnalysis")],S);const U=S;var M=r(16453),P=r(87085),W=r(38009);const z=I.Z.ofType(x);let F=class extends((0,W.q)((0,M.R)(P.Z))){constructor(t){super(t),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new U,this.opacity=1}initialize(){this.addHandles((0,w.YP)((()=>this.analysis),((t,e)=>{(0,o.pC)(e)&&e.parent===this&&(e.parent=null),(0,o.pC)(t)&&(t.parent=this)}),w.tX))}async load(){return(0,o.pC)(this.analysis)&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return(0,o.yw)(this.analysis,(t=>t.observer))}set observer(t){(0,o.yw)(this.analysis,(e=>e.observer=t))}get targets(){return(0,o.pC)(this.analysis)?this.analysis.targets:new I.Z}set targets(t){(0,C.Z)(t,this.analysis?.targets)}get fullExtent(){return(0,o.pC)(this.analysis)?this.analysis.extent:null}get spatialReference(){return(0,o.pC)(this.analysis)?(0,o.Wg)(this.analysis.spatialReference):null}releaseAnalysis(t){this.analysis===t&&(this.analysis=new U)}};(0,n._)([(0,y.Cb)({json:{read:!1},readOnly:!0})],F.prototype,"type",void 0),(0,n._)([(0,y.Cb)({type:["LineOfSightLayer"]})],F.prototype,"operationalLayerType",void 0),(0,n._)([(0,y.Cb)({type:b,json:{read:!0,write:{ignoreOrigin:!0}}})],F.prototype,"observer",null),(0,n._)([(0,y.Cb)({type:z,json:{read:!0,write:{ignoreOrigin:!0}}})],F.prototype,"targets",null),(0,n._)([(0,y.Cb)({nonNullable:!0,json:{read:!1,write:!1}})],F.prototype,"analysis",void 0),(0,n._)([(0,y.Cb)({readOnly:!0})],F.prototype,"fullExtent",null),(0,n._)([(0,y.Cb)({readOnly:!0})],F.prototype,"spatialReference",null),(0,n._)([(0,y.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],F.prototype,"opacity",void 0),(0,n._)([(0,y.Cb)({type:["show","hide"]})],F.prototype,"listMode",void 0),F=(0,n._)([(0,f.j)("esri.layers.LineOfSightLayer")],F);const Z=F}}]);