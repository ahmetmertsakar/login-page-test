document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');

    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        passwordError.textContent = "Wrong combination";
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
        if (username === 'test@luxpmsoft.com' && password === 'test1234!') {
            window.location.href = 'blank.html';
        } else {
            Swal.fire({
                icon: 'error',
                text: 'The provided password is wrong!',
            });
        }
    }
});
