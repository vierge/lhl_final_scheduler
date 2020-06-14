import React from 'react';
import Group from "../components/Group/IndexGroup";

import { action } from '@storybook/addon-actions';

export default {
  title: 'Group'
};


  export const GroupComponent = () => <Group onJoin = {action("onJoin")} />;