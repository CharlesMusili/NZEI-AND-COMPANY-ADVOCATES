document.addEventListener('DOMContentLoaded', function() {
    const balanceElement=
document.getElementById('currentBalance');
const paymentForm=
document.getElementById('paymentForm');
const paymentAmountInput=
document.getElementById('paymentAmount');
let currentBalance= 0.00; //

function
updateBalance(amount) {
    currentBalance +=parseFloat(amount);
    balanceElement.textContent = currentBalance.toFixed(2);
}
paymentForm.addEventListener('submit', function(event){
    event.preventDefault();//

const paymentAmount=
paymentAmountInput.value;
if (paymentAmount && ! isNaN(paymentAmount)){
    updateBalance(paymentAmount);
    paymentAmountInput.value=''; //
    
}
});
});

document.addEventListener('DOMContentLoaded', function() {
    const calendarContainer = document.getElementById('calendar');
    const now = new Date();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    function generateCalendar(month, year) {
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        let calendarHTML = `
            <table class="calendar">
                <thead>
                    <tr>
                        <th colspan="7">${monthNames[month]} ${year}</th>
                    </tr>
                    <tr>
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                </thead>
                <tbody>
        `;

        let day = 1;
        for (let i = 0; i < 6; i++) { 
            calendarHTML += '<tr>';
            for (let j = 0; j < 7; j++) { 
                if (i === 0 && j < firstDay) {
                    calendarHTML += '<td class="empty"></td>'; 
                } else if (day > daysInMonth) {
                    calendarHTML += '<td class="empty"></td>'; 
                } else {
                    calendarHTML += `<td>${day}</td>`;
                    day++;
                }
            }
            calendarHTML += '</tr>';
        }

        calendarHTML += '</tbody></table>';
        calendarContainer.innerHTML = calendarHTML;
    }

    generateCalendar(now.getMonth(), now.getFullYear());
});



document. addEventListener('DOMContentLoaded',()=> {
    const messagesDiv = document . getElementByid('messages');
    const input = document.getElementById('message-input');
    const sendButton = document . getElementById('send-button');
    function addmessage(text, isUserMessage= true) {
        const message =
        document.createElement('div');
        message.classname = isUserMessage ? 'user-message':
        'advocate-message';
        message.textContent=text;
        messagesDiv.appendChild(message);
        messagesDiv.scrollTop=messagesDiv.scrollHeight;//
        Scroll-to-bottom
    }
    function handleSendMessage(){
    const messageText = input.value.trim();
    if (messageText); 
    input.value='';
    // Simulate
    advocate-reply
setTimeout(((I) = B> {
    add,Message,//('Thankyou for reaching out.How can we assist you?', false);
},1000
))}
}
,sendButton.addEventListener('click', handleSendMessage))
input.addEventListener('keypress', (event)= B> {
    if (eventkey = 'Enter') {
        event.preventDefault();
        handleSendMessage();
    }
});
document.getElementById('send-button').addEventListener('click',() => {
    const messageinput = 
    document.getElementByid('message-input');
    const message = 
    messageinput.value.trim();
    if(message) {
        const chatBox= document.getElementById('chat-box');
        const userMessageDiv =
        document . createElement('div');
        userMessageDiv.classname
        ='chat-messsage user';
        userMessageDiv.textContent=
        message;
        chatBox.appendChild(userMessageDiv);
        chatbox.scrollTop =
        chatbox . scrolHeight;
        messageinput.value = '';
        
        setTimeout(() => {
            const
            associateMessageDiv = 
            document.createElement('div');
            associateMessageDiv.className =
            'chat-message associate';
            associateMessageDiv.textContent =
            'Thank you for your message. How can i assist you further?';
            chatBox.appendChild(associateMessageDiv);
            chatBox.scrollTop = 
            chatBox.scrollHeight;
        }, 1000);
    }
});
document.getElementById('send-button').addEventListener('click',
    ()=> {
        const messageinput =
        document.getElementById('message-input'
);
const message = messageInput.value.trim();
if(message) {
    const chatBox =
    document.getElementById('chat-box');
    
    const clientMessageDiv =
    document.createElement('div');
    clientMessageDiv.className =
    'chat-message client';
    clientMessageDiv.textContent = message;
    chatBox.appendChild(clientMessageDiv);
    
    messageInput.value = '';
    chatBox.scrollTop =
    chatBox.scrollHeight;
    
    setTimeout(()=> {
        const
        associateMessageDiv = 
        document.createElement('div');
        associateMessageDiv.className = 
        'chat-message associate';
        associateMessageDiv.textContent = 
        'Thank you for reaching out. How can i assist you?';
        chatBox.appendChild(associateMessageDiv);
        chatBox.scrollTop =
        chatBox.scrollHeight;
    }, 1000);
}
    });
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




const http = require('http');


const port = 3000;


const server = http.createServer((req, res) => {
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    
    res.end('Hello, World!\n');
});


server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});


document.getElementById("toggle-btn").addEventListener("click", function() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");

    
    sidebar.classList.toggle("hidden");

    
    if (sidebar.classList.contains("hidden")) {
        mainContent.style.marginLeft = "0";
    } else {
        mainContent.style.marginLeft = "250px";
    }
});
