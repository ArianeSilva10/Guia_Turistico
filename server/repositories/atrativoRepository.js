// acesso aos dados
const AtrativoModel = require('../models/atrativo.js');

const atrativos = [
        new AtrativoModel({
            id: 1,
            nome: "Cachoeira do Cipó",
            descricao: "A cachoeira do Cipó fica localizada na cidade de Baturité, há 8km do centro de Guaramiranga.",
            imagem: "cipo.jpg"
        }),
        new AtrativoModel({
            id: 2,
            nome: "Teatro Municipal",
            descricao: "Localizado na Rua Joaquim Alves Nogueira, bairro Centro, o Teatro Municipal de Guaramiranga está localizado na Praça Central de Guaramiranga-CE.",
            imagem: "teatromunicipal.jpg"
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
            nome: "Pico Alto",
            descricao: "Pico Alto é o nome dado à terceira montanha mais alta do estado do Ceará, no nordeste do Brasil. O pico se eleva a 1.115 metros acima do nível do mar. ",
            imagem: "picoalto.png"
        }),
        new AtrativoModel({
            id: 6,
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