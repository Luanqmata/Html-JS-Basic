var amanha = new Date();
amanha.setDate(amanha.getDate() + 1);

var formatoAmanha = amanha.toISOString().split('T')[0];

document.getElementById("agendamento").setAttribute("min", formatoAmanha);