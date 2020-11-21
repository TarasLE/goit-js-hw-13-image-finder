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
 
async function onLoadMore() {
    const scrollSize = window.innerHeight * apiServices.page -window.innerHeight;
    console.log(`scrollSize до fetch ${scrollSize}`);
    console.log(`apiServices.page до fetch ${ apiServices.page }`);
    await apiServices.fetchImages().then(appendImagesMarkUp)
    console.log(`scrollSize после fetch ${ scrollSize }`);
    console.log(`apiServices.page после fetch ${ apiServices.page }`); 
        // .then(setTimeout(() => {
        //     window.scrollTo({ top: apiServices.page*window.innerHeight, behaviour: "smooth" })
        // }, 500))
    
    
    setTimeout(() => { window.scrollTo({ top: scrollSize, behaviour: "smooth" }) }, 500);
   
    // console.log(636 * apiServices.page);
    // console.log(apiServices.page);
    // console.log(window.innerHeight);
    // console.log(scrollSize);
    
}

function appendImagesMarkUp(images) {
    refs.imageContainer.insertAdjacentHTML('beforeend', imageCardTpl(images))
}

function clearImageContainer() {
    refs.imageContainer.innerHTML = '';
}

      
