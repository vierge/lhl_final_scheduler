/**@jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import "./ButtonGroup.scss";

const classnames = require("classnames");

export default function Button(props) {
  const buttonClass = classnames("buttonClass", {
    "buttonClass--confirm": props.confirm,
    "buttonClass--danger": props.danger,
    "buttonClass--edit": props.edit,
    "buttonClass--register": props.register,
  });

  return (
    <button //uses props.children value as the button text
    //   css={css`
    //   margin: 0 0px;
    //   height: 3rem;
    //   width:  8rem;
    //   border-radius: 1rem;
    // `}
      className={buttonClass} //button element is wrapped in Button component
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );


}
