/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default function Testbed(props) {
  const { groups, users, setGroupData } = props;

  const groupList = groups.map((element) => {
    const { name } = element;
    return <p>{name}</p>;
  });

  const userList = users.map((element) => {
    const { name } = element;
    return <p>{name}</p>;
  });

  return (
    <section
      css={css`
        position: absolute;
        bottom: 0;
        right: 50px;
        color: black;
      `}
    >
      <button
        onClick={(event) => {
          setGroupData(2);
        }}
      >
        Click me to set the current group to 2!
      </button>
      <div>
        <h1>GROUPS HERE</h1>
        {groupList}
      </div>
      <div>
        <h1>USERS HERE</h1>
        {userList}
      </div>
    </section>
  );
}
