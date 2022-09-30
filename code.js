let Nombre = prompt("Ingrese un nombre de usuario");

alert("Hola " + Nombre + " Disfrute la compra");
let Precio = 0;

let articulo1 = 100;
let articulo2 = 200;
let articulo3 = 300;
let articulo4 = 400;
let articulo5 = 500;
let articulo6 = 600;
let corte = 0;

while (corte == 0) {
    let opcion = parseInt(prompt("Seleccione 1.-Para comprar \nSeleccione 2.-Para aplicar descuentos\nSeleccion 3.-Para seleccionar metodos de pago\nSeleccione 4.-Para salir"));
    switch (opcion) {
        case 1:
            let compra = 0;
            let flag = 0;
            while (flag == 0) {
                let Seleccion = parseInt(prompt("Seleccione 1.-Para adquirir un tv 20 Pulgadas por $100\nSeleccione 2.-Para adquirir un tv 30 Pulgadas por $200\nSeleccione 3.-Para adquirir un tv 40 Pulgadas por $300\nSeleccione 4.-Para adquirir un tv 40 Pulgadas por $400\nSeleccione 5.-Para adquirir un tv 60 Pulgadas por $500\nSeleccione 6.-Para adquirir un tv 70 Pulgadas por $600"));

                switch (Seleccion) {
                    case 1:
                        Precio = SumaProductos(articulo1, Precio);
                        break;
                    case 2:
                        Precio = SumaProductos(articulo2, Precio);
                        break;
                    case 3:
                        Precio = SumaProductos(articulo3, Precio);
                        break;
                    case 4:
                        Precio = SumaProductos(articulo4, Precio);
                        break;
                    case 5:
                        Precio = SumaProductos(articulo5, Precio);
                        break;
                    case 6:
                        Precio = SumaProductos(articulo6, Precio);
                        break;
                    default: alert("Opcion invalida");
                        break;
                }
                alert("Usted lleva gastando un total de: $" + Precio);
                flag = prompt("Desea seguir comprando ? seleccione 0 para seguir comprando o seleccione el 1 para salir");
            }
            break;
        case 2:
            Precio = AplicarDescuentos(Precio);
            alert("Su nuevo precio a pagar es: $" + Precio);
            break;
        case 3:
            Precio = MetodoDePago(Precio);
            break;
        case 4:
            corte = 1;
            break;
        default: alert("Opcion invalida");
            break;
    }
    alert("Gracias por su compra " + Nombre + " Vuelva pronto");
}


function AplicarDescuentos(total) {
    if (total < 500) {
        total = total - (total * 0.1);
    }
    else if (total < 700) {
        total = total - (total * 0.2);
    }
    else {
        total = total - (total * 0.3);
    }
    return total;
}

function SumaProductos(precio, total) {
    total = precio + total;
    return total;
}

function MetodoDePago(total) {
    alert("Seleccione un metodo de pago teniendo en cuenta que si compra con debito no tendra recargo, de lo contrario abonando con credito tendra 3 cuotas sin interes y si desea hacerlo en las sera un %20 de recargo");
    let cort = 0;
    while (cort == 0) {
        let met = parseInt(prompt("Seleccione 1.- Para abonar con debito\nSeleccione 2.- Para abonar Credito"));

        if (met == 1) {
            alert("El total a pagar es de: $" + total);
            cort = 1;
        }
        else if (met == 2) {
            let cuotas = parseInt(prompt("Seleccione la cantidad de cuotas que desee hacer, si lo hace en 3 no tendra interes alguno de lo contrario el interes sera de una %20"));
            if (cuotas <= 3) {
                let pagar = total / cuotas;
                alert("Usted pagara un total de: $" + total + " En: " + cuotas + " De: $" + pagar + " Cada couta");
            }
            else {
                total = total + (total * 0.2);
                pagar = total / cuotas;
                alert("Usted pagara un total de: $" + total + " En: " + cuotas + " De: $" + pagar + " Cada couta");
            }
            cort = 1;
        }
        else {
            alert("Seleccion invalida");
        }
    }
    return total;
}