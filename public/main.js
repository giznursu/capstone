
const bronzerContainer = document.querySelector("#bronzer-container")
const concealerContainer = document.querySelector("#concealer-container")
const lipglossContainer = document.querySelector("#lipgloss-container")
const reviewContainer = document.querySelector("#review-container")
const heartContainer = document.querySelector("#heart-container")




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




//===================BRONZER====================


const bronzerCallback = ({ data : bronzerproducts }) => displayBronzer(bronzerproducts)

const getAllBronzers = () => {

    axios.get(baseURL).then(bronzerCallback).catch(err => console.log(err))

}

const imagefnc = (id) => {
    arr = ["Suitable for very light skin tones. But you just glow anyway!","Suitable for very light skin tones.By the way, I can't help but say you are stunning!",
    "Suitable for light to medium skin tones. By the way, everything seems brighter when you are around!","Suitable for medium skin tones.And a little reminder that you are enough!","Suitable for medium and golden skin tones. And I have to say that you're inspiring","Fair with neutral undertones. And don't forget you are perfect just the way you are! ","Light with warm undertones.By the way, I can't help but say you're even better than a unicorn because you're real!","Tan to deep with neutral undertones. By the way, don't forget on a scale from 1 to 10, you're an 11!"]
    for (i = 0 ; i<arr.length ; i++){
        if(arr.indexOf(arr[i]) === id-1){
            alert(arr[i])
        }
        else{
            continue
        }
    }

}
const goWebsite = (id) => {

    if (id === 1){
       open("https://www.dior.com/en_us/beauty/products/Y0216000_C021600007-dior-forever-natural-bronze-healthy-glow-bronzing-powder-95-mineral-origin-pigments?gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPZbnexnBSu6P0xshmGv_xLXgQNvHn94oh89F8FpgGegPxYZm8k09HIaAoJBEALw_wcB&gclsrc=aw.ds")
        
    }
    else if (id ===2){
        open("https://www.dior.com/en_us/beauty/products/Y0216000_C021600007-dior-forever-natural-bronze-healthy-glow-bronzing-powder-95-mineral-origin-pigments?gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPZbnexnBSu6P0xshmGv_xLXgQNvHn94oh89F8FpgGegPxYZm8k09HIaAoJBEALw_wcB&gclsrc=aw.ds")
        
    }
    else if (id = 3){
        open("https://www.dior.com/en_us/beauty/products/Y0216000_C021600007-dior-forever-natural-bronze-healthy-glow-bronzing-powder-95-mineral-origin-pigments?gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPZbnexnBSu6P0xshmGv_xLXgQNvHn94oh89F8FpgGegPxYZm8k09HIaAoJBEALw_wcB&gclsrc=aw.ds" )
        
    }
    else if (id = 4){
        open("https://www.dior.com/en_us/beauty/products/Y0216000_C021600007-dior-forever-natural-bronze-healthy-glow-bronzing-powder-95-mineral-origin-pigments?gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPZbnexnBSu6P0xshmGv_xLXgQNvHn94oh89F8FpgGegPxYZm8k09HIaAoJBEALw_wcB&gclsrc=aw.ds" )
        
    }
    else if (id = 5){
        open("https://www.dior.com/en_us/beauty/products/Y0216000_C021600007-dior-forever-natural-bronze-healthy-glow-bronzing-powder-95-mineral-origin-pigments?gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPZbnexnBSu6P0xshmGv_xLXgQNvHn94oh89F8FpgGegPxYZm8k09HIaAoJBEALw_wcB&gclsrc=aw.ds" )
       
    }
    else if (id = 6){
        open("https://fentybeauty.com/products/sun-stalkr-instant-warmth-bronzer-inda-sun" )
       
    }
    else if (id = 7){
        open("https://fentybeauty.com/products/sun-stalkr-instant-warmth-bronzer-shady-biz")
       
    }
    else if (id = 8){
        open("https://fentybeauty.com/products/sun-stalkr-instant-warmth-bronzer-caramel-cutie")
       
    }

    
}


