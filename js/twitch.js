!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.video=e():(t.Twitch=t.Twitch||{},t.Twitch.video=e())}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}function o(t){return t&&t.__esModule?t:{"default":t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t){return(0,c["default"])(t)?document.getElementById(t):t}Object.defineProperty(e,"__esModule",{value:!0}),e.PlayerEmbed=void 0;var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(1),c=o(a),f=n(4),l=r(f),h=e.PlayerEmbed=function(){function t(e,n){i(this,t),this._bridge=new l.EmbedClient(u(e),n)}return s(t,[{key:"play",value:function(){this._bridge.callPlayerMethod(l.METHOD_PLAY)}},{key:"pause",value:function(){this._bridge.callPlayerMethod(l.METHOD_PAUSE)}},{key:"seek",value:function(t){this._bridge.callPlayerMethod(l.METHOD_SEEK,t)}},{key:"setVolume",value:function(t){this._bridge.callPlayerMethod(l.METHOD_SET_VOLUME,t)}},{key:"setMuted",value:function(t){this._bridge.callPlayerMethod(l.METHOD_SET_MUTE,t)}},{key:"setChannel",value:function(t){this._bridge.callPlayerMethod(l.METHOD_SET_CHANNEL,t)}},{key:"setCollection",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this._bridge.callPlayerMethod(l.METHOD_SET_COLLECTION,t,e)}},{key:"setVideo",value:function(t){this._bridge.callPlayerMethod(l.METHOD_SET_VIDEO,t)}},{key:"setQuality",value:function(t){this._bridge.callPlayerMethod(l.METHOD_SET_QUALITY,t)}},{key:"setWidth",value:function(t){this._bridge.setWidth(t)}},{key:"setHeight",value:function(t){this._bridge.setHeight(t)}},{key:"addEventListener",value:function(t,e){this._bridge.addEventListener(t,e)}},{key:"removeEventListener",value:function(t,e){this._bridge.removeEventListener(t,e)}},{key:"getChannel",value:function(){return this._bridge.getPlayerState().channelName}},{key:"getCurrentTime",value:function(){return this._bridge.getPlayerState().currentTime}},{key:"getDuration",value:function(){return this._bridge.getPlayerState().duration}},{key:"getEnded",value:function(){return this._bridge.getPlayerState().playback===l.PLAYBACK_ENDED}},{key:"getMuted",value:function(){return this._bridge.getPlayerState().muted}},{key:"getPlaybackStats",value:function(){return this._bridge.getStoreState().stats.videoStats}},{key:"isPaused",value:function(){return this._bridge.getPlayerState().playback===l.PLAYBACK_PAUSED}},{key:"getQuality",value:function(){return this._bridge.getPlayerState().quality}},{key:"getQualities",value:function(){return this._bridge.getPlayerState().qualitiesAvailable}},{key:"getViewers",value:function(){return this._bridge.getStoreState().viewercount}},{key:"getVideo",value:function(){return this._bridge.getPlayerState().videoID}},{key:"getVolume",value:function(){return this._bridge.getPlayerState().volume}},{key:"destroy",value:function(){this._bridge.destroy()}}],[{key:"READY",get:function(){return l.EVENT_EMBED_READY}},{key:"PLAY",get:function(){return l.EVENT_EMBED_PLAY}},{key:"PAUSE",get:function(){return l.EVENT_EMBED_PAUSE}},{key:"ENDED",get:function(){return l.EVENT_EMBED_ENDED}},{key:"ONLINE",get:function(){return l.EVENT_EMBED_ONLINE}},{key:"OFFLINE",get:function(){return l.EVENT_EMBED_OFFLINE}}]),t}();window.Twitch=window.Twitch||{},window.Twitch.Player=h},function(t,e,n){function r(t){return"string"==typeof t||!o(t)&&i(t)&&a.call(t)==u}var o=n(2),i=n(3),u="[object String]",s=Object.prototype,a=s.toString;t.exports=r},function(t,e){var n=Array.isArray;t.exports=n},function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t){var e=(0,v.toString)((0,f["default"])(t,"width","height")),n=d+"/?"+e,r=document.createElement("iframe");return r.setAttribute("src",n),t.allowfullscreen!==!1&&r.setAttribute("allowfullscreen",""),t.width&&r.setAttribute("width",t.width),t.height&&r.setAttribute("height",t.height),r.setAttribute("frameBorder","0"),r.setAttribute("scrolling","no"),r}Object.defineProperty(e,"__esModule",{value:!0}),e.EmbedClient=e.PLAYBACK_ENDED=e.PLAYBACK_PLAYING=e.PLAYBACK_PAUSED=e.BRIDGE_CLIENT_NAMESPACE=e.BRIDGE_HOST_NAMESPACE=e.BRIDGE_DOCUMENT_EVENT=e.BRIDGE_PLAYER_EVENT=e.BRIDGE_STORE_STATE_UPDATE=e.BRIDGE_STATE_UPDATE=e.BRIDGE_HOST_READY=e.BRIDGE_REQ_SUBSCRIBE=e.METHOD_DESTROY=e.METHOD_SET_VOLUME=e.METHOD_SET_MUTE=e.METHOD_SET_QUALITY=e.METHOD_SEEK=e.METHOD_SET_COLLECTION=e.METHOD_SET_VIDEO=e.METHOD_SET_CHANNEL=e.METHOD_PAUSE=e.METHOD_PLAY=e.EVENT_EMBED_VIEWERS_CHANGE=e.EVENT_EMBED_OFFLINE=e.EVENT_EMBED_ONLINE=e.EVENT_EMBED_ENDED=e.EVENT_EMBED_PAUSE=e.EVENT_EMBED_PLAY=e.EVENT_EMBED_READY=void 0;var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(5),a=r(s),c=n(8),f=r(c),l=n(97),h=r(l),p=n(98),v=n(99),_=n(100),d=function(){var t="https://player.twitch.tv";if(document.currentScript)t=document.currentScript.src;else{var e=Array.prototype.filter.call(document.scripts,function(t){return/twitch\.tv.*embed/.test(t.src)});t=e.length>0?e[0].src:document.scripts[document.scripts.length-1].src}var n=(0,p.parseUri)(t);return n.protocol+"://"+n.authority}(),y=15e3,E={channelName:"",currentTime:0,duration:0,muted:!1,playback:"",quality:"",qualitiesAvailable:[],stats:{},videoID:"",viewers:0,volume:0},g=e.EVENT_EMBED_READY="ready",b=(e.EVENT_EMBED_PLAY="play",e.EVENT_EMBED_PAUSE="pause",e.EVENT_EMBED_ENDED="ended",e.EVENT_EMBED_ONLINE="online",e.EVENT_EMBED_OFFLINE="offline",e.EVENT_EMBED_VIEWERS_CHANGE="viewerschange",e.METHOD_PLAY="play",e.METHOD_PAUSE="pause",e.METHOD_SET_CHANNEL="channel",e.METHOD_SET_VIDEO="video",e.METHOD_SET_COLLECTION="collection",e.METHOD_SEEK="seek",e.METHOD_SET_QUALITY="quality",e.METHOD_SET_MUTE="mute",e.METHOD_SET_VOLUME="volume",e.METHOD_DESTROY="destroy"),m=e.BRIDGE_REQ_SUBSCRIBE="subscribe",T=e.BRIDGE_HOST_READY="ready",A=e.BRIDGE_STATE_UPDATE="bridgestateupdate",O=e.BRIDGE_STORE_STATE_UPDATE="bridgestorestateupdate",x=e.BRIDGE_PLAYER_EVENT="bridgeplayerevent",w=(e.BRIDGE_DOCUMENT_EVENT="bridgedocumentevent",e.BRIDGE_HOST_NAMESPACE="player.embed.host"),S=e.BRIDGE_CLIENT_NAMESPACE="player.embed.client";e.PLAYBACK_PAUSED="paused",e.PLAYBACK_PLAYING="playing",e.PLAYBACK_ENDED="ended",e.EmbedClient=function(){function t(e,n){o(this,t),this._eventEmitter=new h["default"],this._playerState=E,this._storeState={},this._onHostReady=this._getHostReady(),this._iframe=i(n),e.appendChild(this._iframe),this._host=this._iframe.contentWindow,this._send(m)}return u(t,[{key:"destroy",value:function(){this.callPlayerMethod(b),this._iframe.parentNode.removeChild(this._iframe)}},{key:"_getHostReady",value:function(){var t=this;return new _.Promise(function(e,n){function r(t){this._isClientMessage(t)&&t.data.method===T&&(window.removeEventListener("message",o),window.addEventListener("message",this),this._eventEmitter.emit(g),e())}var o=r.bind(t);window.addEventListener("message",o),setTimeout(n,y)})}},{key:"_send",value:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o={namespace:w,method:t,args:n};this._host.postMessage(o,"*")}},{key:"_deferSend",value:function(){for(var t=this,e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];this._onHostReady.then(function(){return t._send.apply(t,n)})}},{key:"_isClientMessage",value:function(t){return Boolean(t.data)&&t.data.namespace===S&&t.source===this._iframe.contentWindow}},{key:"handleEvent",value:function(t){if(this._isClientMessage(t))switch(t.data.method){case A:this._playerState=t.data.args[0];break;case x:this._eventEmitter.emit(t.data.args[0]);break;case O:this._storeState=t.data.args[0]}}},{key:"getPlayerState",value:function(){return this._playerState}},{key:"getStoreState",value:function(){return this._storeState}},{key:"addEventListener",value:function(t,e){this._eventEmitter.on(t,e)}},{key:"removeEventListener",value:function(t,e){this._eventEmitter.off(t,e)}},{key:"callPlayerMethod",value:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];this._deferSend.apply(this,[t].concat(n))}},{key:"setWidth",value:function(t){(0,a["default"])(t)&&t>=0&&this._iframe.setAttribute("width",t)}},{key:"setHeight",value:function(t){(0,a["default"])(t)&&t>=0&&this._iframe.setAttribute("height",t)}}]),t}()},function(t,e,n){function r(t){return"number"==typeof t&&i(t)}var o=n(6),i=o.isFinite;t.exports=r},function(t,e,n){var r=n(7),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,function(){return this}())},function(t,e,n){var r=n(9),o=n(10),i=n(54),u=n(58),s=n(73),a=n(95),c=u(function(t,e){return null==t?{}:(e=r(e,a),i(t,o(s(t),e)))});t.exports=c},function(t,e){function n(t,e){for(var n=-1,r=t?t.length:0,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}t.exports=n},function(t,e,n){function r(t,e,n,r){var l=-1,h=i,p=!0,v=t.length,_=[],d=e.length;if(!v)return _;n&&(e=s(e,a(n))),r?(h=u,p=!1):e.length>=f&&(h=c,p=!1,e=new o(e));t:for(;++l<v;){var y=t[l],E=n?n(y):y;if(y=r||0!==y?y:0,p&&E===E){for(var g=d;g--;)if(e[g]===E)continue t;_.push(y)}else h(e,E,r)||_.push(y)}return _}var o=n(11),i=n(46),u=n(51),s=n(9),a=n(52),c=n(53),f=200;t.exports=r},function(t,e,n){function r(t){var e=-1,n=t?t.length:0;for(this.__data__=new o;++e<n;)this.add(t[e])}var o=n(12),i=n(44),u=n(45);r.prototype.add=r.prototype.push=i,r.prototype.has=u,t.exports=r},function(t,e,n){function r(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(13),i=n(38),u=n(41),s=n(42),a=n(43);r.prototype.clear=o,r.prototype["delete"]=i,r.prototype.get=u,r.prototype.has=s,r.prototype.set=a,t.exports=r},function(t,e,n){function r(){this.size=0,this.__data__={hash:new o,map:new(u||i),string:new o}}var o=n(14),i=n(29),u=n(37);t.exports=r},function(t,e,n){function r(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(15),i=n(25),u=n(26),s=n(27),a=n(28);r.prototype.clear=o,r.prototype["delete"]=i,r.prototype.get=u,r.prototype.has=s,r.prototype.set=a,t.exports=r},function(t,e,n){function r(){this.__data__=o?o(null):{},this.size=0}var o=n(16);t.exports=r},function(t,e,n){var r=n(17),o=r(Object,"create");t.exports=o},function(t,e,n){function r(t,e){var n=i(t,e);return o(n)?n:void 0}var o=n(18),i=n(24);t.exports=r},function(t,e,n){function r(t){if(!u(t)||i(t))return!1;var e=o(t)?v:c;return e.test(s(t))}var o=n(19),i=n(21),u=n(20),s=n(23),a=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,f=Function.prototype,l=Object.prototype,h=f.toString,p=l.hasOwnProperty,v=RegExp("^"+h.call(p).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},function(t,e,n){function r(t){var e=o(t)?c.call(t):"";return e==i||e==u||e==s}var o=n(20),i="[object Function]",u="[object GeneratorFunction]",s="[object Proxy]",a=Object.prototype,c=a.toString;t.exports=r},function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},function(t,e,n){function r(t){return!!i&&i in t}var o=n(22),i=function(){var t=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();t.exports=r},function(t,e,n){var r=n(6),o=r["__core-js_shared__"];t.exports=o},function(t,e){function n(t){if(null!=t){try{return o.call(t)}catch(e){}try{return t+""}catch(e){}}return""}var r=Function.prototype,o=r.toString;t.exports=n},function(t,e){function n(t,e){return null==t?void 0:t[e]}t.exports=n},function(t,e){function n(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}t.exports=n},function(t,e,n){function r(t){var e=this.__data__;if(o){var n=e[t];return n===i?void 0:n}return s.call(e,t)?e[t]:void 0}var o=n(16),i="__lodash_hash_undefined__",u=Object.prototype,s=u.hasOwnProperty;t.exports=r},function(t,e,n){function r(t){var e=this.__data__;return o?void 0!==e[t]:u.call(e,t)}var o=n(16),i=Object.prototype,u=i.hasOwnProperty;t.exports=r},function(t,e,n){function r(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=o&&void 0===e?i:e,this}var o=n(16),i="__lodash_hash_undefined__";t.exports=r},function(t,e,n){function r(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}var o=n(30),i=n(31),u=n(34),s=n(35),a=n(36);r.prototype.clear=o,r.prototype["delete"]=i,r.prototype.get=u,r.prototype.has=s,r.prototype.set=a,t.exports=r},function(t,e){function n(){this.__data__=[],this.size=0}t.exports=n},function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():u.call(e,n,1),--this.size,!0}var o=n(32),i=Array.prototype,u=i.splice;t.exports=r},function(t,e,n){function r(t,e){for(var n=t.length;n--;)if(o(t[n][0],e))return n;return-1}var o=n(33);t.exports=r},function(t,e){function n(t,e){return t===e||t!==t&&e!==e}t.exports=n},function(t,e,n){function r(t){var e=this.__data__,n=o(e,t);return n<0?void 0:e[n][1]}var o=n(32);t.exports=r},function(t,e,n){function r(t){return o(this.__data__,t)>-1}var o=n(32);t.exports=r},function(t,e,n){function r(t,e){var n=this.__data__,r=o(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}var o=n(32);t.exports=r},function(t,e,n){var r=n(17),o=n(6),i=r(o,"Map");t.exports=i},function(t,e,n){function r(t){var e=o(this,t)["delete"](t);return this.size-=e?1:0,e}var o=n(39);t.exports=r},function(t,e,n){function r(t,e){var n=t.__data__;return o(e)?n["string"==typeof e?"string":"hash"]:n.map}var o=n(40);t.exports=r},function(t,e){function n(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}t.exports=n},function(t,e,n){function r(t){return o(this,t).get(t)}var o=n(39);t.exports=r},function(t,e,n){function r(t){return o(this,t).has(t)}var o=n(39);t.exports=r},function(t,e,n){function r(t,e){var n=o(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}var o=n(39);t.exports=r},function(t,e){function n(t){return this.__data__.set(t,r),this}var r="__lodash_hash_undefined__";t.exports=n},function(t,e){function n(t){return this.__data__.has(t)}t.exports=n},function(t,e,n){function r(t,e){var n=t?t.length:0;return!!n&&o(t,e,0)>-1}var o=n(47);t.exports=r},function(t,e,n){function r(t,e,n){return e===e?u(t,e,n):o(t,i,n)}var o=n(48),i=n(49),u=n(50);t.exports=r},function(t,e){function n(t,e,n,r){for(var o=t.length,i=n+(r?1:-1);r?i--:++i<o;)if(e(t[i],i,t))return i;return-1}t.exports=n},function(t,e){function n(t){return t!==t}t.exports=n},function(t,e){function n(t,e,n){for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}t.exports=n},function(t,e){function n(t,e,n){for(var r=-1,o=t?t.length:0;++r<o;)if(n(e,t[r]))return!0;return!1}t.exports=n},function(t,e){function n(t){return function(e){return t(e)}}t.exports=n},function(t,e){function n(t,e){return t.has(e)}t.exports=n},function(t,e,n){function r(t,e){return t=Object(t),o(t,e,function(e,n){return n in t})}var o=n(55);t.exports=r},function(t,e,n){function r(t,e,n){for(var r=-1,i=e.length,u={};++r<i;){var s=e[r],a=t[s];n(a,s)&&o(u,s,a)}return u}var o=n(56);t.exports=r},function(t,e,n){function r(t,e,n){"__proto__"==e&&o?o(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var o=n(57);t.exports=r},function(t,e,n){var r=n(17),o=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();t.exports=o},function(t,e,n){function r(t){return u(i(t,void 0,o),t+"")}var o=n(59),i=n(66),u=n(68);t.exports=r},function(t,e,n){function r(t){var e=t?t.length:0;return e?o(t,1):[]}var o=n(60);t.exports=r},function(t,e,n){function r(t,e,n,u,s){var a=-1,c=t.length;for(n||(n=i),s||(s=[]);++a<c;){var f=t[a];e>0&&n(f)?e>1?r(f,e-1,n,u,s):o(s,f):u||(s[s.length]=f)}return s}var o=n(61),i=n(62);t.exports=r},function(t,e){function n(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}t.exports=n},function(t,e,n){function r(t){return u(t)||i(t)||!!(s&&t&&t[s])}var o=n(63),i=n(64),u=n(2),s=o?o.isConcatSpreadable:void 0;t.exports=r},function(t,e,n){var r=n(6),o=r.Symbol;t.exports=o},function(t,e,n){var r=n(65),o=n(3),i=Object.prototype,u=i.hasOwnProperty,s=i.propertyIsEnumerable,a=r(function(){return arguments}())?r:function(t){return o(t)&&u.call(t,"callee")&&!s.call(t,"callee")};t.exports=a},function(t,e,n){function r(t){return o(t)&&s.call(t)==i}var o=n(3),i="[object Arguments]",u=Object.prototype,s=u.toString;t.exports=r},function(t,e,n){function r(t,e,n){return e=i(void 0===e?t.length-1:e,0),function(){for(var r=arguments,u=-1,s=i(r.length-e,0),a=Array(s);++u<s;)a[u]=r[e+u];u=-1;for(var c=Array(e+1);++u<e;)c[u]=r[u];return c[e]=n(a),o(t,this,c)}}var o=n(67),i=Math.max;t.exports=r},function(t,e){function n(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}t.exports=n},function(t,e,n){var r=n(69),o=n(72),i=o(r);t.exports=i},function(t,e,n){var r=n(70),o=n(57),i=n(71),u=o?function(t,e){return o(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:i;t.exports=u},function(t,e){function n(t){return function(){return t}}t.exports=n},function(t,e){function n(t){return t}t.exports=n},function(t,e){function n(t){var e=0,n=0;return function(){var u=i(),s=o-(u-n);if(n=u,s>0){if(++e>=r)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var r=500,o=16,i=Date.now;t.exports=n},function(t,e,n){function r(t){return o(t,u,i)}var o=n(74),i=n(75),u=n(80);t.exports=r},function(t,e,n){function r(t,e,n){var r=e(t);return i(t)?r:o(r,n(t))}var o=n(61),i=n(2);t.exports=r},function(t,e,n){var r=n(61),o=n(76),i=n(78),u=n(79),s=Object.getOwnPropertySymbols,a=s?function(t){for(var e=[];t;)r(e,i(t)),t=o(t);return e}:u;t.exports=a},function(t,e,n){var r=n(77),o=r(Object.getPrototypeOf,Object);t.exports=o},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},function(t,e,n){var r=n(77),o=n(79),i=Object.getOwnPropertySymbols,u=i?r(i,Object):o;t.exports=u},function(t,e){function n(){return[]}t.exports=n},function(t,e,n){function r(t){return u(t)?o(t,!0):i(t)}var o=n(81),i=n(91),u=n(94);t.exports=r},function(t,e,n){function r(t,e){var n=u(t),r=!n&&i(t),f=!n&&!r&&s(t),h=!n&&!r&&!f&&c(t),p=n||r||f||h,v=p?o(t.length,String):[],_=v.length;for(var d in t)!e&&!l.call(t,d)||p&&("length"==d||f&&("offset"==d||"parent"==d)||h&&("buffer"==d||"byteLength"==d||"byteOffset"==d)||a(d,_))||v.push(d);return v}var o=n(82),i=n(64),u=n(2),s=n(83),a=n(86),c=n(87),f=Object.prototype,l=f.hasOwnProperty;t.exports=r},function(t,e){function n(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}t.exports=n},function(t,e,n){(function(t){var r=n(6),o=n(85),i="object"==typeof e&&e&&!e.nodeType&&e,u=i&&"object"==typeof t&&t&&!t.nodeType&&t,s=u&&u.exports===i,a=s?r.Buffer:void 0,c=a?a.isBuffer:void 0,f=c||o;t.exports=f}).call(e,n(84)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){function n(){return!1}t.exports=n},function(t,e){function n(t,e){return e=null==e?r:e,!!e&&("number"==typeof t||o.test(t))&&t>-1&&t%1==0&&t<e}var r=9007199254740991,o=/^(?:0|[1-9]\d*)$/;t.exports=n},function(t,e,n){var r=n(88),o=n(52),i=n(90),u=i&&i.isTypedArray,s=u?o(u):r;t.exports=s},function(t,e,n){function r(t){return i(t)&&o(t.length)&&!!M[L.call(t)]}var o=n(89),i=n(3),u="[object Arguments]",s="[object Array]",a="[object Boolean]",c="[object Date]",f="[object Error]",l="[object Function]",h="[object Map]",p="[object Number]",v="[object Object]",_="[object RegExp]",d="[object Set]",y="[object String]",E="[object WeakMap]",g="[object ArrayBuffer]",b="[object DataView]",m="[object Float32Array]",T="[object Float64Array]",A="[object Int8Array]",O="[object Int16Array]",x="[object Int32Array]",w="[object Uint8Array]",S="[object Uint8ClampedArray]",D="[object Uint16Array]",P="[object Uint32Array]",M={};M[m]=M[T]=M[A]=M[O]=M[x]=M[w]=M[S]=M[D]=M[P]=!0,M[u]=M[s]=M[g]=M[a]=M[b]=M[c]=M[f]=M[l]=M[h]=M[p]=M[v]=M[_]=M[d]=M[y]=M[E]=!1;var j=Object.prototype,L=j.toString;t.exports=r},function(t,e){function n(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}var r=9007199254740991;t.exports=n},function(t,e,n){(function(t){var r=n(7),o="object"==typeof e&&e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,u=i&&i.exports===o,s=u&&r.process,a=function(){try{return s&&s.binding("util")}catch(t){}}();t.exports=a}).call(e,n(84)(t))},function(t,e,n){function r(t){if(!o(t))return u(t);var e=i(t),n=[];for(var r in t)("constructor"!=r||!e&&a.call(t,r))&&n.push(r);return n}var o=n(20),i=n(92),u=n(93),s=Object.prototype,a=s.hasOwnProperty;t.exports=r},function(t,e){function n(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||r;return t===n}var r=Object.prototype;t.exports=n},function(t,e){function n(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}t.exports=n},function(t,e,n){function r(t){return null!=t&&i(t.length)&&!o(t)}var o=n(19),i=n(89);t.exports=r},function(t,e,n){function r(t){if("string"==typeof t||o(t))return t;var e=t+"";return"0"==e&&1/t==-i?"-0":e}var o=n(96),i=1/0;t.exports=r},function(t,e,n){function r(t){return"symbol"==typeof t||o(t)&&s.call(t)==i}var o=n(3),i="[object Symbol]",u=Object.prototype,s=u.toString;t.exports=r},function(t,e,n){var r;(function(){"use strict";function e(){}function o(t,e){for(var n=t.length;n--;)if(t[n].listener===e)return n;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var u=e.prototype,s=this,a=s.EventEmitter;u.getListeners=function(t){var e,n,r=this._getEvents();if(t instanceof RegExp){e={};for(n in r)r.hasOwnProperty(n)&&t.test(n)&&(e[n]=r[n])}else e=r[t]||(r[t]=[]);return e},u.flattenListeners=function(t){var e,n=[];for(e=0;e<t.length;e+=1)n.push(t[e].listener);return n},u.getListenersAsObject=function(t){var e,n=this.getListeners(t);return n instanceof Array&&(e={},e[t]=n),e||n},u.addListener=function(t,e){var n,r=this.getListenersAsObject(t),i="object"==typeof e;for(n in r)r.hasOwnProperty(n)&&o(r[n],e)===-1&&r[n].push(i?e:{listener:e,once:!1});return this},u.on=i("addListener"),u.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},u.once=i("addOnceListener"),u.defineEvent=function(t){return this.getListeners(t),this},u.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},u.removeListener=function(t,e){var n,r,i=this.getListenersAsObject(t);for(r in i)i.hasOwnProperty(r)&&(n=o(i[r],e),n!==-1&&i[r].splice(n,1));return this},u.off=i("removeListener"),u.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},u.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},u.manipulateListeners=function(t,e,n){var r,o,i=t?this.removeListener:this.addListener,u=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(r=n.length;r--;)i.call(this,e,n[r]);else for(r in e)e.hasOwnProperty(r)&&(o=e[r])&&("function"==typeof o?i.call(this,r,o):u.call(this,r,o));return this},u.removeEvent=function(t){var e,n=typeof t,r=this._getEvents();if("string"===n)delete r[t];else if(t instanceof RegExp)for(e in r)r.hasOwnProperty(e)&&t.test(e)&&delete r[e];else delete this._events;return this},u.removeAllListeners=i("removeEvent"),u.emitEvent=function(t,e){var n,r,o,i,u,s=this.getListenersAsObject(t);for(i in s)if(s.hasOwnProperty(i))for(n=s[i].slice(0),o=n.length;o--;)r=n[o],r.once===!0&&this.removeListener(t,r.listener),u=r.listener.apply(this,e||[]),u===this._getOnceReturnValue()&&this.removeListener(t,r.listener);return this},u.trigger=i("emitEvent"),u.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},u.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},u._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},u._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return s.EventEmitter=a,e},r=function(){return e}.call(s,n,s,t),!(void 0!==r&&(t.exports=r))}).call(this)},function(t,e){"use strict";function n(t){for(var e={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},n=e.parser[e.strictMode?"strict":"loose"].exec(t),r={},o=14;o--;)r[e.key[o]]=n[o]||"";return r[e.q.name]={},r[e.key[12]].replace(e.q.parser,function(t,n,o){n&&(r[e.q.name][n]=o)}),r}Object.defineProperty(e,"__esModule",{value:!0}),e.parseUri=n},function(t,e){"use strict";function n(t){for(var e={},n=t.split("&"),r=0;r<n.length;r++){var o=/^(.+?)(?:=(.+))?$/.exec(n[r]);if(o){var i=o[1],u=o[2];"true"===u?u=!0:"false"===u?u=!1:void 0!==u?u=decodeURIComponent(u):"!"===i[0]?(i=i.substring(1),u=!1):u=!0,e[i]=u}}return e}function r(t){var e=[];for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];n=encodeURIComponent(n),r===!0?e.push(n):r===!1?e.push("!"+n):(r=encodeURIComponent(r),e.push(n+"="+r))}return e.join("&")}Object.defineProperty(e,"__esModule",{value:!0}),e.parse=n,e.toString=r},function(t,e,n){(function(e,r){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   3.3.1
	 */
!function(e,n){t.exports=n()}(this,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function o(t){return"function"==typeof t}function i(t){$=t}function u(t){Q=t}function s(){return function(){return e.nextTick(h)}}function a(){return function(){W(h)}}function c(){var t=0,e=new Z(h),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function f(){var t=new MessageChannel;return t.port1.onmessage=h,function(){return t.port2.postMessage(0)}}function l(){var t=setTimeout;return function(){return t(h,1)}}function h(){for(var t=0;t<z;t+=2){var e=nt[t],n=nt[t+1];e(n),nt[t]=void 0,nt[t+1]=void 0}z=0}function p(){try{var t=n(102);return W=t.runOnLoop||t.runOnContext,a()}catch(e){return l()}}function v(t,e){var n=arguments,r=this,o=new this.constructor(d);void 0===o[ot]&&C(o);var i=r._state;return i?!function(){var t=n[i-1];Q(function(){return L(i,o,t,r._result)})}():D(r,o,t,e),o}function _(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(d);return O(n,t),n}function d(){}function y(){return new TypeError("You cannot resolve a promise with itself")}function E(){return new TypeError("A promises callback cannot return that same promise.")}function g(t){try{return t.then}catch(e){return at.error=e,at}}function b(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){Q(function(t){var r=!1,o=b(n,e,function(n){r||(r=!0,e!==n?O(t,n):w(t,n))},function(e){r||(r=!0,S(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,S(t,o))},t)}function T(t,e){e._state===ut?w(t,e._result):e._state===st?S(t,e._result):D(e,void 0,function(e){return O(t,e)},function(e){return S(t,e)})}function A(t,e,n){e.constructor===t.constructor&&n===v&&e.constructor.resolve===_?T(t,e):n===at?S(t,at.error):void 0===n?w(t,e):o(n)?m(t,e,n):w(t,e)}function O(e,n){e===n?S(e,y()):t(n)?A(e,n,g(n)):w(e,n)}function x(t){t._onerror&&t._onerror(t._result),P(t)}function w(t,e){t._state===it&&(t._result=e,t._state=ut,0!==t._subscribers.length&&Q(P,t))}function S(t,e){t._state===it&&(t._state=st,t._result=e,Q(x,t))}function D(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+ut]=n,o[i+st]=r,0===i&&t._state&&Q(P,t)}function P(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,u=0;u<e.length;u+=3)r=e[u],o=e[u+n],r?L(n,r,o,i):o(i);t._subscribers.length=0}}function M(){this.error=null}function j(t,e){try{return t(e)}catch(n){return ct.error=n,ct}}function L(t,e,n,r){var i=o(n),u=void 0,s=void 0,a=void 0,c=void 0;if(i){if(u=j(n,r),u===ct?(c=!0,s=u.error,u=null):a=!0,e===u)return void S(e,E())}else u=r,a=!0;e._state!==it||(i&&a?O(e,u):c?S(e,s):t===ut?w(e,u):t===st&&S(e,u))}function N(t,e){try{e(function(e){O(t,e)},function(e){S(t,e)})}catch(n){S(t,n)}}function k(){return ft++}function C(t){t[ot]=ft++,t._state=void 0,t._result=void 0,t._subscribers=[]}function B(t,e){this._instanceConstructor=t,this.promise=new t(d),this.promise[ot]||C(this.promise),q(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?w(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&w(this.promise,this._result))):S(this.promise,I())}function I(){return new Error("Array Methods must be provided an Array")}function R(t){return new B(this,t).promise}function H(t){var e=this;return new e(q(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function V(t){var e=this,n=new e(d);return S(n,t),n}function U(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function Y(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function G(t){this[ot]=k(),this._result=this._state=void 0,this._subscribers=[],d!==t&&("function"!=typeof t&&U(),this instanceof G?N(this,t):Y())}function F(){var t=void 0;if("undefined"!=typeof r)t=r;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var o=null;try{o=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===o&&!n.cast)return}t.Promise=G}var K=void 0;K=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var q=K,z=0,W=void 0,$=void 0,Q=function(t,e){nt[z]=t,nt[z+1]=e,z+=2,2===z&&($?$(h):rt())},J="undefined"!=typeof window?window:void 0,X=J||{},Z=X.MutationObserver||X.WebKitMutationObserver,tt="undefined"==typeof self&&"undefined"!=typeof e&&"[object process]"==={}.toString.call(e),et="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,nt=new Array(1e3),rt=void 0;rt=tt?s():Z?c():et?f():void 0===J?p():l();var ot=Math.random().toString(36).substring(16),it=void 0,ut=1,st=2,at=new M,ct=new M,ft=0;return B.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===it&&n<t;n++)this._eachEntry(e[n],n)},B.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===_){var o=g(t);if(o===v&&t._state!==it)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===G){var i=new n(d);A(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},B.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===it&&(this._remaining--,t===st?S(r,n):this._result[e]=n),0===this._remaining&&w(r,this._result)},B.prototype._willSettleAt=function(t,e){var n=this;D(t,void 0,function(t){return n._settledAt(ut,e,t)},function(t){return n._settledAt(st,e,t)})},G.all=R,G.race=H,G.resolve=_,G.reject=V,G._setScheduler=i,G._setAsap=u,G._asap=Q,G.prototype={constructor:G,then:v,"catch":function(t){return this.then(null,t)}},F(),G.polyfill=F,G.Promise=G,G})}).call(e,n(101),function(){return this}())},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function u(){_&&p&&(_=!1,p.length?v=p.concat(v):d=-1,v.length&&s())}function s(){if(!_){var t=o(u);_=!0;for(var e=v.length;e;){for(p=v,v=[];++d<e;)p&&p[d].run();d=-1,e=v.length}p=null,_=!1,i(t)}}function a(t,e){this.fun=t,this.array=e}function c(){}var f,l,h=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var p,v=[],_=!1,d=-1;h.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];v.push(new a(t,e)),1!==v.length||_||o(s)},a.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=c,h.addListener=c,h.once=c,h.off=c,h.removeListener=c,h.removeAllListeners=c,h.emit=c,h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(t,e){}])});