parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"iImb":[function(require,module,exports) {
module.exports="%27.%27/1.1a666eb0.jpg";
},{}],"vRUY":[function(require,module,exports) {
module.exports="%27.%27/2.c53d2403.jpg";
},{}],"VKcr":[function(require,module,exports) {
module.exports="%27.%27/3.67265a69.jpg";
},{}],"ldq8":[function(require,module,exports) {
module.exports="%27.%27/4.9582d123.jpg";
},{}],"oqV2":[function(require,module,exports) {
module.exports="%27.%27/5.af95e80d.jpg";
},{}],"cQwC":[function(require,module,exports) {
module.exports="%27.%27/6.eddd6014.jpg";
},{}],"KtMT":[function(require,module,exports) {
module.exports="%27.%27/7.8cf8a44a.jpg";
},{}],"fF86":[function(require,module,exports) {
module.exports="%27.%27/8.98377a25.jpg";
},{}],"LxRt":[function(require,module,exports) {
module.exports="%27.%27/9.f2a50529.jpg";
},{}],"dCDP":[function(require,module,exports) {
module.exports="%27.%27/10.5330060b.jpg";
},{}],"C2qP":[function(require,module,exports) {
module.exports="%27.%27/11.fdcb9490.jpg";
},{}],"Y91K":[function(require,module,exports) {
module.exports="%27.%27/12.a27ce46e.jpg";
},{}],"/Pfh":[function(require,module,exports) {
module.exports="%27.%27/13.58cee1e2.jpg";
},{}],"vpnQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=[require("../gal/1.jpg"),require("../gal/2.jpg"),require("../gal/3.jpg"),require("../gal/4.jpg"),require("../gal/5.jpg"),require("../gal/6.jpg"),require("../gal/7.jpg"),require("../gal/8.jpg"),require("../gal/9.jpg"),require("../gal/10.jpg"),require("../gal/11.jpg"),require("../gal/12.jpg"),require("../gal/13.jpg")],r=e;exports.default=r;
},{"../gal/1.jpg":"iImb","../gal/2.jpg":"vRUY","../gal/3.jpg":"VKcr","../gal/4.jpg":"ldq8","../gal/5.jpg":"oqV2","../gal/6.jpg":"cQwC","../gal/7.jpg":"KtMT","../gal/8.jpg":"fF86","../gal/9.jpg":"LxRt","../gal/10.jpg":"dCDP","../gal/11.jpg":"C2qP","../gal/12.jpg":"Y91K","../gal/13.jpg":"/Pfh"}],"8tG/":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./data"));function t(e){return e&&e.__esModule?e:{default:e}}var n=function(){for(var t=document.querySelector(".list"),n=[],d=function(d){var o=document.createElement("img");o.tabIndex="0",o.onfocus=function(){l=d,c()},n.push(o),o.src=e.default[d],t.appendChild(o),o.addEventListener("click",function(){l=d,c()})},o=0;o<e.default.length;o++)d(o);document.querySelector(".full");var u=document.getElementById("full-img"),c=(document.getElementById("filters"),function(){u.style="background-image: url(".concat(e.default[l],")");for(var t=0;t<n.length;t++)n[t].classList.remove("active");n[l].classList.add("active"),n[l].focus()}),r=document.querySelector(".right"),l=0;c();var a=function(){l++,l%=e.default.length,c()};r.addEventListener("click",a);var i=document.querySelector(".left"),f=function(){l--,(l%=e.default.length)<0&&(l=e.default.length-1),c()};i.addEventListener("click",f),u.addEventListener("click",a),document.addEventListener("keydown",function(e){39===e.keyCode&&a()}),document.addEventListener("keydown",function(e){37===e.keyCode&&f()}),document.addEventListener("keydown",function(e){38===e.keyCode&&f()}),document.addEventListener("keydown",function(e){40===e.keyCode&&a()})},d=n;exports.default=d;
},{"./data":"vpnQ"}],"epB2":[function(require,module,exports) {
"use strict";var e=r(require("./src/init"));function r(e){return e&&e.__esModule?e:{default:e}}(0,e.default)();
},{"./src/init":"8tG/"}]},{},["epB2"], null)
//# sourceMappingURL=%27.%27/main.063daf68.js.map