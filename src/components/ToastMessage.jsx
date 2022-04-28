import React from "react";
import ReactDOM from "react-dom";

const Toastmessage = ({ messages }) => {
  return ReactDOM.createPortal(
    <div className="container-msg">
      {React.Children.toArray(messages.map((msg) => {
        return (
          <p className="toastMessage">
            {msg.desc}
          </p>
        );
      }))}
    </div>,
    document.getElementById("moon")
  );
};

export default Toastmessage;
