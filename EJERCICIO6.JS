function PosicionCartaPar(mazo) {
  return mazo.findIndex(numero => numero % 2 === 0);
}

console.log(PosicionCartaPar([5, 2, 3, 1])); 
// => 1
