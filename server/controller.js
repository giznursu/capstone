let bronzerdata = require("./db.json")
let concealerdata  = require("./db1.json")
let lipglossdata = require("./db2.json")

console.log(bronzerdata)
console.log(concealerdata)
console.log(lipglossdata)

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
    createBronzer : (req,res) => {
        let { category ,brand, name, color,img } = req.body
        let newBronzer = {
            id : bronzerId,
            category,
            brand,
            name,
            color,
            img
        }
        bronzerdata.push(newBronzer)
        res.status(200).send(bronzerdata)
        bronzerId++

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
    createConcealer : (req,res) => {
        let { category ,brand, name, color,img } = req.body
        let newConcelear = {
            id : bronzerId,
            category,
            brand,
            name,
            color,
            img 
        }
        concealerdata.push(newConcelear)
        res.status(200).send(concealerdata)
        concealerId++ 
    },
    getAllLipgloss : (req,res) => {
        res.status(200).send(lipglossdata)
    },
    deleteLipgloss : (req,res) => {
        let { id } = req.params
        let index = lipglossdata.findIndex(lipglossdata => lipglossdata.id === +id)
        lipglossdata.splice(index,1)

        res.status(200).send(lipglossdata)

    }

}
