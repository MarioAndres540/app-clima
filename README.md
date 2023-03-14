secuencia de comandos para hacer git push

1) git add .
2) git commit -m "mensaje"
3) git push

*******
npm install webpack webpack-cli -D / nos serive para instalar webpack y cli nos permite ejecutar los comandos desde la terminal

npm install -g webpack / para instalar webpack de forma global

npm install --save-dev @babel/core @babel/preset-env / 

npm install --save-dev babel-loader /

npm install --save-dev css-loader style-loader / 

npm install --save-dev sass-loader node-sass / nos ayuda a instlar los paquetes de sass

*Tip:* Antes de empezar cualquier cambio, hacer ``git pull`` para traer los cambios que hayan en el remote del repositorio.

# Actividad para 19 de Enero

- Consulta: El modelo de caja, cómo funciona, y añadir ejemplos con lo que ya has construido en el app-clima.
- Según con lo consultado, eliminar el margin-top que está en el archivo main.css y añadir un espaciado interno al .main-container
- Consulta: cómo con css podemos gestionar el responsive design, Qué son los media queries, Cuales son las resoluciones más comunes para un aplicativo de 3 resoluciones (Mobile, Tablet, Desktop)
- Consulta: Por qué REM es mas usable que usar Pixeles como unidades de medida.
- Consulta:  qué es una peticiòn http y cómo funcionan las APIs. Luego de tener un material base, hacer una propuesta de cómo se va a actualizar la información del aplicativo usando una API. Pista: Cómo con una petición fetch podemos llamar data de una API.
- Consulta: Cuales son los métodos mas comunes de DOM manipulation con Javascript.

![Resonsabilidad](Diseños/responsabilidad.webp)

# Actividad para el 26 de enero

-Consulta: Segun lo averiguado de manipulacion del DOM, consultar como pintar los datos de una API, en los elementos del html ok
-Consulta: Como guardar un aAPI Key en una variable de entorno, y porque es mas seguro? ok
-Consulta: Ques es GITIGNORE y como nos ayuda prevenir publicar datos sensibles (ED) ok
-Consulta: Que es asincronismo en Js y que diferente metodos existen. ok
-Consulta: que es callback help? ok
-Consulta: Que es hoinsting, event bubbling,scope,prototype,use strict ok

Ejercicios: Tratar de pintar una ciudad con la data real de la API = pendiente
Ejercicio: hacer un mobil media-query se renderice una card por linea y tablet de a dos, y en desktop 3, ok
Ejercicio: iniciar NPM en repositorio. ok

# Actividad para el 9 de febrero

crear servidor, compilar el sass en un punto css, utilizar  variables de entorno

--.map, .reduce, .filter "estudiar estos array"

# repasar conceptos visto y de javascript
Const: no pueden ser modificadas ni re-declaradas
 let: pueden ser modificadas, pero no re-declaradas
 var: puede ser modificada y redeclarada dentro de su ambito
 ---------------------------------------------------------------
tipos de dtos en javascript :
Undefined. sin definir
Boolean. true o false
Number. numeros
String. letras
BigInt. numero muy grandes
Symbol. es un objeto integrado cuyo constructor devuelve un symbol
Null. nullos
Object. objetos
-------------------------------------------
falsy y truthy values:
Los valores verdaderos son valores que se evalúan como verdaderos en un contexto booleano. Los valores falsos son valores que se evalúan como falsos en un contexto booleano . Los valores falsos incluyen secuencias vacías (listas, tuplas, cadenas, diccionarios, conjuntos), cero en cada tipo numérico, Ninguno y Falso.
--------------------------------------------------
scope:
El scope puede definirse como el alcance que una variable tendrá en tu código
-----------------------------------------------------
declara objetos en js:
los bojetos tiene atributos y sus funciones.

atributos: partes del objeto ejm: color,tamaño,materiasles.
funciones: lo que hace ejmlo: transporta, corre,para etc

const persona = {
    FirstName: "Conchita",
    lastName: "de tu madre",
    age: 50,
    eyeColor, "green"

    fullName : function(){
        return this.FirstNAme + " " + this.lastName;
    }
};
--------------------------------------------------------
funciones flecha

es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

funcion tradicional


function (a,b){
    return a + b + 200;
}

funcion flecha

(a,b) => a+ b + 200;

--------------------------------------------
spreat y rest operator

El operador rest se utiliza para poner el resto de algunos valores específicos suministrados por el usuario en un arreglo de JavaScript.

