const alerta = (type, message) => {
  var verificarAlerta = document.querySelectorAll(".alert");
  verificarAlerta.forEach((alert) => alert.remove());

  var createAlert = document.createElement("div");
  createAlert.classList.add(
    "alert",
    "alert-" + type,
    "alert-dismissible",
    "fade",
    "show"
  );
  createAlert.setAttribute("role", "alert");

  createAlert.innerHTML = `${message} <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;

  document.getElementById("login").insertAdjacentElement("afterbegin", createAlert);
};

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var data = {
    email: email,
    password: password,
  };

  fetch("https://45.79.16.197:8081/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }).then((response) => {
    if (response.ok) {
      response.json().then((responseData) => {

        const token = responseData.data.token;
        const nome = responseData.data.userData.nome;
        const curso = responseData.data.userData.curso;

        localStorage.setItem("data", JSON.stringify(token));

        const expirationTime = new Date().getTime() + 2400000;
        localStorage.setItem("tokenExpiration", expirationTime);

        alerta("success", "Login realizado com sucesso!");

        const nomeCoordenadorInput = document.getElementById("nome_coordenador");
        nomeCoordenadorInput.value = nome;

        const cursoInput = document.getElementById("curso");
        cursoInput.value = curso;
      });
    } else {
      alerta(
        "danger",
        "Credenciais inválidas. Por favor, faça login para enviar a solicitação de projeto."
      );
    }
  });
});