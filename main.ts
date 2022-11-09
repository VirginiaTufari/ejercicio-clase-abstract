// Iniciar proyecto NPM
// •Implementar las siguientes clases con las
// variables y métodos que crea necesarios:
//     •AutoCiudad
//     •AutoDeportivo
//     •Camioneta
// •Abstraer elementos en común entre dichas
// clases → pasarlos a una clase abstracta, y
// que las tres clases extiendan de ella

abstract class Vehiculo {
    protected velocidadActual : number;
    private estaPrendido: boolean;
    
    public constructor() {
        this.velocidadActual = 0;
        this.estaPrendido = false;
    }
    abstract acelerar() : void ;
    public prender () : void {
        this.estaPrendido = true;
    }
    public apagar() : void {
        this.estaPrendido = false;
    }
}
class AutoCiudad extends Vehiculo {
    public acelerar(): void {
        this.velocidadActual += 10;
    }
}
class AutoDeportivo extends Vehiculo {
    public acelerar(): void {
        this.velocidadActual += 20;
    }
}
class Camioneta extends Vehiculo {
    public acelerar(): void {
        this.velocidadActual += 5;
    }
}

let nuevoAutoCiudad : AutoCiudad = new AutoCiudad();
let nuevoAutoDeportivo : AutoDeportivo = new AutoDeportivo();
let nuevaCamioneta : Camioneta = new Camioneta();
console.log (nuevoAutoCiudad);
console.log (nuevoAutoDeportivo);
console.log (nuevaCamioneta);
nuevoAutoCiudad.prender();
nuevoAutoCiudad.acelerar();
nuevoAutoDeportivo.prender();
nuevoAutoDeportivo.acelerar();
nuevaCamioneta.prender();
nuevaCamioneta.acelerar();
console.log (nuevoAutoCiudad);
console.log (nuevoAutoDeportivo);
console.log (nuevaCamioneta);

