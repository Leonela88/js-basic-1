//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida al bootcamp Femcoders de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log("Bienvenida al bootcamp Femcoders de Factoría F5")


//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí
const bandAlbum = "Gorillaz";
const releaseYear = 2001;
let virtualBand = true;
let genre = null;
let numberOfConcerts = undefined;
const gorillazAlbums = {
  "Demon Days": 2005,
  "Plastic Beach": 2010,
  "The Fall": 2011,
  "Humanz": 2017,
  "The Now Now": 2018,
  "Song Machine, Season One: Strange Timez": 2020,
  "Cracker Island": 2023
};

const gorillazMembers = [ "2-D", "Murdoc Niccals", "Noodle", "Russel Hobbs"];

console.log(`El primer Album de la banda Gorillaz se tituló ${bandAlbum}`);
console.log(`Año de lanzamiento ${releaseYear}`);
console.log(`virtualband ${virtualBand}`);
console.log(`Género ${genre}`);
console.log(`Cantidad de veces que se han presentado en conciertos ${numberOfConcerts}`);
console.log("Discografía:", gorillazAlbums); 
console.log("Miembros:", gorillazMembers);  




//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí

const postres = ["Helado","Tarta","Pastel"]
console.log("Postres:", postres);

//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí

const coder={
    name: "Leonela",
    age: 37,
};

console.log(coder);


//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.

//Escribe tu código aquí

console.log("bandAlbum es de tipo:", typeof bandAlbum);          
console.log("releaseYear es de tipo:", typeof releaseYear);      
console.log("virtualBand es de tipo:", typeof virtualBand);      
console.log("genre es de tipo:", typeof genre);             
console.log("numberOfConcerts es de tipo:", typeof numberOfConcerts);
console.log("gorillazAlbums es de tipo:", typeof gorillazAlbums);  
console.log("gorillazMembers es de tipo:", typeof gorillazMembers); 



//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí
let number1=13;
let number2=4;

let addition= (number1+number2);
console.log(`El resultado de la suma es: ${addition}`);


//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí



let _num1=150;
let _num2=25;

let subst= (_num1-_num2);
console.log(`El resultado de la resta es: ${subst}`);


//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let _numb1=15;
let _numb2=15;

let multiplication= (_numb1*_numb2);
console.log(`El resultado de la multiplicación es: ${multiplication}`);




//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let $num1=850;
let $num2=2;

let division=($num1/$num2);
console.log(`El resultado de la división es: ${division}`);

//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí
let valor= 1;
let valor1=2;

let equal=(valor === valor1);
console.log(equal);

// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

let _valor= 1;
let _valor1=2;

let _equal= (_valor != _valor1);
console.log(_equal);


//Ejercicio 11: completa el ejercicio

let num1 = 15
let num2 = 20

let comparacion =(num1 < num2) //Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log(comparacion);


//Ejercicio 12: completa el ejercicio

let num3 = 1
let num3AsString = "1"

let result =(num3 === num3AsString ); //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result) 


//Ejercicio 13: completa el ejercicio

let num4 = 1
let num4AsString = "1"

let result2 =(num4 == num4AsString); //Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
console.log(result2)



//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí

const firstName="Leonela";
const surname="Rivas";

const fullName=(firstName + " " + surname);
console.log(fullName);



//OPERADORES DE LÓGICA 
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

let res =  a < 10 && b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res)

let res2 = a < 10 && b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

let res3 = a == 5 && b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = a == 6 || b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let res5 = a == 0 || b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res6 = a == 6 || b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6) 
