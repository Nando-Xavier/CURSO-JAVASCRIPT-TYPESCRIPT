const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const [primeiro,  ,  terceiro,  ,  quinto,  ,  setimo, ...resto] = numeros;
console.log(primeiro, terceiro) // 1 3
console.log(resto);
