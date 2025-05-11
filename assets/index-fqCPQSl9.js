(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var ah={exports:{}},zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function US(){if(Eg)return zo;Eg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return zo.Fragment=t,zo.jsx=i,zo.jsxs=i,zo}var Tg;function LS(){return Tg||(Tg=1,ah.exports=US()),ah.exports}LS();var sh={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function NS(){if(bg)return se;bg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function y(L,tt,vt){this.props=L,this.context=tt,this.refs=R,this.updater=vt||S}y.prototype.isReactComponent={},y.prototype.setState=function(L,tt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,tt,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function g(){}g.prototype=y.prototype;function z(L,tt,vt){this.props=L,this.context=tt,this.refs=R,this.updater=vt||S}var N=z.prototype=new g;N.constructor=z,E(N,y.prototype),N.isPureReactComponent=!0;var D=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},G=Object.prototype.hasOwnProperty;function F(L,tt,vt,St,J,dt){return vt=dt.ref,{$$typeof:r,type:L,key:tt,ref:vt!==void 0?vt:null,props:dt}}function Z(L,tt){return F(L.type,tt,void 0,void 0,void 0,L.props)}function w(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function C(L){var tt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(vt){return tt[vt]})}var V=/\/+/g;function lt(L,tt){return typeof L=="object"&&L!==null&&L.key!=null?C(""+L.key):tt.toString(36)}function rt(){}function gt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(rt,rt):(L.status="pending",L.then(function(tt){L.status==="pending"&&(L.status="fulfilled",L.value=tt)},function(tt){L.status==="pending"&&(L.status="rejected",L.reason=tt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ht(L,tt,vt,St,J){var dt=typeof L;(dt==="undefined"||dt==="boolean")&&(L=null);var xt=!1;if(L===null)xt=!0;else switch(dt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(L.$$typeof){case r:case t:xt=!0;break;case _:return xt=L._init,ht(xt(L._payload),tt,vt,St,J)}}if(xt)return J=J(L),xt=St===""?"."+lt(L,0):St,D(J)?(vt="",xt!=null&&(vt=xt.replace(V,"$&/")+"/"),ht(J,tt,vt,"",function(le){return le})):J!=null&&(w(J)&&(J=Z(J,vt+(J.key==null||L&&L.key===J.key?"":(""+J.key).replace(V,"$&/")+"/")+xt)),tt.push(J)),1;xt=0;var bt=St===""?".":St+":";if(D(L))for(var Dt=0;Dt<L.length;Dt++)St=L[Dt],dt=bt+lt(St,Dt),xt+=ht(St,tt,vt,dt,J);else if(Dt=x(L),typeof Dt=="function")for(L=Dt.call(L),Dt=0;!(St=L.next()).done;)St=St.value,dt=bt+lt(St,Dt++),xt+=ht(St,tt,vt,dt,J);else if(dt==="object"){if(typeof L.then=="function")return ht(gt(L),tt,vt,St,J);throw tt=String(L),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return xt}function O(L,tt,vt){if(L==null)return L;var St=[],J=0;return ht(L,St,"","",function(dt){return tt.call(vt,dt,J++)}),St}function Q(L){if(L._status===-1){var tt=L._result;tt=tt(),tt.then(function(vt){(L._status===0||L._status===-1)&&(L._status=1,L._result=vt)},function(vt){(L._status===0||L._status===-1)&&(L._status=2,L._result=vt)}),L._status===-1&&(L._status=0,L._result=tt)}if(L._status===1)return L._result.default;throw L._result}var Y=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Mt(){}return se.Children={map:O,forEach:function(L,tt,vt){O(L,function(){tt.apply(this,arguments)},vt)},count:function(L){var tt=0;return O(L,function(){tt++}),tt},toArray:function(L){return O(L,function(tt){return tt})||[]},only:function(L){if(!w(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},se.Component=y,se.Fragment=i,se.Profiler=l,se.PureComponent=z,se.StrictMode=s,se.Suspense=p,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,se.__COMPILER_RUNTIME={__proto__:null,c:function(L){return H.H.useMemoCache(L)}},se.cache=function(L){return function(){return L.apply(null,arguments)}},se.cloneElement=function(L,tt,vt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var St=E({},L.props),J=L.key,dt=void 0;if(tt!=null)for(xt in tt.ref!==void 0&&(dt=void 0),tt.key!==void 0&&(J=""+tt.key),tt)!G.call(tt,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&tt.ref===void 0||(St[xt]=tt[xt]);var xt=arguments.length-2;if(xt===1)St.children=vt;else if(1<xt){for(var bt=Array(xt),Dt=0;Dt<xt;Dt++)bt[Dt]=arguments[Dt+2];St.children=bt}return F(L.type,J,void 0,void 0,dt,St)},se.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},se.createElement=function(L,tt,vt){var St,J={},dt=null;if(tt!=null)for(St in tt.key!==void 0&&(dt=""+tt.key),tt)G.call(tt,St)&&St!=="key"&&St!=="__self"&&St!=="__source"&&(J[St]=tt[St]);var xt=arguments.length-2;if(xt===1)J.children=vt;else if(1<xt){for(var bt=Array(xt),Dt=0;Dt<xt;Dt++)bt[Dt]=arguments[Dt+2];J.children=bt}if(L&&L.defaultProps)for(St in xt=L.defaultProps,xt)J[St]===void 0&&(J[St]=xt[St]);return F(L,dt,void 0,void 0,null,J)},se.createRef=function(){return{current:null}},se.forwardRef=function(L){return{$$typeof:d,render:L}},se.isValidElement=w,se.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:Q}},se.memo=function(L,tt){return{$$typeof:m,type:L,compare:tt===void 0?null:tt}},se.startTransition=function(L){var tt=H.T,vt={};H.T=vt;try{var St=L(),J=H.S;J!==null&&J(vt,St),typeof St=="object"&&St!==null&&typeof St.then=="function"&&St.then(Mt,Y)}catch(dt){Y(dt)}finally{H.T=tt}},se.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},se.use=function(L){return H.H.use(L)},se.useActionState=function(L,tt,vt){return H.H.useActionState(L,tt,vt)},se.useCallback=function(L,tt){return H.H.useCallback(L,tt)},se.useContext=function(L){return H.H.useContext(L)},se.useDebugValue=function(){},se.useDeferredValue=function(L,tt){return H.H.useDeferredValue(L,tt)},se.useEffect=function(L,tt,vt){var St=H.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return St.useEffect(L,tt)},se.useId=function(){return H.H.useId()},se.useImperativeHandle=function(L,tt,vt){return H.H.useImperativeHandle(L,tt,vt)},se.useInsertionEffect=function(L,tt){return H.H.useInsertionEffect(L,tt)},se.useLayoutEffect=function(L,tt){return H.H.useLayoutEffect(L,tt)},se.useMemo=function(L,tt){return H.H.useMemo(L,tt)},se.useOptimistic=function(L,tt){return H.H.useOptimistic(L,tt)},se.useReducer=function(L,tt,vt){return H.H.useReducer(L,tt,vt)},se.useRef=function(L){return H.H.useRef(L)},se.useState=function(L){return H.H.useState(L)},se.useSyncExternalStore=function(L,tt,vt){return H.H.useSyncExternalStore(L,tt,vt)},se.useTransition=function(){return H.H.useTransition()},se.version="19.1.0",se}var Ag;function Dd(){return Ag||(Ag=1,sh.exports=NS()),sh.exports}Dd();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ud="176",PS=0,Rg=1,OS=2,Xv=1,zS=2,ha=3,$a=0,qn=1,da=2,_a=0,Rr=1,Cg=2,wg=3,Dg=4,IS=5,Cs=100,FS=101,BS=102,HS=103,GS=104,VS=200,kS=201,XS=202,WS=203,Vh=204,kh=205,qS=206,YS=207,jS=208,ZS=209,QS=210,KS=211,JS=212,$S=213,tM=214,Xh=0,Wh=1,qh=2,wr=3,Yh=4,jh=5,Zh=6,Qh=7,Wv=0,eM=1,nM=2,Ja=0,qv=1,Yv=2,jv=3,Zv=4,Qv=5,Kv=6,Jv=7,$v=300,Dr=301,Ur=302,Kh=303,Jh=304,Kc=306,$h=1e3,Ds=1001,td=1002,Di=1003,iM=1004,hc=1005,Fi=1006,rh=1007,Us=1008,Hi=1009,t0=1010,e0=1011,Zo=1012,Ld=1013,Ls=1014,pa=1015,Or=1016,Nd=1017,Pd=1018,Qo=1020,n0=35902,i0=1021,a0=1022,wi=1023,Ko=1026,Jo=1027,s0=1028,Od=1029,r0=1030,zd=1031,Id=1033,Ic=33776,Fc=33777,Bc=33778,Hc=33779,ed=35840,nd=35841,id=35842,ad=35843,sd=36196,rd=37492,od=37496,ld=37808,cd=37809,ud=37810,fd=37811,hd=37812,dd=37813,pd=37814,md=37815,_d=37816,gd=37817,vd=37818,xd=37819,Sd=37820,Md=37821,Gc=36492,yd=36494,Ed=36495,o0=36283,Td=36284,bd=36285,Ad=36286,aM=3200,sM=3201,l0=0,rM=1,Ka="",gi="srgb",Lr="srgb-linear",qc="linear",Le="srgb",fr=7680,Ug=519,oM=512,lM=513,cM=514,c0=515,uM=516,fM=517,hM=518,dM=519,Lg=35044,Ng="300 es",ma=2e3,Yc=2001;class Ns{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pg=1234567;const qo=Math.PI/180,$o=180/Math.PI;function zr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function he(r,t,i){return Math.max(t,Math.min(i,r))}function Fd(r,t){return(r%t+t)%t}function pM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function mM(r,t,i){return r!==t?(i-r)/(t-r):0}function Yo(r,t,i){return(1-i)*r+i*t}function _M(r,t,i,s){return Yo(r,t,1-Math.exp(-i*s))}function gM(r,t=1){return t-Math.abs(Fd(r,t*2)-t)}function vM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function xM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function SM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function MM(r,t){return r+Math.random()*(t-r)}function yM(r){return r*(.5-Math.random())}function EM(r){r!==void 0&&(Pg=r);let t=Pg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function TM(r){return r*qo}function bM(r){return r*$o}function AM(r){return(r&r-1)===0&&r!==0}function RM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function CM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function wM(r,t,i,s,l){const c=Math.cos,f=Math.sin,d=c(i/2),p=f(i/2),m=c((t+s)/2),_=f((t+s)/2),v=c((t-s)/2),x=f((t-s)/2),S=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(d*_,p*v,p*x,d*m);break;case"YZY":r.set(p*x,d*_,p*v,d*m);break;case"ZXZ":r.set(p*v,p*x,d*_,d*m);break;case"XZX":r.set(d*_,p*E,p*S,d*m);break;case"YXY":r.set(p*S,d*_,p*E,d*m);break;case"ZYZ":r.set(p*E,p*S,d*_,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function br(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function zn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const tn={DEG2RAD:qo,RAD2DEG:$o,generateUUID:zr,clamp:he,euclideanModulo:Fd,mapLinear:pM,inverseLerp:mM,lerp:Yo,damp:_M,pingpong:gM,smoothstep:vM,smootherstep:xM,randInt:SM,randFloat:MM,randFloatSpread:yM,seededRandom:EM,degToRad:TM,radToDeg:bM,isPowerOfTwo:AM,ceilPowerOfTwo:RM,floorPowerOfTwo:CM,setQuaternionFromProperEuler:wM,normalize:zn,denormalize:br};class xe{constructor(t=0,i=0){xe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=he(this.x,t.x,i.x),this.y=he(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=he(this.x,t,i),this.y=he(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(he(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(he(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class re{constructor(t,i,s,l,c,f,d,p,m){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,p,m)}set(t,i,s,l,c,f,d,p,m){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=p,_[6]=s,_[7]=f,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],p=s[6],m=s[1],_=s[4],v=s[7],x=s[2],S=s[5],E=s[8],R=l[0],y=l[3],g=l[6],z=l[1],N=l[4],D=l[7],H=l[2],G=l[5],F=l[8];return c[0]=f*R+d*z+p*H,c[3]=f*y+d*N+p*G,c[6]=f*g+d*D+p*F,c[1]=m*R+_*z+v*H,c[4]=m*y+_*N+v*G,c[7]=m*g+_*D+v*F,c[2]=x*R+S*z+E*H,c[5]=x*y+S*N+E*G,c[8]=x*g+S*D+E*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],_=t[8];return i*f*_-i*d*m-s*c*_+s*d*p+l*c*m-l*f*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],_=t[8],v=_*f-d*m,x=d*p-_*c,S=m*c-f*p,E=i*v+s*x+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=v*R,t[1]=(l*m-_*s)*R,t[2]=(d*s-l*f)*R,t[3]=x*R,t[4]=(_*i-l*p)*R,t[5]=(l*c-d*i)*R,t[6]=S*R,t[7]=(s*p-m*i)*R,t[8]=(f*i-s*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(oh.makeScale(t,i)),this}rotate(t){return this.premultiply(oh.makeRotation(-t)),this}translate(t,i){return this.premultiply(oh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const oh=new re;function u0(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function jc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function DM(){const r=jc("canvas");return r.style.display="block",r}const Og={};function Vc(r){r in Og||(Og[r]=!0,console.warn(r))}function UM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}function LM(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function NM(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const zg=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ig=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PM(){const r={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Le&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Le&&(l.r=Cr(l.r),l.g=Cr(l.g),l.b=Cr(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ka?qc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Lr]:{primaries:t,whitePoint:s,transfer:qc,toXYZ:zg,fromXYZ:Ig,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:s,transfer:Le,toXYZ:zg,fromXYZ:Ig,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),r}const be=PM();function ga(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Cr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let hr;class OM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{hr===void 0&&(hr=jc("canvas")),hr.width=t.width,hr.height=t.height;const l=hr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=hr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=jc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ga(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ga(i[s]/255)*255):i[s]=ga(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zM=0;class Bd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=zr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(lh(l[f].image)):c.push(lh(l[f]))}else c=lh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function lh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?OM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let IM=0;class Yn extends Ns{constructor(t=Yn.DEFAULT_IMAGE,i=Yn.DEFAULT_MAPPING,s=Ds,l=Ds,c=Fi,f=Us,d=wi,p=Hi,m=Yn.DEFAULT_ANISOTROPY,_=Ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=zr(),this.name="",this.source=new Bd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$v)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $h:t.x=t.x-Math.floor(t.x);break;case Ds:t.x=t.x<0?0:1;break;case td:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $h:t.y=t.y-Math.floor(t.y);break;case Ds:t.y=t.y<0?0:1;break;case td:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=$v;Yn.DEFAULT_ANISOTROPY=1;class Be{constructor(t=0,i=0,s=0,l=1){Be.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const p=t.elements,m=p[0],_=p[4],v=p[8],x=p[1],S=p[5],E=p[9],R=p[2],y=p[6],g=p[10];if(Math.abs(_-x)<.01&&Math.abs(v-R)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+R)<.1&&Math.abs(E+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(m+1)/2,D=(S+1)/2,H=(g+1)/2,G=(_+x)/4,F=(v+R)/4,Z=(E+y)/4;return N>D&&N>H?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=G/s,c=F/s):D>H?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=G/l,c=Z/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=F/c,l=Z/c),this.set(s,l,c,i),this}let z=Math.sqrt((y-E)*(y-E)+(v-R)*(v-R)+(x-_)*(x-_));return Math.abs(z)<.001&&(z=1),this.x=(y-E)/z,this.y=(v-R)/z,this.z=(x-_)/z,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=he(this.x,t.x,i.x),this.y=he(this.y,t.y,i.y),this.z=he(this.z,t.z,i.z),this.w=he(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=he(this.x,t,i),this.y=he(this.y,t,i),this.z=he(this.z,t,i),this.w=he(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(he(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FM extends Ns{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth?s.depth:1,this.scissor=new Be(0,0,t,i),this.scissorTest=!1,this.viewport=new Be(0,0,t,i);const l={width:t,height:i,depth:this.depth};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},s);const c=new Yn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Bd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends FM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class f0 extends Yn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Di,this.minFilter=Di,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class BM extends Yn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Di,this.minFilter=Di,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let p=s[l+0],m=s[l+1],_=s[l+2],v=s[l+3];const x=c[f+0],S=c[f+1],E=c[f+2],R=c[f+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=_,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=S,t[i+2]=E,t[i+3]=R;return}if(v!==R||p!==x||m!==S||_!==E){let y=1-d;const g=p*x+m*S+_*E+v*R,z=g>=0?1:-1,N=1-g*g;if(N>Number.EPSILON){const H=Math.sqrt(N),G=Math.atan2(H,g*z);y=Math.sin(y*G)/H,d=Math.sin(d*G)/H}const D=d*z;if(p=p*y+x*D,m=m*y+S*D,_=_*y+E*D,v=v*y+R*D,y===1-d){const H=1/Math.sqrt(p*p+m*m+_*_+v*v);p*=H,m*=H,_*=H,v*=H}}t[i]=p,t[i+1]=m,t[i+2]=_,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],p=s[l+1],m=s[l+2],_=s[l+3],v=c[f],x=c[f+1],S=c[f+2],E=c[f+3];return t[i]=d*E+_*v+p*S-m*x,t[i+1]=p*E+_*x+m*v-d*S,t[i+2]=m*E+_*S+d*x-p*v,t[i+3]=_*E-d*v-p*x-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(s/2),_=d(l/2),v=d(c/2),x=p(s/2),S=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=x*_*v+m*S*E,this._y=m*S*v-x*_*E,this._z=m*_*E+x*S*v,this._w=m*_*v-x*S*E;break;case"YXZ":this._x=x*_*v+m*S*E,this._y=m*S*v-x*_*E,this._z=m*_*E-x*S*v,this._w=m*_*v+x*S*E;break;case"ZXY":this._x=x*_*v-m*S*E,this._y=m*S*v+x*_*E,this._z=m*_*E+x*S*v,this._w=m*_*v-x*S*E;break;case"ZYX":this._x=x*_*v-m*S*E,this._y=m*S*v+x*_*E,this._z=m*_*E-x*S*v,this._w=m*_*v+x*S*E;break;case"YZX":this._x=x*_*v+m*S*E,this._y=m*S*v+x*_*E,this._z=m*_*E-x*S*v,this._w=m*_*v-x*S*E;break;case"XZY":this._x=x*_*v-m*S*E,this._y=m*S*v-x*_*E,this._z=m*_*E+x*S*v,this._w=m*_*v+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],p=i[9],m=i[2],_=i[6],v=i[10],x=s+d+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-m)*S,this._z=(f-l)*S}else if(s>d&&s>v){const S=2*Math.sqrt(1+s-d-v);this._w=(_-p)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+m)/S}else if(d>v){const S=2*Math.sqrt(1+d-s-v);this._w=(c-m)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+v-s-d);this._w=(f-l)/S,this._x=(c+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,p=i._y,m=i._z,_=i._w;return this._x=s*_+f*d+l*m-c*p,this._y=l*_+f*p+c*d-s*m,this._z=c*_+f*m+s*p-l*d,this._w=f*_-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),v=Math.sin((1-i)*_)/m,x=Math.sin(i*_)/m;return this._w=f*v+this._w*x,this._x=s*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,i=0,s=0){X.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Fg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Fg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*s),_=2*(d*i-c*l),v=2*(c*s-f*i);return this.x=i+p*m+f*v-d*_,this.y=s+p*_+d*m-c*v,this.z=l+p*v+c*_-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=he(this.x,t.x,i.x),this.y=he(this.y,t.y,i.y),this.z=he(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=he(this.x,t,i),this.y=he(this.y,t,i),this.z=he(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(he(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*f-s*p,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return ch.copy(this).projectOnVector(t),this.sub(ch)}reflect(t){return this.sub(ch.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(he(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ch=new X,Fg=new Ir;class Fr{constructor(t=new X(1/0,1/0,1/0),i=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ei.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ei.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ei.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Ei):Ei.fromBufferAttribute(c,f),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),dc.copy(s.boundingBox)),dc.applyMatrix4(t.matrixWorld),this.union(dc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Io),pc.subVectors(this.max,Io),dr.subVectors(t.a,Io),pr.subVectors(t.b,Io),mr.subVectors(t.c,Io),Wa.subVectors(pr,dr),qa.subVectors(mr,pr),Ss.subVectors(dr,mr);let i=[0,-Wa.z,Wa.y,0,-qa.z,qa.y,0,-Ss.z,Ss.y,Wa.z,0,-Wa.x,qa.z,0,-qa.x,Ss.z,0,-Ss.x,-Wa.y,Wa.x,0,-qa.y,qa.x,0,-Ss.y,Ss.x,0];return!uh(i,dr,pr,mr,pc)||(i=[1,0,0,0,1,0,0,0,1],!uh(i,dr,pr,mr,pc))?!1:(mc.crossVectors(Wa,qa),i=[mc.x,mc.y,mc.z],uh(i,dr,pr,mr,pc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const oa=[new X,new X,new X,new X,new X,new X,new X,new X],Ei=new X,dc=new Fr,dr=new X,pr=new X,mr=new X,Wa=new X,qa=new X,Ss=new X,Io=new X,pc=new X,mc=new X,Ms=new X;function uh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ms.fromArray(r,c);const d=l.x*Math.abs(Ms.x)+l.y*Math.abs(Ms.y)+l.z*Math.abs(Ms.z),p=t.dot(Ms),m=i.dot(Ms),_=s.dot(Ms);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const HM=new Fr,Fo=new X,fh=new X;class tl{constructor(t=new X,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):HM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fo.subVectors(t,this.center);const i=Fo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Fo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fo.copy(t.center).add(fh)),this.expandByPoint(Fo.copy(t.center).sub(fh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const la=new X,hh=new X,_c=new X,Ya=new X,dh=new X,gc=new X,ph=new X;class Hd{constructor(t=new X,i=new X(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,la)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=la.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(la.copy(this.origin).addScaledVector(this.direction,i),la.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){hh.copy(t).add(i).multiplyScalar(.5),_c.copy(i).sub(t).normalize(),Ya.copy(this.origin).sub(hh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(_c),d=Ya.dot(this.direction),p=-Ya.dot(_c),m=Ya.lengthSq(),_=Math.abs(1-f*f);let v,x,S,E;if(_>0)if(v=f*p-d,x=f*d-p,E=c*_,v>=0)if(x>=-E)if(x<=E){const R=1/_;v*=R,x*=R,S=v*(v+f*x+2*d)+x*(f*v+x+2*p)+m}else x=c,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*p)+m;else x=-c,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*p)+m;else x<=-E?(v=Math.max(0,-(-f*c+d)),x=v>0?-c:Math.min(Math.max(-c,-p),c),S=-v*v+x*(x+2*p)+m):x<=E?(v=0,x=Math.min(Math.max(-c,-p),c),S=x*(x+2*p)+m):(v=Math.max(0,-(f*c+d)),x=v>0?c:Math.min(Math.max(-c,-p),c),S=-v*v+x*(x+2*p)+m);else x=f>0?-c:c,v=Math.max(0,-(f*x+d)),S=-v*v+x*(x+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(hh).addScaledVector(_c,x),S}intersectSphere(t,i){la.subVectors(t.center,this.origin);const s=la.dot(this.direction),l=la.dot(la)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,p=s+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,p;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(s=(t.min.x-x.x)*m,l=(t.max.x-x.x)*m):(s=(t.max.x-x.x)*m,l=(t.min.x-x.x)*m),_>=0?(c=(t.min.y-x.y)*_,f=(t.max.y-x.y)*_):(c=(t.max.y-x.y)*_,f=(t.min.y-x.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(t.min.z-x.z)*v,p=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,p=(t.min.z-x.z)*v),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,la)!==null}intersectTriangle(t,i,s,l,c){dh.subVectors(i,t),gc.subVectors(s,t),ph.crossVectors(dh,gc);let f=this.direction.dot(ph),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Ya.subVectors(this.origin,t);const p=d*this.direction.dot(gc.crossVectors(Ya,gc));if(p<0)return null;const m=d*this.direction.dot(dh.cross(Ya));if(m<0||p+m>f)return null;const _=-d*Ya.dot(ph);return _<0?null:this.at(_/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,i,s,l,c,f,d,p,m,_,v,x,S,E,R,y){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,p,m,_,v,x,S,E,R,y)}set(t,i,s,l,c,f,d,p,m,_,v,x,S,E,R,y){const g=this.elements;return g[0]=t,g[4]=i,g[8]=s,g[12]=l,g[1]=c,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=S,g[7]=E,g[11]=R,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/_r.setFromMatrixColumn(t,0).length(),c=1/_r.setFromMatrixColumn(t,1).length(),f=1/_r.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const x=f*_,S=f*v,E=d*_,R=d*v;i[0]=p*_,i[4]=-p*v,i[8]=m,i[1]=S+E*m,i[5]=x-R*m,i[9]=-d*p,i[2]=R-x*m,i[6]=E+S*m,i[10]=f*p}else if(t.order==="YXZ"){const x=p*_,S=p*v,E=m*_,R=m*v;i[0]=x+R*d,i[4]=E*d-S,i[8]=f*m,i[1]=f*v,i[5]=f*_,i[9]=-d,i[2]=S*d-E,i[6]=R+x*d,i[10]=f*p}else if(t.order==="ZXY"){const x=p*_,S=p*v,E=m*_,R=m*v;i[0]=x-R*d,i[4]=-f*v,i[8]=E+S*d,i[1]=S+E*d,i[5]=f*_,i[9]=R-x*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(t.order==="ZYX"){const x=f*_,S=f*v,E=d*_,R=d*v;i[0]=p*_,i[4]=E*m-S,i[8]=x*m+R,i[1]=p*v,i[5]=R*m+x,i[9]=S*m-E,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(t.order==="YZX"){const x=f*p,S=f*m,E=d*p,R=d*m;i[0]=p*_,i[4]=R-x*v,i[8]=E*v+S,i[1]=v,i[5]=f*_,i[9]=-d*_,i[2]=-m*_,i[6]=S*v+E,i[10]=x-R*v}else if(t.order==="XZY"){const x=f*p,S=f*m,E=d*p,R=d*m;i[0]=p*_,i[4]=-v,i[8]=m*_,i[1]=x*v+R,i[5]=f*_,i[9]=S*v-E,i[2]=E*v-S,i[6]=d*_,i[10]=R*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(GM,t,VM)}lookAt(t,i,s){const l=this.elements;return ni.subVectors(t,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),ja.crossVectors(s,ni),ja.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),ja.crossVectors(s,ni)),ja.normalize(),vc.crossVectors(ni,ja),l[0]=ja.x,l[4]=vc.x,l[8]=ni.x,l[1]=ja.y,l[5]=vc.y,l[9]=ni.y,l[2]=ja.z,l[6]=vc.z,l[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],p=s[8],m=s[12],_=s[1],v=s[5],x=s[9],S=s[13],E=s[2],R=s[6],y=s[10],g=s[14],z=s[3],N=s[7],D=s[11],H=s[15],G=l[0],F=l[4],Z=l[8],w=l[12],C=l[1],V=l[5],lt=l[9],rt=l[13],gt=l[2],ht=l[6],O=l[10],Q=l[14],Y=l[3],Mt=l[7],L=l[11],tt=l[15];return c[0]=f*G+d*C+p*gt+m*Y,c[4]=f*F+d*V+p*ht+m*Mt,c[8]=f*Z+d*lt+p*O+m*L,c[12]=f*w+d*rt+p*Q+m*tt,c[1]=_*G+v*C+x*gt+S*Y,c[5]=_*F+v*V+x*ht+S*Mt,c[9]=_*Z+v*lt+x*O+S*L,c[13]=_*w+v*rt+x*Q+S*tt,c[2]=E*G+R*C+y*gt+g*Y,c[6]=E*F+R*V+y*ht+g*Mt,c[10]=E*Z+R*lt+y*O+g*L,c[14]=E*w+R*rt+y*Q+g*tt,c[3]=z*G+N*C+D*gt+H*Y,c[7]=z*F+N*V+D*ht+H*Mt,c[11]=z*Z+N*lt+D*O+H*L,c[15]=z*w+N*rt+D*Q+H*tt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],p=t[9],m=t[13],_=t[2],v=t[6],x=t[10],S=t[14],E=t[3],R=t[7],y=t[11],g=t[15];return E*(+c*p*v-l*m*v-c*d*x+s*m*x+l*d*S-s*p*S)+R*(+i*p*S-i*m*x+c*f*x-l*f*S+l*m*_-c*p*_)+y*(+i*m*v-i*d*S-c*f*v+s*f*S+c*d*_-s*m*_)+g*(-l*d*_-i*p*v+i*d*x+l*f*v-s*f*x+s*p*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],_=t[8],v=t[9],x=t[10],S=t[11],E=t[12],R=t[13],y=t[14],g=t[15],z=v*y*m-R*x*m+R*p*S-d*y*S-v*p*g+d*x*g,N=E*x*m-_*y*m-E*p*S+f*y*S+_*p*g-f*x*g,D=_*R*m-E*v*m+E*d*S-f*R*S-_*d*g+f*v*g,H=E*v*p-_*R*p-E*d*x+f*R*x+_*d*y-f*v*y,G=i*z+s*N+l*D+c*H;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/G;return t[0]=z*F,t[1]=(R*x*c-v*y*c-R*l*S+s*y*S+v*l*g-s*x*g)*F,t[2]=(d*y*c-R*p*c+R*l*m-s*y*m-d*l*g+s*p*g)*F,t[3]=(v*p*c-d*x*c-v*l*m+s*x*m+d*l*S-s*p*S)*F,t[4]=N*F,t[5]=(_*y*c-E*x*c+E*l*S-i*y*S-_*l*g+i*x*g)*F,t[6]=(E*p*c-f*y*c-E*l*m+i*y*m+f*l*g-i*p*g)*F,t[7]=(f*x*c-_*p*c+_*l*m-i*x*m-f*l*S+i*p*S)*F,t[8]=D*F,t[9]=(E*v*c-_*R*c-E*s*S+i*R*S+_*s*g-i*v*g)*F,t[10]=(f*R*c-E*d*c+E*s*m-i*R*m-f*s*g+i*d*g)*F,t[11]=(_*d*c-f*v*c-_*s*m+i*v*m+f*s*S-i*d*S)*F,t[12]=H*F,t[13]=(_*R*l-E*v*l+E*s*x-i*R*x-_*s*y+i*v*y)*F,t[14]=(E*d*l-f*R*l-E*s*p+i*R*p+f*s*y-i*d*y)*F,t[15]=(f*v*l-_*d*l+_*s*p-i*v*p-f*s*x+i*d*x)*F,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,p=t.z,m=c*f,_=c*d;return this.set(m*f+s,m*d-l*p,m*p+l*d,0,m*d+l*p,_*d+s,_*p-l*f,0,m*p-l*d,_*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,p=i._w,m=c+c,_=f+f,v=d+d,x=c*m,S=c*_,E=c*v,R=f*_,y=f*v,g=d*v,z=p*m,N=p*_,D=p*v,H=s.x,G=s.y,F=s.z;return l[0]=(1-(R+g))*H,l[1]=(S+D)*H,l[2]=(E-N)*H,l[3]=0,l[4]=(S-D)*G,l[5]=(1-(x+g))*G,l[6]=(y+z)*G,l[7]=0,l[8]=(E+N)*F,l[9]=(y-z)*F,l[10]=(1-(x+R))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=_r.set(l[0],l[1],l[2]).length();const f=_r.set(l[4],l[5],l[6]).length(),d=_r.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ti.copy(this);const m=1/c,_=1/f,v=1/d;return Ti.elements[0]*=m,Ti.elements[1]*=m,Ti.elements[2]*=m,Ti.elements[4]*=_,Ti.elements[5]*=_,Ti.elements[6]*=_,Ti.elements[8]*=v,Ti.elements[9]*=v,Ti.elements[10]*=v,i.setFromRotationMatrix(Ti),s.x=c,s.y=f,s.z=d,this}makePerspective(t,i,s,l,c,f,d=ma){const p=this.elements,m=2*c/(i-t),_=2*c/(s-l),v=(i+t)/(i-t),x=(s+l)/(s-l);let S,E;if(d===ma)S=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===Yc)S=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=ma){const p=this.elements,m=1/(i-t),_=1/(s-l),v=1/(f-c),x=(i+t)*m,S=(s+l)*_;let E,R;if(d===ma)E=(f+c)*v,R=-2*v;else if(d===Yc)E=c*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*_,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=R,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const _r=new X,Ti=new oe,GM=new X(0,0,0),VM=new X(1,1,1),ja=new X,vc=new X,ni=new X,Bg=new oe,Hg=new Ir;class Gi{constructor(t=0,i=0,s=0,l=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],_=l[9],v=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-he(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(he(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-he(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(he(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-he(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Bg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Hg.setFromEuler(this),this.setFromQuaternion(Hg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class Gd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kM=0;const Gg=new X,gr=new Ir,ca=new oe,xc=new X,Bo=new X,XM=new X,WM=new Ir,Vg=new X(1,0,0),kg=new X(0,1,0),Xg=new X(0,0,1),Wg={type:"added"},qM={type:"removed"},vr={type:"childadded",child:null},mh={type:"childremoved",child:null};class Fn extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const t=new X,i=new Gi,s=new Ir,l=new X(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new oe},normalMatrix:{value:new re}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return gr.setFromAxisAngle(t,i),this.quaternion.multiply(gr),this}rotateOnWorldAxis(t,i){return gr.setFromAxisAngle(t,i),this.quaternion.premultiply(gr),this}rotateX(t){return this.rotateOnAxis(Vg,t)}rotateY(t){return this.rotateOnAxis(kg,t)}rotateZ(t){return this.rotateOnAxis(Xg,t)}translateOnAxis(t,i){return Gg.copy(t).applyQuaternion(this.quaternion),this.position.add(Gg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Vg,t)}translateY(t){return this.translateOnAxis(kg,t)}translateZ(t){return this.translateOnAxis(Xg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ca.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?xc.copy(t):xc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ca.lookAt(Bo,xc,this.up):ca.lookAt(xc,Bo,this.up),this.quaternion.setFromRotationMatrix(ca),l&&(ca.extractRotation(l.matrixWorld),gr.setFromRotationMatrix(ca),this.quaternion.premultiply(gr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wg),vr.child=t,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(qM),mh.child=t,this.dispatchEvent(mh),mh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ca.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ca.multiply(t.parent.matrixWorld)),t.applyMatrix4(ca),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wg),vr.child=t,this.dispatchEvent(vr),vr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,XM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,WM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const v=p[m];c(t.shapes,v)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),_=f(t.images),v=f(t.shapes),x=f(t.skeletons),S=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),v.length>0&&(s.shapes=v),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Fn.DEFAULT_UP=new X(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new X,ua=new X,_h=new X,fa=new X,xr=new X,Sr=new X,qg=new X,gh=new X,vh=new X,xh=new X,Sh=new Be,Mh=new Be,yh=new Be;class Ci{constructor(t=new X,i=new X,s=new X){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),bi.subVectors(t,i),l.cross(bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){bi.subVectors(l,i),ua.subVectors(s,i),_h.subVectors(t,i);const f=bi.dot(bi),d=bi.dot(ua),p=bi.dot(_h),m=ua.dot(ua),_=ua.dot(_h),v=f*m-d*d;if(v===0)return c.set(0,0,0),null;const x=1/v,S=(m*p-d*_)*x,E=(f*_-d*p)*x;return c.set(1-S-E,E,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,fa)===null?!1:fa.x>=0&&fa.y>=0&&fa.x+fa.y<=1}static getInterpolation(t,i,s,l,c,f,d,p){return this.getBarycoord(t,i,s,l,fa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,fa.x),p.addScaledVector(f,fa.y),p.addScaledVector(d,fa.z),p)}static getInterpolatedAttribute(t,i,s,l,c,f){return Sh.setScalar(0),Mh.setScalar(0),yh.setScalar(0),Sh.fromBufferAttribute(t,i),Mh.fromBufferAttribute(t,s),yh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Sh,c.x),f.addScaledVector(Mh,c.y),f.addScaledVector(yh,c.z),f}static isFrontFacing(t,i,s,l){return bi.subVectors(s,i),ua.subVectors(t,i),bi.cross(ua).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),ua.subVectors(this.a,this.b),bi.cross(ua).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ci.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ci.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;xr.subVectors(l,s),Sr.subVectors(c,s),gh.subVectors(t,s);const p=xr.dot(gh),m=Sr.dot(gh);if(p<=0&&m<=0)return i.copy(s);vh.subVectors(t,l);const _=xr.dot(vh),v=Sr.dot(vh);if(_>=0&&v<=_)return i.copy(l);const x=p*v-_*m;if(x<=0&&p>=0&&_<=0)return f=p/(p-_),i.copy(s).addScaledVector(xr,f);xh.subVectors(t,c);const S=xr.dot(xh),E=Sr.dot(xh);if(E>=0&&S<=E)return i.copy(c);const R=S*m-p*E;if(R<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(s).addScaledVector(Sr,d);const y=_*E-S*v;if(y<=0&&v-_>=0&&S-E>=0)return qg.subVectors(c,l),d=(v-_)/(v-_+(S-E)),i.copy(l).addScaledVector(qg,d);const g=1/(y+R+x);return f=R*g,d=x*g,i.copy(s).addScaledVector(xr,f).addScaledVector(Sr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const h0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Eh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class de{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=be.workingColorSpace){return this.r=t,this.g=i,this.b=s,be.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=be.workingColorSpace){if(t=Fd(t,1),i=he(i,0,1),s=he(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Eh(f,c,t+1/3),this.g=Eh(f,c,t),this.b=Eh(f,c,t-1/3)}return be.toWorkingColorSpace(this,l),this}setStyle(t,i=gi){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=gi){const s=h0[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}copyLinearToSRGB(t){return this.r=Cr(t.r),this.g=Cr(t.g),this.b=Cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return be.fromWorkingColorSpace(Un.copy(this),t),Math.round(he(Un.r*255,0,255))*65536+Math.round(he(Un.g*255,0,255))*256+Math.round(he(Un.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=be.workingColorSpace){be.fromWorkingColorSpace(Un.copy(this),i);const s=Un.r,l=Un.g,c=Un.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const _=(d+f)/2;if(d===f)p=0,m=0;else{const v=f-d;switch(m=_<=.5?v/(f+d):v/(2-f-d),f){case s:p=(l-c)/v+(l<c?6:0);break;case l:p=(c-s)/v+2;break;case c:p=(s-l)/v+4;break}p/=6}return t.h=p,t.s=m,t.l=_,t}getRGB(t,i=be.workingColorSpace){return be.fromWorkingColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=gi){be.fromWorkingColorSpace(Un.copy(this),t);const i=Un.r,s=Un.g,l=Un.b;return t!==gi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Za),this.setHSL(Za.h+t,Za.s+i,Za.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Za),t.getHSL(Sc);const s=Yo(Za.h,Sc.h,i),l=Yo(Za.s,Sc.s,i),c=Yo(Za.l,Sc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new de;de.NAMES=h0;let YM=0;class Br extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=zr(),this.name="",this.type="Material",this.blending=Rr,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=kh,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(s.blending=this.blending),this.side!==$a&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Vh&&(s.blendSrc=this.blendSrc),this.blendDst!==kh&&(s.blendDst=this.blendDst),this.blendEquation!==Cs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ug&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Vd extends Br{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Wv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ln=new X,Mc=new xe;let jM=0;class Bi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Lg,this.updateRanges=[],this.gpuType=pa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(t),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix3(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix4(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.applyNormalMatrix(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)ln.fromBufferAttribute(this,i),ln.transformDirection(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=br(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=zn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=br(i,this.array)),i}setX(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=br(i,this.array)),i}setY(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=br(i,this.array)),i}setZ(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=br(i,this.array)),i}setW(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),s=zn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),s=zn(s,this.array),l=zn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),s=zn(s,this.array),l=zn(l,this.array),c=zn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lg&&(t.usage=this.usage),t}}class d0 extends Bi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class p0 extends Bi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Pn extends Bi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let ZM=0;const mi=new oe,Th=new Fn,Mr=new X,ii=new Fr,Ho=new Fr,Mn=new X;class Bn extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(u0(t)?p0:d0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new re().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,i,s){return mi.makeTranslation(t,i,s),this.applyMatrix4(mi),this}scale(t,i,s){return mi.makeScale(t,i,s),this.applyMatrix4(mi),this}lookAt(t){return Th.lookAt(t),Th.updateMatrix(),this.applyMatrix4(Th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Pn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Ho.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(ii.min,Ho.min),ii.expandByPoint(Mn),Mn.addVectors(ii.max,Ho.max),ii.expandByPoint(Mn)):(ii.expandByPoint(Ho.min),ii.expandByPoint(Ho.max))}ii.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Mn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)Mn.fromBufferAttribute(d,m),p&&(Mr.fromBufferAttribute(t,m),Mn.add(Mr)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let Z=0;Z<s.count;Z++)d[Z]=new X,p[Z]=new X;const m=new X,_=new X,v=new X,x=new xe,S=new xe,E=new xe,R=new X,y=new X;function g(Z,w,C){m.fromBufferAttribute(s,Z),_.fromBufferAttribute(s,w),v.fromBufferAttribute(s,C),x.fromBufferAttribute(c,Z),S.fromBufferAttribute(c,w),E.fromBufferAttribute(c,C),_.sub(m),v.sub(m),S.sub(x),E.sub(x);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(R.copy(_).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(V),y.copy(v).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(V),d[Z].add(R),d[w].add(R),d[C].add(R),p[Z].add(y),p[w].add(y),p[C].add(y))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let Z=0,w=z.length;Z<w;++Z){const C=z[Z],V=C.start,lt=C.count;for(let rt=V,gt=V+lt;rt<gt;rt+=3)g(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const N=new X,D=new X,H=new X,G=new X;function F(Z){H.fromBufferAttribute(l,Z),G.copy(H);const w=d[Z];N.copy(w),N.sub(H.multiplyScalar(H.dot(w))).normalize(),D.crossVectors(G,w);const V=D.dot(p[Z])<0?-1:1;f.setXYZW(Z,N.x,N.y,N.z,V)}for(let Z=0,w=z.length;Z<w;++Z){const C=z[Z],V=C.start,lt=C.count;for(let rt=V,gt=V+lt;rt<gt;rt+=3)F(t.getX(rt+0)),F(t.getX(rt+1)),F(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Bi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const l=new X,c=new X,f=new X,d=new X,p=new X,m=new X,_=new X,v=new X;if(t)for(let x=0,S=t.count;x<S;x+=3){const E=t.getX(x+0),R=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,y),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,R),m.fromBufferAttribute(s,y),d.add(_),p.add(_),m.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(R,p.x,p.y,p.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),_.subVectors(f,c),v.subVectors(l,c),_.cross(v),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(d,p){const m=d.array,_=d.itemSize,v=d.normalized,x=new m.constructor(p.length*_);let S=0,E=0;for(let R=0,y=p.length;R<y;R++){d.isInterleavedBufferAttribute?S=p[R]*d.data.stride+d.offset:S=p[R]*_;for(let g=0;g<_;g++)x[E++]=m[S++]}return new Bi(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Bn,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let _=0,v=m.length;_<v;_++){const x=m[_],S=t(x,s);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let v=0,x=m.length;v<x;v++){const S=m[v];_.push(S.toJSON(t.data))}_.length>0&&(l[p]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const c=t.morphAttributes;for(const m in c){const _=[],v=c[m];for(let x=0,S=v.length;x<S;x++)_.push(v[x].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,_=f.length;m<_;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yg=new oe,ys=new Hd,yc=new tl,jg=new X,Ec=new X,Tc=new X,bc=new X,bh=new X,Ac=new X,Zg=new X,Rc=new X;class vi extends Fn{constructor(t=new Bn,i=new Vd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Ac.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=d[p],v=c[p];_!==0&&(bh.fromBufferAttribute(v,t),f?Ac.addScaledVector(bh,_):Ac.addScaledVector(bh.sub(i),_))}i.add(Ac)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),yc.copy(s.boundingSphere),yc.applyMatrix4(c),ys.copy(t.ray).recast(t.near),!(yc.containsPoint(ys.origin)===!1&&(ys.intersectSphere(yc,jg)===null||ys.origin.distanceToSquared(jg)>(t.far-t.near)**2))&&(Yg.copy(c).invert(),ys.copy(t.ray).applyMatrix4(Yg),!(s.boundingBox!==null&&ys.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ys)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,v=c.attributes.normal,x=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,R=x.length;E<R;E++){const y=x[E],g=f[y.materialIndex],z=Math.max(y.start,S.start),N=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let D=z,H=N;D<H;D+=3){const G=d.getX(D),F=d.getX(D+1),Z=d.getX(D+2);l=Cc(this,g,t,s,m,_,v,G,F,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let y=E,g=R;y<g;y+=3){const z=d.getX(y),N=d.getX(y+1),D=d.getX(y+2);l=Cc(this,f,t,s,m,_,v,z,N,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,R=x.length;E<R;E++){const y=x[E],g=f[y.materialIndex],z=Math.max(y.start,S.start),N=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let D=z,H=N;D<H;D+=3){const G=D,F=D+1,Z=D+2;l=Cc(this,g,t,s,m,_,v,G,F,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let y=E,g=R;y<g;y+=3){const z=y,N=y+1,D=y+2;l=Cc(this,f,t,s,m,_,v,z,N,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function QM(r,t,i,s,l,c,f,d){let p;if(t.side===qn?p=s.intersectTriangle(f,c,l,!0,d):p=s.intersectTriangle(l,c,f,t.side===$a,d),p===null)return null;Rc.copy(d),Rc.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(Rc);return m<i.near||m>i.far?null:{distance:m,point:Rc.clone(),object:r}}function Cc(r,t,i,s,l,c,f,d,p,m){r.getVertexPosition(d,Ec),r.getVertexPosition(p,Tc),r.getVertexPosition(m,bc);const _=QM(r,t,i,s,Ec,Tc,bc,Zg);if(_){const v=new X;Ci.getBarycoord(Zg,Ec,Tc,bc,v),l&&(_.uv=Ci.getInterpolatedAttribute(l,d,p,m,v,new xe)),c&&(_.uv1=Ci.getInterpolatedAttribute(c,d,p,m,v,new xe)),f&&(_.normal=Ci.getInterpolatedAttribute(f,d,p,m,v,new X),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new X,materialIndex:0};Ci.getNormal(Ec,Tc,bc,x.normal),_.face=x,_.barycoord=v}return _}class el extends Bn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],_=[],v=[];let x=0,S=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Pn(m,3)),this.setAttribute("normal",new Pn(_,3)),this.setAttribute("uv",new Pn(v,2));function E(R,y,g,z,N,D,H,G,F,Z,w){const C=D/F,V=H/Z,lt=D/2,rt=H/2,gt=G/2,ht=F+1,O=Z+1;let Q=0,Y=0;const Mt=new X;for(let L=0;L<O;L++){const tt=L*V-rt;for(let vt=0;vt<ht;vt++){const St=vt*C-lt;Mt[R]=St*z,Mt[y]=tt*N,Mt[g]=gt,m.push(Mt.x,Mt.y,Mt.z),Mt[R]=0,Mt[y]=0,Mt[g]=G>0?1:-1,_.push(Mt.x,Mt.y,Mt.z),v.push(vt/F),v.push(1-L/Z),Q+=1}}for(let L=0;L<Z;L++)for(let tt=0;tt<F;tt++){const vt=x+tt+ht*L,St=x+tt+ht*(L+1),J=x+(tt+1)+ht*(L+1),dt=x+(tt+1)+ht*L;p.push(vt,St,dt),p.push(St,J,dt),Y+=6}d.addGroup(S,Y,w),S+=Y,x+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Nr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function In(r){const t={};for(let i=0;i<r.length;i++){const s=Nr(r[i]);for(const l in s)t[l]=s[l]}return t}function KM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function m0(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const Jc={clone:Nr,merge:In};var JM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$M=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Br{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JM,this.fragmentShader=$M,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nr(t.uniforms),this.uniformsGroups=KM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class _0 extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=ma}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qa=new X,Qg=new xe,Kg=new xe;class si extends _0{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=$o*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qa.x,Qa.y).multiplyScalar(-t/Qa.z),Qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Qa.x,Qa.y).multiplyScalar(-t/Qa.z)}getViewSize(t,i){return this.getViewBounds(t,Qg,Kg),i.subVectors(Kg,Qg)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(qo*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const yr=-90,Er=1;class ty extends Fn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(yr,Er,t,i);l.layers=this.layers,this.add(l);const c=new si(yr,Er,t,i);c.layers=this.layers,this.add(c);const f=new si(yr,Er,t,i);f.layers=this.layers,this.add(f);const d=new si(yr,Er,t,i);d.layers=this.layers,this.add(d);const p=new si(yr,Er,t,i);p.layers=this.layers,this.add(p);const m=new si(yr,Er,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,p]=i;for(const m of i)this.remove(m);if(t===ma)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Yc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,_]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),t.render(i,_),t.setRenderTarget(v,x,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class g0 extends Yn{constructor(t=[],i=Dr,s,l,c,f,d,p,m,_){super(t,i,s,l,c,f,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ey extends ts{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new g0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Fi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new el(5,5,5),c=new xi({name:"CubemapFromEquirect",uniforms:Nr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qn,blending:_a});c.uniforms.tEquirect.value=i;const f=new vi(l,c),d=i.minFilter;return i.minFilter===Us&&(i.minFilter=Fi),new ty(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Xo extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ny={type:"move"};class Ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const R of t.hand.values()){const y=i.getJointPose(R,s),g=this._getHandJoint(m,R);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),S=.02,E=.005;m.inputState.pinching&&x>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&x<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ny)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Xo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class iy extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Rh=new X,ay=new X,sy=new re;class As{constructor(t=new X(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Rh.subVectors(s,i).cross(ay.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Rh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||sy.getNormalMatrix(t),l=this.coplanarPoint(Rh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new tl,wc=new X;class kd{constructor(t=new As,i=new As,s=new As,l=new As,c=new As,f=new As){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ma){const s=this.planes,l=t.elements,c=l[0],f=l[1],d=l[2],p=l[3],m=l[4],_=l[5],v=l[6],x=l[7],S=l[8],E=l[9],R=l[10],y=l[11],g=l[12],z=l[13],N=l[14],D=l[15];if(s[0].setComponents(p-c,x-m,y-S,D-g).normalize(),s[1].setComponents(p+c,x+m,y+S,D+g).normalize(),s[2].setComponents(p+f,x+_,y+E,D+z).normalize(),s[3].setComponents(p-f,x-_,y-E,D-z).normalize(),s[4].setComponents(p-d,x-v,y-R,D-N).normalize(),i===ma)s[5].setComponents(p+d,x+v,y+R,D+N).normalize();else if(i===Yc)s[5].setComponents(d,v,R,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){return Es.center.set(0,0,0),Es.radius=.7071067811865476,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(wc.x=l.normal.x>0?t.max.x:t.min.x,wc.y=l.normal.y>0?t.max.y:t.min.y,wc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(wc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jo extends Br{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Zc=new X,Qc=new X,Jg=new oe,Go=new Hd,Dc=new tl,Ch=new X,$g=new X;class kc extends Fn{constructor(t=new Bn,i=new jo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Zc.fromBufferAttribute(i,l-1),Qc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Zc.distanceTo(Qc);t.setAttribute("lineDistance",new Pn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Dc.copy(s.boundingSphere),Dc.applyMatrix4(l),Dc.radius+=c,t.ray.intersectsSphere(Dc)===!1)return;Jg.copy(l).invert(),Go.copy(t.ray).applyMatrix4(Jg);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=s.index,x=s.attributes.position;if(_!==null){const S=Math.max(0,f.start),E=Math.min(_.count,f.start+f.count);for(let R=S,y=E-1;R<y;R+=m){const g=_.getX(R),z=_.getX(R+1),N=Uc(this,t,Go,p,g,z,R);N&&i.push(N)}if(this.isLineLoop){const R=_.getX(E-1),y=_.getX(S),g=Uc(this,t,Go,p,R,y,E-1);g&&i.push(g)}}else{const S=Math.max(0,f.start),E=Math.min(x.count,f.start+f.count);for(let R=S,y=E-1;R<y;R+=m){const g=Uc(this,t,Go,p,R,R+1,R);g&&i.push(g)}if(this.isLineLoop){const R=Uc(this,t,Go,p,E-1,S,E-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Uc(r,t,i,s,l,c,f){const d=r.geometry.attributes.position;if(Zc.fromBufferAttribute(d,l),Qc.fromBufferAttribute(d,c),i.distanceSqToSegment(Zc,Qc,Ch,$g)>s)return;Ch.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(Ch);if(!(m<t.near||m>t.far))return{distance:m,point:$g.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const tv=new X,ev=new X;class ry extends kc{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)tv.fromBufferAttribute(i,l),ev.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+tv.distanceTo(ev);t.setAttribute("lineDistance",new Pn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class v0 extends Yn{constructor(t,i,s=Ls,l,c,f,d=Di,p=Di,m,_=Ko){if(_!==Ko&&_!==Jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,f,d,p,_,s,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class oy{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let d=0,p=c-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=s[l]-f,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,s[l]===f)return l/(c-1);const _=s[l],x=s[l+1]-_,S=(f-_)/x;return(l+S)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),p=i||(f.isVector2?new xe:new X);return p.copy(d).sub(f).normalize(),p}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new X,l=[],c=[],f=[],d=new X,p=new oe;for(let S=0;S<=t;S++){const E=S/t;l[S]=this.getTangentAt(E,new X)}c[0]=new X,f[0]=new X;let m=Number.MAX_VALUE;const _=Math.abs(l[0].x),v=Math.abs(l[0].y),x=Math.abs(l[0].z);_<=m&&(m=_,s.set(1,0,0)),v<=m&&(m=v,s.set(0,1,0)),x<=m&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(he(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(p.makeRotationAxis(d,E))}f[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(he(c[0].dot(c[t]),-1,1));S/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],S*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Xc extends oy{constructor(t=0,i=0,s=1,l=1,c=0,f=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new xe){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const _=Math.cos(this.aRotation),v=Math.sin(this.aRotation),x=p-this.aX,S=m-this.aY;p=x*_-S*v+this.aX,m=x*v+S*_+this.aY}return s.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $c extends Bn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,_=p+1,v=t/d,x=i/p,S=[],E=[],R=[],y=[];for(let g=0;g<_;g++){const z=g*x-f;for(let N=0;N<m;N++){const D=N*v-c;E.push(D,-z,0),R.push(0,0,1),y.push(N/d),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let z=0;z<d;z++){const N=z+m*g,D=z+m*(g+1),H=z+1+m*(g+1),G=z+1+m*g;S.push(N,D,G),S.push(D,H,G)}this.setIndex(S),this.setAttribute("position",new Pn(E,3)),this.setAttribute("normal",new Pn(R,3)),this.setAttribute("uv",new Pn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.width,t.height,t.widthSegments,t.heightSegments)}}class tu extends Bn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(f+d,Math.PI);let m=0;const _=[],v=new X,x=new X,S=[],E=[],R=[],y=[];for(let g=0;g<=s;g++){const z=[],N=g/s;let D=0;g===0&&f===0?D=.5/i:g===s&&p===Math.PI&&(D=-.5/i);for(let H=0;H<=i;H++){const G=H/i;v.x=-t*Math.cos(l+G*c)*Math.sin(f+N*d),v.y=t*Math.cos(f+N*d),v.z=t*Math.sin(l+G*c)*Math.sin(f+N*d),E.push(v.x,v.y,v.z),x.copy(v).normalize(),R.push(x.x,x.y,x.z),y.push(G+D,1-N),z.push(m++)}_.push(z)}for(let g=0;g<s;g++)for(let z=0;z<i;z++){const N=_[g][z+1],D=_[g][z],H=_[g+1][z],G=_[g+1][z+1];(g!==0||f>0)&&S.push(N,D,G),(g!==s-1||p<Math.PI)&&S.push(D,H,G)}this.setIndex(S),this.setAttribute("position",new Pn(E,3)),this.setAttribute("normal",new Pn(R,3)),this.setAttribute("uv",new Pn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ly extends xi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class x0 extends Br{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=l0,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cy extends x0{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return he(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new de(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new de(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new de(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class uy extends Br{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fy extends Br{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class S0 extends Fn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new de(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const wh=new oe,nv=new X,iv=new X;class hy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=Hi,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kd,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;nv.setFromMatrixPosition(t.matrixWorld),i.position.copy(nv),iv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(iv),i.updateMatrixWorld(),wh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(wh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const av=new oe,Vo=new X,Dh=new X;class dy extends hy{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xe(4,2),this._viewportCount=6,this._viewports=[new Be(2,1,1,1),new Be(0,1,1,1),new Be(3,1,1,1),new Be(1,1,1,1),new Be(3,0,1,1),new Be(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,c=t.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),Vo.setFromMatrixPosition(t.matrixWorld),s.position.copy(Vo),Dh.copy(s.position),Dh.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Dh),s.updateMatrixWorld(),l.makeTranslation(-Vo.x,-Vo.y,-Vo.z),av.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(av)}}class Xd extends S0{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new dy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class M0 extends _0{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class py extends S0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class my extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class _y{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=sv();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function sv(){return performance.now()}const rv=new oe;class gy{constructor(t,i,s=0,l=1/0){this.ray=new Hd(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Gd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return rv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rv),this}intersectObject(t,i=!0,s=[]){return Rd(t,this,s,i),s.sort(ov),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Rd(t[l],this,s,i);return s.sort(ov),s}}function ov(r,t){return r.distance-t.distance}function Rd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,d=c.length;f<d;f++)Rd(c[f],t,i,!0)}}class Wd extends vi{constructor(t,i,s){const l=new tu(i,4,2),c=new Vd({wireframe:!0,fog:!1,toneMapped:!1});super(l,c),this.light=t,this.color=s,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}class vy extends ry{constructor(t=10,i=10,s=4473924,l=8947848){s=new de(s),l=new de(l);const c=i/2,f=t/i,d=t/2,p=[],m=[];for(let x=0,S=0,E=-d;x<=i;x++,E+=f){p.push(-d,0,E,d,0,E),p.push(E,0,-d,E,0,d);const R=x===c?s:l;R.toArray(m,S),S+=3,R.toArray(m,S),S+=3,R.toArray(m,S),S+=3,R.toArray(m,S),S+=3}const _=new Bn;_.setAttribute("position",new Pn(p,3)),_.setAttribute("color",new Pn(m,3));const v=new jo({vertexColors:!0,toneMapped:!1});super(_,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class xy extends Ns{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function lv(r,t,i,s){const l=Sy(s);switch(i){case i0:return r*t;case s0:return r*t/l.components*l.byteLength;case Od:return r*t/l.components*l.byteLength;case r0:return r*t*2/l.components*l.byteLength;case zd:return r*t*2/l.components*l.byteLength;case a0:return r*t*3/l.components*l.byteLength;case wi:return r*t*4/l.components*l.byteLength;case Id:return r*t*4/l.components*l.byteLength;case Ic:case Fc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Bc:case Hc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case nd:case ad:return Math.max(r,16)*Math.max(t,8)/4;case ed:case id:return Math.max(r,8)*Math.max(t,8)/2;case sd:case rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case od:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ld:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ud:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case fd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case hd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case dd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case pd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case md:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case _d:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case gd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case vd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case xd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Sd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Md:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Gc:case yd:case Ed:return Math.ceil(r/4)*Math.ceil(t/4)*16;case o0:case Td:return Math.ceil(r/4)*Math.ceil(t/4)*8;case bd:case Ad:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Sy(r){switch(r){case Hi:case t0:return{byteLength:1,components:1};case Zo:case e0:case Or:return{byteLength:2,components:1};case Nd:case Pd:return{byteLength:2,components:4};case Ls:case Ld:case pa:return{byteLength:4,components:1};case n0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ud}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ud);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function y0(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function My(r){const t=new WeakMap;function i(d,p){const m=d.array,_=d.usage,v=m.byteLength,x=r.createBuffer();r.bindBuffer(p,x),r.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=r.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=r.SHORT;else if(m instanceof Uint32Array)S=r.UNSIGNED_INT;else if(m instanceof Int32Array)S=r.INT;else if(m instanceof Int8Array)S=r.BYTE;else if(m instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,p,m){const _=p.array,v=p.updateRanges;if(r.bindBuffer(m,d),v.length===0)r.bufferSubData(m,0,_);else{v.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<v.length;S++){const E=v[x],R=v[S];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++x,v[x]=R)}v.length=x+1;for(let S=0,E=v.length;S<E;S++){const R=v[S];r.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(r.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}var yy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ey=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ty=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,by=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ay=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ry=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Uy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ly=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ny=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Py=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Oy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ky=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ky=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jy="gl_FragColor = linearToOutputTexel( gl_FragColor );",$y=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_E=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,SE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ME=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,EE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,UE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,FE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,GE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,WE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,KE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$E=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,aT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_T=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ST=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const MT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ET=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,UT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$T=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:yy,alphahash_pars_fragment:Ey,alphamap_fragment:Ty,alphamap_pars_fragment:by,alphatest_fragment:Ay,alphatest_pars_fragment:Ry,aomap_fragment:Cy,aomap_pars_fragment:wy,batching_pars_vertex:Dy,batching_vertex:Uy,begin_vertex:Ly,beginnormal_vertex:Ny,bsdfs:Py,iridescence_fragment:Oy,bumpmap_pars_fragment:zy,clipping_planes_fragment:Iy,clipping_planes_pars_fragment:Fy,clipping_planes_pars_vertex:By,clipping_planes_vertex:Hy,color_fragment:Gy,color_pars_fragment:Vy,color_pars_vertex:ky,color_vertex:Xy,common:Wy,cube_uv_reflection_fragment:qy,defaultnormal_vertex:Yy,displacementmap_pars_vertex:jy,displacementmap_vertex:Zy,emissivemap_fragment:Qy,emissivemap_pars_fragment:Ky,colorspace_fragment:Jy,colorspace_pars_fragment:$y,envmap_fragment:tE,envmap_common_pars_fragment:eE,envmap_pars_fragment:nE,envmap_pars_vertex:iE,envmap_physical_pars_fragment:pE,envmap_vertex:aE,fog_vertex:sE,fog_pars_vertex:rE,fog_fragment:oE,fog_pars_fragment:lE,gradientmap_pars_fragment:cE,lightmap_pars_fragment:uE,lights_lambert_fragment:fE,lights_lambert_pars_fragment:hE,lights_pars_begin:dE,lights_toon_fragment:mE,lights_toon_pars_fragment:_E,lights_phong_fragment:gE,lights_phong_pars_fragment:vE,lights_physical_fragment:xE,lights_physical_pars_fragment:SE,lights_fragment_begin:ME,lights_fragment_maps:yE,lights_fragment_end:EE,logdepthbuf_fragment:TE,logdepthbuf_pars_fragment:bE,logdepthbuf_pars_vertex:AE,logdepthbuf_vertex:RE,map_fragment:CE,map_pars_fragment:wE,map_particle_fragment:DE,map_particle_pars_fragment:UE,metalnessmap_fragment:LE,metalnessmap_pars_fragment:NE,morphinstance_vertex:PE,morphcolor_vertex:OE,morphnormal_vertex:zE,morphtarget_pars_vertex:IE,morphtarget_vertex:FE,normal_fragment_begin:BE,normal_fragment_maps:HE,normal_pars_fragment:GE,normal_pars_vertex:VE,normal_vertex:kE,normalmap_pars_fragment:XE,clearcoat_normal_fragment_begin:WE,clearcoat_normal_fragment_maps:qE,clearcoat_pars_fragment:YE,iridescence_pars_fragment:jE,opaque_fragment:ZE,packing:QE,premultiplied_alpha_fragment:KE,project_vertex:JE,dithering_fragment:$E,dithering_pars_fragment:tT,roughnessmap_fragment:eT,roughnessmap_pars_fragment:nT,shadowmap_pars_fragment:iT,shadowmap_pars_vertex:aT,shadowmap_vertex:sT,shadowmask_pars_fragment:rT,skinbase_vertex:oT,skinning_pars_vertex:lT,skinning_vertex:cT,skinnormal_vertex:uT,specularmap_fragment:fT,specularmap_pars_fragment:hT,tonemapping_fragment:dT,tonemapping_pars_fragment:pT,transmission_fragment:mT,transmission_pars_fragment:_T,uv_pars_fragment:gT,uv_pars_vertex:vT,uv_vertex:xT,worldpos_vertex:ST,background_vert:MT,background_frag:yT,backgroundCube_vert:ET,backgroundCube_frag:TT,cube_vert:bT,cube_frag:AT,depth_vert:RT,depth_frag:CT,distanceRGBA_vert:wT,distanceRGBA_frag:DT,equirect_vert:UT,equirect_frag:LT,linedashed_vert:NT,linedashed_frag:PT,meshbasic_vert:OT,meshbasic_frag:zT,meshlambert_vert:IT,meshlambert_frag:FT,meshmatcap_vert:BT,meshmatcap_frag:HT,meshnormal_vert:GT,meshnormal_frag:VT,meshphong_vert:kT,meshphong_frag:XT,meshphysical_vert:WT,meshphysical_frag:qT,meshtoon_vert:YT,meshtoon_frag:jT,points_vert:ZT,points_frag:QT,shadow_vert:KT,shadow_frag:JT,sprite_vert:$T,sprite_frag:tb},wt={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Ii={basic:{uniforms:In([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:In([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new de(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:In([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:In([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:In([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new de(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:In([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:In([wt.points,wt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:In([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:In([wt.common,wt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:In([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:In([wt.sprite,wt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:In([wt.common,wt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:In([wt.lights,wt.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ii.physical={uniforms:In([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Lc={r:0,b:0,g:0},Ts=new Gi,eb=new oe;function nb(r,t,i,s,l,c,f){const d=new de(0);let p=c===!0?0:1,m,_,v=null,x=0,S=null;function E(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?i:t).get(D)),D}function R(N){let D=!1;const H=E(N);H===null?g(d,p):H&&H.isColor&&(g(H,1),D=!0);const G=r.xr.getEnvironmentBlendMode();G==="additive"?s.buffers.color.setClear(0,0,0,1,f):G==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(N,D){const H=E(D);H&&(H.isCubeTexture||H.mapping===Kc)?(_===void 0&&(_=new vi(new el(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Nr(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(G,F,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Ts.copy(D.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(eb.makeRotationFromEuler(Ts)),_.material.toneMapped=be.getTransfer(H.colorSpace)!==Le,(v!==H||x!==H.version||S!==r.toneMapping)&&(_.material.needsUpdate=!0,v=H,x=H.version,S=r.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new vi(new $c(2,2),new xi({name:"BackgroundMaterial",uniforms:Nr(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=be.getTransfer(H.colorSpace)!==Le,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||x!==H.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,v=H,x=H.version,S=r.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function g(N,D){N.getRGB(Lc,m0(r)),s.buffers.color.setClear(Lc.r,Lc.g,Lc.b,D,f)}function z(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,D=1){d.set(N),p=D,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,g(d,p)},render:R,addToRenderList:y,dispose:z}}function ib(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,f=!1;function d(C,V,lt,rt,gt){let ht=!1;const O=v(rt,lt,V);c!==O&&(c=O,m(c.object)),ht=S(C,rt,lt,gt),ht&&E(C,rt,lt,gt),gt!==null&&t.update(gt,r.ELEMENT_ARRAY_BUFFER),(ht||f)&&(f=!1,D(C,V,lt,rt),gt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(gt).buffer))}function p(){return r.createVertexArray()}function m(C){return r.bindVertexArray(C)}function _(C){return r.deleteVertexArray(C)}function v(C,V,lt){const rt=lt.wireframe===!0;let gt=s[C.id];gt===void 0&&(gt={},s[C.id]=gt);let ht=gt[V.id];ht===void 0&&(ht={},gt[V.id]=ht);let O=ht[rt];return O===void 0&&(O=x(p()),ht[rt]=O),O}function x(C){const V=[],lt=[],rt=[];for(let gt=0;gt<i;gt++)V[gt]=0,lt[gt]=0,rt[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:lt,attributeDivisors:rt,object:C,attributes:{},index:null}}function S(C,V,lt,rt){const gt=c.attributes,ht=V.attributes;let O=0;const Q=lt.getAttributes();for(const Y in Q)if(Q[Y].location>=0){const L=gt[Y];let tt=ht[Y];if(tt===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor)),L===void 0||L.attribute!==tt||tt&&L.data!==tt.data)return!0;O++}return c.attributesNum!==O||c.index!==rt}function E(C,V,lt,rt){const gt={},ht=V.attributes;let O=0;const Q=lt.getAttributes();for(const Y in Q)if(Q[Y].location>=0){let L=ht[Y];L===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(L=C.instanceColor));const tt={};tt.attribute=L,L&&L.data&&(tt.data=L.data),gt[Y]=tt,O++}c.attributes=gt,c.attributesNum=O,c.index=rt}function R(){const C=c.newAttributes;for(let V=0,lt=C.length;V<lt;V++)C[V]=0}function y(C){g(C,0)}function g(C,V){const lt=c.newAttributes,rt=c.enabledAttributes,gt=c.attributeDivisors;lt[C]=1,rt[C]===0&&(r.enableVertexAttribArray(C),rt[C]=1),gt[C]!==V&&(r.vertexAttribDivisor(C,V),gt[C]=V)}function z(){const C=c.newAttributes,V=c.enabledAttributes;for(let lt=0,rt=V.length;lt<rt;lt++)V[lt]!==C[lt]&&(r.disableVertexAttribArray(lt),V[lt]=0)}function N(C,V,lt,rt,gt,ht,O){O===!0?r.vertexAttribIPointer(C,V,lt,gt,ht):r.vertexAttribPointer(C,V,lt,rt,gt,ht)}function D(C,V,lt,rt){R();const gt=rt.attributes,ht=lt.getAttributes(),O=V.defaultAttributeValues;for(const Q in ht){const Y=ht[Q];if(Y.location>=0){let Mt=gt[Q];if(Mt===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),Mt!==void 0){const L=Mt.normalized,tt=Mt.itemSize,vt=t.get(Mt);if(vt===void 0)continue;const St=vt.buffer,J=vt.type,dt=vt.bytesPerElement,xt=J===r.INT||J===r.UNSIGNED_INT||Mt.gpuType===Ld;if(Mt.isInterleavedBufferAttribute){const bt=Mt.data,Dt=bt.stride,le=Mt.offset;if(bt.isInstancedInterleavedBuffer){for(let Zt=0;Zt<Y.locationSize;Zt++)g(Y.location+Zt,bt.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Zt=0;Zt<Y.locationSize;Zt++)y(Y.location+Zt);r.bindBuffer(r.ARRAY_BUFFER,St);for(let Zt=0;Zt<Y.locationSize;Zt++)N(Y.location+Zt,tt/Y.locationSize,J,L,Dt*dt,(le+tt/Y.locationSize*Zt)*dt,xt)}else{if(Mt.isInstancedBufferAttribute){for(let bt=0;bt<Y.locationSize;bt++)g(Y.location+bt,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let bt=0;bt<Y.locationSize;bt++)y(Y.location+bt);r.bindBuffer(r.ARRAY_BUFFER,St);for(let bt=0;bt<Y.locationSize;bt++)N(Y.location+bt,tt/Y.locationSize,J,L,tt*dt,tt/Y.locationSize*bt*dt,xt)}}else if(O!==void 0){const L=O[Q];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(Y.location,L);break;case 3:r.vertexAttrib3fv(Y.location,L);break;case 4:r.vertexAttrib4fv(Y.location,L);break;default:r.vertexAttrib1fv(Y.location,L)}}}}z()}function H(){Z();for(const C in s){const V=s[C];for(const lt in V){const rt=V[lt];for(const gt in rt)_(rt[gt].object),delete rt[gt];delete V[lt]}delete s[C]}}function G(C){if(s[C.id]===void 0)return;const V=s[C.id];for(const lt in V){const rt=V[lt];for(const gt in rt)_(rt[gt].object),delete rt[gt];delete V[lt]}delete s[C.id]}function F(C){for(const V in s){const lt=s[V];if(lt[C.id]===void 0)continue;const rt=lt[C.id];for(const gt in rt)_(rt[gt].object),delete rt[gt];delete lt[C.id]}}function Z(){w(),f=!0,c!==l&&(c=l,m(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:w,dispose:H,releaseStatesOfGeometry:G,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:y,disableUnusedAttributes:z}}function ab(r,t,i){let s;function l(m){s=m}function c(m,_){r.drawArrays(s,m,_),i.update(_,s,1)}function f(m,_,v){v!==0&&(r.drawArraysInstanced(s,m,_,v),i.update(_,s,v))}function d(m,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,_,0,v);let S=0;for(let E=0;E<v;E++)S+=_[E];i.update(S,s,1)}function p(m,_,v,x){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],_[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(s,m,0,_,0,x,0,v);let E=0;for(let R=0;R<v;R++)E+=_[R]*x[R];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function sb(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==wi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const Z=F===Or&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Hi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==pa&&!Z)}function p(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),z=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,G=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:z,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:H,maxSamples:G}}function rb(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new As,d=new re,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||s!==0||l;return l=x,s=v.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=_(v,x,0)},this.setState=function(v,x,S){const E=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,g=r.get(v);if(!l||E===null||E.length===0||c&&!y)c?_(null):m();else{const z=c?0:s,N=z*4;let D=g.clippingState||null;p.value=D,D=_(E,x,N,S);for(let H=0;H!==N;++H)D[H]=i[H];g.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=z}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(v,x,S,E){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=p.value,E!==!0||y===null){const g=S+R*4,z=x.matrixWorldInverse;d.getNormalMatrix(z),(y===null||y.length<g)&&(y=new Float32Array(g));for(let N=0,D=S;N!==R;++N,D+=4)f.copy(v[N]).applyMatrix4(z,d),f.normal.toArray(y,D),y[D+3]=f.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,y}}function ob(r){let t=new WeakMap;function i(f,d){return d===Kh?f.mapping=Dr:d===Jh&&(f.mapping=Ur),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Kh||d===Jh)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new ey(p.height);return m.fromEquirectangularTexture(r,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Ar=4,cv=[.125,.215,.35,.446,.526,.582],ws=20,Uh=new M0,uv=new de;let Lh=null,Nh=0,Ph=0,Oh=!1;const Rs=(1+Math.sqrt(5))/2,Tr=1/Rs,fv=[new X(-Rs,Tr,0),new X(Rs,Tr,0),new X(-Tr,0,Rs),new X(Tr,0,Rs),new X(0,Rs,-Tr),new X(0,Rs,Tr),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],lb=new X;class hv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=lb}=c;Lh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lh,Nh,Ph),this._renderer.xr.enabled=Oh,t.scissorTest=!1,Nc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Dr||t.mapping===Ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:Or,format:wi,colorSpace:Lr,depthBuffer:!1},l=dv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dv(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cb(c)),this._blurMaterial=ub(c,t,i)}return l}_compileMaterial(t){const i=new vi(this._lodPlanes[0],t);this._renderer.compile(i,Uh)}_sceneToCubeUV(t,i,s,l,c){const p=new si(90,1,i,s),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(uv),v.toneMapping=Ja,v.autoClear=!1;const E=new Vd({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),R=new vi(new el,E);let y=!1;const g=t.background;g?g.isColor&&(E.color.copy(g),t.background=null,y=!0):(E.color.copy(uv),y=!0);for(let z=0;z<6;z++){const N=z%3;N===0?(p.up.set(0,m[z],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[z],c.y,c.z)):N===1?(p.up.set(0,0,m[z]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[z],c.z)):(p.up.set(0,m[z],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[z]));const D=this._cubeSize;Nc(l,N*D,z>2?D:0,D,D),v.setRenderTarget(l),y&&v.render(R,p),v.render(t,p)}R.geometry.dispose(),R.material.dispose(),v.toneMapping=S,v.autoClear=x,t.background=g}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Dr||t.mapping===Ur;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=mv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new vi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;Nc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,Uh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=fv[(l-c-1)%fv.length];this._blur(t,c-1,c,f,d)}i.autoClear=s}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new vi(this._lodPlanes[l],m),x=m.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*ws-1),R=c/E,y=isFinite(c)?1+Math.floor(_*R):ws;y>ws&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ws}`);const g=[];let z=0;for(let F=0;F<ws;++F){const Z=F/R,w=Math.exp(-Z*Z/2);g.push(w),F===0?z+=w:F<y&&(z+=2*w)}for(let F=0;F<g.length;F++)g[F]=g[F]/z;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=E,x.mipInt.value=N-s;const D=this._sizeLods[l],H=3*D*(l>N-Ar?l-N+Ar:0),G=4*(this._cubeSize-D);Nc(i,H,G,3*D,2*D),p.setRenderTarget(i),p.render(v,Uh)}}function cb(r){const t=[],i=[],s=[];let l=r;const c=r-Ar+1+cv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>r-Ar?p=cv[f-r+Ar-1]:f===0&&(p=0),s.push(p);const m=1/(d-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,E=6,R=3,y=2,g=1,z=new Float32Array(R*E*S),N=new Float32Array(y*E*S),D=new Float32Array(g*E*S);for(let G=0;G<S;G++){const F=G%3*2/3-1,Z=G>2?0:-1,w=[F,Z,0,F+2/3,Z,0,F+2/3,Z+1,0,F,Z,0,F+2/3,Z+1,0,F,Z+1,0];z.set(w,R*E*G),N.set(x,y*E*G);const C=[G,G,G,G,G,G];D.set(C,g*E*G)}const H=new Bn;H.setAttribute("position",new Bi(z,R)),H.setAttribute("uv",new Bi(N,y)),H.setAttribute("faceIndex",new Bi(D,g)),t.push(H),l>Ar&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function dv(r,t,i){const s=new ts(r,t,i);return s.texture.mapping=Kc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Nc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function ub(r,t,i){const s=new Float32Array(ws),l=new X(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function pv(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function mv(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function qd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fb(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Kh||p===Jh,_=p===Dr||p===Ur;if(m||_){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new hv(r)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new hv(r)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function hb(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Vc("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function db(r,t,i,s){const l={},c=new WeakMap;function f(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const S=c.get(x);S&&(t.remove(S),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function p(v){const x=v.attributes;for(const S in x)t.update(x[S],r.ARRAY_BUFFER)}function m(v){const x=[],S=v.index,E=v.attributes.position;let R=0;if(S!==null){const z=S.array;R=S.version;for(let N=0,D=z.length;N<D;N+=3){const H=z[N+0],G=z[N+1],F=z[N+2];x.push(H,G,G,F,F,H)}}else if(E!==void 0){const z=E.array;R=E.version;for(let N=0,D=z.length/3-1;N<D;N+=3){const H=N+0,G=N+1,F=N+2;x.push(H,G,G,F,F,H)}}else return;const y=new(u0(x)?p0:d0)(x,1);y.version=R;const g=c.get(v);g&&t.remove(g),c.set(v,y)}function _(v){const x=c.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&m(v)}else m(v);return c.get(v)}return{get:d,update:p,getWireframeAttribute:_}}function pb(r,t,i){let s;function l(x){s=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function p(x,S){r.drawElements(s,S,c,x*f),i.update(S,s,1)}function m(x,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,x*f,E),i.update(S,s,E))}function _(x,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,x,0,E);let y=0;for(let g=0;g<E;g++)y+=S[g];i.update(y,s,1)}function v(x,S,E,R){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/f,S[g],R[g]);else{y.multiDrawElementsInstancedWEBGL(s,S,0,c,x,0,R,0,E);let g=0;for(let z=0;z<E;z++)g+=S[z]*R[z];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function mb(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function _b(r,t,i){const s=new WeakMap,l=new Be;function c(f,d,p){const m=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let x=s.get(d);if(x===void 0||x.count!==v){let C=function(){Z.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var S=C;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],z=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),R===!0&&(D=2),y===!0&&(D=3);let H=d.attributes.position.count*D,G=1;H>t.maxTextureSize&&(G=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const F=new Float32Array(H*G*4*v),Z=new f0(F,H,G,v);Z.type=pa,Z.needsUpdate=!0;const w=D*4;for(let V=0;V<v;V++){const lt=g[V],rt=z[V],gt=N[V],ht=H*G*4*V;for(let O=0;O<lt.count;O++){const Q=O*w;E===!0&&(l.fromBufferAttribute(lt,O),F[ht+Q+0]=l.x,F[ht+Q+1]=l.y,F[ht+Q+2]=l.z,F[ht+Q+3]=0),R===!0&&(l.fromBufferAttribute(rt,O),F[ht+Q+4]=l.x,F[ht+Q+5]=l.y,F[ht+Q+6]=l.z,F[ht+Q+7]=0),y===!0&&(l.fromBufferAttribute(gt,O),F[ht+Q+8]=l.x,F[ht+Q+9]=l.y,F[ht+Q+10]=l.z,F[ht+Q+11]=gt.itemSize===4?l.w:1)}}x={count:v,texture:Z,size:new xe(H,G)},s.set(d,x),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const R=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",R),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function gb(r,t,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,_=p.geometry,v=t.get(p,_);if(l.get(v)!==m&&(t.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return v}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const E0=new Yn,_v=new v0(1,1),T0=new f0,b0=new BM,A0=new g0,gv=[],vv=[],xv=new Float32Array(16),Sv=new Float32Array(9),Mv=new Float32Array(4);function Hr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=gv[l];if(c===void 0&&(c=new Float32Array(l),gv[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function pn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function mn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function eu(r,t){let i=vv[t];i===void 0&&(i=new Int32Array(t),vv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function vb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function xb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2fv(this.addr,t),mn(i,t)}}function Sb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;r.uniform3fv(this.addr,t),mn(i,t)}}function Mb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4fv(this.addr,t),mn(i,t)}}function yb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;Mv.set(s),r.uniformMatrix2fv(this.addr,!1,Mv),mn(i,s)}}function Eb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;Sv.set(s),r.uniformMatrix3fv(this.addr,!1,Sv),mn(i,s)}}function Tb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;xv.set(s),r.uniformMatrix4fv(this.addr,!1,xv),mn(i,s)}}function bb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function Ab(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2iv(this.addr,t),mn(i,t)}}function Rb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;r.uniform3iv(this.addr,t),mn(i,t)}}function Cb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4iv(this.addr,t),mn(i,t)}}function wb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function Db(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2uiv(this.addr,t),mn(i,t)}}function Ub(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;r.uniform3uiv(this.addr,t),mn(i,t)}}function Lb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4uiv(this.addr,t),mn(i,t)}}function Nb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(_v.compareFunction=c0,c=_v):c=E0,i.setTexture2D(t||c,l)}function Pb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||b0,l)}function Ob(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||A0,l)}function zb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||T0,l)}function Ib(r){switch(r){case 5126:return vb;case 35664:return xb;case 35665:return Sb;case 35666:return Mb;case 35674:return yb;case 35675:return Eb;case 35676:return Tb;case 5124:case 35670:return bb;case 35667:case 35671:return Ab;case 35668:case 35672:return Rb;case 35669:case 35673:return Cb;case 5125:return wb;case 36294:return Db;case 36295:return Ub;case 36296:return Lb;case 35678:case 36198:case 36298:case 36306:case 35682:return Nb;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return Ob;case 36289:case 36303:case 36311:case 36292:return zb}}function Fb(r,t){r.uniform1fv(this.addr,t)}function Bb(r,t){const i=Hr(t,this.size,2);r.uniform2fv(this.addr,i)}function Hb(r,t){const i=Hr(t,this.size,3);r.uniform3fv(this.addr,i)}function Gb(r,t){const i=Hr(t,this.size,4);r.uniform4fv(this.addr,i)}function Vb(r,t){const i=Hr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function kb(r,t){const i=Hr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function Xb(r,t){const i=Hr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function Wb(r,t){r.uniform1iv(this.addr,t)}function qb(r,t){r.uniform2iv(this.addr,t)}function Yb(r,t){r.uniform3iv(this.addr,t)}function jb(r,t){r.uniform4iv(this.addr,t)}function Zb(r,t){r.uniform1uiv(this.addr,t)}function Qb(r,t){r.uniform2uiv(this.addr,t)}function Kb(r,t){r.uniform3uiv(this.addr,t)}function Jb(r,t){r.uniform4uiv(this.addr,t)}function $b(r,t,i){const s=this.cache,l=t.length,c=eu(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||E0,c[f])}function tA(r,t,i){const s=this.cache,l=t.length,c=eu(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||b0,c[f])}function eA(r,t,i){const s=this.cache,l=t.length,c=eu(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||A0,c[f])}function nA(r,t,i){const s=this.cache,l=t.length,c=eu(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||T0,c[f])}function iA(r){switch(r){case 5126:return Fb;case 35664:return Bb;case 35665:return Hb;case 35666:return Gb;case 35674:return Vb;case 35675:return kb;case 35676:return Xb;case 5124:case 35670:return Wb;case 35667:case 35671:return qb;case 35668:case 35672:return Yb;case 35669:case 35673:return jb;case 5125:return Zb;case 36294:return Qb;case 36295:return Kb;case 36296:return Jb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return tA;case 35680:case 36300:case 36308:case 36293:return eA;case 36289:case 36303:case 36311:case 36292:return nA}}class aA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Ib(i.type)}}class sA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=iA(i.type)}}class rA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const zh=/(\w+)(\])?(\[|\.)?/g;function yv(r,t){r.seq.push(t),r.map[t.id]=t}function oA(r,t,i){const s=r.name,l=s.length;for(zh.lastIndex=0;;){const c=zh.exec(s),f=zh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){yv(i,m===void 0?new aA(d,r,t):new sA(d,r,t));break}else{let v=i.map[d];v===void 0&&(v=new rA(d),yv(i,v)),i=v}}}class Wc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);oA(c,f,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function Ev(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const lA=37297;let cA=0;function uA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const Tv=new re;function fA(r){be._getMatrix(Tv,be.workingColorSpace,r);const t=`mat3( ${Tv.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(r)){case qc:return[t,"LinearTransferOETF"];case Le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function bv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+uA(r.getShaderSource(t),f)}else return l}function hA(r,t){const i=fA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function dA(r,t){let i;switch(t){case qv:i="Linear";break;case Yv:i="Reinhard";break;case jv:i="Cineon";break;case Zv:i="ACESFilmic";break;case Kv:i="AgX";break;case Jv:i="Neutral";break;case Qv:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Pc=new X;function pA(){be.getLuminanceCoefficients(Pc);const r=Pc.x.toFixed(4),t=Pc.y.toFixed(4),i=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function _A(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function gA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function Wo(r){return r!==""}function Av(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(r){return r.replace(vA,SA)}const xA=new Map;function SA(r,t){let i=ce[t];if(i===void 0){const s=xA.get(t);if(s!==void 0)i=ce[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Cd(i)}const MA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cv(r){return r.replace(MA,yA)}function yA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function wv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function EA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===zS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ha&&(t="SHADOWMAP_TYPE_VSM"),t}function TA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Dr:case Ur:t="ENVMAP_TYPE_CUBE";break;case Kc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ur:t="ENVMAP_MODE_REFRACTION";break}return t}function AA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Wv:t="ENVMAP_BLENDING_MULTIPLY";break;case eM:t="ENVMAP_BLENDING_MIX";break;case nM:t="ENVMAP_BLENDING_ADD";break}return t}function RA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function CA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=EA(i),m=TA(i),_=bA(i),v=AA(i),x=RA(i),S=mA(i),E=_A(c),R=l.createProgram();let y,g,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Wo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Wo).join(`
`),g.length>0&&(g+=`
`)):(y=[wv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),g=[wv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ja?"#define TONE_MAPPING":"",i.toneMapping!==Ja?ce.tonemapping_pars_fragment:"",i.toneMapping!==Ja?dA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,hA("linearToOutputTexel",i.outputColorSpace),pA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wo).join(`
`)),f=Cd(f),f=Av(f,i),f=Rv(f,i),d=Cd(d),d=Av(d,i),d=Rv(d,i),f=Cv(f),d=Cv(d),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===Ng?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ng?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const N=z+y+f,D=z+g+d,H=Ev(l,l.VERTEX_SHADER,N),G=Ev(l,l.FRAGMENT_SHADER,D);l.attachShader(R,H),l.attachShader(R,G),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function F(V){if(r.debug.checkShaderErrors){const lt=l.getProgramInfoLog(R).trim(),rt=l.getShaderInfoLog(H).trim(),gt=l.getShaderInfoLog(G).trim();let ht=!0,O=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ht=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,H,G);else{const Q=bv(l,H,"vertex"),Y=bv(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+Q+`
`+Y)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(rt===""||gt==="")&&(O=!1);O&&(V.diagnostics={runnable:ht,programLog:lt,vertexShader:{log:rt,prefix:y},fragmentShader:{log:gt,prefix:g}})}l.deleteShader(H),l.deleteShader(G),Z=new Wc(l,R),w=gA(l,R)}let Z;this.getUniforms=function(){return Z===void 0&&F(this),Z};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,lA)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=cA++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=H,this.fragmentShader=G,this}let wA=0;class DA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new UA(t),i.set(t,s)),s}}class UA{constructor(t){this.id=wA++,this.code=t,this.usedTimes=0}}function LA(r,t,i,s,l,c,f){const d=new Gd,p=new DA,m=new Set,_=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return m.add(w),w===0?"uv":`uv${w}`}function y(w,C,V,lt,rt){const gt=lt.fog,ht=rt.geometry,O=w.isMeshStandardMaterial?lt.environment:null,Q=(w.isMeshStandardMaterial?i:t).get(w.envMap||O),Y=Q&&Q.mapping===Kc?Q.image.height:null,Mt=E[w.type];w.precision!==null&&(S=l.getMaxPrecision(w.precision),S!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",S,"instead."));const L=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,tt=L!==void 0?L.length:0;let vt=0;ht.morphAttributes.position!==void 0&&(vt=1),ht.morphAttributes.normal!==void 0&&(vt=2),ht.morphAttributes.color!==void 0&&(vt=3);let St,J,dt,xt;if(Mt){const Ae=Ii[Mt];St=Ae.vertexShader,J=Ae.fragmentShader}else St=w.vertexShader,J=w.fragmentShader,p.update(w),dt=p.getVertexShaderID(w),xt=p.getFragmentShaderID(w);const bt=r.getRenderTarget(),Dt=r.state.buffers.depth.getReversed(),le=rt.isInstancedMesh===!0,Zt=rt.isBatchedMesh===!0,ke=!!w.map,He=!!w.matcap,pe=!!Q,I=!!w.aoMap,Hn=!!w.lightMap,Se=!!w.bumpMap,ne=!!w.normalMap,kt=!!w.displacementMap,Pe=!!w.emissiveMap,Ht=!!w.metalnessMap,U=!!w.roughnessMap,b=w.anisotropy>0,et=w.clearcoat>0,pt=w.dispersion>0,yt=w.iridescence>0,ut=w.sheen>0,Nt=w.transmission>0,At=b&&!!w.anisotropyMap,Bt=et&&!!w.clearcoatMap,Jt=et&&!!w.clearcoatNormalMap,Tt=et&&!!w.clearcoatRoughnessMap,It=yt&&!!w.iridescenceMap,Yt=yt&&!!w.iridescenceThicknessMap,Qt=ut&&!!w.sheenColorMap,Pt=ut&&!!w.sheenRoughnessMap,ue=!!w.specularMap,ee=!!w.specularColorMap,Oe=!!w.specularIntensityMap,k=Nt&&!!w.transmissionMap,Ut=Nt&&!!w.thicknessMap,ot=!!w.gradientMap,mt=!!w.alphaMap,Ot=w.alphaTest>0,Lt=!!w.alphaHash,ie=!!w.extensions;let Xe=Ja;w.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Xe=r.toneMapping);const an={shaderID:Mt,shaderType:w.type,shaderName:w.name,vertexShader:St,fragmentShader:J,defines:w.defines,customVertexShaderID:dt,customFragmentShaderID:xt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:S,batching:Zt,batchingColor:Zt&&rt._colorsTexture!==null,instancing:le,instancingColor:le&&rt.instanceColor!==null,instancingMorph:le&&rt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:bt===null?r.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Lr,alphaToCoverage:!!w.alphaToCoverage,map:ke,matcap:He,envMap:pe,envMapMode:pe&&Q.mapping,envMapCubeUVHeight:Y,aoMap:I,lightMap:Hn,bumpMap:Se,normalMap:ne,displacementMap:x&&kt,emissiveMap:Pe,normalMapObjectSpace:ne&&w.normalMapType===rM,normalMapTangentSpace:ne&&w.normalMapType===l0,metalnessMap:Ht,roughnessMap:U,anisotropy:b,anisotropyMap:At,clearcoat:et,clearcoatMap:Bt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:Tt,dispersion:pt,iridescence:yt,iridescenceMap:It,iridescenceThicknessMap:Yt,sheen:ut,sheenColorMap:Qt,sheenRoughnessMap:Pt,specularMap:ue,specularColorMap:ee,specularIntensityMap:Oe,transmission:Nt,transmissionMap:k,thicknessMap:Ut,gradientMap:ot,opaque:w.transparent===!1&&w.blending===Rr&&w.alphaToCoverage===!1,alphaMap:mt,alphaTest:Ot,alphaHash:Lt,combine:w.combine,mapUv:ke&&R(w.map.channel),aoMapUv:I&&R(w.aoMap.channel),lightMapUv:Hn&&R(w.lightMap.channel),bumpMapUv:Se&&R(w.bumpMap.channel),normalMapUv:ne&&R(w.normalMap.channel),displacementMapUv:kt&&R(w.displacementMap.channel),emissiveMapUv:Pe&&R(w.emissiveMap.channel),metalnessMapUv:Ht&&R(w.metalnessMap.channel),roughnessMapUv:U&&R(w.roughnessMap.channel),anisotropyMapUv:At&&R(w.anisotropyMap.channel),clearcoatMapUv:Bt&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&R(w.sheenRoughnessMap.channel),specularMapUv:ue&&R(w.specularMap.channel),specularColorMapUv:ee&&R(w.specularColorMap.channel),specularIntensityMapUv:Oe&&R(w.specularIntensityMap.channel),transmissionMapUv:k&&R(w.transmissionMap.channel),thicknessMapUv:Ut&&R(w.thicknessMap.channel),alphaMapUv:mt&&R(w.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(ne||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ht.attributes.uv&&(ke||mt),fog:!!gt,useFog:w.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Dt,skinning:rt.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:vt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:Xe,decodeVideoTexture:ke&&w.map.isVideoTexture===!0&&be.getTransfer(w.map.colorSpace)===Le,decodeVideoTextureEmissive:Pe&&w.emissiveMap.isVideoTexture===!0&&be.getTransfer(w.emissiveMap.colorSpace)===Le,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===da,flipSided:w.side===qn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ie&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&w.extensions.multiDraw===!0||Zt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return an.vertexUv1s=m.has(1),an.vertexUv2s=m.has(2),an.vertexUv3s=m.has(3),m.clear(),an}function g(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)C.push(V),C.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(z(C,w),N(C,w),C.push(r.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function z(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function N(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=E[w.type];let V;if(C){const lt=Ii[C];V=Jc.clone(lt.uniforms)}else V=w.uniforms;return V}function H(w,C){let V;for(let lt=0,rt=_.length;lt<rt;lt++){const gt=_[lt];if(gt.cacheKey===C){V=gt,++V.usedTimes;break}}return V===void 0&&(V=new CA(r,C,w,c),_.push(V)),V}function G(w){if(--w.usedTimes===0){const C=_.indexOf(w);_[C]=_[_.length-1],_.pop(),w.destroy()}}function F(w){p.remove(w)}function Z(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:D,acquireProgram:H,releaseProgram:G,releaseShaderCache:F,programs:_,dispose:Z}}function NA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,p){r.get(f)[d]=p}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function PA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Dv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Uv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(v,x,S,E,R,y){let g=r[t];return g===void 0?(g={id:v.id,object:v,geometry:x,material:S,groupOrder:E,renderOrder:v.renderOrder,z:R,group:y},r[t]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=S,g.groupOrder=E,g.renderOrder=v.renderOrder,g.z=R,g.group=y),t++,g}function d(v,x,S,E,R,y){const g=f(v,x,S,E,R,y);S.transmission>0?s.push(g):S.transparent===!0?l.push(g):i.push(g)}function p(v,x,S,E,R,y){const g=f(v,x,S,E,R,y);S.transmission>0?s.unshift(g):S.transparent===!0?l.unshift(g):i.unshift(g)}function m(v,x){i.length>1&&i.sort(v||PA),s.length>1&&s.sort(x||Dv),l.length>1&&l.sort(x||Dv)}function _(){for(let v=t,x=r.length;v<x;v++){const S=r[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:_,sort:m}}function OA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Uv,r.set(s,[f])):l>=c.length?(f=new Uv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function zA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new X,color:new de};break;case"SpotLight":i={position:new X,direction:new X,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new X,color:new de,distance:0,decay:0};break;case"HemisphereLight":i={direction:new X,skyColor:new de,groundColor:new de};break;case"RectAreaLight":i={color:new de,position:new X,halfWidth:new X,halfHeight:new X};break}return r[t.id]=i,i}}}function IA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let FA=0;function BA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function HA(r){const t=new zA,i=IA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new X);const l=new X,c=new oe,f=new oe;function d(m){let _=0,v=0,x=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let S=0,E=0,R=0,y=0,g=0,z=0,N=0,D=0,H=0,G=0,F=0;m.sort(BA);for(let w=0,C=m.length;w<C;w++){const V=m[w],lt=V.color,rt=V.intensity,gt=V.distance,ht=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=lt.r*rt,v+=lt.g*rt,x+=lt.b*rt;else if(V.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(V.sh.coefficients[O],rt);F++}else if(V.isDirectionalLight){const O=t.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Q=V.shadow,Y=i.get(V);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,s.directionalShadow[S]=Y,s.directionalShadowMap[S]=ht,s.directionalShadowMatrix[S]=V.shadow.matrix,z++}s.directional[S]=O,S++}else if(V.isSpotLight){const O=t.get(V);O.position.setFromMatrixPosition(V.matrixWorld),O.color.copy(lt).multiplyScalar(rt),O.distance=gt,O.coneCos=Math.cos(V.angle),O.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),O.decay=V.decay,s.spot[R]=O;const Q=V.shadow;if(V.map&&(s.spotLightMap[H]=V.map,H++,Q.updateMatrices(V),V.castShadow&&G++),s.spotLightMatrix[R]=Q.matrix,V.castShadow){const Y=i.get(V);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,s.spotShadow[R]=Y,s.spotShadowMap[R]=ht,D++}R++}else if(V.isRectAreaLight){const O=t.get(V);O.color.copy(lt).multiplyScalar(rt),O.halfWidth.set(V.width*.5,0,0),O.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=O,y++}else if(V.isPointLight){const O=t.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),O.distance=V.distance,O.decay=V.decay,V.castShadow){const Q=V.shadow,Y=i.get(V);Y.shadowIntensity=Q.intensity,Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,Y.shadowCameraNear=Q.camera.near,Y.shadowCameraFar=Q.camera.far,s.pointShadow[E]=Y,s.pointShadowMap[E]=ht,s.pointShadowMatrix[E]=V.shadow.matrix,N++}s.point[E]=O,E++}else if(V.isHemisphereLight){const O=t.get(V);O.skyColor.copy(V.color).multiplyScalar(rt),O.groundColor.copy(V.groundColor).multiplyScalar(rt),s.hemi[g]=O,g++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=wt.LTC_FLOAT_1,s.rectAreaLTC2=wt.LTC_FLOAT_2):(s.rectAreaLTC1=wt.LTC_HALF_1,s.rectAreaLTC2=wt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=v,s.ambient[2]=x;const Z=s.hash;(Z.directionalLength!==S||Z.pointLength!==E||Z.spotLength!==R||Z.rectAreaLength!==y||Z.hemiLength!==g||Z.numDirectionalShadows!==z||Z.numPointShadows!==N||Z.numSpotShadows!==D||Z.numSpotMaps!==H||Z.numLightProbes!==F)&&(s.directional.length=S,s.spot.length=R,s.rectArea.length=y,s.point.length=E,s.hemi.length=g,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=D+H-G,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=F,Z.directionalLength=S,Z.pointLength=E,Z.spotLength=R,Z.rectAreaLength=y,Z.hemiLength=g,Z.numDirectionalShadows=z,Z.numPointShadows=N,Z.numSpotShadows=D,Z.numSpotMaps=H,Z.numLightProbes=F,s.version=FA++)}function p(m,_){let v=0,x=0,S=0,E=0,R=0;const y=_.matrixWorldInverse;for(let g=0,z=m.length;g<z;g++){const N=m[g];if(N.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),v++}else if(N.isSpotLight){const D=s.spot[S];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),S++}else if(N.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),f.identity(),c.copy(N.matrixWorld),c.premultiply(y),f.extractRotation(c),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(N.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(y),x++}else if(N.isHemisphereLight){const D=s.hemi[R];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(y),R++}}}return{setup:d,setupView:p,state:s}}function Lv(r){const t=new HA(r),i=[],s=[];function l(_){m.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function f(_){s.push(_)}function d(){t.setup(i)}function p(_){t.setupView(i,_)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function GA(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new Lv(r),t.set(l,[d])):c>=f.length?(d=new Lv(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const VA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function XA(r,t,i){let s=new kd;const l=new xe,c=new xe,f=new Be,d=new uy({depthPacking:sM}),p=new fy,m={},_=i.maxTextureSize,v={[$a]:qn,[qn]:$a,[da]:da},x=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:VA,fragmentShader:kA}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new Bn;E.setAttribute("position",new Bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new vi(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xv;let g=this.type;this.render=function(G,F,Z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;const w=r.getRenderTarget(),C=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),lt=r.state;lt.setBlending(_a),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const rt=g!==ha&&this.type===ha,gt=g===ha&&this.type!==ha;for(let ht=0,O=G.length;ht<O;ht++){const Q=G[ht],Y=Q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Mt=Y.getFrameExtents();if(l.multiply(Mt),c.copy(Y.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/Mt.x),l.x=c.x*Mt.x,Y.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/Mt.y),l.y=c.y*Mt.y,Y.mapSize.y=c.y)),Y.map===null||rt===!0||gt===!0){const tt=this.type!==ha?{minFilter:Di,magFilter:Di}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ts(l.x,l.y,tt),Y.map.texture.name=Q.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const L=Y.getViewportCount();for(let tt=0;tt<L;tt++){const vt=Y.getViewport(tt);f.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),lt.viewport(f),Y.updateMatrices(Q,tt),s=Y.getFrustum(),D(F,Z,Y.camera,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===ha&&z(Y,Z),Y.needsUpdate=!1}g=this.type,y.needsUpdate=!1,r.setRenderTarget(w,C,V)};function z(G,F){const Z=t.update(R);x.defines.VSM_SAMPLES!==G.blurSamples&&(x.defines.VSM_SAMPLES=G.blurSamples,S.defines.VSM_SAMPLES=G.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new ts(l.x,l.y)),x.uniforms.shadow_pass.value=G.map.texture,x.uniforms.resolution.value=G.mapSize,x.uniforms.radius.value=G.radius,r.setRenderTarget(G.mapPass),r.clear(),r.renderBufferDirect(F,null,Z,x,R,null),S.uniforms.shadow_pass.value=G.mapPass.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,r.setRenderTarget(G.map),r.clear(),r.renderBufferDirect(F,null,Z,S,R,null)}function N(G,F,Z,w){let C=null;const V=Z.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(V!==void 0)C=V;else if(C=Z.isPointLight===!0?p:d,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const lt=C.uuid,rt=F.uuid;let gt=m[lt];gt===void 0&&(gt={},m[lt]=gt);let ht=gt[rt];ht===void 0&&(ht=C.clone(),gt[rt]=ht,F.addEventListener("dispose",H)),C=ht}if(C.visible=F.visible,C.wireframe=F.wireframe,w===ha?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:v[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,Z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const lt=r.properties.get(C);lt.light=Z}return C}function D(G,F,Z,w,C){if(G.visible===!1)return;if(G.layers.test(F.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===ha)&&(!G.frustumCulled||s.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,G.matrixWorld);const rt=t.update(G),gt=G.material;if(Array.isArray(gt)){const ht=rt.groups;for(let O=0,Q=ht.length;O<Q;O++){const Y=ht[O],Mt=gt[Y.materialIndex];if(Mt&&Mt.visible){const L=N(G,Mt,w,C);G.onBeforeShadow(r,G,F,Z,rt,L,Y),r.renderBufferDirect(Z,null,rt,L,G,Y),G.onAfterShadow(r,G,F,Z,rt,L,Y)}}}else if(gt.visible){const ht=N(G,gt,w,C);G.onBeforeShadow(r,G,F,Z,rt,ht,null),r.renderBufferDirect(Z,null,rt,ht,G,null),G.onAfterShadow(r,G,F,Z,rt,ht,null)}}const lt=G.children;for(let rt=0,gt=lt.length;rt<gt;rt++)D(lt[rt],F,Z,w,C)}function H(G){G.target.removeEventListener("dispose",H);for(const Z in m){const w=m[Z],C=G.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const WA={[Xh]:Wh,[qh]:Zh,[Yh]:Qh,[wr]:jh,[Wh]:Xh,[Zh]:qh,[Qh]:Yh,[jh]:wr};function qA(r,t){function i(){let k=!1;const Ut=new Be;let ot=null;const mt=new Be(0,0,0,0);return{setMask:function(Ot){ot!==Ot&&!k&&(r.colorMask(Ot,Ot,Ot,Ot),ot=Ot)},setLocked:function(Ot){k=Ot},setClear:function(Ot,Lt,ie,Xe,an){an===!0&&(Ot*=Xe,Lt*=Xe,ie*=Xe),Ut.set(Ot,Lt,ie,Xe),mt.equals(Ut)===!1&&(r.clearColor(Ot,Lt,ie,Xe),mt.copy(Ut))},reset:function(){k=!1,ot=null,mt.set(-1,0,0,0)}}}function s(){let k=!1,Ut=!1,ot=null,mt=null,Ot=null;return{setReversed:function(Lt){if(Ut!==Lt){const ie=t.get("EXT_clip_control");Lt?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT),Ut=Lt;const Xe=Ot;Ot=null,this.setClear(Xe)}},getReversed:function(){return Ut},setTest:function(Lt){Lt?bt(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(Lt){ot!==Lt&&!k&&(r.depthMask(Lt),ot=Lt)},setFunc:function(Lt){if(Ut&&(Lt=WA[Lt]),mt!==Lt){switch(Lt){case Xh:r.depthFunc(r.NEVER);break;case Wh:r.depthFunc(r.ALWAYS);break;case qh:r.depthFunc(r.LESS);break;case wr:r.depthFunc(r.LEQUAL);break;case Yh:r.depthFunc(r.EQUAL);break;case jh:r.depthFunc(r.GEQUAL);break;case Zh:r.depthFunc(r.GREATER);break;case Qh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}mt=Lt}},setLocked:function(Lt){k=Lt},setClear:function(Lt){Ot!==Lt&&(Ut&&(Lt=1-Lt),r.clearDepth(Lt),Ot=Lt)},reset:function(){k=!1,ot=null,mt=null,Ot=null,Ut=!1}}}function l(){let k=!1,Ut=null,ot=null,mt=null,Ot=null,Lt=null,ie=null,Xe=null,an=null;return{setTest:function(Ae){k||(Ae?bt(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(Ae){Ut!==Ae&&!k&&(r.stencilMask(Ae),Ut=Ae)},setFunc:function(Ae,jn,_n){(ot!==Ae||mt!==jn||Ot!==_n)&&(r.stencilFunc(Ae,jn,_n),ot=Ae,mt=jn,Ot=_n)},setOp:function(Ae,jn,_n){(Lt!==Ae||ie!==jn||Xe!==_n)&&(r.stencilOp(Ae,jn,_n),Lt=Ae,ie=jn,Xe=_n)},setLocked:function(Ae){k=Ae},setClear:function(Ae){an!==Ae&&(r.clearStencil(Ae),an=Ae)},reset:function(){k=!1,Ut=null,ot=null,mt=null,Ot=null,Lt=null,ie=null,Xe=null,an=null}}}const c=new i,f=new s,d=new l,p=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,S=[],E=null,R=!1,y=null,g=null,z=null,N=null,D=null,H=null,G=null,F=new de(0,0,0),Z=0,w=!1,C=null,V=null,lt=null,rt=null,gt=null;const ht=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Q=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),O=Q>=1):Y.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),O=Q>=2);let Mt=null,L={};const tt=r.getParameter(r.SCISSOR_BOX),vt=r.getParameter(r.VIEWPORT),St=new Be().fromArray(tt),J=new Be().fromArray(vt);function dt(k,Ut,ot,mt){const Ot=new Uint8Array(4),Lt=r.createTexture();r.bindTexture(k,Lt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ie=0;ie<ot;ie++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(Ut,0,r.RGBA,1,1,mt,0,r.RGBA,r.UNSIGNED_BYTE,Ot):r.texImage2D(Ut+ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ot);return Lt}const xt={};xt[r.TEXTURE_2D]=dt(r.TEXTURE_2D,r.TEXTURE_2D,1),xt[r.TEXTURE_CUBE_MAP]=dt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[r.TEXTURE_2D_ARRAY]=dt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xt[r.TEXTURE_3D]=dt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),bt(r.DEPTH_TEST),f.setFunc(wr),Se(!1),ne(Rg),bt(r.CULL_FACE),I(_a);function bt(k){_[k]!==!0&&(r.enable(k),_[k]=!0)}function Dt(k){_[k]!==!1&&(r.disable(k),_[k]=!1)}function le(k,Ut){return v[k]!==Ut?(r.bindFramebuffer(k,Ut),v[k]=Ut,k===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ut),k===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Zt(k,Ut){let ot=S,mt=!1;if(k){ot=x.get(Ut),ot===void 0&&(ot=[],x.set(Ut,ot));const Ot=k.textures;if(ot.length!==Ot.length||ot[0]!==r.COLOR_ATTACHMENT0){for(let Lt=0,ie=Ot.length;Lt<ie;Lt++)ot[Lt]=r.COLOR_ATTACHMENT0+Lt;ot.length=Ot.length,mt=!0}}else ot[0]!==r.BACK&&(ot[0]=r.BACK,mt=!0);mt&&r.drawBuffers(ot)}function ke(k){return E!==k?(r.useProgram(k),E=k,!0):!1}const He={[Cs]:r.FUNC_ADD,[FS]:r.FUNC_SUBTRACT,[BS]:r.FUNC_REVERSE_SUBTRACT};He[HS]=r.MIN,He[GS]=r.MAX;const pe={[VS]:r.ZERO,[kS]:r.ONE,[XS]:r.SRC_COLOR,[Vh]:r.SRC_ALPHA,[QS]:r.SRC_ALPHA_SATURATE,[jS]:r.DST_COLOR,[qS]:r.DST_ALPHA,[WS]:r.ONE_MINUS_SRC_COLOR,[kh]:r.ONE_MINUS_SRC_ALPHA,[ZS]:r.ONE_MINUS_DST_COLOR,[YS]:r.ONE_MINUS_DST_ALPHA,[KS]:r.CONSTANT_COLOR,[JS]:r.ONE_MINUS_CONSTANT_COLOR,[$S]:r.CONSTANT_ALPHA,[tM]:r.ONE_MINUS_CONSTANT_ALPHA};function I(k,Ut,ot,mt,Ot,Lt,ie,Xe,an,Ae){if(k===_a){R===!0&&(Dt(r.BLEND),R=!1);return}if(R===!1&&(bt(r.BLEND),R=!0),k!==IS){if(k!==y||Ae!==w){if((g!==Cs||D!==Cs)&&(r.blendEquation(r.FUNC_ADD),g=Cs,D=Cs),Ae)switch(k){case Rr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Cg:r.blendFunc(r.ONE,r.ONE);break;case wg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Dg:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Rr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Cg:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case wg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Dg:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}z=null,N=null,H=null,G=null,F.set(0,0,0),Z=0,y=k,w=Ae}return}Ot=Ot||Ut,Lt=Lt||ot,ie=ie||mt,(Ut!==g||Ot!==D)&&(r.blendEquationSeparate(He[Ut],He[Ot]),g=Ut,D=Ot),(ot!==z||mt!==N||Lt!==H||ie!==G)&&(r.blendFuncSeparate(pe[ot],pe[mt],pe[Lt],pe[ie]),z=ot,N=mt,H=Lt,G=ie),(Xe.equals(F)===!1||an!==Z)&&(r.blendColor(Xe.r,Xe.g,Xe.b,an),F.copy(Xe),Z=an),y=k,w=!1}function Hn(k,Ut){k.side===da?Dt(r.CULL_FACE):bt(r.CULL_FACE);let ot=k.side===qn;Ut&&(ot=!ot),Se(ot),k.blending===Rr&&k.transparent===!1?I(_a):I(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),c.setMask(k.colorWrite);const mt=k.stencilWrite;d.setTest(mt),mt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Pe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?bt(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Se(k){C!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),C=k)}function ne(k){k!==PS?(bt(r.CULL_FACE),k!==V&&(k===Rg?r.cullFace(r.BACK):k===OS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),V=k}function kt(k){k!==lt&&(O&&r.lineWidth(k),lt=k)}function Pe(k,Ut,ot){k?(bt(r.POLYGON_OFFSET_FILL),(rt!==Ut||gt!==ot)&&(r.polygonOffset(Ut,ot),rt=Ut,gt=ot)):Dt(r.POLYGON_OFFSET_FILL)}function Ht(k){k?bt(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function U(k){k===void 0&&(k=r.TEXTURE0+ht-1),Mt!==k&&(r.activeTexture(k),Mt=k)}function b(k,Ut,ot){ot===void 0&&(Mt===null?ot=r.TEXTURE0+ht-1:ot=Mt);let mt=L[ot];mt===void 0&&(mt={type:void 0,texture:void 0},L[ot]=mt),(mt.type!==k||mt.texture!==Ut)&&(Mt!==ot&&(r.activeTexture(ot),Mt=ot),r.bindTexture(k,Ut||xt[k]),mt.type=k,mt.texture=Ut)}function et(){const k=L[Mt];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function pt(){try{r.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(){try{r.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{r.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Nt(){try{r.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{r.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{r.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Jt(){try{r.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{r.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{r.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Yt(){try{r.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qt(k){St.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),St.copy(k))}function Pt(k){J.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function ue(k,Ut){let ot=m.get(Ut);ot===void 0&&(ot=new WeakMap,m.set(Ut,ot));let mt=ot.get(k);mt===void 0&&(mt=r.getUniformBlockIndex(Ut,k.name),ot.set(k,mt))}function ee(k,Ut){const mt=m.get(Ut).get(k);p.get(Ut)!==mt&&(r.uniformBlockBinding(Ut,mt,k.__bindingPointIndex),p.set(Ut,mt))}function Oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},Mt=null,L={},v={},x=new WeakMap,S=[],E=null,R=!1,y=null,g=null,z=null,N=null,D=null,H=null,G=null,F=new de(0,0,0),Z=0,w=!1,C=null,V=null,lt=null,rt=null,gt=null,St.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:bt,disable:Dt,bindFramebuffer:le,drawBuffers:Zt,useProgram:ke,setBlending:I,setMaterial:Hn,setFlipSided:Se,setCullFace:ne,setLineWidth:kt,setPolygonOffset:Pe,setScissorTest:Ht,activeTexture:U,bindTexture:b,unbindTexture:et,compressedTexImage2D:pt,compressedTexImage3D:yt,texImage2D:It,texImage3D:Yt,updateUBOMapping:ue,uniformBlockBinding:ee,texStorage2D:Jt,texStorage3D:Tt,texSubImage2D:ut,texSubImage3D:Nt,compressedTexSubImage2D:At,compressedTexSubImage3D:Bt,scissor:Qt,viewport:Pt,reset:Oe}}function YA(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new xe,_=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,b){return S?new OffscreenCanvas(U,b):jc("canvas")}function R(U,b,et){let pt=1;const yt=Ht(U);if((yt.width>et||yt.height>et)&&(pt=et/Math.max(yt.width,yt.height)),pt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ut=Math.floor(pt*yt.width),Nt=Math.floor(pt*yt.height);v===void 0&&(v=E(ut,Nt));const At=b?E(ut,Nt):v;return At.width=ut,At.height=Nt,At.getContext("2d").drawImage(U,0,0,ut,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ut+"x"+Nt+")."),At}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),U;return U}function y(U){return U.generateMipmaps}function g(U){r.generateMipmap(U)}function z(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(U,b,et,pt,yt=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ut=b;if(b===r.RED&&(et===r.FLOAT&&(ut=r.R32F),et===r.HALF_FLOAT&&(ut=r.R16F),et===r.UNSIGNED_BYTE&&(ut=r.R8)),b===r.RED_INTEGER&&(et===r.UNSIGNED_BYTE&&(ut=r.R8UI),et===r.UNSIGNED_SHORT&&(ut=r.R16UI),et===r.UNSIGNED_INT&&(ut=r.R32UI),et===r.BYTE&&(ut=r.R8I),et===r.SHORT&&(ut=r.R16I),et===r.INT&&(ut=r.R32I)),b===r.RG&&(et===r.FLOAT&&(ut=r.RG32F),et===r.HALF_FLOAT&&(ut=r.RG16F),et===r.UNSIGNED_BYTE&&(ut=r.RG8)),b===r.RG_INTEGER&&(et===r.UNSIGNED_BYTE&&(ut=r.RG8UI),et===r.UNSIGNED_SHORT&&(ut=r.RG16UI),et===r.UNSIGNED_INT&&(ut=r.RG32UI),et===r.BYTE&&(ut=r.RG8I),et===r.SHORT&&(ut=r.RG16I),et===r.INT&&(ut=r.RG32I)),b===r.RGB_INTEGER&&(et===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),et===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),et===r.UNSIGNED_INT&&(ut=r.RGB32UI),et===r.BYTE&&(ut=r.RGB8I),et===r.SHORT&&(ut=r.RGB16I),et===r.INT&&(ut=r.RGB32I)),b===r.RGBA_INTEGER&&(et===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),et===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),et===r.UNSIGNED_INT&&(ut=r.RGBA32UI),et===r.BYTE&&(ut=r.RGBA8I),et===r.SHORT&&(ut=r.RGBA16I),et===r.INT&&(ut=r.RGBA32I)),b===r.RGB&&et===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),b===r.RGBA){const Nt=yt?qc:be.getTransfer(pt);et===r.FLOAT&&(ut=r.RGBA32F),et===r.HALF_FLOAT&&(ut=r.RGBA16F),et===r.UNSIGNED_BYTE&&(ut=Nt===Le?r.SRGB8_ALPHA8:r.RGBA8),et===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),et===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function D(U,b){let et;return U?b===null||b===Ls||b===Qo?et=r.DEPTH24_STENCIL8:b===pa?et=r.DEPTH32F_STENCIL8:b===Zo&&(et=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ls||b===Qo?et=r.DEPTH_COMPONENT24:b===pa?et=r.DEPTH_COMPONENT32F:b===Zo&&(et=r.DEPTH_COMPONENT16),et}function H(U,b){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Di&&U.minFilter!==Fi?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function G(U){const b=U.target;b.removeEventListener("dispose",G),Z(b),b.isVideoTexture&&_.delete(b)}function F(U){const b=U.target;b.removeEventListener("dispose",F),C(b)}function Z(U){const b=s.get(U);if(b.__webglInit===void 0)return;const et=U.source,pt=x.get(et);if(pt){const yt=pt[b.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&w(U),Object.keys(pt).length===0&&x.delete(et)}s.remove(U)}function w(U){const b=s.get(U);r.deleteTexture(b.__webglTexture);const et=U.source,pt=x.get(et);delete pt[b.__cacheKey],f.memory.textures--}function C(U){const b=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(b.__webglFramebuffer[pt]))for(let yt=0;yt<b.__webglFramebuffer[pt].length;yt++)r.deleteFramebuffer(b.__webglFramebuffer[pt][yt]);else r.deleteFramebuffer(b.__webglFramebuffer[pt]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[pt])}else{if(Array.isArray(b.__webglFramebuffer))for(let pt=0;pt<b.__webglFramebuffer.length;pt++)r.deleteFramebuffer(b.__webglFramebuffer[pt]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pt=0;pt<b.__webglColorRenderbuffer.length;pt++)b.__webglColorRenderbuffer[pt]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[pt]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const et=U.textures;for(let pt=0,yt=et.length;pt<yt;pt++){const ut=s.get(et[pt]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),f.memory.textures--),s.remove(et[pt])}s.remove(U)}let V=0;function lt(){V=0}function rt(){const U=V;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),V+=1,U}function gt(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function ht(U,b){const et=s.get(U);if(U.isVideoTexture&&kt(U),U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){const pt=U.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(et,U,b);return}}i.bindTexture(r.TEXTURE_2D,et.__webglTexture,r.TEXTURE0+b)}function O(U,b){const et=s.get(U);if(U.version>0&&et.__version!==U.version){J(et,U,b);return}i.bindTexture(r.TEXTURE_2D_ARRAY,et.__webglTexture,r.TEXTURE0+b)}function Q(U,b){const et=s.get(U);if(U.version>0&&et.__version!==U.version){J(et,U,b);return}i.bindTexture(r.TEXTURE_3D,et.__webglTexture,r.TEXTURE0+b)}function Y(U,b){const et=s.get(U);if(U.version>0&&et.__version!==U.version){dt(et,U,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture,r.TEXTURE0+b)}const Mt={[$h]:r.REPEAT,[Ds]:r.CLAMP_TO_EDGE,[td]:r.MIRRORED_REPEAT},L={[Di]:r.NEAREST,[iM]:r.NEAREST_MIPMAP_NEAREST,[hc]:r.NEAREST_MIPMAP_LINEAR,[Fi]:r.LINEAR,[rh]:r.LINEAR_MIPMAP_NEAREST,[Us]:r.LINEAR_MIPMAP_LINEAR},tt={[oM]:r.NEVER,[dM]:r.ALWAYS,[lM]:r.LESS,[c0]:r.LEQUAL,[cM]:r.EQUAL,[hM]:r.GEQUAL,[uM]:r.GREATER,[fM]:r.NOTEQUAL};function vt(U,b){if(b.type===pa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Fi||b.magFilter===rh||b.magFilter===hc||b.magFilter===Us||b.minFilter===Fi||b.minFilter===rh||b.minFilter===hc||b.minFilter===Us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,Mt[b.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,Mt[b.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,Mt[b.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,L[b.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,L[b.minFilter]),b.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,tt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Di||b.minFilter!==hc&&b.minFilter!==Us||b.type===pa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function St(U,b){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",G));const pt=b.source;let yt=x.get(pt);yt===void 0&&(yt={},x.set(pt,yt));const ut=gt(b);if(ut!==U.__cacheKey){yt[ut]===void 0&&(yt[ut]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,et=!0),yt[ut].usedTimes++;const Nt=yt[U.__cacheKey];Nt!==void 0&&(yt[U.__cacheKey].usedTimes--,Nt.usedTimes===0&&w(b)),U.__cacheKey=ut,U.__webglTexture=yt[ut].texture}return et}function J(U,b,et){let pt=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pt=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pt=r.TEXTURE_3D);const yt=St(U,b),ut=b.source;i.bindTexture(pt,U.__webglTexture,r.TEXTURE0+et);const Nt=s.get(ut);if(ut.version!==Nt.__version||yt===!0){i.activeTexture(r.TEXTURE0+et);const At=be.getPrimaries(be.workingColorSpace),Bt=b.colorSpace===Ka?null:be.getPrimaries(b.colorSpace),Jt=b.colorSpace===Ka||At===Bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let Tt=R(b.image,!1,l.maxTextureSize);Tt=Pe(b,Tt);const It=c.convert(b.format,b.colorSpace),Yt=c.convert(b.type);let Qt=N(b.internalFormat,It,Yt,b.colorSpace,b.isVideoTexture);vt(pt,b);let Pt;const ue=b.mipmaps,ee=b.isVideoTexture!==!0,Oe=Nt.__version===void 0||yt===!0,k=ut.dataReady,Ut=H(b,Tt);if(b.isDepthTexture)Qt=D(b.format===Jo,b.type),Oe&&(ee?i.texStorage2D(r.TEXTURE_2D,1,Qt,Tt.width,Tt.height):i.texImage2D(r.TEXTURE_2D,0,Qt,Tt.width,Tt.height,0,It,Yt,null));else if(b.isDataTexture)if(ue.length>0){ee&&Oe&&i.texStorage2D(r.TEXTURE_2D,Ut,Qt,ue[0].width,ue[0].height);for(let ot=0,mt=ue.length;ot<mt;ot++)Pt=ue[ot],ee?k&&i.texSubImage2D(r.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,It,Yt,Pt.data):i.texImage2D(r.TEXTURE_2D,ot,Qt,Pt.width,Pt.height,0,It,Yt,Pt.data);b.generateMipmaps=!1}else ee?(Oe&&i.texStorage2D(r.TEXTURE_2D,Ut,Qt,Tt.width,Tt.height),k&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Tt.width,Tt.height,It,Yt,Tt.data)):i.texImage2D(r.TEXTURE_2D,0,Qt,Tt.width,Tt.height,0,It,Yt,Tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ee&&Oe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ut,Qt,ue[0].width,ue[0].height,Tt.depth);for(let ot=0,mt=ue.length;ot<mt;ot++)if(Pt=ue[ot],b.format!==wi)if(It!==null)if(ee){if(k)if(b.layerUpdates.size>0){const Ot=lv(Pt.width,Pt.height,b.format,b.type);for(const Lt of b.layerUpdates){const ie=Pt.data.subarray(Lt*Ot/Pt.data.BYTES_PER_ELEMENT,(Lt+1)*Ot/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,Lt,Pt.width,Pt.height,1,It,ie)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,0,Pt.width,Pt.height,Tt.depth,It,Pt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ot,Qt,Pt.width,Pt.height,Tt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?k&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ot,0,0,0,Pt.width,Pt.height,Tt.depth,It,Yt,Pt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ot,Qt,Pt.width,Pt.height,Tt.depth,0,It,Yt,Pt.data)}else{ee&&Oe&&i.texStorage2D(r.TEXTURE_2D,Ut,Qt,ue[0].width,ue[0].height);for(let ot=0,mt=ue.length;ot<mt;ot++)Pt=ue[ot],b.format!==wi?It!==null?ee?k&&i.compressedTexSubImage2D(r.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,It,Pt.data):i.compressedTexImage2D(r.TEXTURE_2D,ot,Qt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?k&&i.texSubImage2D(r.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,It,Yt,Pt.data):i.texImage2D(r.TEXTURE_2D,ot,Qt,Pt.width,Pt.height,0,It,Yt,Pt.data)}else if(b.isDataArrayTexture)if(ee){if(Oe&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ut,Qt,Tt.width,Tt.height,Tt.depth),k)if(b.layerUpdates.size>0){const ot=lv(Tt.width,Tt.height,b.format,b.type);for(const mt of b.layerUpdates){const Ot=Tt.data.subarray(mt*ot/Tt.data.BYTES_PER_ELEMENT,(mt+1)*ot/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,mt,Tt.width,Tt.height,1,It,Yt,Ot)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,It,Yt,Tt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Qt,Tt.width,Tt.height,Tt.depth,0,It,Yt,Tt.data);else if(b.isData3DTexture)ee?(Oe&&i.texStorage3D(r.TEXTURE_3D,Ut,Qt,Tt.width,Tt.height,Tt.depth),k&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,It,Yt,Tt.data)):i.texImage3D(r.TEXTURE_3D,0,Qt,Tt.width,Tt.height,Tt.depth,0,It,Yt,Tt.data);else if(b.isFramebufferTexture){if(Oe)if(ee)i.texStorage2D(r.TEXTURE_2D,Ut,Qt,Tt.width,Tt.height);else{let ot=Tt.width,mt=Tt.height;for(let Ot=0;Ot<Ut;Ot++)i.texImage2D(r.TEXTURE_2D,Ot,Qt,ot,mt,0,It,Yt,null),ot>>=1,mt>>=1}}else if(ue.length>0){if(ee&&Oe){const ot=Ht(ue[0]);i.texStorage2D(r.TEXTURE_2D,Ut,Qt,ot.width,ot.height)}for(let ot=0,mt=ue.length;ot<mt;ot++)Pt=ue[ot],ee?k&&i.texSubImage2D(r.TEXTURE_2D,ot,0,0,It,Yt,Pt):i.texImage2D(r.TEXTURE_2D,ot,Qt,It,Yt,Pt);b.generateMipmaps=!1}else if(ee){if(Oe){const ot=Ht(Tt);i.texStorage2D(r.TEXTURE_2D,Ut,Qt,ot.width,ot.height)}k&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,It,Yt,Tt)}else i.texImage2D(r.TEXTURE_2D,0,Qt,It,Yt,Tt);y(b)&&g(pt),Nt.__version=ut.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function dt(U,b,et){if(b.image.length!==6)return;const pt=St(U,b),yt=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+et);const ut=s.get(yt);if(yt.version!==ut.__version||pt===!0){i.activeTexture(r.TEXTURE0+et);const Nt=be.getPrimaries(be.workingColorSpace),At=b.colorSpace===Ka?null:be.getPrimaries(b.colorSpace),Bt=b.colorSpace===Ka||Nt===At?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const Jt=b.isCompressedTexture||b.image[0].isCompressedTexture,Tt=b.image[0]&&b.image[0].isDataTexture,It=[];for(let mt=0;mt<6;mt++)!Jt&&!Tt?It[mt]=R(b.image[mt],!0,l.maxCubemapSize):It[mt]=Tt?b.image[mt].image:b.image[mt],It[mt]=Pe(b,It[mt]);const Yt=It[0],Qt=c.convert(b.format,b.colorSpace),Pt=c.convert(b.type),ue=N(b.internalFormat,Qt,Pt,b.colorSpace),ee=b.isVideoTexture!==!0,Oe=ut.__version===void 0||pt===!0,k=yt.dataReady;let Ut=H(b,Yt);vt(r.TEXTURE_CUBE_MAP,b);let ot;if(Jt){ee&&Oe&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ut,ue,Yt.width,Yt.height);for(let mt=0;mt<6;mt++){ot=It[mt].mipmaps;for(let Ot=0;Ot<ot.length;Ot++){const Lt=ot[Ot];b.format!==wi?Qt!==null?ee?k&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ot,0,0,Lt.width,Lt.height,Qt,Lt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ot,ue,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?k&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ot,0,0,Lt.width,Lt.height,Qt,Pt,Lt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ot,ue,Lt.width,Lt.height,0,Qt,Pt,Lt.data)}}}else{if(ot=b.mipmaps,ee&&Oe){ot.length>0&&Ut++;const mt=Ht(It[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ut,ue,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Tt){ee?k&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,It[mt].width,It[mt].height,Qt,Pt,It[mt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ue,It[mt].width,It[mt].height,0,Qt,Pt,It[mt].data);for(let Ot=0;Ot<ot.length;Ot++){const ie=ot[Ot].image[mt].image;ee?k&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ot+1,0,0,ie.width,ie.height,Qt,Pt,ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ot+1,ue,ie.width,ie.height,0,Qt,Pt,ie.data)}}else{ee?k&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Qt,Pt,It[mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ue,Qt,Pt,It[mt]);for(let Ot=0;Ot<ot.length;Ot++){const Lt=ot[Ot];ee?k&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ot+1,0,0,Qt,Pt,Lt.image[mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ot+1,ue,Qt,Pt,Lt.image[mt])}}}y(b)&&g(r.TEXTURE_CUBE_MAP),ut.__version=yt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function xt(U,b,et,pt,yt,ut){const Nt=c.convert(et.format,et.colorSpace),At=c.convert(et.type),Bt=N(et.internalFormat,Nt,At,et.colorSpace),Jt=s.get(b),Tt=s.get(et);if(Tt.__renderTarget=b,!Jt.__hasExternalTextures){const It=Math.max(1,b.width>>ut),Yt=Math.max(1,b.height>>ut);yt===r.TEXTURE_3D||yt===r.TEXTURE_2D_ARRAY?i.texImage3D(yt,ut,Bt,It,Yt,b.depth,0,Nt,At,null):i.texImage2D(yt,ut,Bt,It,Yt,0,Nt,At,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),ne(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,yt,Tt.__webglTexture,0,Se(b)):(yt===r.TEXTURE_2D||yt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pt,yt,Tt.__webglTexture,ut),i.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(U,b,et){if(r.bindRenderbuffer(r.RENDERBUFFER,U),b.depthBuffer){const pt=b.depthTexture,yt=pt&&pt.isDepthTexture?pt.type:null,ut=D(b.stencilBuffer,yt),Nt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,At=Se(b);ne(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,At,ut,b.width,b.height):et?r.renderbufferStorageMultisample(r.RENDERBUFFER,At,ut,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ut,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Nt,r.RENDERBUFFER,U)}else{const pt=b.textures;for(let yt=0;yt<pt.length;yt++){const ut=pt[yt],Nt=c.convert(ut.format,ut.colorSpace),At=c.convert(ut.type),Bt=N(ut.internalFormat,Nt,At,ut.colorSpace),Jt=Se(b);et&&ne(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Jt,Bt,b.width,b.height):ne(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Jt,Bt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Bt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Dt(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=s.get(b.depthTexture);pt.__renderTarget=b,(!pt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ht(b.depthTexture,0);const yt=pt.__webglTexture,ut=Se(b);if(b.depthTexture.format===Ko)ne(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,yt,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,yt,0);else if(b.depthTexture.format===Jo)ne(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,yt,0,ut):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function le(U){const b=s.get(U),et=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const pt=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pt){const yt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pt.removeEventListener("dispose",yt)};pt.addEventListener("dispose",yt),b.__depthDisposeCallback=yt}b.__boundDepthTexture=pt}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const pt=U.texture.mipmaps;pt&&pt.length>0?Dt(b.__webglFramebuffer[0],U):Dt(b.__webglFramebuffer,U)}else if(et){b.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[pt]),b.__webglDepthbuffer[pt]===void 0)b.__webglDepthbuffer[pt]=r.createRenderbuffer(),bt(b.__webglDepthbuffer[pt],U,!1);else{const yt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer[pt];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,ut)}}else{const pt=U.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),bt(b.__webglDepthbuffer,U,!1);else{const yt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,ut)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Zt(U,b,et){const pt=s.get(U);b!==void 0&&xt(pt.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),et!==void 0&&le(U)}function ke(U){const b=U.texture,et=s.get(U),pt=s.get(b);U.addEventListener("dispose",F);const yt=U.textures,ut=U.isWebGLCubeRenderTarget===!0,Nt=yt.length>1;if(Nt||(pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture()),pt.__version=b.version,f.memory.textures++),ut){et.__webglFramebuffer=[];for(let At=0;At<6;At++)if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer[At]=[];for(let Bt=0;Bt<b.mipmaps.length;Bt++)et.__webglFramebuffer[At][Bt]=r.createFramebuffer()}else et.__webglFramebuffer[At]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){et.__webglFramebuffer=[];for(let At=0;At<b.mipmaps.length;At++)et.__webglFramebuffer[At]=r.createFramebuffer()}else et.__webglFramebuffer=r.createFramebuffer();if(Nt)for(let At=0,Bt=yt.length;At<Bt;At++){const Jt=s.get(yt[At]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=r.createTexture(),f.memory.textures++)}if(U.samples>0&&ne(U)===!1){et.__webglMultisampledFramebuffer=r.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let At=0;At<yt.length;At++){const Bt=yt[At];et.__webglColorRenderbuffer[At]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,et.__webglColorRenderbuffer[At]);const Jt=c.convert(Bt.format,Bt.colorSpace),Tt=c.convert(Bt.type),It=N(Bt.internalFormat,Jt,Tt,Bt.colorSpace,U.isXRRenderTarget===!0),Yt=Se(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,It,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,et.__webglColorRenderbuffer[At])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=r.createRenderbuffer(),bt(et.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){i.bindTexture(r.TEXTURE_CUBE_MAP,pt.__webglTexture),vt(r.TEXTURE_CUBE_MAP,b);for(let At=0;At<6;At++)if(b.mipmaps&&b.mipmaps.length>0)for(let Bt=0;Bt<b.mipmaps.length;Bt++)xt(et.__webglFramebuffer[At][Bt],U,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+At,Bt);else xt(et.__webglFramebuffer[At],U,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);y(b)&&g(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Nt){for(let At=0,Bt=yt.length;At<Bt;At++){const Jt=yt[At],Tt=s.get(Jt);i.bindTexture(r.TEXTURE_2D,Tt.__webglTexture),vt(r.TEXTURE_2D,Jt),xt(et.__webglFramebuffer,U,Jt,r.COLOR_ATTACHMENT0+At,r.TEXTURE_2D,0),y(Jt)&&g(r.TEXTURE_2D)}i.unbindTexture()}else{let At=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(At=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(At,pt.__webglTexture),vt(At,b),b.mipmaps&&b.mipmaps.length>0)for(let Bt=0;Bt<b.mipmaps.length;Bt++)xt(et.__webglFramebuffer[Bt],U,b,r.COLOR_ATTACHMENT0,At,Bt);else xt(et.__webglFramebuffer,U,b,r.COLOR_ATTACHMENT0,At,0);y(b)&&g(At),i.unbindTexture()}U.depthBuffer&&le(U)}function He(U){const b=U.textures;for(let et=0,pt=b.length;et<pt;et++){const yt=b[et];if(y(yt)){const ut=z(U),Nt=s.get(yt).__webglTexture;i.bindTexture(ut,Nt),g(ut),i.unbindTexture()}}}const pe=[],I=[];function Hn(U){if(U.samples>0){if(ne(U)===!1){const b=U.textures,et=U.width,pt=U.height;let yt=r.COLOR_BUFFER_BIT;const ut=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Nt=s.get(U),At=b.length>1;if(At)for(let Jt=0;Jt<b.length;Jt++)i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Jt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Jt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const Bt=U.texture.mipmaps;Bt&&Bt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Jt=0;Jt<b.length;Jt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(yt|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(yt|=r.STENCIL_BUFFER_BIT)),At){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[Jt]);const Tt=s.get(b[Jt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Tt,0)}r.blitFramebuffer(0,0,et,pt,0,0,et,pt,yt,r.NEAREST),p===!0&&(pe.length=0,I.length=0,pe.push(r.COLOR_ATTACHMENT0+Jt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(pe.push(ut),I.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,I)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pe))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),At)for(let Jt=0;Jt<b.length;Jt++){i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Jt,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[Jt]);const Tt=s.get(b[Jt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Jt,r.TEXTURE_2D,Tt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const b=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Se(U){return Math.min(l.maxSamples,U.samples)}function ne(U){const b=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function kt(U){const b=f.render.frame;_.get(U)!==b&&(_.set(U,b),U.update())}function Pe(U,b){const et=U.colorSpace,pt=U.format,yt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==Lr&&et!==Ka&&(be.getTransfer(et)===Le?(pt!==wi||yt!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),b}function Ht(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=rt,this.resetTextureUnits=lt,this.setTexture2D=ht,this.setTexture2DArray=O,this.setTexture3D=Q,this.setTextureCube=Y,this.rebindTextures=Zt,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Hn,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=ne}function jA(r,t){function i(s,l=Ka){let c;const f=be.getTransfer(l);if(s===Hi)return r.UNSIGNED_BYTE;if(s===Nd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Pd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===n0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===t0)return r.BYTE;if(s===e0)return r.SHORT;if(s===Zo)return r.UNSIGNED_SHORT;if(s===Ld)return r.INT;if(s===Ls)return r.UNSIGNED_INT;if(s===pa)return r.FLOAT;if(s===Or)return r.HALF_FLOAT;if(s===i0)return r.ALPHA;if(s===a0)return r.RGB;if(s===wi)return r.RGBA;if(s===Ko)return r.DEPTH_COMPONENT;if(s===Jo)return r.DEPTH_STENCIL;if(s===s0)return r.RED;if(s===Od)return r.RED_INTEGER;if(s===r0)return r.RG;if(s===zd)return r.RG_INTEGER;if(s===Id)return r.RGBA_INTEGER;if(s===Ic||s===Fc||s===Bc||s===Hc)if(f===Le)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Ic)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Ic)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ed||s===nd||s===id||s===ad)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ed)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===nd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===id)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ad)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sd||s===rd||s===od)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===sd||s===rd)return f===Le?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===od)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===_d||s===gd||s===vd||s===xd||s===Sd||s===Md)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===ld)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===cd)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ud)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fd)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===hd)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dd)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pd)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===md)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_d)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gd)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vd)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xd)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sd)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Md)return f===Le?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Gc||s===yd||s===Ed)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Gc)return f===Le?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===yd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ed)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===o0||s===Td||s===bd||s===Ad)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Gc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Td)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ad)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const ZA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Yn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new xi({vertexShader:ZA,fragmentShader:QA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new vi(new $c(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JA extends Ns{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,_=null,v=null,x=null,S=null,E=null;const R=new KA,y=i.getContextAttributes();let g=null,z=null;const N=[],D=[],H=new xe;let G=null;const F=new si;F.viewport=new Be;const Z=new si;Z.viewport=new Be;const w=[F,Z],C=new my;let V=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let dt=N[J];return dt===void 0&&(dt=new Ah,N[J]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(J){let dt=N[J];return dt===void 0&&(dt=new Ah,N[J]=dt),dt.getGripSpace()},this.getHand=function(J){let dt=N[J];return dt===void 0&&(dt=new Ah,N[J]=dt),dt.getHandSpace()};function rt(J){const dt=D.indexOf(J.inputSource);if(dt===-1)return;const xt=N[dt];xt!==void 0&&(xt.update(J.inputSource,J.frame,m||f),xt.dispatchEvent({type:J.type,data:J.inputSource}))}function gt(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",ht);for(let J=0;J<N.length;J++){const dt=D[J];dt!==null&&(D[J]=null,N[J].disconnect(dt))}V=null,lt=null,R.reset(),t.setRenderTarget(g),S=null,x=null,v=null,l=null,z=null,St.stop(),s.isPresenting=!1,t.setPixelRatio(G),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(g=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",ht),y.xrCompatible!==!0&&await i.makeXRCompatible(),G=t.getPixelRatio(),t.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,bt=null,Dt=null;y.depth&&(Dt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=y.stencil?Jo:Ko,bt=y.stencil?Qo:Ls);const le={colorFormat:i.RGBA8,depthFormat:Dt,scaleFactor:c};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(le),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),z=new ts(x.textureWidth,x.textureHeight,{format:wi,type:Hi,depthTexture:new v0(x.textureWidth,x.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const xt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),z=new ts(S.framebufferWidth,S.framebufferHeight,{format:wi,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),St.setContext(l),St.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function ht(J){for(let dt=0;dt<J.removed.length;dt++){const xt=J.removed[dt],bt=D.indexOf(xt);bt>=0&&(D[bt]=null,N[bt].disconnect(xt))}for(let dt=0;dt<J.added.length;dt++){const xt=J.added[dt];let bt=D.indexOf(xt);if(bt===-1){for(let le=0;le<N.length;le++)if(le>=D.length){D.push(xt),bt=le;break}else if(D[le]===null){D[le]=xt,bt=le;break}if(bt===-1)break}const Dt=N[bt];Dt&&Dt.connect(xt)}}const O=new X,Q=new X;function Y(J,dt,xt){O.setFromMatrixPosition(dt.matrixWorld),Q.setFromMatrixPosition(xt.matrixWorld);const bt=O.distanceTo(Q),Dt=dt.projectionMatrix.elements,le=xt.projectionMatrix.elements,Zt=Dt[14]/(Dt[10]-1),ke=Dt[14]/(Dt[10]+1),He=(Dt[9]+1)/Dt[5],pe=(Dt[9]-1)/Dt[5],I=(Dt[8]-1)/Dt[0],Hn=(le[8]+1)/le[0],Se=Zt*I,ne=Zt*Hn,kt=bt/(-I+Hn),Pe=kt*-I;if(dt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Pe),J.translateZ(kt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Dt[10]===-1)J.projectionMatrix.copy(dt.projectionMatrix),J.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Ht=Zt+kt,U=ke+kt,b=Se-Pe,et=ne+(bt-Pe),pt=He*ke/U*Ht,yt=pe*ke/U*Ht;J.projectionMatrix.makePerspective(b,et,pt,yt,Ht,U),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Mt(J,dt){dt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(dt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let dt=J.near,xt=J.far;R.texture!==null&&(R.depthNear>0&&(dt=R.depthNear),R.depthFar>0&&(xt=R.depthFar)),C.near=Z.near=F.near=dt,C.far=Z.far=F.far=xt,(V!==C.near||lt!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,lt=C.far),F.layers.mask=J.layers.mask|2,Z.layers.mask=J.layers.mask|4,C.layers.mask=F.layers.mask|Z.layers.mask;const bt=J.parent,Dt=C.cameras;Mt(C,bt);for(let le=0;le<Dt.length;le++)Mt(Dt[le],bt);Dt.length===2?Y(C,F,Z):C.projectionMatrix.copy(F.projectionMatrix),L(J,C,bt)};function L(J,dt,xt){xt===null?J.matrix.copy(dt.matrixWorld):(J.matrix.copy(xt.matrixWorld),J.matrix.invert(),J.matrix.multiply(dt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(dt.projectionMatrix),J.projectionMatrixInverse.copy(dt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=$o*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(J){p=J,x!==null&&(x.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)};let tt=null;function vt(J,dt){if(_=dt.getViewerPose(m||f),E=dt,_!==null){const xt=_.views;S!==null&&(t.setRenderTargetFramebuffer(z,S.framebuffer),t.setRenderTarget(z));let bt=!1;xt.length!==C.cameras.length&&(C.cameras.length=0,bt=!0);for(let Zt=0;Zt<xt.length;Zt++){const ke=xt[Zt];let He=null;if(S!==null)He=S.getViewport(ke);else{const I=v.getViewSubImage(x,ke);He=I.viewport,Zt===0&&(t.setRenderTargetTextures(z,I.colorTexture,I.depthStencilTexture),t.setRenderTarget(z))}let pe=w[Zt];pe===void 0&&(pe=new si,pe.layers.enable(Zt),pe.viewport=new Be,w[Zt]=pe),pe.matrix.fromArray(ke.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(ke.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(He.x,He.y,He.width,He.height),Zt===0&&(C.matrix.copy(pe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),bt===!0&&C.cameras.push(pe)}const Dt=l.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Zt=v.getDepthInformation(xt[0]);Zt&&Zt.isValid&&Zt.texture&&R.init(t,Zt,l.renderState)}}for(let xt=0;xt<N.length;xt++){const bt=D[xt],Dt=N[xt];bt!==null&&Dt!==void 0&&Dt.update(bt,dt,m||f)}tt&&tt(J,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),E=null}const St=new y0;St.setAnimationLoop(vt),this.setAnimationLoop=function(J){tt=J},this.dispose=function(){}}}const bs=new Gi,$A=new oe;function t1(r,t){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function s(y,g){g.color.getRGB(y.fogColor.value,m0(r)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,z,N,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(y,g):g.isMeshToonMaterial?(c(y,g),v(y,g)):g.isMeshPhongMaterial?(c(y,g),_(y,g)):g.isMeshStandardMaterial?(c(y,g),x(y,g),g.isMeshPhysicalMaterial&&S(y,g,D)):g.isMeshMatcapMaterial?(c(y,g),E(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),R(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(f(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?p(y,g,z,N):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===qn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===qn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const z=t.get(g),N=z.envMap,D=z.envMapRotation;N&&(y.envMap.value=N,bs.copy(D),bs.x*=-1,bs.y*=-1,bs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),y.envMapRotation.value.setFromMatrix4($A.makeRotationFromEuler(bs)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function f(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,z,N){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*z,y.scale.value=N*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,z){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===qn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=z.texture,y.transmissionSamplerSize.value.set(z.width,z.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function R(y,g){const z=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(z.matrixWorld),y.nearDistance.value=z.shadow.camera.near,y.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function e1(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(z,N){const D=N.program;s.uniformBlockBinding(z,D)}function m(z,N){let D=l[z.id];D===void 0&&(E(z),D=_(z),l[z.id]=D,z.addEventListener("dispose",y));const H=N.program;s.updateUBOMapping(z,H);const G=t.render.frame;c[z.id]!==G&&(x(z),c[z.id]=G)}function _(z){const N=v();z.__bindingPointIndex=N;const D=r.createBuffer(),H=z.__size,G=z.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,H,G),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,D),D}function v(){for(let z=0;z<d;z++)if(f.indexOf(z)===-1)return f.push(z),z;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(z){const N=l[z.id],D=z.uniforms,H=z.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let G=0,F=D.length;G<F;G++){const Z=Array.isArray(D[G])?D[G]:[D[G]];for(let w=0,C=Z.length;w<C;w++){const V=Z[w];if(S(V,G,w,H)===!0){const lt=V.__offset,rt=Array.isArray(V.value)?V.value:[V.value];let gt=0;for(let ht=0;ht<rt.length;ht++){const O=rt[ht],Q=R(O);typeof O=="number"||typeof O=="boolean"?(V.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,lt+gt,V.__data)):O.isMatrix3?(V.__data[0]=O.elements[0],V.__data[1]=O.elements[1],V.__data[2]=O.elements[2],V.__data[3]=0,V.__data[4]=O.elements[3],V.__data[5]=O.elements[4],V.__data[6]=O.elements[5],V.__data[7]=0,V.__data[8]=O.elements[6],V.__data[9]=O.elements[7],V.__data[10]=O.elements[8],V.__data[11]=0):(O.toArray(V.__data,gt),gt+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,lt,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(z,N,D,H){const G=z.value,F=N+"_"+D;if(H[F]===void 0)return typeof G=="number"||typeof G=="boolean"?H[F]=G:H[F]=G.clone(),!0;{const Z=H[F];if(typeof G=="number"||typeof G=="boolean"){if(Z!==G)return H[F]=G,!0}else if(Z.equals(G)===!1)return Z.copy(G),!0}return!1}function E(z){const N=z.uniforms;let D=0;const H=16;for(let F=0,Z=N.length;F<Z;F++){const w=Array.isArray(N[F])?N[F]:[N[F]];for(let C=0,V=w.length;C<V;C++){const lt=w[C],rt=Array.isArray(lt.value)?lt.value:[lt.value];for(let gt=0,ht=rt.length;gt<ht;gt++){const O=rt[gt],Q=R(O),Y=D%H,Mt=Y%Q.boundary,L=Y+Mt;D+=Mt,L!==0&&H-L<Q.storage&&(D+=H-L),lt.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=D,D+=Q.storage}}}const G=D%H;return G>0&&(D+=H-G),z.__size=D,z.__cache={},this}function R(z){const N={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(N.boundary=4,N.storage=4):z.isVector2?(N.boundary=8,N.storage=8):z.isVector3||z.isColor?(N.boundary=16,N.storage=12):z.isVector4?(N.boundary=16,N.storage=16):z.isMatrix3?(N.boundary=48,N.storage=48):z.isMatrix4?(N.boundary=64,N.storage=64):z.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",z),N}function y(z){const N=z.target;N.removeEventListener("dispose",y);const D=f.indexOf(N.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function g(){for(const z in l)r.deleteBuffer(l[z]);f=[],l={},c={}}return{bind:p,update:m,dispose:g}}class n1{constructor(t={}){const{canvas:i=DM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),R=new Int32Array(4);let y=null,g=null;const z=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ja,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let H=!1;this._outputColorSpace=gi;let G=0,F=0,Z=null,w=-1,C=null;const V=new Be,lt=new Be;let rt=null;const gt=new de(0);let ht=0,O=i.width,Q=i.height,Y=1,Mt=null,L=null;const tt=new Be(0,0,O,Q),vt=new Be(0,0,O,Q);let St=!1;const J=new kd;let dt=!1,xt=!1;const bt=new oe,Dt=new oe,le=new X,Zt=new Be,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function pe(){return Z===null?Y:1}let I=s;function Hn(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ud}`),i.addEventListener("webglcontextlost",mt,!1),i.addEventListener("webglcontextrestored",Ot,!1),i.addEventListener("webglcontextcreationerror",Lt,!1),I===null){const q="webgl2";if(I=Hn(q,A),I===null)throw Hn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Se,ne,kt,Pe,Ht,U,b,et,pt,yt,ut,Nt,At,Bt,Jt,Tt,It,Yt,Qt,Pt,ue,ee,Oe,k;function Ut(){Se=new hb(I),Se.init(),ee=new jA(I,Se),ne=new sb(I,Se,t,ee),kt=new qA(I,Se),ne.reverseDepthBuffer&&x&&kt.buffers.depth.setReversed(!0),Pe=new mb(I),Ht=new NA,U=new YA(I,Se,kt,Ht,ne,ee,Pe),b=new ob(D),et=new fb(D),pt=new My(I),Oe=new ib(I,pt),yt=new db(I,pt,Pe,Oe),ut=new gb(I,yt,pt,Pe),Qt=new _b(I,ne,U),Tt=new rb(Ht),Nt=new LA(D,b,et,Se,ne,Oe,Tt),At=new t1(D,Ht),Bt=new OA,Jt=new GA(Se),Yt=new nb(D,b,et,kt,ut,S,p),It=new XA(D,ut,ne),k=new e1(I,Pe,ne,kt),Pt=new ab(I,Se,Pe),ue=new pb(I,Se,Pe),Pe.programs=Nt.programs,D.capabilities=ne,D.extensions=Se,D.properties=Ht,D.renderLists=Bt,D.shadowMap=It,D.state=kt,D.info=Pe}Ut();const ot=new JA(D,I);this.xr=ot,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=Se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(O,Q,!1))},this.getSize=function(A){return A.set(O,Q)},this.setSize=function(A,q,at=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,Q=q,i.width=Math.floor(A*Y),i.height=Math.floor(q*Y),at===!0&&(i.style.width=A+"px",i.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(O*Y,Q*Y).floor()},this.setDrawingBufferSize=function(A,q,at){O=A,Q=q,Y=at,i.width=Math.floor(A*at),i.height=Math.floor(q*at),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(tt)},this.setViewport=function(A,q,at,st){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,q,at,st),kt.viewport(V.copy(tt).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(vt)},this.setScissor=function(A,q,at,st){A.isVector4?vt.set(A.x,A.y,A.z,A.w):vt.set(A,q,at,st),kt.scissor(lt.copy(vt).multiplyScalar(Y).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(A){kt.setScissorTest(St=A)},this.setOpaqueSort=function(A){Mt=A},this.setTransparentSort=function(A){L=A},this.getClearColor=function(A){return A.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,at=!0){let st=0;if(A){let j=!1;if(Z!==null){const Et=Z.texture.format;j=Et===Id||Et===zd||Et===Od}if(j){const Et=Z.texture.type,Rt=Et===Hi||Et===Ls||Et===Zo||Et===Qo||Et===Nd||Et===Pd,Ct=Yt.getClearColor(),zt=Yt.getClearAlpha(),$t=Ct.r,Wt=Ct.g,Vt=Ct.b;Rt?(E[0]=$t,E[1]=Wt,E[2]=Vt,E[3]=zt,I.clearBufferuiv(I.COLOR,0,E)):(R[0]=$t,R[1]=Wt,R[2]=Vt,R[3]=zt,I.clearBufferiv(I.COLOR,0,R))}else st|=I.COLOR_BUFFER_BIT}q&&(st|=I.DEPTH_BUFFER_BIT),at&&(st|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",mt,!1),i.removeEventListener("webglcontextrestored",Ot,!1),i.removeEventListener("webglcontextcreationerror",Lt,!1),Yt.dispose(),Bt.dispose(),Jt.dispose(),Ht.dispose(),b.dispose(),et.dispose(),ut.dispose(),Oe.dispose(),k.dispose(),Nt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",un),ot.removeEventListener("sessionend",yn),Gn.stop()};function mt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ot(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const A=Pe.autoReset,q=It.enabled,at=It.autoUpdate,st=It.needsUpdate,j=It.type;Ut(),Pe.autoReset=A,It.enabled=q,It.autoUpdate=at,It.needsUpdate=st,It.type=j}function Lt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ie(A){const q=A.target;q.removeEventListener("dispose",ie),Xe(q)}function Xe(A){an(A),Ht.remove(A)}function an(A){const q=Ht.get(A).programs;q!==void 0&&(q.forEach(function(at){Nt.releaseProgram(at)}),A.isShaderMaterial&&Nt.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,at,st,j,Et){q===null&&(q=ke);const Rt=j.isMesh&&j.matrixWorld.determinant()<0,Ct=is(A,q,at,st,j);kt.setMaterial(st,Rt);let zt=at.index,$t=1;if(st.wireframe===!0){if(zt=yt.getWireframeAttribute(at),zt===void 0)return;$t=2}const Wt=at.drawRange,Vt=at.attributes.position;let _e=Wt.start*$t,Re=(Wt.start+Wt.count)*$t;Et!==null&&(_e=Math.max(_e,Et.start*$t),Re=Math.min(Re,(Et.start+Et.count)*$t)),zt!==null?(_e=Math.max(_e,0),Re=Math.min(Re,zt.count)):Vt!=null&&(_e=Math.max(_e,0),Re=Math.min(Re,Vt.count));const Ze=Re-_e;if(Ze<0||Ze===1/0)return;Oe.setup(j,st,Ct,at,zt);let Me,ye=Pt;if(zt!==null&&(Me=pt.get(zt),ye=ue,ye.setIndex(Me)),j.isMesh)st.wireframe===!0?(kt.setLineWidth(st.wireframeLinewidth*pe()),ye.setMode(I.LINES)):ye.setMode(I.TRIANGLES);else if(j.isLine){let qt=st.linewidth;qt===void 0&&(qt=1),kt.setLineWidth(qt*pe()),j.isLineSegments?ye.setMode(I.LINES):j.isLineLoop?ye.setMode(I.LINE_LOOP):ye.setMode(I.LINE_STRIP)}else j.isPoints?ye.setMode(I.POINTS):j.isSprite&&ye.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Vc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))ye.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qt=j._multiDrawStarts,Ke=j._multiDrawCounts,Te=j._multiDrawCount,Rn=zt?pt.get(zt).bytesPerElement:1,ya=Ht.get(st).currentProgram.getUniforms();for(let We=0;We<Te;We++)ya.setValue(I,"_gl_DrawID",We),ye.render(qt[We]/Rn,Ke[We])}else if(j.isInstancedMesh)ye.renderInstances(_e,Ze,j.count);else if(at.isInstancedBufferGeometry){const qt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Ke=Math.min(at.instanceCount,qt);ye.renderInstances(_e,Ze,Ke)}else ye.render(_e,Ze)};function Ae(A,q,at){A.transparent===!0&&A.side===da&&A.forceSinglePass===!1?(A.side=qn,A.needsUpdate=!0,Sa(A,q,at),A.side=$a,A.needsUpdate=!0,Sa(A,q,at),A.side=da):Sa(A,q,at)}this.compile=function(A,q,at=null){at===null&&(at=A),g=Jt.get(at),g.init(q),N.push(g),at.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),A!==at&&A.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const st=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Et=j.material;if(Et)if(Array.isArray(Et))for(let Rt=0;Rt<Et.length;Rt++){const Ct=Et[Rt];Ae(Ct,at,j),st.add(Ct)}else Ae(Et,at,j),st.add(Et)}),g=N.pop(),st},this.compileAsync=function(A,q,at=null){const st=this.compile(A,q,at);return new Promise(j=>{function Et(){if(st.forEach(function(Rt){Ht.get(Rt).currentProgram.isReady()&&st.delete(Rt)}),st.size===0){j(A);return}setTimeout(Et,10)}Se.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let jn=null;function _n(A){jn&&jn(A)}function un(){Gn.stop()}function yn(){Gn.start()}const Gn=new y0;Gn.setAnimationLoop(_n),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(A){jn=A,ot.setAnimationLoop(A),A===null?Gn.stop():Gn.start()},ot.addEventListener("sessionstart",un),ot.addEventListener("sessionend",yn),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(q),q=ot.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,q,Z),g=Jt.get(A,N.length),g.init(q),N.push(g),Dt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),J.setFromProjectionMatrix(Dt),xt=this.localClippingEnabled,dt=Tt.init(this.clippingPlanes,xt),y=Bt.get(A,z.length),y.init(),z.push(y),ot.enabled===!0&&ot.isPresenting===!0){const Et=D.xr.getDepthSensingMesh();Et!==null&&es(Et,q,-1/0,D.sortObjects)}es(A,q,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(Mt,L),He=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,He&&Yt.addToRenderList(y,A),this.info.render.frame++,dt===!0&&Tt.beginShadows();const at=g.state.shadowsArray;It.render(at,A,q),dt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=y.opaque,j=y.transmissive;if(g.setupLights(),q.isArrayCamera){const Et=q.cameras;if(j.length>0)for(let Rt=0,Ct=Et.length;Rt<Ct;Rt++){const zt=Et[Rt];il(st,j,A,zt)}He&&Yt.render(A);for(let Rt=0,Ct=Et.length;Rt<Ct;Rt++){const zt=Et[Rt];nl(y,A,zt,zt.viewport)}}else j.length>0&&il(st,j,A,q),He&&Yt.render(A),nl(y,A,q);Z!==null&&F===0&&(U.updateMultisampleRenderTarget(Z),U.updateRenderTargetMipmap(Z)),A.isScene===!0&&A.onAfterRender(D,A,q),Oe.resetDefaultState(),w=-1,C=null,N.pop(),N.length>0?(g=N[N.length-1],dt===!0&&Tt.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,z.pop(),z.length>0?y=z[z.length-1]:y=null};function es(A,q,at,st){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){st&&Zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Dt);const Rt=ut.update(A),Ct=A.material;Ct.visible&&y.push(A,Rt,Ct,at,Zt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||J.intersectsObject(A))){const Rt=ut.update(A),Ct=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Zt.copy(A.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Zt.copy(Rt.boundingSphere.center)),Zt.applyMatrix4(A.matrixWorld).applyMatrix4(Dt)),Array.isArray(Ct)){const zt=Rt.groups;for(let $t=0,Wt=zt.length;$t<Wt;$t++){const Vt=zt[$t],_e=Ct[Vt.materialIndex];_e&&_e.visible&&y.push(A,Rt,_e,at,Zt.z,Vt)}}else Ct.visible&&y.push(A,Rt,Ct,at,Zt.z,null)}}const Et=A.children;for(let Rt=0,Ct=Et.length;Rt<Ct;Rt++)es(Et[Rt],q,at,st)}function nl(A,q,at,st){const j=A.opaque,Et=A.transmissive,Rt=A.transparent;g.setupLightsView(at),dt===!0&&Tt.setGlobalState(D.clippingPlanes,at),st&&kt.viewport(V.copy(st)),j.length>0&&ns(j,q,at),Et.length>0&&ns(Et,q,at),Rt.length>0&&ns(Rt,q,at),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function il(A,q,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[st.id]===void 0&&(g.state.transmissionRenderTarget[st.id]=new ts(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?Or:Hi,minFilter:Us,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const Et=g.state.transmissionRenderTarget[st.id],Rt=st.viewport||V;Et.setSize(Rt.z*D.transmissionResolutionScale,Rt.w*D.transmissionResolutionScale);const Ct=D.getRenderTarget();D.setRenderTarget(Et),D.getClearColor(gt),ht=D.getClearAlpha(),ht<1&&D.setClearColor(16777215,.5),D.clear(),He&&Yt.render(at);const zt=D.toneMapping;D.toneMapping=Ja;const $t=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),g.setupLightsView(st),dt===!0&&Tt.setGlobalState(D.clippingPlanes,st),ns(A,at,st),U.updateMultisampleRenderTarget(Et),U.updateRenderTargetMipmap(Et),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Vt=0,_e=q.length;Vt<_e;Vt++){const Re=q[Vt],Ze=Re.object,Me=Re.geometry,ye=Re.material,qt=Re.group;if(ye.side===da&&Ze.layers.test(st.layers)){const Ke=ye.side;ye.side=qn,ye.needsUpdate=!0,xa(Ze,at,st,Me,ye,qt),ye.side=Ke,ye.needsUpdate=!0,Wt=!0}}Wt===!0&&(U.updateMultisampleRenderTarget(Et),U.updateRenderTargetMipmap(Et))}D.setRenderTarget(Ct),D.setClearColor(gt,ht),$t!==void 0&&(st.viewport=$t),D.toneMapping=zt}function ns(A,q,at){const st=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Et=A.length;j<Et;j++){const Rt=A[j],Ct=Rt.object,zt=Rt.geometry,$t=Rt.group;let Wt=Rt.material;Wt.allowOverride===!0&&st!==null&&(Wt=st),Ct.layers.test(at.layers)&&xa(Ct,q,at,zt,Wt,$t)}}function xa(A,q,at,st,j,Et){A.onBeforeRender(D,q,at,st,j,Et),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(D,q,at,st,A,Et),j.transparent===!0&&j.side===da&&j.forceSinglePass===!1?(j.side=qn,j.needsUpdate=!0,D.renderBufferDirect(at,q,st,j,A,Et),j.side=$a,j.needsUpdate=!0,D.renderBufferDirect(at,q,st,j,A,Et),j.side=da):D.renderBufferDirect(at,q,st,j,A,Et),A.onAfterRender(D,q,at,st,j,Et)}function Sa(A,q,at){q.isScene!==!0&&(q=ke);const st=Ht.get(A),j=g.state.lights,Et=g.state.shadowsArray,Rt=j.state.version,Ct=Nt.getParameters(A,j.state,Et,q,at),zt=Nt.getProgramCacheKey(Ct);let $t=st.programs;st.environment=A.isMeshStandardMaterial?q.environment:null,st.fog=q.fog,st.envMap=(A.isMeshStandardMaterial?et:b).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",ie),$t=new Map,st.programs=$t);let Wt=$t.get(zt);if(Wt!==void 0){if(st.currentProgram===Wt&&st.lightsStateVersion===Rt)return ki(A,Ct),Wt}else Ct.uniforms=Nt.getUniforms(A),A.onBeforeCompile(Ct,D),Wt=Nt.acquireProgram(Ct,zt),$t.set(zt,Wt),st.uniforms=Ct.uniforms;const Vt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Vt.clippingPlanes=Tt.uniform),ki(A,Ct),st.needsLights=sn(A),st.lightsStateVersion=Rt,st.needsLights&&(Vt.ambientLightColor.value=j.state.ambient,Vt.lightProbe.value=j.state.probe,Vt.directionalLights.value=j.state.directional,Vt.directionalLightShadows.value=j.state.directionalShadow,Vt.spotLights.value=j.state.spot,Vt.spotLightShadows.value=j.state.spotShadow,Vt.rectAreaLights.value=j.state.rectArea,Vt.ltc_1.value=j.state.rectAreaLTC1,Vt.ltc_2.value=j.state.rectAreaLTC2,Vt.pointLights.value=j.state.point,Vt.pointLightShadows.value=j.state.pointShadow,Vt.hemisphereLights.value=j.state.hemi,Vt.directionalShadowMap.value=j.state.directionalShadowMap,Vt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Vt.spotShadowMap.value=j.state.spotShadowMap,Vt.spotLightMatrix.value=j.state.spotLightMatrix,Vt.spotLightMap.value=j.state.spotLightMap,Vt.pointShadowMap.value=j.state.pointShadowMap,Vt.pointShadowMatrix.value=j.state.pointShadowMatrix),st.currentProgram=Wt,st.uniformsList=null,Wt}function Vi(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Wc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function ki(A,q){const at=Ht.get(A);at.outputColorSpace=q.outputColorSpace,at.batching=q.batching,at.batchingColor=q.batchingColor,at.instancing=q.instancing,at.instancingColor=q.instancingColor,at.instancingMorph=q.instancingMorph,at.skinning=q.skinning,at.morphTargets=q.morphTargets,at.morphNormals=q.morphNormals,at.morphColors=q.morphColors,at.morphTargetsCount=q.morphTargetsCount,at.numClippingPlanes=q.numClippingPlanes,at.numIntersection=q.numClipIntersection,at.vertexAlphas=q.vertexAlphas,at.vertexTangents=q.vertexTangents,at.toneMapping=q.toneMapping}function is(A,q,at,st,j){q.isScene!==!0&&(q=ke),U.resetTextureUnits();const Et=q.fog,Rt=st.isMeshStandardMaterial?q.environment:null,Ct=Z===null?D.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Lr,zt=(st.isMeshStandardMaterial?et:b).get(st.envMap||Rt),$t=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,Wt=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Vt=!!at.morphAttributes.position,_e=!!at.morphAttributes.normal,Re=!!at.morphAttributes.color;let Ze=Ja;st.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ze=D.toneMapping);const Me=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ye=Me!==void 0?Me.length:0,qt=Ht.get(st),Ke=g.state.lights;if(dt===!0&&(xt===!0||A!==C)){const gn=A===C&&st.id===w;Tt.setState(st,A,gn)}let Te=!1;st.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Ke.state.version||qt.outputColorSpace!==Ct||j.isBatchedMesh&&qt.batching===!1||!j.isBatchedMesh&&qt.batching===!0||j.isBatchedMesh&&qt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&qt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&qt.instancing===!1||!j.isInstancedMesh&&qt.instancing===!0||j.isSkinnedMesh&&qt.skinning===!1||!j.isSkinnedMesh&&qt.skinning===!0||j.isInstancedMesh&&qt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&qt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&qt.instancingMorph===!1&&j.morphTexture!==null||qt.envMap!==zt||st.fog===!0&&qt.fog!==Et||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Tt.numPlanes||qt.numIntersection!==Tt.numIntersection)||qt.vertexAlphas!==$t||qt.vertexTangents!==Wt||qt.morphTargets!==Vt||qt.morphNormals!==_e||qt.morphColors!==Re||qt.toneMapping!==Ze||qt.morphTargetsCount!==ye)&&(Te=!0):(Te=!0,qt.__version=st.version);let Rn=qt.currentProgram;Te===!0&&(Rn=Sa(st,q,j));let ya=!1,We=!1,Wi=!1;const Ge=Rn.getUniforms(),Cn=qt.uniforms;if(kt.useProgram(Rn.program)&&(ya=!0,We=!0,Wi=!0),st.id!==w&&(w=st.id,We=!0),ya||C!==A){kt.buffers.depth.getReversed()?(bt.copy(A.projectionMatrix),LM(bt),NM(bt),Ge.setValue(I,"projectionMatrix",bt)):Ge.setValue(I,"projectionMatrix",A.projectionMatrix),Ge.setValue(I,"viewMatrix",A.matrixWorldInverse);const En=Ge.map.cameraPosition;En!==void 0&&En.setValue(I,le.setFromMatrixPosition(A.matrixWorld)),ne.logarithmicDepthBuffer&&Ge.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Ge.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,We=!0,Wi=!0)}if(j.isSkinnedMesh){Ge.setOptional(I,j,"bindMatrix"),Ge.setOptional(I,j,"bindMatrixInverse");const gn=j.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Ge.setValue(I,"boneTexture",gn.boneTexture,U))}j.isBatchedMesh&&(Ge.setOptional(I,j,"batchingTexture"),Ge.setValue(I,"batchingTexture",j._matricesTexture,U),Ge.setOptional(I,j,"batchingIdTexture"),Ge.setValue(I,"batchingIdTexture",j._indirectTexture,U),Ge.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&Ge.setValue(I,"batchingColorTexture",j._colorsTexture,U));const fn=at.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Qt.update(j,at,Rn),(We||qt.receiveShadow!==j.receiveShadow)&&(qt.receiveShadow=j.receiveShadow,Ge.setValue(I,"receiveShadow",j.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(Cn.envMap.value=zt,Cn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&q.environment!==null&&(Cn.envMapIntensity.value=q.environmentIntensity),We&&(Ge.setValue(I,"toneMappingExposure",D.toneMappingExposure),qt.needsLights&&Ma(Cn,Wi),Et&&st.fog===!0&&At.refreshFogUniforms(Cn,Et),At.refreshMaterialUniforms(Cn,st,Y,Q,g.state.transmissionRenderTarget[A.id]),Wc.upload(I,Vi(qt),Cn,U)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Wc.upload(I,Vi(qt),Cn,U),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Ge.setValue(I,"center",j.center),Ge.setValue(I,"modelViewMatrix",j.modelViewMatrix),Ge.setValue(I,"normalMatrix",j.normalMatrix),Ge.setValue(I,"modelMatrix",j.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const gn=st.uniformsGroups;for(let En=0,Ui=gn.length;En<Ui;En++){const qi=gn[En];k.update(qi,Rn),k.bind(qi,Rn)}}return Rn}function Ma(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function sn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,q,at){const st=Ht.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Ht.get(A.texture).__webglTexture=q,Ht.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:at,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const at=Ht.get(A);at.__webglFramebuffer=q,at.__useDefaultFramebuffer=q===void 0};const al=I.createFramebuffer();this.setRenderTarget=function(A,q=0,at=0){Z=A,G=q,F=at;let st=!0,j=null,Et=!1,Rt=!1;if(A){const zt=Ht.get(A);if(zt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(I.FRAMEBUFFER,null),st=!1;else if(zt.__webglFramebuffer===void 0)U.setupRenderTarget(A);else if(zt.__hasExternalTextures)U.rebindTextures(A,Ht.get(A.texture).__webglTexture,Ht.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Vt=A.depthTexture;if(zt.__boundDepthTexture!==Vt){if(Vt!==null&&Ht.has(Vt)&&(A.width!==Vt.image.width||A.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Rt=!0);const Wt=Ht.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[q])?j=Wt[q][at]:j=Wt[q],Et=!0):A.samples>0&&U.useMultisampledRTT(A)===!1?j=Ht.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?j=Wt[at]:j=Wt,V.copy(A.viewport),lt.copy(A.scissor),rt=A.scissorTest}else V.copy(tt).multiplyScalar(Y).floor(),lt.copy(vt).multiplyScalar(Y).floor(),rt=St;if(at!==0&&(j=al),kt.bindFramebuffer(I.FRAMEBUFFER,j)&&st&&kt.drawBuffers(A,j),kt.viewport(V),kt.scissor(lt),kt.setScissorTest(rt),Et){const zt=Ht.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+q,zt.__webglTexture,at)}else if(Rt){const zt=Ht.get(A.texture),$t=q;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,zt.__webglTexture,at,$t)}else if(A!==null&&at!==0){const zt=Ht.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,zt.__webglTexture,at)}w=-1},this.readRenderTargetPixels=function(A,q,at,st,j,Et,Rt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct){kt.bindFramebuffer(I.FRAMEBUFFER,Ct);try{const zt=A.texture,$t=zt.format,Wt=zt.type;if(!ne.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-st&&at>=0&&at<=A.height-j&&I.readPixels(q,at,st,j,ee.convert($t),ee.convert(Wt),Et)}finally{const zt=Z!==null?Ht.get(Z).__webglFramebuffer:null;kt.bindFramebuffer(I.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(A,q,at,st,j,Et,Rt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct)if(q>=0&&q<=A.width-st&&at>=0&&at<=A.height-j){kt.bindFramebuffer(I.FRAMEBUFFER,Ct);const zt=A.texture,$t=zt.format,Wt=zt.type;if(!ne.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Vt),I.bufferData(I.PIXEL_PACK_BUFFER,Et.byteLength,I.STREAM_READ),I.readPixels(q,at,st,j,ee.convert($t),ee.convert(Wt),0);const _e=Z!==null?Ht.get(Z).__webglFramebuffer:null;kt.bindFramebuffer(I.FRAMEBUFFER,_e);const Re=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await UM(I,Re,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Vt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Et),I.deleteBuffer(Vt),I.deleteSync(Re),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,at=0){const st=Math.pow(2,-at),j=Math.floor(A.image.width*st),Et=Math.floor(A.image.height*st),Rt=q!==null?q.x:0,Ct=q!==null?q.y:0;U.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,at,0,0,Rt,Ct,j,Et),kt.unbindTexture()};const sl=I.createFramebuffer(),Xi=I.createFramebuffer();this.copyTextureToTexture=function(A,q,at=null,st=null,j=0,Et=null){Et===null&&(j!==0?(Vc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=j,j=0):Et=0);let Rt,Ct,zt,$t,Wt,Vt,_e,Re,Ze;const Me=A.isCompressedTexture?A.mipmaps[Et]:A.image;if(at!==null)Rt=at.max.x-at.min.x,Ct=at.max.y-at.min.y,zt=at.isBox3?at.max.z-at.min.z:1,$t=at.min.x,Wt=at.min.y,Vt=at.isBox3?at.min.z:0;else{const fn=Math.pow(2,-j);Rt=Math.floor(Me.width*fn),Ct=Math.floor(Me.height*fn),A.isDataArrayTexture?zt=Me.depth:A.isData3DTexture?zt=Math.floor(Me.depth*fn):zt=1,$t=0,Wt=0,Vt=0}st!==null?(_e=st.x,Re=st.y,Ze=st.z):(_e=0,Re=0,Ze=0);const ye=ee.convert(q.format),qt=ee.convert(q.type);let Ke;q.isData3DTexture?(U.setTexture3D(q,0),Ke=I.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(U.setTexture2DArray(q,0),Ke=I.TEXTURE_2D_ARRAY):(U.setTexture2D(q,0),Ke=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,q.unpackAlignment);const Te=I.getParameter(I.UNPACK_ROW_LENGTH),Rn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ya=I.getParameter(I.UNPACK_SKIP_PIXELS),We=I.getParameter(I.UNPACK_SKIP_ROWS),Wi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Me.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Me.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$t),I.pixelStorei(I.UNPACK_SKIP_ROWS,Wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Vt);const Ge=A.isDataArrayTexture||A.isData3DTexture,Cn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const fn=Ht.get(A),gn=Ht.get(q),En=Ht.get(fn.__renderTarget),Ui=Ht.get(gn.__renderTarget);kt.bindFramebuffer(I.READ_FRAMEBUFFER,En.__webglFramebuffer),kt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let qi=0;qi<zt;qi++)Ge&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ht.get(A).__webglTexture,j,Vt+qi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ht.get(q).__webglTexture,Et,Ze+qi)),I.blitFramebuffer($t,Wt,Rt,Ct,_e,Re,Rt,Ct,I.DEPTH_BUFFER_BIT,I.NEAREST);kt.bindFramebuffer(I.READ_FRAMEBUFFER,null),kt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Ht.has(A)){const fn=Ht.get(A),gn=Ht.get(q);kt.bindFramebuffer(I.READ_FRAMEBUFFER,sl),kt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Xi);for(let En=0;En<zt;En++)Ge?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fn.__webglTexture,j,Vt+En):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fn.__webglTexture,j),Cn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gn.__webglTexture,Et,Ze+En):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,gn.__webglTexture,Et),j!==0?I.blitFramebuffer($t,Wt,Rt,Ct,_e,Re,Rt,Ct,I.COLOR_BUFFER_BIT,I.NEAREST):Cn?I.copyTexSubImage3D(Ke,Et,_e,Re,Ze+En,$t,Wt,Rt,Ct):I.copyTexSubImage2D(Ke,Et,_e,Re,$t,Wt,Rt,Ct);kt.bindFramebuffer(I.READ_FRAMEBUFFER,null),kt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Cn?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Ke,Et,_e,Re,Ze,Rt,Ct,zt,ye,qt,Me.data):q.isCompressedArrayTexture?I.compressedTexSubImage3D(Ke,Et,_e,Re,Ze,Rt,Ct,zt,ye,Me.data):I.texSubImage3D(Ke,Et,_e,Re,Ze,Rt,Ct,zt,ye,qt,Me):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Et,_e,Re,Rt,Ct,ye,qt,Me.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Et,_e,Re,Me.width,Me.height,ye,Me.data):I.texSubImage2D(I.TEXTURE_2D,Et,_e,Re,Rt,Ct,ye,qt,Me);I.pixelStorei(I.UNPACK_ROW_LENGTH,Te),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Rn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ya),I.pixelStorei(I.UNPACK_SKIP_ROWS,We),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Wi),Et===0&&q.generateMipmaps&&I.generateMipmap(Ke),kt.unbindTexture()},this.copyTextureToTexture3D=function(A,q,at=null,st=null,j=0){return Vc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,q,at,st,j)},this.initRenderTarget=function(A){Ht.get(A).__webglFramebuffer===void 0&&U.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?U.setTextureCube(A,0):A.isData3DTexture?U.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?U.setTexture2DArray(A,0):U.setTexture2D(A,0),kt.unbindTexture()},this.resetState=function(){G=0,F=0,Z=null,kt.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),i.unpackColorSpace=be._getUnpackColorSpace()}}var Ih={exports:{}},ko={},Fh={exports:{}},Bh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function i1(){return Nv||(Nv=1,function(r){function t(O,Q){var Y=O.length;O.push(Q);t:for(;0<Y;){var Mt=Y-1>>>1,L=O[Mt];if(0<l(L,Q))O[Mt]=Q,O[Y]=L,Y=Mt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var Q=O[0],Y=O.pop();if(Y!==Q){O[0]=Y;t:for(var Mt=0,L=O.length,tt=L>>>1;Mt<tt;){var vt=2*(Mt+1)-1,St=O[vt],J=vt+1,dt=O[J];if(0>l(St,Y))J<L&&0>l(dt,St)?(O[Mt]=dt,O[J]=Y,Mt=J):(O[Mt]=St,O[vt]=Y,Mt=vt);else if(J<L&&0>l(dt,Y))O[Mt]=dt,O[J]=Y,Mt=J;else break t}}return Q}function l(O,Q){var Y=O.sortIndex-Q.sortIndex;return Y!==0?Y:O.id-Q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var p=[],m=[],_=1,v=null,x=3,S=!1,E=!1,R=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(O){for(var Q=i(m);Q!==null;){if(Q.callback===null)s(m);else if(Q.startTime<=O)s(m),Q.sortIndex=Q.expirationTime,t(p,Q);else break;Q=i(m)}}function H(O){if(R=!1,D(O),!E)if(i(p)!==null)E=!0,G||(G=!0,lt());else{var Q=i(m);Q!==null&&ht(H,Q.startTime-O)}}var G=!1,F=-1,Z=5,w=-1;function C(){return y?!0:!(r.unstable_now()-w<Z)}function V(){if(y=!1,G){var O=r.unstable_now();w=O;var Q=!0;try{t:{E=!1,R&&(R=!1,z(F),F=-1),S=!0;var Y=x;try{e:{for(D(O),v=i(p);v!==null&&!(v.expirationTime>O&&C());){var Mt=v.callback;if(typeof Mt=="function"){v.callback=null,x=v.priorityLevel;var L=Mt(v.expirationTime<=O);if(O=r.unstable_now(),typeof L=="function"){v.callback=L,D(O),Q=!0;break e}v===i(p)&&s(p),D(O)}else s(p);v=i(p)}if(v!==null)Q=!0;else{var tt=i(m);tt!==null&&ht(H,tt.startTime-O),Q=!1}}break t}finally{v=null,x=Y,S=!1}Q=void 0}}finally{Q?lt():G=!1}}}var lt;if(typeof N=="function")lt=function(){N(V)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,gt=rt.port2;rt.port1.onmessage=V,lt=function(){gt.postMessage(null)}}else lt=function(){g(V,0)};function ht(O,Q){F=g(function(){O(r.unstable_now())},Q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(O){switch(x){case 1:case 2:case 3:var Q=3;break;default:Q=x}var Y=x;x=Q;try{return O()}finally{x=Y}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(O,Q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Y=x;x=O;try{return Q()}finally{x=Y}},r.unstable_scheduleCallback=function(O,Q,Y){var Mt=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Mt+Y:Mt):Y=Mt,O){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Y+L,O={id:_++,callback:Q,priorityLevel:O,startTime:Y,expirationTime:L,sortIndex:-1},Y>Mt?(O.sortIndex=Y,t(m,O),i(p)===null&&O===i(m)&&(R?(z(F),F=-1):R=!0,ht(H,Y-Mt))):(O.sortIndex=L,t(p,O),E||S||(E=!0,G||(G=!0,lt()))),O},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(O){var Q=x;return function(){var Y=x;x=Q;try{return O.apply(this,arguments)}finally{x=Y}}}}(Bh)),Bh}var Pv;function a1(){return Pv||(Pv=1,Fh.exports=i1()),Fh.exports}var Hh={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function s1(){if(Ov)return Ln;Ov=1;var r=Dd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)m+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.createPortal=function(p,m){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,_)},Ln.flushSync=function(p){var m=f.T,_=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=m,s.p=_,s.d.f()}},Ln.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Ln.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Ln.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;_==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:S}):_==="script"&&s.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Ln.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var _=d(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Ln.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var _=m.as,v=d(_,m.crossOrigin);s.d.L(p,_,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Ln.preloadModule=function(p,m){if(typeof p=="string")if(m){var _=d(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Ln.requestFormReset=function(p){s.d.r(p)},Ln.unstable_batchedUpdates=function(p,m){return p(m)},Ln.useFormState=function(p,m,_){return f.H.useFormState(p,m,_)},Ln.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ln.version="19.1.0",Ln}var zv;function r1(){if(zv)return Hh.exports;zv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Hh.exports=s1(),Hh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv;function o1(){if(Iv)return ko;Iv=1;var r=a1(),t=Dd(),i=r1();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return d(u),e;if(h===o)return d(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var M=!1,T=u.child;T;){if(T===a){M=!0,a=u,o=h;break}if(T===o){M=!0,o=u,a=h;break}T=T.sibling}if(!M){for(T=h.child;T;){if(T===a){M=!0,a=h,o=u;break}if(T===o){M=!0,o=h,a=u;break}T=T.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function m(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=m(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),z=Symbol.for("react.consumer"),N=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function lt(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case y:return"Profiler";case R:return"StrictMode";case H:return"Suspense";case G:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case N:return(e.displayName||"Context")+".Provider";case z:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:gt(e.type)||"Memo";case Z:n=e._payload,e=e._init;try{return gt(e(n))}catch{}}return null}var ht=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Mt=[],L=-1;function tt(e){return{current:e}}function vt(e){0>L||(e.current=Mt[L],Mt[L]=null,L--)}function St(e,n){L++,Mt[L]=e.current,e.current=n}var J=tt(null),dt=tt(null),xt=tt(null),bt=tt(null);function Dt(e,n){switch(St(xt,n),St(dt,e),St(J,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?K_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=K_(n),e=J_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(J),St(J,e)}function le(){vt(J),vt(dt),vt(xt)}function Zt(e){e.memoizedState!==null&&St(bt,e);var n=J.current,a=J_(n,e.type);n!==a&&(St(dt,e),St(J,a))}function ke(e){dt.current===e&&(vt(J),vt(dt)),bt.current===e&&(vt(bt),Uo._currentValue=Y)}var He=Object.prototype.hasOwnProperty,pe=r.unstable_scheduleCallback,I=r.unstable_cancelCallback,Hn=r.unstable_shouldYield,Se=r.unstable_requestPaint,ne=r.unstable_now,kt=r.unstable_getCurrentPriorityLevel,Pe=r.unstable_ImmediatePriority,Ht=r.unstable_UserBlockingPriority,U=r.unstable_NormalPriority,b=r.unstable_LowPriority,et=r.unstable_IdlePriority,pt=r.log,yt=r.unstable_setDisableYieldValue,ut=null,Nt=null;function At(e){if(typeof pt=="function"&&yt(e),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(ut,e)}catch{}}var Bt=Math.clz32?Math.clz32:It,Jt=Math.log,Tt=Math.LN2;function It(e){return e>>>=0,e===0?32:31-(Jt(e)/Tt|0)|0}var Yt=256,Qt=4194304;function Pt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ue(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~h,o!==0?u=Pt(o):(M&=T,M!==0?u=Pt(M):a||(a=T&~e,a!==0&&(u=Pt(a))))):(T=o&~h,T!==0?u=Pt(T):M!==0?u=Pt(M):a||(a=o&~e,a!==0&&(u=Pt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function ee(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Oe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=Yt;return Yt<<=1,(Yt&4194048)===0&&(Yt=256),e}function Ut(){var e=Qt;return Qt<<=1,(Qt&62914560)===0&&(Qt=4194304),e}function ot(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function mt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ot(e,n,a,o,u,h){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,P=e.expirationTimes,$=e.hiddenUpdates;for(a=M&~a;0<a;){var ct=31-Bt(a),_t=1<<ct;T[ct]=0,P[ct]=-1;var nt=$[ct];if(nt!==null)for($[ct]=null,ct=0;ct<nt.length;ct++){var it=nt[ct];it!==null&&(it.lane&=-536870913)}a&=~_t}o!==0&&Lt(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(M&~n))}function Lt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Bt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function ie(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Bt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Xe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function an(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ae(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:gg(e.type))}function jn(e,n){var a=Q.p;try{return Q.p=e,n()}finally{Q.p=a}}var _n=Math.random().toString(36).slice(2),un="__reactFiber$"+_n,yn="__reactProps$"+_n,Gn="__reactContainer$"+_n,es="__reactEvents$"+_n,nl="__reactListeners$"+_n,il="__reactHandles$"+_n,ns="__reactResources$"+_n,xa="__reactMarker$"+_n;function Sa(e){delete e[un],delete e[yn],delete e[es],delete e[nl],delete e[il]}function Vi(e){var n=e[un];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Gn]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=ng(e);e!==null;){if(a=e[un])return a;e=ng(e)}return n}e=a,a=e.parentNode}return null}function ki(e){if(e=e[un]||e[Gn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function is(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ma(e){var n=e[ns];return n||(n=e[ns]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function sn(e){e[xa]=!0}var al=new Set,sl={};function Xi(e,n){A(e,n),A(e+"Capture",n)}function A(e,n){for(sl[e]=n,e=0;e<n.length;e++)al.add(n[e])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},st={};function j(e){return He.call(st,e)?!0:He.call(at,e)?!1:q.test(e)?st[e]=!0:(at[e]=!0,!1)}function Et(e,n,a){if(j(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Rt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ct(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var zt,$t;function Wt(e){if(zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);zt=n&&n[1]||"",$t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zt+e+$t}var Vt=!1;function _e(e,n){if(!e||Vt)return"";Vt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(it){var nt=it}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(it){nt=it}e.call(_t.prototype)}}else{try{throw Error()}catch(it){nt=it}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(it){if(it&&nt&&typeof it.stack=="string")return[it.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],T=h[1];if(M&&T){var P=M.split(`
`),$=T.split(`
`);for(u=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===P.length||u===$.length)for(o=P.length-1,u=$.length-1;1<=o&&0<=u&&P[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(P[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||P[o]!==$[u]){var ct=`
`+P[o].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=o&&0<=u);break}}}finally{Vt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Wt(a):""}function Re(e){switch(e.tag){case 26:case 27:case 5:return Wt(e.type);case 16:return Wt("Lazy");case 13:return Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return _e(e.type,!1);case 11:return _e(e.type.render,!1);case 1:return _e(e.type,!0);case 31:return Wt("Activity");default:return""}}function Ze(e){try{var n="";do n+=Re(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Me(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ye(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function qt(e){var n=ye(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,h.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ke(e){e._valueTracker||(e._valueTracker=qt(e))}function Te(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ye(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Rn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ya=/[\n"\\]/g;function We(e){return e.replace(ya,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Wi(e,n,a,o,u,h,M,T){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Me(n)):e.value!==""+Me(n)&&(e.value=""+Me(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Cn(e,M,Me(n)):a!=null?Cn(e,M,Me(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Me(T):e.removeAttribute("name")}function Ge(e,n,a,o,u,h,M,T){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+Me(a):"",n=n!=null?""+Me(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Cn(e,n,a){n==="number"&&Rn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function fn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Me(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function gn(e,n,a){if(n!=null&&(n=""+Me(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Me(a):""}function En(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ht(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Me(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Ui(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var qi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||qi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Jd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Kd(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Kd(e,h,n[h])}function nu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var w0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),D0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rl(e){return D0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var iu=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ps=null,Os=null;function $d(e){var n=ki(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Wi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+We(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[yn]||null;if(!u)throw Error(s(90));Wi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Te(o)}break t;case"textarea":gn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&fn(e,!!a.multiple,n,!1)}}}var su=!1;function tp(e,n,a){if(su)return e(n,a);su=!0;try{var o=e(n);return o}finally{if(su=!1,(Ps!==null||Os!==null)&&(Wl(),Ps&&(n=Ps,e=Os,Os=Ps=null,$d(n),e)))for(n=0;n<e.length;n++)$d(e[n])}}function kr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(Yi)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){ru=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{ru=!1}var Ea=null,ou=null,ol=null;function ep(){if(ol)return ol;var e,n=ou,a=n.length,o,u="value"in Ea?Ea.value:Ea.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[h-o];o++);return ol=u.slice(e,1<o?1-o:void 0)}function ll(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function cl(){return!0}function np(){return!1}function Vn(e){function n(a,o,u,h,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(h):h[T]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?cl:np,this.isPropagationStopped=np,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),n}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=Vn(as),Wr=_({},as,{view:0,detail:0}),U0=Vn(Wr),lu,cu,qr,fl=_({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qr&&(qr&&e.type==="mousemove"?(lu=e.screenX-qr.screenX,cu=e.screenY-qr.screenY):cu=lu=0,qr=e),lu)},movementY:function(e){return"movementY"in e?e.movementY:cu}}),ip=Vn(fl),L0=_({},fl,{dataTransfer:0}),N0=Vn(L0),P0=_({},Wr,{relatedTarget:0}),uu=Vn(P0),O0=_({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),z0=Vn(O0),I0=_({},as,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),F0=Vn(I0),B0=_({},as,{data:0}),ap=Vn(B0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=V0[e])?!!n[e]:!1}function fu(){return k0}var X0=_({},Wr,{key:function(e){if(e.key){var n=H0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ll(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?G0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(e){return e.type==="keypress"?ll(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ll(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),W0=Vn(X0),q0=_({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sp=Vn(q0),Y0=_({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),j0=Vn(Y0),Z0=_({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q0=Vn(Z0),K0=_({},fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),J0=Vn(K0),$0=_({},as,{newState:0,oldState:0}),tx=Vn($0),ex=[9,13,27,32],hu=Yi&&"CompositionEvent"in window,Yr=null;Yi&&"documentMode"in document&&(Yr=document.documentMode);var nx=Yi&&"TextEvent"in window&&!Yr,rp=Yi&&(!hu||Yr&&8<Yr&&11>=Yr),op=" ",lp=!1;function cp(e,n){switch(e){case"keyup":return ex.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zs=!1;function ix(e,n){switch(e){case"compositionend":return up(n);case"keypress":return n.which!==32?null:(lp=!0,op);case"textInput":return e=n.data,e===op&&lp?null:e;default:return null}}function ax(e,n){if(zs)return e==="compositionend"||!hu&&cp(e,n)?(e=ep(),ol=ou=Ea=null,zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return rp&&n.locale!=="ko"?null:n.data;default:return null}}var sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!sx[e.type]:n==="textarea"}function hp(e,n,a,o){Ps?Os?Os.push(o):Os=[o]:Ps=o,n=Kl(n,"onChange"),0<n.length&&(a=new ul("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var jr=null,Zr=null;function rx(e){q_(e,0)}function hl(e){var n=is(e);if(Te(n))return e}function dp(e,n){if(e==="change")return n}var pp=!1;if(Yi){var du;if(Yi){var pu="oninput"in document;if(!pu){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),pu=typeof mp.oninput=="function"}du=pu}else du=!1;pp=du&&(!document.documentMode||9<document.documentMode)}function _p(){jr&&(jr.detachEvent("onpropertychange",gp),Zr=jr=null)}function gp(e){if(e.propertyName==="value"&&hl(Zr)){var n=[];hp(n,Zr,e,au(e)),tp(rx,n)}}function ox(e,n,a){e==="focusin"?(_p(),jr=n,Zr=a,jr.attachEvent("onpropertychange",gp)):e==="focusout"&&_p()}function lx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl(Zr)}function cx(e,n){if(e==="click")return hl(n)}function ux(e,n){if(e==="input"||e==="change")return hl(n)}function fx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:fx;function Qr(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!He.call(n,u)||!Zn(e[u],n[u]))return!1}return!0}function vp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xp(e,n){var a=vp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=vp(a)}}function Sp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Sp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Mp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Rn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Rn(e.document)}return n}function mu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var hx=Yi&&"documentMode"in document&&11>=document.documentMode,Is=null,_u=null,Kr=null,gu=!1;function yp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gu||Is==null||Is!==Rn(o)||(o=Is,"selectionStart"in o&&mu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Kr&&Qr(Kr,o)||(Kr=o,o=Kl(_u,"onSelect"),0<o.length&&(n=new ul("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Is)))}function ss(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Fs={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionrun:ss("Transition","TransitionRun"),transitionstart:ss("Transition","TransitionStart"),transitioncancel:ss("Transition","TransitionCancel"),transitionend:ss("Transition","TransitionEnd")},vu={},Ep={};Yi&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function rs(e){if(vu[e])return vu[e];if(!Fs[e])return e;var n=Fs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ep)return vu[e]=n[a];return e}var Tp=rs("animationend"),bp=rs("animationiteration"),Ap=rs("animationstart"),dx=rs("transitionrun"),px=rs("transitionstart"),mx=rs("transitioncancel"),Rp=rs("transitionend"),Cp=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function Si(e,n){Cp.set(e,n),Xi(n,[e])}var wp=new WeakMap;function li(e,n){if(typeof e=="object"&&e!==null){var a=wp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ze(n)},wp.set(e,n),n)}return{value:e,source:n,stack:Ze(n)}}var ci=[],Bs=0,Su=0;function dl(){for(var e=Bs,n=Su=Bs=0;n<e;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var h=ci[n];if(ci[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}h!==0&&Dp(a,u,h)}}function pl(e,n,a,o){ci[Bs++]=e,ci[Bs++]=n,ci[Bs++]=a,ci[Bs++]=o,Su|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Mu(e,n,a,o){return pl(e,n,a,o),ml(e)}function Hs(e,n){return pl(e,null,null,n),ml(e)}function Dp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Bt(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function ml(e){if(50<Eo)throw Eo=0,Cf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Gs={};function _x(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,o){return new _x(e,n,a,o)}function yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ji(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Up(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function _l(e,n,a,o,u,h){var M=0;if(o=e,typeof e=="function")yu(e)&&(M=1);else if(typeof e=="string")M=vS(e,a,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Qn(31,a,n,u),e.elementType=w,e.lanes=h,e;case E:return os(a.children,u,h,n);case R:M=8,u|=24;break;case y:return e=Qn(12,a,n,u|2),e.elementType=y,e.lanes=h,e;case H:return e=Qn(13,a,n,u),e.elementType=H,e.lanes=h,e;case G:return e=Qn(19,a,n,u),e.elementType=G,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case N:M=10;break t;case z:M=9;break t;case D:M=11;break t;case F:M=14;break t;case Z:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Qn(M,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function os(e,n,a,o){return e=Qn(7,e,o,n),e.lanes=a,e}function Eu(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function Tu(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Vs=[],ks=0,gl=null,vl=0,ui=[],fi=0,ls=null,Zi=1,Qi="";function cs(e,n){Vs[ks++]=vl,Vs[ks++]=gl,gl=e,vl=n}function Lp(e,n,a){ui[fi++]=Zi,ui[fi++]=Qi,ui[fi++]=ls,ls=e;var o=Zi;e=Qi;var u=32-Bt(o)-1;o&=~(1<<u),a+=1;var h=32-Bt(n)+u;if(30<h){var M=u-u%5;h=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Zi=1<<32-Bt(n)+u|a<<u|o,Qi=h+e}else Zi=1<<h|a<<u|o,Qi=e}function bu(e){e.return!==null&&(cs(e,1),Lp(e,1,0))}function Au(e){for(;e===gl;)gl=Vs[--ks],Vs[ks]=null,vl=Vs[--ks],Vs[ks]=null;for(;e===ls;)ls=ui[--fi],ui[fi]=null,Qi=ui[--fi],ui[fi]=null,Zi=ui[--fi],ui[fi]=null}var On=null,Je=null,we=!1,us=null,Li=!1,Ru=Error(s(519));function fs(e){var n=Error(s(418,""));throw to(li(n,e)),Ru}function Np(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[un]=e,n[yn]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<bo.length;a++)ve(bo[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Ge(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ke(n);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),En(n,o.value,o.defaultValue,o.children),Ke(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Q_(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=Jl),n=!0):n=!1,n||fs(e)}function Pp(e){for(On=e.return;On;)switch(On.tag){case 5:case 13:Li=!1;return;case 27:case 3:Li=!0;return;default:On=On.return}}function Jr(e){if(e!==On)return!1;if(!we)return Pp(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Xf(e.type,e.memoizedProps)),a=!a),a&&Je&&fs(e),Pp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Je=yi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Je=null}}else n===27?(n=Je,Ba(e.type)?(e=jf,jf=null,Je=e):Je=n):Je=On?yi(e.stateNode.nextSibling):null;return!0}function $r(){Je=On=null,we=!1}function Op(){var e=us;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),us=null),e}function to(e){us===null?us=[e]:us.push(e)}var Cu=tt(null),hs=null,Ki=null;function Ta(e,n,a){St(Cu,n._currentValue),n._currentValue=a}function Ji(e){e._currentValue=Cu.current,vt(Cu)}function wu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Du(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var M=u.child;h=h.firstContext;t:for(;h!==null;){var T=h;h=u;for(var P=0;P<n.length;P++)if(T.context===n[P]){h.lanes|=a,T=h.alternate,T!==null&&(T.lanes|=a),wu(h.return,a,e),o||(M=null);break t}h=T.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),wu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function eo(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var T=u.type;Zn(u.pendingProps.value,M.value)||(e!==null?e.push(T):e=[T])}}else if(u===bt.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Uo):e=[Uo])}u=u.return}e!==null&&Du(n,e,a,o),n.flags|=262144}function xl(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ds(e){hs=e,Ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return zp(hs,e)}function Sl(e,n){return hs===null&&ds(e),zp(e,n)}function zp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ki===null){if(e===null)throw Error(s(308));Ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ki=Ki.next=n;return a}var gx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},vx=r.unstable_scheduleCallback,xx=r.unstable_NormalPriority,hn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uu(){return{controller:new gx,data:new Map,refCount:0}}function no(e){e.refCount--,e.refCount===0&&vx(xx,function(){e.controller.abort()})}var io=null,Lu=0,Xs=0,Ws=null;function Sx(e,n){if(io===null){var a=io=[];Lu=0,Xs=Of(),Ws={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Lu++,n.then(Ip,Ip),n}function Ip(){if(--Lu===0&&io!==null){Ws!==null&&(Ws.status="fulfilled");var e=io;io=null,Xs=0,Ws=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Mx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Fp=O.S;O.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Sx(e,n),Fp!==null&&Fp(e,n)};var ps=tt(null);function Nu(){var e=ps.current;return e!==null?e:qe.pooledCache}function Ml(e,n){n===null?St(ps,ps.current):St(ps,n.pool)}function Bp(){var e=Nu();return e===null?null:{parent:hn._currentValue,pool:e}}var ao=Error(s(460)),Hp=Error(s(474)),yl=Error(s(542)),Pu={then:function(){}};function Gp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function El(){}function Vp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(El,El),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xp(e),e;default:if(typeof n.status=="string")n.then(El,El);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xp(e),e}throw so=n,ao}}var so=null;function kp(){if(so===null)throw Error(s(459));var e=so;return so=null,e}function Xp(e){if(e===ao||e===yl)throw Error(s(483))}var ba=!1;function Ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ra(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(De&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ml(e),Dp(e,null,a),n}return pl(e,o,n,a),ml(e)}function ro(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ie(e,a)}}function Iu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Fu=!1;function oo(){if(Fu){var e=Ws;if(e!==null)throw e}}function lo(e,n,a,o){Fu=!1;var u=e.updateQueue;ba=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var P=T,$=P.next;P.next=null,M===null?h=$:M.next=$,M=P;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,T=ct.lastBaseUpdate,T!==M&&(T===null?ct.firstBaseUpdate=$:T.next=$,ct.lastBaseUpdate=P))}if(h!==null){var _t=u.baseState;M=0,ct=$=P=null,T=h;do{var nt=T.lane&-536870913,it=nt!==T.lane;if(it?(Ee&nt)===nt:(o&nt)===nt){nt!==0&&nt===Xs&&(Fu=!0),ct!==null&&(ct=ct.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var te=e,jt=T;nt=n;var Fe=a;switch(jt.tag){case 1:if(te=jt.payload,typeof te=="function"){_t=te.call(Fe,_t,nt);break t}_t=te;break t;case 3:te.flags=te.flags&-65537|128;case 0:if(te=jt.payload,nt=typeof te=="function"?te.call(Fe,_t,nt):te,nt==null)break t;_t=_({},_t,nt);break t;case 2:ba=!0}}nt=T.callback,nt!==null&&(e.flags|=64,it&&(e.flags|=8192),it=u.callbacks,it===null?u.callbacks=[nt]:it.push(nt))}else it={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ct===null?($=ct=it,P=_t):ct=ct.next=it,M|=nt;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;it=T,T=it.next,it.next=null,u.lastBaseUpdate=it,u.shared.pending=null}}while(!0);ct===null&&(P=_t),u.baseState=P,u.firstBaseUpdate=$,u.lastBaseUpdate=ct,h===null&&(u.shared.lanes=0),Oa|=M,e.lanes=M,e.memoizedState=_t}}function Wp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function qp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wp(a[e],n)}var qs=tt(null),Tl=tt(0);function Yp(e,n){e=sa,St(Tl,e),St(qs,n),sa=e|n.baseLanes}function Bu(){St(Tl,sa),St(qs,qs.current)}function Hu(){sa=Tl.current,vt(qs),vt(Tl)}var Ca=0,fe=null,ze=null,rn=null,bl=!1,Ys=!1,ms=!1,Al=0,co=0,js=null,yx=0;function en(){throw Error(s(321))}function Gu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Zn(e[a],n[a]))return!1;return!0}function Vu(e,n,a,o,u,h){return Ca=h,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Dm:Um,ms=!1,h=a(o,u),ms=!1,Ys&&(h=Zp(n,a,o,u)),jp(e),h}function jp(e){O.H=Ll;var n=ze!==null&&ze.next!==null;if(Ca=0,rn=ze=fe=null,bl=!1,co=0,js=null,n)throw Error(s(300));e===null||vn||(e=e.dependencies,e!==null&&xl(e)&&(vn=!0))}function Zp(e,n,a,o){fe=e;var u=0;do{if(Ys&&(js=null),co=0,Ys=!1,25<=u)throw Error(s(301));if(u+=1,rn=ze=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}O.H=wx,h=n(a,o)}while(Ys);return h}function Ex(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?uo(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(fe.flags|=1024),n}function ku(){var e=Al!==0;return Al=0,e}function Xu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Wu(e){if(bl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}bl=!1}Ca=0,rn=ze=fe=null,Ys=!1,co=Al=0,js=null}function kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?fe.memoizedState=rn=e:rn=rn.next=e,rn}function on(){if(ze===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=rn===null?fe.memoizedState:rn.next;if(n!==null)rn=n,ze=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},rn===null?fe.memoizedState=rn=e:rn=rn.next=e}return rn}function qu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function uo(e){var n=co;return co+=1,js===null&&(js=[]),e=Vp(js,e,n),n=fe,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Dm:Um),e}function Rl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return uo(e);if(e.$$typeof===N)return wn(e)}throw Error(s(438,String(e)))}function Yu(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=qu(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function $i(e,n){return typeof n=="function"?n(e):n}function Cl(e){var n=on();return ju(n,ze,e)}function ju(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var T=M=null,P=null,$=n,ct=!1;do{var _t=$.lane&-536870913;if(_t!==$.lane?(Ee&_t)===_t:(Ca&_t)===_t){var nt=$.revertLane;if(nt===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),_t===Xs&&(ct=!0);else if((Ca&nt)===nt){$=$.next,nt===Xs&&(ct=!0);continue}else _t={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(T=P=_t,M=h):P=P.next=_t,fe.lanes|=nt,Oa|=nt;_t=$.action,ms&&a(h,_t),h=$.hasEagerState?$.eagerState:a(h,_t)}else nt={lane:_t,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(T=P=nt,M=h):P=P.next=nt,fe.lanes|=_t,Oa|=_t;$=$.next}while($!==null&&$!==n);if(P===null?M=h:P.next=T,!Zn(h,e.memoizedState)&&(vn=!0,ct&&(a=Ws,a!==null)))throw a;e.memoizedState=h,e.baseState=M,e.baseQueue=P,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Zu(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do h=e(h,M.action),M=M.next;while(M!==u);Zn(h,n.memoizedState)||(vn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Qp(e,n,a){var o=fe,u=on(),h=we;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!Zn((ze||u).memoizedState,a);M&&(u.memoizedState=a,vn=!0),u=u.queue;var T=$p.bind(null,o,u,e);if(fo(2048,8,T,[e]),u.getSnapshot!==n||M||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,Zs(9,wl(),Jp.bind(null,o,u,a,n),null),qe===null)throw Error(s(349));h||(Ca&124)!==0||Kp(o,n,a)}return a}function Kp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=qu(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Jp(e,n,a,o){n.value=a,n.getSnapshot=o,tm(n)&&em(e)}function $p(e,n,a){return a(function(){tm(n)&&em(e)})}function tm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Zn(e,a)}catch{return!0}}function em(e){var n=Hs(e,2);n!==null&&ei(n,e,2)}function Qu(e){var n=kn();if(typeof e=="function"){var a=e;if(e=a(),ms){At(!0);try{a()}finally{At(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:e},n}function nm(e,n,a,o){return e.baseState=a,ju(e,ze,typeof o=="function"?o:$i)}function Tx(e,n,a,o,u){if(Ul(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};O.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,im(n,h)):(h.next=a.next,n.pending=a.next=h)}}function im(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=O.T,M={};O.T=M;try{var T=a(u,o),P=O.S;P!==null&&P(M,T),am(e,n,T)}catch($){Ku(e,n,$)}finally{O.T=h}}else try{h=a(u,o),am(e,n,h)}catch($){Ku(e,n,$)}}function am(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){sm(e,n,o)},function(o){return Ku(e,n,o)}):sm(e,n,a)}function sm(e,n,a){n.status="fulfilled",n.value=a,rm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,im(e,a)))}function Ku(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,rm(n),n=n.next;while(n!==o)}e.action=null}function rm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function om(e,n){return n}function lm(e,n){if(we){var a=qe.formState;if(a!==null){t:{var o=fe;if(we){if(Je){e:{for(var u=Je,h=Li;u.nodeType!==8;){if(!h){u=null;break e}if(u=yi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Je=yi(u.nextSibling),o=u.data==="F!";break t}}fs(o)}o=!1}o&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:om,lastRenderedState:n},a.queue=o,a=Rm.bind(null,fe,o),o.dispatch=a,o=Qu(!1),h=nf.bind(null,fe,!1,o.queue),o=kn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Tx.bind(null,fe,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function cm(e){var n=on();return um(n,ze,e)}function um(e,n,a){if(n=ju(e,n,om)[0],e=Cl($i)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=uo(n)}catch(M){throw M===ao?yl:M}else o=n;n=on();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,Zs(9,wl(),bx.bind(null,u,a),null)),[o,h,e]}function bx(e,n){e.action=n}function fm(e){var n=on(),a=ze;if(a!==null)return um(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Zs(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=fe.updateQueue,n===null&&(n=qu(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function wl(){return{destroy:void 0,resource:void 0}}function hm(){return on().memoizedState}function Dl(e,n,a,o){var u=kn();o=o===void 0?null:o,fe.flags|=e,u.memoizedState=Zs(1|n,wl(),a,o)}function fo(e,n,a,o){var u=on();o=o===void 0?null:o;var h=u.memoizedState.inst;ze!==null&&o!==null&&Gu(o,ze.memoizedState.deps)?u.memoizedState=Zs(n,h,a,o):(fe.flags|=e,u.memoizedState=Zs(1|n,h,a,o))}function dm(e,n){Dl(8390656,8,e,n)}function pm(e,n){fo(2048,8,e,n)}function mm(e,n){return fo(4,2,e,n)}function _m(e,n){return fo(4,4,e,n)}function gm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function vm(e,n,a){a=a!=null?a.concat([e]):null,fo(4,4,gm.bind(null,n,e),a)}function Ju(){}function xm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Gu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Sm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Gu(n,o[1]))return o[0];if(o=e(),ms){At(!0);try{e()}finally{At(!1)}}return a.memoizedState=[o,n],o}function $u(e,n,a){return a===void 0||(Ca&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=E_(),fe.lanes|=e,Oa|=e,a)}function Mm(e,n,a,o){return Zn(a,n)?a:qs.current!==null?(e=$u(e,a,o),Zn(e,n)||(vn=!0),e):(Ca&42)===0?(vn=!0,e.memoizedState=a):(e=E_(),fe.lanes|=e,Oa|=e,n)}function ym(e,n,a,o,u){var h=Q.p;Q.p=h!==0&&8>h?h:8;var M=O.T,T={};O.T=T,nf(e,!1,n,a);try{var P=u(),$=O.S;if($!==null&&$(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ct=Mx(P,o);ho(e,n,ct,ti(e))}else ho(e,n,o,ti(e))}catch(_t){ho(e,n,{then:function(){},status:"rejected",reason:_t},ti())}finally{Q.p=h,O.T=M}}function Ax(){}function tf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Em(e).queue;ym(e,u,n,Y,a===null?Ax:function(){return Tm(e),a(o)})}function Em(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$i,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Tm(e){var n=Em(e).next.queue;ho(e,n,{},ti())}function ef(){return wn(Uo)}function bm(){return on().memoizedState}function Am(){return on().memoizedState}function Rx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();e=Aa(a);var o=Ra(n,e,a);o!==null&&(ei(o,n,a),ro(o,n,a)),n={cache:Uu()},e.payload=n;return}n=n.return}}function Cx(e,n,a){var o=ti();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(e)?Cm(n,a):(a=Mu(e,n,a,o),a!==null&&(ei(a,e,o),wm(a,n,o)))}function Rm(e,n,a){var o=ti();ho(e,n,a,o)}function ho(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(e))Cm(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,T=h(M,a);if(u.hasEagerState=!0,u.eagerState=T,Zn(T,M))return pl(e,n,u,0),qe===null&&dl(),!1}catch{}finally{}if(a=Mu(e,n,u,o),a!==null)return ei(a,e,o),wm(a,n,o),!0}return!1}function nf(e,n,a,o){if(o={lane:2,revertLane:Of(),action:o,hasEagerState:!1,eagerState:null,next:null},Ul(e)){if(n)throw Error(s(479))}else n=Mu(e,a,o,2),n!==null&&ei(n,e,2)}function Ul(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function Cm(e,n){Ys=bl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function wm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ie(e,a)}}var Ll={readContext:wn,use:Rl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en},Dm={readContext:wn,use:Rl,useCallback:function(e,n){return kn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:dm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Dl(4194308,4,gm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Dl(4194308,4,e,n)},useInsertionEffect:function(e,n){Dl(4,2,e,n)},useMemo:function(e,n){var a=kn();n=n===void 0?null:n;var o=e();if(ms){At(!0);try{e()}finally{At(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=kn();if(a!==void 0){var u=a(n);if(ms){At(!0);try{a(n)}finally{At(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Cx.bind(null,fe,e),[o.memoizedState,e]},useRef:function(e){var n=kn();return e={current:e},n.memoizedState=e},useState:function(e){e=Qu(e);var n=e.queue,a=Rm.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ju,useDeferredValue:function(e,n){var a=kn();return $u(a,e,n)},useTransition:function(){var e=Qu(!1);return e=ym.bind(null,fe,e.queue,!0,!1),kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=fe,u=kn();if(we){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(Ee&124)!==0||Kp(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,dm($p.bind(null,o,h,e),[e]),o.flags|=2048,Zs(9,wl(),Jp.bind(null,o,h,a,n),null),a},useId:function(){var e=kn(),n=qe.identifierPrefix;if(we){var a=Qi,o=Zi;a=(o&~(1<<32-Bt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Al++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=yx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:ef,useFormState:lm,useActionState:lm,useOptimistic:function(e){var n=kn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=nf.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Yu,useCacheRefresh:function(){return kn().memoizedState=Rx.bind(null,fe)}},Um={readContext:wn,use:Rl,useCallback:xm,useContext:wn,useEffect:pm,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:_m,useMemo:Sm,useReducer:Cl,useRef:hm,useState:function(){return Cl($i)},useDebugValue:Ju,useDeferredValue:function(e,n){var a=on();return Mm(a,ze.memoizedState,e,n)},useTransition:function(){var e=Cl($i)[0],n=on().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:Qp,useId:bm,useHostTransitionStatus:ef,useFormState:cm,useActionState:cm,useOptimistic:function(e,n){var a=on();return nm(a,ze,e,n)},useMemoCache:Yu,useCacheRefresh:Am},wx={readContext:wn,use:Rl,useCallback:xm,useContext:wn,useEffect:pm,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:_m,useMemo:Sm,useReducer:Zu,useRef:hm,useState:function(){return Zu($i)},useDebugValue:Ju,useDeferredValue:function(e,n){var a=on();return ze===null?$u(a,e,n):Mm(a,ze.memoizedState,e,n)},useTransition:function(){var e=Zu($i)[0],n=on().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:Qp,useId:bm,useHostTransitionStatus:ef,useFormState:fm,useActionState:fm,useOptimistic:function(e,n){var a=on();return ze!==null?nm(a,ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Yu,useCacheRefresh:Am},Qs=null,po=0;function Nl(e){var n=po;return po+=1,Qs===null&&(Qs=[]),Vp(Qs,e,n)}function mo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Pl(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Lm(e){var n=e._init;return n(e._payload)}function Nm(e){function n(W,B){if(e){var K=W.deletions;K===null?(W.deletions=[B],W.flags|=16):K.push(B)}}function a(W,B){if(!e)return null;for(;B!==null;)n(W,B),B=B.sibling;return null}function o(W){for(var B=new Map;W!==null;)W.key!==null?B.set(W.key,W):B.set(W.index,W),W=W.sibling;return B}function u(W,B){return W=ji(W,B),W.index=0,W.sibling=null,W}function h(W,B,K){return W.index=K,e?(K=W.alternate,K!==null?(K=K.index,K<B?(W.flags|=67108866,B):K):(W.flags|=67108866,B)):(W.flags|=1048576,B)}function M(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function T(W,B,K,ft){return B===null||B.tag!==6?(B=Eu(K,W.mode,ft),B.return=W,B):(B=u(B,K),B.return=W,B)}function P(W,B,K,ft){var Ft=K.type;return Ft===E?ct(W,B,K.props.children,ft,K.key):B!==null&&(B.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===Z&&Lm(Ft)===B.type)?(B=u(B,K.props),mo(B,K),B.return=W,B):(B=_l(K.type,K.key,K.props,null,W.mode,ft),mo(B,K),B.return=W,B)}function $(W,B,K,ft){return B===null||B.tag!==4||B.stateNode.containerInfo!==K.containerInfo||B.stateNode.implementation!==K.implementation?(B=Tu(K,W.mode,ft),B.return=W,B):(B=u(B,K.children||[]),B.return=W,B)}function ct(W,B,K,ft,Ft){return B===null||B.tag!==7?(B=os(K,W.mode,ft,Ft),B.return=W,B):(B=u(B,K),B.return=W,B)}function _t(W,B,K){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=Eu(""+B,W.mode,K),B.return=W,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case x:return K=_l(B.type,B.key,B.props,null,W.mode,K),mo(K,B),K.return=W,K;case S:return B=Tu(B,W.mode,K),B.return=W,B;case Z:var ft=B._init;return B=ft(B._payload),_t(W,B,K)}if(ht(B)||lt(B))return B=os(B,W.mode,K,null),B.return=W,B;if(typeof B.then=="function")return _t(W,Nl(B),K);if(B.$$typeof===N)return _t(W,Sl(W,B),K);Pl(W,B)}return null}function nt(W,B,K,ft){var Ft=B!==null?B.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ft!==null?null:T(W,B,""+K,ft);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===Ft?P(W,B,K,ft):null;case S:return K.key===Ft?$(W,B,K,ft):null;case Z:return Ft=K._init,K=Ft(K._payload),nt(W,B,K,ft)}if(ht(K)||lt(K))return Ft!==null?null:ct(W,B,K,ft,null);if(typeof K.then=="function")return nt(W,B,Nl(K),ft);if(K.$$typeof===N)return nt(W,B,Sl(W,K),ft);Pl(W,K)}return null}function it(W,B,K,ft,Ft){if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return W=W.get(K)||null,T(B,W,""+ft,Ft);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case x:return W=W.get(ft.key===null?K:ft.key)||null,P(B,W,ft,Ft);case S:return W=W.get(ft.key===null?K:ft.key)||null,$(B,W,ft,Ft);case Z:var me=ft._init;return ft=me(ft._payload),it(W,B,K,ft,Ft)}if(ht(ft)||lt(ft))return W=W.get(K)||null,ct(B,W,ft,Ft,null);if(typeof ft.then=="function")return it(W,B,K,Nl(ft),Ft);if(ft.$$typeof===N)return it(W,B,K,Sl(B,ft),Ft);Pl(B,ft)}return null}function te(W,B,K,ft){for(var Ft=null,me=null,Gt=B,Kt=B=0,Sn=null;Gt!==null&&Kt<K.length;Kt++){Gt.index>Kt?(Sn=Gt,Gt=null):Sn=Gt.sibling;var Ce=nt(W,Gt,K[Kt],ft);if(Ce===null){Gt===null&&(Gt=Sn);break}e&&Gt&&Ce.alternate===null&&n(W,Gt),B=h(Ce,B,Kt),me===null?Ft=Ce:me.sibling=Ce,me=Ce,Gt=Sn}if(Kt===K.length)return a(W,Gt),we&&cs(W,Kt),Ft;if(Gt===null){for(;Kt<K.length;Kt++)Gt=_t(W,K[Kt],ft),Gt!==null&&(B=h(Gt,B,Kt),me===null?Ft=Gt:me.sibling=Gt,me=Gt);return we&&cs(W,Kt),Ft}for(Gt=o(Gt);Kt<K.length;Kt++)Sn=it(Gt,W,Kt,K[Kt],ft),Sn!==null&&(e&&Sn.alternate!==null&&Gt.delete(Sn.key===null?Kt:Sn.key),B=h(Sn,B,Kt),me===null?Ft=Sn:me.sibling=Sn,me=Sn);return e&&Gt.forEach(function(Xa){return n(W,Xa)}),we&&cs(W,Kt),Ft}function jt(W,B,K,ft){if(K==null)throw Error(s(151));for(var Ft=null,me=null,Gt=B,Kt=B=0,Sn=null,Ce=K.next();Gt!==null&&!Ce.done;Kt++,Ce=K.next()){Gt.index>Kt?(Sn=Gt,Gt=null):Sn=Gt.sibling;var Xa=nt(W,Gt,Ce.value,ft);if(Xa===null){Gt===null&&(Gt=Sn);break}e&&Gt&&Xa.alternate===null&&n(W,Gt),B=h(Xa,B,Kt),me===null?Ft=Xa:me.sibling=Xa,me=Xa,Gt=Sn}if(Ce.done)return a(W,Gt),we&&cs(W,Kt),Ft;if(Gt===null){for(;!Ce.done;Kt++,Ce=K.next())Ce=_t(W,Ce.value,ft),Ce!==null&&(B=h(Ce,B,Kt),me===null?Ft=Ce:me.sibling=Ce,me=Ce);return we&&cs(W,Kt),Ft}for(Gt=o(Gt);!Ce.done;Kt++,Ce=K.next())Ce=it(Gt,W,Kt,Ce.value,ft),Ce!==null&&(e&&Ce.alternate!==null&&Gt.delete(Ce.key===null?Kt:Ce.key),B=h(Ce,B,Kt),me===null?Ft=Ce:me.sibling=Ce,me=Ce);return e&&Gt.forEach(function(DS){return n(W,DS)}),we&&cs(W,Kt),Ft}function Fe(W,B,K,ft){if(typeof K=="object"&&K!==null&&K.type===E&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:t:{for(var Ft=K.key;B!==null;){if(B.key===Ft){if(Ft=K.type,Ft===E){if(B.tag===7){a(W,B.sibling),ft=u(B,K.props.children),ft.return=W,W=ft;break t}}else if(B.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===Z&&Lm(Ft)===B.type){a(W,B.sibling),ft=u(B,K.props),mo(ft,K),ft.return=W,W=ft;break t}a(W,B);break}else n(W,B);B=B.sibling}K.type===E?(ft=os(K.props.children,W.mode,ft,K.key),ft.return=W,W=ft):(ft=_l(K.type,K.key,K.props,null,W.mode,ft),mo(ft,K),ft.return=W,W=ft)}return M(W);case S:t:{for(Ft=K.key;B!==null;){if(B.key===Ft)if(B.tag===4&&B.stateNode.containerInfo===K.containerInfo&&B.stateNode.implementation===K.implementation){a(W,B.sibling),ft=u(B,K.children||[]),ft.return=W,W=ft;break t}else{a(W,B);break}else n(W,B);B=B.sibling}ft=Tu(K,W.mode,ft),ft.return=W,W=ft}return M(W);case Z:return Ft=K._init,K=Ft(K._payload),Fe(W,B,K,ft)}if(ht(K))return te(W,B,K,ft);if(lt(K)){if(Ft=lt(K),typeof Ft!="function")throw Error(s(150));return K=Ft.call(K),jt(W,B,K,ft)}if(typeof K.then=="function")return Fe(W,B,Nl(K),ft);if(K.$$typeof===N)return Fe(W,B,Sl(W,K),ft);Pl(W,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,B!==null&&B.tag===6?(a(W,B.sibling),ft=u(B,K),ft.return=W,W=ft):(a(W,B),ft=Eu(K,W.mode,ft),ft.return=W,W=ft),M(W)):a(W,B)}return function(W,B,K,ft){try{po=0;var Ft=Fe(W,B,K,ft);return Qs=null,Ft}catch(Gt){if(Gt===ao||Gt===yl)throw Gt;var me=Qn(29,Gt,null,W.mode);return me.lanes=ft,me.return=W,me}finally{}}}var Ks=Nm(!0),Pm=Nm(!1),hi=tt(null),Ni=null;function wa(e){var n=e.alternate;St(dn,dn.current&1),St(hi,e),Ni===null&&(n===null||qs.current!==null||n.memoizedState!==null)&&(Ni=e)}function Om(e){if(e.tag===22){if(St(dn,dn.current),St(hi,e),Ni===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ni=e)}}else Da()}function Da(){St(dn,dn.current),St(hi,hi.current)}function ta(e){vt(hi),Ni===e&&(Ni=null),vt(dn)}var dn=tt(0);function Ol(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Yf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function af(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var sf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ti(),u=Aa(o);u.payload=n,a!=null&&(u.callback=a),n=Ra(e,u,o),n!==null&&(ei(n,e,o),ro(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ti(),u=Aa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ra(e,u,o),n!==null&&(ei(n,e,o),ro(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ti(),o=Aa(a);o.tag=2,n!=null&&(o.callback=n),n=Ra(e,o,a),n!==null&&(ei(n,e,a),ro(n,e,a))}};function zm(e,n,a,o,u,h,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,M):n.prototype&&n.prototype.isPureReactComponent?!Qr(a,o)||!Qr(u,h):!0}function Im(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&sf.enqueueReplaceState(n,n.state,null)}function _s(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var zl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Fm(e){zl(e)}function Bm(e){console.error(e)}function Hm(e){zl(e)}function Il(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Gm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function rf(e,n,a){return a=Aa(a),a.tag=3,a.payload={element:null},a.callback=function(){Il(e,n)},a}function Vm(e){return e=Aa(e),e.tag=3,e}function km(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Gm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Gm(n,a,o),typeof u!="function"&&(za===null?za=new Set([this]):za.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Dx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&eo(n,a,u,!0),a=hi.current,a!==null){switch(a.tag){case 13:return Ni===null?Df():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Pu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Lf(e,o,u)),!1;case 22:return a.flags|=65536,o===Pu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Lf(e,o,u)),!1}throw Error(s(435,a.tag))}return Lf(e,o,u),Df(),!1}if(we)return n=hi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ru&&(e=Error(s(422),{cause:o}),to(li(e,a)))):(o!==Ru&&(n=Error(s(423),{cause:o}),to(li(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=li(o,a),u=rf(e.stateNode,o,u),Iu(e,u),$e!==4&&($e=2)),!1;var h=Error(s(520),{cause:o});if(h=li(h,a),yo===null?yo=[h]:yo.push(h),$e!==4&&($e=2),n===null)return!0;o=li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=rf(a.stateNode,o,e),Iu(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(za===null||!za.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Vm(u),km(u,e,a,o),Iu(a,u),!1}a=a.return}while(a!==null);return!1}var Xm=Error(s(461)),vn=!1;function Tn(e,n,a,o){n.child=e===null?Pm(n,null,a,o):Ks(n,e.child,a,o)}function Wm(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var M={};for(var T in o)T!=="ref"&&(M[T]=o[T])}else M=o;return ds(n),o=Vu(e,n,a,M,h,u),T=ku(),e!==null&&!vn?(Xu(e,n,u),ea(e,n,u)):(we&&T&&bu(n),n.flags|=1,Tn(e,n,o,u),n.child)}function qm(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!yu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Ym(e,n,h,o,u)):(e=_l(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!pf(e,u)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:Qr,a(M,o)&&e.ref===n.ref)return ea(e,n,u)}return n.flags|=1,e=ji(h,o),e.ref=n.ref,e.return=n,n.child=e}function Ym(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(Qr(h,o)&&e.ref===n.ref)if(vn=!1,n.pendingProps=o=h,pf(e,u))(e.flags&131072)!==0&&(vn=!0);else return n.lanes=e.lanes,ea(e,n,u)}return of(e,n,a,o,u)}function jm(e,n,a){var o=n.pendingProps,u=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,e!==null){for(u=n.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return Zm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ml(n,h!==null?h.cachePool:null),h!==null?Yp(n,h):Bu(),Om(n);else return n.lanes=n.childLanes=536870912,Zm(e,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(Ml(n,h.cachePool),Yp(n,h),Da(),n.memoizedState=null):(e!==null&&Ml(n,null),Bu(),Da());return Tn(e,n,u,a),n.child}function Zm(e,n,a,o){var u=Nu();return u=u===null?null:{parent:hn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&Ml(n,null),Bu(),Om(n),e!==null&&eo(e,n,o,!0),null}function Fl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function of(e,n,a,o,u){return ds(n),a=Vu(e,n,a,o,void 0,u),o=ku(),e!==null&&!vn?(Xu(e,n,u),ea(e,n,u)):(we&&o&&bu(n),n.flags|=1,Tn(e,n,a,u),n.child)}function Qm(e,n,a,o,u,h){return ds(n),n.updateQueue=null,a=Zp(n,o,a,u),jp(e),o=ku(),e!==null&&!vn?(Xu(e,n,h),ea(e,n,h)):(we&&o&&bu(n),n.flags|=1,Tn(e,n,a,h),n.child)}function Km(e,n,a,o,u){if(ds(n),n.stateNode===null){var h=Gs,M=a.contextType;typeof M=="object"&&M!==null&&(h=wn(M)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=sf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Ou(n),M=a.contextType,h.context=typeof M=="object"&&M!==null?wn(M):Gs,h.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(af(n,a,M,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&sf.enqueueReplaceState(h,h.state,null),lo(n,o,h,u),oo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var T=n.memoizedProps,P=_s(a,T);h.props=P;var $=h.context,ct=a.contextType;M=Gs,typeof ct=="object"&&ct!==null&&(M=wn(ct));var _t=a.getDerivedStateFromProps;ct=typeof _t=="function"||typeof h.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ct||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T||$!==M)&&Im(n,h,o,M),ba=!1;var nt=n.memoizedState;h.state=nt,lo(n,o,h,u),oo(),$=n.memoizedState,T||nt!==$||ba?(typeof _t=="function"&&(af(n,a,_t,o),$=n.memoizedState),(P=ba||zm(n,a,P,o,nt,$,M))?(ct||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),h.props=o,h.state=$,h.context=M,o=P):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,zu(e,n),M=n.memoizedProps,ct=_s(a,M),h.props=ct,_t=n.pendingProps,nt=h.context,$=a.contextType,P=Gs,typeof $=="object"&&$!==null&&(P=wn($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==_t||nt!==P)&&Im(n,h,o,P),ba=!1,nt=n.memoizedState,h.state=nt,lo(n,o,h,u),oo();var it=n.memoizedState;M!==_t||nt!==it||ba||e!==null&&e.dependencies!==null&&xl(e.dependencies)?(typeof T=="function"&&(af(n,a,T,o),it=n.memoizedState),(ct=ba||zm(n,a,ct,o,nt,it,P)||e!==null&&e.dependencies!==null&&xl(e.dependencies))?($||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,it,P),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,it,P)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=it),h.props=o,h.state=it,h.context=P,o=ct):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Fl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Ks(n,e.child,null,u),n.child=Ks(n,null,a,u)):Tn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=ea(e,n,u),e}function Jm(e,n,a,o){return $r(),n.flags|=256,Tn(e,n,a,o),n.child}var lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cf(e){return{baseLanes:e,cachePool:Bp()}}function uf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=di),e}function $m(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=e!==null&&e.memoizedState===null?!1:(dn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(u?wa(n):Da(),we){var T=Je,P;if(P=T){t:{for(P=T,T=Li;P.nodeType!==8;){if(!T){T=null;break t}if(P=yi(P.nextSibling),P===null){T=null;break t}}T=P}T!==null?(n.memoizedState={dehydrated:T,treeContext:ls!==null?{id:Zi,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},P=Qn(18,null,null,0),P.stateNode=T,P.return=n,n.child=P,On=n,Je=null,P=!0):P=!1}P||fs(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Yf(T)?n.lanes=32:n.lanes=536870912,null;ta(n)}return T=o.children,o=o.fallback,u?(Da(),u=n.mode,T=Bl({mode:"hidden",children:T},u),o=os(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,u=n.child,u.memoizedState=cf(a),u.childLanes=uf(e,M,a),n.memoizedState=lf,o):(wa(n),ff(n,T))}if(P=e.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(h)n.flags&256?(wa(n),n.flags&=-257,n=hf(e,n,a)):n.memoizedState!==null?(Da(),n.child=e.child,n.flags|=128,n=null):(Da(),u=o.fallback,T=n.mode,o=Bl({mode:"visible",children:o.children},T),u=os(u,T,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Ks(n,e.child,null,a),o=n.child,o.memoizedState=cf(a),o.childLanes=uf(e,M,a),n.memoizedState=lf,n=u);else if(wa(n),Yf(T)){if(M=T.nextSibling&&T.nextSibling.dataset,M)var $=M.dgst;M=$,o=Error(s(419)),o.stack="",o.digest=M,to({value:o,source:null,stack:null}),n=hf(e,n,a)}else if(vn||eo(e,n,a,!1),M=(a&e.childLanes)!==0,vn||M){if(M=qe,M!==null&&(o=a&-a,o=(o&42)!==0?1:Xe(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Hs(e,o),ei(M,e,o),Xm;T.data==="$?"||Df(),n=hf(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,Je=yi(T.nextSibling),On=n,we=!0,us=null,Li=!1,e!==null&&(ui[fi++]=Zi,ui[fi++]=Qi,ui[fi++]=ls,Zi=e.id,Qi=e.overflow,ls=n),n=ff(n,o.children),n.flags|=4096);return n}return u?(Da(),u=o.fallback,T=n.mode,P=e.child,$=P.sibling,o=ji(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,$!==null?u=ji($,u):(u=os(u,T,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,T=e.child.memoizedState,T===null?T=cf(a):(P=T.cachePool,P!==null?($=hn._currentValue,P=P.parent!==$?{parent:$,pool:$}:P):P=Bp(),T={baseLanes:T.baseLanes|a,cachePool:P}),u.memoizedState=T,u.childLanes=uf(e,M,a),n.memoizedState=lf,o):(wa(n),a=e.child,e=a.sibling,a=ji(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function ff(e,n){return n=Bl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Bl(e,n){return e=Qn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function hf(e,n,a){return Ks(n,e.child,null,a),e=ff(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function t_(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),wu(e.return,n,a)}function df(e,n,a,o,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function e_(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(Tn(e,n,o.children,a),o=dn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&t_(e,a,n);else if(e.tag===19)t_(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(St(dn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ol(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),df(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ol(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}df(n,!0,a,null,h);break;case"together":df(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ea(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Oa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(eo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ji(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ji(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function pf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&xl(e)))}function Ux(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),Ta(n,hn,e.memoizedState.cache),$r();break;case 27:case 5:Zt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:Ta(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(wa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?$m(e,n,a):(wa(n),e=ea(e,n,a),e!==null?e.sibling:null);wa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(eo(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return e_(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),St(dn,dn.current),o)break;return null;case 22:case 23:return n.lanes=0,jm(e,n,a);case 24:Ta(n,hn,e.memoizedState.cache)}return ea(e,n,a)}function n_(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!pf(e,a)&&(n.flags&128)===0)return vn=!1,Ux(e,n,a);vn=(e.flags&131072)!==0}else vn=!1,we&&(n.flags&1048576)!==0&&Lp(n,vl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")yu(o)?(e=_s(o,e),n.tag=1,n=Km(null,n,o,e,a)):(n.tag=0,n=of(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===D){n.tag=11,n=Wm(null,n,o,e,a);break t}else if(u===F){n.tag=14,n=qm(null,n,o,e,a);break t}}throw n=gt(o)||o,Error(s(306,n,""))}}return n;case 0:return of(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=_s(o,n.pendingProps),Km(e,n,o,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,zu(e,n),lo(n,o,null,a);var M=n.memoizedState;if(o=M.cache,Ta(n,hn,o),o!==h.cache&&Du(n,[hn],a,!0),oo(),o=M.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Jm(e,n,o,a);break t}else if(o!==u){u=li(Error(s(424)),n),to(u),n=Jm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=yi(e.firstChild),On=n,we=!0,us=null,Li=!0,a=Pm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if($r(),o===u){n=ea(e,n,a);break t}Tn(e,n,o,a)}n=n.child}return n;case 26:return Fl(e,n),e===null?(a=rg(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,o=$l(xt.current).createElement(a),o[un]=n,o[yn]=e,An(o,a,e),sn(o),n.stateNode=o):n.memoizedState=rg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Zt(n),e===null&&we&&(o=n.stateNode=ig(n.type,n.pendingProps,xt.current),On=n,Li=!0,u=Je,Ba(n.type)?(jf=u,Je=yi(o.firstChild)):Je=u),Tn(e,n,n.pendingProps.children,a),Fl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((u=o=Je)&&(o=sS(o,n.type,n.pendingProps,Li),o!==null?(n.stateNode=o,On=n,Je=yi(o.firstChild),Li=!1,u=!0):u=!1),u||fs(n)),Zt(n),u=n.type,h=n.pendingProps,M=e!==null?e.memoizedProps:null,o=h.children,Xf(u,h)?o=null:M!==null&&Xf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Vu(e,n,Ex,null,null,a),Uo._currentValue=u),Fl(e,n),Tn(e,n,o,a),n.child;case 6:return e===null&&we&&((e=a=Je)&&(a=rS(a,n.pendingProps,Li),a!==null?(n.stateNode=a,On=n,Je=null,e=!0):e=!1),e||fs(n)),null;case 13:return $m(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ks(n,null,o,a):Tn(e,n,o,a),n.child;case 11:return Wm(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ta(n,n.type,o.value),Tn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ds(n),u=wn(u),o=o(u),n.flags|=1,Tn(e,n,o,a),n.child;case 14:return qm(e,n,n.type,n.pendingProps,a);case 15:return Ym(e,n,n.type,n.pendingProps,a);case 19:return e_(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Bl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=ji(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return jm(e,n,a);case 24:return ds(n),o=wn(hn),e===null?(u=Nu(),u===null&&(u=qe,h=Uu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Ou(n),Ta(n,hn,u)):((e.lanes&a)!==0&&(zu(e,n),lo(n,null,null,a),oo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ta(n,hn,o)):(o=h.cache,Ta(n,hn,o),o!==u.cache&&Du(n,[hn],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function na(e){e.flags|=4}function i_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!fg(n)){if(n=hi.current,n!==null&&((Ee&4194048)===Ee?Ni!==null:(Ee&62914560)!==Ee&&(Ee&536870912)===0||n!==Ni))throw so=Pu,Hp;e.flags|=8192}}function Hl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ut():536870912,e.lanes|=n,er|=n)}function _o(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Lx(e,n,a){var o=n.pendingProps;switch(Au(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ji(hn),le(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Jr(n)?na(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Op())),Qe(n),null;case 26:return a=n.memoizedState,e===null?(na(n),a!==null?(Qe(n),i_(n,a)):(Qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(na(n),Qe(n),i_(n,a)):(Qe(n),n.flags&=-16777217):(e.memoizedProps!==o&&na(n),Qe(n),n.flags&=-16777217),null;case 27:ke(n),a=xt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}e=J.current,Jr(n)?Np(n):(e=ig(u,o,a),n.stateNode=e,na(n))}return Qe(n),null;case 5:if(ke(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}if(e=J.current,Jr(n))Np(n);else{switch(u=$l(xt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[un]=n,e[yn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(An(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&na(n)}}return Qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&na(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=xt.current,Jr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=On,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[un]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Q_(e.nodeValue,a)),e||fs(n)}else e=$l(e).createTextNode(o),e[un]=n,n.stateNode=e}return Qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Jr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[un]=n}else $r(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),u=!1}else u=Op(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ta(n),n):(ta(n),null)}if(ta(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Hl(n,n.updateQueue),Qe(n),null;case 4:return le(),e===null&&Bf(n.stateNode.containerInfo),Qe(n),null;case 10:return Ji(n.type),Qe(n),null;case 19:if(vt(dn),u=n.memoizedState,u===null)return Qe(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)_o(u,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Ol(e),h!==null){for(n.flags|=128,_o(u,!1),e=h.updateQueue,n.updateQueue=e,Hl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Up(a,e),a=a.sibling;return St(dn,dn.current&1|2),n.child}e=e.sibling}u.tail!==null&&ne()>kl&&(n.flags|=128,o=!0,_o(u,!1),n.lanes=4194304)}else{if(!o)if(e=Ol(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Hl(n,e),_o(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!we)return Qe(n),null}else 2*ne()-u.renderingStartTime>kl&&a!==536870912&&(n.flags|=128,o=!0,_o(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(e=u.last,e!==null?e.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=ne(),n.sibling=null,e=dn.current,St(dn,o?e&1|2:e&1),n):(Qe(n),null);case 22:case 23:return ta(n),Hu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&Hl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&vt(ps),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(hn),Qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Nx(e,n){switch(Au(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ji(hn),le(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ke(n),null;case 13:if(ta(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));$r()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(dn),null;case 4:return le(),null;case 10:return Ji(n.type),null;case 22:case 23:return ta(n),Hu(),e!==null&&vt(ps),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ji(hn),null;case 25:return null;default:return null}}function a_(e,n){switch(Au(n),n.tag){case 3:Ji(hn),le();break;case 26:case 27:case 5:ke(n);break;case 4:le();break;case 13:ta(n);break;case 19:vt(dn);break;case 10:Ji(n.type);break;case 22:case 23:ta(n),Hu(),e!==null&&vt(ps);break;case 24:Ji(hn)}}function go(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,M=a.inst;o=h(),M.destroy=o}a=a.next}while(a!==u)}}catch(T){Ve(n,n.return,T)}}function Ua(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var M=o.inst,T=M.destroy;if(T!==void 0){M.destroy=void 0,u=n;var P=a,$=T;try{$()}catch(ct){Ve(u,P,ct)}}}o=o.next}while(o!==h)}}catch(ct){Ve(n,n.return,ct)}}function s_(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{qp(n,a)}catch(o){Ve(e,e.return,o)}}}function r_(e,n,a){a.props=_s(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ve(e,n,o)}}function vo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ve(e,n,u)}}function Pi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ve(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ve(e,n,u)}else a.current=null}function o_(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ve(e,e.return,u)}}function mf(e,n,a){try{var o=e.stateNode;tS(o,e.type,a,n),o[yn]=n}catch(u){Ve(e,e.return,u)}}function l_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ba(e.type)||e.tag===4}function _f(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||l_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ba(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Jl));else if(o!==4&&(o===27&&Ba(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(gf(e,n,a),e=e.sibling;e!==null;)gf(e,n,a),e=e.sibling}function Gl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ba(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Gl(e,n,a),e=e.sibling;e!==null;)Gl(e,n,a),e=e.sibling}function c_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,o,a),n[un]=e,n[yn]=a}catch(h){Ve(e,e.return,h)}}var ia=!1,nn=!1,vf=!1,u_=typeof WeakSet=="function"?WeakSet:Set,xn=null;function Px(e,n){if(e=e.containerInfo,Vf=sc,e=Mp(e),mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var M=0,T=-1,P=-1,$=0,ct=0,_t=e,nt=null;e:for(;;){for(var it;_t!==a||u!==0&&_t.nodeType!==3||(T=M+u),_t!==h||o!==0&&_t.nodeType!==3||(P=M+o),_t.nodeType===3&&(M+=_t.nodeValue.length),(it=_t.firstChild)!==null;)nt=_t,_t=it;for(;;){if(_t===e)break e;if(nt===a&&++$===u&&(T=M),nt===h&&++ct===o&&(P=M),(it=_t.nextSibling)!==null)break;_t=nt,nt=_t.parentNode}_t=it}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(kf={focusedElem:e,selectionRange:a},sc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var te=_s(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(te,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(jt){Ve(a,a.return,jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)qf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function f_(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:La(e,a),o&4&&go(5,a);break;case 1:if(La(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Ve(a,a.return,M)}else{var u=_s(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Ve(a,a.return,M)}}o&64&&s_(a),o&512&&vo(a,a.return);break;case 3:if(La(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{qp(e,n)}catch(M){Ve(a,a.return,M)}}break;case 27:n===null&&o&4&&c_(a);case 26:case 5:La(e,a),n===null&&o&4&&o_(a),o&512&&vo(a,a.return);break;case 12:La(e,a);break;case 13:La(e,a),o&4&&p_(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=kx.bind(null,a),oS(e,a))));break;case 22:if(o=a.memoizedState!==null||ia,!o){n=n!==null&&n.memoizedState!==null||nn,u=ia;var h=nn;ia=o,(nn=n)&&!h?Na(e,a,(a.subtreeFlags&8772)!==0):La(e,a),ia=u,nn=h}break;case 30:break;default:La(e,a)}}function h_(e){var n=e.alternate;n!==null&&(e.alternate=null,h_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Sa(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,Xn=!1;function aa(e,n,a){for(a=a.child;a!==null;)d_(e,n,a),a=a.sibling}function d_(e,n,a){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:nn||Pi(a,n),aa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nn||Pi(a,n);var o=je,u=Xn;Ba(a.type)&&(je=a.stateNode,Xn=!1),aa(e,n,a),Ro(a.stateNode),je=o,Xn=u;break;case 5:nn||Pi(a,n);case 6:if(o=je,u=Xn,je=null,aa(e,n,a),je=o,Xn=u,je!==null)if(Xn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(h){Ve(a,n,h)}else try{je.removeChild(a.stateNode)}catch(h){Ve(a,n,h)}break;case 18:je!==null&&(Xn?(e=je,eg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Oo(e)):eg(je,a.stateNode));break;case 4:o=je,u=Xn,je=a.stateNode.containerInfo,Xn=!0,aa(e,n,a),je=o,Xn=u;break;case 0:case 11:case 14:case 15:nn||Ua(2,a,n),nn||Ua(4,a,n),aa(e,n,a);break;case 1:nn||(Pi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&r_(a,n,o)),aa(e,n,a);break;case 21:aa(e,n,a);break;case 22:nn=(o=nn)||a.memoizedState!==null,aa(e,n,a),nn=o;break;default:aa(e,n,a)}}function p_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Oo(e)}catch(a){Ve(n,n.return,a)}}function Ox(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new u_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new u_),n;default:throw Error(s(435,e.tag))}}function xf(e,n){var a=Ox(e);n.forEach(function(o){var u=Xx.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function Kn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,M=n,T=M;t:for(;T!==null;){switch(T.tag){case 27:if(Ba(T.type)){je=T.stateNode,Xn=!1;break t}break;case 5:je=T.stateNode,Xn=!1;break t;case 3:case 4:je=T.stateNode.containerInfo,Xn=!0;break t}T=T.return}if(je===null)throw Error(s(160));d_(h,M,u),je=null,Xn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)m_(n,e),n=n.sibling}var Mi=null;function m_(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Kn(n,e),Jn(e),o&4&&(Ua(3,e,e.return),go(3,e),Ua(5,e,e.return));break;case 1:Kn(n,e),Jn(e),o&512&&(nn||a===null||Pi(a,a.return)),o&64&&ia&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Mi;if(Kn(n,e),Jn(e),o&512&&(nn||a===null||Pi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[xa]||h[un]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),An(h,o,a),h[un]=e,sn(h),o=h;break t;case"link":var M=cg("link","href",u).get(o+(a.href||""));if(M){for(var T=0;T<M.length;T++)if(h=M[T],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(T,1);break e}}h=u.createElement(o),An(h,o,a),u.head.appendChild(h);break;case"meta":if(M=cg("meta","content",u).get(o+(a.content||""))){for(T=0;T<M.length;T++)if(h=M[T],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(T,1);break e}}h=u.createElement(o),An(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[un]=e,sn(h),o=h}e.stateNode=o}else ug(u,e.type,e.stateNode);else e.stateNode=lg(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?ug(u,e.type,e.stateNode):lg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&mf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Kn(n,e),Jn(e),o&512&&(nn||a===null||Pi(a,a.return)),a!==null&&o&4&&mf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Kn(n,e),Jn(e),o&512&&(nn||a===null||Pi(a,a.return)),e.flags&32){u=e.stateNode;try{Ui(u,"")}catch(it){Ve(e,e.return,it)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,mf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(vf=!0);break;case 6:if(Kn(n,e),Jn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(it){Ve(e,e.return,it)}}break;case 3:if(nc=null,u=Mi,Mi=tc(n.containerInfo),Kn(n,e),Mi=u,Jn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Oo(n.containerInfo)}catch(it){Ve(e,e.return,it)}vf&&(vf=!1,__(e));break;case 4:o=Mi,Mi=tc(e.stateNode.containerInfo),Kn(n,e),Jn(e),Mi=o;break;case 12:Kn(n,e),Jn(e);break;case 13:Kn(n,e),Jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(bf=ne()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,xf(e,o)));break;case 22:u=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,$=ia,ct=nn;if(ia=$||u,nn=ct||P,Kn(n,e),nn=ct,ia=$,Jn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||P||ia||nn||gs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(h=P.stateNode,u)M=h.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{T=P.stateNode;var _t=P.memoizedProps.style,nt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(it){Ve(P,P.return,it)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=u?"":P.memoizedProps}catch(it){Ve(P,P.return,it)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,xf(e,a))));break;case 19:Kn(n,e),Jn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,xf(e,o)));break;case 30:break;case 21:break;default:Kn(n,e),Jn(e)}}function Jn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(l_(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=_f(e);Gl(e,h,u);break;case 5:var M=a.stateNode;a.flags&32&&(Ui(M,""),a.flags&=-33);var T=_f(e);Gl(e,T,M);break;case 3:case 4:var P=a.stateNode.containerInfo,$=_f(e);gf(e,$,P);break;default:throw Error(s(161))}}catch(ct){Ve(e,e.return,ct)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function __(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;__(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function La(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)f_(e,n.alternate,n),n=n.sibling}function gs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ua(4,n,n.return),gs(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&r_(n,n.return,a),gs(n);break;case 27:Ro(n.stateNode);case 26:case 5:Pi(n,n.return),gs(n);break;case 22:n.memoizedState===null&&gs(n);break;case 30:gs(n);break;default:gs(n)}e=e.sibling}}function Na(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,M=h.flags;switch(h.tag){case 0:case 11:case 15:Na(u,h,a),go(4,h);break;case 1:if(Na(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Ve(o,o.return,$)}if(o=h,u=o.updateQueue,u!==null){var T=o.stateNode;try{var P=u.shared.hiddenCallbacks;if(P!==null)for(u.shared.hiddenCallbacks=null,u=0;u<P.length;u++)Wp(P[u],T)}catch($){Ve(o,o.return,$)}}a&&M&64&&s_(h),vo(h,h.return);break;case 27:c_(h);case 26:case 5:Na(u,h,a),a&&o===null&&M&4&&o_(h),vo(h,h.return);break;case 12:Na(u,h,a);break;case 13:Na(u,h,a),a&&M&4&&p_(u,h);break;case 22:h.memoizedState===null&&Na(u,h,a),vo(h,h.return);break;case 30:break;default:Na(u,h,a)}n=n.sibling}}function Sf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&no(a))}function Mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&no(e))}function Oi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)g_(e,n,a,o),n=n.sibling}function g_(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Oi(e,n,a,o),u&2048&&go(9,n);break;case 1:Oi(e,n,a,o);break;case 3:Oi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&no(e)));break;case 12:if(u&2048){Oi(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,M=h.id,T=h.onPostCommit;typeof T=="function"&&T(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Ve(n,n.return,P)}}else Oi(e,n,a,o);break;case 13:Oi(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,M=n.alternate,n.memoizedState!==null?h._visibility&2?Oi(e,n,a,o):xo(e,n):h._visibility&2?Oi(e,n,a,o):(h._visibility|=2,Js(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Sf(M,n);break;case 24:Oi(e,n,a,o),u&2048&&Mf(n.alternate,n);break;default:Oi(e,n,a,o)}}function Js(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,M=n,T=a,P=o,$=M.flags;switch(M.tag){case 0:case 11:case 15:Js(h,M,T,P,u),go(8,M);break;case 23:break;case 22:var ct=M.stateNode;M.memoizedState!==null?ct._visibility&2?Js(h,M,T,P,u):xo(h,M):(ct._visibility|=2,Js(h,M,T,P,u)),u&&$&2048&&Sf(M.alternate,M);break;case 24:Js(h,M,T,P,u),u&&$&2048&&Mf(M.alternate,M);break;default:Js(h,M,T,P,u)}n=n.sibling}}function xo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:xo(a,o),u&2048&&Sf(o.alternate,o);break;case 24:xo(a,o),u&2048&&Mf(o.alternate,o);break;default:xo(a,o)}n=n.sibling}}var So=8192;function $s(e){if(e.subtreeFlags&So)for(e=e.child;e!==null;)v_(e),e=e.sibling}function v_(e){switch(e.tag){case 26:$s(e),e.flags&So&&e.memoizedState!==null&&SS(Mi,e.memoizedState,e.memoizedProps);break;case 5:$s(e);break;case 3:case 4:var n=Mi;Mi=tc(e.stateNode.containerInfo),$s(e),Mi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=So,So=16777216,$s(e),So=n):$s(e));break;default:$s(e)}}function x_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,M_(o,e)}x_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)S_(e),e=e.sibling}function S_(e){switch(e.tag){case 0:case 11:case 15:Mo(e),e.flags&2048&&Ua(9,e,e.return);break;case 3:Mo(e);break;case 12:Mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Vl(e)):Mo(e);break;default:Mo(e)}}function Vl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,M_(o,e)}x_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ua(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}e=e.sibling}}function M_(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Ua(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:no(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var u=o.sibling,h=o.return;if(h_(o),o===a){xn=null;break t}if(u!==null){u.return=h,xn=u;break t}xn=h}}}var zx={getCacheForType:function(e){var n=wn(hn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Ix=typeof WeakMap=="function"?WeakMap:Map,De=0,qe=null,ge=null,Ee=0,Ue=0,$n=null,Pa=!1,tr=!1,yf=!1,sa=0,$e=0,Oa=0,vs=0,Ef=0,di=0,er=0,yo=null,Wn=null,Tf=!1,bf=0,kl=1/0,Xl=null,za=null,bn=0,Ia=null,nr=null,ir=0,Af=0,Rf=null,y_=null,Eo=0,Cf=null;function ti(){if((De&2)!==0&&Ee!==0)return Ee&-Ee;if(O.T!==null){var e=Xs;return e!==0?e:Of()}return Ae()}function E_(){di===0&&(di=(Ee&536870912)===0||we?k():536870912);var e=hi.current;return e!==null&&(e.flags|=32),di}function ei(e,n,a){(e===qe&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)&&(ar(e,0),Fa(e,Ee,di,!1)),mt(e,a),((De&2)===0||e!==qe)&&(e===qe&&((De&2)===0&&(vs|=a),$e===4&&Fa(e,Ee,di,!1)),zi(e))}function T_(e,n,a){if((De&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||ee(e,n),u=o?Hx(e,n):Uf(e,n,!0),h=o;do{if(u===0){tr&&!o&&Fa(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!Fx(a)){u=Uf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var T=e;u=yo;var P=T.current.memoizedState.isDehydrated;if(P&&(ar(T,M).flags|=256),M=Uf(T,M,!1),M!==2){if(yf&&!P){T.errorRecoveryDisabledLanes|=h,vs|=h,u=4;break t}h=Wn,Wn=u,h!==null&&(Wn===null?Wn=h:Wn.push.apply(Wn,h))}u=M}if(h=!1,u!==2)continue}}if(u===1){ar(e,0),Fa(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Fa(o,n,di,!Pa);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=bf+300-ne(),10<u)){if(Fa(o,n,di,!Pa),ue(o,0,!0)!==0)break t;o.timeoutHandle=$_(b_.bind(null,o,a,Wn,Xl,Tf,n,di,vs,er,Pa,h,2,-0,0),u);break t}b_(o,a,Wn,Xl,Tf,n,di,vs,er,Pa,h,0,-0,0)}}break}while(!0);zi(e)}function b_(e,n,a,o,u,h,M,T,P,$,ct,_t,nt,it){if(e.timeoutHandle=-1,_t=n.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(Do={stylesheets:null,count:0,unsuspend:xS},v_(n),_t=MS(),_t!==null)){e.cancelPendingCommit=_t(L_.bind(null,e,n,h,a,o,u,M,T,P,ct,1,nt,it)),Fa(e,h,M,!$);return}L_(e,n,h,a,o,u,M,T,P)}function Fx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Zn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fa(e,n,a,o){n&=~Ef,n&=~vs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Bt(u),M=1<<h;o[h]=-1,u&=~M}a!==0&&Lt(e,a,n)}function Wl(){return(De&6)===0?(To(0),!1):!0}function wf(){if(ge!==null){if(Ue===0)var e=ge.return;else e=ge,Ki=hs=null,Wu(e),Qs=null,po=0,e=ge;for(;e!==null;)a_(e.alternate,e),e=e.return;ge=null}}function ar(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,nS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),wf(),qe=e,ge=a=ji(e.current,null),Ee=n,Ue=0,$n=null,Pa=!1,tr=ee(e,n),yf=!1,er=di=Ef=vs=Oa=$e=0,Wn=yo=null,Tf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Bt(o),h=1<<u;n|=e[u],o&=~h}return sa=n,dl(),a}function A_(e,n){fe=null,O.H=Ll,n===ao||n===yl?(n=kp(),Ue=3):n===Hp?(n=kp(),Ue=4):Ue=n===Xm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,ge===null&&($e=1,Il(e,li(n,e.current)))}function R_(){var e=O.H;return O.H=Ll,e===null?Ll:e}function C_(){var e=O.A;return O.A=zx,e}function Df(){$e=4,Pa||(Ee&4194048)!==Ee&&hi.current!==null||(tr=!0),(Oa&134217727)===0&&(vs&134217727)===0||qe===null||Fa(qe,Ee,di,!1)}function Uf(e,n,a){var o=De;De|=2;var u=R_(),h=C_();(qe!==e||Ee!==n)&&(Xl=null,ar(e,n)),n=!1;var M=$e;t:do try{if(Ue!==0&&ge!==null){var T=ge,P=$n;switch(Ue){case 8:wf(),M=6;break t;case 3:case 2:case 9:case 6:hi.current===null&&(n=!0);var $=Ue;if(Ue=0,$n=null,sr(e,T,P,$),a&&tr){M=0;break t}break;default:$=Ue,Ue=0,$n=null,sr(e,T,P,$)}}Bx(),M=$e;break}catch(ct){A_(e,ct)}while(!0);return n&&e.shellSuspendCounter++,Ki=hs=null,De=o,O.H=u,O.A=h,ge===null&&(qe=null,Ee=0,dl()),M}function Bx(){for(;ge!==null;)w_(ge)}function Hx(e,n){var a=De;De|=2;var o=R_(),u=C_();qe!==e||Ee!==n?(Xl=null,kl=ne()+500,ar(e,n)):tr=ee(e,n);t:do try{if(Ue!==0&&ge!==null){n=ge;var h=$n;e:switch(Ue){case 1:Ue=0,$n=null,sr(e,n,h,1);break;case 2:case 9:if(Gp(h)){Ue=0,$n=null,D_(n);break}n=function(){Ue!==2&&Ue!==9||qe!==e||(Ue=7),zi(e)},h.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:Gp(h)?(Ue=0,$n=null,D_(n)):(Ue=0,$n=null,sr(e,n,h,7));break;case 5:var M=null;switch(ge.tag){case 26:M=ge.memoizedState;case 5:case 27:var T=ge;if(!M||fg(M)){Ue=0,$n=null;var P=T.sibling;if(P!==null)ge=P;else{var $=T.return;$!==null?(ge=$,ql($)):ge=null}break e}}Ue=0,$n=null,sr(e,n,h,5);break;case 6:Ue=0,$n=null,sr(e,n,h,6);break;case 8:wf(),$e=6;break t;default:throw Error(s(462))}}Gx();break}catch(ct){A_(e,ct)}while(!0);return Ki=hs=null,O.H=o,O.A=u,De=a,ge!==null?0:(qe=null,Ee=0,dl(),$e)}function Gx(){for(;ge!==null&&!Hn();)w_(ge)}function w_(e){var n=n_(e.alternate,e,sa);e.memoizedProps=e.pendingProps,n===null?ql(e):ge=n}function D_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Qm(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=Qm(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:Wu(n);default:a_(a,n),n=ge=Up(n,sa),n=n_(a,n,sa)}e.memoizedProps=e.pendingProps,n===null?ql(e):ge=n}function sr(e,n,a,o){Ki=hs=null,Wu(n),Qs=null,po=0;var u=n.return;try{if(Dx(e,u,n,a,Ee)){$e=1,Il(e,li(a,e.current)),ge=null;return}}catch(h){if(u!==null)throw ge=u,h;$e=1,Il(e,li(a,e.current)),ge=null;return}n.flags&32768?(we||o===1?e=!0:tr||(Ee&536870912)!==0?e=!1:(Pa=e=!0,(o===2||o===9||o===3||o===6)&&(o=hi.current,o!==null&&o.tag===13&&(o.flags|=16384))),U_(n,e)):ql(n)}function ql(e){var n=e;do{if((n.flags&32768)!==0){U_(n,Pa);return}e=n.return;var a=Lx(n.alternate,n,sa);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);$e===0&&($e=5)}function U_(e,n){do{var a=Nx(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);$e=6,ge=null}function L_(e,n,a,o,u,h,M,T,P){e.cancelPendingCommit=null;do Yl();while(bn!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Su,Ot(e,a,h,M,T,P),e===qe&&(ge=qe=null,Ee=0),nr=n,Ia=e,ir=a,Af=h,Rf=u,y_=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Wx(U,function(){return I_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=Q.p,Q.p=2,M=De,De|=4;try{Px(e,n,a)}finally{De=M,Q.p=u,O.T=o}}bn=1,N_(),P_(),O_()}}function N_(){if(bn===1){bn=0;var e=Ia,n=nr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=Q.p;Q.p=2;var u=De;De|=4;try{m_(n,e);var h=kf,M=Mp(e.containerInfo),T=h.focusedElem,P=h.selectionRange;if(M!==T&&T&&T.ownerDocument&&Sp(T.ownerDocument.documentElement,T)){if(P!==null&&mu(T)){var $=P.start,ct=P.end;if(ct===void 0&&(ct=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(ct,T.value.length);else{var _t=T.ownerDocument||document,nt=_t&&_t.defaultView||window;if(nt.getSelection){var it=nt.getSelection(),te=T.textContent.length,jt=Math.min(P.start,te),Fe=P.end===void 0?jt:Math.min(P.end,te);!it.extend&&jt>Fe&&(M=Fe,Fe=jt,jt=M);var W=xp(T,jt),B=xp(T,Fe);if(W&&B&&(it.rangeCount!==1||it.anchorNode!==W.node||it.anchorOffset!==W.offset||it.focusNode!==B.node||it.focusOffset!==B.offset)){var K=_t.createRange();K.setStart(W.node,W.offset),it.removeAllRanges(),jt>Fe?(it.addRange(K),it.extend(B.node,B.offset)):(K.setEnd(B.node,B.offset),it.addRange(K))}}}}for(_t=[],it=T;it=it.parentNode;)it.nodeType===1&&_t.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var ft=_t[T];ft.element.scrollLeft=ft.left,ft.element.scrollTop=ft.top}}sc=!!Vf,kf=Vf=null}finally{De=u,Q.p=o,O.T=a}}e.current=n,bn=2}}function P_(){if(bn===2){bn=0;var e=Ia,n=nr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=Q.p;Q.p=2;var u=De;De|=4;try{f_(e,n.alternate,n)}finally{De=u,Q.p=o,O.T=a}}bn=3}}function O_(){if(bn===4||bn===3){bn=0,Se();var e=Ia,n=nr,a=ir,o=y_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,nr=Ia=null,z_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(za=null),an(a),n=n.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=Q.p,Q.p=2,O.T=null;try{for(var h=e.onRecoverableError,M=0;M<o.length;M++){var T=o[M];h(T.value,{componentStack:T.stack})}}finally{O.T=n,Q.p=u}}(ir&3)!==0&&Yl(),zi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Cf?Eo++:(Eo=0,Cf=e):Eo=0,To(0)}}function z_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,no(n)))}function Yl(e){return N_(),P_(),O_(),I_()}function I_(){if(bn!==5)return!1;var e=Ia,n=Af;Af=0;var a=an(ir),o=O.T,u=Q.p;try{Q.p=32>a?32:a,O.T=null,a=Rf,Rf=null;var h=Ia,M=ir;if(bn=0,nr=Ia=null,ir=0,(De&6)!==0)throw Error(s(331));var T=De;if(De|=4,S_(h.current),g_(h,h.current,M,a),De=T,To(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(ut,h)}catch{}return!0}finally{Q.p=u,O.T=o,z_(e,n)}}function F_(e,n,a){n=li(a,n),n=rf(e.stateNode,n,2),e=Ra(e,n,2),e!==null&&(mt(e,2),zi(e))}function Ve(e,n,a){if(e.tag===3)F_(e,e,a);else for(;n!==null;){if(n.tag===3){F_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(za===null||!za.has(o))){e=li(a,e),a=Vm(2),o=Ra(n,a,2),o!==null&&(km(a,o,n,e),mt(o,2),zi(o));break}}n=n.return}}function Lf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Ix;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(yf=!0,u.add(a),e=Vx.bind(null,e,n,a),n.then(e,e))}function Vx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(Ee&a)===a&&($e===4||$e===3&&(Ee&62914560)===Ee&&300>ne()-bf?(De&2)===0&&ar(e,0):Ef|=a,er===Ee&&(er=0)),zi(e)}function B_(e,n){n===0&&(n=Ut()),e=Hs(e,n),e!==null&&(mt(e,n),zi(e))}function kx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),B_(e,a)}function Xx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),B_(e,a)}function Wx(e,n){return pe(e,n)}var jl=null,rr=null,Nf=!1,Zl=!1,Pf=!1,xs=0;function zi(e){e!==rr&&e.next===null&&(rr===null?jl=rr=e:rr=rr.next=e),Zl=!0,Nf||(Nf=!0,Yx())}function To(e,n){if(!Pf&&Zl){Pf=!0;do for(var a=!1,o=jl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var M=o.suspendedLanes,T=o.pingedLanes;h=(1<<31-Bt(42|e)+1)-1,h&=u&~(M&~T),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,k_(o,h))}else h=Ee,h=ue(o,o===qe?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||ee(o,h)||(a=!0,k_(o,h));o=o.next}while(a);Pf=!1}}function qx(){H_()}function H_(){Zl=Nf=!1;var e=0;xs!==0&&(eS()&&(e=xs),xs=0);for(var n=ne(),a=null,o=jl;o!==null;){var u=o.next,h=G_(o,n);h===0?(o.next=null,a===null?jl=u:a.next=u,u===null&&(rr=a)):(a=o,(e!==0||(h&3)!==0)&&(Zl=!0)),o=u}To(e)}function G_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var M=31-Bt(h),T=1<<M,P=u[M];P===-1?((T&a)===0||(T&o)!==0)&&(u[M]=Oe(T,n)):P<=n&&(e.expiredLanes|=T),h&=~T}if(n=qe,a=Ee,a=ue(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ue===2||Ue===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&I(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ee(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&I(o),an(a)){case 2:case 8:a=Ht;break;case 32:a=U;break;case 268435456:a=et;break;default:a=U}return o=V_.bind(null,e),a=pe(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&I(o),e.callbackPriority=2,e.callbackNode=null,2}function V_(e,n){if(bn!==0&&bn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Yl()&&e.callbackNode!==a)return null;var o=Ee;return o=ue(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(T_(e,o,n),G_(e,ne()),e.callbackNode!=null&&e.callbackNode===a?V_.bind(null,e):null)}function k_(e,n){if(Yl())return null;T_(e,n,!0)}function Yx(){iS(function(){(De&6)!==0?pe(Pe,qx):H_()})}function Of(){return xs===0&&(xs=k()),xs}function X_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:rl(""+e)}function W_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function jx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=X_((u[yn]||null).action),M=o.submitter;M&&(n=(n=M[yn]||null)?X_(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var T=new ul("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(xs!==0){var P=M?W_(u,M):new FormData(u);tf(a,{pending:!0,data:P,method:u.method,action:h},null,P)}}else typeof h=="function"&&(T.preventDefault(),P=M?W_(u,M):new FormData(u),tf(a,{pending:!0,data:P,method:u.method,action:h},h,P))},currentTarget:u}]})}}for(var zf=0;zf<xu.length;zf++){var If=xu[zf],Zx=If.toLowerCase(),Qx=If[0].toUpperCase()+If.slice(1);Si(Zx,"on"+Qx)}Si(Tp,"onAnimationEnd"),Si(bp,"onAnimationIteration"),Si(Ap,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(dx,"onTransitionRun"),Si(px,"onTransitionStart"),Si(mx,"onTransitionCancel"),Si(Rp,"onTransitionEnd"),A("onMouseEnter",["mouseout","mouseover"]),A("onMouseLeave",["mouseout","mouseover"]),A("onPointerEnter",["pointerout","pointerover"]),A("onPointerLeave",["pointerout","pointerover"]),Xi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bo));function q_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var M=o.length-1;0<=M;M--){var T=o[M],P=T.instance,$=T.currentTarget;if(T=T.listener,P!==h&&u.isPropagationStopped())break t;h=T,u.currentTarget=$;try{h(u)}catch(ct){zl(ct)}u.currentTarget=null,h=P}else for(M=0;M<o.length;M++){if(T=o[M],P=T.instance,$=T.currentTarget,T=T.listener,P!==h&&u.isPropagationStopped())break t;h=T,u.currentTarget=$;try{h(u)}catch(ct){zl(ct)}u.currentTarget=null,h=P}}}}function ve(e,n){var a=n[es];a===void 0&&(a=n[es]=new Set);var o=e+"__bubble";a.has(o)||(Y_(n,e,2,!1),a.add(o))}function Ff(e,n,a){var o=0;n&&(o|=4),Y_(a,e,o,n)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Bf(e){if(!e[Ql]){e[Ql]=!0,al.forEach(function(a){a!=="selectionchange"&&(Kx.has(a)||Ff(a,!1,e),Ff(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ql]||(n[Ql]=!0,Ff("selectionchange",!1,n))}}function Y_(e,n,a,o){switch(gg(n)){case 2:var u=TS;break;case 8:u=bS;break;default:u=$f}a=u.bind(null,n,a,e),u=void 0,!ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Hf(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var T=o.stateNode.containerInfo;if(T===u)break;if(M===4)for(M=o.return;M!==null;){var P=M.tag;if((P===3||P===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;T!==null;){if(M=Vi(T),M===null)return;if(P=M.tag,P===5||P===6||P===26||P===27){o=h=M;continue t}T=T.parentNode}}o=o.return}tp(function(){var $=h,ct=au(a),_t=[];t:{var nt=Cp.get(e);if(nt!==void 0){var it=ul,te=e;switch(e){case"keypress":if(ll(a)===0)break t;case"keydown":case"keyup":it=W0;break;case"focusin":te="focus",it=uu;break;case"focusout":te="blur",it=uu;break;case"beforeblur":case"afterblur":it=uu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=N0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=j0;break;case Tp:case bp:case Ap:it=z0;break;case Rp:it=Q0;break;case"scroll":case"scrollend":it=U0;break;case"wheel":it=J0;break;case"copy":case"cut":case"paste":it=F0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=sp;break;case"toggle":case"beforetoggle":it=tx}var jt=(n&4)!==0,Fe=!jt&&(e==="scroll"||e==="scrollend"),W=jt?nt!==null?nt+"Capture":null:nt;jt=[];for(var B=$,K;B!==null;){var ft=B;if(K=ft.stateNode,ft=ft.tag,ft!==5&&ft!==26&&ft!==27||K===null||W===null||(ft=kr(B,W),ft!=null&&jt.push(Ao(B,ft,K))),Fe)break;B=B.return}0<jt.length&&(nt=new it(nt,te,null,a,ct),_t.push({event:nt,listeners:jt}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",it=e==="mouseout"||e==="pointerout",nt&&a!==iu&&(te=a.relatedTarget||a.fromElement)&&(Vi(te)||te[Gn]))break t;if((it||nt)&&(nt=ct.window===ct?ct:(nt=ct.ownerDocument)?nt.defaultView||nt.parentWindow:window,it?(te=a.relatedTarget||a.toElement,it=$,te=te?Vi(te):null,te!==null&&(Fe=c(te),jt=te.tag,te!==Fe||jt!==5&&jt!==27&&jt!==6)&&(te=null)):(it=null,te=$),it!==te)){if(jt=ip,ft="onMouseLeave",W="onMouseEnter",B="mouse",(e==="pointerout"||e==="pointerover")&&(jt=sp,ft="onPointerLeave",W="onPointerEnter",B="pointer"),Fe=it==null?nt:is(it),K=te==null?nt:is(te),nt=new jt(ft,B+"leave",it,a,ct),nt.target=Fe,nt.relatedTarget=K,ft=null,Vi(ct)===$&&(jt=new jt(W,B+"enter",te,a,ct),jt.target=K,jt.relatedTarget=Fe,ft=jt),Fe=ft,it&&te)e:{for(jt=it,W=te,B=0,K=jt;K;K=or(K))B++;for(K=0,ft=W;ft;ft=or(ft))K++;for(;0<B-K;)jt=or(jt),B--;for(;0<K-B;)W=or(W),K--;for(;B--;){if(jt===W||W!==null&&jt===W.alternate)break e;jt=or(jt),W=or(W)}jt=null}else jt=null;it!==null&&j_(_t,nt,it,jt,!1),te!==null&&Fe!==null&&j_(_t,Fe,te,jt,!0)}}t:{if(nt=$?is($):window,it=nt.nodeName&&nt.nodeName.toLowerCase(),it==="select"||it==="input"&&nt.type==="file")var Ft=dp;else if(fp(nt))if(pp)Ft=ux;else{Ft=lx;var me=ox}else it=nt.nodeName,!it||it.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?$&&nu($.elementType)&&(Ft=dp):Ft=cx;if(Ft&&(Ft=Ft(e,$))){hp(_t,Ft,a,ct);break t}me&&me(e,nt,$),e==="focusout"&&$&&nt.type==="number"&&$.memoizedProps.value!=null&&Cn(nt,"number",nt.value)}switch(me=$?is($):window,e){case"focusin":(fp(me)||me.contentEditable==="true")&&(Is=me,_u=$,Kr=null);break;case"focusout":Kr=_u=Is=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,yp(_t,a,ct);break;case"selectionchange":if(hx)break;case"keydown":case"keyup":yp(_t,a,ct)}var Gt;if(hu)t:{switch(e){case"compositionstart":var Kt="onCompositionStart";break t;case"compositionend":Kt="onCompositionEnd";break t;case"compositionupdate":Kt="onCompositionUpdate";break t}Kt=void 0}else zs?cp(e,a)&&(Kt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Kt="onCompositionStart");Kt&&(rp&&a.locale!=="ko"&&(zs||Kt!=="onCompositionStart"?Kt==="onCompositionEnd"&&zs&&(Gt=ep()):(Ea=ct,ou="value"in Ea?Ea.value:Ea.textContent,zs=!0)),me=Kl($,Kt),0<me.length&&(Kt=new ap(Kt,e,null,a,ct),_t.push({event:Kt,listeners:me}),Gt?Kt.data=Gt:(Gt=up(a),Gt!==null&&(Kt.data=Gt)))),(Gt=nx?ix(e,a):ax(e,a))&&(Kt=Kl($,"onBeforeInput"),0<Kt.length&&(me=new ap("onBeforeInput","beforeinput",null,a,ct),_t.push({event:me,listeners:Kt}),me.data=Gt)),jx(_t,e,$,a,ct)}q_(_t,n)})}function Ao(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Kl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=kr(e,a),u!=null&&o.unshift(Ao(e,u,h)),u=kr(e,n),u!=null&&o.push(Ao(e,u,h))),e.tag===3)return o;e=e.return}return[]}function or(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function j_(e,n,a,o,u){for(var h=n._reactName,M=[];a!==null&&a!==o;){var T=a,P=T.alternate,$=T.stateNode;if(T=T.tag,P!==null&&P===o)break;T!==5&&T!==26&&T!==27||$===null||(P=$,u?($=kr(a,h),$!=null&&M.unshift(Ao(a,$,P))):u||($=kr(a,h),$!=null&&M.push(Ao(a,$,P)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var Jx=/\r\n?/g,$x=/\u0000|\uFFFD/g;function Z_(e){return(typeof e=="string"?e:""+e).replace(Jx,`
`).replace($x,"")}function Q_(e,n){return n=Z_(n),Z_(e)===n}function Jl(){}function Ie(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ui(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ui(e,""+o);break;case"className":Rt(e,"class",o);break;case"tabIndex":Rt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Rt(e,a,o);break;case"style":Jd(e,o,h);break;case"data":if(n!=="object"){Rt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=rl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ie(e,n,"name",u.name,u,null),Ie(e,n,"formEncType",u.formEncType,u,null),Ie(e,n,"formMethod",u.formMethod,u,null),Ie(e,n,"formTarget",u.formTarget,u,null)):(Ie(e,n,"encType",u.encType,u,null),Ie(e,n,"method",u.method,u,null),Ie(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=rl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Jl);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=rl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Et(e,"popover",o);break;case"xlinkActuate":Ct(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ct(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ct(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ct(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ct(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ct(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Et(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=w0.get(a)||a,Et(e,a,o))}}function Gf(e,n,a,o,u,h){switch(a){case"style":Jd(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ui(e,o):(typeof o=="number"||typeof o=="bigint")&&Ui(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Jl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[yn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Et(e,a,o)}}}function An(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(e,n,h,M,a,null)}}u&&Ie(e,n,"srcSet",a.srcSet,a,null),o&&Ie(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var T=h=M=u=null,P=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ct=a[o];if(ct!=null)switch(o){case"name":u=ct;break;case"type":M=ct;break;case"checked":P=ct;break;case"defaultChecked":$=ct;break;case"value":h=ct;break;case"defaultValue":T=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:Ie(e,n,o,ct,a,null)}}Ge(e,h,T,P,$,M,u,!1),Ke(e);return;case"select":ve("invalid",e),o=M=h=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":h=T;break;case"defaultValue":M=T;break;case"multiple":o=T;default:Ie(e,n,u,T,a,null)}n=h,a=M,e.multiple=!!o,n!=null?fn(e,!!o,n,!1):a!=null&&fn(e,!!o,a,!0);return;case"textarea":ve("invalid",e),h=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(T=a[M],T!=null))switch(M){case"value":o=T;break;case"defaultValue":u=T;break;case"children":h=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Ie(e,n,M,T,a,null)}En(e,o,u,h),Ke(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ie(e,n,P,o,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<bo.length;o++)ve(bo[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(e,n,$,o,a,null)}return;default:if(nu(n)){for(ct in a)a.hasOwnProperty(ct)&&(o=a[ct],o!==void 0&&Gf(e,n,ct,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Ie(e,n,T,o,a,null))}function tS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,M=null,T=null,P=null,$=null,ct=null;for(it in a){var _t=a[it];if(a.hasOwnProperty(it)&&_t!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":P=_t;default:o.hasOwnProperty(it)||Ie(e,n,it,null,o,_t)}}for(var nt in o){var it=o[nt];if(_t=a[nt],o.hasOwnProperty(nt)&&(it!=null||_t!=null))switch(nt){case"type":h=it;break;case"name":u=it;break;case"checked":$=it;break;case"defaultChecked":ct=it;break;case"value":M=it;break;case"defaultValue":T=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:it!==_t&&Ie(e,n,nt,it,o,_t)}}Wi(e,M,T,P,$,ct,h,u);return;case"select":it=M=T=nt=null;for(h in a)if(P=a[h],a.hasOwnProperty(h)&&P!=null)switch(h){case"value":break;case"multiple":it=P;default:o.hasOwnProperty(h)||Ie(e,n,h,null,o,P)}for(u in o)if(h=o[u],P=a[u],o.hasOwnProperty(u)&&(h!=null||P!=null))switch(u){case"value":nt=h;break;case"defaultValue":T=h;break;case"multiple":M=h;default:h!==P&&Ie(e,n,u,h,o,P)}n=T,a=M,o=it,nt!=null?fn(e,!!a,nt,!1):!!o!=!!a&&(n!=null?fn(e,!!a,n,!0):fn(e,!!a,a?[]:"",!1));return;case"textarea":it=nt=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ie(e,n,T,null,o,u)}for(M in o)if(u=o[M],h=a[M],o.hasOwnProperty(M)&&(u!=null||h!=null))switch(M){case"value":nt=u;break;case"defaultValue":it=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Ie(e,n,M,u,o,h)}gn(e,nt,it);return;case"option":for(var te in a)if(nt=a[te],a.hasOwnProperty(te)&&nt!=null&&!o.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:Ie(e,n,te,null,o,nt)}for(P in o)if(nt=o[P],it=a[P],o.hasOwnProperty(P)&&nt!==it&&(nt!=null||it!=null))switch(P){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Ie(e,n,P,nt,o,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in a)nt=a[jt],a.hasOwnProperty(jt)&&nt!=null&&!o.hasOwnProperty(jt)&&Ie(e,n,jt,null,o,nt);for($ in o)if(nt=o[$],it=a[$],o.hasOwnProperty($)&&nt!==it&&(nt!=null||it!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Ie(e,n,$,nt,o,it)}return;default:if(nu(n)){for(var Fe in a)nt=a[Fe],a.hasOwnProperty(Fe)&&nt!==void 0&&!o.hasOwnProperty(Fe)&&Gf(e,n,Fe,void 0,o,nt);for(ct in o)nt=o[ct],it=a[ct],!o.hasOwnProperty(ct)||nt===it||nt===void 0&&it===void 0||Gf(e,n,ct,nt,o,it);return}}for(var W in a)nt=a[W],a.hasOwnProperty(W)&&nt!=null&&!o.hasOwnProperty(W)&&Ie(e,n,W,null,o,nt);for(_t in o)nt=o[_t],it=a[_t],!o.hasOwnProperty(_t)||nt===it||nt==null&&it==null||Ie(e,n,_t,nt,o,it)}var Vf=null,kf=null;function $l(e){return e.nodeType===9?e:e.ownerDocument}function K_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function J_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Xf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wf=null;function eS(){var e=window.event;return e&&e.type==="popstate"?e===Wf?!1:(Wf=e,!0):(Wf=null,!1)}var $_=typeof setTimeout=="function"?setTimeout:void 0,nS=typeof clearTimeout=="function"?clearTimeout:void 0,tg=typeof Promise=="function"?Promise:void 0,iS=typeof queueMicrotask=="function"?queueMicrotask:typeof tg<"u"?function(e){return tg.resolve(null).then(e).catch(aS)}:$_;function aS(e){setTimeout(function(){throw e})}function Ba(e){return e==="head"}function eg(e,n){var a=n,o=0,u=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&Ro(M.documentElement),a&2&&Ro(M.body),a&4)for(a=M.head,Ro(a),M=a.firstChild;M;){var T=M.nextSibling,P=M.nodeName;M[xa]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=T}}if(u===0){e.removeChild(h),Oo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);Oo(n)}function qf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qf(a),Sa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function sS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[xa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=yi(e.nextSibling),e===null)break}return null}function rS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=yi(e.nextSibling),e===null))return null;return e}function Yf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function oS(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function yi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var jf=null;function ng(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function ig(e,n,a){switch(n=$l(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ro(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Sa(e)}var pi=new Map,ag=new Set;function tc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ra=Q.d;Q.d={f:lS,r:cS,D:uS,C:fS,L:hS,m:dS,X:mS,S:pS,M:_S};function lS(){var e=ra.f(),n=Wl();return e||n}function cS(e){var n=ki(e);n!==null&&n.tag===5&&n.type==="form"?Tm(n):ra.r(e)}var lr=typeof document>"u"?null:document;function sg(e,n,a){var o=lr;if(o&&typeof n=="string"&&n){var u=We(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),ag.has(u)||(ag.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),An(n,"link",e),sn(n),o.head.appendChild(n)))}}function uS(e){ra.D(e),sg("dns-prefetch",e,null)}function fS(e,n){ra.C(e,n),sg("preconnect",e,n)}function hS(e,n,a){ra.L(e,n,a);var o=lr;if(o&&e&&n){var u='link[rel="preload"][as="'+We(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+We(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+We(a.imageSizes)+'"]')):u+='[href="'+We(e)+'"]';var h=u;switch(n){case"style":h=cr(e);break;case"script":h=ur(e)}pi.has(h)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),pi.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Co(h))||n==="script"&&o.querySelector(wo(h))||(n=o.createElement("link"),An(n,"link",e),sn(n),o.head.appendChild(n)))}}function dS(e,n){ra.m(e,n);var a=lr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+We(o)+'"][href="'+We(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=ur(e)}if(!pi.has(h)&&(e=_({rel:"modulepreload",href:e},n),pi.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(h)))return}o=a.createElement("link"),An(o,"link",e),sn(o),a.head.appendChild(o)}}}function pS(e,n,a){ra.S(e,n,a);var o=lr;if(o&&e){var u=Ma(o).hoistableStyles,h=cr(e);n=n||"default";var M=u.get(h);if(!M){var T={loading:0,preload:null};if(M=o.querySelector(Co(h)))T.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=pi.get(h))&&Zf(e,a);var P=M=o.createElement("link");sn(P),An(P,"link",e),P._p=new Promise(function($,ct){P.onload=$,P.onerror=ct}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ec(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:T},u.set(h,M)}}}function mS(e,n){ra.X(e,n);var a=lr;if(a&&e){var o=Ma(a).hoistableScripts,u=ur(e),h=o.get(u);h||(h=a.querySelector(wo(u)),h||(e=_({src:e,async:!0},n),(n=pi.get(u))&&Qf(e,n),h=a.createElement("script"),sn(h),An(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function _S(e,n){ra.M(e,n);var a=lr;if(a&&e){var o=Ma(a).hoistableScripts,u=ur(e),h=o.get(u);h||(h=a.querySelector(wo(u)),h||(e=_({src:e,async:!0,type:"module"},n),(n=pi.get(u))&&Qf(e,n),h=a.createElement("script"),sn(h),An(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function rg(e,n,a,o){var u=(u=xt.current)?tc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=cr(a.href),a=Ma(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=cr(a.href);var h=Ma(u).hoistableStyles,M=h.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,M),(h=u.querySelector(Co(e)))&&!h._p&&(M.instance=h,M.state.loading=5),pi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(e,a),h||gS(u,e,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ur(a),a=Ma(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function cr(e){return'href="'+We(e)+'"'}function Co(e){return'link[rel="stylesheet"]['+e+"]"}function og(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function gS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),An(n,"link",a),sn(n),e.head.appendChild(n))}function ur(e){return'[src="'+We(e)+'"]'}function wo(e){return"script[async]"+e}function lg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+We(a.href)+'"]');if(o)return n.instance=o,sn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),sn(o),An(o,"style",u),ec(o,a.precedence,e),n.instance=o;case"stylesheet":u=cr(a.href);var h=e.querySelector(Co(u));if(h)return n.state.loading|=4,n.instance=h,sn(h),h;o=og(a),(u=pi.get(u))&&Zf(o,u),h=(e.ownerDocument||e).createElement("link"),sn(h);var M=h;return M._p=new Promise(function(T,P){M.onload=T,M.onerror=P}),An(h,"link",o),n.state.loading|=4,ec(h,a.precedence,e),n.instance=h;case"script":return h=ur(a.src),(u=e.querySelector(wo(h)))?(n.instance=u,sn(u),u):(o=a,(u=pi.get(h))&&(o=_({},a),Qf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),sn(u),An(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ec(o,a.precedence,e));return n.instance}function ec(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,M=0;M<o.length;M++){var T=o[M];if(T.dataset.precedence===n)h=T;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Zf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var nc=null;function cg(e,n,a){if(nc===null){var o=new Map,u=nc=new Map;u.set(a,o)}else u=nc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[xa]||h[un]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=e+M;var T=o.get(M);T?T.push(h):o.set(M,[h])}}return o}function ug(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function vS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function fg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Do=null;function xS(){}function SS(e,n,a){if(Do===null)throw Error(s(475));var o=Do;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=cr(a.href),h=e.querySelector(Co(u));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=ic.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,sn(h);return}h=e.ownerDocument||e,a=og(a),(u=pi.get(u))&&Zf(a,u),h=h.createElement("link"),sn(h);var M=h;M._p=new Promise(function(T,P){M.onload=T,M.onerror=P}),An(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=ic.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function MS(){if(Do===null)throw Error(s(475));var e=Do;return e.stylesheets&&e.count===0&&Kf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Kf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function ic(){if(this.count--,this.count===0){if(this.stylesheets)Kf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ac=null;function Kf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ac=new Map,n.forEach(yS,e),ac=null,ic.call(e))}function yS(e,n){if(!(n.state.loading&4)){var a=ac.get(e);if(a)var o=a.get(null);else{a=new Map,ac.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var M=u[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),h=a.get(M)||o,h===o&&a.set(null,u),a.set(M,u),this.count++,o=ic.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Uo={$$typeof:N,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function ES(e,n,a,o,u,h,M,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function hg(e,n,a,o,u,h,M,T,P,$,ct,_t){return e=new ES(e,n,a,M,T,P,$,_t),n=1,h===!0&&(n|=24),h=Qn(3,null,null,n),e.current=h,h.stateNode=e,n=Uu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Ou(h),e}function dg(e){return e?(e=Gs,e):Gs}function pg(e,n,a,o,u,h){u=dg(u),o.context===null?o.context=u:o.pendingContext=u,o=Aa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ra(e,o,n),a!==null&&(ei(a,e,n),ro(a,e,n))}function mg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Jf(e,n){mg(e,n),(e=e.alternate)&&mg(e,n)}function _g(e){if(e.tag===13){var n=Hs(e,67108864);n!==null&&ei(n,e,67108864),Jf(e,67108864)}}var sc=!0;function TS(e,n,a,o){var u=O.T;O.T=null;var h=Q.p;try{Q.p=2,$f(e,n,a,o)}finally{Q.p=h,O.T=u}}function bS(e,n,a,o){var u=O.T;O.T=null;var h=Q.p;try{Q.p=8,$f(e,n,a,o)}finally{Q.p=h,O.T=u}}function $f(e,n,a,o){if(sc){var u=th(o);if(u===null)Hf(e,n,o,rc,a),vg(e,o);else if(RS(u,e,n,a,o))o.stopPropagation();else if(vg(e,o),n&4&&-1<AS.indexOf(e)){for(;u!==null;){var h=ki(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=Pt(h.pendingLanes);if(M!==0){var T=h;for(T.pendingLanes|=2,T.entangledLanes|=2;M;){var P=1<<31-Bt(M);T.entanglements[1]|=P,M&=~P}zi(h),(De&6)===0&&(kl=ne()+500,To(0))}}break;case 13:T=Hs(h,2),T!==null&&ei(T,h,2),Wl(),Jf(h,2)}if(h=th(o),h===null&&Hf(e,n,o,rc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Hf(e,n,o,null,a)}}function th(e){return e=au(e),eh(e)}var rc=null;function eh(e){if(rc=null,e=Vi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return rc=e,null}function gg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kt()){case Pe:return 2;case Ht:return 8;case U:case b:return 32;case et:return 268435456;default:return 32}default:return 32}}var nh=!1,Ha=null,Ga=null,Va=null,Lo=new Map,No=new Map,ka=[],AS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vg(e,n){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(n.pointerId)}}function Po(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=ki(n),n!==null&&_g(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function RS(e,n,a,o,u){switch(n){case"focusin":return Ha=Po(Ha,e,n,a,o,u),!0;case"dragenter":return Ga=Po(Ga,e,n,a,o,u),!0;case"mouseover":return Va=Po(Va,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Lo.set(h,Po(Lo.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,No.set(h,Po(No.get(h)||null,e,n,a,o,u)),!0}return!1}function xg(e){var n=Vi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,jn(e.priority,function(){if(a.tag===13){var o=ti();o=Xe(o);var u=Hs(a,o);u!==null&&ei(u,a,o),Jf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=th(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);iu=o,a.target.dispatchEvent(o),iu=null}else return n=ki(a),n!==null&&_g(n),e.blockedOn=a,!1;n.shift()}return!0}function Sg(e,n,a){oc(e)&&a.delete(n)}function CS(){nh=!1,Ha!==null&&oc(Ha)&&(Ha=null),Ga!==null&&oc(Ga)&&(Ga=null),Va!==null&&oc(Va)&&(Va=null),Lo.forEach(Sg),No.forEach(Sg)}function lc(e,n){e.blockedOn===n&&(e.blockedOn=null,nh||(nh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,CS)))}var cc=null;function Mg(e){cc!==e&&(cc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){cc===e&&(cc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(eh(o||a)===null)continue;break}var h=ki(a);h!==null&&(e.splice(n,3),n-=3,tf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Oo(e){function n(P){return lc(P,e)}Ha!==null&&lc(Ha,e),Ga!==null&&lc(Ga,e),Va!==null&&lc(Va,e),Lo.forEach(n),No.forEach(n);for(var a=0;a<ka.length;a++){var o=ka[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ka.length&&(a=ka[0],a.blockedOn===null);)xg(a),a.blockedOn===null&&ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],M=u[yn]||null;if(typeof h=="function")M||Mg(a);else if(M){var T=null;if(h&&h.hasAttribute("formAction")){if(u=h,M=h[yn]||null)T=M.formAction;else if(eh(u)!==null)continue}else T=M.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),Mg(a)}}}function ih(e){this._internalRoot=e}uc.prototype.render=ih.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ti();pg(a,o,e,n,null,null)},uc.prototype.unmount=ih.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;pg(e.current,2,null,e,null,null),Wl(),n[Gn]=null}};function uc(e){this._internalRoot=e}uc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ae();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ka.length&&n!==0&&n<ka[a].priority;a++);ka.splice(a,0,e),a===0&&xg(e)}};var yg=t.version;if(yg!=="19.1.0")throw Error(s(527,yg,"19.1.0"));Q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var wS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fc.isDisabled&&fc.supportsFiber)try{ut=fc.inject(wS),Nt=fc}catch{}}return ko.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Fm,h=Bm,M=Hm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=hg(e,1,!1,null,null,a,o,u,h,M,T,null),e[Gn]=n.current,Bf(e),new ih(n)},ko.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=Fm,M=Bm,T=Hm,P=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=hg(e,1,!0,n,a??null,o,u,h,M,T,P,$),n.context=dg(null),a=n.current,o=ti(),o=Xe(o),u=Aa(o),u.callback=null,Ra(a,u,o),a=o,n.current.lanes=a,mt(n,a),zi(n),e[Gn]=n.current,Bf(e),new uc(n)},ko.version="19.1.0",ko}var Fv;function l1(){if(Fv)return Ih.exports;Fv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ih.exports=o1(),Ih.exports}l1();const c1={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Gr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const u1=new M0(-1,1,1,-1,0,1);class f1 extends Bn{constructor(){super(),this.setAttribute("position",new Pn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Pn([0,2,0,0,2,0],2))}}const h1=new f1;class Yd{constructor(t){this._mesh=new vi(h1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,u1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class d1 extends Gr{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof xi?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Jc.clone(t.uniforms),this.material=new xi({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Yd(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Bv extends Gr{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let f,d;this.inverse?(f=0,d=1):(f=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class p1 extends Gr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class m1{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new xe);this._width=s.width,this._height=s.height,i=new ts(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Or}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new d1(c1),this.copyPass.material.blending=_a,this.clock=new _y}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const f=this.passes[l];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),f.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),f.needsSwap){if(s){const d=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),p.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}Bv!==void 0&&(f instanceof Bv?s=!0:f instanceof p1&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const Gh={uniforms:{tDiffuse:{value:null},shape:{value:1},radius:{value:4},rotateR:{value:Math.PI/12*1},rotateG:{value:Math.PI/12*2},rotateB:{value:Math.PI/12*3},scatter:{value:0},width:{value:1},height:{value:1},blending:{value:1},blendingMode:{value:1},greyscale:{value:!1},disable:{value:!1}},vertexShader:`

		varying vec2 vUV;

		void main() {

			vUV = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

		}`,fragmentShader:`

		#define SQRT2_MINUS_ONE 0.41421356
		#define SQRT2_HALF_MINUS_ONE 0.20710678
		#define PI2 6.28318531
		#define SHAPE_DOT 1
		#define SHAPE_ELLIPSE 2
		#define SHAPE_LINE 3
		#define SHAPE_SQUARE 4
		#define BLENDING_LINEAR 1
		#define BLENDING_MULTIPLY 2
		#define BLENDING_ADD 3
		#define BLENDING_LIGHTER 4
		#define BLENDING_DARKER 5
		uniform sampler2D tDiffuse;
		uniform float radius;
		uniform float rotateR;
		uniform float rotateG;
		uniform float rotateB;
		uniform float scatter;
		uniform float width;
		uniform float height;
		uniform int shape;
		uniform bool disable;
		uniform float blending;
		uniform int blendingMode;
		varying vec2 vUV;
		uniform bool greyscale;
		const int samples = 8;

		float blend( float a, float b, float t ) {

		// linear blend
			return a * ( 1.0 - t ) + b * t;

		}

		float hypot( float x, float y ) {

		// vector magnitude
			return sqrt( x * x + y * y );

		}

		float rand( vec2 seed ){

		// get pseudo-random number
			return fract( sin( dot( seed.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );

		}

		float distanceToDotRadius( float channel, vec2 coord, vec2 normal, vec2 p, float angle, float rad_max ) {

		// apply shape-specific transforms
			float dist = hypot( coord.x - p.x, coord.y - p.y );
			float rad = channel;

			if ( shape == SHAPE_DOT ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

			} else if ( shape == SHAPE_ELLIPSE ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

				if ( dist != 0.0 ) {
					float dot_p = abs( ( p.x - coord.x ) / dist * normal.x + ( p.y - coord.y ) / dist * normal.y );
					dist = ( dist * ( 1.0 - SQRT2_HALF_MINUS_ONE ) ) + dot_p * dist * SQRT2_MINUS_ONE;
				}

			} else if ( shape == SHAPE_LINE ) {

				rad = pow( abs( rad ), 1.5) * rad_max;
				float dot_p = ( p.x - coord.x ) * normal.x + ( p.y - coord.y ) * normal.y;
				dist = hypot( normal.x * dot_p, normal.y * dot_p );

			} else if ( shape == SHAPE_SQUARE ) {

				float theta = atan( p.y - coord.y, p.x - coord.x ) - angle;
				float sin_t = abs( sin( theta ) );
				float cos_t = abs( cos( theta ) );
				rad = pow( abs( rad ), 1.4 );
				rad = rad_max * ( rad + ( ( sin_t > cos_t ) ? rad - sin_t * rad : rad - cos_t * rad ) );

			}

			return rad - dist;

		}

		struct Cell {

		// grid sample positions
			vec2 normal;
			vec2 p1;
			vec2 p2;
			vec2 p3;
			vec2 p4;
			float samp2;
			float samp1;
			float samp3;
			float samp4;

		};

		vec4 getSample( vec2 point ) {

		// multi-sampled point
			vec4 tex = texture2D( tDiffuse, vec2( point.x / width, point.y / height ) );
			float base = rand( vec2( floor( point.x ), floor( point.y ) ) ) * PI2;
			float step = PI2 / float( samples );
			float dist = radius * 0.66;

			for ( int i = 0; i < samples; ++i ) {

				float r = base + step * float( i );
				vec2 coord = point + vec2( cos( r ) * dist, sin( r ) * dist );
				tex += texture2D( tDiffuse, vec2( coord.x / width, coord.y / height ) );

			}

			tex /= float( samples ) + 1.0;
			return tex;

		}

		float getDotColour( Cell c, vec2 p, int channel, float angle, float aa ) {

		// get colour for given point
			float dist_c_1, dist_c_2, dist_c_3, dist_c_4, res;

			if ( channel == 0 ) {

				c.samp1 = getSample( c.p1 ).r;
				c.samp2 = getSample( c.p2 ).r;
				c.samp3 = getSample( c.p3 ).r;
				c.samp4 = getSample( c.p4 ).r;

			} else if (channel == 1) {

				c.samp1 = getSample( c.p1 ).g;
				c.samp2 = getSample( c.p2 ).g;
				c.samp3 = getSample( c.p3 ).g;
				c.samp4 = getSample( c.p4 ).g;

			} else {

				c.samp1 = getSample( c.p1 ).b;
				c.samp3 = getSample( c.p3 ).b;
				c.samp2 = getSample( c.p2 ).b;
				c.samp4 = getSample( c.p4 ).b;

			}

			dist_c_1 = distanceToDotRadius( c.samp1, c.p1, c.normal, p, angle, radius );
			dist_c_2 = distanceToDotRadius( c.samp2, c.p2, c.normal, p, angle, radius );
			dist_c_3 = distanceToDotRadius( c.samp3, c.p3, c.normal, p, angle, radius );
			dist_c_4 = distanceToDotRadius( c.samp4, c.p4, c.normal, p, angle, radius );
			res = ( dist_c_1 > 0.0 ) ? clamp( dist_c_1 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_2 > 0.0 ) ? clamp( dist_c_2 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_3 > 0.0 ) ? clamp( dist_c_3 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_4 > 0.0 ) ? clamp( dist_c_4 / aa, 0.0, 1.0 ) : 0.0;
			res = clamp( res, 0.0, 1.0 );

			return res;

		}

		Cell getReferenceCell( vec2 p, vec2 origin, float grid_angle, float step ) {

		// get containing cell
			Cell c;

		// calc grid
			vec2 n = vec2( cos( grid_angle ), sin( grid_angle ) );
			float threshold = step * 0.5;
			float dot_normal = n.x * ( p.x - origin.x ) + n.y * ( p.y - origin.y );
			float dot_line = -n.y * ( p.x - origin.x ) + n.x * ( p.y - origin.y );
			vec2 offset = vec2( n.x * dot_normal, n.y * dot_normal );
			float offset_normal = mod( hypot( offset.x, offset.y ), step );
			float normal_dir = ( dot_normal < 0.0 ) ? 1.0 : -1.0;
			float normal_scale = ( ( offset_normal < threshold ) ? -offset_normal : step - offset_normal ) * normal_dir;
			float offset_line = mod( hypot( ( p.x - offset.x ) - origin.x, ( p.y - offset.y ) - origin.y ), step );
			float line_dir = ( dot_line < 0.0 ) ? 1.0 : -1.0;
			float line_scale = ( ( offset_line < threshold ) ? -offset_line : step - offset_line ) * line_dir;

		// get closest corner
			c.normal = n;
			c.p1.x = p.x - n.x * normal_scale + n.y * line_scale;
			c.p1.y = p.y - n.y * normal_scale - n.x * line_scale;

		// scatter
			if ( scatter != 0.0 ) {

				float off_mag = scatter * threshold * 0.5;
				float off_angle = rand( vec2( floor( c.p1.x ), floor( c.p1.y ) ) ) * PI2;
				c.p1.x += cos( off_angle ) * off_mag;
				c.p1.y += sin( off_angle ) * off_mag;

			}

		// find corners
			float normal_step = normal_dir * ( ( offset_normal < threshold ) ? step : -step );
			float line_step = line_dir * ( ( offset_line < threshold ) ? step : -step );
			c.p2.x = c.p1.x - n.x * normal_step;
			c.p2.y = c.p1.y - n.y * normal_step;
			c.p3.x = c.p1.x + n.y * line_step;
			c.p3.y = c.p1.y - n.x * line_step;
			c.p4.x = c.p1.x - n.x * normal_step + n.y * line_step;
			c.p4.y = c.p1.y - n.y * normal_step - n.x * line_step;

			return c;

		}

		float blendColour( float a, float b, float t ) {

		// blend colours
			if ( blendingMode == BLENDING_LINEAR ) {
				return blend( a, b, 1.0 - t );
			} else if ( blendingMode == BLENDING_ADD ) {
				return blend( a, min( 1.0, a + b ), t );
			} else if ( blendingMode == BLENDING_MULTIPLY ) {
				return blend( a, max( 0.0, a * b ), t );
			} else if ( blendingMode == BLENDING_LIGHTER ) {
				return blend( a, max( a, b ), t );
			} else if ( blendingMode == BLENDING_DARKER ) {
				return blend( a, min( a, b ), t );
			} else {
				return blend( a, b, 1.0 - t );
			}

		}

		void main() {

			if ( ! disable ) {

		// setup
				vec2 p = vec2( vUV.x * width, vUV.y * height );
				vec2 origin = vec2( 0, 0 );
				float aa = ( radius < 2.5 ) ? radius * 0.5 : 1.25;

		// get channel samples
				Cell cell_r = getReferenceCell( p, origin, rotateR, radius );
				Cell cell_g = getReferenceCell( p, origin, rotateG, radius );
				Cell cell_b = getReferenceCell( p, origin, rotateB, radius );
				float r = getDotColour( cell_r, p, 0, rotateR, aa );
				float g = getDotColour( cell_g, p, 1, rotateG, aa );
				float b = getDotColour( cell_b, p, 2, rotateB, aa );

		// blend with original
				vec4 colour = texture2D( tDiffuse, vUV );
				r = blendColour( r, colour.r, blending );
				g = blendColour( g, colour.g, blending );
				b = blendColour( b, colour.b, blending );

				if ( greyscale ) {
					r = g = b = (r + b + g) / 3.0;
				}

				gl_FragColor = vec4( r, g, b, 1.0 );

			} else {

				gl_FragColor = texture2D( tDiffuse, vUV );

			}

		}`};class _1 extends Gr{constructor(t){super(),this.uniforms=Jc.clone(Gh.uniforms),this.material=new xi({uniforms:this.uniforms,fragmentShader:Gh.fragmentShader,vertexShader:Gh.vertexShader});for(const i in t)t.hasOwnProperty(i)&&this.uniforms.hasOwnProperty(i)&&(this.uniforms[i].value=t[i]);this._fsQuad=new Yd(this.material)}render(t,i,s){this.material.uniforms.tDiffuse.value=s.texture,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(),this._fsQuad.render(t))}setSize(t,i){this.uniforms.width.value=t,this.uniforms.height.value=i}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class g1 extends Gr{constructor(t,i,s=null,l=null,c=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new de}render(t,i,s){const l=t.autoClear;t.autoClear=!1;let c,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),t.autoClear=l}}const Oc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class v1 extends Gr{constructor(){super(),this.uniforms=Jc.clone(Oc.uniforms),this.material=new ly({name:Oc.name,uniforms:this.uniforms,vertexShader:Oc.vertexShader,fragmentShader:Oc.fragmentShader}),this._fsQuad=new Yd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},be.getTransfer(this._outputColorSpace)===Le&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===qv?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Yv?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jv?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Zv?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Kv?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Jv?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Qv&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Xt={IDLE:Symbol(),ROTATE:Symbol(),PAN:Symbol(),SCALE:Symbol(),FOV:Symbol(),FOCUS:Symbol(),ZROTATE:Symbol(),ANIMATION_FOCUS:Symbol(),ANIMATION_ROTATE:Symbol()},Ne={NONE:Symbol(),ONE_FINGER:Symbol(),ONE_FINGER_SWITCHED:Symbol(),TWO_FINGER:Symbol(),MULT_FINGER:Symbol(),CURSOR:Symbol()},ae={x:0,y:0},ai={camera:new oe,gizmos:new oe},Ye={type:"change"},Ri={type:"start"},_i={type:"end"},x1=new gy,cn=new X,Hv=new oe,Gv=new oe,Ai=new X,zc=1e-6;class S1 extends xy{constructor(t,i=null,s=null){super(t,i),this.scene=s,this.target=new X,this._currentTarget=new X,this.radiusFactor=.67,this.mouseActions=[],this._mouseOp=null,this._v2_1=new xe,this._v3_1=new X,this._v3_2=new X,this._m4_1=new oe,this._m4_2=new oe,this._quat=new Ir,this._translationMatrix=new oe,this._rotationMatrix=new oe,this._scaleMatrix=new oe,this._rotationAxis=new X,this._cameraMatrixState=new oe,this._cameraProjectionState=new oe,this._fovState=1,this._upState=new X,this._zoomState=1,this._nearPos=0,this._farPos=0,this._gizmoMatrixState=new oe,this._up0=new X,this._zoom0=1,this._fov0=0,this._initialNear=0,this._nearPos0=0,this._initialFar=0,this._farPos0=0,this._cameraMatrixState0=new oe,this._gizmoMatrixState0=new oe,this._button=-1,this._touchStart=[],this._touchCurrent=[],this._input=Ne.NONE,this._switchSensibility=32,this._startFingerDistance=0,this._currentFingerDistance=0,this._startFingerRotation=0,this._currentFingerRotation=0,this._devPxRatio=0,this._downValid=!0,this._nclicks=0,this._downEvents=[],this._downStart=0,this._clickStart=0,this._maxDownTime=250,this._maxInterval=300,this._posThreshold=24,this._movementThreshold=24,this._currentCursorPosition=new X,this._startCursorPosition=new X,this._grid=null,this._gridPosition=new X,this._gizmos=new Xo,this._curvePts=128,this._timeStart=-1,this._animationId=-1,this.focusAnimationTime=500,this._timePrev=0,this._timeCurrent=0,this._anglePrev=0,this._angleCurrent=0,this._cursorPosPrev=new X,this._cursorPosCurr=new X,this._wPrev=0,this._wCurr=0,this.adjustNearFar=!1,this.scaleFactor=1.1,this.dampingFactor=25,this.wMax=20,this.enableAnimations=!0,this.enableGrid=!1,this.cursorZoom=!1,this.minFov=5,this.maxFov=90,this.rotateSpeed=1,this.enablePan=!0,this.enableRotate=!0,this.enableZoom=!0,this.enableGizmos=!0,this.enableFocus=!0,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this._tbRadius=1,this._state=Xt.IDLE,this.setCamera(t),this.scene!=null&&this.scene.add(this._gizmos),this.initializeMouseActions(),this._onContextMenu=y1.bind(this),this._onWheel=R1.bind(this),this._onPointerUp=A1.bind(this),this._onPointerMove=b1.bind(this),this._onPointerDown=T1.bind(this),this._onPointerCancel=E1.bind(this),this._onWindowResize=M1.bind(this),i!==null&&this.connect(i)}connect(t){super.connect(t),this.domElement.style.touchAction="none",this._devPxRatio=window.devicePixelRatio,this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onWheel),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),window.addEventListener("resize",this._onWindowResize)}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),window.removeEventListener("resize",this._onWindowResize)}onSinglePanStart(t,i){if(this.enabled)switch(this.dispatchEvent(Ri),this.setCenter(t.clientX,t.clientY),i){case"PAN":if(!this.enablePan)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(Ye)),this.updateTbState(Xt.PAN,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.object,ae.x,ae.y,this.domElement)),this.enableGrid&&(this.drawGrid(),this.dispatchEvent(Ye));break;case"ROTATE":if(!this.enableRotate)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1),this.updateTbState(Xt.ROTATE,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.object,ae.x,ae.y,this.domElement,this._tbRadius)),this.activateGizmos(!0),this.enableAnimations&&(this._timePrev=this._timeCurrent=performance.now(),this._angleCurrent=this._anglePrev=0,this._cursorPosPrev.copy(this._startCursorPosition),this._cursorPosCurr.copy(this._cursorPosPrev),this._wCurr=0,this._wPrev=this._wCurr),this.dispatchEvent(Ye);break;case"FOV":if(!this.object.isPerspectiveCamera||!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(Ye)),this.updateTbState(Xt.FOV,!0),this._startCursorPosition.setY(this.getCursorNDC(ae.x,ae.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break;case"ZOOM":if(!this.enableZoom)return;this._animationId!=-1&&(cancelAnimationFrame(this._animationId),this._animationId=-1,this._timeStart=-1,this.activateGizmos(!1),this.dispatchEvent(Ye)),this.updateTbState(Xt.SCALE,!0),this._startCursorPosition.setY(this.getCursorNDC(ae.x,ae.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition);break}}onSinglePanMove(t,i){if(this.enabled){const s=i!=this._state;switch(this.setCenter(t.clientX,t.clientY),i){case Xt.PAN:this.enablePan&&(s?(this.dispatchEvent(_i),this.dispatchEvent(Ri),this.updateTbState(i,!0),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.object,ae.x,ae.y,this.domElement)),this.enableGrid&&this.drawGrid(),this.activateGizmos(!1)):(this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.object,ae.x,ae.y,this.domElement)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition))));break;case Xt.ROTATE:if(this.enableRotate)if(s)this.dispatchEvent(_i),this.dispatchEvent(Ri),this.updateTbState(i,!0),this._startCursorPosition.copy(this.unprojectOnTbSurface(this.object,ae.x,ae.y,this.domElement,this._tbRadius)),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!0);else{this._currentCursorPosition.copy(this.unprojectOnTbSurface(this.object,ae.x,ae.y,this.domElement,this._tbRadius));const l=this._startCursorPosition.distanceTo(this._currentCursorPosition),c=this._startCursorPosition.angleTo(this._currentCursorPosition),f=Math.max(l/this._tbRadius,c)*this.rotateSpeed;this.applyTransformMatrix(this.rotate(this.calculateRotationAxis(this._startCursorPosition,this._currentCursorPosition),f)),this.enableAnimations&&(this._timePrev=this._timeCurrent,this._timeCurrent=performance.now(),this._anglePrev=this._angleCurrent,this._angleCurrent=f,this._cursorPosPrev.copy(this._cursorPosCurr),this._cursorPosCurr.copy(this._currentCursorPosition),this._wPrev=this._wCurr,this._wCurr=this.calculateAngularSpeed(this._anglePrev,this._angleCurrent,this._timePrev,this._timeCurrent))}break;case Xt.SCALE:if(this.enableZoom)if(s)this.dispatchEvent(_i),this.dispatchEvent(Ri),this.updateTbState(i,!0),this._startCursorPosition.setY(this.getCursorNDC(ae.x,ae.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(ae.x,ae.y,this.domElement).y*.5);const c=this._currentCursorPosition.y-this._startCursorPosition.y;let f=1;c<0?f=1/Math.pow(this.scaleFactor,-c*8):c>0&&(f=Math.pow(this.scaleFactor,c*8)),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this.applyTransformMatrix(this.scale(f,this._v3_1))}break;case Xt.FOV:if(this.enableZoom&&this.object.isPerspectiveCamera)if(s)this.dispatchEvent(_i),this.dispatchEvent(Ri),this.updateTbState(i,!0),this._startCursorPosition.setY(this.getCursorNDC(ae.x,ae.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1);else{this._currentCursorPosition.setY(this.getCursorNDC(ae.x,ae.y,this.domElement).y*.5);const c=this._currentCursorPosition.y-this._startCursorPosition.y;let f=1;c<0?f=1/Math.pow(this.scaleFactor,-c*8):c>0&&(f=Math.pow(this.scaleFactor,c*8)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const d=this._v3_1.distanceTo(this._gizmos.position);let p=d/f;p=tn.clamp(p,this.minDistance,this.maxDistance);const m=d*Math.tan(tn.DEG2RAD*this._fovState*.5);let _=tn.RAD2DEG*(Math.atan(m/p)*2);_=tn.clamp(_,this.minFov,this.maxFov);const v=m/Math.tan(tn.DEG2RAD*(_/2));f=d/v,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(_),this.applyTransformMatrix(this.scale(f,this._v3_2,!1)),cn.copy(this._gizmos.position).sub(this.object.position).normalize().multiplyScalar(v/d),this._m4_1.makeTranslation(cn.x,cn.y,cn.z)}break}this.dispatchEvent(Ye)}}onSinglePanEnd(){if(this._state==Xt.ROTATE){if(!this.enableRotate)return;if(this.enableAnimations)if(performance.now()-this._timeCurrent<120){const i=Math.abs((this._wPrev+this._wCurr)/2),s=this;this._animationId=window.requestAnimationFrame(function(l){s.updateTbState(Xt.ANIMATION_ROTATE,!0);const c=s.calculateRotationAxis(s._cursorPosPrev,s._cursorPosCurr);s.onRotationAnim(l,c,Math.min(i,s.wMax))})}else this.updateTbState(Xt.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Ye);else this.updateTbState(Xt.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Ye)}else(this._state==Xt.PAN||this._state==Xt.IDLE)&&(this.updateTbState(Xt.IDLE,!1),this.enableGrid&&this.disposeGrid(),this.activateGizmos(!1),this.dispatchEvent(Ye));this.dispatchEvent(_i)}onDoubleTap(t){if(this.enabled&&this.enablePan&&this.enableFocus&&this.scene!=null){this.dispatchEvent(Ri),this.setCenter(t.clientX,t.clientY);const i=this.unprojectOnObj(this.getCursorNDC(ae.x,ae.y,this.domElement),this.object);if(i!=null&&this.enableAnimations){const s=this;this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this._timeStart=-1,this._animationId=window.requestAnimationFrame(function(l){s.updateTbState(Xt.ANIMATION_FOCUS,!0),s.onFocusAnim(l,i,s._cameraMatrixState,s._gizmoMatrixState)})}else i!=null&&!this.enableAnimations&&(this.updateTbState(Xt.FOCUS,!0),this.focus(i,this.scaleFactor),this.updateTbState(Xt.IDLE,!1),this.dispatchEvent(Ye))}this.dispatchEvent(_i)}onDoublePanStart(){this.enabled&&this.enablePan&&(this.dispatchEvent(Ri),this.updateTbState(Xt.PAN,!0),this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._startCursorPosition.copy(this.unprojectOnTbPlane(this.object,ae.x,ae.y,this.domElement,!0)),this._currentCursorPosition.copy(this._startCursorPosition),this.activateGizmos(!1))}onDoublePanMove(){this.enabled&&this.enablePan&&(this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2),this._state!=Xt.PAN&&(this.updateTbState(Xt.PAN,!0),this._startCursorPosition.copy(this._currentCursorPosition)),this._currentCursorPosition.copy(this.unprojectOnTbPlane(this.object,ae.x,ae.y,this.domElement,!0)),this.applyTransformMatrix(this.pan(this._startCursorPosition,this._currentCursorPosition,!0)),this.dispatchEvent(Ye))}onDoublePanEnd(){this.updateTbState(Xt.IDLE,!1),this.dispatchEvent(_i)}onRotateStart(){this.enabled&&this.enableRotate&&(this.dispatchEvent(Ri),this.updateTbState(Xt.ZROTATE,!0),this._startFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this._currentFingerRotation=this._startFingerRotation,this.object.getWorldDirection(this._rotationAxis),!this.enablePan&&!this.enableZoom&&this.activateGizmos(!0))}onRotateMove(){if(this.enabled&&this.enableRotate){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);let t;this._state!=Xt.ZROTATE&&(this.updateTbState(Xt.ZROTATE,!0),this._startFingerRotation=this._currentFingerRotation),this._currentFingerRotation=this.getAngle(this._touchCurrent[1],this._touchCurrent[0])+this.getAngle(this._touchStart[1],this._touchStart[0]),this.enablePan?(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),t=this.unprojectOnTbPlane(this.object,ae.x,ae.y,this.domElement).applyQuaternion(this.object.quaternion).multiplyScalar(1/this.object.zoom).add(this._v3_2)):t=new X().setFromMatrixPosition(this._gizmoMatrixState);const i=tn.DEG2RAD*(this._startFingerRotation-this._currentFingerRotation);this.applyTransformMatrix(this.zRotate(t,i)),this.dispatchEvent(Ye)}}onRotateEnd(){this.updateTbState(Xt.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(_i)}onPinchStart(){this.enabled&&this.enableZoom&&(this.dispatchEvent(Ri),this.updateTbState(Xt.SCALE,!0),this._startFingerDistance=this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),this._currentFingerDistance=this._startFingerDistance,this.activateGizmos(!1))}onPinchMove(){if(this.enabled&&this.enableZoom){this.setCenter((this._touchCurrent[0].clientX+this._touchCurrent[1].clientX)/2,(this._touchCurrent[0].clientY+this._touchCurrent[1].clientY)/2);const t=12;this._state!=Xt.SCALE&&(this._startFingerDistance=this._currentFingerDistance,this.updateTbState(Xt.SCALE,!0)),this._currentFingerDistance=Math.max(this.calculatePointersDistance(this._touchCurrent[0],this._touchCurrent[1]),t*this._devPxRatio);const i=this._currentFingerDistance/this._startFingerDistance;let s;this.enablePan?this.object.isOrthographicCamera?s=this.unprojectOnTbPlane(this.object,ae.x,ae.y,this.domElement).applyQuaternion(this.object.quaternion).multiplyScalar(1/this.object.zoom).add(this._gizmos.position):this.object.isPerspectiveCamera&&(s=this.unprojectOnTbPlane(this.object,ae.x,ae.y,this.domElement).applyQuaternion(this.object.quaternion).add(this._gizmos.position)):s=this._gizmos.position,this.applyTransformMatrix(this.scale(i,s)),this.dispatchEvent(Ye)}}onPinchEnd(){this.updateTbState(Xt.IDLE,!1),this.dispatchEvent(_i)}onTriplePanStart(){if(this.enabled&&this.enableZoom){this.dispatchEvent(Ri),this.updateTbState(Xt.SCALE,!0);let t=0,i=0;const s=this._touchCurrent.length;for(let l=0;l<s;l++)t+=this._touchCurrent[l].clientX,i+=this._touchCurrent[l].clientY;this.setCenter(t/s,i/s),this._startCursorPosition.setY(this.getCursorNDC(ae.x,ae.y,this.domElement).y*.5),this._currentCursorPosition.copy(this._startCursorPosition)}}onTriplePanMove(){if(this.enabled&&this.enableZoom){let t=0,i=0;const s=this._touchCurrent.length;for(let x=0;x<s;x++)t+=this._touchCurrent[x].clientX,i+=this._touchCurrent[x].clientY;this.setCenter(t/s,i/s);const l=8;this._currentCursorPosition.setY(this.getCursorNDC(ae.x,ae.y,this.domElement).y*.5);const c=this._currentCursorPosition.y-this._startCursorPosition.y;let f=1;c<0?f=1/Math.pow(this.scaleFactor,-c*l):c>0&&(f=Math.pow(this.scaleFactor,c*l)),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const d=this._v3_1.distanceTo(this._gizmos.position);let p=d/f;p=tn.clamp(p,this.minDistance,this.maxDistance);const m=d*Math.tan(tn.DEG2RAD*this._fovState*.5);let _=tn.RAD2DEG*(Math.atan(m/p)*2);_=tn.clamp(_,this.minFov,this.maxFov);const v=m/Math.tan(tn.DEG2RAD*(_/2));f=d/v,this._v3_2.setFromMatrixPosition(this._gizmoMatrixState),this.setFov(_),this.applyTransformMatrix(this.scale(f,this._v3_2,!1)),cn.copy(this._gizmos.position).sub(this.object.position).normalize().multiplyScalar(v/d),this._m4_1.makeTranslation(cn.x,cn.y,cn.z),this.dispatchEvent(Ye)}}onTriplePanEnd(){this.updateTbState(Xt.IDLE,!1),this.dispatchEvent(_i)}setCenter(t,i){ae.x=t,ae.y=i}initializeMouseActions(){this.setMouseAction("PAN",0,"CTRL"),this.setMouseAction("PAN",2),this.setMouseAction("ROTATE",0),this.setMouseAction("ZOOM","WHEEL"),this.setMouseAction("ZOOM",1),this.setMouseAction("FOV","WHEEL","SHIFT"),this.setMouseAction("FOV",1,"SHIFT")}compareMouseAction(t,i){return t.operation==i.operation?t.mouse==i.mouse&&t.key==i.key:!1}setMouseAction(t,i,s=null){const l=["PAN","ROTATE","ZOOM","FOV"],c=[0,1,2,"WHEEL"],f=["CTRL","SHIFT",null];let d;if(!l.includes(t)||!c.includes(i)||!f.includes(s)||i=="WHEEL"&&t!="ZOOM"&&t!="FOV")return!1;switch(t){case"PAN":d=Xt.PAN;break;case"ROTATE":d=Xt.ROTATE;break;case"ZOOM":d=Xt.SCALE;break;case"FOV":d=Xt.FOV;break}const p={operation:t,mouse:i,key:s,state:d};for(let m=0;m<this.mouseActions.length;m++)if(this.mouseActions[m].mouse==p.mouse&&this.mouseActions[m].key==p.key)return this.mouseActions.splice(m,1,p),!0;return this.mouseActions.push(p),!0}unsetMouseAction(t,i=null){for(let s=0;s<this.mouseActions.length;s++)if(this.mouseActions[s].mouse==t&&this.mouseActions[s].key==i)return this.mouseActions.splice(s,1),!0;return!1}getOpFromAction(t,i){let s;for(let l=0;l<this.mouseActions.length;l++)if(s=this.mouseActions[l],s.mouse==t&&s.key==i)return s.operation;if(i!=null){for(let l=0;l<this.mouseActions.length;l++)if(s=this.mouseActions[l],s.mouse==t&&s.key==null)return s.operation}return null}getOpStateFromAction(t,i){let s;for(let l=0;l<this.mouseActions.length;l++)if(s=this.mouseActions[l],s.mouse==t&&s.key==i)return s.state;if(i!=null){for(let l=0;l<this.mouseActions.length;l++)if(s=this.mouseActions[l],s.mouse==t&&s.key==null)return s.state}return null}getAngle(t,i){return Math.atan2(i.clientY-t.clientY,i.clientX-t.clientX)*180/Math.PI}updateTouchEvent(t){for(let i=0;i<this._touchCurrent.length;i++)if(this._touchCurrent[i].pointerId==t.pointerId){this._touchCurrent.splice(i,1,t);break}}applyTransformMatrix(t){if(t.camera!=null&&(this._m4_1.copy(this._cameraMatrixState).premultiply(t.camera),this._m4_1.decompose(this.object.position,this.object.quaternion,this.object.scale),this.object.updateMatrix(),(this._state==Xt.ROTATE||this._state==Xt.ZROTATE||this._state==Xt.ANIMATION_ROTATE)&&this.object.up.copy(this._upState).applyQuaternion(this.object.quaternion)),t.gizmos!=null&&(this._m4_1.copy(this._gizmoMatrixState).premultiply(t.gizmos),this._m4_1.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix()),this._state==Xt.SCALE||this._state==Xt.FOCUS||this._state==Xt.ANIMATION_FOCUS)if(this._tbRadius=this.calculateTbRadius(this.object),this.adjustNearFar){const i=this.object.position.distanceTo(this._gizmos.position),s=new Fr;s.setFromObject(this._gizmos);const l=new tl;s.getBoundingSphere(l);const c=Math.max(this._nearPos0,l.radius+l.center.length()),f=i-this._initialNear,d=Math.min(c,f);this.object.near=i-d;const p=Math.min(this._farPos0,-l.radius+l.center.length()),m=i-this._initialFar,_=Math.min(p,m);this.object.far=i-_,this.object.updateProjectionMatrix()}else{let i=!1;this.object.near!=this._initialNear&&(this.object.near=this._initialNear,i=!0),this.object.far!=this._initialFar&&(this.object.far=this._initialFar,i=!0),i&&this.object.updateProjectionMatrix()}}calculateAngularSpeed(t,i,s,l){const c=i-t,f=(l-s)/1e3;return f==0?0:c/f}calculatePointersDistance(t,i){return Math.sqrt(Math.pow(i.clientX-t.clientX,2)+Math.pow(i.clientY-t.clientY,2))}calculateRotationAxis(t,i){return this._rotationMatrix.extractRotation(this._cameraMatrixState),this._quat.setFromRotationMatrix(this._rotationMatrix),this._rotationAxis.crossVectors(t,i).applyQuaternion(this._quat),this._rotationAxis.normalize().clone()}calculateTbRadius(t){const i=t.position.distanceTo(this._gizmos.position);if(t.type=="PerspectiveCamera"){const s=tn.DEG2RAD*t.fov*.5,l=Math.atan(t.aspect*Math.tan(s));return Math.tan(Math.min(s,l))*i*this.radiusFactor}else if(t.type=="OrthographicCamera")return Math.min(t.top,t.right)*this.radiusFactor}focus(t,i,s=1){cn.copy(t).sub(this._gizmos.position).multiplyScalar(s),this._translationMatrix.makeTranslation(cn.x,cn.y,cn.z),Hv.copy(this._gizmoMatrixState),this._gizmoMatrixState.premultiply(this._translationMatrix),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),Gv.copy(this._cameraMatrixState),this._cameraMatrixState.premultiply(this._translationMatrix),this._cameraMatrixState.decompose(this.object.position,this.object.quaternion,this.object.scale),this.enableZoom&&this.applyTransformMatrix(this.scale(i,this._gizmos.position)),this._gizmoMatrixState.copy(Hv),this._cameraMatrixState.copy(Gv)}drawGrid(){if(this.scene!=null){let s,l,c,f;if(this.object.isOrthographicCamera){const d=this.object.right-this.object.left,p=this.object.bottom-this.object.top;c=Math.max(d,p),f=c/20,s=c/this.object.zoom*3,l=s/f*this.object.zoom}else if(this.object.isPerspectiveCamera){const d=this.object.position.distanceTo(this._gizmos.position),p=tn.DEG2RAD*this.object.fov*.5,m=Math.atan(this.object.aspect*Math.tan(p));c=Math.tan(Math.max(p,m))*d*2,f=c/20,s=c*3,l=s/f}this._grid==null&&(this._grid=new vy(s,l,8947848,8947848),this._grid.position.copy(this._gizmos.position),this._gridPosition.copy(this._grid.position),this._grid.quaternion.copy(this.object.quaternion),this._grid.rotateX(Math.PI*.5),this.scene.add(this._grid))}}dispose(){this._animationId!=-1&&window.cancelAnimationFrame(this._animationId),this.disconnect(),this.scene!==null&&this.scene.remove(this._gizmos),this.disposeGrid()}disposeGrid(){this._grid!=null&&this.scene!=null&&(this.scene.remove(this._grid),this._grid=null)}easeOutCubic(t){return 1-Math.pow(1-t,3)}activateGizmos(t){const i=this._gizmos.children[0],s=this._gizmos.children[1],l=this._gizmos.children[2];t?(i.material.setValues({opacity:1}),s.material.setValues({opacity:1}),l.material.setValues({opacity:1})):(i.material.setValues({opacity:.6}),s.material.setValues({opacity:.6}),l.material.setValues({opacity:.6}))}getCursorNDC(t,i,s){const l=s.getBoundingClientRect();return this._v2_1.setX((t-l.left)/l.width*2-1),this._v2_1.setY((l.bottom-i)/l.height*2-1),this._v2_1.clone()}getCursorPosition(t,i,s){return this._v2_1.copy(this.getCursorNDC(t,i,s)),this._v2_1.x*=(this.object.right-this.object.left)*.5,this._v2_1.y*=(this.object.top-this.object.bottom)*.5,this._v2_1.clone()}setCamera(t){t.lookAt(this.target),t.updateMatrix(),t.type=="PerspectiveCamera"&&(this._fov0=t.fov,this._fovState=t.fov),this._cameraMatrixState0.copy(t.matrix),this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraProjectionState.copy(t.projectionMatrix),this._zoom0=t.zoom,this._zoomState=this._zoom0,this._initialNear=t.near,this._nearPos0=t.position.distanceTo(this.target)-t.near,this._nearPos=this._initialNear,this._initialFar=t.far,this._farPos0=t.position.distanceTo(this.target)-t.far,this._farPos=this._initialFar,this._up0.copy(t.up),this._upState.copy(t.up),this.object=t,this.object.updateProjectionMatrix(),this._tbRadius=this.calculateTbRadius(t),this.makeGizmos(this.target,this._tbRadius)}setGizmosVisible(t){this._gizmos.visible=t,this.dispatchEvent(Ye)}setTbRadius(t){this.radiusFactor=t,this._tbRadius=this.calculateTbRadius(this.object);const s=new Xc(0,0,this._tbRadius,this._tbRadius).getPoints(this._curvePts),l=new Bn().setFromPoints(s);for(const c in this._gizmos.children)this._gizmos.children[c].geometry=l;this.dispatchEvent(Ye)}makeGizmos(t,i){const l=new Xc(0,0,i,i).getPoints(this._curvePts),c=new Bn().setFromPoints(l),f=new jo({color:16744576,fog:!1,transparent:!0,opacity:.6}),d=new jo({color:8454016,fog:!1,transparent:!0,opacity:.6}),p=new jo({color:8421631,fog:!1,transparent:!0,opacity:.6}),m=new kc(c,f),_=new kc(c,d),v=new kc(c,p),x=Math.PI*.5;if(m.rotation.x=x,_.rotation.y=x,this._gizmoMatrixState0.identity().setPosition(t),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this.object.zoom!==1){const S=1/this.object.zoom;this._scaleMatrix.makeScale(S,S,S),this._translationMatrix.makeTranslation(-t.x,-t.y,-t.z),this._gizmoMatrixState.premultiply(this._translationMatrix).premultiply(this._scaleMatrix),this._translationMatrix.makeTranslation(t.x,t.y,t.z),this._gizmoMatrixState.premultiply(this._translationMatrix)}this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.traverse(function(S){S.isLine&&(S.geometry.dispose(),S.material.dispose())}),this._gizmos.clear(),this._gizmos.add(m),this._gizmos.add(_),this._gizmos.add(v)}onFocusAnim(t,i,s,l){if(this._timeStart==-1&&(this._timeStart=t),this._state==Xt.ANIMATION_FOCUS){const f=(t-this._timeStart)/this.focusAnimationTime;if(this._gizmoMatrixState.copy(l),f>=1)this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(i,this.scaleFactor),this._timeStart=-1,this.updateTbState(Xt.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Ye);else{const d=this.easeOutCubic(f),p=1-d+this.scaleFactor*d;this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.focus(i,p,d),this.dispatchEvent(Ye);const m=this;this._animationId=window.requestAnimationFrame(function(_){m.onFocusAnim(_,i,s,l.clone())})}}else this._animationId=-1,this._timeStart=-1}onRotationAnim(t,i,s){if(this._timeStart==-1&&(this._anglePrev=0,this._angleCurrent=0,this._timeStart=t),this._state==Xt.ANIMATION_ROTATE){const l=(t-this._timeStart)/1e3;if(s+-this.dampingFactor*l>0){this._angleCurrent=.5*-this.dampingFactor*Math.pow(l,2)+s*l+0,this.applyTransformMatrix(this.rotate(i,this._angleCurrent)),this.dispatchEvent(Ye);const f=this;this._animationId=window.requestAnimationFrame(function(d){f.onRotationAnim(d,i,s)})}else this._animationId=-1,this._timeStart=-1,this.updateTbState(Xt.IDLE,!1),this.activateGizmos(!1),this.dispatchEvent(Ye)}else this._animationId=-1,this._timeStart=-1,this._state!=Xt.ROTATE&&(this.activateGizmos(!1),this.dispatchEvent(Ye))}pan(t,i,s=!1){const l=t.clone().sub(i);if(this.object.isOrthographicCamera)l.multiplyScalar(1/this.object.zoom);else if(this.object.isPerspectiveCamera&&s){this._v3_1.setFromMatrixPosition(this._cameraMatrixState0),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0);const c=this._v3_1.distanceTo(this._v3_2)/this.object.position.distanceTo(this._gizmos.position);l.multiplyScalar(1/c)}return this._v3_1.set(l.x,l.y,0).applyQuaternion(this.object.quaternion),this._m4_1.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z),this.setTransformationMatrices(this._m4_1,this._m4_1),ai}reset(){this.object.zoom=this._zoom0,this.object.isPerspectiveCamera&&(this.object.fov=this._fov0),this.object.near=this._nearPos,this.object.far=this._farPos,this._cameraMatrixState.copy(this._cameraMatrixState0),this._cameraMatrixState.decompose(this.object.position,this.object.quaternion,this.object.scale),this.object.up.copy(this._up0),this.object.updateMatrix(),this.object.updateProjectionMatrix(),this._gizmoMatrixState.copy(this._gizmoMatrixState0),this._gizmoMatrixState0.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.object),this.makeGizmos(this._gizmos.position,this._tbRadius),this.object.lookAt(this._gizmos.position),this.updateTbState(Xt.IDLE,!1),this.dispatchEvent(Ye)}rotate(t,i){const s=this._gizmos.position;return this._translationMatrix.makeTranslation(-s.x,-s.y,-s.z),this._rotationMatrix.makeRotationAxis(t,-i),this._m4_1.makeTranslation(s.x,s.y,s.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1),ai}copyState(){let t;this.object.isOrthographicCamera?t=JSON.stringify({arcballState:{cameraFar:this.object.far,cameraMatrix:this.object.matrix,cameraNear:this.object.near,cameraUp:this.object.up,cameraZoom:this.object.zoom,gizmoMatrix:this._gizmos.matrix}}):this.object.isPerspectiveCamera&&(t=JSON.stringify({arcballState:{cameraFar:this.object.far,cameraFov:this.object.fov,cameraMatrix:this.object.matrix,cameraNear:this.object.near,cameraUp:this.object.up,cameraZoom:this.object.zoom,gizmoMatrix:this._gizmos.matrix}})),navigator.clipboard.writeText(t)}pasteState(){const t=this;navigator.clipboard.readText().then(function(s){t.setStateFromJSON(s)})}saveState(){this._cameraMatrixState0.copy(this.object.matrix),this._gizmoMatrixState0.copy(this._gizmos.matrix),this._nearPos=this.object.near,this._farPos=this.object.far,this._zoom0=this.object.zoom,this._up0.copy(this.object.up),this.object.isPerspectiveCamera&&(this._fov0=this.object.fov)}scale(t,i,s=!0){Ai.copy(i);let l=1/t;if(this.object.isOrthographicCamera){this.object.zoom=this._zoomState,this.object.zoom*=t,this.object.zoom>this.maxZoom?(this.object.zoom=this.maxZoom,l=this._zoomState/this.maxZoom):this.object.zoom<this.minZoom&&(this.object.zoom=this.minZoom,l=this._zoomState/this.minZoom),this.object.updateProjectionMatrix(),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState),this._scaleMatrix.makeScale(l,l,l),this._translationMatrix.makeTranslation(-this._v3_1.x,-this._v3_1.y,-this._v3_1.z),this._m4_2.makeTranslation(this._v3_1.x,this._v3_1.y,this._v3_1.z).multiply(this._scaleMatrix),this._m4_2.multiply(this._translationMatrix),Ai.sub(this._v3_1);const c=Ai.clone().multiplyScalar(l);return Ai.sub(c),this._m4_1.makeTranslation(Ai.x,Ai.y,Ai.z),this._m4_2.premultiply(this._m4_1),this.setTransformationMatrices(this._m4_1,this._m4_2),ai}else if(this.object.isPerspectiveCamera){this._v3_1.setFromMatrixPosition(this._cameraMatrixState),this._v3_2.setFromMatrixPosition(this._gizmoMatrixState);let c=this._v3_1.distanceTo(Ai),f=c-c*l;const d=c-f;if(d<this.minDistance?(l=this.minDistance/c,f=c-c*l):d>this.maxDistance&&(l=this.maxDistance/c,f=c-c*l),cn.copy(Ai).sub(this._v3_1).normalize().multiplyScalar(f),this._m4_1.makeTranslation(cn.x,cn.y,cn.z),s){const p=this._v3_2;c=p.distanceTo(Ai),f=c-c*l,cn.copy(Ai).sub(this._v3_2).normalize().multiplyScalar(f),this._translationMatrix.makeTranslation(p.x,p.y,p.z),this._scaleMatrix.makeScale(l,l,l),this._m4_2.makeTranslation(cn.x,cn.y,cn.z).multiply(this._translationMatrix),this._m4_2.multiply(this._scaleMatrix),this._translationMatrix.makeTranslation(-p.x,-p.y,-p.z),this._m4_2.multiply(this._translationMatrix),this.setTransformationMatrices(this._m4_1,this._m4_2)}else this.setTransformationMatrices(this._m4_1);return ai}}setFov(t){this.object.isPerspectiveCamera&&(this.object.fov=tn.clamp(t,this.minFov,this.maxFov),this.object.updateProjectionMatrix())}setTransformationMatrices(t=null,i=null){t!=null?ai.camera!=null?ai.camera.copy(t):ai.camera=t.clone():ai.camera=null,i!=null?ai.gizmos!=null?ai.gizmos.copy(i):ai.gizmos=i.clone():ai.gizmos=null}zRotate(t,i){return this._rotationMatrix.makeRotationAxis(this._rotationAxis,i),this._translationMatrix.makeTranslation(-t.x,-t.y,-t.z),this._m4_1.makeTranslation(t.x,t.y,t.z),this._m4_1.multiply(this._rotationMatrix),this._m4_1.multiply(this._translationMatrix),this._v3_1.setFromMatrixPosition(this._gizmoMatrixState).sub(t),this._v3_2.copy(this._v3_1).applyAxisAngle(this._rotationAxis,i),this._v3_2.sub(this._v3_1),this._m4_2.makeTranslation(this._v3_2.x,this._v3_2.y,this._v3_2.z),this.setTransformationMatrices(this._m4_1,this._m4_2),ai}getRaycaster(){return x1}unprojectOnObj(t,i){const s=this.getRaycaster();s.near=i.near,s.far=i.far,s.setFromCamera(t,i);const l=s.intersectObjects(this.scene.children,!0);for(let c=0;c<l.length;c++)if(l[c].object.uuid!=this._gizmos.uuid&&l[c].face!=null)return l[c].point.clone();return null}unprojectOnTbSurface(t,i,s,l,c){if(t.type=="OrthographicCamera"){this._v2_1.copy(this.getCursorPosition(i,s,l)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0);const f=Math.pow(this._v2_1.x,2),d=Math.pow(this._v2_1.y,2),p=Math.pow(this._tbRadius,2);return f+d<=p*.5?this._v3_1.setZ(Math.sqrt(p-(f+d))):this._v3_1.setZ(p*.5/Math.sqrt(f+d)),this._v3_1}else if(t.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(i,s,l)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(t.projectionMatrixInverse);const f=this._v3_1.clone().normalize(),d=t.position.distanceTo(this._gizmos.position),p=Math.pow(c,2),m=this._v3_1.z,_=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2));if(_==0)return f.set(this._v3_1.x,this._v3_1.y,c),f;const v=m/_,x=d;let S=Math.pow(v,2)+1,E=2*v*x,R=Math.pow(x,2)-p,y=Math.pow(E,2)-4*S*R;if(y>=0&&(this._v2_1.setX((-E-Math.sqrt(y))/(2*S)),this._v2_1.setY(v*this._v2_1.x+x),tn.RAD2DEG*this._v2_1.angle()>=45)){const N=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(d-this._v2_1.y,2));return f.multiplyScalar(N),f.z+=d,f}S=v,E=x,R=-p*.5,y=Math.pow(E,2)-4*S*R,this._v2_1.setX((-E-Math.sqrt(y))/(2*S)),this._v2_1.setY(v*this._v2_1.x+x);const g=Math.sqrt(Math.pow(this._v2_1.x,2)+Math.pow(d-this._v2_1.y,2));return f.multiplyScalar(g),f.z+=d,f}}unprojectOnTbPlane(t,i,s,l,c=!1){if(t.type=="OrthographicCamera")return this._v2_1.copy(this.getCursorPosition(i,s,l)),this._v3_1.set(this._v2_1.x,this._v2_1.y,0),this._v3_1.clone();if(t.type=="PerspectiveCamera"){this._v2_1.copy(this.getCursorNDC(i,s,l)),this._v3_1.set(this._v2_1.x,this._v2_1.y,-1),this._v3_1.applyMatrix4(t.projectionMatrixInverse);const f=this._v3_1.clone().normalize(),d=this._v3_1.z,p=Math.sqrt(Math.pow(this._v3_1.x,2)+Math.pow(this._v3_1.y,2));let m;if(c?m=this._v3_1.setFromMatrixPosition(this._cameraMatrixState0).distanceTo(this._v3_2.setFromMatrixPosition(this._gizmoMatrixState0)):m=t.position.distanceTo(this._gizmos.position),p==0)return f.set(0,0,0),f;const _=d/p,v=m,x=-v/_,S=Math.sqrt(Math.pow(v,2)+Math.pow(x,2));return f.multiplyScalar(S),f.z=0,f}}updateMatrixState(){this._cameraMatrixState.copy(this.object.matrix),this._gizmoMatrixState.copy(this._gizmos.matrix),this.object.isOrthographicCamera?(this._cameraProjectionState.copy(this.object.projectionMatrix),this.object.updateProjectionMatrix(),this._zoomState=this.object.zoom):this.object.isPerspectiveCamera&&(this._fovState=this.object.fov)}updateTbState(t,i){this._state=t,i&&this.updateMatrixState()}update(){if(this.target.equals(this._currentTarget)===!1&&(this._gizmos.position.copy(this.target),this._tbRadius=this.calculateTbRadius(this.object),this.makeGizmos(this.target,this._tbRadius),this._currentTarget.copy(this.target)),this.object.isOrthographicCamera){if(this.object.zoom>this.maxZoom||this.object.zoom<this.minZoom){const t=tn.clamp(this.object.zoom,this.minZoom,this.maxZoom);this.applyTransformMatrix(this.scale(t/this.object.zoom,this._gizmos.position,!0))}}else if(this.object.isPerspectiveCamera){const t=this.object.position.distanceTo(this._gizmos.position);if(t>this.maxDistance+zc||t<this.minDistance-zc){const s=tn.clamp(t,this.minDistance,this.maxDistance);this.applyTransformMatrix(this.scale(s/t,this._gizmos.position)),this.updateMatrixState()}(this.object.fov<this.minFov||this.object.fov>this.maxFov)&&(this.object.fov=tn.clamp(this.object.fov,this.minFov,this.maxFov),this.object.updateProjectionMatrix());const i=this._tbRadius;if(this._tbRadius=this.calculateTbRadius(this.object),i<this._tbRadius-zc||i>this._tbRadius+zc){const s=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3,l=this._tbRadius/s,f=new Xc(0,0,l,l).getPoints(this._curvePts),d=new Bn().setFromPoints(f);for(const p in this._gizmos.children)this._gizmos.children[p].geometry=d}}this.object.lookAt(this._gizmos.position)}setStateFromJSON(t){const i=JSON.parse(t);if(i.arcballState!=null){this._cameraMatrixState.fromArray(i.arcballState.cameraMatrix.elements),this._cameraMatrixState.decompose(this.object.position,this.object.quaternion,this.object.scale),this.object.up.copy(i.arcballState.cameraUp),this.object.near=i.arcballState.cameraNear,this.object.far=i.arcballState.cameraFar,this.object.zoom=i.arcballState.cameraZoom,this.object.isPerspectiveCamera&&(this.object.fov=i.arcballState.cameraFov),this._gizmoMatrixState.fromArray(i.arcballState.gizmoMatrix.elements),this._gizmoMatrixState.decompose(this._gizmos.position,this._gizmos.quaternion,this._gizmos.scale),this.object.updateMatrix(),this.object.updateProjectionMatrix(),this._gizmos.updateMatrix(),this._tbRadius=this.calculateTbRadius(this.object);const s=new oe().copy(this._gizmoMatrixState0);this.makeGizmos(this._gizmos.position,this._tbRadius),this._gizmoMatrixState0.copy(s),this.object.lookAt(this._gizmos.position),this.updateTbState(Xt.IDLE,!1),this.dispatchEvent(Ye)}}}function M1(){const r=(this._gizmos.scale.x+this._gizmos.scale.y+this._gizmos.scale.z)/3;this._tbRadius=this.calculateTbRadius(this.object);const t=this._tbRadius/r,s=new Xc(0,0,t,t).getPoints(this._curvePts),l=new Bn().setFromPoints(s);for(const c in this._gizmos.children)this._gizmos.children[c].geometry=l;this.dispatchEvent(Ye)}function y1(r){if(this.enabled){for(let t=0;t<this.mouseActions.length;t++)if(this.mouseActions[t].mouse==2){r.preventDefault();break}}}function E1(){this._touchStart.splice(0,this._touchStart.length),this._touchCurrent.splice(0,this._touchCurrent.length),this._input=Ne.NONE}function T1(r){if(r.button==0&&r.isPrimary?(this._downValid=!0,this._downEvents.push(r),this._downStart=performance.now()):this._downValid=!1,r.pointerType=="touch"&&this._input!=Ne.CURSOR)switch(this._touchStart.push(r),this._touchCurrent.push(r),this._input){case Ne.NONE:this._input=Ne.ONE_FINGER,this.onSinglePanStart(r,"ROTATE"),window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp);break;case Ne.ONE_FINGER:case Ne.ONE_FINGER_SWITCHED:this._input=Ne.TWO_FINGER,this.onRotateStart(),this.onPinchStart(),this.onDoublePanStart();break;case Ne.TWO_FINGER:this._input=Ne.MULT_FINGER,this.onTriplePanStart(r);break}else if(r.pointerType!="touch"&&this._input==Ne.NONE){let t=null;r.ctrlKey||r.metaKey?t="CTRL":r.shiftKey&&(t="SHIFT"),this._mouseOp=this.getOpFromAction(r.button,t),this._mouseOp!=null&&(window.addEventListener("pointermove",this._onPointerMove),window.addEventListener("pointerup",this._onPointerUp),this._input=Ne.CURSOR,this._button=r.button,this.onSinglePanStart(r,this._mouseOp))}}function b1(r){if(r.pointerType=="touch"&&this._input!=Ne.CURSOR)switch(this._input){case Ne.ONE_FINGER:this.updateTouchEvent(r),this.onSinglePanMove(r,Xt.ROTATE);break;case Ne.ONE_FINGER_SWITCHED:if(this.calculatePointersDistance(this._touchCurrent[0],r)*this._devPxRatio>=this._switchSensibility){this._input=Ne.ONE_FINGER,this.updateTouchEvent(r),this.onSinglePanStart(r,"ROTATE");break}break;case Ne.TWO_FINGER:this.updateTouchEvent(r),this.onRotateMove(),this.onPinchMove(),this.onDoublePanMove();break;case Ne.MULT_FINGER:this.updateTouchEvent(r),this.onTriplePanMove(r);break}else if(r.pointerType!="touch"&&this._input==Ne.CURSOR){let t=null;r.ctrlKey||r.metaKey?t="CTRL":r.shiftKey&&(t="SHIFT");const i=this.getOpStateFromAction(this._button,t);i!=null&&this.onSinglePanMove(r,i)}this._downValid&&this.calculatePointersDistance(this._downEvents[this._downEvents.length-1],r)*this._devPxRatio>this._movementThreshold&&(this._downValid=!1)}function A1(r){if(r.pointerType=="touch"&&this._input!=Ne.CURSOR){const t=this._touchCurrent.length;for(let i=0;i<t;i++)if(this._touchCurrent[i].pointerId==r.pointerId){this._touchCurrent.splice(i,1),this._touchStart.splice(i,1);break}switch(this._input){case Ne.ONE_FINGER:case Ne.ONE_FINGER_SWITCHED:window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),this._input=Ne.NONE,this.onSinglePanEnd();break;case Ne.TWO_FINGER:this.onDoublePanEnd(r),this.onPinchEnd(r),this.onRotateEnd(r),this._input=Ne.ONE_FINGER_SWITCHED;break;case Ne.MULT_FINGER:this._touchCurrent.length==0&&(window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),this._input=Ne.NONE,this.onTriplePanEnd());break}}else r.pointerType!="touch"&&this._input==Ne.CURSOR&&(window.removeEventListener("pointermove",this._onPointerMove),window.removeEventListener("pointerup",this._onPointerUp),this._input=Ne.NONE,this.onSinglePanEnd(),this._button=-1);if(r.isPrimary)if(this._downValid)if(r.timeStamp-this._downEvents[this._downEvents.length-1].timeStamp<=this._maxDownTime)if(this._nclicks==0)this._nclicks=1,this._clickStart=performance.now();else{const i=r.timeStamp-this._clickStart,s=this.calculatePointersDistance(this._downEvents[1],this._downEvents[0])*this._devPxRatio;i<=this._maxInterval&&s<=this._posThreshold?(this._nclicks=0,this._downEvents.splice(0,this._downEvents.length),this.onDoubleTap(r)):(this._nclicks=1,this._downEvents.shift(),this._clickStart=performance.now())}else this._downValid=!1,this._nclicks=0,this._downEvents.splice(0,this._downEvents.length);else this._nclicks=0,this._downEvents.splice(0,this._downEvents.length)}function R1(r){if(this.enabled&&this.enableZoom){let t=null;r.ctrlKey||r.metaKey?t="CTRL":r.shiftKey&&(t="SHIFT");const i=this.getOpFromAction("WHEEL",t);if(i!=null){r.preventDefault(),this.dispatchEvent(Ri);const s=125;let l=r.deltaY/s,c=1;switch(l>0?c=1/this.scaleFactor:l<0&&(c=this.scaleFactor),i){case"ZOOM":if(this.updateTbState(Xt.SCALE,!0),l>0?c=1/Math.pow(this.scaleFactor,l):l<0&&(c=Math.pow(this.scaleFactor,-l)),this.cursorZoom&&this.enablePan){let f;this.object.isOrthographicCamera?f=this.unprojectOnTbPlane(this.object,r.clientX,r.clientY,this.domElement).applyQuaternion(this.object.quaternion).multiplyScalar(1/this.object.zoom).add(this._gizmos.position):this.object.isPerspectiveCamera&&(f=this.unprojectOnTbPlane(this.object,r.clientX,r.clientY,this.domElement).applyQuaternion(this.object.quaternion).add(this._gizmos.position)),this.applyTransformMatrix(this.scale(c,f))}else this.applyTransformMatrix(this.scale(c,this._gizmos.position));this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(Xt.IDLE,!1),this.dispatchEvent(Ye),this.dispatchEvent(_i);break;case"FOV":if(this.object.isPerspectiveCamera){this.updateTbState(Xt.FOV,!0),r.deltaX!=0&&(l=r.deltaX/s,c=1,l>0?c=1/Math.pow(this.scaleFactor,l):l<0&&(c=Math.pow(this.scaleFactor,-l))),this._v3_1.setFromMatrixPosition(this._cameraMatrixState);const f=this._v3_1.distanceTo(this._gizmos.position);let d=f/c;d=tn.clamp(d,this.minDistance,this.maxDistance);const p=f*Math.tan(tn.DEG2RAD*this.object.fov*.5);let m=tn.RAD2DEG*(Math.atan(p/d)*2);m>this.maxFov?m=this.maxFov:m<this.minFov&&(m=this.minFov);const _=p/Math.tan(tn.DEG2RAD*(m/2));c=f/_,this.setFov(m),this.applyTransformMatrix(this.scale(c,this._gizmos.position,!1))}this._grid!=null&&(this.disposeGrid(),this.drawGrid()),this.updateTbState(Xt.IDLE,!1),this.dispatchEvent(Ye),this.dispatchEvent(_i);break}}}}const Nn={width:innerWidth,height:window.innerHeight},oi=new iy,C1=new tu(3,20,20);new x0({color:0});const w1=new cy({color:11206655,wireframe:!1,roughness:50,emissive:16755404}),D1=new vi(C1,w1);oi.add(D1);const jd=new Xd(16711782,1e3,100,1);jd.position.set(7,0,10);oi.add(jd);const Zd=new Xd(2293674,1e6,100,5);Zd.position.set(-3,-5,-10);oi.add(Zd);const Qd=new Xd(2293708,7e3,100,2.3);Qd.position.set(-5,10,10);oi.add(Qd);const U1=new py(16777215,10);oi.add(U1);const L1=new Wd(jd,5);oi.add(L1);const N1=new Wd(Zd,5);oi.add(N1);const P1=new Wd(Qd,5);oi.add(P1);const ri=new si(45,Nn.width/Nn.height,.1,1e4);ri.position.set(0,0,20);oi.add(ri);oi.background=new de(262161);const O1=document.querySelector(".webgl"),va=new n1({canvas:O1,antialias:!0,preserveDrawingBuffer:!0});va.setPixelRatio(Math.min(window.devicePixelRatio,1.5));va.setSize(Nn.width,Nn.height);va.setClearColor(2105376);va.setViewport(0,0,Nn.width,Nn.height);va.render(oi,ri);const Pr=new m1(va),Vr=new S1(ri,va.domElement,oi);Vr.enableDamping=!0;Vr.minPolarAngle=.01;Vr.maxPolarAngle=Math.PI-.01;Vr.enablePan=!1;const z1=.01;function I1(){ri.position.length();const r=z1,t=ri.position.x,i=ri.position.z,s=t*Math.cos(r)-i*Math.sin(r),l=t*Math.sin(r)+i*Math.cos(r);ri.position.x=s,ri.position.z=l,ri.lookAt(Vr.target)}let Vv,kv=0,wd=!0;window.addEventListener("resize",()=>{wd=!1,clearTimeout(Vv),Vv=setTimeout(()=>{Nn.width=window.innerWidth,Nn.height=window.innerHeight,ri.aspect=Nn.width/Nn.height,ri.updateProjectionMatrix(),va.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),va.setSize(Nn.width,Nn.height),Pr.setSize(Nn.width,Nn.height),Pr.render(),wd=!0},0)});const F1=new g1(oi,ri);Pr.addPass(F1);const R0=new _1({width:Nn.width,height:Nn.height,shape:5,radius:20,rotateR:Math.PI/2,rotateG:Math.PI/2,rotateB:Math.PI/2,scatter:.1,lineWidth:.7});R0.clear=!0;Pr.addPass(R0);const B1=new v1;Pr.addPass(B1);const C0=()=>{requestAnimationFrame(C0),kv++,!(wd&&kv%2!==0)&&(I1(),Vr.update(),Pr.render())};C0();
