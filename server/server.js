const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const{ getAllBronzers, deleteBronzer , reviewProduct } = require('./controller')

app.get('/api/bronzerproducts',getAllBronzers)
app.delete('/api/bronzerproducts/:id',deleteBronzer)
app.post('/api/bronzerproducts',reviewProduct)



app.listen(1001,() => console.log("running on 1001"))