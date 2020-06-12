import React from 'react';
import { action } from "@storybook/addon-actions";

import GroupComponentShow from "../components/Creation/GroupComponentShow.js";

export default {
  title: 'GroupComponentShow',  
  component: GroupComponentShow,

};


  export const GroupComponent = () => <GroupComponentShow event="An Event"
      onJoin={action("onJoin")} />;

// .add("Show", () => (
//     <Show
//       event="An Event"
//       onJoin={action("onJoin")}
//     />
//   ))