/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as t,e as i,h as e,H as s,i as n}from"./p-70d27bbc.js";import{b as o}from"./p-6cc127f3.js";import{r,g as a}from"./p-dc344987.js";import{a as p,b as l,h as c}from"./p-bc88d2ac.js";import{c as h}from"./p-1d0d7200.js";let d=class{constructor(e){t(this,e),this.ionChange=i(this,"ionChange",7),this.hapticsStarted=!1,this.isColumnVisible=!1,this.isActive=!1,this.items=[],this.color="primary",this.numericInput=!1,this.centerPickerItemInView=(t,i=!0)=>{this.el.scroll({top:t.offsetTop-3*t.clientHeight+t.clientHeight/2,left:0,behavior:i?"smooth":void 0})},this.inputModeChange=t=>{if(!this.numericInput)return;const{useInputMode:i,inputModeColumn:e}=t.detail;this.isActive=!(!i||void 0!==e&&e!==this.el)},this.initializeScrollListener=()=>{const{el:t}=this;let i,e=this.activeItem;const s=()=>{r((()=>{i&&(clearTimeout(i),i=void 0),this.hapticsStarted||(p(),this.hapticsStarted=!0);const s=t.getBoundingClientRect(),n=t.shadowRoot.elementFromPoint(s.x+s.width/2,s.y+s.height/2);null!==e&&e.classList.remove(m),n!==e&&l(),e=n,n.classList.add(m),i=setTimeout((()=>{const t=n.getAttribute("data-index");if(null===t)return;const i=parseInt(t,10),e=this.items[i];e.value!==this.value&&(this.value=e.value,c(),this.hapticsStarted=!1)}),250)}))};r((()=>{t.addEventListener("scroll",s),this.destroyScrollListener=()=>{t.removeEventListener("scroll",s)}}))}}valueChange(){if(this.isColumnVisible){const{items:t,value:i}=this;this.scrollActiveItemIntoView();const e=t.find((t=>t.value===i));e&&this.ionChange.emit(e)}}componentWillLoad(){new IntersectionObserver((t=>{var i;if(t[0].isIntersecting){const t=a(this.el).querySelector(`.${m}`);null==t||t.classList.remove(m),this.scrollActiveItemIntoView(),null===(i=this.activeItem)||void 0===i||i.classList.add(m),this.initializeScrollListener(),this.isColumnVisible=!0}else this.destroyScrollListener&&(this.destroyScrollListener(),this.destroyScrollListener=void 0),this.isColumnVisible=!1}),{threshold:.01}).observe(this.el);const t=this.el.closest("ion-picker-internal");null!==t&&t.addEventListener("ionInputModeChange",(t=>this.inputModeChange(t)))}async scrollActiveItemIntoView(){const t=this.activeItem;t&&this.centerPickerItemInView(t,!1)}get activeItem(){return a(this.el).querySelector(`.picker-item[data-value="${this.value}"]`)}render(){const{items:t,color:i,isActive:n,numericInput:r}=this,a=o(this);return e(s,{tabindex:0,class:h(i,{[a]:!0,"picker-column-active":n,"picker-column-numeric-input":r})},e("div",{class:"picker-item picker-item-empty"}," "),e("div",{class:"picker-item picker-item-empty"}," "),e("div",{class:"picker-item picker-item-empty"}," "),t.map(((t,i)=>e("div",{class:"picker-item","data-value":t.value,"data-index":i,onClick:t=>{this.centerPickerItemInView(t.target)}},t.text))),e("div",{class:"picker-item picker-item-empty"}," "),e("div",{class:"picker-item picker-item-empty"}," "),e("div",{class:"picker-item picker-item-empty"}," "))}get el(){return n(this)}static get watchers(){return{value:["valueChange"]}}};const m="picker-item-active";d.style={ios:":host{padding-left:16px;padding-right:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host::-webkit-scrollbar{display:none}:host .picker-item{height:34px;line-height:34px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty{scroll-snap-align:none}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}",md:":host{padding-left:16px;padding-right:16px;padding-top:0px;padding-bottom:0px;height:200px;outline:none;font-size:22px;-webkit-scroll-snap-type:y mandatory;-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;overflow-x:hidden;overflow-y:scroll;scrollbar-width:none;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host::-webkit-scrollbar{display:none}:host .picker-item{height:34px;line-height:34px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;scroll-snap-align:center}:host .picker-item-empty{scroll-snap-align:none}:host(.picker-column-active) .picker-item.picker-item-active{color:var(--ion-color-base)}@media (any-hover: hover){:host(:focus){outline:none;background:rgba(var(--ion-color-base-rgb), 0.2)}}:host .picker-item-active{color:var(--ion-color-base)}"};export{d as ion_picker_column_internal}