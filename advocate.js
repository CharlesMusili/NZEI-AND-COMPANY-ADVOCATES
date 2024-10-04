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