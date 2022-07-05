console.group("************** DELIVERABLE 02 *********************");
console.log("************** Concat *********************");

// CONCAT
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, 
// devuelva la concatenación de ambos. Utiliza rest / spread operators.

const fruitArrayTest: string[] = ['fresa', 'naranja', 'arándanos'];
const otherFruitArrayTest: string[] = ['pomelo', 'mandarina', 'piña'];
const anotherFruitArrayTest: string[] = ['frambuesa', 'plátano', 'uvas'];

console.log("Arrays to test functions", fruitArrayTest, otherFruitArrayTest, anotherFruitArrayTest);

const concat = (firstElement: string[], secondElement: string[]) => [...firstElement, ...secondElement];
console.log(concat(fruitArrayTest, otherFruitArrayTest));

// CONCAT OPCIONAL
// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

console.log("************** Concat optional *********************");

const concatMultiple = (...element: string[]) => [...element];
console.log(concatMultiple(...fruitArrayTest, ...otherFruitArrayTest, ...anotherFruitArrayTest));

console.groupEnd();
