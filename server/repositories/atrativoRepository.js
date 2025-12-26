// acesso aos dados
const AtrativoModel = require('../models/atrativo.js');

const atrativos = [
        new AtrativoModel({
            id: 1,
            nome: "Cachoeira do Cipó",
            descricao: "Localizada a 8km de Guaramiranga",
            imagem: "cipo.jpg"
        }),
        new AtrativoModel({
            id: 2,
            nome: "Pico Alto",
            descricao: "Terceira montanha mais alta do Ceará",
            imagem: "picoalto.png"
        }),
        new AtrativoModel({
            id: 3,
            nome: "Cachoeira São Paulo",
            descricao: "A Cachoeira São Paulo fica a leste de Guaramiranga, no Riacho Candeia, próximo ao Poço da Veada. É uma cachoeira mais ensolarada que a do Poço da Veada, com ótimas piscinas para banho.",
            imagem: "saopaulo.png"
        }),
        new AtrativoModel({
            id: 4,
            nome: "Poço da Veada",
            descricao: "O Poço da Veada é uma pequena cachoeira no Riacho Candeia, a nordeste de Guaramiranga. Pode-se chegar até lá caminhando desde Guaramiranga ou da vizinha cidade de Pacoti.",
            imagem: "pocodaveada.jpg"
        }),
        new AtrativoModel({
            id: 5,
            nome: "Cachoeira do Perigo",
            descricao: "A Cachoeira do Perigo fica localizada há 10km de Guaramiranga.",
            imagem: "perigo.jpg"
        })
    ]

class AtrativoRepository {
    //lista todos
    async findAll(){
        return Promise.resolve(atrativos)
    }

    async findById(id){
        const atrativo = atrativos.find( (atrativo) => atrativo.id == id )
        if (atrativo)
            return Promise.resolve(atrativo)
        return Promise.resolve(null)
    }
}

module.exports = new AtrativoRepository