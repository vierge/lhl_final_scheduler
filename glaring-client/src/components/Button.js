import React from "react";
import { css, jsx } from "@emotion/core";
const classnames = require("classnames");

export default function Button(props) {
  const buttonClass = classnames("button", {
    "button--confirm": props.confirm,
    "button--danger": props.danger,
    "button--edit": props.edit,
    "button--register": props.register,
  });

  return (
    <button //uses props.children value as the button text
      css={css`
      border-radius: 50%;
    `}
      className={buttonClass} //button element is wrapped in Button component
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );


}
