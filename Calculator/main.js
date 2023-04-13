function Calculadora()
return {
  display: document.querySelector('.display'),

  inicia(){
    this.capturaCliques();
    this.capturaEnter();
  },

  capturaEnter(){
    document.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  },

  capturaCliques(){
    document.addEventListener('click', event => {
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizaConta();
    });
  },

  realizaConta(){
    try {
      const conta = eval(this.display.value);

      if(!conta) {
        alert('Conta inválida');
        return;
      }

      this.display.value = conta;
    } catch(e) {
      alert('Conta inválida');
      return;
    }
  },

addNumDisplay(el) {
    this.display.value += el.innerText;
    this.display.focus();
  },

  clear: () => this.display.value = '',
  del: () => this.display.value = this.display.value.slice(0, -1)
}

const calculadora = new Calculadora();
calculadora.inicia();
