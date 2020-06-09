import React from "react";

export default function Test(props) {
  const { groups, users } = props;

  const groupList = groups.map((element) => {
    return <p>{element}</p>;
  });

  const userList = users.map((element) => {
    return <p>{element}</p>;
  });

  return (
    <section>
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
