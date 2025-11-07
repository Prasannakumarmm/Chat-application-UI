import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    { sender: "John", text: "Hey there!" },
    { sender: "You", text: "Hello 👋" },
  ]);

  const sendMessage = (text) => {
    if (text.trim() !== "") {
      setMessages([...messages, { sender: "You", text }]);
    }
  };

  return (
    <div className="chat-app">
      <Sidebar />
      <div className="chat-section">
        <ChatWindow messages={messages} />
        <MessageInput onSend={sendMessage} />
      </div>
    </div>
  );
}

export default App;
