import React from "react";
import "./style.css";

const Button = (props) => {
    const classes = "button " + props.className;
  return (
    <button className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default Button;