const createBronzerCard = (bronzer) => {

    const bronzerCard = document.createElement('div')
    bronzerCard.classList.add('bronzer-card')

    bronzerCard.innerHTML = `<img onclick= "imagefnc(${bronzer.id})" src = ${bronzer.img} class = 'bronzer-cover-image'/>
    <p class="name" style = "background-image:url(https://www.si.edu/sites/default/files/styles/social_media/public/blog/crab_nebula.jpg?itok=l-fZ5PRC);">${bronzer.name}</p>
    <p class="brand" style = "background-image:url(https://www.si.edu/sites/default/files/styles/social_media/public/blog/crab_nebula.jpg?itok=l-fZ5PRC);">${bronzer.brand}</p>
    <p class="color" style = "background-image:url(https://www.si.edu/sites/default/files/styles/social_media/public/blog/crab_nebula.jpg?itok=l-fZ5PRC);">color: ${bronzer.color}</p>

    <button style = "background-color:#F2C4CE;" onclick="goWebsite(${bronzer.id})">Buy it!</button>
    `
    bronzerContainer.appendChild(bronzerCard) 



    const deleteBronzerCard = ()=> {
        bronzerCard.remove()
    
    }
    closeBronzer.addEventListener("click",deleteBronzerCard)
    
}


const displayBronzer = (arr) => {
    bronzerContainer.innerHTML = ``
    for (let i = 0; i < arr.length ; i++){
        createBronzerCard(arr[i])
    
    }
}


bronzerbtn.addEventListener("click",getAllBronzers)





//==========================CONCEALER===================
const concealerCallback = ({data : concealerproducts}) => displayConcelear(concealerproducts)

const errfnc = err => console.log(err)

