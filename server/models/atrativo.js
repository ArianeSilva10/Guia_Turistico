// dados

const PATH_IMAGEM = "http://localhost:3000/img/"


class AtrativoModel {
    constructor ({ id, nome, descricao, imagem }){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = `${PATH_IMAGEM}${imagem}`;

        // campos internos
        this.dataCriacao = new Date();
        this.statusInterno = "ATIVO";
    }
}

module.exports = AtrativoModel