const CuriosidadesModel = require('../models/CuriosidadesModel.js')

const curiosidades = [
    new CuriosidadesModel({
        id: 1,
        descricao: "Neblina constante nas manhãs de inverno."
    }),
    new CuriosidadesModel({
        id: 2,
        descricao: "Temperaturas abaixo dos 10 °C são comuns."
    }),
    new CuriosidadesModel({
        id: 3,
        descricao: "Destino procurado por observadores de aves."
    }),
    new CuriosidadesModel({
        id: 4,
        descricao: "Produção de chocolates e queijos artesanais."
    }),
    new CuriosidadesModel({
        id: 5,
        descricao: "Conhecida como Cidade das Flores."
    })
]

class CuriosidadesRepository {
    async findAll(){
        return Promise.resolve(curiosidades);
    }

    async findById(id){
        const curiosidade = curiosidades.find( (curiosidade) => curiosidade.id == id )

        if(curiosidade){
            return Promise.resolve(curiosidade)
        
        return Promise.resolve(null)
        }
    }
}

module.exports = new CuriosidadesRepository;