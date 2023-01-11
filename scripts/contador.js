export class Contador {
    numero = 0;
    nombre;

    constructor(nombre, containerElement, cuentaInicial = 0){
       this.nombre = nombre;
       this.numero = cuentaInicial;
       containerElement.querySelector("h2").innerText = nombre;
    }

    agregar(cantidad = 1){
        this.numero += cantidad;
        console.log(this.numero,this.nombre);
    }

    restar(cantidad = 1){
        this.numero = Math.max(0, this.numero-cantidad);
        console.log(this.numero);
    }
    reset(){
        this.numero = 0;
    }
}