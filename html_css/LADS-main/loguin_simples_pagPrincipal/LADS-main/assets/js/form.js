document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const token = localStorage.getItem("token");

  const nomeProjeto = document.getElementById("nome_projeto").value;
  const descricao = document.getElementById("descricao").value;

  const dataForm = {
    name: nomeProjeto,
    descricao: descricao,
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  fetch("http://45.79.16.197:8080/api/projetos", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(dataForm),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Erro na solicitação");
      }
    })
    .then((data) => {
      console.log("Resposta da solicitação:", data);
    })
    .catch((error) => {
      console.error("Erro:", error.message);
    });
});
