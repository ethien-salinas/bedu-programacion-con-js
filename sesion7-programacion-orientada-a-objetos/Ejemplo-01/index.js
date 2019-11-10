class Persona {

    constructor(edad, traje, colorZapatos, deporte){
        this.edad = edad;
        this.traje = traje;
        this.colorZapatos = colorZapatos;
        this.deporte = deporte;
    }

    hablar(idioma){
        return `Se hablar ${idioma}`;
    }

    jugar(){
        return `y practico ${this.deporte}`
    }

}

const persona3 = new Persona(36, "blanco", "rojos", "box");
const persona2 = new Persona(17, "negro", "morados", "natación");
const persona1 = new Persona(26, "azul", "verdes", "skating");

console.log(persona3)
console.log(persona1.hablar("inglés"), persona1.jugar())
console.log(persona2.hablar("frances"), persona2.jugar())
