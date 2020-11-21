import './css/styles.css';

const option = {
    headers: {
        // Authorization: '19125806-9a56a48a4edb0ea3b4b1e3bdb'
        }
    }

const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=19125806-9a56a48a4edb0ea3b4b1e3bdb`
    // const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=19125806-9a56a48a4edb0ea3b4b1e3bdb/${searchQuery}`
    fetch(url, option).then(response => response.json()).then(console.log())
      
