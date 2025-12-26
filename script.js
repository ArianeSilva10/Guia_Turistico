async function carregarAtrativos() {
    const response = await fetch("http://localhost:3000/api/atrativos/ListarAtrativos")
    const atrativos = await response.json()

    if(!response.ok){
        throw new Error("erro ao buscar atrativos")
    }

    const container = document.getElementById("lista-atrativos");


    atrativos.forEach(
        (atrativo) => {
        const figure = document.createElement("figure");

        figure.innerHTML = `
        <img src="${atrativo.imagem}" alt="${atrativo.nome}" />
        <figcaption>${atrativo.nome}</figcaption>
        <p>${atrativo.descricao}</p>
        `

        container.appendChild(figure);
    });
}

carregarAtrativos();