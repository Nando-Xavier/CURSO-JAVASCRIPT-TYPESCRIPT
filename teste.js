// const { urlencoded } = require("body-parser");

const uri = 'https://mozilla.org/?x=шеллы';
const encoded = urlencoded(uri);
console.log(encoded);