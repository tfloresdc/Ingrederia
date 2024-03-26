document.addEventListener('DOMContentLoaded', function() {
    var user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        document.getElementById('username').value = user.username;
        document.getElementById('email').value = user.email;
        document.getElementById('password').value = user.password;

        document.getElementById('perfil_username').textContent = user.username;
        document.getElementById('perfil_email').textContent = user.email;
        document.getElementById('perfil_password').textContent = user.password;
    }
});