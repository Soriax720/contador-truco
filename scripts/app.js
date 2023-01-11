import {Contador} from "./contador.js";

const p1 = new Contador("Nosotros", document.getElementById("jugador1Container"));
const p2 = new Contador("Ellos", document.getElementById("jugador2Container"));

p1.agregar(5);
p1.reset();
p1.agregar();
p2.agregar(4);
