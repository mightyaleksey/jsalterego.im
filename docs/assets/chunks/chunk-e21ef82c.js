var V,a,f_,x,Z,s_,j,a_,S={},p_=[],$_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,B=Array.isArray;function H(_,e){for(var t in e)_[t]=e[t];return _}function h_(_){var e=_.parentNode;e&&e.removeChild(_)}function H_(_,e,t){var n,o,i,l={};for(i in e)i=="key"?n=e[i]:i=="ref"?o=e[i]:l[i]=e[i];if(arguments.length>2&&(l.children=arguments.length>3?V.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(i in _.defaultProps)l[i]===void 0&&(l[i]=_.defaultProps[i]);return F(_,l,n,o,null)}function F(_,e,t,n,o){var i={type:_,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++f_,__i:-1,__u:0};return o==null&&a.vnode!=null&&a.vnode(i),i}function q(_){return _.children}function A(_,e){this.props=_,this.context=e}function C(_,e){if(e==null)return _.__?C(_.__,_.__i+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?C(_):null}function d_(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return d_(_)}}function z(_){(!_.__d&&(_.__d=!0)&&x.push(_)&&!M.__r++||Z!==a.debounceRendering)&&((Z=a.debounceRendering)||s_)(M)}function M(){var _,e,t,n,o,i,l,u,f;for(x.sort(j);_=x.shift();)_.__d&&(e=x.length,n=void 0,i=(o=(t=_).__v).__e,u=[],f=[],(l=t.__P)&&((n=H({},o)).__v=o.__v+1,a.vnode&&a.vnode(n),K(l,n,o,t.__n,l.ownerSVGElement!==void 0,32&o.__u?[i]:null,u,i??C(o),!!(32&o.__u),f),n.__.__k[n.__i]=n,m_(u,n,f),n.__e!=i&&d_(n)),x.length>e&&x.sort(j));M.__r=0}function v_(_,e,t,n,o,i,l,u,f,c,p){var r,h,s,y,k,m=n&&n.__k||p_,d=e.length;for(t.__d=f,x_(t,e,m),f=t.__d,r=0;r<d;r++)(s=t.__k[r])!=null&&typeof s!="boolean"&&typeof s!="function"&&(h=s.__i===-1?S:m[s.__i]||S,s.__i=r,K(_,s,h,o,i,l,u,f,c,p),y=s.__e,s.ref&&h.ref!=s.ref&&(h.ref&&Q(h.ref,null,s),p.push(s.ref,s.__c||y,s)),k==null&&y!=null&&(k=y),65536&s.__u||h.__k===s.__k?f=y_(s,f,_):typeof s.type=="function"&&s.__d!==void 0?f=s.__d:y&&(f=y.nextSibling),s.__d=void 0,s.__u&=-196609);t.__d=f,t.__e=k}function x_(_,e,t){var n,o,i,l,u,f=e.length,c=t.length,p=c,r=0;for(_.__k=[],n=0;n<f;n++)(o=_.__k[n]=(o=e[n])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?F(null,o,null,null,o):B(o)?F(q,{children:o},null,null,null):o.__b>0?F(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=_,o.__b=_.__b+1,u=w_(o,t,l=n+r,p),o.__i=u,i=null,u!==-1&&(p--,(i=t[u])&&(i.__u|=131072)),i==null||i.__v===null?(u==-1&&r--,typeof o.type!="function"&&(o.__u|=65536)):u!==l&&(u===l+1?r++:u>l?p>f-l?r+=u-l:r--:r=u<l&&u==l-1?u-l:0,u!==n+r&&(o.__u|=65536))):(i=t[n])&&i.key==null&&i.__e&&(i.__e==_.__d&&(_.__d=C(i)),G(i,i,!1),t[n]=null,p--);if(p)for(n=0;n<c;n++)(i=t[n])!=null&&!(131072&i.__u)&&(i.__e==_.__d&&(_.__d=C(i)),G(i,i))}function y_(_,e,t){var n,o;if(typeof _.type=="function"){for(n=_.__k,o=0;n&&o<n.length;o++)n[o]&&(n[o].__=_,e=y_(n[o],e,t));return e}return _.__e!=e&&(t.insertBefore(_.__e,e||null),e=_.__e),e&&e.nextSibling}function C_(_,e){return e=e||[],_==null||typeof _=="boolean"||(B(_)?_.some(function(t){C_(t,e)}):e.push(_)),e}function w_(_,e,t,n){var o=_.key,i=_.type,l=t-1,u=t+1,f=e[t];if(f===null||f&&o==f.key&&i===f.type)return t;if(n>(f!=null&&!(131072&f.__u)?1:0))for(;l>=0||u<e.length;){if(l>=0){if((f=e[l])&&!(131072&f.__u)&&o==f.key&&i===f.type)return l;l--}if(u<e.length){if((f=e[u])&&!(131072&f.__u)&&o==f.key&&i===f.type)return u;u++}}return-1}function __(_,e,t){e[0]==="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||$_.test(e)?t:t+"px"}function D(_,e,t,n,o){var i;_:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof n=="string"&&(_.style.cssText=n=""),n)for(e in n)t&&e in t||__(_.style,e,"");if(t)for(e in t)n&&t[e]===n[e]||__(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in _?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+i]=t,t?n?t.u=n.u:(t.u=Date.now(),_.addEventListener(e,i?t_:e_,i)):_.removeEventListener(e,i?t_:e_,i);else{if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in _)try{_[e]=t??"";break _}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?_.removeAttribute(e):_.setAttribute(e,t))}}function e_(_){var e=this.l[_.type+!1];if(_.t){if(_.t<=e.u)return}else _.t=Date.now();return e(a.event?a.event(_):_)}function t_(_){return this.l[_.type+!0](a.event?a.event(_):_)}function K(_,e,t,n,o,i,l,u,f,c){var p,r,h,s,y,k,m,d,g,$,N,P,Y,T,O,b=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(f=!!(32&t.__u),i=[u=e.__e=t.__e]),(p=a.__b)&&p(e);_:if(typeof b=="function")try{if(d=e.props,g=(p=b.contextType)&&n[p.__c],$=p?g?g.props.value:p.__:n,t.__c?m=(r=e.__c=t.__c).__=r.__E:("prototype"in b&&b.prototype.render?e.__c=r=new b(d,$):(e.__c=r=new A(d,$),r.constructor=b,r.render=S_),g&&g.sub(r),r.props=d,r.state||(r.state={}),r.context=$,r.__n=n,h=r.__d=!0,r.__h=[],r._sb=[]),r.__s==null&&(r.__s=r.state),b.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=H({},r.__s)),H(r.__s,b.getDerivedStateFromProps(d,r.__s))),s=r.props,y=r.state,r.__v=e,h)b.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(b.getDerivedStateFromProps==null&&d!==s&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(d,$),!r.__e&&(r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(d,r.__s,$)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(r.props=d,r.state=r.__s,r.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(U){U&&(U.__=e)}),N=0;N<r._sb.length;N++)r.__h.push(r._sb[N]);r._sb=[],r.__h.length&&l.push(r);break _}r.componentWillUpdate!=null&&r.componentWillUpdate(d,r.__s,$),r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(s,y,k)})}if(r.context=$,r.props=d,r.__P=_,r.__e=!1,P=a.__r,Y=0,"prototype"in b&&b.prototype.render){for(r.state=r.__s,r.__d=!1,P&&P(e),p=r.render(r.props,r.state,r.context),T=0;T<r._sb.length;T++)r.__h.push(r._sb[T]);r._sb=[]}else do r.__d=!1,P&&P(e),p=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++Y<25);r.state=r.__s,r.getChildContext!=null&&(n=H(H({},n),r.getChildContext())),h||r.getSnapshotBeforeUpdate==null||(k=r.getSnapshotBeforeUpdate(s,y)),v_(_,B(O=p!=null&&p.type===q&&p.key==null?p.props.children:p)?O:[O],e,t,n,o,i,l,u,f,c),r.base=e.__e,e.__u&=-161,r.__h.length&&l.push(r),m&&(r.__E=r.__=null)}catch(U){e.__v=null,f||i!=null?(e.__e=u,e.__u|=f?160:32,i[i.indexOf(u)]=null):(e.__e=t.__e,e.__k=t.__k),a.__e(U,e,t)}else i==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=P_(t.__e,e,t,n,o,i,l,f,c);(p=a.diffed)&&p(e)}function m_(_,e,t){e.__d=void 0;for(var n=0;n<t.length;n++)Q(t[n],t[++n],t[++n]);a.__c&&a.__c(e,_),_.some(function(o){try{_=o.__h,o.__h=[],_.some(function(i){i.call(o)})}catch(i){a.__e(i,o.__v)}})}function P_(_,e,t,n,o,i,l,u,f){var c,p,r,h,s,y,k,m=t.props,d=e.props,g=e.type;if(g==="svg"&&(o=!0),i!=null){for(c=0;c<i.length;c++)if((s=i[c])&&"setAttribute"in s==!!g&&(g?s.localName===g:s.nodeType===3)){_=s,i[c]=null;break}}if(_==null){if(g===null)return document.createTextNode(d);_=o?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,d.is&&d),i=null,u=!1}if(g===null)m===d||u&&_.data===d||(_.data=d);else{if(i=i&&V.call(_.childNodes),m=t.props||S,!u&&i!=null)for(m={},c=0;c<_.attributes.length;c++)m[(s=_.attributes[c]).name]=s.value;for(c in m)s=m[c],c=="children"||(c=="dangerouslySetInnerHTML"?r=s:c==="key"||c in d||D(_,c,null,s,o));for(c in d)s=d[c],c=="children"?h=s:c=="dangerouslySetInnerHTML"?p=s:c=="value"?y=s:c=="checked"?k=s:c==="key"||u&&typeof s!="function"||m[c]===s||D(_,c,s,m[c],o);if(p)u||r&&(p.__html===r.__html||p.__html===_.innerHTML)||(_.innerHTML=p.__html),e.__k=[];else if(r&&(_.innerHTML=""),v_(_,B(h)?h:[h],e,t,n,o&&g!=="foreignObject",i,l,i?i[0]:t.__k&&C(t,0),u,f),i!=null)for(c=i.length;c--;)i[c]!=null&&h_(i[c]);u||(c="value",y!==void 0&&(y!==_[c]||g==="progress"&&!y||g==="option"&&y!==m[c])&&D(_,c,y,m[c],!1),c="checked",k!==void 0&&k!==_[c]&&D(_,c,k,m[c],!1))}return _}function Q(_,e,t){try{typeof _=="function"?_(e):_.current=e}catch(n){a.__e(n,t)}}function G(_,e,t){var n,o;if(a.unmount&&a.unmount(_),(n=_.ref)&&(n.current&&n.current!==_.__e||Q(n,null,e)),(n=_.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){a.__e(i,e)}n.base=n.__P=null,_.__c=void 0}if(n=_.__k)for(o=0;o<n.length;o++)n[o]&&G(n[o],e,t||typeof _.type!="function");t||_.__e==null||h_(_.__e),_.__=_.__e=_.__d=void 0}function S_(_,e,t){return this.constructor(_,t)}function E_(_,e,t){var n,o,i,l;a.__&&a.__(_,e),o=(n=typeof t=="function")?null:t&&t.__k||e.__k,i=[],l=[],K(e,_=(!n&&t||e).__k=H_(q,null,[_]),o||S,S,e.ownerSVGElement!==void 0,!n&&t?[t]:o?null:e.firstChild?V.call(e.childNodes):null,i,!n&&t?t:o?o.__e:e.firstChild,n,l),m_(i,_,l)}function N_(_,e){E_(_,e,N_)}function A_(_,e){var t={__c:e="__cC"+a_++,__:_,Consumer:function(n,o){return n.children(o)},Provider:function(n){var o,i;return this.getChildContext||(o=[],(i={})[e]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&o.some(function(u){u.__e=!0,z(u)})},this.sub=function(l){o.push(l);var u=l.componentWillUnmount;l.componentWillUnmount=function(){o.splice(o.indexOf(l),1),u&&u.call(l)}}),n.children}};return t.Provider.__=t.Consumer.contextType=t}V=p_.slice,a={__e:function(_,e,t,n){for(var o,i,l;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(_)),l=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(_,n||{}),l=o.__d),l)return o.__E=o}catch(u){_=u}throw _}},f_=0,A.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=H({},this.state),typeof _=="function"&&(_=_(H({},t),this.props)),_&&H(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),z(this))},A.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),z(this))},A.prototype.render=q,x=[],s_=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,j=function(_,e){return _.__v.__b-e.__v.__b},M.__r=0,a_=0;var w,v,R,n_,E=0,g_=[],W=[],o_=a.__b,r_=a.__r,i_=a.diffed,u_=a.__c,l_=a.unmount;function I(_,e){a.__h&&a.__h(v,_,E||e),E=0;var t=v.__H||(v.__H={__:[],__h:[]});return _>=t.__.length&&t.__.push({__V:W}),t.__[_]}function W_(_){return E=1,T_(k_,_)}function T_(_,e,t){var n=I(w++,2);if(n.t=_,!n.__c&&(n.__=[t?t(e):k_(void 0,e),function(u){var f=n.__N?n.__N[0]:n.__[0],c=n.t(f,u);f!==c&&(n.__N=[c,n.__[1]],n.__c.setState({}))}],n.__c=v,!v.u)){var o=function(u,f,c){if(!n.__c.__H)return!0;var p=n.__c.__H.__.filter(function(h){return h.__c});if(p.every(function(h){return!h.__N}))return!i||i.call(this,u,f,c);var r=!1;return p.forEach(function(h){if(h.__N){var s=h.__[0];h.__=h.__N,h.__N=void 0,s!==h.__[0]&&(r=!0)}}),!(!r&&n.__c.props===u)&&(!i||i.call(this,u,f,c))};v.u=!0;var i=v.shouldComponentUpdate,l=v.componentWillUpdate;v.componentWillUpdate=function(u,f,c){if(this.__e){var p=i;i=void 0,o(u,f,c),i=p}l&&l.call(this,u,f,c)},v.shouldComponentUpdate=o}return n.__N||n.__}function L_(_,e){var t=I(w++,3);!a.__s&&X(t.__H,e)&&(t.__=_,t.i=e,v.__H.__h.push(t))}function M_(_,e){var t=I(w++,4);!a.__s&&X(t.__H,e)&&(t.__=_,t.i=e,v.__h.push(t))}function V_(_){return E=5,b_(function(){return{current:_}},[])}function b_(_,e){var t=I(w++,7);return X(t.__H,e)?(t.__V=_(),t.i=e,t.__h=_,t.__V):t.__}function B_(_,e){return E=8,b_(function(){return _},e)}function U_(){for(var _;_=g_.shift();)if(_.__P&&_.__H)try{_.__H.__h.forEach(L),_.__H.__h.forEach(J),_.__H.__h=[]}catch(e){_.__H.__h=[],a.__e(e,_.__v)}}a.__b=function(_){v=null,o_&&o_(_)},a.__r=function(_){r_&&r_(_),w=0;var e=(v=_.__c).__H;e&&(R===v?(e.__h=[],v.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=W,t.__N=t.i=void 0})):(e.__h.forEach(L),e.__h.forEach(J),e.__h=[],w=0)),R=v},a.diffed=function(_){i_&&i_(_);var e=_.__c;e&&e.__H&&(e.__H.__h.length&&(g_.push(e)!==1&&n_===a.requestAnimationFrame||((n_=a.requestAnimationFrame)||D_)(U_)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==W&&(t.__=t.__V),t.i=void 0,t.__V=W})),R=v=null},a.__c=function(_,e){e.some(function(t){try{t.__h.forEach(L),t.__h=t.__h.filter(function(n){return!n.__||J(n)})}catch(n){e.some(function(o){o.__h&&(o.__h=[])}),e=[],a.__e(n,t.__v)}}),u_&&u_(_,e)},a.unmount=function(_){l_&&l_(_);var e,t=_.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{L(n)}catch(o){e=o}}),t.__H=void 0,e&&a.__e(e,t.__v))};var c_=typeof requestAnimationFrame=="function";function D_(_){var e,t=function(){clearTimeout(n),c_&&cancelAnimationFrame(e),setTimeout(_)},n=setTimeout(t,100);c_&&(e=requestAnimationFrame(t))}function L(_){var e=v,t=_.__c;typeof t=="function"&&(_.__c=void 0,t()),v=e}function J(_){var e=v;_.__c=_.__(),v=e}function X(_,e){return!_||_.length!==e.length||e.some(function(t,n){return t!==_[n]})}function k_(_,e){return typeof e=="function"?e(_):e}var F_=0;function q_(_,e,t,n,o,i){var l,u,f={};for(u in e)u=="ref"?l=e[u]:f[u]=e[u];var c={type:_,props:f,key:t,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--F_,__i:-1,__u:0,__source:o,__self:i};if(typeof _=="function"&&(l=_.defaultProps))for(u in l)f[u]===void 0&&(f[u]=l[u]);return a.vnode&&a.vnode(c),c}export{C_ as $,N_ as B,A_ as F,B_ as T,V_ as _,M_ as a,A as b,q as g,W_ as h,a as l,L_ as p,q_ as u,H_ as y};