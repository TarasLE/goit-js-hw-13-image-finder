import './css/styles.css';
import ApiServices from './js/components/apiService'
import { refs } from './js/components/refs'
import imageCardTpl from './templates/imageCardTpl.hbs'



const apiServices = new ApiServices();

// let searhQuery = '';

refs.searchForm.addEventListener('submit', onSearch)
refs.loadMoreBtn.addEventListener('click', onLoadMore)

function onSearch(event) {
    event.preventDefault();

    clearImageContainer()
    apiServices.query = event.currentTarget.elements.query.value;
    apiServices.resetPage();

    apiServices.fetchImages().then(appendImagesMarkUp);
}
 
function onLoadMore() {
    apiServices.fetchImages().then(appendImagesMarkUp);
    // window.scrollTo({
    // bottom: 100,

    // behavior: 'smooth'
// });
    // window.scrollTo({ top: 400 * apiServices.page, behaviour: "smooth" })
    const scrollSize = window.innerHeight * apiServices.page;
    window.scrollTo({ top: scrollSize , behaviour: "smooth" })
    // console.log(636 * apiServices.page);
    // console.log(apiServices.page);
    console.log(window.innerHeight);
    
}

function appendImagesMarkUp(images) {
    refs.imageContainer.insertAdjacentHTML('beforeend', imageCardTpl(images))
}

function clearImageContainer() {
    refs.imageContainer.innerHTML = '';
}

      
