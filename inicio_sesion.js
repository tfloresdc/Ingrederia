document.getElementById('inicio_sesion_form').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validar usuario

    var user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
        alert('Usuario no encontrado');
        return;
    }
    if (user.email !== email || user.password !== password) {
        alert('Credenciales incorrectas');
        return;
    }

    sessionStorage.setItem('isLoggedIn', 'true');

    window.location.href = 'index.html';
});