const e=document.querySelector(".form"),t=document.querySelector("button"),n=Number(e.elements.delay.value),m=(Number(e.elements.step.value),Number(e.elements.amount.value));function o(e,t){const m=Math.random()>.3;return new Promise(((o,u)=>{setTimeout((()=>{m?o(`✅ Fulfilled promise ${e} in ${t}ms`):u(`❌ Rejected promise ${e} in ${t}ms`)}),n)}))}t.addEventListener("click",(function(){for(let e=0;e<=m;e+=1)o(e,n).then().catch()}));
//# sourceMappingURL=03-promises.cbca6ad8.js.map
