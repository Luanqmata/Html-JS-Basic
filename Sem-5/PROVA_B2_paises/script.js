let todosPaises = [];
let paisesFiltrados = [];
let paginaAtual = 1;
const porPagina = 12;

async function carregarPaises() {
  const container = document.getElementById("paises-container");

  try {
    const resposta = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region,currencies,languages,area");

    if (!resposta.ok) throw new Error(`Erro HTTP: ${resposta.status}`);

    todosPaises = await resposta.json();
    paisesFiltrados = todosPaises;
    exibirPaises();
  } catch (erro) {
    container.innerHTML = `<p class="text-danger">Erro ao carregar os dados: ${erro}</p>`;
  }
}

function exibirPaises() {
  const container = document.getElementById("paises-container");
  container.innerHTML = "";

  const inicio = (paginaAtual - 1) * porPagina;
  const fim = inicio + porPagina;
  const pagina = paisesFiltrados.slice(inicio, fim);

  if (pagina.length === 0) {
    container.innerHTML = `<p class="text-center">Nenhum país encontrado.</p>`;
    return;
  }

  pagina.forEach(pais => {
    const capital = Array.isArray(pais.capital) && pais.capital.length > 0 ? pais.capital[0] : "N/A";
    const moeda = pais.currencies
      ? Object.values(pais.currencies)[0]?.name + (Object.values(pais.currencies)[0]?.symbol ? ` (${Object.values(pais.currencies)[0].symbol})` : '')
      : "N/A";

    const card = document.createElement("div");
    card.className = "col-sm-6 col-md-4 col-lg-3";

    card.innerHTML = `
      <div class="card h-100 shadow-sm text-center p-3" onclick='abrirModal(${JSON.stringify(pais).replace(/'/g, "\\'")})'>
        <img class="flag-img mx-auto" src="${pais.flags.png}" alt="Bandeira de ${pais.name.common}">
        <h5 class="mt-2">${pais.name.common}</h5>
        <p><strong>Capital:</strong> ${capital}</p>
        <p><strong>Moeda:</strong> ${moeda}</p>
      </div>
    `;

    container.appendChild(card);
  });

  atualizarBotoes();
}

function atualizarBotoes() {
  document.getElementById("prev-btn").disabled = paginaAtual === 1;
  document.getElementById("next-btn").disabled = paginaAtual * porPagina >= paisesFiltrados.length;
}

document.getElementById("prev-btn").addEventListener("click", () => {
  if (paginaAtual > 1) {
    paginaAtual--;
    exibirPaises();
  }
});

document.getElementById("next-btn").addEventListener("click", () => {
  if (paginaAtual * porPagina < paisesFiltrados.length) {
    paginaAtual++;
    exibirPaises();
  }
});

document.getElementById("inicio-btn").addEventListener("click", () => {
  if (paginaAtual !== 1) {
    paginaAtual = 1;
    exibirPaises();
  }
});

function aplicarFiltros() {
  const termo = document.getElementById("busca").value.toLowerCase();
  const moedaFiltro = document.getElementById("busca-moeda").value.toLowerCase();
  const continente = document.getElementById("continente").value;

  paisesFiltrados = todosPaises.filter(p => {
    const nome = p.name.common.toLowerCase();
    const regiao = p.region;
    
    // Extrair nomes e símbolos das moedas para facilitar a busca
    const moedas = p.currencies
      ? Object.values(p.currencies).map(c => (c.name + ' ' + (c.symbol || '')).toLowerCase())
      : [];

    const moedaMatch = moedaFiltro === "" || moedas.some(m => m.includes(moedaFiltro));

    return nome.includes(termo) && moedaMatch && (continente === "" || regiao === continente);
  });

  paginaAtual = 1;
  exibirPaises();
}

document.getElementById("busca").addEventListener("input", aplicarFiltros);
document.getElementById("busca-moeda").addEventListener("input", aplicarFiltros);
document.getElementById("continente").addEventListener("change", aplicarFiltros);

// Botão para limpar os filtros
document.getElementById("limpar-filtros-btn").addEventListener("click", () => {
  document.getElementById("busca").value = "";
  document.getElementById("busca-moeda").value = "";
  document.getElementById("continente").value = "";
  paisesFiltrados = todosPaises;
  paginaAtual = 1;
  exibirPaises();
});

function abrirModal(pais) {
  const nome = pais.name.common;
  const capital = Array.isArray(pais.capital) && pais.capital.length > 0 ? pais.capital[0] : "N/A";
  const populacao = pais.population.toLocaleString();
  const area = pais.area ? `${pais.area.toLocaleString()} km²` : "N/A";
  const moeda = pais.currencies
    ? Object.values(pais.currencies)[0]?.name + " (" + Object.values(pais.currencies)[0]?.symbol + ")"
    : "N/A";
  const idiomas = pais.languages
    ? Object.values(pais.languages).join(", ")
    : "N/A";

  const html = `
    <div class="text-center mb-3">
      <img src="${pais.flags.png}" class="border" width="100">
      <h3 class="mt-3">${nome}</h3>
    </div>
    <p><strong>Capital:</strong> ${capital}</p>
    <p><strong>População:</strong> ${populacao}</p>
    <p><strong>Área:</strong> ${area}</p>
    <p><strong>Continente:</strong> ${pais.region}</p>
    <p><strong>Moeda:</strong> ${moeda}</p>
    <p><strong>Idiomas:</strong> ${idiomas}</p>
  `;

  document.getElementById("modal-content-body").innerHTML = html;
  const modal = new bootstrap.Modal(document.getElementById("paisModal"));
  modal.show();
}

carregarPaises();
