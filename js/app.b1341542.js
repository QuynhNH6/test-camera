(function(e){function t(t){for(var n,o,c=t[0],s=t[1],u=t[2],v=0,l=[];v<c.length;v++)o=c[v],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&l.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(l.length)l.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var s=r[c];0!==i[s]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},i={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),i=r.n(n);i.a},"3b15":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to TEST CAMERA"}})],1)},a=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),r("h3",[e._v(e._s(e.errorString))]),r("b",[e._v("Devices: "+e._s(e.devices))]),r("video",{staticClass:"camera__view",attrs:{autoplay:"",playsinline:""}})])},c=[],s=(r("4160"),r("b0c0"),r("d3b7"),r("3ca3"),r("159b"),r("ddb0"),r("2b3d"),r("96cf"),r("1da1")),u={name:"HelloWorld",props:{msg:String},data:function(){return{cameraView:"",stream:"",frameSize:{},capturedImage:"",stepPercent:50,isOcr:"",isOcrSuccess:"",isLoading:"",isError:"",devices:null,isSupport:!1,errorString:"Not Error"}},mounted:function(){this.cameraView=document.querySelector("video"),this.getDevices(),this.checkSupport()},methods:{openCamera:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=null,t.prev=1,n={audio:!1,video:{facingMode:{exact:"environment"}}},t.next=5,navigator.mediaDevices.getUserMedia(n);case 5:r=t.sent,e.stream=r,e.cameraView.srcObject=r,t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),console.error("Oops. Something is broken.",t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))()},getDevices:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.enumerateDevices();case 2:e.devices=t.sent;case 3:case"end":return t.stop()}}),t)})))()},checkDeviceSupport:function(){return new Promise((function(e){navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices&&(navigator.enumerateDevices=function(e){navigator.mediaDevices.enumerateDevices().then(e)});var t=[],r="https:"===location.protocol,n=!1;("undefined"!==typeof MediaStreamTrack&&"getSources"in MediaStreamTrack||navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices)&&(n=!0);var i=!1,a=!1,o=!1,c=!1,s=!1;n&&(!navigator.enumerateDevices&&window.MediaStreamTrack&&window.MediaStreamTrack.getSources&&(navigator.enumerateDevices=window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack)),!navigator.enumerateDevices&&navigator.enumerateDevices&&(navigator.enumerateDevices=navigator.enumerateDevices.bind(navigator)),navigator.enumerateDevices||e(!1),t=[],navigator.enumerateDevices((function(n){n.forEach((function(e){var n,u={};for(var d in e)u[d]=e[d];"audio"===u.kind&&(u.kind="audioinput"),"video"===u.kind&&(u.kind="videoinput"),t.forEach((function(e){e.id===u.id&&e.kind===u.kind&&(n=!0)})),n||(u.deviceId||(u.deviceId=u.id),u.id||(u.id=u.deviceId),u.label?("videoinput"!==u.kind||a||(a=!0),"audioinput"!==u.kind||i||(i=!0)):(u.label="Please invoke getUserMedia once.",r||(u.label="HTTPs is required to get label of this "+u.kind+" device.")),"audioinput"===u.kind&&(o=!0),"audiooutput"===u.kind&&(c=!0),"videoinput"===u.kind&&(s=!0),t.push(u))})),e(!!(o&&c&&s))})))}))},onSuccess:function(e){console.log(e),alert("Success!")},onError:function(e){alert("Error :("),console.log(e)},checkSupport:function(){void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise((function(r,n){t.call(navigator,e,r,n)})):(this.errorString="getUserMedia is not implemented in this browser",Promise.reject(new Error("getUserMedia is not implemented in this browser")))}),navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then((function(e){this.errorString="get camera done!!!";var t=document.querySelector("video");"srcObject"in t?t.srcObject=e:t.src=window.URL.createObjectURL(e),t.onloadedmetadata=function(e){alert(e),console.log(e),t.play()}})).catch((function(e){console.log(e.name+": "+e.message),this.errorString=e.name+": "+e.message}))}}},d=u,v=(r("c6cc"),r("2877")),l=Object(v["a"])(d,o,c,!1,null,"22a1b338",null),p=l.exports,m={name:"App",components:{HelloWorld:p}},f=m,g=(r("034f"),Object(v["a"])(f,i,a,!1,null,null,null)),h=g.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,t,r){},c6cc:function(e,t,r){"use strict";var n=r("3b15"),i=r.n(n);i.a},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.b1341542.js.map