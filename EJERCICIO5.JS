function PrimeraCartaImpar(mazo) {
  return mazo.find(numero => numero % 2 !== 0);
}

console.log(PrimeraCartaImpar([4, 2, 8, 7, 9])); 
// => 7
