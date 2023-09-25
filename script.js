

let inputSearch = document.querySelector('#inputSearch')
let cardRow = document.querySelector('#cardRow')
let addItems = document.querySelectorAll('.cartButton')
let cartCount = document.querySelectorAll('.badge')
let booksResult

// funzione al click del carrello che aggiunge la quantita sul carrello principale

// cardCart.forEach(button =>{
//     let count=0

//     button.addEventListener('click', event =>{

//         count++
//         console.log(count)
//         cartCount =  document.querySelectorAll('.badge')
//         for (const cart of cartCount) {
//             cart.innerHTML = count



//         }
//     })
// })

window.onload = function () {
    getBooks()
}

// funzione di chiamata di tutti i libri

function getBooks() {

    fetch('https://striveschool-api.herokuapp.com/books/')
        .then(response => response.json())
        .then((result) => {




            booksResult = result


            const renderedResult = booksResult.map(result => {
                return /*html*/`
                            <div class="col-md-3">
                                <div class="card-book_ card h-100 border border-0">
                                <a href="book.html?id=${result.asin}">
                                <img src="${result.img}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title text-center"> <a href="artist.html?id=${result.asin}">
                                        ${result.title}</h5>
                                        <p class="card-text text-center">${result.price}€</p>
                        
                                    </div>
                                    <div class= "cart-overlay bg-light d-flex justify-content-evenly">
                                        <button type="button" class="btn btn-transparent"> <i class="bi bi-suit-heart fs-3"></i></button>
                                        <button type="button" class="cartButton btn btn-transparent" onclick="addToCart('${result.title}', '${result.price}', '${result.asin}','${result.img}')">  <i class="bi bi-cart2 fs-3"></i> </button>
                                    </div>
                                </div>
                            </div>
                        
                        
                        
                        `


            })
            cardRow.innerHTML += renderedResult.join('')
            inputSearch = document.querySelector('#inputSearch')
            cardRow = document.querySelector('#cardRow')
            addItems = document.querySelectorAll('.cartButton')
            cartCount = document.querySelectorAll('.badge')


        })
        .catch(error => console.log('error', error));
}





function addToCart(title, price, asin, img) {
    const book = document.querySelector("#card-book_" + asin)
    let cartList = document.querySelector('#cartList')
    let count = 0
    addItems.forEach(button => {

        let count = 0
        let totalPrice = 0
        button.addEventListener('click', () => {
            
            if (book)
            cartList.innerHTML =''

            cartCount = document.querySelectorAll('.badge')
            count++
                

            

            cartCount.innerHTML = event
        }


        )
    })









    cartList.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center border border-0">
                <div class="card-book card mb-3" style="max-width: 540px;">
                    <div class="row row-cols-3 g-0">
            
                        <div class="col-md-2">
                            <img src="${img}" class="product-img img-fluid rounded-start" alt="">
                        </div>
                        <div class="col card-body d-flex flex-column justify-content-center align-items-end p-0">
                            <h5 class="product-title card-title fs-6 m-0">${title}</h5>
            
                            <p class="product-price card-text">${price}</p>
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




    const totale = document.querySelector("h3 span")
    totale.innerText = (Number(totale.innerText) + Number(price)).toFixed(2)
}

















