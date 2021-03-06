# 馃崑 Ejercicio del M谩ster Frontend de Lemoncode 馃崑

## Laboratorio M贸dulo 02 - Lenguajes

## Contenido del M贸dulo 02
- Javascript ES5.
- Javascript ES6 + Propuestas principales ES7.
- Typescript.
- Lodash.

## Descripci贸n del ejercicio

### 1. Array operations

#### Head

Implementa una funci贸n `head` (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

```js
const head = (/* array */) => {}; // Implementation here.
```

#### Tail

Implementa una funci贸n `tail` (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

```js
const tail = (/* array */) => {}; // Implementation here.
```

#### Init

Implementa una funci贸n `init` (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el 煤ltimo. Utiliza los m茅todos que ofrece Array.prototype.

```js
const init = (/* array */) => {}; // Implementation here.
```

#### Last

Implementa una funci贸n `last` (inmutable), tal que, dado un array como entrada devuelva el 煤ltimo elemento.

```js
const last = (/* array */) => {}; // Implementation here.
```

### 2. Concat

Implementa una funci贸n `concat` (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenaci贸n de ambos. Utiliza rest / spread operators.

```js
const concat = (a, b) => {}; // Implementation here.
```

#### Opcional

Implementa una versi贸n del ejercicio anterior donde se acepten m煤ltiples arrays de entrada (m谩s de 2).

### 3. Clone Merge

#### Clone

Implementa una funci贸n `clone` que, a partir de un objeto de entrada `source` devuelva un nuevo objeto con las propiedades de `source`:

```js
function clone(source) {
  // Implementation here.
}
```

#### Merge

Implementa una funci贸n `merge` que, dados dos objetos de entrada `source` y `target`, devuelva un nuevo objeto con todas las propiedades de `target` y de `source`, y en caso de propiedades con el mismo nombre, `source` sobreescribe a `target`.

Por ejemplo, dados estos 2 objetos:

```js
const a = { name: "Maria", surname: "Iba帽ez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
```

el resultado de mezclar `a` sobre `b` ser铆a:

```js
merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Iba帽ez", country: "SPA"}
```

TIP: Puedes usar la funci贸n "clone" del apartado A.

```js
function merge(source, target) {
  // Implementation here.
}
```

### 4. Read Books

Crea una funci贸n isBookRead que reciba una lista de libros y un t铆tulo y devuelva si se ha le铆do o no dicho libro.
Un libro es un objeto con `title` como string y `isRead` como booleano. En caso de no existir el libro devolver `false`
TIP: Existe un m茅todo de Array.prototype que te ayudar谩 a buscar seg煤n un patr贸n.

```js
function isBookRead(books, titleToSearch) {
  // Implementation here
}
```

#### Ejemplo

```js
const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canci贸n de hielo y fuego", isRead: false },
  { title: "Devastaci贸n", isRead: true },
];

console.log(isBookRead(books, "Devastaci贸n")); // true
console.log(isBookRead(books, "Canci贸n de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
```

#### Opcional

Utiliza Typescript para a帽adir los tipos adecuados.

### 5. Slot Machine

El objetivo de este ejercicio es crear una m谩quina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada m谩quina tragaperras (instancia) tendr谩 un **contador de monedas** que autom谩ticamente se ir谩 incrementando conforme vayamos jugando.

Cuando se llame al **m茅todo play** el n煤mero de monedas se debe incrementar de forma autom谩tica y debe generar **tres booleanos aleatorios** que representar谩n el estado de las 3 ruletas. El usuario habr谩 ganado en caso de que los tres booleanos sean `true`, y por tanto deber谩 mostrarse por consola el mensaje:

```js
"Congratulations!!!. You won <n煤mero de monedas> coins!!";
```

y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la m谩quina.
En caso contrario deber谩 mostrar otro mensaje:

```js
"Good luck next time!!".
```

#### Ejemplo de uso

```js
class SlothMachine {
  /* ... */
}

const machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
```

**Gu铆a de inicio**
1. Descarga o clona el repositorio.
2. Accede a la carpeta '03-playground-exercises'.
4. Instala las dependencias locales con `npm install`.
3. Ejecuta `npm start` para arrancar el servidor.
