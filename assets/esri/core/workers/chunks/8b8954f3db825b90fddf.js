"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[911],{17017:(e,t,r)=>{r.d(t,{N:()=>o});var n=r(43697),i=r(5600),s=(r(67676),r(75215),r(52011));const o=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return(0,n._)([(0,i.Cb)({type:Object,json:{write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0)})}}})],t.prototype,"customParameters",void 0),t=(0,n._)([(0,s.j)("esri.layers.mixins.CustomParametersMixin")],t),t}},34760:(e,t,r)=>{r.d(t,{Q:()=>w});var n=r(43697),i=r(92604),s=r(95330),o=r(5600),l=(r(67676),r(75215),r(52011)),a=r(46791),c=(r(80442),r(20102),r(26258),r(87538));const p=new a.Z,u=new WeakMap;function b(e){return null!=e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function d(e,t){return Number.isFinite(e)&&Number.isFinite(t)?t<=0?e:d(t,e%t):0}let f=0,m=0;function h(){const e=Date.now();for(const t of p)t.refreshInterval&&e-(u.get(t)??0)+5>=6e4*t.refreshInterval&&(u.set(t,e),t.refresh(e))}(0,c.EH)((()=>{const e=Date.now();let t=0;for(const r of p)t=d(Math.round(6e4*r.refreshInterval),t),r.refreshInterval?u.get(r)||u.set(r,e):u.delete(r);if(t!==m){if(m=t,clearInterval(f),0===m)return void(f=0);f=setInterval(h,m)}}));const w=e=>{let t=class extends e{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,s.Ds)((()=>this.hasDataChanged())),this.when().then((()=>{!function(e){b(e)&&p.push(e)}(this)}),(()=>{}))}destroy(){b(this)&&p.includes(this)&&p.remove(this)}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){(0,s.R8)(this._debounceHasDataChanged()).then((t=>{t&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:t})}),(e=>{i.Z.getLogger(this.declaredClass).error(e),this.emit("refresh",{dataChanged:!1,error:e})}))}async hasDataChanged(){return!0}};return(0,n._)([(0,o.Cb)({type:Number,cast:e=>e>=.1?e:e<=0?0:.1,json:{write:!0}})],t.prototype,"refreshInterval",void 0),(0,n._)([(0,o.Cb)({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),(0,n._)([(0,o.Cb)()],t.prototype,"refreshParameters",null),t=(0,n._)([(0,l.j)("esri.layers.mixins.RefreshableLayer")],t),t}},54306:(e,t,r)=>{r.d(t,{Z:()=>C});var n,i=r(43697),s=r(9790),o=r(35454),l=r(96674),a=r(22974),c=r(62357),p=r(5600),u=(r(75215),r(71715)),b=r(52011),d=r(30556),f=(r(67676),r(8813));let m=n=class extends l.wq{constructor(){super(...arguments),this.expression=null,this.title=null,this.value=null}readExpression(e,t){return t.value?(0,f.dI)(t.value):e}writeExpression(e,t,r){null!=this.value&&(e=(0,f.dI)(this.value)),null!=e&&(t[r]=e)}clone(){return new n({expression:this.expression,title:this.title,value:this.value})}};(0,i._)([(0,p.Cb)({type:String,json:{write:{writerEnsuresNonNull:!0}}})],m.prototype,"expression",void 0),(0,i._)([(0,u.r)("expression",["expression","value"])],m.prototype,"readExpression",null),(0,i._)([(0,d.c)("expression")],m.prototype,"writeExpression",null),(0,i._)([(0,p.Cb)({type:String,json:{write:!0,origins:{"web-scene":{write:!1}}}})],m.prototype,"title",void 0),(0,i._)([(0,p.Cb)({json:{read:!1,write:!1}})],m.prototype,"value",void 0),m=n=(0,i._)([(0,b.j)("esri.layers.support.LabelExpressionInfo")],m);const h=m;var w,v=r(28412),y=r(21878);const g=new o.X({esriServerPointLabelPlacementAboveCenter:"above-center",esriServerPointLabelPlacementAboveLeft:"above-left",esriServerPointLabelPlacementAboveRight:"above-right",esriServerPointLabelPlacementBelowCenter:"below-center",esriServerPointLabelPlacementBelowLeft:"below-left",esriServerPointLabelPlacementBelowRight:"below-right",esriServerPointLabelPlacementCenterCenter:"center-center",esriServerPointLabelPlacementCenterLeft:"center-left",esriServerPointLabelPlacementCenterRight:"center-right",esriServerLinePlacementAboveAfter:"above-after",esriServerLinePlacementAboveAlong:"above-along",esriServerLinePlacementAboveBefore:"above-before",esriServerLinePlacementAboveStart:"above-start",esriServerLinePlacementAboveEnd:"above-end",esriServerLinePlacementBelowAfter:"below-after",esriServerLinePlacementBelowAlong:"below-along",esriServerLinePlacementBelowBefore:"below-before",esriServerLinePlacementBelowStart:"below-start",esriServerLinePlacementBelowEnd:"below-end",esriServerLinePlacementCenterAfter:"center-after",esriServerLinePlacementCenterAlong:"center-along",esriServerLinePlacementCenterBefore:"center-before",esriServerLinePlacementCenterStart:"center-start",esriServerLinePlacementCenterEnd:"center-end",esriServerPolygonPlacementAlwaysHorizontal:"always-horizontal"},{ignoreUnknown:!0});function x(e){return!e||"service"!==e.origin&&!("map-image"===e.layer?.type)}function S(e){return!!function(e){return"map-image"===e?.type}(e)&&!!e.capabilities?.exportMap?.supportsArcadeExpressionForLabeling}let L=w=class extends l.wq{constructor(e){super(e),this.type="label",this.name=null,this.allowOverrun=!1,this.deconflictionStrategy="static",this.labelExpression=null,this.labelExpressionInfo=null,this.labelPlacement=null,this.labelPosition="curved",this.maxScale=0,this.minScale=0,this.repeatLabel=!0,this.repeatLabelDistance=null,this.symbol=v.Rz,this.useCodedValues=void 0,this.where=null}static evaluateWhere(e,t){const r=(e,t,r)=>{switch(t){case"=":return e==r;case"<>":return e!=r;case">":return e>r;case">=":return e>=r;case"<":return e<r;case"<=":return e<=r}return!1};try{if(null==e)return!0;const n=e.split(" ");if(3===n.length)return r(t[n[0]],n[1],n[2]);if(7===n.length){const e=r(t[n[0]],n[1],n[2]),i=n[3],s=r(t[n[4]],n[5],n[6]);switch(i){case"AND":return e&&s;case"OR":return e||s}}return!1}catch(t){console.log("Error.: can't parse = "+e)}}readLabelExpression(e,t){const r=t.labelExpressionInfo;if(!r||!r.value&&!r.expression)return e}writeLabelExpression(e,t,r){if(this.labelExpressionInfo)if(null!=this.labelExpressionInfo.value)e=(0,f.z7)(this.labelExpressionInfo.value);else if(null!=this.labelExpressionInfo.expression){const t=(0,f.el)(this.labelExpressionInfo.expression);t&&(e="["+t+"]")}null!=e&&(t[r]=e)}writeLabelExpressionInfo(e,t,r,n){if(null==e&&null!=this.labelExpression&&x(n))e=new h({expression:this.getLabelExpressionArcade()});else if(!e)return;const i=e.toJSON(n);i.expression&&(t[r]=i)}writeMaxScale(e,t){(e||this.minScale)&&(t.maxScale=e)}writeMinScale(e,t){(e||this.maxScale)&&(t.minScale=e)}getLabelExpression(){return(0,f.hV)(this)}getLabelExpressionArcade(){return(0,f.YI)(this)}getLabelExpressionSingleField(){return(0,f.UO)(this)}hash(){return JSON.stringify(this)}clone(){return new w({allowOverrun:this.allowOverrun,deconflictionStrategy:this.deconflictionStrategy,labelExpression:this.labelExpression,labelExpressionInfo:(0,a.d9)(this.labelExpressionInfo),labelPosition:this.labelPosition,labelPlacement:this.labelPlacement,maxScale:this.maxScale,minScale:this.minScale,name:this.name,repeatLabel:this.repeatLabel,repeatLabelDistance:this.repeatLabelDistance,symbol:(0,a.d9)(this.symbol),where:this.where,useCodedValues:this.useCodedValues})}};(0,i._)([(0,p.Cb)({type:String,json:{write:!0}})],L.prototype,"name",void 0),(0,i._)([(0,p.Cb)({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1}}}})],L.prototype,"allowOverrun",void 0),(0,i._)([(0,p.Cb)({type:String,json:{write:!0,default:"static",origins:{"web-scene":{write:!1}}}})],L.prototype,"deconflictionStrategy",void 0),(0,i._)([(0,p.Cb)({type:String,json:{write:{overridePolicy(e,t,r){return this.labelExpressionInfo&&"service"===r?.origin&&S(r.layer)?{enabled:!1}:{allowNull:!0}}}}})],L.prototype,"labelExpression",void 0),(0,i._)([(0,u.r)("labelExpression")],L.prototype,"readLabelExpression",null),(0,i._)([(0,d.c)("labelExpression")],L.prototype,"writeLabelExpression",null),(0,i._)([(0,p.Cb)({type:h,json:{write:{overridePolicy:(e,t,r)=>function(e){return x(e)||S(e.layer)}(r)?{allowNull:!0}:{enabled:!1}}}})],L.prototype,"labelExpressionInfo",void 0),(0,i._)([(0,d.c)("labelExpressionInfo")],L.prototype,"writeLabelExpressionInfo",null),(0,i._)([(0,p.Cb)({type:g.apiValues,json:{type:g.jsonValues,read:g.read,write:g.write}})],L.prototype,"labelPlacement",void 0),(0,i._)([(0,p.Cb)({type:["curved","parallel"],json:{write:!0,origins:{"web-map":{write:!1},"web-scene":{write:!1},"portal-item":{write:!1}}}})],L.prototype,"labelPosition",void 0),(0,i._)([(0,p.Cb)({type:Number})],L.prototype,"maxScale",void 0),(0,i._)([(0,d.c)("maxScale")],L.prototype,"writeMaxScale",null),(0,i._)([(0,p.Cb)({type:Number})],L.prototype,"minScale",void 0),(0,i._)([(0,d.c)("minScale")],L.prototype,"writeMinScale",null),(0,i._)([(0,p.Cb)({type:Boolean,json:{write:!0,origins:{"web-scene":{write:!1},"portal-item":{write:!1}}}})],L.prototype,"repeatLabel",void 0),(0,i._)([(0,p.Cb)({type:Number,cast:c.t_,json:{write:!0,origins:{"web-scene":{write:!1}}}})],L.prototype,"repeatLabelDistance",void 0),(0,i._)([(0,p.Cb)({types:s.yK,json:{origins:{"web-scene":{types:s.S6,write:y.vX,default:null}},write:y.vX,default:null}})],L.prototype,"symbol",void 0),(0,i._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],L.prototype,"useCodedValues",void 0),(0,i._)([(0,p.Cb)({type:String,json:{write:!0}})],L.prototype,"where",void 0),L=w=(0,i._)([(0,b.j)("esri.layers.support.LabelClass")],L);const C=L},8813:(e,t,r)=>{r.d(t,{UO:()=>d,YI:()=>b,dI:()=>f,el:()=>y,hV:()=>u,z7:()=>p});var n=r(19153);const i="__begin__",s="__end__",o=new RegExp(i,"ig"),l=new RegExp(s,"ig"),a=new RegExp("^"+i,"i"),c=new RegExp(s+"$","i");function p(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}function u(e){const t={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(t.expression=e.labelExpressionInfo.value,t.type="conventional"):e.labelExpressionInfo.expression&&(t.expression=e.labelExpressionInfo.expression,t.type="arcade"):null!=e.labelExpression&&(t.expression=function(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}(e.labelExpression),t.type="conventional"),t}function b(e){const t=u(e);if(!t)return null;switch(t.type){case"conventional":return f(t.expression);case"arcade":return t.expression}return null}function d(e){const t=u(e);if(!t)return null;switch(t.type){case"conventional":return function(e){const t=e.match(m);return t&&t[1].trim()||null}(t.expression);case"arcade":return y(t.expression)}return null}function f(e){let t;return e?(t=(0,n.gx)(e,(e=>i+'$feature["'+e+'"]'+s)),t=a.test(t)?t.replace(a,""):'"'+t,t=c.test(t)?t.replace(c,""):t+'"',t=t.replace(o,'" + ').replace(l,' + "')):t='""',t}const m=/^\s*\{([^}]+)\}\s*$/i,h=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,w=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,v=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function y(e){if(!e)return null;let t=h.exec(e)||w.exec(e);return t?t[1]||t[3]:(t=v.exec(e),t?t[2]:null)}},30707:(e,t,r)=>{r.d(t,{a:()=>u,r:()=>c});var n=r(20102),i=r(22974),s=r(92604),o=r(54306);const l=s.Z.getLogger("esri.layers.support.labelingInfo"),a=/\[([^\[\]]+)\]/gi;function c(e,t,r){return e?e.map((e=>{const n=new o.Z;if(n.read(e,r),n.labelExpression){const e=t.fields||t.layerDefinition&&t.layerDefinition.fields||this.fields;n.labelExpression=n.labelExpression.replace(a,((t,r)=>`[${function(e,t){if(!t)return e;const r=e.toLowerCase();for(let n=0;n<t.length;n++){const e=t[n].name;if(e.toLowerCase()===r)return e}return e}(r,e)}]`))}return n})):null}const p={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function u(e,t){const r=(0,i.d9)(e);return r.some((e=>function(e,t){const r=e.labelPlacement,i=p[t];if(!e.symbol)return l.warn("No ILabelClass symbol specified."),!0;if(!i)return l.error(new n.Z("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${t}' is not supported`)),!0;if(!i.includes(r)){const n=i[0];r&&l.warn(`Found invalid label placement type ${r} for ${t}. Defaulting to ${n}`),e.labelPlacement=n}return!1}(e,t)))?[]:r}},32163:(e,t,r)=>{r.d(t,{eZ:()=>u});var n=r(51773),i=r(35671),s=r(84649),o=(r(63801),r(48074),r(38745),r(9190)),l=(r(10214),r(71423),r(44951),r(422)),a=r(63061);const c=["oid","global-id"],p=["oid","global-id","guid"];function u({displayField:e,editFieldsInfo:t,fields:r,objectIdField:a,title:c},p){if(!r)return null;const u=function({editFieldsInfo:e,fields:t,objectIdField:r},n){return function(e,t){const r=e;return t&&(e=e.filter((e=>!t.includes(e.type)))),e===r&&(e=e.slice()),e.sort(f),e}(t??[],n?.ignoreFieldTypes||y).map((t=>new l.Z({fieldName:t.name,isEditable:h(t,e),label:t.alias,format:w(t),visible:d(t,{editFieldsInfo:e,objectIdField:r,visibleFieldNames:n?.visibleFieldNames})})))}({editFieldsInfo:t,fields:r,objectIdField:a},p);if(!u.length)return null;const b=function(e){const t=(0,i.O5)(e),{titleBase:r}=e;return t?`${r}: {${t.trim()}}`:r??""}({titleBase:c,fields:r,displayField:e}),m=[new o.Z,new s.Z];return new n.Z({title:b,content:m,fieldInfos:u})}const b=[/^fnode_$/i,/^tnode_$/i,/^lpoly_$/i,/^rpoly_$/i,/^poly_$/i,/^subclass$/i,/^subclass_$/i,/^rings_ok$/i,/^rings_nok$/i,/shape/i,/perimeter/i,/objectid/i,/_i$/i],d=(e,{editFieldsInfo:t,objectIdField:r,visibleFieldNames:n})=>n?n.has(e.name):!(m(e.name,t)||r&&e.name===r||c.includes(e.type)||b.some((t=>t.test(e.name))));function f(e,t){return"oid"===e.type?-1:"oid"===t.type?1:v(e)?-1:v(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function m(e,t){if(!e||!t)return!1;const{creationDateField:r,creatorField:n,editDateField:i,editorField:s}=t;return[r&&r.toLowerCase(),n&&n.toLowerCase(),i&&i.toLowerCase(),s&&s.toLowerCase()].includes(e.toLowerCase())}function h(e,t){return e.editable&&!p.includes(e.type)&&!m(e.name,t)}function w(e){switch(e.type){case"small-integer":case"integer":case"single":return new a.Z({digitSeparator:!0,places:0});case"double":return new a.Z({digitSeparator:!0,places:2});case"date":return new a.Z({dateFormat:"long-month-day-year"});default:return"string"===e.type&&(0,i.Ec)(e.name)?new a.Z({digitSeparator:!0,places:0}):null}}function v(e){return"name"===(e.name&&e.name.toLowerCase())||"name"===(e.alias&&e.alias.toLowerCase())}const y=["geometry","blob","raster","guid","xml"]},28412:(e,t,r)=>{r.d(t,{CJ:()=>c,Rz:()=>u,xA:()=>a,z3:()=>p}),r(80442);var n=r(20256),i=r(4095),s=r(77987),o=r(78724),l=r(58333);const a=s.Z.fromJSON(l.I4),c=i.Z.fromJSON(l.ET),p=n.Z.fromJSON(l.lF),u=o.Z.fromJSON(l.qP);s.Z.fromJSON(l.eG),i.Z.fromJSON(l.wW),n.Z.fromJSON(l.lj)}}]);