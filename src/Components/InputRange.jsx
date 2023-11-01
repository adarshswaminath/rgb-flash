import React, { useState } from "react";

function InputRange({setDelay}) {
  const [sliderValue, setSliderValue] = useState(100);

  function showSliderValue(event) {
    const newValue = event.target.value;
    setSliderValue(newValue);
    setDelay(newValue*100)

  }

  return (
    <div>
      <div>
        <div className="flex gap-2">
          <div className="thumb">{sliderValue}</div>
          <div className="line">
            <div className="line-fill" style={{ width: `${sliderValue}%` }}></div>
          </div>
          <input
            className="range range-primary range-xs  w-72 "
            id="custom-range"
            type="range"
            value={sliderValue}
            min="0"
            max="100"
            onChange={showSliderValue}
          />
        </div>
      </div>
    </div>
  );
}

export default InputRange;
