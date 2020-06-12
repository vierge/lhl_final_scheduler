/**@jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

export default function Event(props) {
  const { props } = props;

  return (
    <div
      css={css`
        height: 200px;
        width: 200px;
      `}
    ></div>
  );
}
