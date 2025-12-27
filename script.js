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

async function carregarGastronomia() {
    const response = await fetch("http://localhost:3000/api/gastronomia/listarGastronomia");
    
    if (!response.ok) {
        throw new Error("Erro ao buscar a gastronomia")
    }
    const gastronomicos = await response.json();

    const section = document.getElementById("gastronomia");
    const referencia = section.querySelector("p");


    gastronomicos.forEach(gastronomico => {
        const aside = document.createElement("aside");

        aside.innerHTML = `
        <h3>${gastronomico.nome}</h3>
        <figure>
            <img src="${gastronomico.imagem}" alt="${gastronomico.alt}" />
        </figure>
        <p><cite>${gastronomico.descricao}</cite></p>
        `

        section.appendChild(aside)
    });
}

carregarAtrativos();
carregarGastronomia();