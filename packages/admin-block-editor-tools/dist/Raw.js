/*! For license information please see Raw.js.LICENSE.txt */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(()=>(()=>{"use strict";var e={397:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(81),o=r.n(n),i=r(645),a=r.n(i)()(o());a.push([e.id,".ce-rawtool__textarea {\n  min-height: 200px;\n  resize: vertical;\n  border-radius: 8px;\n  border: 0;\n  background-color: #1e2128;\n  font-family: Menlo, Monaco, Consolas, Courier New, monospace;\n  font-size: 12px;\n  line-height: 1.6;\n  letter-spacing: -0.2px;\n  color: #a1a7b6;\n  overscroll-behavior: contain;\n}\n",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],u=n.base?c[0]+n.base:c[0],l=i[u]||0,f="".concat(u," ").concat(l);i[u]=l+1;var p=r(f),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var h=o(d,n);n.byIndex=s,t.splice(s,0,{identifier:f,updater:h,references:1})}a.push(f)}return a}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=r(i[a]);t[s].references--}for(var c=n(e,o),u=0;u<i.length;u++){var l=r(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0;var n={};return(()=>{r.d(n,{default:()=>S});var e=r(379),t=r.n(e),o=r(795),i=r.n(o),a=r(569),s=r.n(a),c=r(565),u=r.n(c),l=r(216),f=r.n(l),p=r(589),d=r.n(p),h=r(397),y={};y.styleTagTransform=d(),y.setAttributes=u(),y.insert=s().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=f(),t()(h.Z,y),h.Z&&h.Z.locals&&h.Z.locals;class v{static get isReadOnlySupported(){return!0}static get displayInToolbox(){return!0}static get enableLineBreaks(){return!0}static get toolbox(){return{icon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.6954 5C17.912 5 18.8468 6.07716 18.6755 7.28165L17.426 16.0659C17.3183 16.8229 16.7885 17.4522 16.061 17.6873L12.6151 18.8012C12.2152 18.9304 11.7848 18.9304 11.3849 18.8012L7.93898 17.6873C7.21148 17.4522 6.6817 16.8229 6.57403 16.0659L5.32454 7.28165C5.15322 6.07716 6.088 5 7.30461 5H16.6954Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8.4H9L9.42857 11.7939H14.5714L14.3571 13.2788L14.1429 14.7636L12 15.4L9.85714 14.7636L9.77143 14.3394"/></svg>',title:"Raw HTML"}}constructor({data:e,config:t,api:r,readOnly:n}){this.api=r,this.readOnly=n,this.placeholder=t.placeholder||v.DEFAULT_PLACEHOLDER,this.CSS={baseClass:this.api.styles.block,input:this.api.styles.input,wrapper:"ce-rawtool",textarea:"ce-rawtool__textarea"},this.data={html:e.html||""},this.textarea=null,this.resizeDebounce=null}render(){const e=document.createElement("div");return this.textarea=document.createElement("textarea"),e.classList.add(this.CSS.baseClass,this.CSS.wrapper),this.textarea.classList.add(this.CSS.textarea,this.CSS.input),this.textarea.textContent=this.data.html,this.textarea.placeholder=this.placeholder,this.readOnly?this.textarea.disabled=!0:this.textarea.addEventListener("input",(()=>{this.onInput()})),e.appendChild(this.textarea),setTimeout((()=>{this.resize()}),100),e}save(e){return{html:e.querySelector("textarea").value}}static get DEFAULT_PLACEHOLDER(){return"Enter HTML code"}static get sanitize(){return{html:!0}}onInput(){this.resizeDebounce&&clearTimeout(this.resizeDebounce),this.resizeDebounce=setTimeout((()=>{this.resize()}),200)}resize(){this.textarea.style.height="auto",this.textarea.style.height=this.textarea.scrollHeight+"px"}}function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==m(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===m(o)?o:String(o)),n)}var o}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},g.apply(this,arguments)}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(s,e);var t,r,n,o,i,a=(o=s,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(o);if(i){var r=w(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function s(e){var t,r=e.data,n=e.config,o=e.api,i=e.readOnly;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=a.call(this,{data:r,config:n,api:o,readOnly:i})).editor=null,t}return t=s,n=[{key:"conversionConfig",get:function(){return{export:"html",import:"html"}}}],(r=[{key:"render",value:function(){var e=g(w(s.prototype),"render",this).call(this);return this.editor=this.transformTextareaToAce(),e}},{key:"transformTextareaToAce",value:function(){var e=$(this.textarea),t=$("<div>",{position:"absolute",width:"100%",class:"aceInsideEditorJs"}).insertAfter(e);e.css("display","none");var r=ace.edit(t[0]);return r.renderer.setShowGutter(!1),r.getSession().setValue(e.val()||""),r.getSession().setMode("ace/mode/twig"),r.setFontSize("16px"),r.container.style.lineHeight="1.5em",r.renderer.updateFontSize(),r.setOptions({maxLines:1/0}),r.session.setTabSize(2),r.getSession().on("change",(function(){e&&e.val(r.getSession().getValue()||"")})),r.renderer.setScrollMargin(10,10),r.focus(),setTimeout((function(){r.focus()}),1),r}}])&&b(t.prototype,r),n&&b(t,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(v)})(),n.default})()));