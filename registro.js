document.getElementById('registro_form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;

    if (!validatePassword(password)) {
        alert('La contraseña debe tener entre 6 y 8 caracteres, al menos un número y un carácter especial.')
        return;
    }
    if (password !== confirm_password) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Nuevo usuario

    var newUser = {
        username: username,
        email: email,
        password: password
    };
    localStorage.setItem("user", JSON.stringify(newUser));

    window.location.href = 'inicio_sesion.html';
});

// Validar contraseña

function validatePassword(password) {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{6,8}$/;
    return re.test(password);
}