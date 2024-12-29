import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  const changeColor = (color) => {
    setColor(color);
  };

  return (
    <div
      className="w-full h-screen duration-200 bg-black"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"  style={{ backgroundColor: 'olive' }}
            onClick={() => changeColor("olive")}
          >
            Olive
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
       style={{ backgroundColor: 'blue' }}     onClick={() => changeColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
     style={{ backgroundColor: 'red' }}       onClick={() => changeColor("red")}
          >
            Red
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
