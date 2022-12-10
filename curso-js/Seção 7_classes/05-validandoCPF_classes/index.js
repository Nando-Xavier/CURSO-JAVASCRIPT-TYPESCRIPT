class CPF {
    constructor (cpf){
        Object.defineProperty(this, "cpf", {
            value: cpf,
            enumerable: true,
            configurable: false,
            writable: true
        })
    }
    valida (){
        if(!this.cpf) return 
        if(typeof this.cpf !== "string") return 
        if(this.cpf.length < 11 || this.cpf.length > 14) return
        let digito = this.cpf.replace(/\D+/g, "")
        let digito1 = digito.slice(0, -2)
        digito1 = this.criaDigito(digito1)
        const digito2 = this.criaDigito(digito1)
        if (digito === digito2) console.log('CPF Vàlido')
        else console.log('CPF Invàlido')
    }

    criaDigito(valor){
        if (valor.length == 9) {
            const array = Array.from(valor)
            let inicio = array.length + 1
            const array1 = array.reduce((ac, val) => {
                ac += (+val * inicio)
                inicio -- 
                return ac
            }, 0) 
            const digito1 = 11 - (array1 % 11)
            if (digito1 > 9 ) return valor.concat(String('0'))
            else return valor.concat(digito1)
        }
        if (valor.length == 10) {
            const array = Array.from(valor)
            let inicio = array.length + 1
            const array1 = array.reduce((ac, val) => {
                ac += (+val * inicio)
                inicio -- 
                return ac
            }, 0) 
            const digito1 = 11 - (array1 % 11)
            if (digito1 > 9 ) return valor.concat(String('0'))
            else return valor.concat(digito1)
        }
       
    }
}


const a = new CPF("045.507.600-03")
a.valida()