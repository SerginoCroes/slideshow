(()=>{const e=document.querySelector(".slider"),t=document.querySelector(".left"),o=document.querySelector(".right"),c=document.querySelector(".dotcontainer"),l=e.childElementCount;let n,r=0;t.addEventListener("click",(()=>{r>0&&(r-=1,i(),d())})),o.addEventListener("click",(()=>{r<l-1&&(r+=1,i(),d())}));for(let e=0;e<l;e++){const t=document.createElement("div");t.classList.add("dot"),t.addEventListener("click",(t=>{r=e,i(),d()})),c.appendChild(t)}function d(){e.style.transform=`translate(${800*-r}px, 0px)`,c.childNodes.forEach((e=>{e.style.transform="scale(1)",e.style.margin="6px",e.style.backgroundColor="rgba(200, 200, 200, 0.8"})),c.childNodes[r].style.transform="scale(1.5)",c.childNodes[r].style.margin="6px 12px",c.childNodes[r].style.backgroundColor="rgba(255, 255, 255, 1",t.style.opacity=r<1?"0":"1",o.style.opacity=r>=l-1?"0":"1"}function s(){n=setTimeout((()=>{r<l-1?r+=1:r=0,d(),s()}),5e3)}function i(){clearTimeout(n),s()}d(),s()})();