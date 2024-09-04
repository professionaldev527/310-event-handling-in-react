import React, { useState } from "react";

function App() {

  const [headingText, setHeadingText] =  useState("Hello");

  const [bgColor, setBgColor] = useState("#FFFFFF");

  function clicked() {
    setHeadingText("Submitted");
  }

  function mouseover() {
    setBgColor("#000000");
  }

  function mouseout() {
    setBgColor("#FFFFFF"); // Reset the color when mouse is out
  }
    

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      onClick={clicked}  
      onMouseOver={mouseover}
      onMouseOut={mouseout}
      style={{ backgroundColor: bgColor }}
      >Submit</button>
    </div>
  );
}

export default App;
