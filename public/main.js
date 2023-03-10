const bronzerContainer = document.querySelector("#bronzer-container")
const reviewContainer = document.querySelector("#review-container")

const bronzerbtn = document.querySelector("#first") 






const baseURL= `http://localhost:1001/api/bronzerproducts`


const bronzerCallback = ({ data : bronzerproducts }) => displayBronzer(bronzerproducts)


const getAllBronzers = () => {

    axios.get(baseURL).then(bronzerCallback).catch(err => console.log(err))

}
const deleteBronzer = id => {
    axios.delete(`${baseURL}/${id}`).then(bronzerCallback).catch(err=>console.log(err))
    alert("product deleted")
}
const reviewProduct = body => {
    axios.post(baseURL,body).then(bronzerCallback).catch(err=>console.log(err))
    alert("Review added")
    console.log(`The review of ${body} is ${bok(body)}`)

}





const review  = () => {
    
    const bronzerCard = document.createElement('div')
    bronzerCard.classList.add("review-card")
    bronzerCard.innerHTML = `    
    <input type ="text" id="review" placeholder = "add a review here" >
    <button id = "submit">Submit</button>`
    
    bronzerContainer.appendChild(bronzerCard)
   
    const submitbtn = document.querySelector("#submit")
    submitbtn.addEventListener("click",submitReview)

 }


 const submitReview = (e) =>{
    e.preventDefault()
    let  review = document.querySelector("#review")
    
    let bodyObj = {
        review : review.value
    
    }
    reviewProduct(bodyObj)
    
    review.value = ''

    
 } 
 const bok = (a) => {
    const reviewCard = document.createElement("div")
    reviewCard.classList.add("review-cart")
    reviewCard.innerHTML= `<p class="review">${a.review}</p>
    `
    reviewContainer.appendChild(reviewCard)
    

 }





const createBronzerCard = (bronzer) => {
    const bronzerCard = document.createElement('div')
    bronzerCard.classList.add('bronzer-card')

    bronzerCard.innerHTML = `<img src = ${bronzer.img} class = 'bronzer-cover-image'/>
    <p class="name">${bronzer.name}</p>
    <p class="brand">${bronzer.brand}</p>
    <p class="color">${bronzer.color}</p>



   
    <button onclick="deleteBronzer(${bronzer.id})">Delete the Product</button> `
    bronzerContainer.appendChild(bronzerCard) 

}


const displayBronzer = (arr) => {
    bronzerContainer.innerHTML = ``
    for (let i = 0; i < arr.length ; i++){
        createBronzerCard(arr[i])
        review(arr[i])
        
      
        
    }
}




bronzerbtn.addEventListener("click",getAllBronzers)





