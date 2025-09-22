function ElegirPosicion(baraja, carta) {
  return  baraja.indexOf(carta);
}

console.log(ElegirPosicion([9, 7, 3, 2], 2));
// => 3
