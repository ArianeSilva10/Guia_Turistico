const gastronomiaDTO = require("../dtos/GastronomiaDTO.js")
const gastronomiaRepository = require("../repositories/gastronomiaRepository.js")

class GastronomiaService {
    async listarTodos(){
        const gastronomicos = await gastronomiaRepository.findAll()

        return gastronomicos.map( (gastronomico) => new gastronomiaDTO(gastronomico) )
    }

    async buscarPorId(id){
        const gastronomicoEncontrado = gastronomiaRepository(id)
        if (gastronomicoEncontrado) {
            return new gastronomiaDTO(gastronomicoEncontrado)
        } else {
            return null
        }
    }
}

module.exports = new GastronomiaService