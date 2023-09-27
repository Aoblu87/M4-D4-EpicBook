

let inputSearch = document.querySelector('#inputSearch')
let cardRow = document.querySelector('#cardRow')
let addItems = document.querySelectorAll('.cartButton')
let cartCount = document.querySelector('#cart-count')
let totItem = document.querySelector('#tot-item')



let booksResult =[]
let renderedResult
let books
let count=0
let countItem =0







// funzione al click del carrello che aggiunge la quantita sul carrello principale
function addToCart (button){
    
    

    button.addEventListener('click', event =>{
        let cartList = document.querySelector('#cartList')

        const idBook = button.getAttribute('data-asin')
       
        
        const bookSelected = booksResult.find( book => book.asin === idBook)

     count++
     cartCount.innerHTML = count
     console.log(count)

        

     let itemList =   /*html */`
            <li class="list-item list-group-item d-flex justify-content-between align-items-center border border-bottom-1 p-1" data-id="${bookSelected.asin}">
                <div class="card-book card border border-0">
                    <div class="row row-cols-3 g-0 align-items-center">
            
                        <div class="col-md-3">
                            <img src="${bookSelected.img}" class="product-img img-fluid " alt="">
                        </div>
                        <div class="col card-body d-flex flex-column justify-content-center align-items-end p-0">
                             <h5 class="product-title card-title ml-1">${bookSelected.title}</h5>
            
                             <p class="product-price card-text">${bookSelected.price} €</p>
                        </div>
            
                        <div class="col-md-3 d-flex align-items-center justify-content-center">
                             <button class="btn btn-outline-secondary p-0" type="button"><i class="bi bi-dash-lg"></i></button> 
                             <span id="tot-item" class="badge text-bg-light bg-transparent">${countItem}</span>
                             <button class="btn btn-outline-secondary p-0" type="button"><i class="bi bi-plus-lg"></i></button>
                        </div>
                    </div>
                </div>
            </li>        
             `

             cartList.innerHTML += itemList

             const list = document.querySelectorAll('.list-item') 
            const idList = list.getAttribute('data-id')
             console.log(idList)


    // for (const  of object) {
        
    // }
             if( idList !== idBook ){
                countItem = 1
            }else{
                countItem++
                cartList.innerHTML = itemList
               
   
            
        }
    
            // cartList.innerHTML= ''

  
    

    
  
        


    })


    
}








// funzione di chiamata di tutti i libri

function getBooks() {

    fetch('https://striveschool-api.herokuapp.com/books/')
        .then(response => response.json())
        .then((result) => {




            booksResult = result

            renderedResult = booksResult.map(result => {
                return /*html*/`
                            <div class="col-md-3">
                                <div class="card-book_ card h-100 border border-0">
                                <a href="book.html?id=${result.asin}">
                                <img src="${result.img}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title text-center"> <a href="book.html?id=${result.asin}" class="link-underline link-underline-opacity-0 link-dark">
                                        ${result.title}</a></h5>
                                        <p class="card-text text-center">${result.price}€</p>
                        
                                    </div>
                                    <div class= "cart-overlay bg-light d-flex justify-content-evenly align-items-center">
                                        <button type="button" class="btn btn-transparent"> <i class="bi bi-suit-heart fs-3"></i></button>
                                        <button type="button" class="cartButton btn btn-transparent" data-asin='${result.asin}' >  <i class="bi bi-cart2 fs-3"></i> </button>
                                    </div>
                                </div>
                            </div>
                        
                        
                        
                        `


            }).join('')
            cardRow.innerHTML += renderedResult
            inputSearch = document.querySelector('#inputSearch')
            cardRow = document.querySelector('#cardRow')
            addItems = document.querySelectorAll('.cartButton')

            addItems.forEach(addToCart)

            search(result.title)

        })
        .catch(error => console.log('error', error));
}


getBooks()


// funzione ricerca

// function search(title){

//     if(title === inputSearch)

//     let showCard = 





// }






















