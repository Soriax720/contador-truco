export class Contador {
    numero = 0;
    nombre;

    agregar(cantidad = 1){
        this.numero += cantidad;
        console.log(this.numero)
    }

    restar(cantidad = 1){
        this.numero = Math.max(0, this.numero-cantidad);
        console.log(this.numero)
    }
    reset(){
        this.numero = 0;
    }
}