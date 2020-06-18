/**@jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
import GroupItem from "./GroupItem";
import Options from "./Options";
import { useDataDispatch, useDataState } from "../../hooks/useDatabase";
import { useAuth } from "../../hooks/useAuth";
import GroupForm from "./GroupForm";

const Nav = (props) => (
  <nav
    css={css`
      position: fixed;
      top: 40px;
      left: 0;
      height: calc(100vh - 20px);
      width: 200px;
      background-color: #333;
    `}
    {...props}
  />
);

const Header = (props) => (
  <div
    css={css`
      display: flex;
      justify-content: left;
      align-items: center;
      width: 100%;
      height: 30px;
      background-color: ${props.colour};
      color: white;
      border-bottom: 3px solid #333;
    `}
    {...props}
  />
);

export default function Sidebar(props) {
  const isAuthorized = useAuth();
  const {
    current: { user, group },
  } = useDataState();
  console.log(user);

  const [display, setDisplay] = useState(false);

  const { groups } = props;

  const AddGroup = (props) => (
    <GroupItem
      name="addgroup"
      button="+"
      colour="deeppink"
      action={(event) => setDisplay(!display)}
      // {...props}
    />
  );

  const groupList =
    groups !== undefined
      ? groups.map((element) => {
          const { colour, name, id } = element;

          return <GroupItem key={id} id={id} colour={colour} name={name} />;
        })
      : () => (
          <div>
            <p>you have no groups... add one below!</p>
          </div>
        );

  return (
    <Nav>
      <Header colour={group.colour}>
        <h3
          css={css`
            margin-left: 15px;
          `}
        >
          {user.name !== undefined && user.name}
        </h3>
      </Header>
      {isAuthorized && groupList}
      {display && <GroupForm action={(event) => setDisplay(!display)} />}
      {user.length !== 0 && <AddGroup />}
      <Options />
    </Nav>
  );
  /* <GroupItem color="deeppink" />
  <GroupItem color="mediumslateblue" />
  <GroupItem color="turquoise" /> */
}
