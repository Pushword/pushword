!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(window,(function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=35)}({0:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">  <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/></svg>\n',o='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/></svg>\n';function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,a;return t=e,a=[{key:"element",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(e);for(var a in Array.isArray(n)?(t=o.classList).add.apply(t,r(n)):n&&o.classList.add(n),i)o.setAttribute(a,i[a]);return o}},{key:"input",value:function(t,n,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=e.element("div",n,{contentEditable:!t.readOnly});return r.dataset.placeholder=t.api.i18n.t(i),o&&(r.textContent=o),r}},{key:"option",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=document.createElement("option");for(var r in o.text=n||t,o.value=t,i)o.setAttribute(r,i[r]);e.add(o)}},{key:"options",value:function(t,n){n.forEach((function(n){return e.option(t,n)}))}},{key:"fileButtons",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=e.element("div",["flex","cdx-input-labeled-preview","cdx-input-labeled","cdx-input","cdx-input-editable"].concat(r(n))),s=e.element("div",[t.api.styles.button]);if(s.innerHTML=i+" "+t.api.i18n.t("Select"),s.addEventListener("click",(function(e){return t.onSelectFile(t,e)})),a.appendChild(s),t.onUploadFile){var l=e.element("div",[t.api.styles.button]);l.innerHTML="".concat(o," ").concat(t.api.i18n.t("Upload")),l.style.marginLeft="-2px",l.addEventListener("click",(function(e){return t.onUploadFile(t,e)})),a.appendChild(l)}return a}},{key:"switchInput",value:function(t,n){var i=e.element("div","editor-switch"),o=e.element("input",null,{type:"checkbox",id:t}),r=e.element("label","label-default",{for:t}),a=e.element("label","",{for:t});return a.innerHTML=n,i.append(o,r,a),i}}],(n=null)&&s(t.prototype,n),a&&s(t,a),e}()},10:function(e,t,n){var i=n(2),o=n(11);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);e.exports=o.locals||{}},11:function(e,t,n){(t=n(3)(!1)).push([e.i,'.ninja {\n    text-decoration: none !important;\n    color: inherit !important;\n    border-bottom: 1px dotted #333;\n}\n\n.link-btn {\n    padding: 6px 12px;\n    margin-bottom: 0;\n    border-radius: 3px;\n    border: 1px solid transparent;\n    cursor: pointer;\n    color: #fff;\n    background-color: #3c8dbc;\n    border-color: #367fa9;\n    outline: none;\n    text-decoration: none !important;\n}\n\n.link-btn:hover {\n    color: #fff !important;\n}\n\n.editor-switch {\n    padding-left: 4px;\n    padding-right: 10px;\n    margin-bottom: 10px;\n    margin-top: 5px;\n}\n\n.editor-switch > input[type="checkbox"] {\n    display: none;\n}\n\n.editor-switch label {\n    font-weight: normal;\n}\n.editor-switch > .label-default {\n    cursor: pointer;\n    height: 0px;\n    position: relative;\n    width: 30px;\n}\n\n.editor-switch > .label-default::before {\n    background: rgb(0, 0, 0);\n    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);\n    border-radius: 8px;\n    content: "";\n    height: 12px;\n    margin-top: -5px;\n    position: absolute;\n    opacity: 0.3;\n    transition: all 0.4s ease-in-out;\n    width: 20px;\n}\n.editor-switch > .label-default::after {\n    background: rgb(255, 255, 255);\n    border-radius: 16px;\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);\n    content: "";\n    height: 16px;\n    left: -4px;\n    position: absolute;\n    top: -7px;\n    transition: all 0.3s ease-in-out;\n    width: 16px;\n}\n.editor-switch > input[type="checkbox"]:checked + .label-default::before {\n    background: inherit;\n    opacity: 0.5;\n}\n.editor-switch > input[type="checkbox"]:checked + .label-default::after {\n    background: inherit;\n    left: 10px;\n}\n\n.plugin-option-input {\n    border: 1px solid rgba(201, 201, 204, 0.48);\n    box-shadow: inset 0 1px 2px 0 rgb(35 44 72 / 6%);\n    border-radius: 5px;\n    padding: 5px 8px;\n    margin-bottom: 10px;\n    outline: none;\n    width: 100%;\n    box-sizing: border-box;\n    background: #fff;\n}\n.plugin-options-wrapper {\n    outline: none;\n    border: 0;\n    border-radius: 0 0 4px 4px;\n    margin: 0;\n    font-size: 13px;\n    padding: 10px;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    display: none;\n    font-weight: 500;\n    border-top: 1px solid rgba(201, 201, 204, 0.48);\n}\n\n.plugin-options-wrapper-showed {\n    display: block;\n}\n',""]),e.exports=t},2:function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},i=[],o=0;o<e.length;o++){var r=e[o],l=t.base?r[0]+t.base:r[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var d=s(u),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:u,updater:v(p,t),references:1}),i.push(u)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function h(e,t,n){var i=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,g=0;function v(e,t){var n,i,o;if(t.singleton){var r=g++;n=f||(f=c(t)),i=p.bind(null,n,r,!1),o=p.bind(null,n,r,!0)}else n=c(t),i=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=s(n[i]);a[o].references--}for(var r=l(e,t),c=0;c<n.length;c++){var u=s(n[c]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=r}}}},3:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),r=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([o]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);i&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},35:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));n(36);var i=n(0),o=n(7);function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(t){var n=t.api,i=t.data;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=n,this.data=i||{url:"",hideForBot:!0,targetBlank:!1},this._CSS={classWrapper:"cdx-anchor-tune-wrapper",classIcon:"cdx-anchor-tune-icon",classInput:"cdx-anchor-tune-input"},this.nodes={},this.i18n=n.i18n}var t,n,a;return t=e,a=[{key:"isTune",get:function(){return!0}}],(n=[{key:"render",value:function(){var e=document.createElement("div"),t=document.createElement("div");return t.classList.add(this._CSS.classIcon),t.appendChild(o.default.iconSvg("link",12,12)),this.nodes.url=i.a.input(this,["cdx-input-labeled","cdx-input-full"],"<a href=#>image</a>",this.data.url),this.nodes.hideForBot=i.a.switchInput("hideForBot",this.i18n.t("Dissimuler pour les robots")),this.nodes.targetBlank=i.a.switchInput("targetBlank",this.i18n.t("Ouvrir dans un nouvel onglet")),e.appendChild(t),e.appendChild(this.nodes.url),e.appendChild(this.nodes.hideForBot),e.appendChild(this.nodes.targetBlank),e}},{key:"save",value:function(){return this.data}}])&&r(t.prototype,n),a&&r(t,a),e}()},36:function(e,t,n){var i=n(2),o=n(37);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);e.exports=o.locals||{}},37:function(e,t,n){(t=n(3)(!1)).push([e.i,".cdx-input-full {\n    width: 100%;\n}\n",""]),e.exports=t},7:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a}));n(10);var i=n(0);class o{constructor(){this.selection=null,this.savedSelectionRange=null,this.isFakeBackgroundEnabled=!1,this.commandBackground="backColor",this.commandRemoveFormat="removeFormat"}isElement(e){return e&&"object"==typeof e&&e.nodeType&&e.nodeType===Node.ELEMENT_NODE}isContentEditable(e){return"true"===e.contentEditable}isNativeInput(e){return!(!e||!e.tagName)&&["INPUT","TEXTAREA"].includes(e.tagName)}canSetCaret(e){let t=!0;if(this.isNativeInput(e))switch(e.type){case"file":case"checkbox":case"radio":case"hidden":case"submit":case"button":case"image":case"reset":t=!1}else t=this.isContentEditable(e);return t}CSS(){return{editorWrapper:"codex-editor",editorZone:"codex-editor__redactor"}}anchorNode(){const e=window.getSelection();return e?e.anchorNode:null}anchorElement(){const e=window.getSelection();if(!e)return null;const t=e.anchorNode;return t?this.isElement(t)?t:t.parentElement:null}anchorOffset(){const e=window.getSelection();return e?e.anchorOffset:null}isCollapsed(){const e=window.getSelection();return e?e.isCollapsed:null}isAtEditor(){const e=o.get();let t=e.anchorNode||e.focusNode;t&&t.nodeType===Node.TEXT_NODE&&(t=t.parentNode);let n=null;return t&&(n=t.closest("."+o.CSS.editorZone)),n&&n.nodeType===Node.ELEMENT_NODE}isSelectionExists(){return!!o.get().anchorNode}static get range(){const e=window.getSelection();return e&&e.rangeCount?e.getRangeAt(0):null}static get rect(){let e,t=document.selection,n={x:0,y:0,width:0,height:0};if(t&&"Control"!==t.type)return e=t.createRange(),n.x=e.boundingLeft,n.y=e.boundingTop,n.width=e.boundingWidth,n.height=e.boundingHeight,n;if(!window.getSelection)return n;if(t=window.getSelection(),null===t.rangeCount||isNaN(t.rangeCount))return n;if(0===t.rangeCount)return n;if(e=t.getRangeAt(0).cloneRange(),e.getBoundingClientRect&&(n=e.getBoundingClientRect()),0===n.x&&0===n.y){const t=document.createElement("span");if(t.getBoundingClientRect){t.appendChild(document.createTextNode("​")),e.insertNode(t),n=t.getBoundingClientRect();const i=t.parentNode;i.removeChild(t),i.normalize()}}return n}static get text(){return window.getSelection?window.getSelection().toString():""}get(){return window.getSelection()}setCursor(e,t=0){const n=document.createRange(),i=window.getSelection();if(this.isNativeInput(e)){if(!this.canSetCaret(e))return;return e.focus(),e.selectionStart=e.selectionEnd=t,e.getBoundingClientRect()}return n.setStart(e,t),n.setEnd(e,t),i.removeAllRanges(),i.addRange(n),n.getBoundingClientRect()}removeFakeBackground(){this.isFakeBackgroundEnabled&&(this.isFakeBackgroundEnabled=!1,document.execCommand(this.commandRemoveFormat))}setFakeBackground(){document.execCommand(this.commandBackground,!1,"#a8d6ff"),this.isFakeBackgroundEnabled=!0}save(){this.savedSelectionRange=o.range}restore(){if(!this.savedSelectionRange)return;const e=window.getSelection();e.removeAllRanges(),e.addRange(this.savedSelectionRange)}clearSaved(){this.savedSelectionRange=null}collapseToEnd(){const e=window.getSelection(),t=document.createRange();t.selectNodeContents(e.focusNode),t.collapse(!1),e.removeAllRanges(),e.addRange(t)}findParentTag(e,t=null,n=10){const i=window.getSelection();let o=null;if(!i||!i.anchorNode||!i.focusNode)return null;return[i.anchorNode,i.focusNode].forEach(i=>{let r=n;for(;r>0&&i.parentNode&&(i.tagName!==e||(o=i,t&&i.classList&&!i.classList.contains(t)&&(o=null),!o));)i=i.parentNode,r--}),o}expandToTag(e){const t=window.getSelection();t.removeAllRanges();const n=document.createRange();n.selectNodeContents(e),t.addRange(n)}}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(t){t.data;var n=t.config,i=t.api;t.readOnly;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.toolbar=i.toolbar,this.inlineToolbar=i.inlineToolbar,this.tooltip=i.tooltip,this.i18n=i.i18n,this.config=n,this.selection=new o,this.commandLink="createLink",this.commandUnlink="unlink",this.CSS={wrapper:"plugin-options-wrapper",wrapperShowed:"plugin-options-wrapper-showed",button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--link",buttonUnlink:"ce-inline-tool--unlink",input:"plugin-option-input",select:"plugin-option-input"},this.avalaibleDesign=this.config.avalaibleDesign||[["bouton","link-btn"],["dissimulé","ninja"]],this.nodes={wrapper:null,input:null,selectTarget:null,selectRel:null,button:null},this.inputOpened=!1}var t,n,a;return t=e,a=[{key:"isInline",get:function(){return!0}},{key:"sanitize",get:function(){return{a:{href:!0,target:!0,rel:!0,class:!0}}}},{key:"iconSvg",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:14,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:14,i=document.createElementNS("http://www.w3.org/2000/svg","svg");return i.classList.add("icon","icon--"+e),i.setAttribute("width",t+"px"),i.setAttribute("height",n+"px"),i.innerHTML='<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'.concat(e,'"></use>'),i}}],(n=[{key:"render",value:function(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(e.iconSvg("link",14,10)),this.nodes.button.appendChild(e.iconSvg("unlink",15,11)),this.nodes.button}},{key:"renderActions",value:function(){var e=this;this.nodes.input=i.a.element("input",this.CSS.input,{placeholder:"https://..."}),this.nodes.hideForBot=i.a.switchInput("hideForBot",this.i18n.t("Dissimuler pour les robots")),this.nodes.targetBlank=i.a.switchInput("targetBlank",this.i18n.t("Ouvrir dans un nouvel onglet")),this.nodes.selectDesign=i.a.element("select",this.CSS.select),i.a.option(this.nodes.selectDesign,"0",this.i18n.t("Style"),{disabled:"disabled"}),i.a.option(this.nodes.selectDesign,"");for(var t=0;t<this.avalaibleDesign.length;t++)i.a.option(this.nodes.selectDesign,this.avalaibleDesign[t][1],this.avalaibleDesign[t][0]);return this.config.design&&(this.nodes.selectDesign.value=this.config.design),this.nodes.wrapper=document.createElement("div"),this.nodes.wrapper.classList.add(this.CSS.wrapper),this.nodes.wrapper.append(this.nodes.input,this.nodes.hideForBot,this.nodes.targetBlank,this.nodes.selectDesign),this.nodes.wrapper.addEventListener("change",(function(t){e.save(t)})),this.nodes.wrapper.addEventListener("keydown",(function(t){13===t.keyCode&&(e.save(t),e.selection.collapseToEnd(),e.inlineToolbar.close())})),this.nodes.wrapper}},{key:"surround",value:function(e){if(e){this.inputOpened?(this.selection.restore(),this.selection.removeFakeBackground()):(this.selection.setFakeBackground(),this.selection.save());var t=this.selection.findParentTag("A");if(t)return this.selection.expandToTag(t),this.unlink(),this.closeActions(),this.checkState(),void this.toolbar.close()}this.toggleActions()}},{key:"shortcut",get:function(){return this.config.shortcut||"CMD+K"}},{key:"title",get:function(){return"Hyperlink"}},{key:"checkState",value:function(){var e=this.selection.findParentTag("A");if(e){this.nodes.button.classList.add(this.CSS.buttonUnlink),this.nodes.button.classList.add(this.CSS.buttonActive),this.openActions();var t=e.getAttribute("href"),n=e.getAttribute("target"),i=e.getAttribute("rel"),o=e.getAttribute("class");this.nodes.input.value=t||"",this.nodes.hideForBot.querySelector("input").checked=!!i,this.nodes.targetBlank.querySelector("input").checked=!!n,this.nodes.selectDesign.value=o||"0",this.selection.save()}else this.nodes.button.classList.remove(this.CSS.buttonUnlink),this.nodes.button.classList.remove(this.CSS.buttonActive);return!!e}},{key:"clear",value:function(){this.closeActions()}},{key:"toggleActions",value:function(){this.inputOpened?this.closeActions(!1):this.openActions(!0)}},{key:"openActions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.nodes.wrapper.classList.add(this.CSS.wrapperShowed),e&&this.nodes.input.focus(),this.inputOpened=!0}},{key:"closeActions",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.selection.isFakeBackgroundEnabled){var t=new o;t.save(),this.selection.restore(),this.selection.removeFakeBackground(),t.restore()}this.nodes.wrapper.classList.remove(this.CSS.wrapperShowed),this.nodes.input.value="",this.nodes.targetBlank.querySelector("input").checked=!1,this.nodes.hideForBot.querySelector("input").checked=!1,this.nodes.selectDesign.value="",e&&this.selection.clearSaved(),this.inputOpened=!1}},{key:"save",value:function(e){if(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!(this.nodes.input.value||"").trim())return console.log("unlink"),this.selection.restore(),void this.unlink();this.selection.restore(),this.selection.removeFakeBackground(),this.insertLink()}},{key:"insertLink",value:function(){var e=this.nodes.input.value||"",t=this.nodes.targetBlank.querySelector("input").checked?"_blank":"",n=this.nodes.hideForBot.querySelector("input").checked?"encrypt":"",i=this.nodes.selectDesign.value||"",o=this.initSelection?this.initSelection:this.selection.findParentTag("A");return o?this.selection.expandToTag(o):(document.execCommand(this.commandLink,!1,"#"),o=this.selection.findParentTag("A"),this.initSelection=o),o&&(o.href=e,o.href=e,t?o.target=t:o.removeAttribute("target"),n?o.rel=n:o.removeAttribute("rel"),i?o.className=i:o.removeAttribute("class")),o}},{key:"unlink",value:function(){document.execCommand(this.commandUnlink)}}])&&r(t.prototype,n),a&&r(t,a),e}()}}).default}));