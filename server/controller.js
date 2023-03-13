let bronzerdata = require("./db.json")
let concealerdata  = require("./db1.json")
let lipglossdata = require("./db2.json")
let reviewsdata = require("./dbreview.json")


console.log(bronzerdata)
console.log(concealerdata)
console.log(lipglossdata)
console.log(reviewsdata)

bronzerId = 9
concealerId = 11
lipglossId = 12
reviewId = 4

module.exports = {
    getAllBronzers : (req,res)=>{
        res.status(200).send(bronzerdata)
    },
    getAllConcealers : (req,res) => {
        res.status(200).send(concealerdata)
    },
    getAllLipgloss : (req,res) => {
        res.status(200).send(lipglossdata)
    },
    getAllReviews : (req,res) => {
        res.status(200).send(reviewsdata)
    },
    createReview : (req,res) => {
        let { user,review } = req.body
        let newReview = {
            id : reviewId,
            user,
            review
        }
        reviewsdata.push(newReview)
        res.status(200).send(reviewsdata)
        reviewId++
    },
    deleteReview : (req,res) => {
        let { id } = req.params
        let index = reviewsdata.findIndex(reviewsdata => reviewsdata.id === +id)
        reviewsdata.splice(index,1)

        res.status(200).send(reviewsdata)

    },

}
