 //Funções recurcivas
function recurciva(max) {
    if (max >= 11290) return
    max++
    console.log(max);
    recurciva(max)
}
recurciva(0)

// Funções geradoras

// function* geradoras() {
//   let i = 0;
//   console.log();
//   while (true) {
//     yield i;
//     i++;
//   }
// }
// const g1 = geradoras()
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);

    

