// dados

const PATH_IMAGEM = "http://localhost:3000/img/"


class GastronomiaModel {
    constructor ({ id, nome, alt, descricao, imagem }){
        this.id = id;
        this.nome = nome;
        this.alt = alt;
        this.descricao = descricao;
        this.imagem = `${PATH_IMAGEM}${imagem}`;

        // campos internos
        this.dataCriacao = new Date();
        this.statusInterno = "ATIVO";
    }
}

module.exports = GastronomiaModel