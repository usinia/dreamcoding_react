import { useState } from "react";
import "./AppXY.css";

function App() {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

  return (
    <div
      className="container"
      onPointerMove={(e) => {
        // setX(e.clientX);
        // setY(e.clientY);
        setPosition((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
      }}
    >
      <div
        className="pointer"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </div>
  );
}

export default App;
