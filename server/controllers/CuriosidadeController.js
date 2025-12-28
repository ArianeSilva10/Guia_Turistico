const express = require('express')
const curiosidadeService = require('../services/CuriosidadesService.js');

const router = express.Router()
router.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})

router.get(
    "/listarCuriosidades",
    async (request, response) => {
        try {
            const curiosidades = await curiosidadeService.listarTodos();
            response.json(curiosidades);
        } catch (error) {
            console.log(error);
            response.status(500).json( {"erro": "Erro interno no servidor"} )
        }
    }
)

module.exports = router;