!function(i,u,d){function m(e,t){return typeof e===t}function l(e){var t,n=f.className,r=s._config.classPrefix||"";T&&(n=n.baseVal),s._config.enableJSClass&&(t=new RegExp("(^|\\s)"+r+"no-js(\\s|$)"),n=n.replace(t,"$1"+r+"js$2")),s._config.enableClasses&&(n+=" "+r+e.join(" "+r),T?f.className.baseVal=n:f.className=n)}function c(e,t){if("object"==typeof e)for(var n in e)j(e,n)&&c(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),o=s[r[0]];if(void 0!==(o=2==r.length?o[r[1]]:o))return s;t="function"==typeof t?t():t,1==r.length?s[r[0]]=t:(!s[r[0]]||s[r[0]]instanceof Boolean||(s[r[0]]=new Boolean(s[r[0]])),s[r[0]][r[1]]=t),l([(t&&0!=t?"":"no-")+r.join("-")]),s._trigger(e,t)}return s}function h(e){return"function"!=typeof u.createElement?u.createElement(e):T?u.createElementNS.call(u,"http://www.w3.org/2000/svg",e):u.createElement.apply(u,arguments)}function v(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function g(e,t,n,r){var o,i,s,a,l="modernizr",c=h("div");(a=u.body)||((a=h(T?"svg":"body")).fake=!0);if(parseInt(n,10))for(;n--;)(i=h("div")).id=r?r[n]:l+(n+1),c.appendChild(i);return(o=h("style")).type="text/css",o.id="s"+l,(a.fake?a:c).appendChild(o),a.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(u.createTextNode(e)),c.id=l,a.fake&&(a.style.background="",a.style.overflow="hidden",s=f.style.overflow,f.style.overflow="hidden",f.appendChild(a)),o=t(c,e),a.fake?(a.parentNode.removeChild(a),f.style.overflow=s,f.offsetHeight):c.parentNode.removeChild(c),!!o}function y(e,t){var n=e.length;if("CSS"in i&&"supports"in i.CSS){for(;n--;)if(i.CSS.supports(v(e[n]),t))return!0;return!1}if("CSSSupportsRule"in i){for(var r=[];n--;)r.push("("+v(e[n])+":"+t+")");return g("@supports ("+(r=r.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"==(e=e,t=null,n="position","getComputedStyle"in i?(r=getComputedStyle.call(i,e,t),o=i.console,null!==r?n&&(r=r.getPropertyValue(n)):o&&o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")):r=!t&&e.currentStyle&&e.currentStyle[n],r);var t,n,r,o})}return d}function A(e,t,n,r){function o(){s&&(delete p.style,delete p.modElem)}if(r=void 0!==r&&r,void 0!==n){var i=y(e,n);if(void 0!==i)return i}for(var s,a,l,c,u,f=["modernizr","tspan","samp"];!p.style&&f.length;)s=!0,p.modElem=h(f.shift()),p.style=p.modElem.style;for(l=e.length,a=0;a<l;a++)if(c=e[a],u=p.style[c],~(""+c).indexOf("-")&&(c=c.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")),p.style[c]!==d){if(r||void 0===n)return o(),"pfx"!=t||c;try{p.style[c]=n}catch(e){}if(p.style[c]!=u)return o(),"pfx"!=t||c}return o(),!1}function r(e,t,n,u,f){var r,o,i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+Y.join(i+" ")+i).split(" ");if(m(t,"string")||void 0===t)return A(s,t,u,f);var a=s=(e+" "+ee.join(i+" ")+i).split(" "),l=t,c=n;for(o in a)if(a[o]in l)if(!1===c)return a[o];else{r=l[a[o]];if(m(r,"function")){var p=r;var d=c||l;return function(){return p.apply(d,arguments)};return}else return r}return!1}function b(e,t,n){return r(e,d,d,t,n)}var E=[],S=[],e={_version:"3.6.0",_config:{classPrefix:"test-",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){S.push({name:e,fn:t,options:n})},addAsyncTest:function(e){S.push({name:null,fn:e})}},s=function(){},w=(s.prototype=e,(s=new s).addTest("es5object",function(){return!!(Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions)}),"CSS"in i&&"supports"in i.CSS),C="supportsCSS"in i;s.addTest("supports",w||C);var j,x,f=u.documentElement,T=(j=void 0===(x={}.hasOwnProperty)||void 0===x.call?function(e,t){return t in e&&void 0===e.constructor.prototype[t]}:function(e,t){return x.call(e,t)},"svg"===f.nodeName.toLowerCase());if(e._l={},e.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),s.hasOwnProperty(e)&&setTimeout(function(){s._trigger(e,s[e])},0)},e._trigger=function(e,t){var n;this._l[e]&&(n=this._l[e],setTimeout(function(){for(var e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e])},s._q.push(function(){e.addTest=c}),s.addAsyncTest(function(){var e=new Image;e.onerror=function(){c("webpalpha",!1)},e.onload=function(){c("webpalpha",1==e.width)},e.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="}),s.addAsyncTest(function(){var e=new Image;e.onerror=function(){c("webplossless",!1)},e.onload=function(){c("webplossless",1==e.width)},e.src="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="}),!T){var a=u;function _(e,t){var n=e.createElement("p"),e=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",e.insertBefore(n.lastChild,e.firstChild)}function N(){var e=o.elements;return"string"==typeof e?e.split(" "):e}function O(e){var t=L[e[U]];return t||(t={},$++,e[U]=$,L[$]=t),t}function P(e,t,n){return t=t||a,F?t.createElement(e):!(t=(n=n||O(t)).cache[e]?n.cache[e].cloneNode():R.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren||Q.test(e)||t.tagUrn?t:n.frag.appendChild(t)}function B(e){var t,n,r=O(e=e||a);return!o.shivCSS||z||r.hasCSS||(r.hasCSS=!!_(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),F||(t=e,(n=r).cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return o.shivMethods?P(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+N().join().replace(/[\w\-:]+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(o,n.frag)),e}function D(e){for(var t,n=e.getElementsByTagName("*"),r=n.length,o=RegExp("^(?:"+N().join("|")+")$","i"),i=[];r--;)t=n[r],o.test(t.nodeName)&&i.push(t.applyElement(function(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(V+":"+e.nodeName);r--;)(t=n[r]).specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}(t)));return i}function k(a){function l(){clearTimeout(n._removeSheetTimer),c&&c.removeNode(!0),c=null}var c,u,n=O(a),e=a.namespaces,t=a.parentWindow;return!J||a.printShived||(void 0===e[V]&&e.add(V),t.attachEvent("onbeforeprint",function(){l();for(var e,t,n,r=a.styleSheets,o=[],i=r.length,s=Array(i);i--;)s[i]=r[i];for(;n=s.pop();)if(!n.disabled&&q.test(n.media)){try{t=(e=n.imports).length}catch(e){t=0}for(i=0;i<t;i++)s.push(e[i]);try{o.push(n.cssText)}catch(e){}}o=function(e){for(var t,n=e.split("{"),r=n.length,o=RegExp("(^|[\\s,>+~])("+N().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),i="$1"+V+"\\:$2";r--;)(t=n[r]=n[r].split("}"))[t.length-1]=t[t.length-1].replace(o,i),n[r]=t.join("}");return n.join("{")}(o.reverse().join("")),u=D(a),c=_(a,o)}),t.attachEvent("onafterprint",function(){for(var e=u,t=e.length;t--;)e[t].removeNode();clearTimeout(n._removeSheetTimer),n._removeSheetTimer=setTimeout(l,500)}),a.printShived=!0),a}var z,F,C=(w=void 0!==i?i:this).html5||{},Q=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,R=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,U="_html5shiv",$=0,L={};try{var M=a.createElement("a");M.innerHTML="<xyz></xyz>",z="hidden"in M,F=1==M.childNodes.length||(a.createElement("a"),void 0===(Z=a.createDocumentFragment()).cloneNode||void 0===Z.createDocumentFragment||void 0===Z.createElement)}catch(e){F=z=!0}var o={elements:C.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==C.shivCSS,supportsUnknownElements:F,shivMethods:!1!==C.shivMethods,type:"default",shivDocument:B,createElement:P,createDocumentFragment:function(e,t){if(e=e||a,F)return e.createDocumentFragment();for(var n=(t=t||O(e)).frag.cloneNode(),r=0,o=N(),i=o.length;r<i;r++)n.createElement(o[r]);return n},addElements:function(e,t){var n=o.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),o.elements=n+" "+e,B(t)}},q=(w.html5=o,B(a),/^$|\b(?:all|print)\b/),V="html5shiv",J=!(F||(M=a.documentElement,void 0===a.namespaces||void 0===a.parentWindow||void 0===M.applyElement||void 0===M.removeNode||void 0===w.attachEvent));o.type+=" print",(o.shivPrint=k)(a),"object"==typeof module&&module.exports&&(module.exports=o)}var W,t,H,G,I,n,X,K={elem:h("modernizr")},p=(s._q.push(function(){delete K.elem}),{style:K.elem.style}),Z=(s._q.unshift(function(){delete p.style}),"Moz O ms Webkit"),Y=e._config.usePrefixes?Z.split(" "):[],ee=(e._cssomPrefixes=Y,e._config.usePrefixes?Z.toLowerCase().split(" "):[]);for(X in e._domPrefixes=ee,e.testProp=function(e,t,n){return A([e],d,t,n)},e.testAllProps=r,e.testAllProps=b,s.addTest("csstransforms3d",function(){return!!b("perspective","1px",!0)}),S)if(S.hasOwnProperty(X)){if(W=[],(t=S[X]).name&&(W.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(H=0;H<t.options.aliases.length;H++)W.push(t.options.aliases[H].toLowerCase());for(G=m(t.fn,"function")?t.fn():t.fn,I=0;I<W.length;I++)1===(n=W[I].split(".")).length?s[n[0]]=G:(!s[n[0]]||s[n[0]]instanceof Boolean||(s[n[0]]=new Boolean(s[n[0]])),s[n[0]][n[1]]=G),E.push((G?"":"no-")+n.join("-"))}l(E),delete e.addTest,delete e.addAsyncTest;for(var te=0;te<s._q.length;te++)s._q[te]();i.Modernizr=s}(window,document);