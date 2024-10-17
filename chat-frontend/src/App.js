import React, { useEffect, useState } from "react";
import { Layout, Input, Button } from "antd";
import "antd/dist/reset.css";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import "./App.css"; // Import Tailwind
import axios from "axios";

const { Header, Footer, Content } = Layout;

const App = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.Pusher = Pusher;
    window.Echo = new Echo({
      broadcaster: "pusher",
      key: "77578ec66adfdb693211",
      cluster: "ap2",
      forceTLS: true,
    });

    window.Echo.channel("chat").listen("MessageSent", (e) => {
      console.log(`New message received: ${e.message}`);
      setMessages((prevMessages) => [...prevMessages, e.message]);
    });

    return () => window.Echo.disconnect();
  }, []);

  const sendMessage = async () => {
    if (message.trim()) {
      await axios.post("http://localhost:8000/api/send-message", { message });
      setMessage("");
    }
  };

  return (
    <Layout className="min-h-screen">
      <Header className="bg-blue-500 text-white text-center">React Chat</Header>
      <Content className="p-5">
        <div className="bg-white p-5 rounded shadow-md">
          <div
            className="chat-window mb-4"
            style={{ height: "400px", overflowY: "scroll" }}
          >
            {messages.map((msg, index) => (
              <div key={index} className="message p-2">
                {msg}
              </div>
            ))}
          </div>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            onPressEnter={sendMessage}
          />
          <Button type="primary" className="mt-2" onClick={sendMessage}>
            Send
          </Button>
        </div>
      </Content>
      <Footer className="text-center">Chat Application</Footer>
    </Layout>
  );
};

export default App;
