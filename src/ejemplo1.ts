export class Person{
    constructor(public name: string, private age: number){}
    static saludar(){
        console.log("Hola mundo");
    }

    mostrarInfo(){
        console.log(`Usuario: ${this.name}\nEdad: ${this.age}`);
    }
}