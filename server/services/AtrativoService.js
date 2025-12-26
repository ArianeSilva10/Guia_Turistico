const atrativoDTO = require("../dtos/AtrativoDTO.js");
const atrativoRepository = require("../repositories/atrativoRepository.js");


class AtrativoService {
    async listarTodos() {
        const atrativos = await atrativoRepository.findAll()

        return atrativos.map( (atrativo) => new atrativoDTO(atrativo) )
    }

    async buscarPorId(id){
        const atrativoEncontrado = atrativoRepository(id)
        if (atrativoEncontrado) {
            return new AtrativoDTO(atrativoEncontrado)
        }else
            return null
    }
}

module.exports = new AtrativoService