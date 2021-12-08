var usuario=document.getElementById('usuario');
    var contraseña=document.getElementById('contraseña');
    var error=document.getElementById('error');
    error.style.color='red';

    var form=document.getElementById('formulario');
    form.addEventListener('submit',function(evt){
      evt.preventDefault();
      var mensajeserror = [];

      if(usuario.value=== null || usuario.value=== ''){
        mensajeserror.push('ingresa el usuario');
      }
      if(contraseña.value=== null || contraseña.value=== ''){
        mensajeserror.push('ingresa la contraseña');
      }
      error.innerHTML=mensajeserror.join(', ');
    });