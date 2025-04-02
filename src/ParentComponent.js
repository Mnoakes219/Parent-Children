import React, { useState } from "react";
import ChildComponent from "./ChildComponent"; // Import the Child Component

// Define the content for both categories
const contentOptions = [
  {
    question: "Which superhero is the best?",
    images: [
      { src: "/images/batman.jpeg", text: "batman" },
      { src: "/images/spiderman.jpeg", text: "spiderman" },
      { src: "/images/superman.jpeg", text: "superman" }
    ]
  },
  {
    question: "Who is the G.O.A.T of basketball?",
    images: [
      { src: "/images/Lebron.jpg", text: "Lebron" },
      { src: "/images/MJ.jpeg", text: "MJ" },
      { src: "/images/Kobe.jpeg", text: "Kobe" }
    ]
  }
];

function ParentComponent() {
  const [childStates, setChildStates] = useState([
    { imageIndex: 0 },
    { imageIndex: 0 }
  ]);

  const updateChild = (index) => {
    setChildStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index].imageIndex = (newStates[index].imageIndex + 1) % 3; // Cycle through 3 images
      return newStates;
    });
  };

  return (
    <div>
      <h1>Superhero & Basketball Player Predictions</h1>
      {contentOptions.map((content, index) => (
        <ChildComponent
          key={index}
          question={content.question}
          image={content.images[childStates[index].imageIndex].src}
          text={content.images[childStates[index].imageIndex].text}
          onClick={() => updateChild(index)}
        />
      ))}
    </div>
  );
}

export default ParentComponent;