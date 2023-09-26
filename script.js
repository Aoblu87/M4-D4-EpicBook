

let inputSearch = document.querySelector('#inputSearch')
let cardRow = document.querySelector('#cardRow')
let addItems = document.querySelectorAll('.cartButton')
let cartCount = document.querySelectorAll('.badge')
let booksResult =[]
let renderedResult
let books

// funzione al click del carrello che aggiunge la quantita sul carrello principale
console.log(addItems)
function addToCart (button){
    
    let count=0

    button.addEventListener('click', event =>{
        let cartList = document.querySelector('#cartList')

        const idBook = button.getAttribute('data-asin')
        
        const bookSelected = booksResult.find( book => book.asin === idBook)

        if(idBook === bookSelected.asin)

        cartList.innerHTML= ''

        

        const totalCardCount = function totalCard () {
            count++
            console.log(count)
            cartCount =  document.querySelectorAll('.badge')
        for (const cart of cartCount) {
            cart.innerHTML = count



        }
    }

    totalCardCount()
        
  
        
         cartList.innerHTML +=   /*html */`
                 <li class="list-group-item d-flex justify-content-between align-items-center border border-0">
                    <div class="card-book card mb-3" style="max-width: 540px;">
                        <div class="row row-cols-3 g-0">
                
                            <div class="col-md-2">
                                <img src="${bookSelected.img}" class="product-img img-fluid rounded-start" alt="">
                             </div>
                             <div class="col card-body d-flex flex-column justify-content-center align-items-end p-0">
                                 <h5 class="product-title card-title fs-6 m-0">${bookSelected.title}</h5>
                
                                 <p class="product-price card-text">${bookSelected.price}</p>
                             </div>
                
                             <div class="col d-flex align-items-center justify-content-center">
                                 <button class="btn btn-outline-secondary p-0" type="button"><i class="bi bi-dash-lg"></i></button> 
                                 <span class="badge text-bg-light bg-transparent">${count}</span>
                                 <button class="btn btn-outline-secondary p-0" type="button"><i class="bi bi-plus-lg"></i></button>
                             </div>
                         </div>
                     </div>
                 </li>        
                 `


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
                                    <div class= "cart-overlay bg-light d-flex justify-content-evenly">
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
            cartCount = document.querySelectorAll('.badge')

            addItems.forEach(addToCart)

        })
        .catch(error => console.log('error', error));
}


getBooks()



// function addToCart(title, price, asin, img) {
//     const book = document.querySelector("#card-book_" + asin)
//     let cartList = document.querySelector('#cartList')
//     cartCount = document.querySelectorAll('.badge')

//     let count = 0
//     addItems.forEach(buttons => {

//         let count = 0
//         let totalPrice = 0
//         buttons.addEventListener('click', () => {

//             for (const buttonCart of buttons) {
                
            
//                 count++
//                 buttonCart.innerHTML = count
            
//             }
                





           
//         }


//         )
//     })



//     cartList.innerHTML += /*html */`
//                 <li class="list-group-item d-flex justify-content-between align-items-center border border-0">
//                     <div class="card-book card mb-3" style="max-width: 540px;">
//                         <div class="row row-cols-3 g-0">
                
//                             <div class="col-md-2">
//                                 <img src="${img}" class="product-img img-fluid rounded-start" alt="">
//                             </div>
//                             <div class="col card-body d-flex flex-column justify-content-center align-items-end p-0">
//                                 <h5 class="product-title card-title fs-6 m-0">${title}</h5>
                
//                                 <p class="product-price card-text">${price}</p>
//                             </div>
                
//                             <div class="col d-flex align-items-center justify-content-center">
//                                 <button class="btn btn-outline-secondary p-0" type="button"><i class="bi bi-dash-lg"></i></button> 
//                                 <span class="badge text-bg-light bg-transparent">${count}</span>
//                                 <button class="btn btn-outline-secondary p-0" type="button"><i class="bi bi-plus-lg"></i></button>
//                             </div>
//                         </div>
//                     </div>
//                 </li>        
//                 `




//     const totale = document.querySelector("h3 span")
//     totale.innerText = (Number(totale.innerText) + Number(price)).toFixed(2)
// }























