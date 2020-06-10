import React from 'react';
import "./Button.scss";
const classNames = require("classnames");

// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';


export default function Button(props) {
 let buttonClass = "button";

  if (props.confirm) {
    buttonClass += " button--confirm";
  }

  if (props.danger) {
    buttonClass += " button--danger";
  }

  if (props.edit) {
    buttonClass += " button--edit";
  }

    if (props.register) {
    buttonClass += " button--register";
  }

    return (
    <button //uses props.children value as the button text
      className={buttonClass} //button element is wrapped in Button component
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
    )
}


// export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );

// export const Submit = () => <Button onClick={action('clicked')}>Submit</Button>;

