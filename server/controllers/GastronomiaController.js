const express = require("express")
const gastronomiaService = require("../services/GastronomiaService.js")

const router = express.Router()
router.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})


router.get(
    "/listarGastronomia",
    async (request, response) => {
        try {
            const gastronomicos = await gastronomiaService.listarTodos()
            response.json(gastronomicos)
        } catch (error) {
            console.log(error)
            response.status(500).json( {"erro":"Erro interno no servidor"} )
        }
    }
)

module.exports = router