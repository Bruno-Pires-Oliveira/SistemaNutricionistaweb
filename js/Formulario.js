import { Paciente } from "./Paciente.js";

class Formulario {
  constructor() {
    this.listaPacientes = [];
  }

  cadastrarUsuario(nome, idade, peso, altura, genero) {
    const usuario = new Paciente(nome, idade, peso, altura, genero);
    this.listaPacientes.push(usuario);
  }

  listarUsuario() {
    return this.listaPacientes;
  }
}

export { Formulario };
