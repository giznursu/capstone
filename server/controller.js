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

module.exports = {
    getAllBronzers : (req,res)=>{
        res.status(200).send(bronzerdata)
    },

    deleteBronzer : (req,res) =>{
        let { id } = req.params
        let index = bronzerdata.findIndex(bronzerdata => bronzerdata.id === +id)
        bronzerdata.splice(index,1)

        res.status(200).send(bronzerdata)

    }, 
    getAllConcealers : (req,res) => {
        res.status(200).send(concealerdata)
    },
    deleteConcealer : (req,res) => {
        let { id } = req.params
        let index = concealerdata.findIndex(concealerdata => concealerdata.id === +id)
        concealerdata.splice(index,1)

        res.status(200).send(concealerdata)
    },
    getAllLipgloss : (req,res) => {
        res.status(200).send(lipglossdata)
    },
    deleteLipgloss : (req,res) => {
        let { id } = req.params
        let index = lipglossdata.findIndex(lipglossdata => lipglossdata.id === +id)
        lipglossdata.splice(index,1)

        res.status(200).send(lipglossdata)

    },
    getAllReviews : (req,res) => {
        res.status(200).send(reviewsdata)
    },
    getFavProducts :(req,res) => {
        let { id } = req.params
        let index = bronzerdata.findIndex(bronzerdata => bronzerdata.id === +id)
        favBronzer = bronzerdata.slice(index,index+1)
        res.status(200).send(favBronzer)
    }


}
