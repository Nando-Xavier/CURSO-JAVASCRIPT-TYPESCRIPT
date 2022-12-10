function random(mim=1, max=6) {
    return Math.floor(Math.random() * (max - mim) + mim) * 1000
}

function espera(msg, tempo){
    return new Promise((resolve, reject)=>{
         
        setTimeout(() => {
            if (typeof msg !== "string") reject("ERROR")
            resolve(msg)
        }, tempo);
    })
}

// espera("faze-1", random()).then(valor=>{
//     console.log(valor)
//     return espera("Faze-2", random())
// }).then(valor=>{
//     console.log(valor);
//     return espera("Faze-3", random())
// }).then(valor=>console.log(valor))

async function sincrona() {
    try {
        const fase1 = await espera("Faze-1", random())
    console.log(fase1);
    const fase2 = await espera("Faze-2", random())
    console.log(fase2);
    const fase3 = await espera("Faze-3", random())
    console.log(fase3);
    } catch (error) {
        console.log(error);
    }
}

sincrona()

// exemplo de promise pendente
// const teste1 = espera("me chamo fernando", 4000)
// console.log(teste1);
// setTimeout(()=>console.log(teste1), 6000)