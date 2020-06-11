/**@jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";

const GridContainer = (props) => (
  <div
    css={css`
      position: fixed;
      bottom: 0;
      height: 90px;
      width: 200px;

      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas: "a a" "b c";
    `}
    {...props}
  />
);

const Button = (props) => (
  <button
    css={css`
      text-align: center;
      width: 100%;
      height: 100%;
      border: none;
      color: ${props.color};
      background-color: ${props.background};

      &:hover {
        background-color: #fff;
        color: black;
      }

      grid-area: ${props.grid};
    `}
    {...props}
  />
);

export default function Options(props) {
  const {} = props;
  return (
    <GridContainer>
      <Button color="skyblue" background="black" grid="a">
        ++ DIRECTORY ++
      </Button>
      <Button color="forestgreen" background="black" grid="b">
        Options
      </Button>
      <Button color="lightpurple" background="black" grid="c">
        Help :O
      </Button>
    </GridContainer>
  );
}
