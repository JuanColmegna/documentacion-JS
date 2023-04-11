
class Rectangulo{
    #area = 0;

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;

        this.#area = base*altura; // si marcamos con # al principio de la propiedad se vuelve una propiedad privada
    }
}

const rectangulo = new Rectangulo(10, 15);



console.log(rectangulo);