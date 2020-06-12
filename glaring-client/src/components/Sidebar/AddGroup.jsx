/**@jsx jsx */

import React from "react";
import Group from "./Group";
import { jsx, css } from "@emotion/core";

import styled from "@emotion/styled";

export default function AddGroup(props) {
  return (
    <Group colour="emerald" name="+!+!+">
      <Text>{name}</Text>
    </Group>
  );
}
