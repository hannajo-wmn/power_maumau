// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"awEvQ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _validJs = require("./valid.js");
var _validJsDefault = parcelHelpers.interopDefault(_validJs);
console.log("I imported valid.js ", (0, _validJsDefault.default));
const suits = [
    "spades",
    "diamonds",
    "clubs",
    "hearts"
];
const values = [
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
];
/*
const valid = {
    "spades7": {
        "diamonds7": true,
        "diamonds7": true,
        "diamonds10": true,
    },
    "spades8": {
        "diamonds7": true,
        "diamonds7": true,
        "diamonds10": true,
    }
}

valid["spades7"]["diamonds10"]
*/ class Card {
    constructor(cardName, suit, value){
        this.cardName = cardName;
        this.suit = suit;
        this.value = value;
        this.path;
    }
}
class Game {
    constructor(){
        this.deck = [];
        this.hand1 = [];
        this.hand2 = [];
        this.openStack = [];
        this.hiddenStack = [];
        this.turn = null;
        this.topOfOpenStack = [];
    }
    // generateDeck() creates a deck-array with 32 card objects in it
    generateDeck() {
        for(let i = 0; i < suits.length; i++)for(let j = 0; j < values.length; j++)this.deck.push(new Card(suits[i] + values[j], suits[i], values[j]));
        for(let k = 0; k < this.deck.length; k++)this.deck[k].path = `/img/${this.deck[k].cardName}.png`;
    // console.log("This deck after generateDeck()")
    // console.log(JSON.parse(JSON.stringify(this.deck))) // makes a copy from this.deck after generating deck and logs the copy
    }
    // shuffles the deck with Durstenfeld Shuffle
    shuffleDeck(array) {
        for(let l = array.length - 1; l > 0; l--){
            let j = Math.floor(Math.random() * (l + 1));
            [array[l], array[j]] = [
                array[j],
                array[l]
            ];
        }
    }
    // distributes Deck into two sets of cards for players plus an open stack and a hidden stack
    dealCards(shuffledDeck) {
        this.hand1 = shuffledDeck.slice(0, 9);
        this.hand2 = shuffledDeck.slice(9, 18);
        this.openStack = [
            shuffledDeck[18]
        ];
        this.hiddenStack = shuffledDeck.slice(19);
        console.log("hand 1: " + JSON.stringify(this.hand1));
        console.log("hand 2: " + JSON.stringify(this.hand2));
        console.log("openStack: " + JSON.stringify(this.openStack));
        console.log("hiddenStack: " + JSON.stringify(this.hiddenStack));
    }
    // renders the initial set up
    renderGame(hand1, hand2, openStack) {
        hand1.forEach((card)=>{
            let div = document.createElement("DIV");
            div.setAttribute("class", "playercards");
            div.setAttribute("id", card.cardName);
            let img = document.createElement("IMG");
            img.src = card.path;
            div.appendChild(img);
            document.getElementById("hand1").appendChild(div);
        });
        hand2.forEach((card)=>{
            let div = document.createElement("DIV");
            div.setAttribute("class", "playercards");
            div.setAttribute("id", card.cardName);
            let img = document.createElement("IMG");
            img.src = card.path;
            div.appendChild(img);
            document.getElementById("hand2").appendChild(div);
        });
        openStack.forEach((card)=>{
            let div = document.createElement("DIV");
            div.setAttribute("class", "openStack");
            div.setAttribute("id", card.cardName);
            let img = document.createElement("IMG");
            img.src = card.path;
            div.appendChild(img);
            document.getElementById("openStack").appendChild(div);
        });
    }
    // little helper method for removing all appended children from an element
    removeAllChildNodes(parent) {
        if (parent === undefined) return;
        while(parent.firstChild)parent.removeChild(parent.firstChild);
    }
    getCard = (e)=>console.log(e.target.closest("div").id);
    // cleans deck and stack arrays, removes cards from the DOM
    cleanUp() {
        this.deck = [];
        this.hand1 = [];
        this.removeAllChildNodes(document.getElementById("hand1"));
        this.hand2 = [];
        this.removeAllChildNodes(document.getElementById("hand2"));
        this.openStack = [];
        this.removeAllChildNodes(document.getElementById("openStack"));
        this.hiddenStack = [];
        document.getElementById("hand1").removeEventListener("click", this.getCard);
        document.getElementById("hand2").removeEventListener("click", this.getCard);
    }
    determineBeginner() {
        let players = [
            "player1",
            "player2"
        ];
        var index = Math.floor(Math.random() * players.length);
        let chosenPlayer = players[index];
        this.turn = chosenPlayer;
        console.log(chosenPlayer, "begins.");
    }
    // Game setup routine: clean up, generate deck, shuffle, deal cards, render, determine beginner
    newGame() {
        this.cleanUp();
        this.generateDeck();
        this.shuffleDeck(this.deck);
        console.log(JSON.parse(JSON.stringify(this.deck)));
        this.dealCards(this.deck);
        this.renderGame(this.hand1, this.hand2, this.openStack, this.hiddenStack);
        document.getElementById("hand1").addEventListener("click", this.getCard);
        document.getElementById("hand2").addEventListener("click", this.getCard);
        this.determineBeginner();
    }
    checkLegitimacy(discardCard, topOfOpenStack) {
        if ((0, _validJsDefault.default)[discardCard][topOfOpenStack]) return true;
    }
    discardCard(cardId) {
        // checkLegitimacy()
        const index = this.hand1.findIndex((element)=>element.cardName === cardId);
        console.log("Index in hand1 is: ", index);
        const card = this.hand1.splice(index, 1);
        console.log("Card Object is: ", JSON.stringify(card));
        console.log("Open Stack before push is: ", JSON.stringify(this.openStack));
        this.openStack.push(card[0]);
        console.log("Open Stack after pushing is: ", JSON.stringify(this.openStack));
        this.topOfOpenStack = this.openStack[this.openStack.length - 1];
        console.log("The top of open Stack is now: ", JSON.stringify(this.topOfOpenStack));
    // remove Card DIVs from DOM
    // this.renderGame(this.hand1, this.hand2, this.openStack, this.hiddenStack)
    }
}
const newGame = new Game();
console.log(newGame.deck);
document.getElementById("btnNewGame").addEventListener("click", ()=>newGame.newGame());

},{"./valid.js":"2xjKo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2xjKo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const valid = {
    // SPADES
    "spades7": {
        "spades7": true,
        "spadesQ": true,
        "diamonds7": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true
    },
    "spades8": {
        "spades9": true,
        "spades10": true,
        "diamonds9": true,
        "diamonds10": true,
        "clubs9": true,
        "clubs10": true,
        "hearts9": true,
        "hearts20": true
    },
    "spades9": {
        "spades8": true,
        "spades9": true,
        "spades10": true,
        "diamonds9": true,
        "clubs9": true,
        "hearts9": true,
        "spadesJ": true,
        "diamondsJ": true,
        "clubsJ": true,
        "heartsJ": true,
        "spades7": true,
        "spadesQ": true,
        "spadesK": true,
        "spadesA": true
    },
    "spades10": {
        "spades7": true,
        "spades8": true,
        "spades9": true,
        "spades10": true,
        "diamonds10": true,
        "clubs10": true,
        "hearts10": true,
        "spadesJ": true,
        "diamondsJ": true,
        "clubsJ": true,
        "heartsJ": true,
        "spadesQ": true,
        "spadesK": true,
        "spadesA": true
    },
    "spadesJ": {
    },
    "spadesQ": {
        "spades7": true,
        "spadesQ": true,
        "diamonds7": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true
    },
    "spadesK": {
        "spades8": true,
        "spades7": true,
        "spades8": true,
        "spades9": true,
        "spades10": true,
        "spadesJ": true,
        "spadesQ": true,
        "spadesK": true,
        "spadesA": true
    },
    "spadesA": {
        "spades8": true,
        "spades7": true,
        "spades8": true,
        "spades9": true,
        "spades10": true,
        "spadesJ": true,
        "spadesQ": true,
        "spadesK": true,
        "spadesA": true
    },
    // DIAMONDS
    "diamonds7": {
        "spades7": true,
        "spadesQ": true,
        "diamonds7": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true
    },
    "diamonds8": {
        "spades9": true,
        "spades10": true,
        "diamonds9": true,
        "diamonds10": true,
        "clubs9": true,
        "clubs10": true,
        "hearts9": true,
        "hearts10": true
    },
    "diamonds9": {
        "diamonds8": true,
        "diamonds9": true,
        "diamonds10": true,
        "spades9": true,
        "clubs9": true,
        "hearts9": true,
        "spadesJ": true,
        "diamondsJ": true,
        "clubsJ": true,
        "heartsJ": true,
        "diamonds7": true,
        "diamondsQ": true,
        "diamondsK": true,
        "diamondsA": true
    },
    "diamonds10": {
        "diamonds8": true,
        "diamonds9": true,
        "diamonds10": true,
        "spades10": true,
        "clubs10": true,
        "hearts10": true,
        "spadesJ": true,
        "diamondsJ": true,
        "clubsJ": true,
        "heartsJ": true,
        "diamonds7": true,
        "diamondsQ": true,
        "diamondsK": true,
        "diamondsA": true
    },
    "diamondsJ": {
    },
    "diamondsQ": {
        "spades7": true,
        "spadesQ": true,
        "diamonds7": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true
    },
    "diamondsK": {
        "diamonds7": true,
        "diamonds8": true,
        "diamonds9": true,
        "diamonds10": true,
        "diamondsJ": true,
        "diamonsQ": true,
        "diamondsK": true,
        "diamondsA": true
    },
    "diamondsA": {
        "diamonds7": true,
        "diamonds8": true,
        "diamonds9": true,
        "diamonds10": true,
        "diamondsJ": true,
        "diamonsQ": true,
        "diamondsK": true,
        "diamondsA": true
    },
    // CLUBS
    "clubs7": {
        "spades7": true,
        "spadesQ": true,
        "diamonds7": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true
    },
    "clubs8": {
        "spades9": true,
        "spades10": true,
        "diamonds9": true,
        "diamonds10": true,
        "clubs9": true,
        "clubs10": true,
        "hearts9": true,
        "hearts10": true
    },
    "clubs9": {
        "clubs8": true,
        "clubs9": true,
        "diamonds9": true,
        "spades9": true,
        "hearts9": true,
        "spadesJ": true,
        "diamondsJ": true,
        "clubsJ": true,
        "heartsJ": true,
        "clubs7": true,
        "clubsQ": true,
        "clubsK": true,
        "clubsA": true
    },
    "clubs10": {
        "clubs8": true,
        "clubs9": true,
        "clubs10": true,
        "spades10": true,
        "diamonds10": true,
        "hearts10": true,
        "spadesJ": true,
        "diamondsJ": true,
        "clubsJ": true,
        "heartsJ": true,
        "clubs7": true,
        "clubsQ": true,
        "clubsK": true,
        "clubsA": true
    },
    "clubsJ": {
    },
    "clubsQ": {
        "spades7": true,
        "spadesQ": true,
        "diamonds7": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true
    },
    "clubsK": {
        "clubs7": true,
        "clubs8": true,
        "clubs9": true,
        "clubs10": true,
        "clubsJ": true,
        "clubsQ": true,
        "clubsK": true,
        "clubsA": true
    },
    "clubsA": {
        "clubs7": true,
        "clubs8": true,
        "clubs9": true,
        "clubs10": true,
        "clubsJ": true,
        "clubsQ": true,
        "clubsK": true,
        "clubsA": true
    },
    // HEARTS
    "hearts7": {
        "spades7": true,
        "spadesQ": true,
        "diamonds7": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true
    },
    "hearts8": {
        "spades9": true,
        "spades10": true,
        "diamonds9": true,
        "diamonds10": true,
        "clubs9": true,
        "clubs10": true,
        "hearts9": true,
        "hearts10": true
    },
    "hearts9": {
        "hearts7": true,
        "hearts8": true,
        "hearts9": true,
        "hearts10": true,
        "clubs9": true,
        "diamonds9": true,
        "spades9": true,
        "spadesJ": true,
        "diamondsJ": true,
        "clubsJ": true,
        "heartsJ": true,
        "heartsQ": true,
        "heartsK": true,
        "heartsA": true
    },
    "hearts10": {
        "hearts7": true,
        "hearts8": true,
        "hearts9": true,
        "hearts10": true,
        "clubs10": true,
        "spades10": true,
        "diamonds10": true,
        "spadesJ": true,
        "diamondsJ": true,
        "clubsJ": true,
        "heartsJ": true,
        "heartsQ": true,
        "heartsK": true,
        "heartsA": true
    },
    "heartsJ": {
    },
    "heartsQ": {
        "spades7": true,
        "spadesQ": true,
        "diamonds7": true,
        "diamondsQ": true,
        "clubs7": true,
        "clubsQ": true,
        "hearts7": true,
        "heartsQ": true
    },
    "heartsK": {
        "hearts7": true,
        "hearts8": true,
        "hearts9": true,
        "hearts10": true,
        "heartsJ": true,
        "heartsQ": true,
        "heartsK": true,
        "heartsA": true
    },
    "heartsA": {
        "hearts7": true,
        "hearts8": true,
        "hearts9": true,
        "hearts10": true,
        "heartsJ": true,
        "heartsQ": true,
        "heartsK": true,
        "heartsA": true
    }
};
exports.default = valid;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["awEvQ","bB7Pu"], "bB7Pu", "parcelRequire94c2")

//# sourceMappingURL=index.3d214d75.js.map
