import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Sidebar from "../components/Sidebar/Index";

storiesOf("Navigation", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }],
  })
  .add("Base Sidebar", () => <Sidebar />);
