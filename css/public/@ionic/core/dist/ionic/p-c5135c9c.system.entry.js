var __awaiter=this&&this.__awaiter||function(e,t,i,n){function r(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,o){function a(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n["throw"](e))}catch(e){o(e)}}function l(e){e.done?i(e.value):r(e.value).then(a,s)}l((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,r,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return l([e,t])}}function l(a){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(o=a[0]&2?r["return"]:a[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;if(r=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;r=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(o=i.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(a[0]===6&&i.label<o[1]){i.label=o[1];o=a;break}if(o&&i.label<o[2]){i.label=o[2];i.ops.push(a);break}if(o[2])i.ops.pop();i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e];r=0}finally{n=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-aa4f3ccf.system.js","./p-a25e771f.system.js","./p-8278cb8e.system.js","./p-4ca794f9.system.js","./p-c38d92b7.system.js"],(function(e){"use strict";var t,i,n,r,o,a,s,l,c,p,u,d;return{setters:[function(e){t=e.r;i=e.e;n=e.h;r=e.H;o=e.i},function(e){a=e.b},function(e){s=e.r;l=e.g},function(e){c=e.a;p=e.b;u=e.h},function(e){d=e.c}],execute:function(){var f=":host{padding-left:16px;padding-right:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host::-webkit-scrollbar{display:none}:host .picker-item{height:34px;line-height:34px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty{scroll-snap-align:none}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}";var h=":host{padding-left:16px;padding-right:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host::-webkit-scrollbar{display:none}:host .picker-item{height:34px;line-height:34px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty{scroll-snap-align:none}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}:host .picker-item-active{color:var(--ion-color-base)}";var v=e("ion_picker_column_internal",function(){function e(e){var n=this;t(this,e);this.ionChange=i(this,"ionChange",7);this.hapticsStarted=false;this.isColumnVisible=false;this.isActive=false;this.items=[];this.color="primary";this.numericInput=false;this.centerPickerItemInView=function(e,t){if(t===void 0){t=true}n.el.scroll({top:e.offsetTop-3*e.clientHeight+e.clientHeight/2,left:0,behavior:t?"smooth":undefined})};this.inputModeChange=function(e){if(!n.numericInput){return}var t=e.detail,i=t.useInputMode,r=t.inputModeColumn;var o=r===undefined||r===n.el;if(!i||!o){n.isActive=false;return}n.isActive=true};this.initializeScrollListener=function(){var e=n.el;var t;var i=n.activeItem;var r=function(){s((function(){if(t){clearTimeout(t);t=undefined}if(!n.hapticsStarted){c();n.hapticsStarted=true}var r=e.getBoundingClientRect();var o=r.x+r.width/2;var a=r.y+r.height/2;var s=e.shadowRoot.elementFromPoint(o,a);if(i!==null){i.classList.remove(m)}if(s!==i){p()}i=s;s.classList.add(m);t=setTimeout((function(){var e=s.getAttribute("data-index");if(e===null){return}var t=parseInt(e,10);var i=n.items[t];if(i.value!==n.value){n.value=i.value;u();n.hapticsStarted=false}}),250)}))};s((function(){e.addEventListener("scroll",r);n.destroyScrollListener=function(){e.removeEventListener("scroll",r)}}))}}e.prototype.valueChange=function(){if(this.isColumnVisible){var e=this,t=e.items,i=e.value;this.scrollActiveItemIntoView();var n=t.find((function(e){return e.value===i}));if(n){this.ionChange.emit(n)}}};e.prototype.componentWillLoad=function(){var e=this;var t=function(t){var i;var n=t[0];if(n.isIntersecting){var r=l(e.el).querySelector("."+m);r===null||r===void 0?void 0:r.classList.remove(m);e.scrollActiveItemIntoView();(i=e.activeItem)===null||i===void 0?void 0:i.classList.add(m);e.initializeScrollListener();e.isColumnVisible=true}else{if(e.destroyScrollListener){e.destroyScrollListener();e.destroyScrollListener=undefined}e.isColumnVisible=false}};new IntersectionObserver(t,{threshold:.01}).observe(this.el);var i=this.el.closest("ion-picker-internal");if(i!==null){i.addEventListener("ionInputModeChange",(function(t){return e.inputModeChange(t)}))}};e.prototype.scrollActiveItemIntoView=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){e=this.activeItem;if(e){this.centerPickerItemInView(e,false)}return[2]}))}))};Object.defineProperty(e.prototype,"activeItem",{get:function(){return l(this.el).querySelector('.picker-item[data-value="'+this.value+'"]')},enumerable:false,configurable:true});e.prototype.render=function(){var e;var t=this;var i=this,o=i.items,s=i.color,l=i.isActive,c=i.numericInput;var p=a(this);return n(r,{tabindex:0,class:d(s,(e={},e[p]=true,e["picker-column-active"]=l,e["picker-column-numeric-input"]=c,e))},n("div",{class:"picker-item picker-item-empty"}," "),n("div",{class:"picker-item picker-item-empty"}," "),n("div",{class:"picker-item picker-item-empty"}," "),o.map((function(e,i){return n("div",{class:"picker-item","data-value":e.value,"data-index":i,onClick:function(e){t.centerPickerItemInView(e.target)}},e.text)})),n("div",{class:"picker-item picker-item-empty"}," "),n("div",{class:"picker-item picker-item-empty"}," "),n("div",{class:"picker-item picker-item-empty"}," "))};Object.defineProperty(e.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChange"]}},enumerable:false,configurable:true});return e}());var m="picker-item-active";v.style={ios:f,md:h}}}}));