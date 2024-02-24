import{a as g}from"./assets/vendor-e24866db.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();async function u(o,s){const l="42280765-41e7252ac679e023dc9db9847",t="https://pixabay.com/api/",i={key:l,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15};try{return(await g.get(t,{params:i})).data}catch(n){throw console.error("There has been a problem with your axios request:",n),n}}function L(o){const{imageUrl:s,webformatURL:l,alt:a,likes:e,views:t,comments:i,downloads:n}=o;return`<li class="gallery-item">
    <div class="gallery">
    <a class="gallery-link" href="${s}">
    <img
        class="gallery-image"
        src="${l}"
        alt="${a}"
        width=360
    />
    </a>
    <div class="gallery-info">
    <ul class="list-item">Likes<li class="item">${e}</li></ul>
    <ul class="list-item">Views<li class="item">${t}</li></ul>
    <ul class="list-item">Comments<li class="item">${i}</li></ul>
    <ul class="list-item">Downloads<li class="item">${n}</li></ul>
    </div>
    </div>
    </li>`}function b(o){return o.map(L).join("")}const r={formElem:document.querySelector(".form"),listElem:document.querySelector(".gallery-list"),loadElem:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")};let c,d,m;r.formElem.addEventListener("submit",E);r.btnLoadMore.addEventListener("click",w);async function E(o){o.preventDefault(),c=o.target.elements.query.value.trim(),d=1,p();const s=await u(c);console.log(s),m=Math.ceil(s.totalHits/15),r.listElem.innerHTML="",f(s.hits),h(),y(),o.target.reset()}async function w(){d+=1,p();const o=await u(c);f(o.hits),h(),y()}function f(o){const s=b(o);r.listElem.insertAdjacentHTML("beforeend",s)}function p(){r.loadElem.classList.remove("hidden")}function h(){r.loadElem.classList.add("hidden")}function v(){r.btnLoadMore.classList.remove("hidden")}function M(){r.btnLoadMore.classList.add("hidden")}function y(){d>=m?M():v()}
//# sourceMappingURL=commonHelpers.js.map
