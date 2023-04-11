class Persona { //siempre la primera letra de cada palabra en mayúscula -Uppercamelcase-
    
    static _conteo = 0; // las propiedades estaticas no aparecen en el objeto si lo mandamos a consola, aparecen en el prototype
    
    static get conteo(){ //el static se puede utilizar desde Persona y no es necesario que sea desde una instancia
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log(this.nombre); //esto da undefined porque no tiene valores en la clase Persona y si en sus instancias
        console.log('Hola a todos soy un método estatico');
    }

    // viene por defecto el 'use strict'
    nombre = ""; //iniciar las propiedades es opcional
    codigo = "";
    frase  = "";
    comida = "";
    
    constructor(nombre, codigo, frase){ //es un método que se va a ejecutar en el momento en que se llame a una nueva instancia de Persona (RETORNA UNA INSTANCIA DEL OBJETO AUNQUE LE PONGAMOS UN RETURN UNDEFINED)
        // se pueden poner valores por defecto o hacer validaciones acá adentro
        console.log("hola!");
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++; //así sabremos cuántas veces se instanció a persona
    }

    //sets y gets: hay veces que antes de establecer el valor de una propiedad quieren controlar como se establece

    set setComidaFavorita(comida){ //usualmente sólo recibe un argumento - se utiliza para establecer un valor
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){ //se utiliza para recuperar el valor de una propiedad construida
        return `la comida favorita de ${this.nombre} es ${this.comida}`; //se suele retornar algo en los gets
    }



    //se acostumbra que los métodos estén después del constructor
    quienSoy(){
        console.log(`Soy ${this.nombre} y me identidad secreta es ${this.codigo}`)
    }

    miFrase(){
        this.quienSoy(); //se tiene que usar el this para llamar a un método dentro de ótro método
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}     

const spiderman = new Persona('Peter parker', 'Spider', 'Soy tu amigable vecino Spiderman');

const ironman = new Persona('Tony Stark', 'Ironman', 'My name is Ironman');
// console.log(ironman);

spiderman.quienSoy(); //los métodos necesitan los paréntesis para saber que quieren ejecutarlos
// ironman.quienSoy();



// spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pai de cereza de la tía May';

// console.log(spiderman);
// console.log(spiderman.getComidaFavorita)

// Persona._conteo = 2; las propiedades estaticas se pueden cambiar

console.log("conteo estático:", Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = "Hola mundo"; //se pueden definir propiedades estaticas por fuera pero es mejor si lo hacemos directamente en la clase

console.log(Persona.propiedadExterna);
console.log(Persona) //así se puede ver la definición de la clase