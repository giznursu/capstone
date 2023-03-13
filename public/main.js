const bronzerContainer = document.querySelector("#bronzer-container")
const concealerContainer = document.querySelector("#concealer-container")
const lipglossContainer = document.querySelector("#lipgloss-container")
const reviewContainer = document.querySelector("#review-container")
const favContainer = document.querySelector("#favorites-container")



const bronzerbtn = document.querySelector("#first") 
const concealerbtn = document.querySelector("#second")
const lipglossbtn = document.querySelector("#third")
const closeBronzer = document.querySelector("#close1")
const closeConcealer = document.querySelector("#close2")
const closeLipgloss = document.querySelector("#close3")
const favbtn = document.querySelector("#fav")



const baseURL= `http://localhost:1001/api/bronzerproducts`
const baseURL1 = `http://localhost:1001/api/concealerproducts`
const baseURL2 = `http://localhost:1001/api/lipglossproducts`
const baseURL3 = `http://localhost:1001/api/reviews`
const baseURL4 =`http://localhost:1001/api/favproducts`


//===================BRONZER====================


const bronzerCallback = ({ data : bronzerproducts }) => displayBronzer(bronzerproducts)
const favBronzerCallback = ({ data : favproducts}) => displayFavBronzer(favproducts)

const getAllBronzers = () => {

    axios.get(baseURL).then(bronzerCallback).catch(err => console.log(err))

}
const deleteBronzer = id => {
    axios.delete(`${baseURL}/${id}`).then(bronzerCallback).catch(err=>console.log(err))
    alert("product deleted")
}
const getFavProducts = id =>{
    axios.get(`${baseURL4}/${id}`).then(favBronzerCallback).catch(errfnc)
}




const imagefnc = (id) => {
    arr = ["Suitable for very light skin tones. But you just glow anyway!","Suitable for very light skin tones.By the way, I can't help but say you are stunning!",
    "Suitable for light to medium skin tones. By the way, everything seems brighter when you are around!","Suitable for medium skin tones.And a little reminder that you are enough! And I have to say that you're inspiring!","Suitable for medium and golden skin tones","Fair with neutral undertones. And don't forget you are perfect just the way you are! ","Light with warm undertones.By the way, I can't help but say you're even better than a unicorn because you're real!","Tan to deep with neutral undertones. By the way, don't forget on a scale from 1 to 10, you're an 11!"]
    for (i = 0 ; i<arr.length ; i++){
        if(arr.indexOf(arr[i]) === id-1){
            alert(arr[i])
        }
        else{
            continue
        }
    }

}


const createBronzerCard = (bronzer) => {

    const bronzerCard = document.createElement('div')
    bronzerCard.classList.add('bronzer-card')

    bronzerCard.innerHTML = `<img onclick= "imagefnc(${bronzer.id})" src = ${bronzer.img} class = 'bronzer-cover-image'/>
    <p class="name">${bronzer.name}</p>
    <p class="brand">${bronzer.brand}</p>
    <p class="color">color:${bronzer.color}</p>
    <button id="heart-button">♥</button>
    `
    bronzerContainer.appendChild(bronzerCard) 
    const deleteBronzerCard = ()=> {
        bronzerCard.remove()
    
    }
    closeBronzer.addEventListener("click",deleteBronzerCard)
    const favButton = document.querySelector("#heart-button")
    const addTofavorites = (bronzer) => {
        const favCard = document.createElement("div")
        favCard.classList.add("fav-card")
        favCard.innerHTML = `<img onclick= "imagefnc(${bronzer.id})" src = ${bronzer.img} class = 'bronzer-cover-image'/>
        <p class="name">${bronzer.name}</p>
        <p class="brand">${bronzer.brand}</p>
        <p class="color">color:${bronzer.color}</p>
        <button onclick="deleteBronzer(${bronzer.id})">Delete the Product</button> 
        `
        favContainer.appendChild(favCard) 
    } 
    favButton.addEventListener("click",addTofavorites)

}

