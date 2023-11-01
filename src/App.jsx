import { useState } from "react";
import Button from "./Components/Button";
import InputRange from "./Components/InputRange";

function App() {
  const [isActive, setActive] = useState(false);
  const [delay, setDelay] = useState(1500);
  let animationStyle = {
    animation: isActive ? `flasher ${delay}ms linear infinite` : null,
  };
  return (
    <div
      className="min-h-screen bg-gray-600 flex items-center justify-center"
      style={animationStyle}
    >
      <div className="fixed bottom-3 flex flex-col items-center gap-3">
        <div className="p-4 rounded-lg bg-black/10 bg-opacity-50 backdrop-blur">
          <InputRange setDelay={setDelay} />
        </div>
        <div className="flex space-x-8 p-4 rounded-lg bg-black/10 bg-opacity-50 backdrop-blur">
          <Button setActive={setActive} isActive={isActive} />
          <Button setActive={setActive} isActive={isActive} />
          <Button setActive={setActive} isActive={isActive} />

        </div>
      </div>
    </div>
  );
}

export default App;
