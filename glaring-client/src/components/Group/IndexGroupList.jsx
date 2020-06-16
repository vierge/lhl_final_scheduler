/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "./ButtonGroup";

export default function GroupListItem2(props) {
  function joinGroup() {
    console.log("Join Group");
  }
  const { id, name, colour, description, photo } = props;

  return (
    <li
      css={css`
        background-color: ${colour}
        list-style: none;
        margin: 20px;
        padding: 0;
        width: 450px;
        
      `}
      onClick={(event) => console.log("clixx")} //onClick used to handle item click event that sets the day
      data-testid="group"
    >

      <div className="main">
      <main className="group">

        <div className="group__top">
          <img className="group__image" src={photo} />

          <div className="group__content">
            <div className="group__title">{name}</div>
          </div>
        </div>

        <div className="group__middle" >
          <div className="group__description">{description}</div>
        </div>

        <div className="group__bottom">

            <div className="group__bottom--button">
             <Button confirm onClick={null}>
                Join Group
             </Button>
           </div>
        
        </div>

      </main>
    </div>
    </li>
  );
}