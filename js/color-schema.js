!function(e,t){var r=t.documentElement,a="Lnote_Color_Scheme",o="--color-mode",n="data-bs-theme",i="data-default-color-scheme",c="#color-toggle-icon";function u(e){try{return localStorage.getItem(e)}catch(e){return null}}function s(){var e=getComputedStyle(r).getPropertyValue(o);return"string"==typeof e?e.replace(/["'\s]/g,""):null}function l(){r.setAttribute(n,g()),function(e){try{localStorage.removeItem(e)}catch(e){}}(a)}var d={dark:!0,light:!0};function g(){var e,t="string"==typeof(e=r.getAttribute(i))?e.replace(/["'\s]/g,""):null;if(d[t])return t;if(t=s(),d[t])return t;var a=(new Date).getHours();return a>=18||a>=0&&a<=6?"dark":"light"}function m(o){var i=o||u(a)||g();if(i===g())l();else{if(!d[i])return void l();r.setAttribute(n,i)}!function(e){if(d[e]){var r=h("dark");e&&(r=h(e));var a=t.querySelector(c);if(a?(a.setAttribute("class","iconfont "+r),a.setAttribute("data",f[e])):LNote.utils.waitElementLoaded(c,(function(){var a=t.querySelector(c);a&&(a.setAttribute("class","iconfont "+r),a.setAttribute("data",f[e]))})),t.documentElement.getAttribute("data-bs-theme")){var o=getComputedStyle(t.documentElement).getPropertyValue("--navbar-bg-color").trim();t.querySelector('meta[name="theme-color"]').setAttribute("content",o)}}}(i),function(e){var r=t.getElementById("highlight-css"),a=t.getElementById("highlight-css-dark");"dark"===e?(a&&a.removeAttribute("disabled"),r&&r.setAttribute("disabled","")):(r&&r.removeAttribute("disabled"),a&&a.setAttribute("disabled",""));setTimeout((function(){t.querySelectorAll(".markdown-body pre").forEach((e=>{var t=LNote.utils.getBackgroundLightness(e)>=0?"code-widget-light":"code-widget-dark",r=e.querySelector(".code-widget-light, .code-widget-dark");r&&(r.classList.remove("code-widget-light","code-widget-dark"),r.classList.add(t))}))}),200)}(i),function(r){e.REMARK42&&e.REMARK42.changeTheme(r);e.CUSDIS&&e.CUSDIS.setTheme(r);var a=t.querySelector(".utterances-frame");if(a){const t={type:"set-theme",theme:"dark"===r?e.UtterancesThemeDark:e.UtterancesThemeLight};a.contentWindow.postMessage(t,"https://utteranc.es")}var o=t.querySelector("iframe.giscus-frame");if(o){const t={setConfig:{theme:"dark"===r?e.GiscusThemeDark:e.GiscusThemeLight}};o.contentWindow.postMessage({giscus:t},"https://giscus.app")}}(i)}var f={dark:"light",light:"dark"};function h(e){return"icon-"+e}function v(){var e=u(a);if(d[e])e=f[e];else{if(null!==e)return;var r=t.querySelector(c);r&&(e=r.getAttribute("data")),r&&d[e]||(e=f[s()])}return function(e,t){try{localStorage.setItem(e,t)}catch(e){}}(a,e),e}m(),LNote.utils.waitElementLoaded(c,(function(){m();var e=t.querySelector("#color-toggle-btn");if(e){e.addEventListener("click",(function(){m(v())}));var r=t.querySelector(c);r&&(e.addEventListener("mouseenter",(function(){var e=r.getAttribute("data");r.classList.replace(h(f[e]),h(e))})),e.addEventListener("mouseleave",(function(){var e=r.getAttribute("data");r.classList.replace(h(e),h(f[e]))})))}}))}(window,document);