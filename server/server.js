const express = require("express")
const cors = require("cors")
const path = require("path")


const app = express()
app.use(express.json())
app.use(cors())

const{ getAllBronzers, 
       getAllConcealers, 
       getAllLipgloss,
       getAllReviews,
       createReview,
       deleteReview
    } = require('./controller')

    app.use(express.static('public'))


    app.get('/', (req,res) => {
        res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
    })
    app.get('/css', (req,res) => {
        res.status(200).sendFile(path.join(__dirname, '../public/styles.css'))
    })
    app.get('/js', (req,res) => {
        res.status(200).sendFile(path.join(__dirname, '../public/main.js'))
    })

app.get('/api/bronzerproducts',getAllBronzers)

app.get('/api/concealerproducts',getAllConcealers)

app.get('/api/lipglossproducts',getAllLipgloss)

app.get('/api/reviews',getAllReviews)
app.post('/api/reviews',createReview)
app.delete('/api/reviews/:id',deleteReview)






app.listen(1001,() => console.log("running on 1001"))