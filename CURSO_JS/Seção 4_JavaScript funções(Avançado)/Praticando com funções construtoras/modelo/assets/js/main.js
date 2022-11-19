

function Calculadora() {
  this.display = document.querySelector('.display');

  this.btnParaDisplai = valor=>this.display.value += valor;

  this.iniciar = () => {
    this.clickBotoes()
  }
  this.clickBotoes = () => {
    document.addEventListener('click', (ev) => {
      const el = ev.target
      if (el.classList.contains('num1') || el.classList.contains('operador')) this.btnParaDisplai(el.innerText); 
      if (el.classList.contains('limpar')) this.btnParaDisplai(this.display.value = "");
      if (el.classList.contains('igual') && this.display.value !== "") {
        const conta = this.display.value
        this.btnParaDisplai(this.display.value = "");
        this.btnParaDisplai(eval(conta));
      };
      if (el.classList.contains('apagar')) {
        const apagar = this.display.value.slice(0, -1)
        this.btnParaDisplai(this.display.value = "")
        this.btnParaDisplai(apagar)
      };
    })
  };
}

    
const cauculadora = new Calculadora()
cauculadora.iniciar()
