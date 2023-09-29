// INPUT DI RICERCA
let inputSearch = document.querySelector('#inputSearch')
// PUNTO DOVE MOSTRARE TUTTE LE CARD
let cardRow = document.querySelector('#cardRow')
// BOTTONE AGGIUNGI AL CARRELLO SULLA CARD
let addItems = document.querySelectorAll('.cartButton')
// PALLINO SUL CARRELLO CHE FA IL CONTAGGIO TOTALE DEGLI ARTICLI NEL CARRELLO
let cartCount = document.querySelector('#cart-count')
// TOTALE ARTICOLO 
let totItem = document.querySelector('#tot-item')
// CARRELLO
const cartList = document.querySelector('#cartList')
// OGGETTO DI LIBRI AGGIUNTI AL CARRELLO
let bookInTheCart = []
let addQuantity = []

// TASTO CANCELLA ARTICOLO
let cancelItem = document.querySelector('#cancel-item')

// TOTALE PREZZO CARRELLO
const totalPrice = document.querySelector('#totalPrice')



let booksResult = []
let count = 0
let countItem = 0
let tot = 0
let allPrice = []

// CANCELLA ARTICOLO DA CARRELLO
// function cancelItem(){


// }



// FUNZIONE CHE FA APPARIRE CONTEGGIO TOTALE SU CARRELLO MAIN

function showBadgeTotal(count) {

    if (count > 0) {
        cartCount.classList.add('visible')
    }

}

// MOSTRO SOLO UN LIBRO E AUMENTO LA QUANTITA' NEL CONTATORE SE LO STESSO
function countBook(books) {
    for (const button of addItems) {

        const idBook = button.getAttribute('data-asin')

        if (books.find(book => book.asin === idBook)) {

            cartList.innerHTML = ''
            countItem++

        } else {
            console.log('ciao')

        }
    }

}





// MOSTRO TUTTE LE CARDS
function showAllCards(books) {

    const renderedResult = books.map(result => {
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

}




// ------------------------------------------------------------------------

// MOSTRA LIBRO NEL CARRELLO

function showListCart(book) {
    let itemList =   /*html */`
    <li class="list-item list-group-item d-flex justify-content-between align-items-center border border-bottom-1 p-1" data-id="${book.asin}">
        <div class="card-book card border border-0">
            <div class="row row-cols-3 g-0 align-items-center">
    
                <div class="col-md-3">
                    <img src="${book.img}" class="product-img img-fluid " alt="">
                </div>
                <div class="col card-body d-flex flex-column justify-content-center align-items-end p-0">
                     <h5 class="product-title card-title ml-1">${book.title}</h5>
    
                     <p class="product-price card-text">${book.price} €</p>
                </div>
                <div class="col d-flex flex-column align-items-end pb-5">
                    <div id="cancel-item" class= "col d-flex">
                        <i class="bi bi-x-circle"></i>
                    </div>
                    <div class="col-md-7 d-flex align-items-center justify-content-enter pt-3">
                        <button class="btn btn-outline-secondary p-0" type="button"><i class="bi bi-dash-lg"></i></button> 
                        <span id="tot-item" class="badge text-bg-light bg-transparent">${countItem}</span>
                        <button class="btn btn-outline-secondary p-0" type="button"><i class="bi bi-plus-lg"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </li>        
     `

    cartList.innerHTML += itemList

}

// --------------------------------------------------------------------
// AddEventListeners SUI BOTTONI PER AGGIUNGERE LIBRI
function addToCart(button) {

    button.addEventListener('click', event => {

        // conteggio del numeri di articoli totali nel carrello
        count++
        cartCount.innerHTML = count
        
        
        
        // Recupero libro dal bottone
        const idBook = button.getAttribute('data-asin')
        const bookSelected = booksResult.find(book => book.asin === idBook)
        
        console.log(bookInTheCart.title)

        if (bookInTheCart.quantity === 1) {
            
            bookInTheCart.quantity++

        } else { // creo array di tutti i libri selezionati
            bookInTheCart.push({
                ...bookSelected,
                quantity: 1
            })
        }
        // creo array con tutti i prezzi selezionati
        allPrice.push(bookSelected.price)
        tot = allPrice.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0);
        // mostro risultati nel dom
        totalPrice.innerHTML = `${tot}€`


        console.log(tot)


        // Mostro libro selezionato nel carrello
        showListCart(bookSelected)

        // Mostro conteggio del badge carrello nel main
        showBadgeTotal(count)









        const list = document.querySelector('.list-item')
        const idList = list.getAttribute('data-id')
        // console.log(idList)


        // for (const  of object) {

        // }
        // if (idList !== idBook) {
        //     countItem = 1
        // } else {
        //     countItem++
        //     cartList.innerHTML = itemList



        // }

        // cartList.innerHTML= ''
    })



}




// funzione di chiamata di tutti i libri

function getBooks() {

    fetch('https://striveschool-api.herokuapp.com/books/')
        .then(response => response.json())
        .then((result) => {

            booksResult = result

            // mostro le card
            showAllCards(booksResult)

            // Varibili per identificare nodi
            inputSearch = document.querySelector('#inputSearch')
            cardRow = document.querySelector('#cardRow')
            addItems = document.querySelectorAll('.cartButton')
            cancelItem = document.querySelector('#cancel-item')


            // Per ogni bottone carrello aggiungo Add EventListeners
            addItems.forEach(addToCart)

        })
        .catch(error => console.log('error', error));
}

getBooks()















































