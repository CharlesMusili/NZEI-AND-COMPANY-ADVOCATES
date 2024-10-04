document.addEventListener('DOMContentLoaded', function() {
        
    const isAuthenticated = sessionStorage.getItem('authenticated');
    if (!isAuthenticated) {
        window.location.href = 'login.html';  
    }

    document.getElementById('logout-button').addEventListener('click', function() {
        
        sessionStorage.removeItem('authenticated');
        window.location.href = 'login.html';  
    });
});
const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'user' && password === 'pass') {
        req.session.authenticated = true;
        res.redirect('/dashboard');
    } else {
        res.send('Invalid credentials');
    }
});


app.get('/dashboard', (req, res) => {
    if (req.session.authenticated) {
        res.sendFile('/path/to/dashboard.html');
    } else {
        res.redirect('/login');
    }
});


app.post('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});