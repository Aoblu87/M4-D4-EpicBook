const inputSearch = document.querySelector('#inputSearch')
const cardRow =document.querySelector('#cardRow')
let cardCart = document.querySelector('#cardCartButton')
console.log(cardCart)

let booksResult

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

                      <button type="button" id="cardCartButton" class="btn btn-transparent">   <i class="bi bi-cart2 fs-3"></i> </button>

                    </div>
                </div>
            </div>

   
                  
                  `


            })
            cardRow.innerHTML += renderedResult.join('')
            cardCart = document.querySelector('#cardCartButton')
        })
        .catch(error => console.log('error', error));
}
getBooks()




// for (const button of cardCart) {

//     button.addEventListener('click',(event)=>{

//        console.log('cucuucuc')
//     })
    
// }


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

        
            


