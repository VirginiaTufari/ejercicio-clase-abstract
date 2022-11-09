// Iniciar proyecto NPM
// •Implementar las siguientes clases con las
// variables y métodos que crea necesarios:
//     •AutoCiudad
//     •AutoDeportivo
//     •Camioneta
// •Abstraer elementos en común entre dichas
// clases → pasarlos a una clase abstracta, y
// que las tres clases extiendan de ella
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehiculo = /** @class */ (function () {
    function Vehiculo() {
        this.velocidadActual = 0;
        this.estaPrendido = false;
    }
    Vehiculo.prototype.prender = function () {
        this.estaPrendido = true;
    };
    Vehiculo.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    return Vehiculo;
}());
var AutoCiudad = /** @class */ (function (_super) {
    __extends(AutoCiudad, _super);
    function AutoCiudad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoCiudad.prototype.acelerar = function () {
        this.velocidadActual += 10;
    };
    return AutoCiudad;
}(Vehiculo));
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoDeportivo.prototype.acelerar = function () {
        this.velocidadActual += 20;
    };
    return AutoDeportivo;
}(Vehiculo));
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Camioneta.prototype.acelerar = function () {
        this.velocidadActual += 5;
    };
    return Camioneta;
}(Vehiculo));
var nuevoAutoCiudad = new AutoCiudad();
var nuevoAutoDeportivo = new AutoDeportivo();
var nuevaCamioneta = new Camioneta();
console.log(nuevoAutoCiudad);
console.log(nuevoAutoDeportivo);
console.log(nuevaCamioneta);
nuevoAutoCiudad.prender();
nuevoAutoCiudad.acelerar();
nuevoAutoDeportivo.prender();
nuevoAutoDeportivo.acelerar();
nuevaCamioneta.prender();
nuevaCamioneta.acelerar();
console.log(nuevoAutoCiudad);
console.log(nuevoAutoDeportivo);
console.log(nuevaCamioneta);
