/**@jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/core";
import NavGroup from "./Group";
import Options from "./Options";
// import NavGroupList from "./GroupList"

const currentUser = "Marshmallow";

const Nav = (props) => (
  <nav
    css={css`
      position: fixed;
      top: 40px;
      left: 0;
      height: calc(100vh - 20px);
      width: 200px;
      background-color: #999;
    `}
    {...props}
  />
);

const Header = (props) => (
  <div
    css={css`
      display: flex;
      justify-content: center;
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
  const { groups, setGroup } = props;

  console.log(groups);

  const groupList = groups.map((element) => {
    const { colour, name, id } = element;
    return (
      <NavGroup
        setGroup={setGroup}
        key={id}
        id={id}
        colour={colour}
        name={name}
      />
    );
  });

  return (
    <main>
      <Nav>
        <Header>
          <h3>{currentUser}</h3>
        </Header>
        {groupList}
        <NavGroup
          colour="deeppink"
          name="Addgroup?"
          button="+"
          setGroup={null}
        />
        <Options />
      </Nav>
    </main>
  );
  /* <NavGroup color="deeppink" />
  <NavGroup color="mediumslateblue" />
  <NavGroup color="turquoise" /> */
}
