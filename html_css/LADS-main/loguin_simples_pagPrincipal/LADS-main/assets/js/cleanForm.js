function limparCampos() {
  // Obtém todos os campos do formulário
  var campos = document.getElementById("myForm").getElementsByTagName("input");
  var textarea = document
    .getElementById("myForm")
    .getElementsByTagName("textarea");
  var select = document.getElementById("myForm").getElementsByTagName("select");

  // Itera sobre os campos e limpa os valores
  for (var i = 0; i < campos.length; i++) {
    campos[i].value = "";
  }
  // Limpa o valor do textarea
  for (var i = 0; i < textarea.length; i++) {
    textarea[i].value = "";
  }
  // Define o valor padrão para o select
  for (var i = 0; i < select.length; i++) {
    select[i].selectedIndex = 0;
  }
}
