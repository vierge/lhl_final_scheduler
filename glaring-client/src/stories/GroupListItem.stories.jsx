import React from 'react';
import GroupListItem from "../components/GroupListItem.js";

import { action } from '@storybook/addon-actions';


export default {
  title: 'GroupListItem',
  component: GroupListItem,
};

  export const GroupList = () => <GroupListItem setGroup={action('clicked')} name="Group 1"/>;
