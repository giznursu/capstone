const bronzerContainer = document.querySelector("#bronzer-container")
const bronzerbtn = document.querySelector("#first") 





const baseURL = `http://localhost:1001/api/bronzerproducts`

const bronzerCallback = ({ data : bronzerproducts}) => displayBronzer(bronzerproducts)


const getAllBronzers = () => {

    axios.get(baseURL).then(bronzerCallback).catch(err => console.log(err))
}
const deleteBronzer = id => {
    axios.delete(`${baseURL}/${id}`).then(bronzerCallback).catch(err=>console.log(err))
    alert("product deleted")
}
const reviewProduct = (review,id) => {
    axios.put(`${baseURL}/${id}`,{review}).then(bronzerCallback).catch(err=>console.log(err))
}

const createBronzerCard = (bronzer) => {
    const bronzerCard = document.createElement('div')
    bronzerCard.classList.add('bronzer-card')

    bronzerCard.innerHTML = `<img src = ${bronzer.img} class = 'bronzer-cover-image'/>
    <p class="name">${bronzer.name}</p>
    <p class="brand">${bronzer.brand}</p>
    <p class="color">${bronzer.color}</p>
    
    <div class="reviews-container">
        <input type='text' placeholder = 'Add a Review Here!' >
        <button onclick=reviewProduct(${bronzer.review},${bronzer.id})>Submit</button>
        
    <button onclick="deleteBronzer(${bronzer.id})">Delete the Product</button> `
    bronzerContainer.appendChild(bronzerCard)

}

const displayBronzer = (arr) => {
    bronzerContainer.innerHTML = ``
    for (let i = 0; i < arr.length ; i++){
        createBronzerCard(arr[i])

    }

}

bronzerbtn.addEventListener("click",getAllBronzers)

