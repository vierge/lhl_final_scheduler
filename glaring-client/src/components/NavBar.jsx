/**@jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Button = (props) => {
  const { colour } = props;
  return (
    <button
      css={css`
        border: none;
        height: 100%;
        width: 120px;
        background-color: ${colour};
        color: white;
        font-size: 18px;
        font-family: Quicksand, sans-serif;
        font-weight: 700;

        &:hover {
          background-color: white;
          color: black;
        }
      `}
      {...props}
    />
  );
};

const Nav = (props) => (
  <nav
    css={css`
      z-index: 10;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      height: 40px;
      background-color: #282828;
      border-bottom: #5d53d2 3px solid;
    `}
    {...props}
  />
);

export default function NavBar(props) {
  return (
    <Nav>
      <h1
        css={css`
          margin-left: 20px;
        `}
      >
        GLARING (def. noun: a group of cats)
      </h1>
      <div
        css={css`
          height: 100%;
        `}
      >
        <Button colour="#5d53d2">logout</Button>
      </div>
    </Nav>
  );
}
