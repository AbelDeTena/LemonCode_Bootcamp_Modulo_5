//Datos de entrada
const carrito = [
  {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true,
  },
  {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true,
  },
  {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false,
  },
  {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false,
  },
];

var copia = carrito; // Se usa en el EJERCICIO 2.

//EJERCICIO 1
//  Mostrar el carrito de la compra.
function listar() {
  console.log("EJERCICIO 1 : Mostrar el carrito de la compra.");
  for (i = 0; i < carrito.length; i++) {
    listar(carrito[i]);
  }
  function listar(producto) {
    for (propiedades in producto) {
      console.log(propiedades.toUpperCase() + ": " + producto[propiedades]);
    }
    console.log("---------------------------");
  }
}
//EJERCICIO 2
//  Eliminar el producto con id 54657 del carrito de la compra.
//  Se ha creado una copia del carrito original para que no se vea afectado, y guardado el elemento eliminado en una nueva cadena.
function borrar(borrar) {
  console.log("EJERCICIO 2 : Eliminar un producto del carrito de la compra.");
  for (producto of copia) {
    listar(producto);
  }
  function listar(producto) {
    for (propiedades in producto) {
      if (producto[propiedades] === borrar) {
        var posicion = copia.indexOf(producto);
        var papelera = [];
        papelera.push(copia.splice(posicion, 1));
        console.log("Productos que siguen en el carro:", copia);
        console.log("producto eliminado:", papelera);
      }
    }
  }
}
//EJERCICIO 3
//  Calcular el total del carrito de la compra (el coste de una línea es precio * cantidad).
var acumulado = 0;
function total() {
  console.log("EJERCICIO 3 : Calcular el total del carrito de la compra.");
  var i = 0;
  while (i < carrito.length) {
    parseInt((acumulado += carrito[i]["price"] * carrito[i]["count"]));
    i++;
  }
  console.log(acumulado.toFixed(2), "€");
}
//EJERCICIO 4
// Filtrar por los productos que sean prime.
function filtrar(filtro) {
  console.log("EJERCICIO 4 : // Filtrar los productos que sean prime.");
  var i = 0;
  do {
    listar(carrito[i]);
    i++;
  } while (i < carrito.length);
  function listar(producto) {
    console.log("----Producto PREMIUM----");
    for (propiedades in producto) {
      if (producto[filtro]) {
        console.log(propiedades.toUpperCase() + ": " + producto[propiedades]);
      }
    }
    console.log("__________________");
  }
}
//OPCIONAL 1
// Si todos los productos son prime mostrar un mensaje "Pedido sin gastos de envío", si no "Este pedido
// tiene gastos de envío".
var gastos = true;
function envio() {
  console.log("OPCIONAL 1  : // Gastos de envio.");
  for (producto of carrito) {
    listar(producto);
  }
  function listar(producto) {
    for (propiedades in producto) {
      gastos = gastos && producto["premium"];
    }
  }
  if (gastos) {
    console.log("Pedido sin gastos de envío");
  } else {
    console.log("Este pedido tiene gastos de envío");
  }
}
//OPCIONAL 2
//Mostrar el carrito en un listado de html básico.
var titulo = document.createElement("h1");
titulo.textContent =
  "OPCIONAL 2 : Mostrar el carrito en un listado de html básico";
document.body.appendChild(titulo);
var fragment = document.createDocumentFragment();

carrito.forEach((producto) => {
  var item = document.createElement("ul");
  item.textContent = producto.name;
  fragment.appendChild(item);

  var itemPrice = document.createElement("li");
  itemPrice.textContent = producto.price + "€";
  fragment.appendChild(itemPrice);

  var itemID = document.createElement("li");
  itemID.textContent = "ID:" + producto.id;
  fragment.appendChild(itemID);

  var itemCount = document.createElement("li");
  itemCount.textContent = "Cantidad:" + producto.count;
  fragment.appendChild(itemCount);

  var itemPremium = document.createElement("li");
  var premium = producto.premium == true ? "Si" : "No";
  itemPremium.textContent = "Premium:" + premium;
  fragment.appendChild(itemPremium);
});
document.body.appendChild(fragment);

//OPCIONAL 3
//Aplicar un descuento del 5% si la compra es mayor de 100 €
var descontar = 0;
function descuento(discount) {
  console.log(
    "OPCIONAL 3 : Aplicar un descuento del 5% si la compra es mayor de 100 €."
  );
  for (total of carrito) {
    parseInt((descontar += total["price"] * total["count"]));
  }
  if (descontar > 100) {
    descontar *= 1 - discount;
    console.log(
      "Descuento del ",
      discount * 100,
      "% aplicado. El precio total es de:",
      descontar.toFixed(2),
      "€. "
    );
  } else {
    console.log("El precio total es de:", descontar.toFixed(2), "€. ");
  }
}
listar(); // EJERCICIO 1
borrar(54657); // EJERCICIO 2 - Introducir ID que desea borrar.
total(); // EJERCICIO 3
filtrar("premium"); // EJERCICIO 4 - Introducir atributo que desea filtrar.
envio(); // OPCIONAL 1
descuento(0.05); // OPCIONAL 3 - Introducir importe que desea descontar.
