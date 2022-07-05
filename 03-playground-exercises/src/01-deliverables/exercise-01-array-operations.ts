console.group("************** DELIVERABLE 01 *********************");
console.log("************** Array operations *********************");

const testArray: number[] = [2, 4, 6, 8, 10];
console.log("Array to test functions", testArray);

// HEAD
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = ([firstElement]: number[]) => firstElement;
console.log("HEAD", head(testArray));

// TAIL
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ([, ...rest]: number[]) => rest;
console.log("TAIL", tail(testArray));

// INIT
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. 
// Utiliza los métodos que ofrece Array.prototype.

const init = (arr: number[]) => arr.slice(0, -1);
console.log("INIT", init(testArray));

// LAST
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (lastElement: number[]) => lastElement[lastElement.length - 1];
console.log("LAST", last(testArray));

console.groupEnd();