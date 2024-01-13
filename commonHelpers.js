import{a as w,s as S,i as d}from"./assets/vendor-6b270e19.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const P=document.querySelector(".search-form"),f=document.querySelector(".search-input"),c=document.querySelector(".gallery"),i=document.querySelector(".loader");i.style.display="none";let y=1;const b=40,l=document.querySelector(".load-more");l.style.display="none";let p="";w.defaults.baseURL="https://pixabay.com";const L="/api/";let v=new S("ul.gallery a",{captionDelay:250,captionsData:"alt"});P.addEventListener("submit",async r=>{if(r.preventDefault(),p=f.value.trim(),c.innerHTML="",f.value="",p!==""){i.style.display="block",f.value="",y=1;try{const s=await w.get(L,{params:$(p)});i.style.display="none";const o=s.data;if(o.hits.length===0)throw d.show({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",backgroundColor:"#EF4040",titleColor:"white",position:"topRight"});const a=o.hits.reduce((e,{webformatURL:t,largeImageURL:n,tags:u,likes:m,views:g,comments:h,downloads:q})=>e+`<li class="gallery-item">
          <a class="gallery-link" href="${n}">
           <img class="gallery-image"
           src="${t}"
           alt="${u}"
           />
          </a>          
          <div class="description">
          <p>Likes:<span>${m}</span></p>
          <p>Views:<span>${g}</span></p>
          <p>Comments:<span>${h}</span></p>
          <p>Downloads:<span>${q}</span></p>
          </div> 
        </li>`,"");c.innerHTML=a,c.insertAdjacentHTML("beforeend",a),o.hits.length>=b&&(l.style.display="block"),v.refresh()}catch(s){i.style.display="none",d.error({message:s.message||"Error fetching data",color:"red",position:"topRight"}),l.style.display="none"}}});l.addEventListener("click",async()=>{y+=1;try{const r=await w.get(L,{params:$(p)});i.style.display="none";const s=r.data;if(s.totalHits<=b*y)throw l.style.display="none",d.show({message:"We're sorry, but you've reached the end of search results.",theme:"dark",backgroundColor:"#EF4040",titleColor:"white",position:"topRight"});const o=s.hits.reduce((a,{webformatURL:e,largeImageURL:t,tags:n,likes:u,views:m,comments:g,downloads:h})=>a+`<li class="gallery-item">
          <a class="gallery-link" href="${t}">
           <img class="gallery-image"
           src="${e}"
           alt="${n}"
           />
          </a>          
          <div class="description">
          <p>Likes:<span>${u}</span></p>
          <p>Views:<span>${m}</span></p>
          <p>Comments:<span>${g}</span></p>
          <p>Downloads:<span>${h}</span></p>
          </div> 
        </li>`,"");c.insertAdjacentHTML("beforeend",o),k(),v.refresh()}catch(r){i.style.display="none",d.error({message:r.message||"Error fetching data",color:"red",position:"topRight"})}});const k=()=>{const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})},$=r=>new URLSearchParams({key:"41544078-5d11fd93221b0dd23a16f477d",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:y,per_page:b});
//# sourceMappingURL=commonHelpers.js.map
