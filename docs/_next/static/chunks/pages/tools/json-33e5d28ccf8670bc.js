(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[735],{6308:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var u=[],o=!0,l=!1;try{for(a=a.call(e);!(o=(n=a.next()).done)&&(u.push(n.value),!t||u.length!==t);o=!0);}catch(e){l=!0,r=e}finally{try{o||null==a.return||a.return()}finally{if(l)throw r}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e){var t="";return"string"==typeof e&&(t=e),Array.isArray(e)&&e.forEach(function(e){var n=u(e);n&&t&&(t+=" "),t+=n}),t}n.r(t),n.d(t,{__N_SSG:function(){return i},default:function(){return c}});var o=n(7294),l=n(5893),i=!0;function c(e){var t=a(o.useState(""),2),n=t[0],r=t[1],i=a(o.useState(""),2),c=i[0],s=i[1],f=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=a(o.useState(Boolean(e)),2),n=t[0],r=t[1];return{setFalse:o.useCallback(function(){return r(!1)},[]),setTrue:o.useCallback(function(){return r(!0)},[]),setValue:r,toggle:o.useCallback(function(){return r(function(e){return!e})}),value:n}}(),h=f.toggle,y=f.value,v=o.useRef(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150,n=null;return function(){clearTimeout(n);for(var r=arguments.length,a=Array(r),u=0;u<r;u++)a[u]=arguments[u];n=setTimeout.apply(void 0,[e,t].concat(a))}}(function(e){try{if(""===e.trim()){s("");return}s(JSON.stringify(JSON.parse(e),null,2))}catch(e){e.message.startsWith("JSON Parse error:")?s(e.message.substring(18)):s(e.message)}})).current;o.useEffect(function(){v(n)},[n]),o.useEffect(function(){return document.addEventListener("keydown",e,!0),function(){return document.removeEventListener("keydown",e,!0)};function e(e){"Escape"===e.key&&h()}},[]);var d="ma0 pa2 overflow-auto code ba b--black";return(0,l.jsx)("section",{className:"min-vh-100 w-100 bg-white",children:(0,l.jsx)("div",{className:"mw8 ph4 pv3 center",children:(0,l.jsxs)("div",{className:"relative",style:{height:"32rem"},children:[(0,l.jsx)("pre",{className:u([d,"bg-washed-yellow absolute absolute--fill",y?"z-1":"z-0"]),style:{whiteSpace:"pre-wrap"},children:c}),(0,l.jsx)("textarea",{className:u([d,"bg-white absolute absolute--fill",y?"z-0":"z-1"]),onChange:function(e){r(e.currentTarget.value)},onKeyDown:function(e){(e.ctrlKey||e.metaKey)&&"v"===e.key&&h()},placeholder:"вставь json строку",value:n}),(0,l.jsx)("button",{className:"absolute right-2 top-1 z-2",onClick:h,children:y?"вывод":"ввод"})]})})})}},5930:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tools/json",function(){return n(6308)}])}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5930)}),_N_E=e.O()}]);