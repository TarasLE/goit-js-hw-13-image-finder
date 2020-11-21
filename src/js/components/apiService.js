export default class ApiService {
    constructor() {
        this.searhQuery = '';
        this.page = 1;
    }

    fetchImages(searhQuery) {
        const option = {
        headers: {}
    }

    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searhQuery}&page=${this.page}&per_page=12&key=19125806-9a56a48a4edb0ea3b4b1e3bdb`
  
        fetch(url, option).then(response => response.json()).then(data => { this.page += 1; });
    }

    get query(){
    return this.searhQuery;
    }
    
    set query(newSerchQuery) {
        this.searhQuery = newSerchQuery;
    }
}

