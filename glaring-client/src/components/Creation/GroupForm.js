import React, { useState } from "react";
import Button from "../Button.js";

export default function Form(props) {
  const [name, setName] = useState(props.name || ""); //need to keep track of information for the name by using useState

  return (
    <main className="creation__card creation--create">
      <section className="creation__card-left">
        <form autoComplete="off">
          <input
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

            <input
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

           <input
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
