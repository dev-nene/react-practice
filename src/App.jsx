import { useState } from "react";
import Button from "./components/Button";
import Greeting from "./components/Greeting";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [counter, setCounter] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    setCounter((prev) => prev + 1);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <h2>{counter}</h2>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
export default App;
