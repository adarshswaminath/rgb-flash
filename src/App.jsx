import { useState } from "react";
import Button from "./Components/Button";
import InputRange from "./Components/InputRange";

function App() {
  const [isActive, setActive] = useState(false);
  const [delay, setDelay] = useState(250);
  let animationStyle = {
    animation: isActive ? `flasher ${delay}ms linear infinite` : null,
  };
  return (
    <div
      className="min-h-screen bg-gray-600 flex items-center justify-center relative" // Add 'relative' class for positioning
      style={animationStyle}
    >
      <div className="fixed bottom-3 flex flex-col items-center gap-3">
        <div className="flex items-center space-x-8 p-4 rounded-lg bg-black/10 bg-opacity-50 backdrop-blur">
          <InputRange setDelay={setDelay} />
          <Button setActive={setActive} isActive={isActive} />
        </div>
      </div>

      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-opacity-50 text-4xl font-fancy">
        RGB Flash
      </div>
    </div>
  );
}

export default App;
