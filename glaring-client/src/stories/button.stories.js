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

export const Submit = () => <Button onClick={action('clicked')} danger>Submit</Button>;

