let bronzerdata = require("./db.json")

console.log(bronzerdata)

bronzerId = 9

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
    reviewProduct : (req,res) => {
        let { name, review} = req.body
        let { id } =req.params
        let newReview = {
            name,
            review
        }
        let index  = bronzerdata.findIndex(bronzerdata => bronzerdata.id === +id)
        bronzerdata.splice(index,newReview)
       
        res.status(200).send(bronzerdata)
        
    
    }

}
