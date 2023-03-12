const bronzerContainer = document.querySelector("#bronzer-container")
const concealerContainer = document.querySelector("#concealer-container")
const lipglossContainer = document.querySelector("#lipgloss-container")


const form1 = document.querySelector('.bronzerform')
const form2 = document.querySelector('.concealerform')
const form3 = document.querySelector(".lipglossform")

const bronzerbtn = document.querySelector("#first") 
const concealerbtn = document.querySelector("#second")
const lipglossbtn = document.querySelector("#third")
const closeBronzer = document.querySelector("#close1")
const closeConcealer = document.querySelector("#close2")
const closeLipgloss = document.querySelector("#close3")


const baseURL= `http://localhost:1001/api/bronzerproducts`
const baseURL1 = `http://localhost:1001/api/concealerproducts`
const baseURL2 = `http://localhost:1001/api/lipglossproducts`


//===================BRONZER====================


const bronzerCallback = ({ data : bronzerproducts }) => displayBronzer(bronzerproducts)


const getAllBronzers = () => {

    axios.get(baseURL).then(bronzerCallback).catch(err => console.log(err))

}
const deleteBronzer = id => {
    axios.delete(`${baseURL}/${id}`).then(bronzerCallback).catch(err=>console.log(err))
    alert("product deleted")
}
const createBronzer = body => {
    axios.post(baseURL,body).then(bronzerCallback).catch(err=>console.log(err))
}

const submit = evt => {
    evt.preventDefault()

    
    let category= document.querySelector("#category")
    let brand = document.querySelector("#brand")
    let name = document.querySelector("#name")
    let color = document.querySelector("#color")
    let img = document.querySelector("#img")


    let bodyObj = {

        category : category.value,
        brand : brand.value,
        name  : name.value,
        color : color.value,
        img : img.value
    }
    createBronzer(bodyObj)
    img.value = ''
    category.value = ''
    brand.value = ''
    name.value = ''
    color.value = ''
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
    <p class="category">${bronzer.category}</p>
    <p class="name">${bronzer.name}</p>
    <p class="brand">${bronzer.brand}</p>
    <p class="color">${bronzer.color}</p>
    <button onclick="deleteBronzer(${bronzer.id})">Delete the Product</button> 
    `
    bronzerContainer.appendChild(bronzerCard) 
    

}
const deleteBronzerCard = ()=> {
    bronzerContainer.remove()

}


const displayBronzer = (arr) => {
    bronzerContainer.innerHTML = ``
    for (let i = 0; i < arr.length ; i++){
        createBronzerCard(arr[i])
    
    }
}

bronzerbtn.addEventListener("click",getAllBronzers)
closeBronzer.addEventListener("click",deleteBronzerCard)

//==========================CONCEALER===================
const concealerCallback = ({data : concealerproducts}) => displayConcelear(concealerproducts)

const errfnc = err => console.log(err)

const getAllConcealers = () => {
    axios.get(baseURL1).then(concealerCallback).catch(errfnc)
}
const deleteConcealer = id => {
    axios.delete(`${baseURL1}/${id}`).then(concealerCallback).catch(errfnc)
}
const createConcealer = body => {
    axios.post(baseURL1,body).then(concealerCallback).catch(errfnc)
}

const createConcealerCard = (concealer) => {
    const concealerCard = document.createElement('div')
    concealerCard.classList.add('concealer-card')

    concealerCard.innerHTML =`<img onclick= "imagefnc(${concealer.id})" src = ${concealer.img} class = 'bronzer-cover-image'/>
    <p class="category">${concealer.category}</p>
    <p class="name">${concealer.name}</p>
    <p class="brand">${concealer.brand}</p>
    <p class="color">${concealer.color}</p>
   
    <button onclick="deleteConcealer(${concealer.id})">Delete the Product</button>
    `
    concealerContainer.appendChild(concealerCard)
}
const deleteConcealerCard= ()=> {
    concealerContainer.remove()

}
const submit1 = (evt) =>{
    evt.preventDefault()

    
    let category= document.querySelector("#category")
    let brand = document.querySelector("#brand")
    let name = document.querySelector("#name")
    let color = document.querySelector("#color")
    let img = document.querySelector("#img")


    let bodyObj = {

        category : category.value,
        brand : brand.value,
        name  : name.value,
        color : color.value,
        img : img.value
    }
    createConcealer(bodyObj)
    img.value = ''
    category.value = ''
    brand.value = ''
    name.value = ''
    color.value = ''

}


const displayConcelear = (arr) => {
    concealerContainer.innerHTML = ``
    for (let i = 0; i < arr.length ; i++){
        createConcealerCard(arr[i])
    }

}


form1.addEventListener('submit', submit)
form2.addEventListener('submit',submit1)
concealerbtn.addEventListener("click",getAllConcealers)
closeConcealer.addEventListener("click",deleteConcealerCard)

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
    <p class="category">${lipgloss.category}</p>
    <p class="name">${lipgloss.name}</p>
    <p class="brand">${lipgloss.brand}</p>
    <p class="color">${lipgloss.color}</p>
   
    <button onclick="deleteLipgloss(${lipgloss.id})">Delete the Product</button>
    `
    lipglossContainer.appendChild(lipglossCard)
}
const deleteLipglossCard = ()=> {
    lipglossContainer.remove()

}

const displayLipgloss = (arr) => {
    lipglossContainer.innerHTML = ``
    for (i = 0; i<arr.length ; i++){
        createLipglossCard(arr[i])
    }
}

lipglossbtn.addEventListener("click",getAllLipgloss)
closeLipgloss.addEventListener("click",deleteLipglossCard)