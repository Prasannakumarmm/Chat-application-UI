const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  appendMessage(message, "user-message");
  userInput.value = "";

  // Simulated bot reply
  setTimeout(() => {
    const botReply = getBotResponse(message);
    appendMessage(botReply, "bot-message");
  }, 800);
}

function appendMessage(message, className) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", className);
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // auto scroll
}

function getBotResponse(userMsg) {
  const responses = [
    "Hi there! 👋",
    "I'm your friendly chat bot!",
    "Tell me more!",
    "That sounds interesting 😄",
    "Can you explain more?",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}
