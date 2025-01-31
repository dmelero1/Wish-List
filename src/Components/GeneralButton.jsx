import React from "react";
import "./GeneralButton.css";

function GeneralButton({ actionFunction, displayText }) {
  return (
    <button type="button" className="wish-clear" onClick={actionFunction}>
      {displayText}
    </button>
  );
}

export default GeneralButton;
