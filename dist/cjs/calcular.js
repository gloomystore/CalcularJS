"use strict";function r(){var e=["560523XdnDOm","log","Invalid characters found in the expression.","toString","35524269SxQIxn","replace","1206441ZzLnbI","value","includes","__esModule","function","length","6637456XRJBiF","undefined","The expression is valid.","Expression after whitespace removal:","5016402UzkmKQ","Invalid expression","pop","pow","multiplier","number","split","calcular","error","Error in calculation:","map","apply","1642892RFtUMx","test","push","isCalcularValid","Unknown Math method: ","6EeHJgF","message","The expression format is invalid.","84nKFnyP","20OBBtbs","444192EclxoC","5ecNjol"];return(r=function(){return e})()}var e=n;!function(){for(var e=n,t=r();;)try{if(659984===-parseInt(e(419))/1+-parseInt(e(412))/2*(-parseInt(e(425))/3)+-parseInt(e(407))/4*(-parseInt(e(418))/5)+-parseInt(e(417))/6*(-parseInt(e(415))/7)+parseInt(e(391))/8+parseInt(e(395))/9*(parseInt(e(416))/10)+-parseInt(e(423))/11)break;t.push(t.shift())}catch(r){t.push(t.shift())}}(),Object.defineProperty(exports,e(428),{value:!0}),exports[e(410)]=exports[e(402)]=void 0;var t=function(r){var t=e;if(!a(r))return NaN;function n(r){var e=t;if(typeof r===e(400))return{value:r,multiplier:1};if(r[e(427)](".")){var n=r[e(401)]("."),a=n[0],i=n[1],o=Math[e(398)](10,i.length);return{value:parseInt(a+i),multiplier:o}}return{value:parseInt(r),multiplier:1}}function i(r,e){return 0===e?r:i(e,r%e)}function o(r,e){return r*e/i(r,e)}function u(r,e,n){var a=t,i=o(r.multiplier,e[a(399)]),u=i/r[a(399)],l=i/e.multiplier,s=r[a(426)]*u,p=e[a(426)]*l,c=0;switch(n){case"+":c=s+p;break;case"-":c=s-p;break;case"*":c=s*p;break;case"/":if(0===p)throw new Error("Division by zero!");c=s*i/p;break;case"%":c=s%p;break;case"^":c=Math[a(398)](s/u,p/l)*i;break;default:throw new Error("Unknown operator: ".concat(n))}return{value:c,multiplier:i}}r=r.replace(/\s+/g,"");try{return function r(e){var a,i=t;for(a=/Math\.(\w+)\(([^)]+)\)/;a[i(408)](e);)e=e.replace(a,(function(r,e,t){var n,a=i;if(typeof Math[e]===a(429)){var o=t.split(",")[a(405)]((function(r){return parseFloat(r.trim())}));return(n=Math)[e][a(406)](n,o).toString()}throw new Error(a(411).concat(e))}));for(;e[i(427)]("(");)e=e.replace(/\(([^()]+)\)/g,(function(e,t){return r(t).toString()}));for(a=/(-?\d*\.?\d+)\^(-?\d*\.?\d+)/;a.test(e);)e=e.replace(a,(function(r,e,t){var a=i,o=u(n(e),n(t),"^");return(o.value/o[a(399)])[a(422)]()}));for(a=/(-?\d*\.?\d+)([*/%])(-?\d*\.?\d+)/;a[i(408)](e);)e=e[i(424)](a,(function(r,e,t,a){var o=i,l=u(n(e),n(a),t);return(l[o(426)]/l.multiplier)[o(422)]()}));for(a=/(-?\d*\.?\d+)([+-])(-?\d*\.?\d+)/;a[i(408)](e);)e=e[i(424)](a,(function(r,e,t,a){var o=i,l=u(n(e),n(a),t);return(l[o(426)]/l[o(399)])[o(422)]()}));var o=n(e);return o[i(426)]/o.multiplier}(r)}catch(r){return NaN}};function n(e,t){var a=r();return(n=function(r,e){return a[r-=390]})(e,t)}exports[e(402)]=t;var a=function(r){for(var t=e,n=[],a=0,i=r=r[t(424)](/\s+/g,"");a<i[t(390)];a++){var o=i[a];if("("===o)n[t(409)](o);else if(")"===o){if(0===n.length)return!1;n[t(397)]()}}if(0!==n[t(390)])return!1;if(/[^0-9+\-*/%^().,Math\w]/[t(408)](r))return!1;return!!/^(Math\.\w+\([^()]*\)|-?\d+(\.\d+)?)([+\-*/%^](Math\.\w+\([^()]*\)|-?\d+(\.\d+)?))*$/.test(r)};exports[e(410)]=a,typeof window!==e(392)&&typeof module!==e(392)&&void 0!==module.exports&&(window.Calcular={calcular:t,isCalcularValid:a}),exports.default=t;
