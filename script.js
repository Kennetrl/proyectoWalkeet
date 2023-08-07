
const registerButton = document.getElementById("registerButton");
const passwordInput = document.getElementById("password");
const repeatPasswordInput = document.getElementById("repeatPassword");
const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username")

registerButton.addEventListener("click", function(event) {
    event.preventDefault();

    const password = passwordInput.value;
    const repeatPassword = repeatPasswordInput.value;
    const email = emailInput.value;
    const username = usernameInput.value;
    
    if (password === repeatPassword && username!="") {
        // Las contraseñas coinciden
        console.log("Username: " + username);
        console.log("Registro exitoso");
        console.log("Correo Electrónico: " + email);
        console.log("Contraseña: " + password);
        window.location.href = "./walkeet.html";
        // Aquí podrías enviar los datos al servidor para el registro
    } else if (username == ""){
        console.log("No digito el usuario")
        const errorUsernameElement = document.getElementById("spanRegistro");
        errorUsernameElement.textContent = "Digite el usuario";
        errorUsernameElement.style.color = "red";

    } else {
        // Las contraseñas no coinciden, muestra un mensaje de error
        console.log("Las contraseñas no coinciden");
        const errorElement = document.getElementById("spanRegistro");
        errorElement.textContent = "Las contraseñas no coinciden";
        errorElement.style.color = "red";
        const form = document.querySelector(".form");
        form.appendChild(errorElement);
    }

    // Validar el formato del correo electrónico usando una expresión regular
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        console.log("El formato del correo electrónico no es válido");
        const errorEmailElement = document.getElementById("spanRegistro");
        errorEmailElement.textContent = "El formato del correo electrónico no es válido";
        errorEmailElement.style.color = "red";
        const form = document.querySelector(".form");
        form.appendChild(errorEmailElement);
    }
});