const params = new URLSearchParams(window.location.search)
const id = params.get('id')


fetch(`https://striveschool-api.herokuapp.com/books/${id}`)
    .then(r => r.json())
    .then(displayBook)


const bookCard = document.querySelector("#cardBook")

function displayBook(data) {
    console.log(data.title)

    const bookDetails = data.map(result => {
        return /*html*/`
        <div class="col d-flex">
        <img src="${result.img}" class="img-fluid" alt="...">
        </div>
        <div class="col">
        <div class="row">
            <div class="col d-flex ">
                <h5 class="">${result.title}</h5>
                <h6 class="">${result.price}</h6>
        
            </div>
            <div class="col">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">1</button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <select class="form-select" size="3" aria-label="Size 3 select example">
                        <option selected>1</option>
                        <option value="1">2</option>
                        <option value="2">3</option>
                        <option value="3">4</option>
                    </select>
                </ul>
                <button type="button" class="btn btn-success">Aggiungi al carrello</button>
        
        
            </div>
        </div>
        </div>
                        
                        
                        
        `


        console.log(bookDetails)

    })

    bookCard.innerHTML += bookDetails.join('')

}