...tusValores

simbolizan el operador rest.

El operador spread (...) le ayuda a expandir los iterables en elementos individuales.
Un operador spread es efectivo sólo cuando se usa dentro de literales de arreglo, llamadas a funciones u objetos de propiedades inicializadas.

const miNombre = ["Sofia", "es", "mi"];
const sobreMi = ["jaramillo", ...miNombre, "nombre."];

console.log(sobreMi);

// La invocación anterior devolverá:
[ "jaramillo", "Sofia", "es", "mi", "nombre." ]

---------------------------------------------------------------
metodos de arry

El método de JavaScript toString()convierte una matriz en una cadena de valores de matriz (separados por comas).

Ejemplo

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

El join()método también une todos los elementos de la matriz en una cadena.

Se comporta como toString(), pero además puedes especificar el separador:

Ejemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");

Pop de matriz de JavaScript ()
El pop()método elimina el último elemento de una matriz:

Ejemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

El pop()método devuelve el valor que "salió":

Ejemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();

El push()método agrega un nuevo elemento a una matriz (al final):

Ejemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

El push()método devuelve la nueva longitud de la matriz:

Ejemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");

Cambio de matriz de JavaScript ()
El shift()método elimina el primer elemento de la matriz y "cambia" todos los demás elementos a un índice más bajo.

Ejemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

El shift()método devuelve el valor que fue "desplazado":

Ejemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();

El unshift()método agrega un nuevo elemento a una matriz (al principio) y "desplaza" los elementos más antiguos:

Ejemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");

El unshift()método devuelve la nueva longitud de la matriz:

Ejemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");

Se accede a los elementos del arreglo usando su número de índice :
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";

Longitud de matriz de JavaScript
La lengthpropiedad proporciona una manera fácil de agregar un nuevo elemento a una matriz:

Ejemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";

Eliminación de matriz de JavaScript ()
Advertencia !
Los elementos de la matriz se pueden eliminar mediante el operador de JavaScript delete.

Usando deletehojas undefinedde agujeros en la matriz.

Utilice pop() o shift() en su lugar.

Ejemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];

Fusionando (Concatenando) Matrices
El concat()método crea una nueva matriz fusionando (concatenando) matrices existentes:

Ejemplo (fusión de dos matrices)
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

El concat()método puede tomar cualquier número de argumentos de matriz:

Ejemplo (fusión de tres matrices)
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);

El concat()método también puede tomar cadenas como argumentos:

Ejemplo (Fusionar una matriz con valores)
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 

Matrices de empalme y corte
El splice()método agrega nuevos elementos a una matriz.

El slice()método corta una parte de una matriz.

Empalme de matriz de JavaScript ()
El splice()método se puede usar para agregar nuevos elementos a una matriz:

Ejemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

El primer parámetro (2) define la posición en la que se deben agregar (empalmar) nuevos elementos.

El segundo parámetro (0) define cuántos elementos se deben eliminar .

El resto de parámetros ("Limón", "Kiwi") definen los nuevos elementos a añadir .

El splice()método devuelve una matriz con los elementos eliminados:

Ejemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");

Usando splice() para eliminar elementos
Con una configuración de parámetros inteligente, puede usar splice()para eliminar elementos sin dejar "agujeros" en la matriz:

Ejemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);

El primer parámetro (0) define la posición en la que se deben agregar (empalmar) nuevos elementos.

El segundo parámetro (1) define cuántos elementos se deben eliminar .

El resto de los parámetros se omiten. No se añadirán nuevos elementos.

Segmento de matriz de JavaScript ()
El slice()método corta una parte de una matriz en una nueva matriz.

Este ejemplo corta una parte de una matriz a partir del elemento de matriz 1 ("Naranja"):

Ejemplo
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);

Nota
El slice()método crea una nueva matriz.

El slice()método no elimina ningún elemento de la matriz de origen.

Este ejemplo corta una parte de una matriz a partir del elemento de matriz 3 ("Apple"):

Ejemplo
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);

El slice()método puede tomar dos argumentos como slice(1, 3).

Luego, el método selecciona elementos desde el argumento inicial y hasta (pero sin incluir) el argumento final.

Ejemplo
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

ToString automático ()
JavaScript convierte automáticamente una matriz en una cadena separada por comas cuando se espera un valor primitivo.

Este es siempre el caso cuando intenta generar una matriz.

Estos dos ejemplos producirán el mismo resultado:

Ejemplo
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;





