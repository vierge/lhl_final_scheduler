
/**@jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import "./ButtonRegistration.scss";

const classnames = require("classnames");

export default function Button(props) {
  const buttonClass = classnames("buttonRegistration", {
    "buttonRegistration--confirm": props.confirm,
    "buttonRegistration--danger": props.danger,
    "buttonRegistration--edit": props.edit,
    "buttonRegistration--register": props.register,
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