function CartaImpar(mazo) {
  return mazo.some(numero => numero % 2 !== 0);
}

console.log(CartaImpar([3, 2, 6, 4, 8])); 
// => true
