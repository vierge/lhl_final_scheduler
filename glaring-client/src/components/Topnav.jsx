/**@jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";

const Button = (props) => (
  <button
    css={css`
      border: none;
      height: 100%;
      width: 60px;
      background-color: ${props.className};
      color: white;
    `}
    {...props}
  />
);

const Nav = (props) => (
  <nav
    css={css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 40px;
      background-color: #555;
    `}
    {...props}
  />
);

export default function Topnav(props) {
  return (
    <Nav>
      <h1>GLARING... mew</h1>
      <div css={{ height: "100%" }}>
        <Button css={{ backgroundColor: "blue" }}>Content</Button>
        <Button css={{ backgroundColor: "violet" }}>More</Button>
      </div>
    </Nav>
  );
}
