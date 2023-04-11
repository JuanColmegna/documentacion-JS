// así se intentaba hacer una "clase" antes del ES6

const fher = {
    nombre: 'Fernado',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`); //cuando se hace una referencia al mismo objeto se utiliza this
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`); //cuando se hace una referencia al mismo objeto se utiliza this
    }
}

fher.imprimir();
pedro.imprimir();

// para hacer objetos con las mismas propiedades y los mismos métodos

function Persona(nombre, edad){ //se utiliza UpperCamelCase (se puede utilizar valores con efecto ej edad = 10 -ES6-)
    this.nombre = nombre,
    this.edad   = edad,
    this.imprimir = function() { //así se implementa el método
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`); //cuando se hace una referencia al mismo objeto se utiliza this
    }
}

const maria = new Persona('María', 35);
const melissa = new Persona('Melissa', 35);
console.log(maria);
maria.imprimir();