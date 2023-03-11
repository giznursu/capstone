const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const{ getAllBronzers, deleteBronzer, createBronzer,getAllConcealers, deleteConcealer,createConcealer,getAllLipgloss,deleteLipgloss} = require('./controller')

app.get('/api/bronzerproducts',getAllBronzers)
app.delete('/api/bronzerproducts/:id',deleteBronzer)
app.post('/api/bronzerproducts',createBronzer)
app.get('/api/concealerproducts',getAllConcealers)
app.delete('/api/concealerproducts/:id',deleteConcealer)
app.post('/api/concealerproducts',createConcealer)
app.get('/api/lipglossproducts',getAllLipgloss)
app.delete('/api/lipglossproducts/:id',deleteLipgloss)




app.listen(1001,() => console.log("running on 1001"))