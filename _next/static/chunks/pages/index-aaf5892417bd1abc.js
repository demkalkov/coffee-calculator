(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2242:function(e,t,n){let r=n(7294),l=r.forwardRef(function({title:e,titleId:t,...n},l){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z",clipRule:"evenodd"}))});e.exports=l},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3452)}])},3452:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ec}});var r,l,a,o,s,u,i,c,f=n(5893);class d{static save(e,t){localStorage.setItem(e,JSON.stringify(t))}static getValueOrDefault(e,t){let n=localStorage.getItem(e);if(n)try{let e=JSON.parse(n);return e}catch(e){}return t}}var p=n(7294);function m(e,t,n,r){return"volume"===r?Math.round(t*e):"weight"===r?Math.round(n/e*100)/100:Math.round(n/t*100)/100}var h=n(2878),g=n.n(h);function v(e){let{value:t,onChange:n,className:r}=e,l=e=>{n(+e.target.value)};return(0,f.jsx)("input",{className:g().input+" ".concat(r||""),min:0,type:"number",value:t,onChange:l})}function b(e){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{children:"Beans"}),(0,f.jsx)(v,{...e})]})}function y(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,y),r}function w(...e){return e.filter(Boolean).join(" ")}var x=((r=x||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),E=((l=E||{})[l.Unmount=0]="Unmount",l[l.Hidden=1]="Hidden",l);function j({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:l,visible:a=!0,name:o}){let s=P(t,e);if(a)return S(s,n,r,o);let u=null!=l?l:0;if(2&u){let{static:e=!1,...t}=s;if(e)return S(t,n,r,o)}if(1&u){let{unmount:e=!0,...t}=s;return y(e?0:1,{0:()=>null,1:()=>S({...t,hidden:!0,style:{display:"none"}},n,r,o)})}return S(s,n,r,o)}function S(e,t={},n,r){let{as:l=n,children:a,refName:o="ref",...s}=O(e,["unmount","static"]),u=void 0!==e.ref?{[o]:e.ref}:{},i="function"==typeof a?a(t):a;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let c={};if(t){let e=!1,n=[];for(let[r,l]of Object.entries(t))"boolean"==typeof l&&(e=!0),!0===l&&n.push(r);e&&(c["data-headlessui-state"]=n.join(" "))}if(l===p.Fragment&&Object.keys(C(s)).length>0){if(!(0,p.isValidElement)(i)||Array.isArray(i)&&i.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=i.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>w(null==e?void 0:e.className(...t),s.className):w(null==e?void 0:e.className,s.className);return(0,p.cloneElement)(i,Object.assign({},P(i.props,C(O(s,["ref"]))),c,u,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(i.ref,u.ref),t?{className:t}:{}))}return(0,p.createElement)(l,Object.assign({},O(s,["ref"]),l!==p.Fragment&&u,l!==p.Fragment&&c),i)}function P(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let l of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;l(t,...r)}}});return t}function N(e){var t;return Object.assign((0,p.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function C(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function O(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}var I=Object.defineProperty,k=(e,t,n)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t,n)=>(k(e,"symbol"!=typeof t?t+"":t,n),n);let T=new class{constructor(){D(this,"current",this.detect()),D(this,"handoffState","pending"),D(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},R=(e,t)=>{T.isServer?(0,p.useEffect)(e,t):(0,p.useLayoutEffect)(e,t)},_=function(e){let t;let n=(t=(0,p.useRef)(e),R(()=>{t.current=e},[e]),t);return p.useCallback((...e)=>n.current(...e),[n])},A=Symbol();function B(...e){let t=(0,p.useRef)(e);(0,p.useEffect)(()=>{t.current=e},[e]);let n=_(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[A]))?void 0:n}let L=null!=(i=p.useId)?i:function(){let e=function(){let[e,t]=(0,p.useState)(T.isHandoffComplete);return e&&!1===T.isHandoffComplete&&t(!1),(0,p.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,p.useEffect)(()=>T.handoff(),[]),e}(),[t,n]=p.useState(e?()=>T.nextId():null);return R(()=>{null===t&&n(T.nextId())},[t]),null!=t?""+t:void 0};var F=((a=F||{}).Space=" ",a.Enter="Enter",a.Escape="Escape",a.Backspace="Backspace",a.Delete="Delete",a.ArrowLeft="ArrowLeft",a.ArrowUp="ArrowUp",a.ArrowRight="ArrowRight",a.ArrowDown="ArrowDown",a.Home="Home",a.End="End",a.PageUp="PageUp",a.PageDown="PageDown",a.Tab="Tab",a);let H=(0,p.createContext)(null);H.displayName="OpenClosedContext";var M=((o=M||{})[o.Open=1]="Open",o[o.Closed=2]="Closed",o[o.Closing=4]="Closing",o[o.Opening=8]="Opening",o);function $({value:e,children:t}){return p.createElement(H.Provider,{value:e},t)}function U(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}let K=null!=(c=p.startTransition)?c:function(e){e()};var V=((s=V||{})[s.Open=0]="Open",s[s.Closed=1]="Closed",s),z=((u=z||{})[u.ToggleDisclosure=0]="ToggleDisclosure",u[u.CloseDisclosure=1]="CloseDisclosure",u[u.SetButtonId=2]="SetButtonId",u[u.SetPanelId=3]="SetPanelId",u[u.LinkPanel=4]="LinkPanel",u[u.UnlinkPanel=5]="UnlinkPanel",u);let J={0:e=>({...e,disclosureState:y(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},W=(0,p.createContext)(null);function X(e){let t=(0,p.useContext)(W);if(null===t){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,X),t}return t}W.displayName="DisclosureContext";let Y=(0,p.createContext)(null);Y.displayName="DisclosureAPIContext";let q=(0,p.createContext)(null);function G(e,t){return y(t.type,J,e,t)}q.displayName="DisclosurePanelContext";let Q=p.Fragment,Z=x.RenderStrategy|x.Static,ee=Object.assign(N(function(e,t){let{defaultOpen:n=!1,...r}=e,l=(0,p.useRef)(null),a=B(t,function(e,t=!0){return Object.assign(e,{[A]:t})}(e=>{l.current=e},void 0===e.as||e.as===p.Fragment)),o=(0,p.useRef)(null),s=(0,p.useRef)(null),u=(0,p.useReducer)(G,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:s,panelRef:o,buttonId:null,panelId:null}),[{disclosureState:i,buttonId:c},f]=u,d=_(e=>{f({type:1});let t=T.isServer?null:l instanceof Node?l.ownerDocument:null!=l&&l.hasOwnProperty("current")&&l.current instanceof Node?l.current.ownerDocument:document;if(!t||!c)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(c):t.getElementById(c);null==n||n.focus()}),m=(0,p.useMemo)(()=>({close:d}),[d]),h=(0,p.useMemo)(()=>({open:0===i,close:d}),[i,d]);return p.createElement(W.Provider,{value:u},p.createElement(Y.Provider,{value:m},p.createElement($,{value:y(i,{0:M.Open,1:M.Closed})},j({ourProps:{ref:a},theirProps:r,slot:h,defaultTag:Q,name:"Disclosure"}))))}),{Button:N(function(e,t){let n=L(),{id:r=`headlessui-disclosure-button-${n}`,...l}=e,[a,o]=X("Disclosure.Button"),s=(0,p.useContext)(q),u=null!==s&&s===a.panelId,i=(0,p.useRef)(null),c=B(i,t,u?null:a.buttonRef);(0,p.useEffect)(()=>{if(!u)return o({type:2,buttonId:r}),()=>{o({type:2,buttonId:null})}},[r,o,u]);let f=_(e=>{var t;if(u){if(1===a.disclosureState)return;switch(e.key){case F.Space:case F.Enter:e.preventDefault(),e.stopPropagation(),o({type:0}),null==(t=a.buttonRef.current)||t.focus()}}else switch(e.key){case F.Space:case F.Enter:e.preventDefault(),e.stopPropagation(),o({type:0})}}),d=_(e=>{e.key===F.Space&&e.preventDefault()}),m=_(t=>{var n;(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r})(t.currentTarget)||e.disabled||(u?(o({type:0}),null==(n=a.buttonRef.current)||n.focus()):o({type:0}))}),h=(0,p.useMemo)(()=>({open:0===a.disclosureState}),[a]),g=function(e,t){let[n,r]=(0,p.useState)(()=>U(e));return R(()=>{r(U(e))},[e.type,e.as]),R(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,i);return j({ourProps:u?{ref:c,type:g,onKeyDown:f,onClick:m}:{ref:c,id:r,type:g,"aria-expanded":e.disabled?void 0:0===a.disclosureState,"aria-controls":a.linkedPanel?a.panelId:void 0,onKeyDown:f,onKeyUp:d,onClick:m},theirProps:l,slot:h,defaultTag:"button",name:"Disclosure.Button"})}),Panel:N(function(e,t){let n=L(),{id:r=`headlessui-disclosure-panel-${n}`,...l}=e,[a,o]=X("Disclosure.Panel"),{close:s}=function e(t){let n=(0,p.useContext)(Y);if(null===n){let n=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("Disclosure.Panel"),u=B(t,a.panelRef,e=>{K(()=>o({type:e?4:5}))});(0,p.useEffect)(()=>(o({type:3,panelId:r}),()=>{o({type:3,panelId:null})}),[r,o]);let i=(0,p.useContext)(H),c=null!==i?(i&M.Open)===M.Open:0===a.disclosureState,f=(0,p.useMemo)(()=>({open:0===a.disclosureState,close:s}),[a,s]);return p.createElement(q.Provider,{value:a.panelId},j({ourProps:{ref:u,id:r},theirProps:l,slot:f,defaultTag:"div",features:Z,visible:c,name:"Disclosure.Panel"}))})});var et=n(2242),en=n(9102),er=n.n(en);function el(e){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{className:"w-full pt-10",children:(0,f.jsx)("div",{className:er().disclosure+" w-full rounded-xl p-2",children:(0,f.jsx)(ee,{children:t=>{var n;let{open:r}=t;return(0,f.jsxs)(f.Fragment,{children:[null===(n=e.onOpen)||void 0===n?void 0:n.call(e,r),(0,f.jsxs)(ee.Button,{className:"flex w-full justify-between px-4 py-2 text-sm focus:outline-none",children:[(0,f.jsxs)("span",{children:["Brew ratio: ",e.value]}),(0,f.jsx)(et,{className:"".concat(r?"rotate-180 transform":""," h-5 w-5")})]}),(0,f.jsxs)(ee.Panel,{className:"px-4 pt-4 pb-2",children:[(0,f.jsx)(v,{...e,className:"w-full"}),(0,f.jsx)("p",{className:"text-sm pt-3 text-sm",children:"Edit beans and water to change the ratio, or edit the input above"})]})]})}})})})})}function ea(e){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{children:"Water"}),(0,f.jsx)(v,{...e})]})}function eo(e){let[t,n]=(0,p.useState)(+e.ratio),[r,l]=(0,p.useState)(+e.beans),[a,o]=(0,p.useState)(+e.water),s=!1,u=e=>{let a=m(t,r,e,s?"ratio":"weight");d.save("calculator-profile",{ratio:t,water:e,beans:a}),s?n(a):l(a),o(e)},i=e=>{let r=m(t,e,a,s?"ratio":"volume");d.save("calculator-profile",{ratio:t,water:r,beans:e}),s?n(r):o(r),l(e)},c=e=>{let t=m(e,r,a,"volume");d.save("calculator-profile",{ratio:e,water:t,beans:r}),o(t),n(e)},h=()=>{n(+e.default.ratio),l(+e.default.beans),o(+e.default.water)},g=e=>{s=e};return(0,f.jsxs)("div",{className:"container flex flex-col items-center",children:[(0,f.jsxs)("h3",{className:"mb-8",style:{fontSize:"1.4em"},children:["Calculate pourover brew",(0,f.jsx)("button",{className:"ml-3",title:"Reset to default",onClick:h,children:"↺"})]}),(0,f.jsxs)("div",{className:"grid grid-cols-2 gap-2",children:[(0,f.jsx)(b,{value:r,onChange:i}),(0,f.jsx)(ea,{value:a,onChange:u})]}),(0,f.jsx)(el,{value:t,onChange:c,onOpen:g})]})}var es=n(9008),eu=n.n(es);let ei={ratio:16.67,water:250,beans:15};function ec(){let[e,t]=(0,p.useState)();return(0,p.useEffect)(()=>{let e=d.getValueOrDefault("calculator-profile",ei);t(e)},[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(eu(),{children:(0,f.jsx)("title",{children:"Coffee calculator"})}),(0,f.jsx)("main",{className:"flex max-w-md mx-auto p-5 md:p-0 md:pt-4 min-h-screen flex-col items-center justify-between",children:e&&(0,f.jsx)(eo,{...e,default:ei})})]})}},2878:function(e){e.exports={input:"input_input__OPNyn"}},9102:function(e){e.exports={disclosure:"ratio_disclosure__hAwu6"}},9008:function(e,t,n){e.exports=n(2636)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);