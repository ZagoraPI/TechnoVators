import { useState } from 'react'
import './App.css'

interface Message {
  id: number;
  text: string;
  isSent: boolean;
}

function App() {
  const [messages] = useState<Message[]>([
    { id: 1, text: "Здравейте! Как мога да ви помогна?", isSent: false },
    { id: 2, text: "Здравейте! Имам въпрос относно услугите ви.", isSent: true },
    { id: 3, text: "Разбира се! Моля, задайте въпроса си.", isSent: false },
    { id: 4, text: "Колко струва основният пакет?", isSent: true },
  ]);

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.isSent ? 'sent' : 'received'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          className="message-input"
          placeholder="Въведете съобщение..."
        />
        <button className="send-button">Изпрати</button>
      </div>
    </div>
  )
}

export default App
