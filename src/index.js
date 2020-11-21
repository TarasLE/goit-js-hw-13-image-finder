import './css/styles.css';
import ApiServices from './js/components/apiService'

const refs = {
    searchForm: document.querySelector('.search-form'),
    imageContainer: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
}

const apiServices = new ApiServices();

let searhQuery = '';

refs.searchForm.addEventListener('submit', onSearch)
refs.loadMoreBtn.addEventListener('click', onLoadMore)

function onSearch(event) {
    event.preventDefault();

    apiServices.query = event.currentTarget.elements.query.value;

    apiServices.fetchImages(searhQuery);
}
 
function onLoadMore() {
    apiServices.fetchImages(searhQuery)
}



      
