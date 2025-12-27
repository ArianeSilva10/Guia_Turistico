// acesso aos dados
const GastronomiaModel = require('../models/GastronomiaModel');

const locaisGastronomicos = [
        new GastronomiaModel({
            id: 1,
            nome: "Choco Berry",
            alt: "Loja Choco Berry",
            descricao: " loja é bem lindinha, o atendimento é maravilhoso, as meninas sempre super gentis. A loja é uma tentação, muita variedade e uma coisa mais gostosa que a outra. Tem opção de barra de chocolate, fondue, espetinho de frutas com chocolate e o que não falta é opção.",
            imagem: "choco.jpg"
        }),
        new GastronomiaModel({
            id: 2,
            nome: "Antiquus Gastrobar",
            alt: "Restaurante Antiquus",
            descricao: "Cozinha contemporânea com reprodução de pratos muito bem feitos, qualidade ímpar, leva 5 estrelas por ambiente, banheiro, arquitetura, qualidade e sabor da refeição, claro existem pontos a serem melhorados, mas serve como exemplo a vários outros restaurantes do estado.",
            imagem: "antiq.jpg"
            }),
        new GastronomiaModel({
            id: 3,
            nome: "Studio 70",
            alt: "Restaurante Studio 70",
            descricao: "Seja pra almoçar ou para jantar, excelente opção. Pratos muito bem servidos e deliciosos! Pedimos o Mix na Telha no almoço , e a Coxa e Sobrecoxa quando voltamos pra jantar. Ambos muito bons. Atendimento nota mil, ambiente super agradável em meio a plantas , e destaque para o atendimento do garçom Juan, gente fina demais. Recomendo!",
            imagem: "studio70.jpg"
        }),
        new GastronomiaModel({
            id: 4,
            nome: "Manjericão",
            alt: "Restaurante Manjericão",
            descricao: "Muito bom! Passamos para almoçar e voltamos no mesmo dia. Preço elevado, mas pratos bem servidos. Pedimos o peixe manjericão, filé guara, massa com camarão e filé, todos excelentes. Atendimento muito bom. No dia em que fomos, estava tendo música ao vivo, couvert com preço justo e vinhos excelentes com valor abaixo do praticado na região. Voltaria e indico!",
            imagem: "manj.jpg"
        })
    ]

class GastronomiaRepository {
    //lista todos
    async findAll(){
        return Promise.resolve(locaisGastronomicos)
    }

    async findById(id){
        const gastronomico = locaisGastronomicos.find( (gastronomico) => gastronomico.id == id )
        if (gastronomico)
            return Promise.resolve(gastronomico)
        return Promise.resolve(null)
    }
}

module.exports = new GastronomiaRepository