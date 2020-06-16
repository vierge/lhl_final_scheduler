/**@jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
import GroupItem from "./GroupItem";
import Options from "./Options";
import { useDataDispatch } from "../../hooks/useDatabase";
import { useAuth } from "../../hooks/useAuth";
import GroupForm from "./GroupForm";

const currentUser = "Marshmallow";

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
      background-color: Black;
      color: white;
    `}
    {...props}
  />
);

export default function Sidebar(props) {
  const isAuthorized = useAuth();

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

  const groupList = groups.map((element) => {
    const { colour, name, id } = element;

    return <GroupItem key={id} id={id} colour={colour} name={name} />;
  });

  return (
    <Nav>
      <Header>
        <h3
          css={css`
            margin-left: 15px;
          `}
        >
          {currentUser}
        </h3>
      </Header>
      {isAuthorized && groupList}
      {display && <GroupForm action={(event) => setDisplay(!display)} />}
      <AddGroup />
      <Options />
    </Nav>
  );
  /* <GroupItem color="deeppink" />
  <GroupItem color="mediumslateblue" />
  <GroupItem color="turquoise" /> */
}
