//PRE ENTREGA 2


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

const validarCompra = (input, arr) => {
  const productoEncontrado = arr.find(
    (producto) => producto.nombre === input
  );
  if (productoEncontrado) {
    alert(`Muchas gracias por comprar ${productoEncontrado.nombre}! el precio es de ${productoEncontrado.precio}`);
  } else {
    alert("El producto no se encuentra en la lista");
  }
};

const validacionUS = () => {
  let usuario = "Fede99";
  let contraseña = "12345";
  alert("Bienvenido a Sneaker ID, por favor introduzca su usuario y contraseña");
  
  for (let i = 3; i > 0; i--) {
    let ingresoUsuario = prompt("Usuario: ");
    let ingresoContraseña = prompt("Contraseña: ");
    
    if (ingresoUsuario === usuario && ingresoContraseña === contraseña) {
      alert("Hola " + usuario + " ,bienvenido a la tienda oficial de Sneaker ID.");
      let seleccionZapa = prompt("¿Qué desea comprar?");
      validarCompra(seleccionZapa, sneakers);
      return;
    } else {
      alert("Usuario o contraseña incorrecto, te quedan " + i + " intentos, vuelve a intentarlo");
    }
  }
  
  alert("Te has quedado sin intentos, vuelve a intentarlo más tarde...");
};

validacionUS();






