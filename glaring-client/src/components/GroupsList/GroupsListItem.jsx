/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useDataDispatch, useDataState } from "../../hooks/useDatabase";
import Button from "./ButtonGroup";

export default function GroupsListItem(props) {
  function joinGroup() {
    console.log("Join Group");
  }

  const callDatabase = useDataDispatch();
  const state = useDataState();

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

          <div className="group__middle">
            <div className="group__description">{description}</div>
          </div>

          <div className="group__bottom">
            <div className="group__bottom--button">
              <Button
                confirm
                onClick={(event) => callDatabase("JOINGROUP", id)}
              >
                Join Group
              </Button>
            </div>
          </div>
        </main>
      </div>
    </li>
  );
}
