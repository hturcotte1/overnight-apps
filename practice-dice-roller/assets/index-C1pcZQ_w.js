(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},t=`practice-dice-roller:v1`;function n(){return Math.floor(Math.random()*6)+1}function r(){try{let e=localStorage.getItem(t);if(e){let t=JSON.parse(e),n=o(Number(t.count));return{count:n,faces:Array.isArray(t.faces)?t.faces.filter(a).slice(0,n):[]}}}catch{}return{count:2,faces:[]}}function i(e){try{localStorage.setItem(t,JSON.stringify(e))}catch{}}function a(e){return typeof e==`number`&&e>=1&&e<=6&&Number.isInteger(e)}function o(e){return Number.isFinite(e)?Math.min(6,Math.max(1,Math.round(e))):2}var s=r(),c=document.querySelector(`#app`);c.innerHTML=`
  <main class="wrap">
    <h1>Practice Dice Roller</h1>
    <p class="sub">Pick how many dice, then roll.</p>

    <div class="control">
      <label for="count">Dice: <span id="count-label">${s.count}</span></label>
      <input id="count" type="range" min="1" max="6" step="1" value="${s.count}"
        aria-label="Number of dice" />
    </div>

    <div id="dice" class="dice" aria-live="polite" aria-label="Dice"></div>

    <div id="total" class="total" role="status" aria-live="polite"></div>

    <div class="actions">
      <button id="roll" class="primary" type="button">Roll</button>
      <button id="example" class="secondary" type="button">Try an example</button>
    </div>
  </main>
`;var l=c.querySelector(`#count`),u=c.querySelector(`#count-label`),d=c.querySelector(`#dice`),f=c.querySelector(`#total`),p=c.querySelector(`#roll`),m=c.querySelector(`#example`);function h(t){return`<div class="die" role="img" aria-label="Shows ${t}">${Array.from({length:9},(n,r)=>e[t].includes(r)?`<span class="pip"></span>`:`<span></span>`).join(``)}</div>`}function g(){if(u.textContent=String(s.count),l.value=String(s.count),s.faces.length===0){d.innerHTML=`<p class="empty">No roll yet. Tap <strong>Roll</strong> to start, or <strong>Try an example</strong>.</p>`,f.textContent=``;return}d.innerHTML=s.faces.map(h).join(``);let e=s.faces.reduce((e,t)=>e+t,0),t=s.faces.length===1?`die`:`dice`;f.textContent=`Total: ${e} (${s.faces.length} ${t})`}function _(e){s.faces=e??Array.from({length:s.count},n),i(s),g()}l.addEventListener(`input`,()=>{s.count=o(Number(l.value)),s.faces.length>s.count&&(s.faces=s.faces.slice(0,s.count)),i(s),g()}),p.addEventListener(`click`,()=>_()),m.addEventListener(`click`,()=>{s.count=3,_([3,5,2])}),g();