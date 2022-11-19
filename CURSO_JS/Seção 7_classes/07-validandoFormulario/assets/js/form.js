class Formulario {
    constructor(){
        this.formulario = document.querySelector('.formulario')
        this.eventos = this.eventos()
    }

    eventos(){
        this.formulario.addEventListener("submit", (e)=>{
            this.controleEventos(e)
        })
    }

    controleEventos(e){
        e.preventDefault()
         const campo =  this.validaCampo()
        if (campo) {
            alert("Formulario enviado")
            this.formulario.submit()
        }
    }

    validaCampo (){
        let valida = true
        const input = this.formulario.querySelectorAll('.input')
        
        for (const error of this.formulario.querySelectorAll(".error")) {
            error.remove()
        }

        for (const campo of input) {
            const label = campo.previousElementSibling.innerText
            if (!campo.value) {
                this.criaError(campo, `O campo ${label} não pode ser vazio`)
                valida = false
            }
            if (campo.classList.contains("cpf")) {
                if (!this.validaCPF(campo)) {
                    this.criaError(campo, "O CPF prescisa ser vàlido")
                    valida = false
                }
            }

            if (campo.classList.contains("usuario")) {
                if(!this.validaUsuario(campo)) valida = false
            }

            if (campo.classList.contains("senha")) {
                if (!this.validaSenha(campo)) {
                    valida = false
                }
            }
        }
        return valida
    }

    validaCPF(campo){
       const cpf = new CPF(campo.value)
       return cpf.valida();
    }

    validaUsuario(campo){
        let valida = true
        const valor = campo.value
        
        if (valor.length < 3 || valor.length > 12) {
            this.criaError(campo, "O usuário precisa ter entre 3 e 12 carcteres")
            valida = false
        }
        
        if (!valor.match(/^[a-zA-Z0-9]+$/g)){
            this.criaError(campo, "O usuário so pode conter letras e números")
            valida = false
        }
        return valida

    }

    validaSenha(campo){
        let valida = true

        const senha = campo.value
        const repetSenha = this.formulario.querySelector(".RepetirSenha")
        const valor = repetSenha.value
        if (senha.length < 6 || senha.length > 12) {
            this.criaError(campo, "A senha prescisa ter entre 6 e 12 caractere")
            valida = false
        }
        if (senha !== valor) {
            this.criaError(repetSenha, "As senhas prescisa ser iguais")
            valida = false
        }
        return valida
    }

    criaError(campo, msg){
        const p = document.createElement("div")
        p.innerText = msg
        p.classList.add("error")
        campo.insertAdjacentElement('afterend', p)
    }
}

const form = new Formulario()