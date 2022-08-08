import React, { useState } from "react";

export const Slider = ({ label }) => {
  const [value, setValue] = useState(50);
  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };
  return (
    <div>
      <label htmlFor="customRange1" className="form-label">
        {label}
        {value}
      </label>
      <input
        value={value}
        onChange={handleChange}
        type="range"
        className="form-range"
        min="0"
        max="100"
        step="0.5"
        id="customRange1"
      />
    </div>
  );
};
