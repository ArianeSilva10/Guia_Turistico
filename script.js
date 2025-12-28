const PATH = 'http://localhost:3000/api'

async function carregarAtrativos() {
    const response = await fetch(`${PATH}/atrativos/ListarAtrativos`)
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
    const response = await fetch(`${PATH}/gastronomia/listarGastronomia`);
    
    if (!response.ok) {
        throw new Error("Erro ao buscar a gastronomia")
    }
    const gastronomicos = await response.json();

    const section = document.getElementById("gastronomia");

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

async function carregarCuriosidades() {
    const response = await fetch(`${PATH}/curiosidades/listarCuriosidades`);

    if (!response.ok) {
        throw new Error("Erro ao buscar as curiosidades");
    }

    const curiosidades = await response.json();

    const ul = document.getElementById("curiosidades-id");

    curiosidades.forEach(curiosidade => {
        const li = document.createElement("li");

        li.innerHTML = `${curiosidade.descricao}`

        ul.appendChild(li);
    });
}

carregarAtrativos();
carregarGastronomia();
carregarCuriosidades();