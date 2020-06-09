/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default function Testbed(props) {
  const { groups, users } = props;

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
