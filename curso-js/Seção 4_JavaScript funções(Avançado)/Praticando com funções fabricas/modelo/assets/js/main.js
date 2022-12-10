function cauculadora() {
  return {
    igual: false,
    display: document.querySelector(".display"),

    iniciar() {
      this.clickBotao();
    },

    clickBotao() {
      document.addEventListener("click", (ev) => {
        const el = ev.target;
        if (this.display.value !== "" && el.classList.contains("igual")) {
          let conta = this.display.value;
          conta = eval(conta);
          this.btnParaDisplay((this.display.value = ""));
          this.btnParaDisplay(conta);
          this.igual = true;
        }
        if (el.classList.contains("operador") && this.igual === true) {
          this.igual = false;
        }

        if (el.classList.contains("num1") && this.igual === true) {
          this.btnParaDisplay((this.display.value = ""));
          this.igual = false;
        }

        if (
          el.classList.contains("num1") ||
          el.classList.contains("operador")
        ) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains("limpar")) {
          this.btnParaDisplay((this.display.value = ""));
        }
        if (el.classList.contains("apagar")) {
            const apagar = this.display.value
            this.btnParaDisplay((this.display.value = ""))
            this.btnParaDisplay(apagar.slice(0, -1))
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}
const a = cauculadora();
a.iniciar();
