function CartasSonPares(mazo) {
  return mazo.every(num => num % 2 === 0);
}

console.log(CartasSonPares([2, 4, 6, 7])); 
// => false
