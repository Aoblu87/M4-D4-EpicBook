const inputSearch = document.querySelector('#inputSearch')
const cardRow =document.querySelector('#cardRow')

function getBooks(url) {

    fetch('https://striveschool-api.herokuapp.com/books/')
        .then(response => response.json())
        .then((result) => {
           
            


            booksResult = result


            const renderedResult = booksResult.map(result => {
                return /*html*/`
            <div class="col">
                <div class="card h-100">
                    <img src="${result.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${result.title}</h5>
                        <p class="card-text">${result.price}€</p>
                        <p class="card-text">Category: ${result.category}</p>
                        <button type="button" class="btn btn-success"><i class="bi bi-cart2"></i>Aggiungi al carrrello</button>
                    </div>
                </div>
            </div>

   
                  
                  `


            })
            cardRow.innerHTML += renderedResult.join('')
            
        })
        .catch(error => console.log('error', error));
}
getBooks()

        
            


