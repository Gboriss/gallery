// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"gal/1.jpg":[function(require,module,exports) {
module.exports = "/1.e469c122.jpg";
},{}],"gal/2.jpg":[function(require,module,exports) {
module.exports = "/2.bd5c6954.jpg";
},{}],"gal/3.jpg":[function(require,module,exports) {
module.exports = "/3.93a177b7.jpg";
},{}],"gal/4.jpg":[function(require,module,exports) {
module.exports = "/4.26e246bf.jpg";
},{}],"gal/5.jpg":[function(require,module,exports) {
module.exports = "/5.8de0ecf7.jpg";
},{}],"gal/6.jpg":[function(require,module,exports) {
module.exports = "/6.4d0a91be.jpg";
},{}],"gal/7.jpg":[function(require,module,exports) {
module.exports = "/7.0523ab06.jpg";
},{}],"gal/8.jpg":[function(require,module,exports) {
module.exports = "/8.3e4439aa.jpg";
},{}],"gal/9.jpg":[function(require,module,exports) {
module.exports = "/9.7e0e07a3.jpg";
},{}],"gal/10.jpg":[function(require,module,exports) {
module.exports = "/10.c3dbf1bc.jpg";
},{}],"gal/11.jpg":[function(require,module,exports) {
module.exports = "/11.24526ef3.jpg";
},{}],"gal/12.jpg":[function(require,module,exports) {
module.exports = "/12.88184740.jpg";
},{}],"gal/13.jpg":[function(require,module,exports) {
module.exports = "/13.05b9fce8.jpg";
},{}],"src/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var photos = [require('../gal/1.jpg'), require('../gal/2.jpg'), require('../gal/3.jpg'), require('../gal/4.jpg'), require('../gal/5.jpg'), require('../gal/6.jpg'), require('../gal/7.jpg'), require('../gal/8.jpg'), require('../gal/9.jpg'), require('../gal/10.jpg'), require('../gal/11.jpg'), require('../gal/12.jpg'), require('../gal/13.jpg')];
var _default = photos; // :root {
// 	--aside-width: 40px;
// 	--list-width: 300px;
// }
// body {
// 	position: relative;
// 	margin: 0;
// 	min-height: 100vh;
// 	background-color: #454343;
// }
// .full {
// 	display: flex;
// 	justify-content: space-between;
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	right: 0;
// 	bottom: 0;
// 	/* margin-left: 10px;
// 	padding-right: 10px; */
// }
// @media (min-width: 960px) {
// 	.full {
// 		display: flex;
// 		justify-content: space-between;
// 		position: fixed;
// 		top: 0;
// 		left: 340px;
// 		bottom: 0;
// 		width: calc(100% - 100px - 350px);
// 	}
// }
// .img-wrap {
// 	position: fixed;
// }
// @media (min-width: 960px) {
// 	.img-wrap {
// 		display: flex;
// 		align-items: center;
// 		position: relative;
// 	}
// }
// #full-img {
// 	/* width: 100%; */
// 	max-width: 100%;
// 	box-shadow: 0 20px 30px -10px rgba(0, 0, 0, .5);
// 	margin-top: 20px;
// 	margin-bottom: 20px;
// }
// @media (min-width: 960px) {
// 	#full-img {
// 		width: 100%;
// 		max-width: 100%;
// 		box-shadow: 0 20px 30px -10px rgba(0, 0, 0, .5);
// 		margin-top: 20px;
// 		margin-bottom: 20px;
// 	}
// }
// img.edit {
// 	position: absolute;
// 	cursor: pointer;	
// 	top: 2%;
// 	right: -4%;
// }
// .left,
// .right {
// 	padding: 0;
// 	border: none;
// 	font: inherit;
// 	color: inherit;
// 	background-color: transparent;
// 	outline: none;
// 	cursor: pointer;
// 	-webkit-tap-highlight-color: rgba(0,0,0, 0);
// 	transition: .2s;
// }
// .left {
// 	top: 5vh;
// 	bottom: 20%;
// 	margin-right: 30px;
// }
// .right {
// 	margin-left: 30px;
// }
// @media (min-width: 960px) {
// 	.left {
// 	}
// }
// .left:hover,
// .right:hover {
// 	transform: none;
// }
// @media (min-width: 1700px) {
// 	.left:hover,
// 	.right:hover {
// 		cursor: pointer;
// 		transform: scale(1.5); 
// 	}
// }
// .list-wrap {
// 	margin: 20px 0;
// 	bottom: 0;
// 	position: absolute;
// }
// @media (min-width: 960px) {
// 	.list-wrap {
// 		bottom: 0;
// 		top: 0;
// 	}
// }
// .list {
// 	display: flex;
// 	flex-direction: row;
// 	/* flex-wrap: nowrap; */
// 	padding-left: 10px;
// 	margin-top: 20px;	
// }
// @media (min-width: 960px) {
// 	.list {
// 		display: flex;
// 		flex-direction: column;
// 		width: 255px;
// 		padding-left: 20px;
// 	}
// }
// .list img {
// 	/* max-width: 30%; */
// 	max-height: 80px;
// 	margin-right: 10px;
// 	bottom: 0;
// }
// @media (min-width: 960px) {
// 	.list img{
// 	max-width: 100%;
// 	max-height: none;
// 	margin-bottom: 15px;
// 	filter: grayscale(100%); /* делает фото в чб */
// 	opacity: .5; /* прозрачность */
// 	transition: .2s;
//     margin-right: 20px;
// 	}
// }
// .list img:focus {
// 	outline: none;
// }
// .list img:hover {
// 	cursor: pointer;
// 	box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.35);
// 	opacity: 1;
// 	filter: grayscale(0);
// }
// .list img.active,
// .list img:focus {
// 	filter: grayscale(0);
// 	opacity: 1;
// 	box-shadow: 0 0 30px 0px rgba(0, 0, 0, 0.35);
// }
// .list img:last-child {
// 	margin-bottom: 0;
// }
// input[type=range] {
// 	margin-bottom: 50px;
// 	margin-left: 20px;
// 	-webkit-appearance: none; 
// 	width: 18%;
// 	background: transparent; 
// }
// input[type=range]::-webkit-slider-thumb {
// 	-webkit-appearance: none;
// 	border: 1px solid #000000;
// 	height: 16px;
// 	width: 16px;
// 	border-radius: 5px;
// 	background: #ffffff;
// 	cursor: pointer;
// 	margin-top: -5px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
// 	box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
//   }
//   input[type=range]::-webkit-slider-runnable-track {
// 	height: 8.4px;
// 	box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
// 	background: #3071a9;
// 	border-radius: 1.5px;
//   }
// a {
// 	text-decoration: none;
// 	color: #1f1c1f;
// }
// .close {
// 	padding: 35px 25px;
// 	margin: 0;
// 	border: 0;
// 	background-color: transparent;
// 	outline: none;
// }
// .close:hover {
// 	cursor: pointer;
// }

