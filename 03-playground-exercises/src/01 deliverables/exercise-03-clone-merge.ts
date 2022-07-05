console.group("************** DELIVERABLE 03 *********************");
console.log("************** Clone Merge *********************");

// CLONE
// Implementa una función clone que, a partir de un objeto de entrada source devuelva 
// un nuevo objeto con las propiedades de source

const testObject: object = { country: "España", city: "Madrid", zipCode: "28001" };

function clone(source: object): object {
  const newObject = Object.assign({}, source)
  return newObject;
}

console.log("CLONE", clone(testObject));

// MERGE
// Implementa una función merge que, dados dos objetos de entrada source y target, 
// devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, 
// source sobreescribe a target.

//Por ejemplo, dados estos 2 objetos:

const a: object = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b: object = { name: "Luisa", age: 31, married: true };

function merge(source: object, target: object): object {
  const newObject = Object.assign({}, target, source)
  return newObject;
}

console.log("MERGE", merge(a, b));

console.groupEnd();