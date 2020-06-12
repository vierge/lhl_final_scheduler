import React from "react";
import styled from "@emotion/styled";
import NavGroup from "./Group";
import Options from "./Options";
// import NavGroupList from "./GroupList"

const currentUser = "Marshmallow";

const Nav = styled.nav`
  position: fixed;
  top: 40px;
  left: 0;
  height: calc(100vh - 20px);
  width: 200px;
  background-color: #999;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  background-color: Black;
  color: white;
`;

export default function Sidebar(props) {
  const { groups } = props;

  console.log(groups);

  const groupList = groups.map((element) => {
    const { colour, name, id } = element;
    return <NavGroup key={id} colour={colour} name={name} />;
  });

  return (
    <main>
      <Nav>
        <Header>
          <h3>{currentUser}</h3>
        </Header>
        {groupList}
        <Options />
      </Nav>
    </main>
  );
  /* <NavGroup color="deeppink" />
  <NavGroup color="mediumslateblue" />
  <NavGroup color="turquoise" /> */
}
