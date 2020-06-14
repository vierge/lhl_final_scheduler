import React, { useState } from "react";
import Button from "../Button.js";
import "./GroupForm.scss";
import { useForm } from 'react-hook-form';
import { css, jsx } from "@emotion/core";


export default function GroupForm(props) {
  const [name, setName] = useState(props.name || ""); //need to keep track of information for the name by using useState
  const [image, setImage] = useState(null);
  const { addGroup, mode } = props;
  const [display, setDisplay] = useState("display: flex;");
  const {register, handleSubmit, errors } = useForm();
   async function onSubmit (data) {
    await addGroup(data);
    setDisplay("display: none;")
  }

  return (

   <form css={css`${display}`}className="groupform" onSubmit={handleSubmit(onSubmit)}>
 
       <div className="eventform__top">       
        <div className="groupform__content">
        <label for="groupName">Group Name: </label>
          <input 
            id="groupName"
            className="creation__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Group Name"
            /*
          This must be a controlled component
        */
          />
               <label for="groupDescription">Group Description: </label>
            <input
            id="groupDescription"
            className="creation__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Group Description"
            /*
          This must be a controlled component
        */
          />
        </div>
      </div> 

        <br/>
        <br/>
     <label for="groupDescription">Group Description: </label>
            <input
            id="groupDescription"
            className="creation__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Group Description"
            /*
          This must be a controlled component
        */
          />
    <br/>
    <br/>

    <br/>
    <br/>

    <input type="file" accept="image/*" onChange={e=>{setImage(URL.createObjectURL(e.target.files[0]))}} />
      {image && <img src = {image}/>}
    <br/>
    <br/>
    
      <section className="creation__card-right">
        <section className="creation__actions">
          <Button confirm>Submit</Button>
        </section>
      </section>

  </form>
  );
}