exports.default = _default;
},{"../gal/1.jpg":"gal/1.jpg","../gal/2.jpg":"gal/2.jpg","../gal/3.jpg":"gal/3.jpg","../gal/4.jpg":"gal/4.jpg","../gal/5.jpg":"gal/5.jpg","../gal/6.jpg":"gal/6.jpg","../gal/7.jpg":"gal/7.jpg","../gal/8.jpg":"gal/8.jpg","../gal/9.jpg":"gal/9.jpg","../gal/10.jpg":"gal/10.jpg","../gal/11.jpg":"gal/11.jpg","../gal/12.jpg":"gal/12.jpg","../gal/13.jpg":"gal/13.jpg"}],"src/init.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var init = function init() {
  var list = document.querySelector('.list'); // creating list of photos

  var imgNodes = [];

  var _loop = function _loop(i) {
    // Display a list of photos
    var img = document.createElement('img');
    img.tabIndex = '0';

    img.onfocus = function () {
      n = i;
      set();
    };

    imgNodes.push(img);
    img.src = _data.default[i];
    list.appendChild(img); // added to item list img

    img.addEventListener('click', function () {
      n = i;
      set();
    });
  };

  for (var i = 0; i < _data.default.length; i++) {
    _loop(i);
  }

  var full = document.querySelector('.full');
  var imgBig = document.getElementById('full-img'); // let imgShow = document.getElementById('img-show')

  var filters = document.getElementById('filters');

  var set = function set() {
    imgBig.style = "background-image: url(".concat(_data.default[n], ")");

    for (var i = 0; i < imgNodes.length; i++) {
      imgNodes[i].classList.remove('active');
    }

    imgNodes[n].classList.add('active');
    imgNodes[n].focus();
  };

  var right = document.querySelector('.right');
  var n = 0;
  set(); // full.appendChild(imgBig) //

  var next = function next() {
    n++;
    n = n % _data.default.length;
    set();
  };

  right.addEventListener('click', next);
  var left = document.querySelector('.left');

  var prev = function prev() {
    n--;
    n = n % _data.default.length;

    if (n < 0) {
      n = _data.default.length - 1;
    }

    set();
  };

  left.addEventListener('click', prev); // back preview
  //Focus stays on selected photo

  imgBig.addEventListener('click', next);
  document.addEventListener('keydown', function (e) {
    e.keyCode === 39 && next();
  });
  document.addEventListener('keydown', function (e) {
    e.keyCode === 37 && prev();
  });
  document.addEventListener('keydown', function (e) {
    e.keyCode === 38 && prev();
  });
  document.addEventListener('keydown', function (e) {
    e.keyCode === 40 && next();
  });
};

var _default = init;
exports.default = _default;
},{"./data":"src/data.js"}],"main.js":[function(require,module,exports) {
"use strict";

var _init = _interopRequireDefault(require("./src/init"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _init.default)();
},{"./src/init":"src/init.js"}],"C:/Users/GBoriss/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "10348" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/GBoriss/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map