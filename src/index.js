import './css/styles.css';
import ApiServices from './js/components/apiService'
import { refs } from './js/components/refs'
import imageCardTpl from './templates/imageCardTpl.hbs'
import * as basicLightbox from 'basiclightbox'
import '../node_modules/basiclightbox/dist/basicLightbox.min.css'




// const instance = basicLightbox.create(
// 	document.querySelector('imageCardTpl')
// )

// instance.show()

const apiServices = new ApiServices();

// let searhQuery = '';
let scrollSize;
refs.searchForm.addEventListener('submit', onSearch)
refs.loadMoreBtn.addEventListener('click', onLoadMore)
refs.imageContainer.addEventListener('click', onPictureClick)



async function onSearch(event) {
    event.preventDefault();

    clearImageContainer()
    apiServices.query = event.currentTarget.elements.query.value;
    apiServices.resetPage();

   await apiServices.fetchImages().then(appendImagesMarkUp)
   scrollSize = refs.imageContainer.clientHeight;
}
 
async function onLoadMore() {
    const scrollRevers = scrollSize * (apiServices.page - 1);
    await apiServices.fetchImages().then(appendImagesMarkUp)
    window.scrollTo({ top: scrollRevers, behaviour: "smooth" })
  
}

function appendImagesMarkUp(images) {
    refs.imageContainer.insertAdjacentHTML('beforeend', imageCardTpl(images))
}

function clearImageContainer() {
    refs.imageContainer.innerHTML = '';
}

const instance = basicLightbox.create(`
    <h1>Dynamic Content</h1>
    <p>You can set the content of the lightbox with JS.</p>
`)

function onPictureClick(event) {
 
  if (event.target.nodeName !== "IMG") {
    return
  } else
  
    event.preventDefault();
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
  instance.show()
  }
      
