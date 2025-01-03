import React from "react";

function Navbar(props) {
  const changeTheme = props.changeTheme;
  const themeName = props.themeName;
  return (
    <div className="flex justify-between max-sm:flex-wrap max-sm:justify-end ">
      <div className="navbar bg-base-100">
        <a className="btn btn-ghost text-xl">Home</a>
        <a className="btn btn-ghost text-xl">Projects</a>
        <a className="btn btn-ghost text-xl">About</a>
      </div>
      <div className="flex items-center gap-6">
        <div className="stat-value text-lg">{themeName}</div>
        <button
          className="btn btn-primary mr-14 max-sm:mr-0"
          onClick={changeTheme}
        >
          Change theme
        </button>
      </div>
    </div>
  );
}

export default Navbar;
