import { Paciente } from "./Paciente.js";

class Formulario {
  constructor() {
    this.listaPacientes = [];
  }

  cadastrarUsuario(nome, idade, peso, altura, genero) {
    const pacientes = new Paciente(nome, idade, peso, altura, genero);
    this.listaPacientes.push(pacientes);
  }

  listarUsuario() {
    return this.listaPacientes;
  }
}

export { Formulario };

