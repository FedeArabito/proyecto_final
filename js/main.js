//PRE ENTREGA 1
/* const validacionUS = () => {
  let usuario = "Fede99";
  let contraseña = "12345";
  alert("Bienvenido a Sneaker ID, porfavor introduzca su usuario y contraseña");
  let ingresoUsuario = prompt("Usuario: ");
  let ingresoContraseña = prompt("Contraseña: ");
  if (ingresoUsuario !== usuario && ingresoContraseña!==contraseña) {
      for (let i = 3; i > 0; i--){
      alert("Usuario o contraseña incorrecto, te quedan "+ i+ " intentos, vuelve a intentarlo");
      let ingresoUs2 = prompt("Usuario: ");
      let ingresoCon2 = prompt("Contraseña: ");
      if (ingresoUs2== usuario && ingresoCon2==contraseña) {
        alert("Hola " +usuario+ " ,bienvenido a la tienda oficial de Sneaker ID.");
        return false;
      }
  }
  alert("Te has quedado sin intentos, vuelve a intentarlo mas tarde...")
    
  return false;
}else if(ingresoUsuario == usuario && ingresoContraseña==contraseña){
  alert("Hola " +usuario+ " ,bienvenido a la tienda oficial de Sneaker ID.");
}

}


validacionUS();  */



const sneakers = [
  {
    nombre: "Janowsky",
    precio: 2500
  },
  {
    nombre: "Superstars",
    precio: 6500
  },
  {
    nombre: "Air Jordan",
    precio: 5400
  },
  {
    nombre: "Vans",
    precio: 4400
  }
];


let seleccionZapa = prompt("Que desea comprar?");
// const validarInput = (input, arr) => {
//   input;
//   for (const el of arr) {
//     const nombre = arr.nombre;
//     const precio = arr.precio;
//     if (input == nombre) {
//       return prompt("Genial, " + input + " ha sido agregado a su carrito, el total a pagar es de " + precio)
//     }
//     else{
//       return alert("Lo sentimos no contamos con ese producto")
//     }
//   }
// }
// validarInput(seleccionZapa, sneakers);

function validarCompra(input, arrayProductos) {
  // Buscar el producto en el array
  const productoEncontrado = arrayProductos.find(
    (producto) => producto.nombre === input
  );
  // Si el producto se encuentra
  if (productoEncontrado) {
    // Mostrar mensaje de compra
    alert(`Muchas gracias por comprar ${productoEncontrado.nombre}!`);
  } else {
    // Mostrar mensaje de error
    alert("El producto no se encuentra en la lista");
  }
}

validarCompra(seleccionZapa,sneakers);
