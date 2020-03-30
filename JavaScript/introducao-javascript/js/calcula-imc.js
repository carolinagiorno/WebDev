var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    pesoValido = validaPeso(peso);
    if(pesoValido == false){
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    alturaValida = validaAltura(altura);
    if (alturaValida == false){
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){
  if (peso <= 1 || peso >= 400) {
    console.log("Peso inválido!");
    return false;
  } else {
    return true;
  }
}

function validaAltura(altura){
  if (altura <= 0.3 || altura >= 3) {
    console.log("Altura inválida!");
    return false;
  } else {
    return true;
  }
}
