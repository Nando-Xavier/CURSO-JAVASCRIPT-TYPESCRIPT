function aleatorio(mim, max) {
    return Math.floor(Math.random() * (max - mim) + mim) * 1000
}

// function esperaAi(msg, tempo, callback){
//     setTimeout(() => {
//         console.log(msg);
//         console.log(tempo);
//         if(callback) callback()
//     }, tempo);
// }

// esperaAi("Frase 1", aleatorio(1, 5), function(){
//     esperaAi("Frase 2", aleatorio(1, 5), function(){
//         esperaAi("Frase 3", aleatorio(1, 5), function(){
//             esperaAi("Frase 4", aleatorio(1, 5))
//         })

//     })
// })
///////////////////////////////////////

function espera(msg, tempo){
    return new Promise((resolve, reject)=>{
         
        setTimeout(() => {
            if (typeof msg !== "string") {
                reject("ERROR")
                return
            }
            // console.log(msg);
            resolve(msg)
        }, tempo);
    })
}

// espera("Conexão com BD", aleatorio(1, 4)).then(resposta =>{
//     console.log(resposta)
//     return espera("Buscando Dados", aleatorio(1, 4))
// }).then(resposta => {
//     console.log(resposta);
//     return espera("Tratando Dados", aleatorio(1, 4))
// }).then(resposta =>{
//     console.log(resposta);
// }).then(()=>{
//     console.log("Exibindo Dados na Tela");
// })
// .catch(e=>{
//     console.log(e);
// })


// console.log('cchgchgckhgchgcgcghhhhhhhhhhhhcccccccc');

// METODOS PARA PROMISE----Promise.all, Promise.race, Promise.resolve, Promise.reject

//Promise.all() --> Resolve uma ou mais promessas e devolve um array com as resposta das promises
// const promise = [
//     espera("Promise 1", 3000),
//     espera("Promise 2", 500),
//     espera("Promise 3", 1000)
// ]

// Promise.all(promise).then(valor =>{
//     console.log(valor);
// }).catch(error =>{
//     console.log(error);
// })

//Promise.race() --> Entrega o valor da primeira promise resolvida
// Promise.race(promise).then(valor =>{
//     console.log(valor);
// }).catch(error =>{
//     console.log(error);
// })



//Promise.resolve() --> Entrega uma promise resolvida

function baixaPagina() {
    const cache = true
    if(cache) return Promise.resolve("Pàgina em cache")
    else return espera("Baixei a Pàgina")
}

baixaPagina()
.then(dadosPagina =>{
    console.log("RESOLVIDO " + dadosPagina);
})
.catch(e =>{
    console.log("EROOR " + e);
})

//Promise.reject() --> Entrega uma promise rejeitada caso encontre algum error

function baixaPagina2() {
    const cache = true
    if(cache) return Promise.reject("Pàgina em cache")
    else return espera("Baixei a Pàgina")
}

baixaPagina2()
.then(dadosPagina =>{
    console.log("RESOLVIDO " + dadosPagina);
})
.catch(e =>{
    console.log("EROOR " + e);
})