import './css/styles.css';
import ApiServices from './js/components/apiService'
import { refs } from './js/components/refs'



const apiServices = new ApiServices();

let searhQuery = '';

refs.searchForm.addEventListener('submit', onSearch)
refs.loadMoreBtn.addEventListener('click', onLoadMore)

function onSearch(event) {
    event.preventDefault();

    apiServices.query = event.currentTarget.elements.query.value;
    apiServices.resetPage();

    apiServices.fetchImages();
}
 
function onLoadMore() {
    apiServices.fetchImages(searhQuery)
}



      
