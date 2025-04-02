import React from "react";

function ChildComponent({ question, image, text, onClick }) {
  return (
    <div style={{ padding: "20px", border: "2px solid black", margin: "10px", textAlign: "center" }}>
      <h2>{question}</h2>
      <img src={image} alt={text} style={{ width: "200px", height: "auto" }} />
      <p>{text}</p>
      <button onClick={onClick}>Change Prediction</button>
    </div>
  );
}

export default ChildComponent;