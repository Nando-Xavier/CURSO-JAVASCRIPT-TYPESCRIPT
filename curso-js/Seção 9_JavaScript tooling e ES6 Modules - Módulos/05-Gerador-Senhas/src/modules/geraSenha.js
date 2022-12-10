function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}



const maiuscula = () => String.fromCharCode(rand(65, 91));
const minuscula = () => String.fromCharCode(rand(97, 123));
const numero = () => String.fromCharCode(rand(48, 58));
const simbolo = () => {
  const frame = rand(1, 5);
  if (frame === 1)return String.fromCharCode(rand(33, 48));
  if (frame === 2)return String.fromCharCode(rand(58, 65));
  if (frame === 3)return String.fromCharCode(rand(91, 97));
  if (frame === 4)return String.fromCharCode(rand(123, 127));
};

export default function geraSenha(qtd, mai, min, num, sbl) {
  const senha = [];
  qtd = +qtd
  externo: for (let i = 0; i < qtd; i++) {
    if (+senha.length >= qtd) break externo;
    mai && senha.length < qtd && senha.push(maiuscula());
    min && senha.length < qtd && senha.push(minuscula());
    num && senha.length < qtd && senha.push(numero());
    sbl && senha.length < qtd && senha.push(simbolo());
   
  }
  for(let i = senha.length - 1; i >= 0; i--){
    const j = rand(0, senha.length);
    [senha[i], senha[j]] = [senha[j], senha[i]]
  }
  return senha.join("");
}


