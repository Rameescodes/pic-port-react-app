function re(o,c){for(var s=0;s<c.length;s++){const p=c[s];if(typeof p!="string"&&!Array.isArray(p)){for(const l in p)if(l!=="default"&&!(l in o)){const f=Object.getOwnPropertyDescriptor(p,l);f&&Object.defineProperty(o,l,f.get?f:{enumerable:!0,get:()=>p[l]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}function oe(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function ne(o){if(o.__esModule)return o;var c=o.default;if(typeof c=="function"){var s=function p(){if(this instanceof p){var l=[null];l.push.apply(l,arguments);var f=Function.bind.apply(c,l);return new f}return c.apply(this,arguments)};s.prototype=c.prototype}else s={};return Object.defineProperty(s,"__esModule",{value:!0}),Object.keys(o).forEach(function(p){var l=Object.getOwnPropertyDescriptor(o,p);Object.defineProperty(s,p,l.get?l:{enumerable:!0,get:function(){return o[p]}})}),s}var ae={exports:{}};(function(o){var c=function(s){var p=Object.prototype,l=p.hasOwnProperty,f,j=typeof Symbol=="function"?Symbol:{},w=j.iterator||"@@iterator",g=j.asyncIterator||"@@asyncIterator",b=j.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch{d=function(t,e,r){return t[e]=r}}function T(t,e,r,i){var n=e&&e.prototype instanceof P?e:P,m=Object.create(n.prototype),F=new u(i||[]);return m._invoke=V(t,r,F),m}s.wrap=T;function A(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(i){return{type:"throw",arg:i}}}var L="suspendedStart",R="suspendedYield",U="executing",x="completed",_={};function P(){}function S(){}function O(){}var G={};d(G,w,function(){return this});var B=Object.getPrototypeOf,M=B&&B(B(h([])));M&&M!==p&&l.call(M,w)&&(G=M);var k=O.prototype=P.prototype=Object.create(G);S.prototype=O,d(k,"constructor",O),d(O,"constructor",S),S.displayName=d(O,b,"GeneratorFunction");function Y(t){["next","throw","return"].forEach(function(e){d(t,e,function(r){return this._invoke(e,r)})})}s.isGeneratorFunction=function(t){var e=typeof t=="function"&&t.constructor;return e?e===S||(e.displayName||e.name)==="GeneratorFunction":!1},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,d(t,b,"GeneratorFunction")),t.prototype=Object.create(k),t},s.awrap=function(t){return{__await:t}};function D(t,e){function r(m,F,v,E){var C=A(t[m],t,F);if(C.type==="throw")E(C.arg);else{var J=C.arg,I=J.value;return I&&typeof I=="object"&&l.call(I,"__await")?e.resolve(I.__await).then(function(N){r("next",N,v,E)},function(N){r("throw",N,v,E)}):e.resolve(I).then(function(N){J.value=N,v(J)},function(N){return r("throw",N,v,E)})}}var i;function n(m,F){function v(){return new e(function(E,C){r(m,F,E,C)})}return i=i?i.then(v,v):v()}this._invoke=n}Y(D.prototype),d(D.prototype,g,function(){return this}),s.AsyncIterator=D,s.async=function(t,e,r,i,n){n===void 0&&(n=Promise);var m=new D(T(t,e,r,i),n);return s.isGeneratorFunction(e)?m:m.next().then(function(F){return F.done?F.value:m.next()})};function V(t,e,r){var i=L;return function(n,m){if(i===U)throw new Error("Generator is already running");if(i===x){if(n==="throw")throw m;return y()}for(r.method=n,r.arg=m;;){var F=r.delegate;if(F){var v=q(F,r);if(v){if(v===_)continue;return v}}if(r.method==="next")r.sent=r._sent=r.arg;else if(r.method==="throw"){if(i===L)throw i=x,r.arg;r.dispatchException(r.arg)}else r.method==="return"&&r.abrupt("return",r.arg);i=U;var E=A(t,e,r);if(E.type==="normal"){if(i=r.done?x:R,E.arg===_)continue;return{value:E.arg,done:r.done}}else E.type==="throw"&&(i=x,r.method="throw",r.arg=E.arg)}}}function q(t,e){var r=t.iterator[e.method];if(r===f){if(e.delegate=null,e.method==="throw"){if(t.iterator.return&&(e.method="return",e.arg=f,q(t,e),e.method==="throw"))return _;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return _}var i=A(r,t.iterator,e.arg);if(i.type==="throw")return e.method="throw",e.arg=i.arg,e.delegate=null,_;var n=i.arg;if(!n)return e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,_;if(n.done)e[t.resultName]=n.value,e.next=t.nextLoc,e.method!=="return"&&(e.method="next",e.arg=f);else return n;return e.delegate=null,_}Y(k),d(k,b,"Generator"),d(k,w,function(){return this}),d(k,"toString",function(){return"[object Generator]"});function z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function a(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function u(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(z,this),this.reset(!0)}s.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function i(){for(;e.length;){var n=e.pop();if(n in t)return i.value=n,i.done=!1,i}return i.done=!0,i}};function h(t){if(t){var e=t[w];if(e)return e.call(t);if(typeof t.next=="function")return t;if(!isNaN(t.length)){var r=-1,i=function n(){for(;++r<t.length;)if(l.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=f,n.done=!0,n};return i.next=i}}return{next:y}}s.values=h;function y(){return{value:f,done:!0}}return u.prototype={constructor:u,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=f,this.done=!1,this.delegate=null,this.method="next",this.arg=f,this.tryEntries.forEach(a),!t)for(var e in this)e.charAt(0)==="t"&&l.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=f)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if(e.type==="throw")throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(E,C){return m.type="throw",m.arg=t,e.next=E,C&&(e.method="next",e.arg=f),!!C}for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i],m=n.completion;if(n.tryLoc==="root")return r("end");if(n.tryLoc<=this.prev){var F=l.call(n,"catchLoc"),v=l.call(n,"finallyLoc");if(F&&v){if(this.prev<n.catchLoc)return r(n.catchLoc,!0);if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else if(F){if(this.prev<n.catchLoc)return r(n.catchLoc,!0)}else if(v){if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&l.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var n=i;break}}n&&(t==="break"||t==="continue")&&n.tryLoc<=e&&e<=n.finallyLoc&&(n=null);var m=n?n.completion:{};return m.type=t,m.arg=e,n?(this.method="next",this.next=n.finallyLoc,_):this.complete(m)},complete:function(t,e){if(t.type==="throw")throw t.arg;return t.type==="break"||t.type==="continue"?this.next=t.arg:t.type==="return"?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):t.type==="normal"&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),a(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var i=r.completion;if(i.type==="throw"){var n=i.arg;a(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:h(t),resultName:e,nextLoc:r},this.method==="next"&&(this.arg=f),_}},s}(o.exports);try{regeneratorRuntime=c}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=c:Function("r","regeneratorRuntime = r")(c)}})(ae);var ie={defaultArgs:["./ffmpeg","-nostdin","-y"],baseOptions:{log:!1,logger:()=>{},progress:()=>{},corePath:""}},se=(o,c)=>{const s=o._malloc(c.length*Uint32Array.BYTES_PER_ELEMENT);return c.forEach((p,l)=>{const f=o.lengthBytesUTF8(p)+1,j=o._malloc(f);o.stringToUTF8(p,j,f),o.setValue(s+Uint32Array.BYTES_PER_ELEMENT*l,j,"i32")}),[c.length,s]};const ce="@ffmpeg/ffmpeg",le="0.11.6",fe="FFmpeg WebAssembly version",pe="src/index.js",ue="src/index.d.ts",he={example:"examples"},me={start:"node scripts/server.js","start:worker":"node scripts/worker-server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js","build:worker":"rimraf dist && webpack --config scripts/webpack.config.worker.prod.js",prepublishOnly:"npm run build",lint:"eslint src",wait:"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node node_modules/mocha/bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},ge={"./src/node/index.js":"./src/browser/index.js"},de={type:"git",url:"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},ye=["ffmpeg","WebAssembly","video"],we="Jerome Wu <jeromewus@gmail.com>",ve="MIT",be={url:"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},Fe={node:">=12.16.1"},Ee="https://github.com/ffmpegwasm/ffmpeg.wasm#readme",je={"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},_e={"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.11.0","@types/emscripten":"^1.39.4","babel-eslint":"^10.1.0","babel-loader":"^8.1.0",chai:"^4.2.0",cors:"^2.8.5",eslint:"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1",express:"^4.17.1",mocha:"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.3.0",webpack:"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"},X={name:ce,version:le,description:fe,main:pe,types:ue,directories:he,scripts:me,browser:ge,repository:de,keywords:ye,author:we,license:ve,bugs:be,engines:Fe,homepage:Ee,dependencies:je,devDependencies:_e},Pe=(typeof process<"u",`https://unpkg.com/@ffmpeg/core@${X.devDependencies["@ffmpeg/core"].substring(1)}/dist/ffmpeg-core.js`),Le={corePath:Pe};let K=!1,H=()=>{};const xe=o=>{K=o},Oe=o=>{H=o},ke=(o,c)=>{H({type:o,message:c}),K&&console.log(`[${o}] ${c}`)};var $={logging:K,setLogging:xe,setCustomLogger:Oe,log:ke};const Ce=o=>`
createFFmpegCore is not defined. ffmpeg.wasm is unable to find createFFmpegCore after loading ffmpeg-core.js from ${o}. Use another URL when calling createFFmpeg():

const ffmpeg = createFFmpeg({
  corePath: 'http://localhost:3000/ffmpeg-core.js',
});
`;var Q={CREATE_FFMPEG_CORE_IS_NOT_DEFINED:Ce};const W=async(o,c)=>{$.log("info",`fetch ${o}`);const s=await(await fetch(o)).arrayBuffer();$.log("info",`${o} file size = ${s.byteLength} bytes`);const p=new Blob([s],{type:c}),l=URL.createObjectURL(p);return $.log("info",`${o} blob URL = ${l}`),l},Te=async({corePath:o,workerPath:c,wasmPath:s})=>{if(typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope){if(typeof o!="string")throw Error("corePath should be a string!");const w=new URL(o,import.meta.url).href,g=await W(w,"application/javascript"),b=await W(s!==void 0?s:w.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),d=await W(c!==void 0?c:w.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return typeof createFFmpegCore>"u"?new Promise(T=>{if(globalThis.importScripts(g),typeof createFFmpegCore>"u")throw Error(Q.CREATE_FFMPEG_CORE_IS_NOT_DEFINED(w));$.log("info","ffmpeg-core.js script loaded"),T({createFFmpegCore,corePath:g,wasmPath:b,workerPath:d})}):($.log("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore,corePath:g,wasmPath:b,workerPath:d}))}if(typeof o!="string")throw Error("corePath should be a string!");const p=new URL(o,import.meta.url).href,l=await W(p,"application/javascript"),f=await W(s!==void 0?s:p.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),j=await W(c!==void 0?c:p.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return typeof createFFmpegCore>"u"?new Promise(w=>{const g=document.createElement("script"),b=()=>{if(g.removeEventListener("load",b),typeof createFFmpegCore>"u")throw Error(Q.CREATE_FFMPEG_CORE_IS_NOT_DEFINED(p));$.log("info","ffmpeg-core.js script loaded"),w({createFFmpegCore,corePath:l,wasmPath:f,workerPath:j})};g.src=l,g.type="text/javascript",g.addEventListener("load",b),document.getElementsByTagName("head")[0].appendChild(g)}):($.log("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore,corePath:l,wasmPath:f,workerPath:j}))},Se=o=>new Promise((c,s)=>{const p=new FileReader;p.onload=()=>{c(p.result)},p.onerror=({target:{error:{code:l}}})=>{s(Error(`File could not be read! Code=${l}`))},p.readAsArrayBuffer(o)}),Ne=async o=>{let c=o;return typeof o>"u"?new Uint8Array:(typeof o=="string"?/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(o)?c=atob(o.split(",")[1]).split("").map(s=>s.charCodeAt(0)):c=await(await fetch(new URL(o,import.meta.url).href)).arrayBuffer():(o instanceof File||o instanceof Blob)&&(c=await Se(o)),new Uint8Array(c))},$e=Object.freeze(Object.defineProperty({__proto__:null,defaultOptions:Le,fetchFile:Ne,getCreateFFmpegCore:Te},Symbol.toStringTag,{value:"Module"})),ee=ne($e),{defaultArgs:Ae,baseOptions:Re}=ie,Ue=se,{defaultOptions:Ge,getCreateFFmpegCore:Me}=ee,{version:De}=X,Z=Error("ffmpeg.wasm is not ready, make sure you have completed load().");var We=(o={})=>{const{log:c,logger:s,progress:p,...l}={...Re,...Ge,...o};let f=null,j=null,w=null,g=null,b=!1,d=()=>{},T=c,A=p,L=0,R=0,U=!1,x=0;const _=a=>{a==="FFMPEG_END"&&w!==null&&(w(),w=null,g=null,b=!1)},P=(a,u)=>{d({type:a,message:u}),T&&console.log(`[${a}] ${u}`)},S=a=>{const[u,h,y]=a.split(":");return parseFloat(u)*60*60+parseFloat(h)*60+parseFloat(y)},O=(a,u)=>{if(typeof a=="string")if(a.startsWith("  Duration")){const h=a.split(", ")[0].split(": ")[1],y=S(h);u({duration:y,ratio:x}),(L===0||L>y)&&(L=y,U=!0)}else if(U&&a.startsWith("    Stream")){const h=a.match(/([\d.]+) fps/);if(h){const y=parseFloat(h[1]);R=L*y}else R=0;U=!1}else if(a.startsWith("frame")||a.startsWith("size")){const h=a.split("time=")[1].split(" ")[0],y=S(h),t=a.match(/frame=\s*(\d+)/);if(R&&t){const e=parseFloat(t[1]);x=Math.min(e/R,1)}else x=y/L;u({ratio:x,time:y})}else a.startsWith("video:")&&(u({ratio:1}),L=0)},G=({type:a,message:u})=>{P(a,u),O(u,A),_(u)},B=async()=>{if(P("info","load ffmpeg-core"),f===null){P("info","loading ffmpeg-core");const{createFFmpegCore:a,corePath:u,workerPath:h,wasmPath:y}=await Me(l);f=await a({mainScriptUrlOrBlob:u,printErr:t=>G({type:"fferr",message:t}),print:t=>G({type:"ffout",message:t}),locateFile:(t,e)=>{if(typeof window<"u"||typeof WorkerGlobalScope<"u"){if(typeof y<"u"&&t.endsWith("ffmpeg-core.wasm"))return y;if(typeof h<"u"&&t.endsWith("ffmpeg-core.worker.js"))return h}return e+t}}),j=f.cwrap(l.mainName||"proxy_main","number",["number","number"]),P("info","ffmpeg-core loaded")}else throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.")},M=()=>f!==null,k=(...a)=>{if(P("info",`run ffmpeg command: ${a.join(" ")}`),f===null)throw Z;if(b)throw Error("ffmpeg.wasm can only run one command at a time");return b=!0,new Promise((u,h)=>{const y=[...Ae,...a].filter(t=>t.length!==0);w=u,g=h,j(...Ue(f,y))})},Y=(a,...u)=>{if(P("info",`run FS.${a} ${u.map(h=>typeof h=="string"?h:`<${h.length} bytes binary file>`).join(" ")}`),f===null)throw Z;{let h=null;try{h=f.FS[a](...u)}catch{throw Error(a==="readdir"?`ffmpeg.FS('readdir', '${u[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`:a==="readFile"?`ffmpeg.FS('readFile', '${u[0]}') error. Check if the path exists`:"Oops, something went wrong in FS operation.")}return h}},D=()=>{if(f===null)throw Z;g&&g("ffmpeg has exited"),b=!1;try{f.exit(1)}catch(a){P(a.message),g&&g(a)}finally{f=null,j=null,w=null,g=null}},V=a=>{A=a},q=a=>{d=a},z=a=>{T=a};return P("info",`use ffmpeg.wasm v${De}`),{setProgress:V,setLogger:q,setLogging:z,load:B,isLoaded:M,run:k,exit:D,FS:Y}};const Be=We,{fetchFile:Ie}=ee;var te={createFFmpeg:Be,fetchFile:Ie};const Ye=oe(te),qe=re({__proto__:null,default:Ye},[te]);export{qe as i};