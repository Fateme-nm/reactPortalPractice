import React, { useState, useEffect } from "react";
import ToastMessage from "./ToastMessage";

let index = 1;
const Toast = () => {
  const [messages, setMessages] = useState([]);

  const handleAdd = () => {
    const id = Date.now();
    setMessages([
      ...messages,
      {
        desc: "sample " + index++,
        id,
      },
    ]);
    setTimeout(() => {
      setMessages((currentMessages) => {
        const targetIndex = currentMessages.findIndex((i) => i.id === id);
        const newMessages = [...currentMessages];
        newMessages.splice(targetIndex, 1);
        return newMessages;
      });
    }, 1500);
  };

  return (
    <div>
      <button onClick={handleAdd}>show toast message</button>
      <ToastMessage messages={messages}/>
    </div>
  );
};

export default Toast;
