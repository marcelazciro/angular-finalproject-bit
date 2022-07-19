export class Adopcion {
    _id?: number;
    nombre: string;
    especie: string;
    genero: string;

    constructor(nombre: string, especie: string, genero: string) {
        this.nombre = nombre;
        this.especie = especie;
        this.genero = genero;
    }
}