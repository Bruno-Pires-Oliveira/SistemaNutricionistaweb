class Paciente {
  constructor(nome, idade, peso, altura, genero) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.genero = genero;
  }

  calcularImc() {
    const imc = this.peso / (this.altura * this.altura);
    return imc;
  }

  taxaMetabolicaBasal() {
    const homens =
      88.36 + 13.4 * this.peso + 4.8 * this.altura - 5.7 * this.idade;
    const mulheres =
      447.6 + 9.2 * this.peso + 3.1 * this.altura - 4.3 * this.idade;
    if (this.genero == "masculino") {
      return homens;
    } else {
      return mulheres;
    }
  }

  porcentualdeGorduraCorporal() {
    const homens = 1.2 * this.calcularImc() + 0.23 * this.idade - 16.2;
    const mulheres = 1.2 * this.calcularImc() + 0.23 * this.idade - 5.4;
    if (this.genero == "masculino") {
      return homens;
    } else {
      return mulheres;
    }
  }

  pesoIdeal() {
    const homens = 50 + 2.3(this.altura - 60);
    const mulheres = 45.5 + 2.3 * (this.altura - 60);
    if (this.genero == "masculino") {
      return homens;
    } else {
      return mulheres;
    }
  }

  massaMagra() {
    const massamagra =
      this.peso - (this.peso * this.porcentualdeGorduraCorporal()) / 100;
    return massamagra;
  }
}

export { Paciente };