const displayBronzer = (arr) => {
    bronzerContainer.innerHTML = ``
    for (let i = 0; i < arr.length ; i++){
        createBronzerCard(arr[i])
    
    }
}
const displayFavBronzer = (arr) => {
    favContainer.innerHTML = ``
    for (let i = 0; i < arr.length ; i++){
        createBronzerCard.addTofavorites(arr[i])
    
    }
}

bronzerbtn.addEventListener("click",getAllBronzers)
favbtn.addEventListener("click",getFavProducts)



//==========================CONCEALER===================
const concealerCallback = ({data : concealerproducts}) => displayConcelear(concealerproducts)

const errfnc = err => console.log(err)

const getAllConcealers = () => {
    axios.get(baseURL1).then(concealerCallback).catch(errfnc)
}
const deleteConcealer = id => {
    axios.delete(`${baseURL1}/${id}`).then(concealerCallback).catch(errfnc)
}


const createConcealerCard = (concealer) => {
    const concealerCard = document.createElement('div')
    concealerCard.classList.add('concealer-card')

    concealerCard.innerHTML =`<img onclick= "imagefnc(${concealer.id})" src = ${concealer.img} class = 'bronzer-cover-image'/>

    <p class="name">${concealer.name}</p>
    <p class="brand">${concealer.brand}</p>
    <p class="color">color:${concealer.color}</p>
   
    <button onclick="deleteConcealer(${concealer.id})">Delete the Product</button>
    `
    concealerContainer.appendChild(concealerCard)
    const deleteConcealerCard= ()=> {
        concealerCard.remove()
    
    }
    closeConcealer.addEventListener("click",deleteConcealerCard)
}




const displayConcelear = (arr) => {
    concealerContainer.innerHTML = ``
    for (let i = 0; i < arr.length ; i++){
        createConcealerCard(arr[i])
    }

}


concealerbtn.addEventListener("click",getAllConcealers)


//===================LIPGLOSS===================
const lipglossCallback = ( {data : lipglossproducts }) => displayLipgloss(lipglossproducts)

const getAllLipgloss = () => {
    axios.get(baseURL2).then(lipglossCallback).catch(errfnc)
}
const deleteLipgloss = id => {
    axios.delete(`${baseURL2}/${id}`).then(lipglossCallback).catch(errfnc)
}

const createLipglossCard = (lipgloss) => {
    const lipglossCard  = document.createElement("div")
    lipglossCard.classList.add("lipgloss-card")
    lipglossCard.innerHTML = `<img onclick= "imagefnc(${lipgloss.id})" src = ${lipgloss.img} class = 'bronzer-cover-image'/>
    <p class="name">${lipgloss.name}</p>
    <p class="brand">${lipgloss.brand}</p>
    <p class="color">color:${lipgloss.color}</p>
   
    <button onclick="deleteLipgloss(${lipgloss.id})">Delete the Product</button>
    `
    lipglossContainer.appendChild(lipglossCard)
    const deleteLipglossCard = ()=> {
        lipglossContainer.remove()
    
    }
    closeLipgloss.addEventListener("click",deleteLipglossCard)

}


const displayLipgloss = (arr) => {
    lipglossContainer.innerHTML = ``
    for (i = 0; i<arr.length ; i++){
        createLipglossCard(arr[i])
    }
}

lipglossbtn.addEventListener("click",getAllLipgloss)
//=================REVIEWS=====================
const reviewsCallback = ({ data : reviews }) => displayReviews(reviews)

const getAllReviews = () => axios.get(baseURL3).then(reviewsCallback).catch(errfnc)

const createReviewCard = (rev) => {
    const reviewCard  = document.createElement("div")
    reviewCard.classList.add("review-card")
    reviewCard.innerHTML = `
    <p class="user" style="font-size:small;">user:${rev.user}</p>
    <p class="review" style="font-size:small;">review:${rev.review}</p>

    `
    reviewContainer.appendChild(reviewCard)
}


const displayReviews = (arr) => {
    reviewContainer.innerHTML = ``
    for (i = 0; i<arr.length ; i++){
        createReviewCard(arr[i])
    }
}

getAllReviews()
