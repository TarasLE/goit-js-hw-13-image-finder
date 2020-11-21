import './css/styles.css';
import ApiServices from './js/components/apiService'
import { refs } from './js/components/refs'
import imageCardTpl from './templates/imageCardTpl.hbs'



const apiServices = new ApiServices();

// let searhQuery = '';
let scrollSize;
refs.searchForm.addEventListener('submit', onSearch)
refs.loadMoreBtn.addEventListener('click', onLoadMore)

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
    console.log(`scrollSize до fetch ${scrollRevers}`);
    console.log(`apiServices.page до fetch ${ apiServices.page }`);
    await apiServices.fetchImages().then(appendImagesMarkUp)
    console.log(`scrollSize после fetch ${ scrollRevers }`);
    console.log(`apiServices.page после fetch ${ apiServices.page }`); 
        // .then(setTimeout(() => {
        //     window.scrollTo({ top: apiServices.page*window.innerHeight, behaviour: "smooth" })
        // }, 500))
    
    window.scrollTo({ top: scrollRevers, behaviour: "smooth" })
    // setTimeout(() => { window.scrollTo({ top: scrollSize, behaviour: "smooth" }) }, 500);
   
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

      
