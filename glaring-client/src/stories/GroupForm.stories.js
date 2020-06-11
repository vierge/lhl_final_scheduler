import React from 'react';
import { action } from "@storybook/addon-actions";

import GroupForm from "../components/Creation/GroupForm.js";

export default {
  title: 'GroupForm',  
  component: GroupForm,

};

  export const Form = () => <GroupForm onSubmit={action("onSubmit")} />;