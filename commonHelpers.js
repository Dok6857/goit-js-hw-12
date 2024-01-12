import{a as b,i as d,s as v}from"./assets/vendor-6b270e19.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const P=document.querySelector(".search-form"),f=document.querySelector(".search-input"),p=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";let w=1;const L=40,c=document.querySelector(".load-more");c.style.display="none";let i="";b.defaults.baseURL="https://pixabay.com";const $="/api/";P.addEventListener("submit",async o=>{if(o.preventDefault(),i=f.value.trim(),p.innerHTML="",f.value="",i!==""){l.style.display="block",f.value="";try{const t=await b.get($,{params:q(i)});l.style.display="none";const r=t.data;if(r.hits.length===0)throw d.show({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",backgroundColor:"#EF4040",titleColor:"white",position:"topRight"});const a=r.hits.reduce((s,{webformatURL:n,largeImageURL:y,tags:u,likes:m,views:g,comments:h,downloads:S})=>s+`<li class="gallery-item">
          <a class="gallery-link" href="${y}">
           <img class="gallery-image"
           src="${n}"
           alt="${u}"
           />
          </a>          
          <div class="description">
          <p>Likes:<span>${m}</span></p>
          <p>Views:<span>${g}</span></p>
          <p>Comments:<span>${h}</span></p>
          <p>Downloads:<span>${S}</span></p>
          </div> 
        </li>`,"");p.innerHTML=a;let e=new v("ul.gallery a",{captionDelay:250,captionsData:"alt"});p.insertAdjacentHTML("beforeend",a),r.hits.length>=L&&(c.style.display="block"),e.refresh()}catch(t){l.style.display="none",d.error({message:t.message,color:"red",position:"topRight"}),console.error("Error fetching data:",t),c.style.display="none"}}});c.addEventListener("click",async()=>{let o=new v("ul.gallery a",{captionDelay:250,captionsData:"alt"});console.log(i),w+=1;try{const t=await b.get($,{params:q(i)});l.style.display="none";const r=t.data;if(r.totalHits<=L*w)throw c.style.display="none",d.show({message:"We're sorry, but you've reached the end of search results.",theme:"dark",backgroundColor:"#EF4040",titleColor:"white",position:"topRight"});const a=r.hits.reduce((e,{webformatURL:s,largeImageURL:n,tags:y,likes:u,views:m,comments:g,downloads:h})=>e+`<li class="gallery-item">
          <a class="gallery-link" href="${n}">
           <img class="gallery-image"
           src="${s}"
           alt="${y}"
           />
          </a>          
          <div class="description">
          <p>Likes:<span>${u}</span></p>
          <p>Views:<span>${m}</span></p>
          <p>Comments:<span>${g}</span></p>
          <p>Downloads:<span>${h}</span></p>
          </div> 
        </li>`,"");p.insertAdjacentHTML("beforeend",a),k(),o.refresh()}catch(t){l.style.display="none",d.error({message:t.message,color:"red",position:"topRight"}),console.error("Error fetching more data:",t)}});const k=()=>{const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})},q=o=>new URLSearchParams({key:"41544078-5d11fd93221b0dd23a16f477d",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:w,per_page:L});
//# sourceMappingURL=commonHelpers.js.map
