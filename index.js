import"./assets/styles-JE8YjOlG.js";import{a as s}from"./assets/vendor-N5iQpiFS.js";const c={categoryList:document.querySelector(".categories")},a=()=>{const t=document.querySelector(".categories__btn");t&&t.classList.add("categories__btn--active")},r="https://dummyjson.com/",n={CATEGORIES:"products/category-list",PRODUCTS:"products"};s.defaults.baseURL=r;const i=async()=>{const{data:t}=await s(`${n.CATEGORIES}`);return t},g=t=>{const e=t.map(o=>`<li class="categories__item">
   <button class="categories__btn" type="button">${o}</button>
 </li>`).join("");c.categoryList.innerHTML=e},l=async()=>{try{const t=await i();g(["All",...t]),a()}catch(t){console.log(t)}};l();
//# sourceMappingURL=index.js.map
