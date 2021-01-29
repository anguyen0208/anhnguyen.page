/*! For license information please see component---src-pages-about-js-064ddb2f7c85759e4914.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"20nU":function(e,t){e.exports={srConfig:function(e,t){return void 0===e&&(e=200),void 0===t&&(t=.25),{origin:"bottom",distance:"20px",duration:500,delay:e,rotate:{x:0,y:0,z:0},opacity:0,scale:1,easing:"cubic-bezier(0.645, 0.045, 0.355, 1)",mobile:!0,reset:!1,useDelay:"always",viewFactor:t,viewOffset:{top:0,right:0,bottom:0,left:0}}}}},"3XHS":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),o=n("Wbzz"),a=n("Bl7J"),c=n("MUpH"),s=n("vOnD"),l=n("zIjI");function u(){var e=Object(c.a)(["\n    margin: 2rem auto 0;\n    padding: 0 2rem 6rem;\n  "]);return u=function(){return e},e}function d(){var e=Object(c.a)(["\n    width: 100%;\n    margin: 4rem auto 0;\n    padding: 0 3rem 6rem;\n  "]);return d=function(){return e},e}function f(){var e=Object(c.a)(["\n    margin: 8rem auto 3rem;\n    width: calc(100% - 11rem * 2);\n  "]);return f=function(){return e},e}var m=s.c.div.withConfig({displayName:"shared__ContentWrapper",componentId:"sc-13at4c1-0"})(["max-width:68rem;width:calc(100% - 9.25rem * 2);margin:11rem auto 5rem;"," "," ",""],l.d.lg(f()),l.d.md(d()),l.d.sm(u())),p=s.c.li.withConfig({displayName:"shared__ListItem",componentId:"sc-13at4c1-1"})(["font-size:1rem;color:",";padding:.3rem 0;line-height:1.6em;"],l.a.gray400),g=s.c.div.withConfig({displayName:"shared__Loader",componentId:"sc-13at4c1-2"})(["position:absolute;top:0;right:0;bottom:0;left:0;width:100%;background:#1b242f;z-index:2;"," transition:.6s cubic-bezier(.45,0,.07,1) transform,.6s cubic-bezier(.45,0,.07,1) opacity;will-change:transform;"],(function(e){return e.isLoaded?Object(s.b)(["transform:scale(1.05);opacity:0;"]):Object(s.b)(["transform:scale(1);opacity:1;"])})),h=n("dI71"),y=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).state={isLoaded:!1},t}Object(h.a)(t,e);var n=t.prototype;return n.renderSource=function(e,t){var n=e.media,r=e.srcset;return n?i.a.createElement("source",{key:t,media:"("+n+")",srcSet:r.join(", ")}):i.a.createElement("source",{key:t,srcSet:r.join(", ")})},n.setLoaded=function(){this.setState({isLoaded:!0})},n.render=function(){var e=this,t=this.props,n=t.src,r=t.alt,o=t.sources,a=t.className,c=t.loader,s=this.state.isLoaded;return i.a.createElement("picture",{className:a},c&&c({isLoaded:s}),o&&o.map(this.renderSource),i.a.createElement("img",{onLoad:function(){return e.setLoaded()},src:n,alt:r}))},t}(r.Component);y.defaultProps={alt:"",sources:{media:null},className:null};var b=y;function v(){var e=Object(c.a)(["\n    grid-area: 1 / 1 / 1 / 1 ;\n    margin-top: 0;\n    margin-left: 0;\n    &:before {\n      padding-top: 100%;\n    }\n  "]);return v=function(){return e},e}function w(){var e=Object(c.a)(["\n    grid-area: 1 / 1 / 1 / 1 ;\n    margin-top: 0;\n    margin-left: 0;\n    &:before {\n      padding-top: 100%;\n    }\n  "]);return w=function(){return e},e}function j(){var e=Object(c.a)(["\n    max-width: 400px;\n    grid-row: 1 / 8;\n    grid-column: 5 / 10;\n    margin-top: 100px;\n    margin-left: -60px;\n      &:before {\n        padding-top: 100%;\n      }\n    "]);return j=function(){return e},e}function x(){var e=Object(c.a)(["\n    width: 450px;\n    grid-row: 1 / 6;\n    grid-column: 5 / 8;\n    margin-top: -60px;\n    margin-right: 0;\n        &:before {\n          padding-top: 100%;\n        }\n  "]);return x=function(){return e},e}function O(){var e=Object(c.a)(["\n    width: 450px;\n    grid-row: 1 / 6;\n    grid-column: 1 / 8;\n    margin-top: -60px;\n    margin-right: 0;\n        &:before {\n          padding-top: 100%;\n        }\n  "]);return O=function(){return e},e}function E(){var e=Object(c.a)(["\n    width: 450px;\n    grid-row: 1 / 12;\n    grid-column: 5 / 8;\n    margin-top: -100px;\n    margin-right: 0;\n        &:before {\n          padding-top: 100%;\n        }\n  "]);return E=function(){return e},e}function k(){var e=Object(c.a)(["\n    width: 450px;\n    grid-row: 1 / 12;\n    grid-column: 5 / 8;\n    margin-top: -100px;\n    margin-right: 0;\n        &:before {\n          padding-top: 100%;\n        }\n  "]);return k=function(){return e},e}function I(){var e=Object(c.a)(["\n    width: 450px;\n    grid-row: 1 / 12;\n    grid-column: 5 / 8;\n    margin-top: -100px;\n    margin-right: 0;\n        &:before {\n          padding-top: 100%;\n        }\n  "]);return I=function(){return e},e}function _(){var e=Object(c.a)(["\n    width: 650px;\n    grid-row: 1 / 12;\n    grid-column: 5 / 8;\n    margin-top: -100px;\n    margin-right: 0;\n        &:before {\n          padding-top: 100%;\n        }\n  "]);return _=function(){return e},e}function N(){var e=Object(c.a)(["\n    width: 650px;\n    grid-row: 1 / 12;\n    grid-column: 6 / 8;\n    margin-top: -100px;\n    margin-right: 0;\n        &:before {\n          padding-top: 100%;\n        }\n  "]);return N=function(){return e},e}function z(){var e=Object(c.a)(["\n      opacity: .2;\n    "]);return z=function(){return e},e}function T(){var e=Object(c.a)(["\n      opacity: .2;\n      object-fit: cover;\n    "]);return T=function(){return e},e}function C(){var e=Object(c.a)(["\n      opacity: .2;\n      object-fit: cover;\n    "]);return C=function(){return e},e}function L(){var e=Object(c.a)(["\n      padding-top: 100%;\n    "]);return L=function(){return e},e}function A(){var e=Object(c.a)(["\n    margin-top: 1rem;\n  "]);return A=function(){return e},e}function S(){var e=Object(c.a)(["\n    max-width: 95%;\n    font-size: 1.1rem;\n    line-spacing: 1rem;\n  "]);return S=function(){return e},e}function q(){var e=Object(c.a)(["\n    max-width: 95%;\n    font-size: 1.1rem;\n  "]);return q=function(){return e},e}function M(){var e=Object(c.a)(["\n    max-width: 32rem;\n    font-size: 1.2rem;\n  "]);return M=function(){return e},e}function P(){var e=Object(c.a)(["\n    max-width: 32rem;\n  "]);return P=function(){return e},e}function R(){var e=Object(c.a)(["\n    font-size: 1.5rem;\n    line-height: 1.4em;\n  "]);return R=function(){return e},e}function D(){var e=Object(c.a)(["\n    font-size: 1.4rem;\n    line-height: 1.4em;\n  "]);return D=function(){return e},e}function F(){var e=Object(c.a)(["\n    font-size: 1.2rem;\n    line-height: 1.2em;\n  "]);return F=function(){return e},e}function W(){var e=Object(c.a)(["\n    font-size: 1.3rem;\n    line-height: 1.3em;\n  "]);return W=function(){return e},e}function Y(){var e=Object(c.a)(["\n    font-size: 1.3rem;\n    line-height: 1.3em;\n  "]);return Y=function(){return e},e}function H(){var e=Object(c.a)(["\n    font-size: 1.7rem;\n    line-height: 1.7em;\n  "]);return H=function(){return e},e}function X(){var e=Object(c.a)(["\n    padding-top: 15px;\n    grid-row: 2 / 3;\n    grid-column: 1 / 1;\n  "]);return X=function(){return e},e}function U(){var e=Object(c.a)(["\n    grid-column: 1 / 5;\n    grid-row: 1 / 4;\n  "]);return U=function(){return e},e}function B(){var e=Object(c.a)(["\n    grid-column: 1 / 6;\n    grid-row: 1 / 5;\n  "]);return B=function(){return e},e}function $(){var e=Object(c.a)(["\n    grid-column: 1 / 8;\n    grid-row: 1 / 5;\n  "]);return $=function(){return e},e}function J(){var e=Object(c.a)(["\n    grid-column: 2 / 6;\n    grid-row: 1 / 5;\n  "]);return J=function(){return e},e}function Z(){var e=Object(c.a)(["\n    grid-column: 2 / 6;\n    grid-row: 1 / 5;\n  "]);return Z=function(){return e},e}function G(){var e=Object(c.a)(["\n    grid-column: 2 / 6;\n    grid-row: 1 / 5;\n  "]);return G=function(){return e},e}function Q(){var e=Object(c.a)(["\n    grid-column: 1 / 6;\n    grid-row: 1 / 5;\n  "]);return Q=function(){return e},e}function K(){var e=Object(c.a)(["\n    grid-column: 2 / 6;\n    grid-row: 1 / 5;\n  "]);return K=function(){return e},e}function V(){var e=Object(c.a)(["\n    grid-template-columns: 100%;\n    grid-template-rows: repeat(3, auto);\n    grid-row-gap: .5rem;\n  "]);return V=function(){return e},e}function ee(){var e=Object(c.a)(["\n    grid-template-rows: repeat(4, auto);\n  "]);return ee=function(){return e},e}function te(){var e=Object(c.a)(["\n    grid-template-rows: repeat(2, auto);\n    padding: 0 0 0 6%;\n  "]);return te=function(){return e},e}function ne(){var e=Object(c.a)(["\n    grid-template-rows: repeat(1, 1fr);\n    padding: 0 0 0 6%;\n  "]);return ne=function(){return e},e}function re(){var e=Object(c.a)(["\n    grid-template-rows: repeat(2, 1fr);\n    padding: 0 0 0 0;\n  "]);return re=function(){return e},e}function ie(){var e=Object(c.a)(["\n    grid-template-rows: repeat(2, 1fr);\n    padding: 0 0 0 0;\n  "]);return ie=function(){return e},e}function oe(){var e=Object(c.a)(["\n    grid-template-rows: repeat(2, 1fr);\n    padding: 0 0 0 0;\n  "]);return oe=function(){return e},e}function ae(){var e=Object(c.a)(["\n    grid-template-rows: repeat(2, 1fr);\n    padding: 0 0 0 0;\n  "]);return ae=function(){return e},e}function ce(){var e=Object(c.a)(["\n    grid-template-rows: repeat(2, 1fr);\n    padding: 0 0 0 0;\n  "]);return ce=function(){return e},e}var se=s.c.section.withConfig({displayName:"style__Wrapper",componentId:"sc-1wxs3h3-0"})(["display:grid;grid-template-columns:repeat(8,1fr);grid-template-rows:repeat(2,1fr);position:relative;"," "," "," "," "," "," "," "," ",""],l.d.mon27(ce()),l.d.mon24(ae()),l.d.mac15(oe()),l.d.pro(ie()),l.d.mac13(re()),l.d.ipadpro(ne()),l.d.lg(te()),l.d.md(ee()),l.d.sm(V())),le=s.c.header.withConfig({displayName:"style__InfoWrapper",componentId:"sc-1wxs3h3-1"})(["grid-row:1 / 4;grid-column:3 / 8;z-index:1;"," "," "," "," "," "," "," "," ",""],l.d.mon27(K()),l.d.mon24(Q()),l.d.mac15(G()),l.d.pro(Z()),l.d.mac13(J()),l.d.ipadpro($()),l.d.lg(B()),l.d.md(U()),l.d.sm(X())),ue=s.c.div.withConfig({displayName:"style__TopWrapper",componentId:"sc-1wxs3h3-2"})(["font-size:1.5rem;line-height:1.5em;"," "," "," "," "," "," "," "," "," ","}"],l.d.mon27(H()),l.d.mon24(Y()),l.d.mac15(W()),l.d.pro(F()),l.d.mac13(D()),l.d.ipadpro(R()),l.d.lg(P()),l.d.md(M()),l.d.sm(q()),l.d.xs(S())),de=s.c.h1.withConfig({displayName:"style__Title",componentId:"sc-1wxs3h3-3"})(["margin-bottom:5px;color:",";.name{color:",";font-weight:700;}"],l.a.gray400,l.a.yellow500),fe=s.c.main.withConfig({displayName:"style__Content",componentId:"sc-1wxs3h3-4"})(["margin-top:1rem;line-height:1.8em;color:",";"," p{margin:1.5rem 0;}a{color:#fff;border-bottom:1px dotted ",";&:hover{border-bottom-color:",";}}"],l.a.gray400,l.d.sm(A()),l.a.gray400,l.a.yellow500),me=Object(s.c)(b).withConfig({displayName:"style__StyledImage",componentId:"sc-1wxs3h3-5"})(["grid-row:1 / 4;grid-column:5 / 8;position:relative;overflow:hidden;margin-right:-150px;z-index:0;&::before{content:'';display:block;","}img{position:absolute;width:100%;height:100%;margin:auto;top:0;right:0;bottom:0;left:0;mix-blend-mode:lighten;opacity:.2;display:block;object-fit:cover;"," "," ","}"," "," "," "," "," "," "," "," "," ",""],l.d.sm(L()),l.d.ipadpro(C()),l.d.md(T()),l.d.sm(z()),l.d.mon27(N()),l.d.mon24(_()),l.d.mac15(I()),l.d.pro(k()),l.d.mac13(E()),l.d.ipadpro(O()),l.d.lg(x()),l.d.md(j()),l.d.sm(w()),l.d.xs(v())),pe=function(){return i.a.createElement(se,null,i.a.createElement(le,null,i.a.createElement(ue,null,i.a.createElement(de,null,"My name is ",i.a.createElement("span",{className:"name"},"Anh Nguyen"),", a software engineer graduate student based in Minneapolis, MN specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.")),i.a.createElement(fe,null,"As a software engineer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product. I focus primarily on building, prototyping and implementing user interfaces that are usable and scalable for any web-based platform."," ",i.a.createElement("a",{href:"https://codepen.io/ah_nguyen0208",target:"_blank",rel:"noopener noreferrer"},"I enjoy experimenting")," and",i.a.createElement("a",{href:"https://github.com/anguyen0208",target:"_blank",rel:"noopener noreferrer"}," building out")," with new tools.",i.a.createElement("p",null,"When I'm not in front of a computer screen, I'm probably camping, researching new local restaurants, building LEGO, or crossing off another item on my bucket list and share photos on ",i.a.createElement("a",{href:"https://www.instagram.com/ah_nguyen0208",target:"_blank",rel:"noopener noreferrer"},"Instagram"),"."))),i.a.createElement(me,{src:"/images/profile/me.jpg",alt:"Anh Nguyen - Software Engineer",loader:function(e){var t=e.isLoaded;return i.a.createElement(g,{isLoaded:t})},sources:[{media:"max-width: 25rem",srcset:["/images/profile/me.jpg"]}]}))},ge=s.c.div.withConfig({displayName:"style__Left",componentId:"sc-18w7bsl-0"})(["position:relative;overflow:hidden;display:inline-flex;width:25%;"]),he=s.c.sup.withConfig({displayName:"style__Year",componentId:"sc-18w7bsl-1"})(["font-size:85%;"]),ye=s.c.h1.withConfig({displayName:"style__Position",componentId:"sc-18w7bsl-2"})(["font-size:22px;letter-spacing:1px;font-weight:400;color:",""],l.a.gray200),be=s.c.span.withConfig({displayName:"style__Company",componentId:"sc-18w7bsl-3"})(["font-size:14px;letter-spacing:1px;font-weight:400;color:",";"],l.a.gray300),ve=s.c.h1.withConfig({displayName:"style__Description",componentId:"sc-18w7bsl-4"})(["font-size:16px;letter-spacing:1px;font-weight:400;margin-left:25%;"]),we=s.c.div.withConfig({displayName:"style__Wrapper",componentId:"sc-18w7bsl-5"})(["position:relative;overflow:hidden;padding:30px 0;display:inline-flex;width:100%;border-bottom:1px dotted ",";div{transition:transform .3s cubic-bezier(.45,0,.1,1);will-change:transform;}.position{transform:translateY(0);}.description{position:absolute;top:0;right:0;left:0;bottom:0;transform:translateY(100%);color:#fff;}&:hover{.position{transform:translateY(-175%);}.description{transform:translateY(0);}}"],l.a.gray300),je=function(e){var t=e.year,n=e.position,r=e.company,o=e.description;return i.a.createElement(p,null,i.a.createElement(we,null,i.a.createElement(ge,null,i.a.createElement("div",{className:"year"},i.a.createElement(he,null,t))),i.a.createElement("div",{className:"position"},i.a.createElement(ye,null,n),i.a.createElement(be,null,r)),i.a.createElement("div",{className:"description"},i.a.createElement(ve,null,o))))},xe=s.c.h2.withConfig({displayName:"style__TimelineSectionTitle",componentId:"sc-1lqnxgh-0"})(["color:#fff;font-size:1.3rem;text-align:left;margin-bottom:1rem;font-weight:700;&::after{content:'';width:1rem;height:1px;background:",";display:inline-block;vertical-align:middle;margin-left:1rem;}"],l.a.yellow500),Oe=s.c.ul.withConfig({displayName:"style__TimelineSectionList",componentId:"sc-1lqnxgh-1"})(["position:relative;width:100%;display:block;"]),Ee=function(e){var t=e.title,n=e.list,r=e.className;return i.a.createElement("article",{className:r},i.a.createElement(xe,null,t),i.a.createElement(Oe,null,n()))},ke=s.c.h2.withConfig({displayName:"style__EachSkillSectionTitle",componentId:"sc-1siyons-0"})(["color:#fff;font-size:1rem;text-align:left;margin-bottom:1rem;font-weight:700;&::after{content:'';width:.6rem;height:1px;background:",";display:inline-block;vertical-align:middle;margin-left:.6rem;}"],l.a.yellow500),Ie=s.c.ul.withConfig({displayName:"style__EachSkillSectionList",componentId:"sc-1siyons-1"})(["position:relative;width:100%;display:block;"]),_e=function(e){var t=e.title,n=e.list,r=e.className;return i.a.createElement("article",{className:r},i.a.createElement(ke,null,t),i.a.createElement(Ie,null,n()))};function Ne(){var e=Object(c.a)(["\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 10px;\n    grid-row-gap: 3rem;\n    padding: 2% 0 25px 5%;\n  "]);return Ne=function(){return e},e}function ze(){var e=Object(c.a)(["\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 1em;\n    grid-row-gap: 1rem;\n    padding: 2% 0 0 5%;\n  "]);return ze=function(){return e},e}function Te(){var e=Object(c.a)(["\n    grid-template-columns: repeat(4, 1fr);\n    grid-column-gap: 0;\n    padding: 0 0 0 6%;\n  "]);return Te=function(){return e},e}var Ce=s.c.section.withConfig({displayName:"style__TimelinesSection",componentId:"keuxth-0"})(["max-width:75%;margin:8rem auto 0;"]),Le=s.c.section.withConfig({displayName:"style__ListsSection",componentId:"keuxth-1"})(["max-width:75%;margin:8rem auto 0;display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:auto auto;grid-column-gap:8rem;grid-row-gap:2rem;"," "," ",""],l.d.lg(Te()),l.d.md(ze()),l.d.sm(Ne())),Ae=function(e){var t=e.name,n=e.url;return i.a.createElement(p,null,n?i.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},t):t)},Se=n("20nU");n("E9XD");var qe=function(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName};var Me=function(e){var t=Object.prototype.toString.call(e);return"object"==typeof window.NodeList?e instanceof window.NodeList:null!==e&&"object"==typeof e&&"number"==typeof e.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(t)&&(0===e.length||qe(e[0]))};var Pe=function(e,t){if(void 0===t&&(t=document),e instanceof Array)return e.filter(qe);if(qe(e))return[e];if(Me(e))return Array.prototype.slice.call(e);if("string"==typeof e)try{var n=t.querySelectorAll(e);return Array.prototype.slice.call(n)}catch(r){return[]}return[]};function Re(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6===e.length){var t=De();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function De(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function Fe(e,t){for(var n=Re(e),r=Re(t),i=[],o=0;o<4;o++)for(var a=[n[o],n[o+4],n[o+8],n[o+12]],c=0;c<4;c++){var s=4*c,l=[r[s],r[s+1],r[s+2],r[s+3]],u=a[0]*l[0]+a[1]*l[1]+a[2]*l[2]+a[3]*l[3];i[o+s]=u}return i}function We(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return Re(t[2].split(", ").map(parseFloat))}return De()}function Ye(e){var t=Math.PI/180*e,n=De();return n[0]=n[5]=Math.cos(t),n[1]=n[4]=Math.sin(t),n[4]*=-1,n}function He(e,t){var n=De();return n[0]=e,n[5]="number"==typeof t?t:e,n}var Xe,Ue=(Xe=Date.now(),function(e){var t=Date.now();t-Xe>16?(Xe=t,e(t)):setTimeout((function(){return Ue(e)}),0)}),Be=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Ue,$e={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};var Je={success:function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",(function(){document.body.style.height="100%"}))},failure:function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}};function Ze(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function Ge(e,t){if(Ze(e))return Object.keys(e).forEach((function(n){return t(e[n],n,e)}));if(e instanceof Array)return e.forEach((function(n,r){return t(n,r,e)}));throw new TypeError("Expected either an array or object literal.")}function Qe(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var r="%cScrollReveal: "+e;t.forEach((function(e){return r+="\n — "+e})),console.log(r,"color: #ea654b;")}}function Ke(){var e=this,t={active:[],stale:[]},n={active:[],stale:[]},r={active:[],stale:[]};try{Ge(Pe("[data-sr-id]"),(function(e){var n=parseInt(e.getAttribute("data-sr-id"));t.active.push(n)}))}catch(i){throw i}Ge(this.store.elements,(function(e){-1===t.active.indexOf(e.id)&&t.stale.push(e.id)})),Ge(t.stale,(function(t){return delete e.store.elements[t]})),Ge(this.store.elements,(function(e){-1===r.active.indexOf(e.containerId)&&r.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===n.active.indexOf(e.sequence.id)&&n.active.push(e.sequence.id)})),Ge(this.store.containers,(function(e){-1===r.active.indexOf(e.id)&&r.stale.push(e.id)})),Ge(r.stale,(function(t){var n=e.store.containers[t].node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate),delete e.store.containers[t]})),Ge(this.store.sequences,(function(e){-1===n.active.indexOf(e.id)&&n.stale.push(e.id)})),Ge(n.stale,(function(t){return delete e.store.sequences[t]}))}function Ve(e){var t,n=this;try{Ge(Pe(e),(function(e){var r=e.getAttribute("data-sr-id");if(null!==r){t=!0;var i=n.store.elements[r];i.callbackTimer&&window.clearTimeout(i.callbackTimer.clock),e.setAttribute("style",i.styles.inline.generated),e.removeAttribute("data-sr-id"),delete n.store.elements[r]}}))}catch(r){return Qe.call(this,"Clean failed.",r.message)}if(t)try{Ke.call(this)}catch(r){return Qe.call(this,"Clean failed.",r.message)}}function et(){var e=this;Ge(this.store.elements,(function(e){e.node.setAttribute("style",e.styles.inline.generated),e.node.removeAttribute("data-sr-id")})),Ge(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate)})),this.store={containers:{},elements:{},history:[],sequences:{}}}var tt=function(){var e={},t=document.documentElement.style;function n(n,r){if(void 0===r&&(r=t),n&&"string"==typeof n){if(e[n])return e[n];if("string"==typeof r[n])return e[n]=n;if("string"==typeof r["-webkit-"+n])return e[n]="-webkit-"+n;throw new RangeError('Unable to find "'+n+'" style property.')}throw new TypeError("Expected a string.")}return n.clearCache=function(){return e={}},n}();function nt(e){var t=window.getComputedStyle(e.node),n=t.position,r=e.config,i={},o=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];i.computed=o?o.map((function(e){return e.trim()})).join("; ")+";":"",i.generated=o.some((function(e){return e.match(/visibility\s?:\s?visible/i)}))?i.computed:o.concat(["visibility: visible"]).map((function(e){return e.trim()})).join("; ")+";";var a,c,s,l=parseFloat(t.opacity),u=isNaN(parseFloat(r.opacity))?parseFloat(t.opacity):parseFloat(r.opacity),d={computed:l!==u?"opacity: "+l+";":"",generated:l!==u?"opacity: "+u+";":""},f=[];if(parseFloat(r.distance)){var m="top"===r.origin||"bottom"===r.origin?"Y":"X",p=r.distance;"top"!==r.origin&&"left"!==r.origin||(p=/^-/.test(p)?p.substr(1):"-"+p);var g=p.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),h=g[0];switch(g[1]){case"em":p=parseInt(t.fontSize)*h;break;case"px":p=h;break;case"%":p="Y"===m?e.node.getBoundingClientRect().height*h/100:e.node.getBoundingClientRect().width*h/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===m?f.push(function(e){var t=De();return t[13]=e,t}(p)):f.push(function(e){var t=De();return t[12]=e,t}(p))}r.rotate.x&&f.push((a=r.rotate.x,c=Math.PI/180*a,(s=De())[5]=s[10]=Math.cos(c),s[6]=s[9]=Math.sin(c),s[9]*=-1,s)),r.rotate.y&&f.push(function(e){var t=Math.PI/180*e,n=De();return n[0]=n[10]=Math.cos(t),n[2]=n[8]=Math.sin(t),n[2]*=-1,n}(r.rotate.y)),r.rotate.z&&f.push(Ye(r.rotate.z)),1!==r.scale&&(0===r.scale?f.push(He(2e-4)):f.push(He(r.scale)));var y={};if(f.length){y.property=tt("transform"),y.computed={raw:t[y.property],matrix:We(t[y.property])},f.unshift(y.computed.matrix);var b=f.reduce(Fe);y.generated={initial:y.property+": matrix3d("+b.join(", ")+");",final:y.property+": matrix3d("+y.computed.matrix.join(", ")+");"}}else y.generated={initial:"",final:""};var v={};if(d.generated||y.generated.initial){v.property=tt("transition"),v.computed=t[v.property],v.fragments=[];var w=r.delay,j=r.duration,x=r.easing;d.generated&&v.fragments.push({delayed:"opacity "+j/1e3+"s "+x+" "+w/1e3+"s",instant:"opacity "+j/1e3+"s "+x+" 0s"}),y.generated.initial&&v.fragments.push({delayed:y.property+" "+j/1e3+"s "+x+" "+w/1e3+"s",instant:y.property+" "+j/1e3+"s "+x+" 0s"}),v.computed&&!v.computed.match(/all 0s|none 0s/)&&v.fragments.unshift({delayed:v.computed,instant:v.computed});var O=v.fragments.reduce((function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e}),{delayed:"",instant:""});v.generated={delayed:v.property+": "+O.delayed+";",instant:v.property+": "+O.instant+";"}}else v.generated={delayed:"",instant:""};return{inline:i,opacity:d,position:n,transform:y,transition:v}}function rt(e,t){void 0===t&&(t={});var n=t.pristine||this.pristine,r="always"===e.config.useDelay||"onload"===e.config.useDelay&&n||"once"===e.config.useDelay&&!e.seen,i=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;return t.reveal||i?it.call(this,e,r):t.reset||o?ot.call(this,e):void 0}function it(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,e.node.setAttribute("style",n.filter((function(e){return""!==e})).join(" ")),at.call(this,e,t)}function ot(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,e.node.setAttribute("style",t.filter((function(e){return""!==e})).join(" ")),at.call(this,e)}function at(e,t){var n=this,r=t?e.config.duration+e.config.delay:e.config.duration,i=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,a=0;e.callbackTimer&&(a=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),i(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout((function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&Ve.call(n,e.node)}),r-a)}}var ct,st=(ct=0,function(){return ct++});function lt(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return rt.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],r=e.sequence.index;if(n){var i=new dt(n,"visible",this.store),o=new dt(n,"revealed",this.store);if(n.models={visible:i,revealed:o},!o.body.length){var a=n.members[i.body[0]],c=this.store.elements[a];if(c)return ft.call(this,n,i.body[0],-1,t),ft.call(this,n,i.body[0],1,t),rt.call(this,c,{reveal:!0,pristine:t})}if(!n.blocked.head&&r===[].concat(o.head).pop()&&r>=[].concat(i.body).shift())return ft.call(this,n,r,-1,t),rt.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&r===[].concat(o.foot).shift()&&r<=[].concat(i.body).pop())return ft.call(this,n,r,1,t),rt.call(this,e,{reveal:!0,pristine:t})}}function ut(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=st(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function dt(e,t,n){var r=this;this.head=[],this.body=[],this.foot=[],Ge(e.members,(function(e,i){var o=n.elements[e];o&&o[t]&&r.body.push(i)})),this.body.length&&Ge(e.members,(function(e,i){var o=n.elements[e];o&&!o[t]&&(i<r.body[0]?r.head.push(i):r.foot.push(i))}))}function ft(e,t,n,r){var i=this,o=["head",null,"foot"][1+n],a=e.members[t+n],c=this.store.elements[a];e.blocked[o]=!0,setTimeout((function(){e.blocked[o]=!1,c&&lt.call(i,c,r)}),e.interval)}function mt(){var e=this;Ke.call(this),Ge(this.store.elements,(function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final),e.revealed=!0):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial),e.revealed=!1),e.node.setAttribute("style",t.filter((function(e){return""!==e})).join(" "))})),Ge(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.addEventListener("scroll",e.delegate),n.addEventListener("resize",e.delegate)})),this.delegate(),this.initTimeout=null}function pt(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}function gt(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(Ze(e))return Ge(t,(function(t){Ge(t,(function(t,n){Ze(t)?(e[n]&&Ze(e[n])||(e[n]={}),gt(e[n],t)):e[n]=t}))})),e;throw new TypeError("Target must be an object literal.")}function ht(e,t,n){var r=this;void 0===t&&(t={}),void 0===n&&(n=!1);var i,o=[],a=t.interval||$e.interval;try{a&&(i=new ut(a));var c=Pe(e);if(!c.length)throw new Error("Invalid reveal target.");var s=c.reduce((function(e,n){var a={},c=n.getAttribute("data-sr-id");c?(gt(a,r.store.elements[c]),a.node.setAttribute("style",a.styles.inline.computed)):(a.id=st(),a.node=n,a.seen=!1,a.revealed=!1,a.visible=!1);var s=gt({},a.config||r.defaults,t);if(!s.mobile&&pt()||!s.desktop&&!pt())return c&&Ve.call(r,a),e;var l,u=Pe(s.container)[0];if(!u)throw new Error("Invalid container.");return u.contains(n)?(null===(l=function(e){var t=[],n=arguments.length-1;for(;n-- >0;)t[n]=arguments[n+1];var r=null;return Ge(t,(function(t){Ge(t,(function(t){null===r&&t.node===e&&(r=t.id)}))})),r}(u,o,r.store.containers))&&(l=st(),o.push({id:l,node:u})),a.config=s,a.containerId=l,a.styles=nt(a),i&&(a.sequence={id:i.id,index:i.members.length},i.members.push(a.id)),e.push(a),e):e}),[]);Ge(s,(function(e){r.store.elements[e.id]=e,e.node.setAttribute("data-sr-id",e.id)}))}catch(l){return Qe.call(this,"Reveal failed.",l.message)}Ge(o,(function(e){r.store.containers[e.id]={id:e.id,node:e.node}})),i&&(this.store.sequences[i.id]=i),!0!==n&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(mt.bind(this),0))}function yt(){var e=this;Ge(this.store.history,(function(t){ht.call(e,t.target,t.options,!0)})),mt.call(this)}var bt=Math.sign||function(e){return(e>0)-(e<0)||+e};function vt(e,t){var n=t?e.node.clientHeight:e.node.offsetHeight,r=t?e.node.clientWidth:e.node.offsetWidth,i=0,o=0,a=e.node;do{isNaN(a.offsetTop)||(i+=a.offsetTop),isNaN(a.offsetLeft)||(o+=a.offsetLeft),a=a.offsetParent}while(a);return{bounds:{top:i,right:o+r,bottom:i+n,left:o},height:n,width:r}}function wt(e){var t,n;return e.node===document.documentElement?(t=window.pageYOffset,n=window.pageXOffset):(t=e.node.scrollTop,n=e.node.scrollLeft),{top:t,left:n}}function jt(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),r=e.config.viewOffset,i=e.geometry.bounds.top+e.geometry.height*n,o=e.geometry.bounds.right-e.geometry.width*n,a=e.geometry.bounds.bottom-e.geometry.height*n,c=e.geometry.bounds.left+e.geometry.width*n,s=t.geometry.bounds.top+t.scroll.top+r.top,l=t.geometry.bounds.right+t.scroll.left-r.right,u=t.geometry.bounds.bottom+t.scroll.top-r.bottom,d=t.geometry.bounds.left+t.scroll.left+r.left;return i<u&&o>d&&a>s&&c<l||"fixed"===e.styles.position}}function xt(e,t){var n=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),Be((function(){var r="init"===e.type||"resize"===e.type;Ge(n.store.containers,(function(e){r&&(e.geometry=vt.call(n,e,!0));var t=wt.call(n,e);e.scroll&&(e.direction={x:bt(t.left-e.scroll.left),y:bt(t.top-e.scroll.top)}),e.scroll=t})),Ge(t,(function(e){(r||void 0===e.geometry)&&(e.geometry=vt.call(n,e)),e.visible=jt.call(n,e)})),Ge(t,(function(e){e.sequence?lt.call(n,e):rt.call(n,e)})),n.pristine=!1}))}var Ot,Et,kt,It,_t,Nt,zt,Tt;function Ct(e){var t;if(void 0===e&&(e={}),void 0===this||Object.getPrototypeOf(this)!==Ct.prototype)return new Ct(e);if(!Ct.isSupported())return Qe.call(this,"Instantiation failed.","This browser is not supported."),Je.failure();try{t=gt({},Nt||$e,e)}catch(n){return Qe.call(this,"Invalid configuration.",n.message),Je.failure()}try{if(!Pe(t.container)[0])throw new Error("Invalid container.")}catch(n){return Qe.call(this,n.message),Je.failure()}return!(Nt=t).mobile&&pt()||!Nt.desktop&&!pt()?(Qe.call(this,"This device is disabled.","desktop: "+Nt.desktop,"mobile: "+Nt.mobile),Je.failure()):(Je.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,Ot=Ot||xt.bind(this),Et=Et||et.bind(this),kt=kt||ht.bind(this),It=It||Ve.bind(this),_t=_t||yt.bind(this),Object.defineProperty(this,"delegate",{get:function(){return Ot}}),Object.defineProperty(this,"destroy",{get:function(){return Et}}),Object.defineProperty(this,"reveal",{get:function(){return kt}}),Object.defineProperty(this,"clean",{get:function(){return It}}),Object.defineProperty(this,"sync",{get:function(){return _t}}),Object.defineProperty(this,"defaults",{get:function(){return Nt}}),Object.defineProperty(this,"version",{get:function(){return"4.0.7"}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),Tt||(Tt=this))}Ct.isSupported=function(){return function(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}()&&function(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}()},Object.defineProperty(Ct,"debug",{get:function(){return zt||!1},set:function(e){return zt="boolean"==typeof e?e:zt}}),Ct();var Lt="undefined"==typeof window?null:Ct(),At=function(e){var t=e.data,n=t.timelines,o=t.designs,a=t.languages,c=t.frameworks,s=t.tools,l=Object(r.useRef)(null);return Object(r.useEffect)((function(){return Lt.reveal(l.current,Object(Se.srConfig)())}),[]),i.a.createElement(m,null,i.a.createElement(pe,null),i.a.createElement(Ce,null,n.edges.length>0&&i.a.createElement(Ee,{title:"Timeline",list:function(){return n.edges.map((function(e,t){var n=e.timeline;return i.a.createElement(je,Object.assign({key:t},n))}))}})),i.a.createElement(Le,{ref:l},o.edges.length>0&&i.a.createElement(_e,{title:"Design",list:function(){return o.edges.map((function(e,t){var n=e.design;return i.a.createElement(Ae,Object.assign({key:t},n))}))}}),a.edges.length>0&&i.a.createElement(_e,{title:"Languages",list:function(){return a.edges.map((function(e,t){var n=e.language;return i.a.createElement(Ae,Object.assign({key:t},n))}))}}),c.edges.length>0&&i.a.createElement(_e,{title:"Frameworks",list:function(){return c.edges.map((function(e,t){var n=e.framework;return i.a.createElement(Ae,Object.assign({key:t},n))}))}}),s.edges.length>0&&i.a.createElement(_e,{title:"Tools",list:function(){return s.edges.map((function(e,t){var n=e.tool;return i.a.createElement(Ae,Object.assign({key:t},n))}))}})))},St=n("ydnR"),qt=n("0Csh"),Mt=n("BX6Z");t.default=function(e){var t=e.location;return i.a.createElement(o.StaticQuery,{query:"1862419953",render:function(e){return i.a.createElement(a.a,{location:t},i.a.createElement(qt.a,Object.assign({},St.a.about,{image:St.a.common.image})),i.a.createElement(Mt.a,{title:"About"}),i.a.createElement(At,{data:e}))}})}},BX6Z:function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),o=n("MUpH"),a=n("vOnD"),c=n("zIjI");function s(){var e=Object(o.a)(["\n      font-size: 7.5vw;\n  "]);return s=function(){return e},e}function l(){var e=Object(o.a)(["\n  margin-top: 10rem;\n  margin-left: 11rem;\n  "]);return l=function(){return e},e}var u=a.c.div.withConfig({displayName:"style__Header",componentId:"sc-9yx0sb-0"})(["display:block;position:fixed;width:10vw;margin-top:0;margin-left:10rem;height:100vh;transform-origin:top;transform:rotate(90deg);",""],c.d.mon24(l())),d=a.c.h1.withConfig({displayName:"style__HeaderTitle",componentId:"sc-9yx0sb-1"})(["font-family:",";color:",";font-weight:300;letter-spacing:5px;font-size:8.5vw;text-transform:uppercase;white-space:nowrap;opacity:0.3;",' &:before,&:after{position:absolute;opacity:0.2;}&:before{content:attr(data-title) "—";transform:translateX(-100%);}&:after{content:"—" attr(data-title) "—" attr(data-title) "—" attr(data-title) "—";}&:hover{transform:translate(-25px,0);transition:transform .3s cubic-bezier(.45,0,.1,1),opacity .1s ease;}'],c.b.display,c.a.white,c.d.mon24(s()));t.a=function(e){var t=e.title;return i.a.createElement(u,null,i.a.createElement(d,{"data-title":t},t))}}}]);
//# sourceMappingURL=component---src-pages-about-js-064ddb2f7c85759e4914.js.map