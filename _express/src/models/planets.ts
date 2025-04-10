import { IPlanets } from "../interfaces";

/* @Planets modello: properties */
export default class Planets implements IPlanets {
    constructor(
        public id: number,
        public name: string,
    ){}
}