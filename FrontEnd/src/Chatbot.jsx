import React from "react";
import ChatBot from "react-simple-chatbot";
export default function ChatbotUI() {
  return (
    <div style={{ position: "fixed", right: 0, bottom: 0, zIndex: 1000 }}>
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you!',
            end: true,
          },
        ]}
      />
    </div>
  );
}
