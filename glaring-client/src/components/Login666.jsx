/**@jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { useDataDispatch } from "../hooks/useDatabase";
import { useAuth } from "../hooks/useAuth";

const FormBody = (props) => (
  <div
    css={css`
    width: 500px;
    height: 500px;
    position: absolute;
    z-index: 1000;
    top: 50%;
    left: 50;
    background-color: #000
    


    display: grid;
    grid-template-rows: 2fr 1fr 1fr 2fr
    grid-template-columns: 1fr 3fr
    grid-template-areas: "title ."
                         "ulabel uform"
                         "plabel pform"
                         "register login" 
  `}
    {...props}
  />
);

export default function LoginForm(props) {
  const { props } = props;

  return <div></div>;
}
