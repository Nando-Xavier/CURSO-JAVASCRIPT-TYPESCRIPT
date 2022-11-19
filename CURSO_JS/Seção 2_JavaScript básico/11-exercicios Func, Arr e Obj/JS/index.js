function meuScopo() {
  const array = []
  const form = document.querySelector("#form"); //selecionando o formulario
  const resultado = document.querySelector("#resultado")
  form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const nome = form.querySelector('#nome')
    const sobrenome = form.querySelector('#sobrenome')
    const peso = form.querySelector('#peso')
    const altura = form.querySelector('#altura')

    
    array.push({nome:nome.value, sobrenome: sobrenome.value, peso: peso.value, altura: altura.value})  
    console.log(array);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
  })
}

meuScopo();
