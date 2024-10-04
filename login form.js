document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === 'user' && password === 'pass') {
        
        sessionStorage.setItem('authenticated', true);
        window.location.href = 'dashboard.html';  
    } else {
        alert('Invalid credentials');
    }
});