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
        width: 60px;
        background-color: ${colour};
        color: white;

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
      z-index: 100;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      height: 40px;
      background-color: #555;
    `}
    {...props}
  />
);

export default function Topnav(props) {
  return (
    <Nav>
      <h1>GLARING (def. noun: a group of cats)</h1>
      <div
        css={css`
          height: "100%";
        `}
      >
        <Button colour="blue">Content</Button>
        <Button colour="violet">More</Button>
      </div>
    </Nav>
  );
}
