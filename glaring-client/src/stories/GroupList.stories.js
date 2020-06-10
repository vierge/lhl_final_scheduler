import React from 'react';
import GroupList from "../components/GroupList.js";

import { action } from '@storybook/addon-actions';


const groups = [
  {
    id: 1,
    name: "Group 1",
  },
  {
    id: 2,
    name: "Group 2",
  },
  {
    id: 3,
    name: "Group 3",
  },
];

export default {
  title: 'GroupList',
  component: GroupList,
};


  export const GroupList1 = () => <GroupList groups={groups} group={"Group 1"} setGroup={action("setGroup")} />;

  export const GroupList2 = () => <GroupList groups={groups} group={"Group 2"} setGroup={action("setGroup")} />;

  export const GroupList3 = () => <GroupList groups={groups} group={"Group 3"} setGroup={action("setGroup")} />;
