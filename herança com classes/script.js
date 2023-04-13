class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + " ligado");
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + " desligado");
      return;
    }

    this.ligado = false;
  }
}

class SmartPhone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }

  ligar() {
    console.log("Olha , você alterou o método ligar ");
  }
}

const t1 = new Tablet("ipad", true);
t1.ligar();
const s1 = new SmartPhone("motorola", "preto", "7 play");
s1.ligar();
console.log(s1);
