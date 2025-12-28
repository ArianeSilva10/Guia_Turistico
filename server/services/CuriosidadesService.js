const curiosidadeDTO = require('../dtos/CuriosidadesDTO.js')
const curiosidadeRepository = require('../repositories/curiosidadesRepository.js')

class CuriosidadeService {
    async listarTodos(){
        const curiosidades = await curiosidadeRepository.findAll()

        return curiosidades.map( (curiosidade) => new curiosidadeDTO(curiosidade) )
    }

    async buscarPorId(id){
        const curiosidadeEncontrada = curiosidadeRepository(id)

        if (curiosidadeEncontrada) {
            return new curiosidadeDTO(curiosidadeEncontrada)
        } else {
            return null
        }
    }
}

module.exports = new CuriosidadeService;