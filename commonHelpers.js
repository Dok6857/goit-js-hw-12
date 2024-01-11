import{i as l,s as L}from"./assets/vendor-8ce50246.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const b=document.querySelector(".search-form"),c=document.querySelector(".search-input");document.querySelector(".search-btn");const u=document.querySelector(".gallery"),n=document.querySelector(".loader");n.style.display="none";b.addEventListener("submit",i=>{i.preventDefault();const o=c.value.trim();u.innerHTML="",c.value="",n.style.display="block";const a=new URLSearchParams({key:"41544078-5d11fd93221b0dd23a16f477d",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});fetch(`https://pixabay.com/api/?${a}`).then(t=>{if(n.style.display="none",!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.hits.length===0)throw l.show({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",backgroundColor:"#EF4040",titleColor:"white",position:"topRight"});const e=t.hits.reduce((s,{webformatURL:d,largeImageURL:p,tags:m,likes:y,views:f,comments:h,downloads:g})=>s+`<li class="gallery-item">
          <a class="gallery-link" href="${p}">
           <img class="gallery-image"
           src="${d}"
           alt="${m}"
           />
          </a>          
          <div class="description">
          <p>Likes:<span>${y}</span></p>
          <p>Views:<span>${f}</span></p>
          <p>Comments:<span>${h}</span></p>
          <p>Downloads:<span>${g}</span></p>
          </div> 
        </li>`,"");u.innerHTML=e,new L("ul.gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}).catch(t=>{n.style.display="none",l.error({message:t.message,color:"red",position:"topCenter"}),console.error("Error fetching data:",t)})});
//# sourceMappingURL=commonHelpers.js.map
