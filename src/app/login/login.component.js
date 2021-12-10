function validaVacio(valor) {
  valor = valor.replace("&nbsp;", "");
  valor = valor == undefined ? "" : valor;
  if (!valor || 0 === valor.trim().length) {
      return true;
      }
  else {
      return false;
      }
  }

function validarfor(){

var usuario = document.getElementById("usuario").value; 
var contraseña = document.getElementsByName("contraseña")[0].value;

var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


if ( !expr.test(usuario) ){                                                            //COMPRUEBA MAIL
  alert("Error: La dirección de correo " + usuario + " es incorrecta.");
  return false;
}

if ( validaVacio(usuario.value) || validaVacio(contraseña.value)) {  //COMPRUEBA CAMPOS VACIOS
  alert("Los campos no pueden quedar vacios");
  return false;
}
return true;
}