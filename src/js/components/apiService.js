export default class ApiService {
    constructor() {
        this.searhQuery = '';
    }

    fetchImages(searhQuery) {
        const option = {
        headers: {}
    }

    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searhQuery}&page=1&per_page=12&key=19125806-9a56a48a4edb0ea3b4b1e3bdb`
  
    fetch(url, option).then(response => response.json()).then(console.log())
    }

    get searhQuery(){
    return this.searhQuery;
    }
    
    set searhQuery(newSerchQuery) {
        this.searhQuery = newSerchQuery;
    }
}

