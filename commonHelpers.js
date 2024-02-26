import{a as b,S as w,i as E}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}})();async function h(e,t){const l="42280765-41e7252ac679e023dc9db9847",o="https://pixabay.com/api/",s={key:l,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};try{return(await b.get(o,{params:s})).data}catch(n){throw console.error("There has been a problem with your axios request:",n),n}}function S(e){const{largeImageURL:t,webformatURL:l,alt:a,likes:r,views:o,comments:s,downloads:n}=e;return`<li class="gallery-item">
    <div class="gallery">
    <a class="gallery-link" href="${t}">
    <img
        class="gallery-image"
        src="${l}"
        alt="${a}"
        width=360
    />
    </a>
    <div class="gallery-info">
    <ul class="list-item">Likes<li class="item">${r}</li></ul>
    <ul class="list-item">Views<li class="item">${o}</li></ul>
    <ul class="list-item">Comments<li class="item">${s}</li></ul>
    <ul class="list-item">Downloads<li class="item">${n}</li></ul>
    </div>
    </div>
    </li>`}function M(e){return e.map(S).join("")}const i={formElem:document.querySelector(".form"),listElem:document.querySelector(".gallery-list"),loadElem:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")};let c,f,m;i.formElem.addEventListener("submit",q);i.btnLoadMore.addEventListener("click",v);async function q(e){if(e.preventDefault(),c=e.target.elements.query.value.trim(),f=1,!c){d("Please enter text to search for.");return}p();try{const t=await h(c);t.totalHits===0&&d("Sorry, there are no images matching your search query. Please try again!"),m=Math.ceil(t.totalHits/15),i.listElem.innerHTML="",y(t.hits)}catch(t){d(t.message),m=0,i.listElem.innerHTML=""}g(),L(),e.target.reset()}async function v(){f+=1,p();const e=await h(c);y(e.hits),g(),L()}function y(e){const t=M(e);i.listElem.insertAdjacentHTML("beforeend",t),new w(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function p(){i.loadElem.classList.remove("hidden")}function g(){i.loadElem.classList.add("hidden")}function $(){i.btnLoadMore.classList.remove("hidden")}function P(){i.btnLoadMore.classList.add("hidden")}function L(){f>=m?P():$()}function d(e){E.error({title:"Error",message:e,position:"topRight"})}let x=document.querySelector(".gallery"),u=x.getBoundingClientRect();for(const e in u)if(typeof u[e]!="function"){let t=document.createElement("p");t.textContent=`${e} : ${u[e]}`,document.body.appendChild(t)}window.scrollBy(0,-window.innerHeight);
//# sourceMappingURL=commonHelpers.js.map
