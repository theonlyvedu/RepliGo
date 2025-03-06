const messageInput = document.getElementById('message');
const scheduleDateInput = document.getElementById('scheduleDate');
const sendButton = document.getElementById('sendButton');
const statusText = document.getElementById('status');

sendButton.addEventListener('click', async () => {
    const message = messageInput.value;
    const scheduleDate = scheduleDateInput.value;

    if (!message || !scheduleDate) {
        statusText.textContent = "Please fill in all fields.";
        return;
    }

    try {
        // Save message to Firestore
        await db.collection('messages').add({
            message: message,
            scheduleDate: scheduleDate,
            timestamp: new Date()
        });
        statusText.textContent = "Message sent to the future!";
        messageInput.value = "";
        scheduleDateInput.value = "";
    } catch (error) {
        statusText.textContent = "Error sending message: " + error.message;
    }
});