/**@jsx jsx */

import React from "react";
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import { useDataState, useDataDispatch } from "../../hooks/useDatabase";

// import Button from "../components/Button";

const Text = (props) => (
  <h4
    css={css`
      display: block;
      margin: 0;
      width: 85%;
      text-align: left;
      line-height: 0.9;
      margin-left: 15px;
    `}
    {...props}
  />
);

const Button = (props) => (
  <button
    css={css`
      padding: 0;
      background: none;
      border: none;
      width: 15%;
      height: 100%;
      ${props.colour === "black" && "color: white;"}
      &:hover {
        color: red;
      }
    `}
    {...props}
  />
);
const Div = (props) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 36px;
      border-bottom: 3px solid #333;
      border-right: 3px solid #333;
      background-color: ${props.colour};
      ${props.colour <= "black" && "color: white;"}

      &:hover {
        ${(props.colour === "black" &&
          "background-color: grey; color: black;") ||
          "color: white;"}
      }
    `}
    {...props}
  />
);

export default function GroupItem(props) {
  const { colour, name, button, action, id } = props;

  const callDatabase = useDataDispatch();

  return (
    <Div
      colour={colour}
      onClick={(event) => (action ? action() : callDatabase("SETGROUP", id))}
    >
      <Text> {name} </Text>
      <Button colour={colour} onClick={(event) => callDatabase("DELGROUP", id)}>
        {button || "X"}
      </Button>
    </Div>
  );
}
