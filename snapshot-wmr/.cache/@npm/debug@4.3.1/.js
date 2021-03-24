import e from"/@npm/ms@2.1.2";"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var common=function(t){function createDebug(e){let t,r=null;function debug(...e){if(!debug.enabled)return;const r=debug,n=Number(new Date),o=n-(t||n);r.diff=o,r.prev=t,r.curr=n,t=n,e[0]=createDebug.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(t,n)=>{if("%%"===t)return"%";a++;const o=createDebug.formatters[n];if("function"==typeof o){const n=e[a];t=o.call(r,n),e.splice(a,1),a--}return t}),createDebug.formatArgs.call(r,e);(r.log||createDebug.log).apply(r,e)}return debug.namespace=e,debug.useColors=createDebug.useColors(),debug.color=createDebug.selectColor(e),debug.extend=extend,debug.destroy=createDebug.destroy,Object.defineProperty(debug,"enabled",{enumerable:!0,configurable:!1,get:()=>null===r?createDebug.enabled(e):r,set:e=>{r=e}}),"function"==typeof createDebug.init&&createDebug.init(debug),debug}function extend(e,t){const r=createDebug(this.namespace+(void 0===t?":":t)+e);return r.log=this.log,r}function toNamespace(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return createDebug.debug=createDebug,createDebug.default=createDebug,createDebug.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},createDebug.disable=function(){const e=[...createDebug.names.map(toNamespace),...createDebug.skips.map(toNamespace).map(e=>"-"+e)].join(",");return createDebug.enable(""),e},createDebug.enable=function(e){let t;createDebug.save(e),createDebug.names=[],createDebug.skips=[];const r=("string"==typeof e?e:"").split(/[\s,]+/),n=r.length;for(t=0;t<n;t++)r[t]&&("-"===(e=r[t].replace(/\*/g,".*?"))[0]?createDebug.skips.push(new RegExp("^"+e.substr(1)+"$")):createDebug.names.push(new RegExp("^"+e+"$")))},createDebug.enabled=function(e){if("*"===e[e.length-1])return!0;let t,r;for(t=0,r=createDebug.skips.length;t<r;t++)if(createDebug.skips[t].test(e))return!1;for(t=0,r=createDebug.names.length;t<r;t++)if(createDebug.names[t].test(e))return!0;return!1},createDebug.humanize=e,createDebug.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(t).forEach(e=>{createDebug[e]=t[e]}),createDebug.names=[],createDebug.skips=[],createDebug.formatters={},createDebug.selectColor=function(e){let t=0;for(let r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r),t|=0;return createDebug.colors[Math.abs(t)%createDebug.colors.length]},createDebug.enable(createDebug.load()),createDebug},t=function(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&r.path)}},r.exports),r.exports}((function(e,t){t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const r="color: "+this.color;t.splice(1,0,r,"color: inherit");let n=0,o=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(n++,"%c"===e&&(o=n))}),t.splice(o,0,r)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(r){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(r){}0;return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=common(t);const{formatters:r}=e.exports;r.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}}}));export default t;