const getAllConcealers = () => {
    axios.get(baseURL1).then(concealerCallback).catch(errfnc)
}
const imagefnc1 = (id) => {
    arr = ["Very light skin with cool pink undertones. But you just glow anyway!","Very light skin with golden undertones.  By the way, I can't help but say you are stunning!",
    "Medium skin with golden undertones. By the way, everything seems brighter when you are around!","Medium skin with cool pink undertones. And a little reminder that you are enough!","Medium skin with cool pink undertones. And I have to say that you're inspiring","Very deep skin with warm, peach undertones. And don't forget you are perfect just the way you are! ","Deep skin with a balance of warm & cool undertones.  By the way, I can't help but say you're even better than a unicorn because you're real!","Tan to deep with neutral undertones. By the way, don't forget on a scale from 1 to 10, you're an 11!","Tan to deep skin with warm, peach undertones. But you just glow anyway!", "Medium to tan skin with warm, golden undertones. By the way, everything seems brighter when you are around!"]
    for (i = 0 ; i<arr.length ; i++){
        if(arr.indexOf(arr[i]) === id-1){
            alert(arr[i])
        }
        else{
            continue
        }
    }

}
const goWebsite1 = (id) => {
    if (id === 1){
        open("https://www.dior.com/en_us/beauty/products/Y0262001-dior-backstage-flash-perfector-concealer-concealer-caffeine-infused-full-coverage-natural-glow-finish-waterproof-wear?gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPYqLsjtUrTGWuXpeJcQHjAeloiaZ2_eHXmiYth_9vt8WIZlWsF1TacaAliZEALw_wcB&gclsrc=aw.ds")
         
     }
     else if (id ===2){
         open("https://www.dior.com/en_us/beauty/products/Y0262001-dior-backstage-flash-perfector-concealer-concealer-caffeine-infused-full-coverage-natural-glow-finish-waterproof-wear?gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPYqLsjtUrTGWuXpeJcQHjAeloiaZ2_eHXmiYth_9vt8WIZlWsF1TacaAliZEALw_wcB&gclsrc=aw.ds")
         
     }
     else if (id === 3){
         open("https://www.dior.com/en_us/beauty/products/Y0262001-dior-backstage-flash-perfector-concealer-concealer-caffeine-infused-full-coverage-natural-glow-finish-waterproof-wear?gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPYqLsjtUrTGWuXpeJcQHjAeloiaZ2_eHXmiYth_9vt8WIZlWsF1TacaAliZEALw_wcB&gclsrc=aw.ds" )
         
     }
     else if (id === 4){
         open("https://www.dior.com/en_us/beauty/products/Y0262001-dior-backstage-flash-perfector-concealer-concealer-caffeine-infused-full-coverage-natural-glow-finish-waterproof-wear?gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPYqLsjtUrTGWuXpeJcQHjAeloiaZ2_eHXmiYth_9vt8WIZlWsF1TacaAliZEALw_wcB&gclsrc=aw.ds" )
         
     }
     else if (id === 5){
         open("https://www.dior.com/en_us/beauty/products/Y0262001-dior-backstage-flash-perfector-concealer-concealer-caffeine-infused-full-coverage-natural-glow-finish-waterproof-wear?gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPYqLsjtUrTGWuXpeJcQHjAeloiaZ2_eHXmiYth_9vt8WIZlWsF1TacaAliZEALw_wcB&gclsrc=aw.ds" )
        
     }
     else if (id === 6){
         open("https://tartecosmetics.com/shop/shape-tape-concealer-836.html?mrkgadid=3296535993&mrkgcl=1213&mrkgen=gtext&mrkgbflag=1&mrkgcat=brand_plus&acctid=21700000001506533&dskeywordid=43700034269253267&lid=43700034269253267&ds_s_kwgid=58700004159220403&device=c&network=g&matchtype=e&locationid=9005872&creative=378884782984&targetid=kwd-298747571731&campaignid=808819427&adgroupid=44537980249&awsearchcpc=1&gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPZTU5zwq1BUg8RNVuIrmbnFmtroQ8eBE7Vvhu2pEP9e7pw9hFOV1E4aAgJFEALw_wcB&gclsrc=aw.ds" )
        
     }
     else if (id === 7){
         open("https://tartecosmetics.com/shop/shape-tape-concealer-836.html?mrkgadid=3296535993&mrkgcl=1213&mrkgen=gtext&mrkgbflag=1&mrkgcat=brand_plus&acctid=21700000001506533&dskeywordid=43700034269253267&lid=43700034269253267&ds_s_kwgid=58700004159220403&device=c&network=g&matchtype=e&locationid=9005872&creative=378884782984&targetid=kwd-298747571731&campaignid=808819427&adgroupid=44537980249&awsearchcpc=1&gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPZTU5zwq1BUg8RNVuIrmbnFmtroQ8eBE7Vvhu2pEP9e7pw9hFOV1E4aAgJFEALw_wcB&gclsrc=aw.ds")
        
     }
     else if (id === 8){
         open("https://tartecosmetics.com/shop/shape-tape-concealer-836.html?mrkgadid=3296535993&mrkgcl=1213&mrkgen=gtext&mrkgbflag=1&mrkgcat=brand_plus&acctid=21700000001506533&dskeywordid=43700034269253267&lid=43700034269253267&ds_s_kwgid=58700004159220403&device=c&network=g&matchtype=e&locationid=9005872&creative=378884782984&targetid=kwd-298747571731&campaignid=808819427&adgroupid=44537980249&awsearchcpc=1&gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPZTU5zwq1BUg8RNVuIrmbnFmtroQ8eBE7Vvhu2pEP9e7pw9hFOV1E4aAgJFEALw_wcB&gclsrc=aw.ds")
        
     }
    else if ( id === 9 ){
        open("https://tartecosmetics.com/shop/shape-tape-concealer-836.html?mrkgadid=3296535993&mrkgcl=1213&mrkgen=gtext&mrkgbflag=1&mrkgcat=brand_plus&acctid=21700000001506533&dskeywordid=43700034269253267&lid=43700034269253267&ds_s_kwgid=58700004159220403&device=c&network=g&matchtype=e&locationid=9005872&creative=378884782984&targetid=kwd-298747571731&campaignid=808819427&adgroupid=44537980249&awsearchcpc=1&gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPZTU5zwq1BUg8RNVuIrmbnFmtroQ8eBE7Vvhu2pEP9e7pw9hFOV1E4aAgJFEALw_wcB&gclsrc=aw.ds")
        
    }
    else if ( id === 10 ){
        open("https://tartecosmetics.com/shop/shape-tape-concealer-836.html?mrkgadid=3296535993&mrkgcl=1213&mrkgen=gtext&mrkgbflag=1&mrkgcat=brand_plus&acctid=21700000001506533&dskeywordid=43700034269253267&lid=43700034269253267&ds_s_kwgid=58700004159220403&device=c&network=g&matchtype=e&locationid=9005872&creative=378884782984&targetid=kwd-298747571731&campaignid=808819427&adgroupid=44537980249&awsearchcpc=1&gclid=Cj0KCQjwk7ugBhDIARIsAGuvgPZTU5zwq1BUg8RNVuIrmbnFmtroQ8eBE7Vvhu2pEP9e7pw9hFOV1E4aAgJFEALw_wcB&gclsrc=aw.ds")
    }
 

}

