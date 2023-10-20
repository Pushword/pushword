!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(self,(()=>(()=>{"use strict";var e={599:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(168),i=n(587);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function a(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"element",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=document.createElement(e);for(var r in Array.isArray(n)?(t=i.classList).add.apply(t,a(n)):n&&i.classList.add(n),o)i.setAttribute(r,o[r]);return i}},{key:"input",value:function(t,n,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=e.element("div",n,{contentEditable:!t.readOnly});return r.dataset.placeholder=t.api.i18n.t(o),i&&(r.textContent=i),r}},{key:"option",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=document.createElement("option");for(var r in i.text=n||t,i.value=t,o)i.setAttribute(r,o[r]);e.add(i)}},{key:"options",value:function(t,n){n.forEach((function(n){return e.option(t,n)}))}},{key:"fileButtons",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=e.element("div",["flex","cdx-input-labeled-preview","cdx-input-labeled","cdx-input","cdx-input-editable"].concat(a(n))),s=e.element("div",[t.api.styles.button]);if(s.innerHTML=o.Z+" "+t.api.i18n.t("Select"),s.addEventListener("click",(function(e){return t.onSelectFile(t,e)})),r.appendChild(s),t.onUploadFile){var l=e.element("div",[t.api.styles.button]);l.innerHTML="".concat(i.Z," ").concat(t.api.i18n.t("Upload")),l.style.marginLeft="-2px",l.addEventListener("click",(function(e){return t.onUploadFile(t,e)})),r.appendChild(l)}return r}},{key:"switchInput",value:function(t,n){var o=e.element("div","editor-switch"),i=e.element("input",null,{type:"checkbox",id:t}),r=e.element("label","label-default",{for:t}),a=e.element("label","",{for:t});return a.innerHTML=n,o.append(i,r,a),o}}],null&&l(t.prototype,null),n&&l(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()},689:(e,t,n)=>{n.d(t,{default:()=>S});var o=n(379),i=n.n(o),r=n(795),a=n.n(r),s=n(569),l=n.n(s),c=n(565),u=n.n(c),d=n(216),p=n.n(d),h=n(589),f=n.n(h),g=n(46),v={};v.styleTagTransform=f(),v.setAttributes=u(),v.insert=l().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),i()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;var b=n(599);class m{constructor(){this.selection=null,this.savedSelectionRange=null,this.isFakeBackgroundEnabled=!1,this.commandBackground="backColor",this.commandRemoveFormat="removeFormat"}isElement(e){return e&&"object"==typeof e&&e.nodeType&&e.nodeType===Node.ELEMENT_NODE}isContentEditable(e){return"true"===e.contentEditable}isNativeInput(e){return!(!e||!e.tagName)&&["INPUT","TEXTAREA"].includes(e.tagName)}canSetCaret(e){let t=!0;if(this.isNativeInput(e))switch(e.type){case"file":case"checkbox":case"radio":case"hidden":case"submit":case"button":case"image":case"reset":t=!1}else t=this.isContentEditable(e);return t}CSS(){return{editorWrapper:"codex-editor",editorZone:"codex-editor__redactor"}}anchorNode(){const e=window.getSelection();return e?e.anchorNode:null}anchorElement(){const e=window.getSelection();if(!e)return null;const t=e.anchorNode;return t?this.isElement(t)?t:t.parentElement:null}anchorOffset(){const e=window.getSelection();return e?e.anchorOffset:null}isCollapsed(){const e=window.getSelection();return e?e.isCollapsed:null}isAtEditor(){const e=m.get();let t=e.anchorNode||e.focusNode;t&&t.nodeType===Node.TEXT_NODE&&(t=t.parentNode);let n=null;return t&&(n=t.closest(`.${m.CSS.editorZone}`)),n&&n.nodeType===Node.ELEMENT_NODE}isSelectionExists(){return!!m.get().anchorNode}static get range(){const e=window.getSelection();return e&&e.rangeCount?e.getRangeAt(0):null}static get rect(){let e,t=document.selection,n={x:0,y:0,width:0,height:0};if(t&&"Control"!==t.type)return e=t.createRange(),n.x=e.boundingLeft,n.y=e.boundingTop,n.width=e.boundingWidth,n.height=e.boundingHeight,n;if(!window.getSelection)return n;if(t=window.getSelection(),null===t.rangeCount||isNaN(t.rangeCount))return n;if(0===t.rangeCount)return n;if(e=t.getRangeAt(0).cloneRange(),e.getBoundingClientRect&&(n=e.getBoundingClientRect()),0===n.x&&0===n.y){const t=document.createElement("span");if(t.getBoundingClientRect){t.appendChild(document.createTextNode("​")),e.insertNode(t),n=t.getBoundingClientRect();const o=t.parentNode;o.removeChild(t),o.normalize()}}return n}static get text(){return window.getSelection?window.getSelection().toString():""}get(){return window.getSelection()}setCursor(e,t=0){const n=document.createRange(),o=window.getSelection();if(this.isNativeInput(e)){if(!this.canSetCaret(e))return;return e.focus(),e.selectionStart=e.selectionEnd=t,e.getBoundingClientRect()}return n.setStart(e,t),n.setEnd(e,t),o.removeAllRanges(),o.addRange(n),n.getBoundingClientRect()}removeFakeBackground(){this.isFakeBackgroundEnabled&&(this.isFakeBackgroundEnabled=!1,document.execCommand(this.commandRemoveFormat))}setFakeBackground(){document.execCommand(this.commandBackground,!1,"#a8d6ff"),this.isFakeBackgroundEnabled=!0}save(){this.savedSelectionRange=m.range}restore(){if(!this.savedSelectionRange)return;const e=window.getSelection();e.removeAllRanges(),e.addRange(this.savedSelectionRange)}clearSaved(){this.savedSelectionRange=null}collapseToEnd(){const e=window.getSelection(),t=document.createRange();t.selectNodeContents(e.focusNode),t.collapse(!1),e.removeAllRanges(),e.addRange(t)}findParentTag(e,t=null,n=10){const o=window.getSelection();let i=null;return o&&o.anchorNode&&o.focusNode?([o.anchorNode,o.focusNode].forEach((o=>{let r=n;for(;r>0&&o.parentNode&&(o.tagName!==e||(i=o,t&&o.classList&&!o.classList.contains(t)&&(i=null),!i));)o=o.parentNode,r--})),i):null}expandToTag(e){const t=window.getSelection();t.removeAllRanges();const n=document.createRange();n.selectNodeContents(e),t.addRange(n)}}const y='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>';function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==w(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==w(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===w(i)?i:String(i)),o)}var i}var S=function(){function e(t){t.data;var n=t.config,o=t.api;t.readOnly,function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.toolbar=o.toolbar,this.inlineToolbar=o.inlineToolbar,this.tooltip=o.tooltip,this.i18n=o.i18n,this.config=n,this.selection=new m,this.commandLink="createLink",this.commandUnlink="unlink",this.CSS={wrapper:"plugin-options-wrapper",wrapperShowed:"plugin-options-wrapper-showed",button:"ce-inline-tool",buttonActive:"ce-inline-tool--active",buttonModifier:"ce-inline-tool--link",buttonUnlink:"ce-inline-tool--unlink",input:"plugin-option-input",select:"plugin-option-input"},this.avalaibleDesign=this.config.avalaibleDesign||[["bouton","link-btn"],["dissimulé","ninja"]],this.nodes={wrapper:null,input:null,selectTarget:null,selectRel:null,button:null},this.inputOpened=!1}var t,n,o;return t=e,n=[{key:"render",value:function(){return this.nodes.button=document.createElement("button"),this.nodes.button.type="button",this.nodes.button.classList.add(this.CSS.button,this.CSS.buttonModifier),this.nodes.button.appendChild(e.iconSvg("link")),this.nodes.button.appendChild(e.iconSvg("unlink")),this.nodes.button}},{key:"renderActions",value:function(){var e=this;this.nodes.input=b.Z.element("input",this.CSS.input,{placeholder:"https://..."}),this.nodes.hideForBot=b.Z.switchInput("hideForBot",this.i18n.t("Dissimuler pour les robots")),this.nodes.targetBlank=b.Z.switchInput("targetBlank",this.i18n.t("Ouvrir dans un nouvel onglet")),this.nodes.selectDesign=b.Z.element("select",this.CSS.select),b.Z.option(this.nodes.selectDesign,"0",this.i18n.t("Style"),{disabled:"disabled"}),b.Z.option(this.nodes.selectDesign,"");for(var t=0;t<this.avalaibleDesign.length;t++)b.Z.option(this.nodes.selectDesign,this.avalaibleDesign[t][1],this.avalaibleDesign[t][0]);return this.config.design&&(this.nodes.selectDesign.value=this.config.design),this.nodes.wrapper=document.createElement("div"),this.nodes.wrapper.classList.add(this.CSS.wrapper),this.nodes.wrapper.append(this.nodes.input,this.nodes.hideForBot,this.nodes.targetBlank,this.nodes.selectDesign),this.nodes.wrapper.addEventListener("change",(function(t){e.save(t)})),this.nodes.wrapper.addEventListener("keydown",(function(t){13===t.keyCode&&(e.selection.collapseToEnd(),e.inlineToolbar.close())})),this.nodes.wrapper}},{key:"surround",value:function(e){if(e){this.inputOpened?(this.selection.restore(),this.selection.removeFakeBackground()):(this.selection.setFakeBackground(),this.selection.save());var t=this.selection.findParentTag("A");if(t)return this.selection.expandToTag(t),this.unlink(),this.closeActions(),this.checkState(),void this.toolbar.close()}this.toggleActions()}},{key:"shortcut",get:function(){return this.config.shortcut||"CMD+K"}},{key:"title",get:function(){return"Hyperlink"}},{key:"checkState",value:function(){var e=this.selection.findParentTag("A");if(e){this.nodes.button.classList.add(this.CSS.buttonUnlink),this.nodes.button.classList.add(this.CSS.buttonActive),this.openActions();var t=e.getAttribute("href"),n=e.getAttribute("target"),o=e.getAttribute("rel"),i=e.getAttribute("class");this.nodes.input.value=t||"",this.nodes.hideForBot.querySelector("input").checked=!!o,this.nodes.targetBlank.querySelector("input").checked=!!n,this.nodes.selectDesign.value=i||"0",this.selection.save()}else this.nodes.button.classList.remove(this.CSS.buttonUnlink),this.nodes.button.classList.remove(this.CSS.buttonActive);return!!e}},{key:"clear",value:function(){this.closeActions()}},{key:"toggleActions",value:function(){this.inputOpened?this.closeActions(!1):this.openActions(!0)}},{key:"openActions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.nodes.wrapper.classList.add(this.CSS.wrapperShowed),e&&this.nodes.input.focus(),this.inputOpened=!0}},{key:"closeActions",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.selection.isFakeBackgroundEnabled){var t=new m;t.save(),this.selection.restore(),this.selection.removeFakeBackground(),t.restore()}this.nodes.wrapper.classList.remove(this.CSS.wrapperShowed),this.nodes.input.value="",this.nodes.targetBlank.querySelector("input").checked=!1,this.nodes.hideForBot.querySelector("input").checked=!1,this.nodes.selectDesign.value="",e&&this.selection.clearSaved(),this.inputOpened=!1}},{key:"save",value:function(e){if(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),!(this.nodes.input.value||"").trim())return console.log("unlink"),this.selection.restore(),void this.unlink();this.selection.restore(),this.selection.removeFakeBackground(),this.insertLink()}},{key:"insertLink",value:function(){var e=this.nodes.input.value||"",t=this.nodes.targetBlank.querySelector("input").checked?"_blank":"",n=this.nodes.hideForBot.querySelector("input").checked?"encrypt":"",o=this.nodes.selectDesign.value||"",i=this.initSelection?this.initSelection:this.selection.findParentTag("A");return i?this.selection.expandToTag(i):(document.execCommand(this.commandLink,!1,"#"),i=this.selection.findParentTag("A"),this.initSelection=i),i&&(i.href=e,i.href=e,t?i.target=t:i.removeAttribute("target"),n?i.rel=n:i.removeAttribute("rel"),o?i.className=o:i.removeAttribute("class")),i}},{key:"unlink",value:function(){document.execCommand(this.commandUnlink)}}],o=[{key:"toolbox",get:function(){return{icon:y,title:"Link"}}},{key:"isInline",get:function(){return!0}},{key:"sanitize",get:function(){return{a:{href:!0,target:!0,rel:!0,class:!0}}}},{key:"iconSvg",value:function(e){var t;return(t=(t=(new DOMParser).parseFromString("link"===e?y:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>',"text/xml")).firstChild).classList.add("icon","icon--"+e),t}}],n&&k(t.prototype,n),o&&k(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}()},46:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),i=n.n(o),r=n(645),a=n.n(r)()(i());a.push([e.id,'.ninja {\n    text-decoration: none !important;\n    color: inherit !important;\n    border-bottom: 1px dotted #333;\n}\n\n.link-btn {\n    padding: 6px 12px;\n    margin-bottom: 0;\n    border-radius: 3px;\n    border: 1px solid transparent;\n    cursor: pointer;\n    color: #fff;\n    background-color: #3c8dbc;\n    border-color: #367fa9;\n    outline: none;\n    text-decoration: none !important;\n}\n\n.link-btn:hover {\n    color: #fff !important;\n}\n\n.editor-switch {\n    padding-left: 4px;\n    padding-right: 10px;\n    margin-bottom: 10px;\n    margin-top: 5px;\n}\n\n.editor-switch > input[type="checkbox"] {\n    display: none;\n}\n\n.editor-switch label {\n    font-weight: normal;\n}\n.editor-switch > .label-default {\n    cursor: pointer;\n    height: 0px;\n    position: relative;\n    width: 30px;\n}\n\n.editor-switch > .label-default::before {\n    background: rgb(0, 0, 0);\n    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);\n    border-radius: 8px;\n    content: "";\n    height: 12px;\n    margin-top: -5px;\n    position: absolute;\n    opacity: 0.3;\n    transition: all 0.4s ease-in-out;\n    width: 20px;\n}\n.editor-switch > .label-default::after {\n    background: rgb(255, 255, 255);\n    border-radius: 16px;\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);\n    content: "";\n    height: 16px;\n    left: -4px;\n    position: absolute;\n    top: -7px;\n    transition: all 0.3s ease-in-out;\n    width: 16px;\n}\n.editor-switch > input[type="checkbox"]:checked + .label-default::before {\n    background: inherit;\n    opacity: 0.5;\n}\n.editor-switch > input[type="checkbox"]:checked + .label-default::after {\n    background: inherit;\n    left: 10px;\n}\n\n.plugin-option-input {\n    border: 1px solid rgba(201, 201, 204, 0.48);\n    box-shadow: inset 0 1px 2px 0 rgb(35 44 72 / 6%);\n    border-radius: 5px;\n    padding: 5px 8px;\n    margin-bottom: 10px;\n    outline: none;\n    width: 100%;\n    box-sizing: border-box;\n    background: #fff;\n}\n.plugin-options-wrapper {\n    outline: none;\n    border: 0;\n    border-radius: 0 0 4px 4px;\n    margin: 0;\n    font-size: 13px;\n    padding: 10px;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    display: none;\n    font-weight: 500;\n    border-top: 1px solid rgba(201, 201, 204, 0.48);\n}\n\n.plugin-options-wrapper-showed {\n    display: block;\n}\n',""]);const s=a},745:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(81),i=n.n(o),r=n(645),a=n.n(r)()(i());a.push([e.id,".cdx-input-full {\n    width: 100%;\n}\n",""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);o&&a[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},168:(e,t,n)=>{n.d(t,{Z:()=>o});const o='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">  <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/></svg>\n'},587:(e,t,n)=>{n.d(t,{Z:()=>o});const o='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/></svg>\n'},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},a=[],s=0;s<e.length;s++){var l=e[s],c=o.base?l[0]+o.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var p=n(d),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=i(h,o);o.byIndex=s,t.splice(s,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var s=n(r[a]);t[s].references--}for(var l=o(e,i),c=0;c<r.length;c++){var u=n(r[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=l}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var o={};return(()=>{n.d(o,{default:()=>w});var e=n(379),t=n.n(e),i=n(795),r=n.n(i),a=n(569),s=n.n(a),l=n(565),c=n.n(l),u=n(216),d=n.n(u),p=n(589),h=n.n(p),f=n(745),g={};g.styleTagTransform=h(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=d(),t()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;var v=n(599),b=n(689);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==m(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==m(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===m(i)?i:String(i)),o)}var i}var w=function(){function e(t){var n=t.api,o=t.data;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=n,this.data=o||{url:"",hideForBot:!0,targetBlank:!1},this._CSS={classWrapper:"cdx-anchor-tune-wrapper",classIcon:"cdx-anchor-tune-icon",classInput:"cdx-anchor-tune-input"},this.nodes={},this.i18n=n.i18n}var t,n,o;return t=e,o=[{key:"isTune",get:function(){return!0}}],(n=[{key:"render",value:function(){var e=document.createElement("div"),t=document.createElement("div");return t.classList.add(this._CSS.classIcon),t.appendChild(b.default.iconSvg("link",12,12)),this.nodes.url=v.Z.input(this,["cdx-input-labeled","cdx-input-full"],"<a href=#>image</a>",this.data.url),this.nodes.hideForBot=v.Z.switchInput("hideForBot",this.i18n.t("Dissimuler pour les robots")),this.nodes.targetBlank=v.Z.switchInput("targetBlank",this.i18n.t("Ouvrir dans un nouvel onglet")),e.appendChild(t),e.appendChild(this.nodes.url),e.appendChild(this.nodes.hideForBot),e.appendChild(this.nodes.targetBlank),e}},{key:"save",value:function(){return this.data}}])&&y(t.prototype,n),o&&y(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}()})(),o.default})()));