import { Formulario } from "./Formulario.js";
import { Paciente } from "./Paciente.js";

const formulario = new Formulario();
const paciente = new Paciente();

function cadastrarUsuario(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const idade = Number(document.getElementById("idade").value);
  const peso = Number(document.getElementById("peso").value);
  const altura = Number(document.getElementById("altura").value);
  const genero = document.querySelector('input[name="genero"]:checked').value; //Captura do input pela propriedade name
  const gorduracorporal = Number(document.getElementById("gorduracorporal").value);

  paciente.cadastrarUsuario(nome, idade, peso, altura, genero, gorduracorporal);
}

function listarUsuario(e) {
    e.preventDefault();

    const cadastrarUsuario = document.getElementById("");
    cadastrarUsuario.innerHTML
 }
