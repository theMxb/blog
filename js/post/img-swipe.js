import PhotoSwipeLightbox from"//cdn.staticfile.net/photoswipe/5.4.2/photoswipe-lightbox.esm.min.js";const lightbox=new PhotoSwipeLightbox({pswpModule:()=>import("//cdn.staticfile.net/photoswipe/5.4.2/photoswipe.esm.min.js"),wheelToZoom:!0}),groups=[],imgClick=t=>{const e=Number.parseInt(t.target.getAttribute("data-swipe-i")),o=t.target.getAttribute("data-swipe-gi");lightbox.loadAndOpen(e,groups[o])};function imgToData(t,e,o){return new Promise(((i,r)=>{t.setAttribute("data-swipe-gi",e),t.setAttribute("data-swipe-i",o);const s={src:t.getAttribute("src"),alt:t.getAttribute("alt")},n=()=>{groups[e][o]={...s,width:t.naturalWidth,height:t.naturalHeight},i(),t.onclick=imgClick};t.complete?n():t.onload=n,t.onerror=()=>{r()}}))}const promiseds=[];if(document.querySelectorAll(".img-swipe-single").forEach((t=>{const e=groups.length;groups.push([{}]),promiseds.push(imgToData(t,e,0))})),document.querySelectorAll(".img-swipe-group").forEach((t=>{const e=groups.length;groups.push([]),t.querySelectorAll("img").forEach(((t,o)=>{groups[e].push({}),promiseds.push(imgToData(t,e,o))}))})),0===promiseds.length)throw new Error("empty img");Promise.allSettled(promiseds).then((()=>{lightbox.on("uiRegister",(()=>{lightbox.pswp.ui.registerElement({name:"custom-caption",className:"lnote-lightbox-caption",order:9,isButton:!1,appendTo:"root",html:null,onInit(t,e){e.on("change",(()=>{null!=e.currSlide.data.alt&&(t.innerHTML=`<div>${e.currSlide.data.alt}</div>`)}))}})})),lightbox.init()}));