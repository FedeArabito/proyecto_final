//PRE ENTREGA 1
const validacionUS = () => {
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
        break;
      }
    alert("Te has quedado sin intentos, intentalo nuevamente mas tarde");
  }
    
  return false;
}
alert("Hola " +usuario+ " ,bienvenido a la tienda oficial de Sneaker ID.");
}


validacionUS();

/*   // -NO ES PRE ENTREGA -
  const pagoTarjeta=() =>{
  let producto= 250000;
  let interes = producto/100 * 20;
  let total = interes + producto;
  let msj = alert("Hola" +usuario+ " ", "el total de su compra es de $" +producto+" su producto puede ser financiado en: \n 1 cuota sin interes \n 3 cuotas sin interes \n 6 cuotas sin interes \n 12 cuotas sin interes\n ¿En cuantas cuotas desea abonar?");
  let opcion = prompt("");
  switch (opcion) {
    case "1":
      alert("El total a abonar es de $"+producto);
      alert("Gracias por confiar en nosotros! Lo esperamos nuevamente!");
      break;
    
      case "3":
        let cuotaTres = parseFloat(total/3);
        let msj3 = alert("Genial, su total a abonar es de $"+ total+" siendo cada cuota mensual de $"+cuotaTres);
        alert("Gracias por confiar en nosotros! Lo esperamos nuevamente!");
        break;

        case "6":
          let cuotasSeis = parseFloat(total /6);
          let msj6 = alert ("Genial, su total a abonar es de $"+ total+" siendo cada cuota mensual de $"+cuotasSeis);
          alert("Gracias por confiar en nosotros! Lo esperamos nuevamente!");
          break;

          case "12":
            let cuotaDoce= parseFloat(total/12);
            let msj12 = alert ("Genial, su total a abonar es de $"+ total+" siendo cada cuota mensual de $"+cuotaDoce);
            alert("Gracias por confiar en nosotros! Lo esperamos nuevamente!");
            break;
    default:
      alert("Opcion ingresada no valida.");
      alert("Se cerrara el programa")
      break;
  }
}

pagoTarjeta(); */
