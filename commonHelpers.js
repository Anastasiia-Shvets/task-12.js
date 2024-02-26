import{a as E,S as w,i as p}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function y(o,t){const s="42280765-41e7252ac679e023dc9db9847",r="https://pixabay.com/api/",a={key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};try{return(await E.get(r,{params:a})).data}catch(n){throw console.error("There has been a problem with your axios request:",n),n}}function S(o){const{largeImageURL:t,webformatURL:s,alt:l,likes:e,views:r,comments:a,downloads:n}=o;return`<li class="gallery-item">
    <div class="gallery">
    <a class="gallery-link" href="${t}">
    <img
        class="gallery-image"
        src="${s}"
        alt="${l}"
        width=360
    />
    </a>
    <div class="gallery-info">
    <ul class="list-item">Likes<li class="item">${e}</li></ul>
    <ul class="list-item">Views<li class="item">${r}</li></ul>
    <ul class="list-item">Comments<li class="item">${a}</li></ul>
    <ul class="list-item">Downloads<li class="item">${n}</li></ul>
    </div>
    </div>
    </li>`}function v(o){return o.map(S).join("")}const i={formElem:document.querySelector(".form"),listElem:document.querySelector(".gallery-list"),loadElem:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")};let u,c,d,f;i.formElem.addEventListener("submit",M);i.btnLoadMore.addEventListener("click",q);async function M(o){if(o.preventDefault(),c=o.target.elements.query.value.trim(),d=1,!c){m("Please enter text to search for.");return}L();try{const t=await y(c,d);if(t.totalHits===0){m("Sorry, there are no images matching your search query. Please try again!"),h();return}f=Math.ceil(t.totalHits/15),i.listElem.innerHTML="",g(t.hits)}catch(t){m(t.message),f=0,i.listElem.innerHTML=""}h(),b(),o.target.reset()}async function q(){d+=1,L();const o=await y(c);g(o.hits),h(),b();const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}function g(o){const t={captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250},s=v(o);i.listElem.insertAdjacentHTML("beforeend",s),u&&u.destroy(),u=new w(".gallery a",t)}function L(){i.loadElem.classList.remove("hidden")}function h(){i.loadElem.classList.add("hidden")}function P(){i.btnLoadMore.classList.remove("hidden")}function T(){i.btnLoadMore.classList.add("hidden")}function b(){d>=f?(T(),$()):P()}function m(o){p.error({title:"Error",message:o,position:"topRight"})}function $(){p.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
