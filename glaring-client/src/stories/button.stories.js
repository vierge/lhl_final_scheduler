import React from 'react';
import Button from '../components/Button.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button',
  component: Button,
};

// export default { title: 'Button' };

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const Submit = () => <Button onClick={action('clicked')} confirm>Submit</Button>;

export const Edit = () => <Button onClick={action('clicked')} edit>Edit</Button>;

export const Delete = () => <Button onClick={action('clicked')} danger>Delete</Button>;

export const Going = () => <Button onClick={action('clicked')} confirm>Going</Button>;

export const NotGoing = () => <Button onClick={action('clicked')} danger>Not Going</Button>;

export const Login = () => <Button onClick={action('clicked')} confirm>Login</Button>;

export const Register = () => <Button onClick={action('clicked')} register>Register</Button>;

export const Logout = () => <Button onClick={action('clicked')} danger>Logout</Button>;

export const CreateNewGroup = () => <Button onClick={action('clicked')} register>Create New Group</Button>;

export const MySchedule = () => <Button onClick={action('clicked')} register>My Schedule</Button>;

export const JoinGroup = () => <Button onClick={action('clicked')} register>Join Group</Button>;

export const CreateNewEvent = () => <Button onClick={action('clicked')} register>Create New Event</Button>;
