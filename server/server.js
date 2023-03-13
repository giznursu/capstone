const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const{ getAllBronzers, deleteBronzer,getAllConcealers, deleteConcealer,getAllLipgloss,deleteLipgloss,getAllReviews,getFavProducts} = require('./controller')

app.get('/api/bronzerproducts',getAllBronzers)
app.delete('/api/bronzerproducts/:id',deleteBronzer)
app.get('/api/concealerproducts',getAllConcealers)
app.delete('/api/concealerproducts/:id',deleteConcealer)
app.get('/api/lipglossproducts',getAllLipgloss)
app.delete('/api/lipglossproducts/:id',deleteLipgloss)
app.get('/api/reviews',getAllReviews)
app.get('/api/favproducts/:id',getFavProducts)




app.listen(1001,() => console.log("running on 1001"))