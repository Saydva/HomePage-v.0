import React from "react";

function Navbar(props) {
  const changeTheme = props.changeTheme;
  const themeName = props.themeName;
  return (
    <div className="flex">
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">Home</a>
        <a className="btn btn-ghost text-xl">Projects</a>
        <a className="btn btn-ghost text-xl">About</a>
      </div>
      <div className="flex items-end self-end gap-6">
        <div className="stat-value text-lg pb-3">{themeName}</div>
        <button className="btn btn-primary mr-14" onClick={changeTheme}>
          Change theme
        </button>
      </div>
    </div>
  );
}

export default Navbar;
