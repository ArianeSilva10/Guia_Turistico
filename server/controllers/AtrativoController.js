const express = require("express")
const atrativoService = require("../services/AtrativoService.js")

const router = express.Router()
router.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})

// pega atrativos
router.get(
    "/ListarAtrativos",
    async (request, response) => {
        try {
            const atrativos = await atrativoService.listarTodos()
            response.json(atrativos)
        } catch (error) {
            console.log(error)
            response.status(500).json( {"erro":"Erro interno no servidor"} )
        }
    }
)

module.exports = router