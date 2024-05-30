document.getElementById("loginButton").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    if (email === "admin@mail.com" && password === "1234") {
        window.location.href = "peliculas.html";
    } else {
        alert("Credenciales incorrectas. Inténtelo de nuevo.");
    }
});


function mostrarAlert() {
    alert("En construcción");
}