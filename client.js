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