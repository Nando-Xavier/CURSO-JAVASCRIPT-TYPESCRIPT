// document.addEventListener("click", (e) => {
//   const el = e.target;
//   const tag = el.tagName.toLowerCase();
//   if (tag === "a") {
//     e.preventDefault();
//     carregaPagina(el);
//   }
// });

// async function carregaPagina(el) {
//   try {
//     const href = el.getAttribute("href");
//     const response = await fetch(href);
//     const html = await response.text(response);
//     if (response.status < 200 || response.status >= 300)
//       throw new Error(response);
//     carregaResultado(html);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function carregaResultado(response) {
//   const resultado = document.querySelector(".resultado");
//   resultado.innerHTML = response;
// }


 
 
//   fetch("pessoas.json").then(resposta => resposta.json()) 
//  .then(json => carregaDados(json))
 

axios("pessoas.json").then(resposta => {
  carregaDados(resposta.data)
  console.log(resposta);
})

function carregaDados(json) {
  const div = document.querySelector(".resultado")
  const table = document.createElement("table")
  for (const i of json) {
   const tr = document.createElement("tr")
   let td = document.createElement("td")
   td.innerText = i.nome
   tr.appendChild(td)

   let td2 = document.createElement("td")
   td2.innerText = i.email
   tr.appendChild(td2)

   let td3 = document.createElement("td")
   td3.innerText = i.idade
   tr.appendChild(td3)

   table.appendChild(tr)
  }
  console.log(table);
  div.appendChild(table)
  console.log(div);

}