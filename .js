<form class= "bronzerform">
                <input 
                type="text"
                id = "img"
                placeholder="Enter the img url">
                <input 
                type="text"
                id = "category"
                placeholder="Enter the product category">
                <input 
                type="text"
                id = "brand"
                placeholder="Enter the product brand">
                <input 
                type="text"
                id = "name"
                placeholder="Enter the product name">
                <input 
                type="text"
                id = "color"
                placeholder="Enter the product color">
                <button>Add Product</button>

=================================
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