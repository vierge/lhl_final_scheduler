/**@jsx jsx */

import { React, useState } from "react";
import { css, jsx } from "@emotion/core";
import NavGroup from "./Group";
import Options from "./Options";
// import axios from "axios";

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


const GroupForm = (props) => {

  const GroupFormButton = (props) => {
    const {color, name} = props;
    return <button 
      css={css`
        display: inline-block;
        border: none;
        color: white;
        background-color: ${color};
        width: 50%;
        height: 32px;
          
        &:hover {
            background-color: white;
            color: ${color};
          }
      `
      }
    >{name}</button>
  }


  return (<div 
      id="IM HERE!!!!!!! LOOK AT ME" 
      css={css`z-index: 1000; height: 300px; width: 200px; background-color: gray; position: relative; top: 0px; left: 0px;`}>
      <div css={css`position: absolute; bottom: -30px; right: 0; width: 100%`}>
        <GroupFormButton color="teal" name="CANCEL" />
        <GroupFormButton color="black" name="SUBMIT" />
      </div>
  </div>)
}

export default function Sidebar(props) {
  const { groups, setGroup, getDirectory, addGroup, removeGroup } = props;

  const [ isDisplaying, setIsDisplaying ] = useState(false)

  const modal = () => {
    console.log("cast magic")
    setIsDisplaying(!isDisplaying);
  }

  const AddGroup = (props) => (
    <NavGroup
      name="addgroup"
      button="+"
      colour="deeppink"
      setGroup={modal}
          // ((prev) => {...prev, current: views: "createGroup"}}
        // addGroup({ name: "charlie", user_id: 1, description: "UGH" })
      
      {...props}
    /> 
    
  );

  const groupList = groups.map((element) => {
    const { colour, name, id } = element;
    return (
      <NavGroup
        setGroup={setGroup}
        key={id}
        id={id}
        colour={colour}
        name={name}
        removeGroup={removeGroup}
      />
    );
  });

  return (
    <Nav>
      <Header>
        <h3>{currentUser}</h3>
      </Header>
      {groupList}
      {isDisplaying && <GroupForm />}
      <AddGroup />
      <Options getDirectory={getDirectory} />
    </Nav>
  );
  /* <NavGroup color="deeppink" />
  <NavGroup color="mediumslateblue" />
  <NavGroup color="turquoise" /> */
}
