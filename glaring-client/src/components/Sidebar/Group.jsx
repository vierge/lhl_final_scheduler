/**@jsx jsx */

import React from "react";

import { jsx, css } from "@emotion/core";

import styled from "@emotion/styled";

const Text = (props) => (
  <p
    css={css`
      display: block;
      margin: 0;
      width: 85%;
      text-align: center;
    `}
    {...props}
  />
);

const Button = styled.button`
  padding: 0;
  background: none;
  border: none;
  width: 15%;
  height: 100%;

  &:hover {
    color: red;
  }
`;
const Div = (props) => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
      justify-content: right;
      align-items: center;
      width: 100%;
      height: 30px;
      background-color: ${props.colour};
      ${props.colour === "black" && "color: white;"}

      &:hover {
        ${(props.colour === "black" &&
          "background-color: grey; color: black;") ||
          "color: white;"}
      }
    `}
    {...props}
  />
);

export default function NavGroup(props) {
  const { colour, name } = props;

  return (
    <Div colour={colour}>
      <Text>{name}</Text>
      <Button>X</Button>
    </Div>
  );
}
