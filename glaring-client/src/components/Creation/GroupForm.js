import React, { useState } from "react";
import Button from "../Button.js";

export default function Form(props) {
  const [name, setName] = useState(props.name || ""); //need to keep track of information for the name by using useState
  const [image, setImage] = useState(null);


  return (
    <main className="creation__card creation--create">
      <section className="creation__card-left">
        <form autoComplete="off">

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
     <label for="sideNote">Side Note: </label>

           <input
            id="sideNote"
            className="creation__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Side Note"
            /*
          This must be a controlled component
        */
          />
    <br/>
    <br/>

    <input type="file" accept="image/*" onChange={e=>{setImage(URL.createObjectURL(e.target.files[0]))}} />
      {image && <img src = {image}/>}
    <br/>
    <br/>
    
        </form>
      </section>
      <section className="creation__card-right">
        <section className="creation__actions">
          <Button confirm>Submit</Button>
        </section>
      </section>
    </main>
  );
}
