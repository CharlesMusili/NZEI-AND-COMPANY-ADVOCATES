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