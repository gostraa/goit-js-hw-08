!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return m.Date.now()};function y(e,t,n){var r,i,a,f,u,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function h(e){return c=e,u=setTimeout(w,t),s?y(e):f}function O(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function w(){var e=b();if(O(e))return S(e);u=setTimeout(w,function(e){var n=t-(e-l);return m?g(n,a-(e-c)):n}(e))}function S(e){return u=void 0,d&&r?y(e):(r=i=void 0,f)}function T(){var e=b(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return h(l);if(m)return u=setTimeout(w,t),y(l)}return void 0===u&&(u=setTimeout(w,t)),f}return t=j(t)||0,p(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},T.flush=function(){return void 0===u?f:S(b())},T}function p(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(p(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=p(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||u.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var h,O={form:document.querySelector(".feedback-form")};O.form.addEventListener(e(t)((function(e){var t,n,r,o=O.form.elements.email.value,i=O.form.elements.message.value;t="feedback-form-state",n={email:o,message:i},r=JSON.stringify(n),localStorage.setItem(t,r)}),500)),O.form.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.elements.email.value,n=e.target.elements.message.value;console.log({email:t,message:n}),localStorage.removeItem("feedback-form-state"),e.target.reset()})),(h=function(e){var t=localStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}}("feedback-form-state"))&&(O.form.elements.email.value=h.email||"Anonym@com",O.form.elements.message.value=h.message||"")}();
//# sourceMappingURL=03-feedback.45987beb.js.map