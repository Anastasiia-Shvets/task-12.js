import{a as p,S as L,i as b}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();async function f(r,t){const a="42280765-41e7252ac679e023dc9db9847",o="https://pixabay.com/api/",i={key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};try{return(await p.get(o,{params:i})).data}catch(n){throw console.error("There has been a problem with your axios request:",n),n}}function E(r){const{largeImageURL:t,webformatURL:a,alt:l,likes:e,views:o,comments:i,downloads:n}=r;return`<li class="gallery-item">
    <div class="gallery">
    <a class="gallery-link" href="${t}">
    <img
        class="gallery-image"
        src="${a}"
        alt="${l}"
        width=360
    />
    </a>
    <div class="gallery-info">
    <ul class="list-item">Likes<li class="item">${e}</li></ul>
    <ul class="list-item">Views<li class="item">${o}</li></ul>
    <ul class="list-item">Comments<li class="item">${i}</li></ul>
    <ul class="list-item">Downloads<li class="item">${n}</li></ul>
    </div>
    </div>
    </li>`}function w(r){return r.map(E).join("")}const s={formElem:document.querySelector(".form"),listElem:document.querySelector(".gallery-list"),loadElem:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")};let c,m,u;s.formElem.addEventListener("submit",S);s.btnLoadMore.addEventListener("click",v);async function S(r){if(r.preventDefault(),c=r.target.elements.query.value.trim(),m=1,!c){d("Please enter text to search for.");return}try{const t=await f(c);t.totalHits===0&&d("Sorry, there are no images matching your search query. Please try again!"),u=Math.ceil(t.totalHits/15),s.listElem.innerHTML="",h(t.hits)}catch(t){d(t.message),u=0,s.listElem.innerHTML=""}y(),g(),r.target.reset()}async function v(){m+=1,M();const r=await f(c);h(r.hits),y(),g();const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}function h(r){const t=w(r);s.listElem.insertAdjacentHTML("beforeend",t),new L(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function M(){s.loadElem.classList.remove("hidden")}function y(){s.loadElem.classList.add("hidden")}function q(){s.btnLoadMore.classList.remove("hidden")}function P(){s.btnLoadMore.classList.add("hidden")}function g(){m>=u?P():q()}function d(r){b.error({title:"Error",message:r,position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
