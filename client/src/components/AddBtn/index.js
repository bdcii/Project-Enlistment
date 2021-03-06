import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function AddBtn(props) {
  return (
    <button className="add-btn" {...props} role="button" tabIndex="0">
      Add
    </button>
  );
}

export default AddBtn;
