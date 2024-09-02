let btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

function validarCantidad(){
    if(txtNumber.value.length==0){
        return false;
    }//length==0
    if (isNaN(txtNumber.value)){
        return false;
    }//isNaN

    if (Number(txtNumber.value)<=0) {
        return false;
    }
    
    return true;
}//validarCantidad()



btnAgregar.addEventListener("click", function (event){
    event.preventDefault();    //dejar de hacer lo que hace por default

    txtNombre.style.border="";
    txtNumber.style.border="";
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";

// validar el nombre del producto
    if(txtNombre.value.length<3){
        txtNombre.style.border="solid red medium";
        alertValidacionesTexto.innerHTML="El <strong>Nombre</strong> no es correcto.</br>";
        alertValidaciones.style.display="block";
        // return false;
    }//if length < 3

// validar la cantidad
    if (! validarCantidad()){
        txtNumber.style.border="solid red medium";
        alertValidacionesTexto.innerHTML+="El <strong>Cantidad</strong> no es correcta.</br>";
        alertValidaciones.style.display="block";
    }//! validarCantidad





});  //  termina btnAgregar.addEventListener

txtNombre.addEventListener("blur", function(event){    //valida que  si tiene espacios se los quita y detecta el nuemro de letras e invalida sin son < 3
    // el elemento "blur" es cuando un campo pierde el foco, se sale del campo
    txtNombre.value = txtNombre.value.trim();
})// termina  txtNombre.addEventListener


txtNumber.addEventListener("blur", function(event) {
    txtNumber.value = txtNumber.value.trim();
})