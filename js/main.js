import { Formulario } from "./Formulario.js";
import { Paciente } from "./Paciente.js";

const formulario = new Formulario();
const paciente = new Paciente();

document.getElementById("Cadastro").addEventListener("click", cadastrarUsuario);
document.getElementById("pacientes1").addEventListener("change", dadosUsuario);

function cadastrarUsuario(e) {
  e.preventDefault();

  const nome = document.getElementById("usuarionome").value;
  const idade = Number(document.getElementById("usuarioidade").value);
  const peso = Number(document.getElementById("usuariopeso").value);
  const altura = Number(document.getElementById("usuarioaltura").value);
  const genero = document.querySelector('input[name="genero"]:checked').value; //Captura do input pela propriedade name
  formulario.cadastrarUsuario(nome, idade, peso, altura, genero);
  console.log(formulario);
  listarUsuario(e);
  alert("Cadastrado com sucesso");
}

function listarUsuario(e) {
  e.preventDefault();

  const array = formulario.listarUsuario();
  const selectPaciente = document.getElementById("pacientes1");
  selectPaciente.innerHTML = `<option value = ""> Selecione um paciente </option>`;
  array.forEach((paciente, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = paciente.nome;
    selectPaciente.appendChild(option);
  });
}

function dadosUsuario(e) {
  e.preventDefault();
  const ListaDados = document.getElementById("ListaDados");
  const array = formulario.listarUsuario();
  ListaDados.innerHTML = "";

  const index = document.getElementById("pacientes1").value;
  if (index !== "") {
    array.forEach((paciente) => {
      let imc = paciente.calcularImc().toFixed(2);
      let taxaMetabolica = paciente.taxaMetabolicaBasal().toFixed(2);
      let porcentualdeGordura = paciente.porcentualdeGorduraCorporal().toFixed(2);
      let pesoideal = paciente.pesoIdeal().toFixed(2);
      let massa = paciente.massaMagra().toFixed(2);

      let linha = ListaDados.insertRow(0);
      let Cellnome = linha.insertCell(0);
      let Cellidade = linha.insertCell(1);
      let Cellpeso = linha.insertCell(2);
      let Cellaltura = linha.insertCell(3);
      let Cellgenero = linha.insertCell(4);
      let Cellimc = linha.insertCell(5);
      let CelltaxaMetabolica = linha.insertCell(6);
      let CellporcentualdeGordura = linha.insertCell(7);
      let Cellpesoideal = linha.insertCell(8);
      let Cellmassamagra = linha.insertCell(9);
      
      Cellnome.textContent = paciente.nome;
      Cellidade.textContent = paciente.idade;
      Cellpeso.textContent = paciente.peso;
      Cellaltura.textContent = paciente.altura;
      Cellgenero.textContent = paciente.genero;
      Cellimc.textContent = imc;
      CelltaxaMetabolica.textContent = taxaMetabolica;
      CellporcentualdeGordura.textContent = porcentualdeGordura;
      Cellpesoideal.textContent = pesoideal;
      Cellmassamagra.textContent = massa;
    });
  }
}
