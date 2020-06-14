/**@jsx jsx */

import React from 'react'
import {css, jsx} from '@emotion/core'
import { useForm } from 'react-hook-form';




const GroupFormButton = (props) => {
  const {color, name} = props;
  return <button 
    css={css`
      display: inline-block;
      border: none;
      color: white;
      background-color: ${color};
      width: 50%;
      height: 32px;
        
      &:hover {
          background-color: white;
          color: ${color};
        }
    `
    }
  >{name}</button>
}


export default function GroupForm (props) {

  const {register, handleSubmit, errors } = useForm();

  async function onSubmit (data) {
    console.log(data)
    // await addEvent(data);
    // setDisplay("display: none;")
  }

  return (
  <div 
      css={css`
      z-index: 1000; 
      height: 300px;
      width: 200px; 
      background-color: gray; 
      position: relative; 
      top: 0px; 
      left: 0px;`}>
      
      <form name="New Group" onSubmit={handleSubmit(onSubmit)}>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
      </form>


      <div css={css`position: absolute;
       bottom: -30px; 
       right: 0; 
       width: 100%`}>

        <GroupFormButton color="teal" name="CANCEL" />
        <GroupFormButton color="black" name="SUBMIT" />

      </div>
  </div>
  )

}