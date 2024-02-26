document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('message-form');
    const input = document.getElementById('message-input');
    const messagesDiv = document.getElementById('messages');

    const addMessage = (message) => {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        messages.appendChild(messageElement);
        messages.scrollTop = messages.scrollHeight;
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!input.value.trim()) return;

        fetch('https://sheetdb.io/api/v1/iexfwt8ayiyyf', {
            method: 'POST',
            body: JSON.stringify({ message: input.value }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => res.json())
            .then((data) => {
                addMessage(input.value);
                input.value = '';
            })
            .catch((err) => {
                console.error(err);
                addMessage('Error sending message. Please try again later.');
            });
    });
});