/**@jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import "./ButtonGroup.scss";

const classnames = require("classnames");

export default function ButtonGroup(props) {
  const buttonClass = classnames("buttonClass", {
    "buttonClass--confirm": props.confirm,
    "buttonClass--danger": props.danger,
    "buttonClass--edit": props.edit,
    "buttonClass--register": props.register,
  });

  return (
    <button //uses props.children value as the button text
      css={css`
      margin: 0 10px;
      height: 30px;
      width: 30px;
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
