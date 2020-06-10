import React from "react";
import Button from "../Button.js";


export default function GroupComponentShow(props) {
return (
<main className="creation__card creation__card--show">
  <section className="creation__card-left">
    <h2 className="text--regular">An event goes here</h2>
    <h3 className="text--regular">An event goes here</h3>
    <h4 className="text--regular">An event goes here</h4>

    <section className="interviewer">

    </section>
  </section>

     <section className = "creation__card-right">
        <section className = "creation__actions">

          <Button register>Join Group</Button>
        </section>
    </section>
</main>

  );
}