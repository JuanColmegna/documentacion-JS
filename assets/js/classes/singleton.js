// los singleton son una instancia unica de mi clase

class Singleton{
    static instancia; //se puede iniciar como propiedad privada (con #) pero se inicializa así para aumentar compatibilidad
    nombre = '';

    constructor(nombre = ''){

        if(!!Singleton.instancia){
            return Singleton.instancia; //aquí corta con el return
        }

        Singleton.instancia = this;
        this.nombre = nombre;

    }

}


const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Black Panther');

console.log(`nombre en la instancia 1 es ${instancia1.nombre}`);
console.log(`nombre en la instancia 2 es ${instancia2.nombre}`);
console.log(`nombre en la instancia 3 es ${instancia3.nombre}`);