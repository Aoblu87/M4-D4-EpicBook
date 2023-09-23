

const inputSearch = document.querySelector('#inputSearch')
const cardRow =document.querySelector('#cardRow')
let cardCart = document.querySelectorAll('.cartButton')
let cartCount = document.querySelectorAll('.badge')
let booksResult

// funzione al click del carrello che aggiunge la quantita sul carrello principale
    
cardCart.forEach(button =>{
    let count=0

    button.addEventListener('click', event =>{

        count++
        console.log(count)
        cartCount =  document.querySelectorAll('.badge')
        for (const cart of cartCount) {
            cart.innerHTML = count
            
            // const cartItems = booksResult.map( result =>{ return /*html */`
            //                 <li class="list-group-item d-flex justify-content-between align-items-center border border-0 border-bottom">
            //                     <div class="card mb-3" style="max-width: 540px;">
            //                         <div class="row g-0">
            //                             <div class="col-md-4">
            //                                 <img src="${result.img}" class="img-fluid rounded-start" alt="...">
            //                             </div>
            //                             <div class="col-md-8">
            //                                 <div class="card-body">
            //                                     <h5 class="card-title">Card title</h5>
            //                                     <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     </div>  
            //                     <span class="badge bg-primary rounded-pill"></span>
            //                 </li>
            
            
            // `})
            // const cartList = document.querySelector('#cartList')
            // cartList.innerHTML += cartItems
            
        }
    })
})



// funzione di chiamata di tutti i libri

function getBooks() {
    
    fetch('https://striveschool-api.herokuapp.com/books/')
    .then(response => response.json())
    .then((result) => {
        
        
        
        
        booksResult = result
        
        
        const renderedResult = booksResult.map(result => {
            return /*html*/`
            <div class="col">
            <div class="card h-100 border border-0 position-relative">
            
            <img src="${result.img}" class="card-img-top" alt="...">
            <div class="card-body">
                        <h5 class="card-title text-center">${result.title}</h5>
                        <p class="card-text text-center">${result.price}€</p>
                        
                        </div>
                        <div class= "cart-overlay bg-light d-flex justify-content-evenly">
                        <button type="button" class="btn btn-transparent"> <i class="bi bi-suit-heart fs-3"></i></button>
                        
                        <button type="button" class="cartButton btn btn-transparent">   <i class="bi bi-cart2 fs-3"></i> </button>
                        
                        </div>
                        </div>
                        </div>
                        
                        
                        
                        `
                        
                        
                    })
                    cardRow.innerHTML += renderedResult.join('')
                    cardCart = document.querySelectorAll('.cartButton')
                    cartCount = document.querySelectorAll('.badge')

                })
        .catch(error => console.log('error', error));
    }
    getBooks()
    
    


   
    

    


// function search(){
    
//     cardRow.innerHTML= ''
//     booksResult.includes(()=>{
    
//     inputSearch.value === result.title
// })


    
// const renderedResult = booksResult.map(result => {
//     return /*html*/`
// <div class="col">
//     <div class="card h-100 border border-0 position-relative">
        
//         <img src="${result.img}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title text-center">${result.title}</h5>
//             <p class="card-text text-center">${result.price}€</p>
            
//         </div>
//         <div class= "cart-overlay bg-light d-flex justify-content-evenly">
//         <button type="button" class="btn btn-transparent"> <i class="bi bi-suit-heart fs-3"></i></button>

//           <button type="button" class="btn btn-transparent">   <i class="bi bi-cart2 fs-3"></i> </button>

//         </div>
//     </div>
// </div>


      
//       `


// })
// cardRow.innerHTML = renderedResult.join('')



// }

        
            


