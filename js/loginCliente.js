const form = document.querySelector("#form");
const usuario = document.querySelector("#usuario");
const clave = document.querySelector("#contrasena");
const btnSubmit = document.querySelector("#btnSubmit");
const error = document.querySelector(".error");

// Habilitar o deshabilitar el botón de continuar.
usuario.addEventListener("input", verificarInput);
clave.addEventListener("input", verificarInput);

function verificarInput() {
    if (usuario.value != null && usuario.value.length != 0 &&
        clave.value != null && clave.value.length != 0)
        btnSubmit.disabled = false;
    else
        btnSubmit.disabled = true;
}

// Verificación de los datos ingresados en el formulario.
form.addEventListener("submit", function(e) {
    e.preventDefault();
    verificarCamposVacios();
});

function verificarCamposVacios() {
    let error = false;

    if (usuario.value == null || usuario.value.length == 0) {
        errorText.innerHTML = "Debes completar el campo de usuario.";
        error = true;
    } else if (clave.value == null || clave.value.length == 0) {
        errorText.innerHTML = "Debes completar el campo de contraseña.";
        error = true;
    }

    if (!error) {
        mostrarMensajeRealizado();
    }
}

function mostrarMensajeRealizado() {
    alert("¡Inicio de sesión correcta!");
}
