(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{225:function(e,t,n){"use strict";n.r(t),n.d(t,"addCssBlock",(function(){return a}));n(21);var i=n(1),o=n(10),s=n(9),d=n(3);class r extends d.a{static get template(){return i.a`
    <slot></slot>
`}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}connectedCallback(){super.connectedCallback(),this._runChrome72ShadowDomBugWorkaround()}_runChrome72ShadowDomBugWorkaround(){const e=navigator.userAgent;if(e&&e.match("Chrome/")){const t=e.split("Chrome/")[1].split(".")[0];if(t&&parseInt(t)>71){const e=this._getDebouncedNotifyResizeFunction();e&&(this.style.visibility="hidden",requestAnimationFrame(()=>{this.style.visibility="",e()}))}}}_getDebouncedNotifyResizeFunction(){let e=this.parentElement;for(;;){if(!e)return;if(e.notifyResize)break;e=e.parentElement}return e._debouncedNotifyResize||(e._debouncedNotifyResize=function(){e.__debouncedNotifyResize=o.a.debounce(e.__debouncedNotifyResize,s.a,e.notifyResize)}),e._debouncedNotifyResize}ready(){super.ready(),this.addEventListener("click",(function(e){this.firstChild&&"function"==typeof this.firstChild.click&&e.target===this&&this.firstChild.click()}))}_asyncAttachRenderedComponentIfAble(){this._debouncer=o.a.debounce(this._debouncer,s.b,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(!this.nodeid||!this.appid)return;const e=this._getRenderedComponent();this.firstChild?e?this.firstChild!==e?(this.replaceChild(e,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):(this._clear(),this._asyncAttachRenderedComponentIfAble()):e?(this.appendChild(e),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(e){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(e)}return null}_clear(){for(;this.firstChild;)this.removeChild(this.firstChild)}onComponentRendered(){}_defineFocusTarget(){var e=this._getFirstFocusableDescendant(this.firstChild);null!==e&&e.setAttribute("focus-target","true")}_getFirstFocusableDescendant(e){if(this._isFocusable(e))return e;if(!e.children)return null;for(var t=0;t<e.children.length;t++){var n=this._getFirstFocusableDescendant(e.children[t]);if(null!==n)return n}return null}_isFocusable(e){return(!e.hasAttribute||"function"!=typeof e.hasAttribute||!e.hasAttribute("disabled")&&!e.hasAttribute("hidden"))&&0===e.tabIndex}}window.customElements.define(r.is,r);n(46),n(7),n(212),n(15),n(6),n(11),n(13),n(195),n(196),n(23);const a=function(e,t=!1){const n=document.createElement("template");n.innerHTML=e,document.head[t?"insertBefore":"appendChild"](n.content,document.head.firstChild)};let l;a('<custom-style><style include="lumo-color lumo-typography"></style></custom-style>',!0),a("<custom-style><style>/*\n   CSS styling examples for the Vaadin app.\n   Visit https://vaadin.com/docs/flow/theme/theming-overview.html and\n   https://vaadin.com/themes/lumo for more information.\n*/\n\n/* Example: CSS class name to center align the content . */\n.centered-content {\n  margin: 0 auto;\n  max-width: 250px;\n}\n\n</style></custom-style>"),a('<dom-module id="flow_css_mod_1" theme-for="vaadin-text-field"><template><style>/*\n   CSS styling examples for the Vaadin app.\n   Visit https://vaadin.com/docs/flow/theme/theming-overview.html and\n   https://vaadin.com/themes/lumo for more information.\n*/\n\n/* Example: border-only style for all Vaadin textfields . */\n[part="input-field"] {\n    box-shadow: inset 0 0 0 1px var(--lumo-contrast-30pct);\n    background-color: var(--lumo-base-color);\n}\n</style></template></dom-module>');const c=document.getElementsByTagName("script");for(let e=0;e<c.length;e++){const t=c[e];if("module"==t.getAttribute("type")&&t.getAttribute("data-app-id")&&!t["vaadin-bundle"]){l=t;break}}if(!l)throw new Error("Could not find the bundle script to identify the application id");l["vaadin-bundle"]=!0,window.Vaadin.Flow.fallbacks||(window.Vaadin.Flow.fallbacks={});const h=window.Vaadin.Flow.fallbacks;h[l.getAttribute("data-app-id")]={},h[l.getAttribute("data-app-id")].loadFallback=function(){return Promise.all([n.e(1),n.e(3)]).then(n.bind(null,224))}}}]);