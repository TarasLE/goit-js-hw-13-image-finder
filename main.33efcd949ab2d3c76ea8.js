(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{OPH6:function(e,t,r){},QfWi:function(e,t,r){"use strict";r.r(t);r("OPH6"),r("JBxO"),r("FdtR");function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){this.searhQuery=""}var t,r,a;return e.prototype.fetchImages=function(e){var t="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q="+this.searhQuery+"&page=1&per_page=12&key=19125806-9a56a48a4edb0ea3b4b1e3bdb";fetch(t,{headers:{}}).then((function(e){return e.json()})).then(console.log())},t=e,(r=[{key:"searhQuery",get:function(){return this.searhQuery},set:function(e){this.searhQuery=e}}])&&n(t.prototype,r),a&&n(t,a),e}(),o={searchForm:document.querySelector(".search-form"),imageContainer:document.querySelector(".gallery"),loadMoreBtn:document.querySelector('[data-action="load-more"]')},i=new a;o.searchForm.addEventListener("submit",(function(e){e.preventDefault(),i.searhQuery=e.currentTarget.elements.query.value,i.fetchImages("")})),o.loadMoreBtn.addEventListener("click",(function(){i.fetchImages("")}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.33efcd949ab2d3c76ea8.js.map