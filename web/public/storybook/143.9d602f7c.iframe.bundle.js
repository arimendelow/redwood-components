(self.webpackChunkweb=self.webpackChunkweb||[]).push([[143],{74833:function(e,t,r){var n=r(56127),o=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(o,""):e}},56127:function(e){var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},66726:function(e,t,r){var n=r(11611),o=r(82846),a=r(91936),l=Math.max,u=Math.min;e.exports=function(e,t,r){var i,c,s,f,d,h,v=0,p=!1,g=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var r=i,n=c;return i=c=void 0,v=t,f=e.apply(n,r)}function x(e){var r=e-h;return void 0===h||r>=t||r<0||g&&e-v>=s}function _(){var e=o();if(x(e))return w(e);d=setTimeout(_,function(e){var r=t-(e-h);return g?u(r,s-(e-v)):r}(e))}function w(e){return d=void 0,m&&i?b(e):(i=c=void 0,f)}function y(){var e=o(),r=x(e);if(i=arguments,c=this,h=e,r){if(void 0===d)return function(e){return v=e,d=setTimeout(_,t),p?b(e):f}(h);if(g)return clearTimeout(d),d=setTimeout(_,t),b(h)}return void 0===d&&(d=setTimeout(_,t)),f}return t=a(t)||0,n(r)&&(p=!!r.leading,s=(g="maxWait"in r)?l(a(r.maxWait)||0,t):s,m="trailing"in r?!!r.trailing:m),y.cancel=function(){void 0!==d&&clearTimeout(d),v=0,i=h=c=d=void 0},y.flush=function(){return void 0===d?f:w(o())},y}},82846:function(e,t,r){var n=r(77400);e.exports=function(){return n.Date.now()}},19783:function(e,t,r){var n=r(66726),o=r(11611);e.exports=function(e,t,r){var a=!0,l=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(r)&&(a="leading"in r?!!r.leading:a,l="trailing"in r?!!r.trailing:l),n(e,t,{leading:a,maxWait:t,trailing:l})}},91936:function(e,t,r){var n=r(74833),o=r(11611),a=r(55193),l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,i=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=u.test(e);return r||i.test(e)?c(e.slice(2),r?2:8):l.test(e)?NaN:+e}},49143:function(e,t,r){"use strict";r.r(t),r.d(t,{ColorControl:function(){return ve},default:function(){return pe}});var n=r(52595),o=r(27378);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t.indexOf(r=a[n])>=0||(o[r]=e[r]);return o}function u(e){var t=(0,o.useRef)(e),r=(0,o.useRef)((function(e){t.current&&t.current(e)}));return t.current=e,r.current}var i=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=1),e>r?r:e<t?t:e},c=function(e){return"touches"in e},s=function(e){return e&&e.ownerDocument.defaultView||self},f=function(e,t,r){var n=e.getBoundingClientRect(),o=c(t)?function(e,t){for(var r=0;r<e.length;r++)if(e[r].identifier===t)return e[r];return e[0]}(t.touches,r):t;return{left:i((o.pageX-(n.left+s(e).pageXOffset))/n.width),top:i((o.pageY-(n.top+s(e).pageYOffset))/n.height)}},d=function(e){!c(e)&&e.preventDefault()},h=o.memo((function(e){var t=e.onMove,r=e.onKey,n=l(e,["onMove","onKey"]),i=(0,o.useRef)(null),h=u(t),v=u(r),p=(0,o.useRef)(null),g=(0,o.useRef)(!1),m=(0,o.useMemo)((function(){var e=function(e){d(e),(c(e)?e.touches.length>0:e.buttons>0)&&i.current?h(f(i.current,e,p.current)):r(!1)},t=function(){return r(!1)};function r(r){var n=g.current,o=s(i.current),a=r?o.addEventListener:o.removeEventListener;a(n?"touchmove":"mousemove",e),a(n?"touchend":"mouseup",t)}return[function(e){var t=e.nativeEvent,n=i.current;if(n&&(d(t),!function(e,t){return t&&!c(e)}(t,g.current)&&n)){if(c(t)){g.current=!0;var o=t.changedTouches||[];o.length&&(p.current=o[0].identifier)}n.focus(),h(f(n,t,p.current)),r(!0)}},function(e){var t=e.which||e.keyCode;t<37||t>40||(e.preventDefault(),v({left:39===t?.05:37===t?-.05:0,top:40===t?.05:38===t?-.05:0}))},r]}),[v,h]),b=m[0],x=m[1],_=m[2];return(0,o.useEffect)((function(){return _}),[_]),o.createElement("div",a({},n,{onTouchStart:b,onMouseDown:b,className:"react-colorful__interactive",ref:i,onKeyDown:x,tabIndex:0,role:"slider"}))})),v=function(e){return e.filter(Boolean).join(" ")},p=function(e){var t=e.color,r=e.left,n=e.top,a=void 0===n?.5:n,l=v(["react-colorful__pointer",e.className]);return o.createElement("div",{className:l,style:{top:100*a+"%",left:100*r+"%"}},o.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},g=function(e,t,r){return void 0===t&&(t=0),void 0===r&&(r=Math.pow(10,t)),Math.round(r*e)/r},m={grad:.9,turn:360,rad:360/(2*Math.PI)},b=function(e){return"#"===e[0]&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:4===e.length?g(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:8===e.length?g(parseInt(e.substring(6,8),16)/255,2):1}},x=function(e,t){return void 0===t&&(t="deg"),Number(e)*(m[t]||1)},_=function(e){var t=e.s,r=e.l;return{h:e.h,s:(t*=(r<50?r:100-r)/100)>0?2*t/(r+t)*100:0,v:r+t,a:e.a}},w=function(e){var t=e.s,r=e.v,n=e.a,o=(200-t)*r/100;return{h:g(e.h),s:g(o>0&&o<200?t*r/100/(o<=100?o:200-o)*100:0),l:g(o/2),a:g(n,2)}},y=function(e){var t=w(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},C=function(e){var t=w(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},E=function(e){var t=e.h,r=e.s,n=e.v,o=e.a;t=t/360*6,r/=100,n/=100;var a=Math.floor(t),l=n*(1-r),u=n*(1-(t-a)*r),i=n*(1-(1-t+a)*r),c=a%6;return{r:g(255*[n,u,l,l,i,n][c]),g:g(255*[i,n,n,u,l,l][c]),b:g(255*[l,l,i,n,n,u][c]),a:g(o,2)}},k=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},$=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=o<1?k(g(255*o)):"";return"#"+k(t)+k(r)+k(n)+a},N=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,a=Math.max(t,r,n),l=a-Math.min(t,r,n),u=l?a===t?(r-n)/l:a===r?2+(n-t)/l:4+(t-r)/l:0;return{h:g(60*(u<0?u+6:u)),s:g(a?l/a*100:0),v:g(a/255*100),a:o}},M=o.memo((function(e){var t=e.hue,r=e.onChange,n=v(["react-colorful__hue",e.className]);return o.createElement("div",{className:n},o.createElement(h,{onMove:function(e){r({h:360*e.left})},onKey:function(e){r({h:i(t+360*e.left,0,360)})},"aria-label":"Hue","aria-valuenow":g(t),"aria-valuemax":"360","aria-valuemin":"0"},o.createElement(p,{className:"react-colorful__hue-pointer",left:t/360,color:y({h:t,s:100,v:100,a:1})})))})),S=o.memo((function(e){var t=e.hsva,r=e.onChange,n={backgroundColor:y({h:t.h,s:100,v:100,a:1})};return o.createElement("div",{className:"react-colorful__saturation",style:n},o.createElement(h,{onMove:function(e){r({s:100*e.left,v:100-100*e.top})},onKey:function(e){r({s:i(t.s+100*e.left,0,100),v:i(t.v-100*e.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+g(t.s)+"%, Brightness "+g(t.v)+"%"},o.createElement(p,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:y(t)})))})),z=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0},O=function(e,t){return e.replace(/\s/g,"")===t.replace(/\s/g,"")};function H(e,t,r){var n=u(r),a=(0,o.useState)((function(){return e.toHsva(t)})),l=a[0],i=a[1],c=(0,o.useRef)({color:t,hsva:l});(0,o.useEffect)((function(){if(!e.equal(t,c.current.color)){var r=e.toHsva(t);c.current={hsva:r,color:t},i(r)}}),[t,e]),(0,o.useEffect)((function(){var t;z(l,c.current.hsva)||e.equal(t=e.fromHsva(l),c.current.color)||(c.current={hsva:l,color:t},n(t))}),[l,e,n]);var s=(0,o.useCallback)((function(e){i((function(t){return Object.assign({},t,e)}))}),[]);return[l,s]}var R,I="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,T=new Map,L=function(e){I((function(){var t=e.current?e.current.ownerDocument:document;if(void 0!==t&&!T.has(t)){var n=t.createElement("style");n.innerHTML='.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}',T.set(t,n);var o=r.nc;o&&n.setAttribute("nonce",o),t.head.appendChild(n)}}),[])},B=function(e){var t=e.className,r=e.colorModel,n=e.color,u=void 0===n?r.defaultColor:n,i=e.onChange,c=l(e,["className","colorModel","color","onChange"]),s=(0,o.useRef)(null);L(s);var f=H(r,u,i),d=f[0],h=f[1],p=v(["react-colorful",t]);return o.createElement("div",a({},c,{ref:s,className:p}),o.createElement(S,{hsva:d,onChange:h}),o.createElement(M,{hue:d.h,onChange:h,className:"react-colorful__last-control"}))},j={defaultColor:"000",toHsva:function(e){return N(b(e))},fromHsva:function(e){return function(e){return $(E(e))}({h:e.h,s:e.s,v:e.v,a:1})},equal:function(e,t){return e.toLowerCase()===t.toLowerCase()||z(b(e),b(t))}},D=function(e){var t=e.className,r=e.hsva,n=e.onChange,a={backgroundImage:"linear-gradient(90deg, "+C(Object.assign({},r,{a:0}))+", "+C(Object.assign({},r,{a:1}))+")"},l=v(["react-colorful__alpha",t]),u=g(100*r.a);return o.createElement("div",{className:l},o.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),o.createElement(h,{onMove:function(e){n({a:e.left})},onKey:function(e){n({a:i(r.a+e.left)})},"aria-label":"Alpha","aria-valuetext":u+"%","aria-valuenow":u,"aria-valuemin":"0","aria-valuemax":"100"},o.createElement(p,{className:"react-colorful__alpha-pointer",left:r.a,color:C(r)})))},K=function(e){var t=e.className,r=e.colorModel,n=e.color,u=void 0===n?r.defaultColor:n,i=e.onChange,c=l(e,["className","colorModel","color","onChange"]),s=(0,o.useRef)(null);L(s);var f=H(r,u,i),d=f[0],h=f[1],p=v(["react-colorful",t]);return o.createElement("div",a({},c,{ref:s,className:p}),o.createElement(S,{hsva:d,onChange:h}),o.createElement(M,{hue:d.h,onChange:h}),o.createElement(D,{hsva:d,onChange:h,className:"react-colorful__last-control"}))},V={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:function(e){var t=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?_({h:x(t[1],t[2]),s:Number(t[3]),l:Number(t[4]),a:void 0===t[5]?1:Number(t[5])/(t[6]?100:1)}):{h:0,s:0,v:0,a:1}},fromHsva:C,equal:O},W={defaultColor:"rgba(0, 0, 0, 1)",toHsva:function(e){var t=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?N({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:void 0===t[7]?1:Number(t[7])/(t[8]?100:1)}):{h:0,s:0,v:0,a:1}},fromHsva:function(e){var t=E(e);return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},equal:O},q=r(31642),F=r(19783),P=r(17360),A=r(16978),X=P.zo.div({position:"relative",maxWidth:250}),Y=(0,P.zo)(A.Rl)({position:"absolute",zIndex:1,top:4,left:4}),G=P.zo.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),J=(0,P.zo)(A.gu)((({theme:e})=>({fontFamily:e.typography.fonts.base}))),Q=P.zo.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),U=P.zo.div((({theme:e,active:t})=>({width:16,height:16,boxShadow:t?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius}))),Z=({value:e,active:t,onClick:r,style:n,...a})=>{let l=`linear-gradient(${e}, ${e}), url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>'), linear-gradient(#fff, #fff)`;return o.createElement(U,{...a,active:t,onClick:r,style:{...n,backgroundImage:l}})},ee=(0,P.zo)(A.l0.Input)((({theme:e})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base}))),te=(0,P.zo)(A.PJ)((({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color}))),re=((R=re||{}).RGB="rgb",R.HSL="hsl",R.HEX="hex",R),ne=Object.values(re),oe=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,ae=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,le=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,ue=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,ie=/^\s*#?([0-9a-f]{3})\s*$/i,ce={hex:function(e){return o.createElement(B,a({},e,{colorModel:j}))},rgb:function(e){return o.createElement(K,a({},e,{colorModel:W}))},hsl:function(e){return o.createElement(K,a({},e,{colorModel:V}))}},se={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},fe=e=>{let t=e?.match(oe);if(!t)return[0,0,0,1];let[,r,n,o,a=1]=t;return[r,n,o,a].map(Number)},de=e=>{if(!e)return;let t=!0;if(ae.test(e)){let[r,n,o,a]=fe(e),[l,u,i]=q.rgb.hsl([r,n,o])||[0,0,0];return{valid:t,value:e,keyword:q.rgb.keyword([r,n,o]),colorSpace:"rgb",rgb:e,hsl:`hsla(${l}, ${u}%, ${i}%, ${a})`,hex:`#${q.rgb.hex([r,n,o]).toLowerCase()}`}}if(le.test(e)){let[r,n,o,a]=fe(e),[l,u,i]=q.hsl.rgb([r,n,o])||[0,0,0];return{valid:t,value:e,keyword:q.hsl.keyword([r,n,o]),colorSpace:"hsl",rgb:`rgba(${l}, ${u}, ${i}, ${a})`,hsl:e,hex:`#${q.hsl.hex([r,n,o]).toLowerCase()}`}}let r=e.replace("#",""),n=q.keyword.rgb(r)||q.hex.rgb(r),o=q.rgb.hsl(n),a=e;if(/[^#a-f0-9]/i.test(e)?a=r:ue.test(e)&&(a=`#${r}`),a.startsWith("#"))t=ue.test(a);else try{q.keyword.hex(a)}catch{t=!1}return{valid:t,value:a,keyword:q.rgb.keyword(n),colorSpace:"hex",rgb:`rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,hsl:`hsla(${o[0]}, ${o[1]}%, ${o[2]}%, 1)`,hex:a}},he=e=>e.replace(/\s*/,"").toLowerCase(),ve=({name:e,value:t,onChange:r,onFocus:a,onBlur:l,presetColors:u,startOpen:i=!1})=>{let c=(0,o.useCallback)(F(r,200),[r]),{value:s,realValue:f,updateValue:d,color:h,colorSpace:v,cycleColorSpace:p}=((e,t)=>{let[r,n]=(0,o.useState)(e||""),[a,l]=(0,o.useState)((()=>de(r))),[u,i]=(0,o.useState)(a?.colorSpace||"hex");(0,o.useEffect)((()=>{let t=e||"",r=de(t);n(t),l(r),i(r?.colorSpace||"hex")}),[e]);let c=(0,o.useMemo)((()=>((e,t,r)=>{if(!e||!t?.valid)return se[r];if("hex"!==r)return t?.[r]||se[r];if(!t.hex.startsWith("#"))try{return`#${q.keyword.hex(t.hex)}`}catch{return se.hex}let n=t.hex.match(ie);if(!n)return ue.test(t.hex)?t.hex:se.hex;let[o,a,l]=n[1].split("");return`#${o}${o}${a}${a}${l}${l}`})(r,a,u).toLowerCase()),[r,a,u]),s=(0,o.useCallback)((e=>{let r=de(e),o=r?.value||e||"";n(o),""===o&&(l(void 0),t(void 0)),r&&(l(r),i(r.colorSpace),t(r.value))}),[t]),f=(0,o.useCallback)((()=>{let e=ne.indexOf(u)+1;e>=ne.length&&(e=0),i(ne[e]);let r=a?.[ne[e]]||"";n(r),t(r)}),[a,u,t]);return{value:r,realValue:c,updateValue:s,color:a,colorSpace:u,cycleColorSpace:f}})(t,c),{presets:g,addPreset:m}=((e,t,r)=>{let[n,a]=(0,o.useState)(t?.valid?[t]:[]);(0,o.useEffect)((()=>{void 0===t&&a([])}),[t]);let l=(0,o.useMemo)((()=>(e||[]).map((e=>"string"==typeof e?de(e):e.title?{...de(e.color),keyword:e.title}:de(e.color))).concat(n).filter(Boolean).slice(-27)),[e,n]),u=(0,o.useCallback)((e=>{e?.valid&&(l.some((t=>he(t[r])===he(e[r])))||a((t=>t.concat(e))))}),[r,l]);return{presets:l,addPreset:u}})(u,h,v),b=ce[v];return o.createElement(X,null,o.createElement(Y,{startOpen:i,closeOnOutsideClick:!0,onVisibleChange:()=>m(h),tooltip:o.createElement(G,null,o.createElement(b,{color:"transparent"===f?"#000000":f,onChange:d,onFocus:a,onBlur:l}),g.length>0&&o.createElement(Q,null,g.map(((e,t)=>o.createElement(A.Rl,{key:`${e.value}-${t}`,hasChrome:!1,tooltip:o.createElement(J,{note:e.keyword||e.value})},o.createElement(Z,{value:e[v],active:h&&he(e[v])===he(h[v]),onClick:()=>d(e.value)}))))))},o.createElement(Z,{value:f,style:{margin:4}})),o.createElement(ee,{id:(0,n.d)(e),value:s,onChange:e=>d(e.target.value),onFocus:e=>e.target.select(),placeholder:"Choose color..."}),s?o.createElement(te,{icon:"markup",onClick:p}):null)},pe=ve}}]);