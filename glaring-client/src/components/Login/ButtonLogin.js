/**@jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import "./ButtonLogin.scss";

const classnames = require("classnames");

export default function Button(props) {
  const buttonClass = classnames("buttonLogin", {
    "buttonLogin--confirm": props.confirm,
    "buttonLogin--danger": props.danger,
    "buttonLogin--edit": props.edit,
    "buttonLogin--register": props.register,
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