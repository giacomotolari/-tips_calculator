import React from "react";

function InputRadio({ inputName }) {
  return (
    <div>
      <input type="radio" id="service" name={inputName} value="service" />
      <label htmlFor="service">Service</label>
      <input type="radio" id="cook" name={inputName} value="cook" />
      <label htmlFor="cook">Koch</label>
      <input type="radio" id="dishwasher" name={inputName} value="dishwasher" />
      <label htmlFor="dishwasher">Spüler</label>
    </div>
  );
}

export default InputRadio;
