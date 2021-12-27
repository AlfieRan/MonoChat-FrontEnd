import React from "react";

const Users = () => {
  return (
    <div>
      <h1>{getParams(window)}</h1>
    </div>
  );
};

function getParams(window: Window) {
  return window.location;
}

export default Users;