const createConcealerCard = (concealer) => {
    const concealerCard = document.createElement('div')
    concealerCard.classList.add('concealer-card')

    concealerCard.innerHTML =`<img onclick= "imagefnc1(${concealer.id})" src = ${concealer.img} class = 'bronzer-cover-image'/>

    <p class="name" style = "background-image:url(https://www.si.edu/sites/default/files/styles/social_media/public/blog/crab_nebula.jpg?itok=l-fZ5PRC);text-align:center;">${concealer.name}</p>
    <p class="brand" style = "background-image:url(https://www.si.edu/sites/default/files/styles/social_media/public/blog/crab_nebula.jpg?itok=l-fZ5PRC);">${concealer.brand}</p>
    <p class="color" style = "background-image:url(https://www.si.edu/sites/default/files/styles/social_media/public/blog/crab_nebula.jpg?itok=l-fZ5PRC);">color: ${concealer.color}</p>
    <button style = "background-color:#F2C4CE;" onclick="goWebsite1(${concealer.id})">Buy it!</button>
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
const imagefnc2 = (id) => {
    arr = ["Beige Sapotille is a soft beige with a bright orange note reminiscent of sapodilla, a tropical fruit with creamy, caramel-flavored flesh. But you just glow anyway!","Corail Bigarade is a bright, sunny coral, as fresh and soft as the flesh of a Seville orange.  By the way, I can't help but say you are stunning!",
    "Rose Pitaya is a fresh pink combining delicacy with the fruity radiance of dragon fruit. By the way, everything seems brighter when you are around!","Medium skin with cool pink undertones. And a little reminder that you are enough!","Rouge Amarelle is a bright red to which the Amarelle cherry brings its tangy gourmand notes. And I have to say that you're inspiring","Pourpre Camarine is a sparkling and fruity violet, which borrows its purple hue from crowberries. And don't forget you are perfect just the way you are! ","An oil-infused lipstick that provides luscious shine color and smooth hydrating comfort.  By the way, I can't help but say you're even better than a unicorn because you're real!","A medium-coverage, hydrating lipstick with a high-shine, balm-like texture that conditions and moisturizes the lips. By the way, don't forget on a scale from 1 to 10, you're an 11!","High Shine Lipstick.", "Made with 65% essential oils, the deeply moisturizing lipstick instantly melts into the lips. By the way, everything seems brighter when you are around!","A medium-coverage, hydrating lipstick with a high-shine, balm-like texture that conditions and moisturizes the lips."]
    for (i = 0 ; i<arr.length ; i++){
        if(arr.indexOf(arr[i]) === id-1){
            alert(arr[i])
        }
        else{
            continue
        }
    }

}
const goWebsite2 = (id) => {
    if (id === 1){
        open("https://www.hermes.com/us/en/product/hermesistible-infused-care-oil-beige-sapotille-V60346HV001/")
         
     }
     else if (id ===2){
         open("https://www.hermes.com/us/en/product/hermesistible-infused-care-oil-corail-bigarade-V60346HV002/")
         
     }
     else if (id === 3){
         open("https://www.hermes.com/us/en/product/hermesistible-infused-care-oil-rose-pitaya-V60346HV003/" )
         
     }
     else if (id === 4){
         open("https://www.hermes.com/us/en/product/hermesistible-infused-care-oil-rouge-amarelle-V60346HV004/" )
         
     }
     else if (id === 5){
         open("https://www.hermes.com/us/en/product/hermesistible-infused-care-oil-pourpre-camarine-V60346HV006/" )
        
     }
     else if (id === 6){
         open("https://www.yslbeautyus.com/makeup/lips/lipstick/rouge-volupte-shine-lipstick-balm/62510YSL.html?dwvar_62510YSL_color=09%20-%20Nude%20Sheer%20-%20Spicy%20Warm%20Beige" )
        
     }
     else if (id === 7){
         open("https://www.yslbeautyus.com/makeup/lips/lipstick/rouge-volupte-shine-lipstick-balm/62510YSL.html?dwvar_62510YSL_color=12%20-%20Corail%20Dolman%20-%20Bright%20Cajun%20Coral")
        
     }
     else if (id === 8){
         open("https://www.yslbeautyus.com/makeup/lips/lipstick/rouge-volupte-shine-lipstick-balm/62510YSL.html?dwvar_62510YSL_color=15%20-%20Corail%20Spontini%20-%20Peach")
        
     }
    else if ( id === 9 ){
        open("https://www.yslbeautyus.com/makeup/lips/lipstick/rouge-volupte-shine-lipstick-balm/62510YSL.html?dwvar_62510YSL_color=16%20-%20Orange%20Majorelle%20-%20Deep%20Tangerine")
        
    }
    else if ( id === 10 ){
        open("https://www.yslbeautyus.com/makeup/lips/lipstick/rouge-volupte-shine-lipstick-balm/62510YSL.html?dwvar_62510YSL_color=44%20–%20Nude%20Lavalliere")
    }
    else if ( id === 11){
        open("https://www.yslbeautyus.com/makeup/lips/lipstick/rouge-volupte-shine-lipstick-balm/62510YSL.html?dwvar_62510YSL_color=45%20–%20Rouge%20Tuxedo")
    }
}
const createLipglossCard = (lipgloss) => {
    const lipglossCard  = document.createElement("div")
    lipglossCard.classList.add("lipgloss-card")
    lipglossCard.innerHTML = `<img onclick= "imagefnc2(${lipgloss.id})" src = ${lipgloss.img} class = 'bronzer-cover-image'/>
    <p class="name" style = "background-image:url(https://www.si.edu/sites/default/files/styles/social_media/public/blog/crab_nebula.jpg?itok=l-fZ5PRC);text-align:center">${lipgloss.name}</p>
    <p class="brand" style = "background-image:url(https://www.si.edu/sites/default/files/styles/social_media/public/blog/crab_nebula.jpg?itok=l-fZ5PRC);;">${lipgloss.brand}</p>
    <p class="color" style = "background-image:url(https://www.si.edu/sites/default/files/styles/social_media/public/blog/crab_nebula.jpg?itok=l-fZ5PRC);">color: ${lipgloss.color}</p>
    <button style = "background-color:#F2C4CE;" onclick="goWebsite2(${lipgloss.id})">Buy it!</button>
    `
    lipglossContainer.appendChild(lipglossCard)
    const deleteLipglossCard = ()=> {
        lipglossCard.remove()
    
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
const form = document.querySelector('form')
const reviewsCallback = ({ data : reviews }) => displayReviews(reviews)

const getAllReviews = () => axios.get(baseURL3).then(reviewsCallback).catch(errfnc)
const createReview = body => axios.post(baseURL3,body).then(reviewsCallback).catch(errfnc)
const deleteReview = id => axios.delete(`${baseURL3}/${id}`).then(reviewsCallback).catch(errfnc)

const createReviewCard = (rev) => {
    const reviewCard  = document.createElement("div")
    reviewCard.classList.add("review-card")
    reviewCard.innerHTML = `
    <p class="olduser" style="font-size:large;font-style:oblique; background-color:transparent">User: ${rev.user}</p>
    <p class="oldreview" style="font-size:large;font-style:oblique;background-color:black;width:fit-content">${rev.review}</p>
    <button  class="olddelete" style="background-color:rgb(249, 234, 255)" onclick="deleteReview(${rev.id})">delete</button>
    
    `
    
    reviewContainer.appendChild(reviewCard)
}
const submit = (evt) => {
    evt.preventDefault()
    let user = document.querySelector("#user")
    let review = document.querySelector("#review")
    let bodyObj = {
        user : user.value,
        review : review.value
    }
    createReview(bodyObj)
    user.value = ''
    review.value = ''
}

const displayReviews = (arr) => {
    reviewContainer.innerHTML = ``
    for (i = 0; i<arr.length ; i++){
        createReviewCard(arr[i])
    }
}

form.addEventListener("submit",submit)
getAllReviews()
