const pagoTarjeta = () => {
  //Se valida ingreso del usuario
  let usuario = "Fede99";
  let contraseña = "12345";
  let bienvenida = alert("Bienvenido a Sneaker ID, porfavor introduzca su usuario y contraseña");
  let ingresoUsuario = prompt("Usuario: ");
  let ingresoContraseña = prompt("Contraseña: ");
  if (ingresoUsuario !== usuario && ingresoContraseña!==contraseña) {
      for (let i = 3; i > 0; i--){
      alert("Usuario o contraseña incorrecto, te quedan "+ i+ " intentos, vuelve a intentarlo");
      let ingresoUs2 = prompt("Usuario: ");
      let ingresoCon2 = prompt("Contraseña: ");
      if (ingresoUs2== usuario && ingresoCon2==contraseña) {
        break;
      }
    }
  }

  //Simulacion de que el usuario compro un producto
  let producto= 250000;
  let interes = producto/100 * 20;
  let total = interes + producto;
  let msj = prompt("Hola" +usuario+ " ", "el total de su compra es de $" +producto+" su producto puede ser financiado en: \n 1 cuota sin interes \n 3 cuotas sin interes \n 6 cuotas sin interes \n 12 cuotas sin interes\n ¿En cuantas cuotas desea abonar?");
  switch (msj) {
    case "1":
      alert("El total a abonar es de $"+producto);
      break;
    
      case "3":
        let cuotaTres = parseFloat(total/3);
        let msj3 = alert("Genial, su total a abonar es de $"+ total+" siendo cada cuota mensual de $"+cuotaTres);
        break;

        case "6":
          let cuotasSeis = parseFloat(total /6);
          letmsj6 = alert ("Genial, su total a abonar es de $"+ total+" siendo cada cuota mensual de $"+cuotasSeis);
          break;

          case "12":
            let cuotaDoce= parseFloat(total/12);
            let msj12 = alert ("Genial, su total a abonar es de $"+ total+" siendo cada cuota mensual de $"+cuotaDoce);
            break;
    default:
      alert("Opcion ingresada no valida.");
      break;
  }
  let msjFinal = alert("Gracias por confiar en nosotros! Lo esperamos nuevamente!");
}
pagoTarjeta();