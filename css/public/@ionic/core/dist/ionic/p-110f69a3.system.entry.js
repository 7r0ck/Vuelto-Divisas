var __awaiter=this&&this.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{l(i.next(e))}catch(e){o(e)}}function s(e){try{l(i["throw"](e))}catch(e){o(e)}}function l(e){e.done?n(e.value):r(e.value).then(a,s)}l((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return l([e,t])}}function l(a){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;r=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(e){a=[6,e];r=0}finally{i=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-aa4f3ccf.system.js","./p-a25e771f.system.js","./p-8278cb8e.system.js","./p-8cbcdebf.system.js","./p-c38d92b7.system.js","./p-8b8d1fdb.system.js"],(function(e){"use strict";var t,n,i,r,o,a,s,l,c,d,u,p,h,f,v,m;return{setters:[function(e){t=e.r;n=e.e;i=e.h;r=e.H;o=e.i},function(e){a=e.b},function(e){s=e.f;l=e.j;c=e.d;d=e.e},function(e){u=e.c;p=e.b;h=e.a;f=e.s},function(e){v=e.h;m=e.g},function(){}],execute:function(){var b=function(e,t,n){if(typeof MutationObserver==="undefined"){return}var i=new MutationObserver((function(e){n(g(e,t))}));i.observe(e,{childList:true,subtree:true});return i};var g=function(e,t){var n;e.forEach((function(e){for(var i=0;i<e.addedNodes.length;i++){n=y(e.addedNodes[i],t)||n}}));return n};var y=function(e,t){if(e.nodeType!==1){return undefined}var n=e.tagName===t.toUpperCase()?[e]:Array.from(e.querySelectorAll(t));return n.find((function(t){return t.value===e.value}))};var x=":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px;opacity:0.33}";var w=":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px;-webkit-transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:0.55}:host-context(.item-label-stacked) .select-icon,:host-context(.item-label-floating:not(.item-fill-outline)) .select-icon,:host-context(.item-label-floating.item-fill-outline){-webkit-transform:translate3d(0,  -9px,  0);transform:translate3d(0,  -9px,  0)}:host-context(.item-has-focus) .select-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host-context(.item-has-focus.item-label-stacked) .select-icon,:host-context(.item-has-focus.item-label-floating:not(.item-fill-outline)) .select-icon{-webkit-transform:translate3d(0,  -9px,  0) rotate(180deg);transform:translate3d(0,  -9px,  0) rotate(180deg)}:host-context(ion-item.ion-focused) .select-icon,:host-context(.item-has-focus) .select-icon{color:var(--highlight-color-focused);opacity:1}";var k=e("ion_select",function(){function e(e){var i=this;t(this,e);this.ionChange=n(this,"ionChange",7);this.ionCancel=n(this,"ionCancel",7);this.ionFocus=n(this,"ionFocus",7);this.ionBlur=n(this,"ionBlur",7);this.ionStyle=n(this,"ionStyle",7);this.inputId="ion-sel-"+z++;this.didInit=false;this.isExpanded=false;this.disabled=false;this.cancelText="Cancel";this.okText="OK";this.name=this.inputId;this.multiple=false;this.interface="alert";this.interfaceOptions={};this.onClick=function(e){i.setFocus();i.open(e)};this.onFocus=function(){i.ionFocus.emit()};this.onBlur=function(){i.ionBlur.emit()}}e.prototype.styleChanged=function(){this.emitStyle()};e.prototype.valueChanged=function(){this.emitStyle();if(this.didInit){this.ionChange.emit({value:this.value})}};e.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(t){this.updateOverlayOptions();this.emitStyle();this.mutationO=b(this.el,"ion-select-option",(function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){this.updateOverlayOptions();return[2]}))}))}));return[2]}))}))};e.prototype.disconnectedCallback=function(){if(this.mutationO){this.mutationO.disconnect();this.mutationO=undefined}};e.prototype.componentDidLoad=function(){this.didInit=true};e.prototype.open=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,i,r;var o=this;return __generator(this,(function(a){switch(a.label){case 0:if(this.disabled||this.isExpanded){return[2,undefined]}n=this;return[4,this.createOverlay(e)];case 1:t=n.overlay=a.sent();this.isExpanded=true;t.onDidDismiss().then((function(){o.overlay=undefined;o.isExpanded=false;o.setFocus()}));return[4,t.present()];case 2:a.sent();if(this.interface==="popover"){i=this.childOpts.map((function(e){return e.value})).indexOf(this.value);i=i>-1?i:0;r=t.querySelector(".select-interface-option:nth-child("+(i+1)+")");if(r){s(r)}}return[2,t]}}))}))};e.prototype.createOverlay=function(e){var t=this.interface;if(t==="action-sheet"&&this.multiple){console.warn('Select interface cannot be "'+t+'" with a multi-value select. Using the "alert" interface instead.');t="alert"}if(t==="popover"&&!e){console.warn('Select interface cannot be a "'+t+'" without passing an event. Using the "alert" interface instead.');t="alert"}if(t==="action-sheet"){return this.openActionSheet()}if(t==="popover"){return this.openPopover(e)}return this.openAlert()};e.prototype.updateOverlayOptions=function(){var e=this.overlay;if(!e){return}var t=this.childOpts;var n=this.value;switch(this.interface){case"action-sheet":e.buttons=this.createActionSheetButtons(t,n);break;case"popover":var i=e.querySelector("ion-select-popover");if(i){i.options=this.createPopoverOptions(t,n)}break;case"alert":var r=this.multiple?"checkbox":"radio";e.inputs=this.createAlertInputs(t,r,n);break}};e.prototype.createActionSheetButtons=function(e,t){var n=this;var i=e.map((function(e){var i=C(e);var r=Array.from(e.classList).filter((function(e){return e!=="hydrated"})).join(" ");var o=E+" "+r;return{role:O(t,i,n.compareWith)?"selected":"",text:e.textContent,cssClass:o,handler:function(){n.value=i}}}));i.push({text:this.cancelText,role:"cancel",handler:function(){n.ionCancel.emit()}});return i};e.prototype.createAlertInputs=function(e,t,n){var i=this;var r=e.map((function(e){var r=C(e);var o=Array.from(e.classList).filter((function(e){return e!=="hydrated"})).join(" ");var a=E+" "+o;return{type:t,cssClass:a,label:e.textContent||"",value:r,checked:O(n,r,i.compareWith),disabled:e.disabled}}));return r};e.prototype.createPopoverOptions=function(e,t){var n=this;var i=e.map((function(e){var i=C(e);var r=Array.from(e.classList).filter((function(e){return e!=="hydrated"})).join(" ");var o=E+" "+r;return{text:e.textContent||"",cssClass:o,value:i,checked:O(t,i,n.compareWith),disabled:e.disabled,handler:function(e){n.value=e;if(!n.multiple){n.close()}}}}));return i};e.prototype.openPopover=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,i,r,o,s,l,c,d;return __generator(this,(function(p){t=this.interfaceOptions;n=a(this);i=n==="md"?false:true;r=this.multiple;o=this.value;s=e;l="auto";c=this.el.closest("ion-item");if(c&&(c.classList.contains("item-label-floating")||c.classList.contains("item-label-stacked"))){s=Object.assign(Object.assign({},e),{detail:{ionShadowTarget:c}});l="cover"}d=Object.assign(Object.assign({mode:n,event:s,alignment:"center",size:l,showBackdrop:i},t),{component:"ion-select-popover",cssClass:["select-popover",t.cssClass],componentProps:{header:t.header,subHeader:t.subHeader,message:t.message,multiple:r,value:o,options:this.createPopoverOptions(this.childOpts,o)}});return[2,u.create(d)]}))}))};e.prototype.openActionSheet=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,n;return __generator(this,(function(i){e=a(this);t=this.interfaceOptions;n=Object.assign(Object.assign({mode:e},t),{buttons:this.createActionSheetButtons(this.childOpts,this.value),cssClass:["select-action-sheet",t.cssClass]});return[2,p.create(n)]}))}))};e.prototype.openAlert=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,n,i,r,o;var s=this;return __generator(this,(function(l){e=this.getLabel();t=e?e.textContent:null;n=this.interfaceOptions;i=this.multiple?"checkbox":"radio";r=a(this);o=Object.assign(Object.assign({mode:r},n),{header:n.header?n.header:t,inputs:this.createAlertInputs(this.childOpts,i,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:function(){s.ionCancel.emit()}},{text:this.okText,handler:function(e){s.value=e}}],cssClass:["select-alert",n.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return[2,h.create(o)]}))}))};e.prototype.close=function(){if(!this.overlay){return Promise.resolve(false)}return this.overlay.dismiss()};e.prototype.getLabel=function(){return l(this.el)};e.prototype.hasValue=function(){return this.getText()!==""};Object.defineProperty(e.prototype,"childOpts",{get:function(){return Array.from(this.el.querySelectorAll("ion-select-option"))},enumerable:false,configurable:true});e.prototype.getText=function(){var e=this.selectedText;if(e!=null&&e!==""){return e}return j(this.childOpts,this.value,this.compareWith)};e.prototype.setFocus=function(){if(this.focusEl){this.focusEl.focus()}};e.prototype.emitStyle=function(){this.ionStyle.emit({interactive:true,"interactive-disabled":this.disabled,select:true,"select-disabled":this.disabled,"has-placeholder":this.placeholder!==undefined,"has-value":this.hasValue(),"has-focus":this.isExpanded})};e.prototype.render=function(){var e;var t=this;var n=this,o=n.disabled,s=n.el,l=n.inputId,u=n.isExpanded,p=n.name,h=n.placeholder,f=n.value;var m=a(this);var b=c(s,l),g=b.labelText,y=b.labelId;d(true,s,p,_(f),o);var x=this.getText();var w=false;var k=x;if(k===""&&h!==undefined){k=h;w=true}var O={"select-text":true,"select-placeholder":w};var C=w?"placeholder":"text";var A=g!==undefined?k!==""?k+", "+g:g:k;return i(r,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":o?"true":null,"aria-label":A,class:(e={},e[m]=true,e["in-item"]=v("ion-item",s),e["select-disabled"]=o,e["select-expanded"]=u,e)},i("div",{"aria-hidden":"true",class:O,part:C},k),i("div",{class:"select-icon",role:"presentation",part:"icon"},i("div",{class:"select-icon-inner"})),i("label",{id:y},A),i("button",{type:"button",disabled:o,id:l,"aria-labelledby":y,"aria-haspopup":"listbox","aria-expanded":""+u,onFocus:this.onFocus,onBlur:this.onBlur,ref:function(e){return t.focusEl=e}}))};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{disabled:["styleChanged"],placeholder:["styleChanged"],isExpanded:["styleChanged"],value:["valueChanged"]}},enumerable:false,configurable:true});return e}());var O=function(e,t,n){if(e===undefined){return false}if(Array.isArray(e)){return e.some((function(e){return A(e,t,n)}))}else{return A(e,t,n)}};var C=function(e){var t=e.value;return t===undefined?e.textContent||"":t};var _=function(e){if(e==null){return undefined}if(Array.isArray(e)){return e.join(",")}return e.toString()};var A=function(e,t,n){if(typeof n==="function"){return n(e,t)}else if(typeof n==="string"){return e[n]===t[n]}else{return Array.isArray(t)?t.includes(e):e===t}};var j=function(e,t,n){if(t===undefined){return""}if(Array.isArray(t)){return t.map((function(t){return S(e,t,n)})).filter((function(e){return e!==null})).join(", ")}else{return S(e,t,n)||""}};var S=function(e,t,n){var i=e.find((function(e){return A(C(e),t,n)}));return i?i.textContent:null};var z=0;var E="select-interface-option";k.style={ios:x,md:w};var F=":host{display:none}";var T=e("ion_select_option",function(){function e(e){t(this,e);this.inputId="ion-selopt-"+I++;this.disabled=false}e.prototype.render=function(){return i(r,{role:"option",id:this.inputId,class:a(this)})};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return e}());var I=0;T.style=F;var P=".sc-ion-select-popover-ios-h ion-list.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-ios,ion-label.sc-ion-select-popover-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";var B=".sc-ion-select-popover-md-h ion-list.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list-header.sc-ion-select-popover-md,ion-label.sc-ion-select-popover-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-list.sc-ion-select-popover-md ion-radio.sc-ion-select-popover-md{opacity:0}ion-item.sc-ion-select-popover-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-popover-md{--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08);--background-focused:var(--ion-color-primary, #3880ff);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #3880ff);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-popover-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #3880ff)}";var L=e("ion_select_popover",function(){function e(e){t(this,e);this.options=[]}e.prototype.onSelect=function(e){this.setChecked(e);this.callOptionHandler(e)};e.prototype.findOptionFromEvent=function(e){var t=this.options;return t.find((function(t){return t.value===e.target.value}))};e.prototype.callOptionHandler=function(e){var t=this.findOptionFromEvent(e);var n=this.getValues(e);if(t&&t.handler){f(t.handler,n)}};e.prototype.rbClick=function(e){this.callOptionHandler(e)};e.prototype.setChecked=function(e){var t=this.multiple;var n=this.findOptionFromEvent(e);if(t&&n){n.checked=e.detail.checked}};e.prototype.getValues=function(e){var t=this,n=t.multiple,i=t.options;if(n){return i.filter((function(e){return e.checked})).map((function(e){return e.value}))}var r=this.findOptionFromEvent(e);return r?r.value:undefined};e.prototype.renderOptions=function(e){var t=this.multiple;switch(t){case true:return this.renderCheckboxOptions(e);default:return this.renderRadioOptions(e)}};e.prototype.renderCheckboxOptions=function(e){return e.map((function(e){return i("ion-item",{class:m(e.cssClass)},i("ion-checkbox",{slot:"start",value:e.value,disabled:e.disabled,checked:e.checked}),i("ion-label",null,e.text))}))};e.prototype.renderRadioOptions=function(e){var t=this;var n=e.filter((function(e){return e.checked})).map((function(e){return e.value}))[0];return i("ion-radio-group",{value:n},e.map((function(e){return i("ion-item",{class:m(e.cssClass)},i("ion-label",null,e.text),i("ion-radio",{value:e.value,disabled:e.disabled,onClick:function(e){return t.rbClick(e)}}))})))};e.prototype.render=function(){var e=this,t=e.header,n=e.message,o=e.options,s=e.subHeader;var l=s!==undefined||n!==undefined;return i(r,{class:a(this)},i("ion-list",null,t!==undefined&&i("ion-list-header",null,t),l&&i("ion-item",null,i("ion-label",{class:"ion-text-wrap"},s!==undefined&&i("h3",null,s),n!==undefined&&i("p",null,n))),this.renderOptions(o)))};return e}());L.style={ios:P,md:B}}}}));