import React from "react";

function Navbar(props) {
  const changeTheme = props.changeTheme;
  const themeName = props.themeName;
  return (
    <div className="flex justify-between max-sm:flex-wrap max-sm:justify-end ">
      <div className="navbar bg-base-100 gap-x-2">
        <a href="/" className="btn btn-ghost text-xl">
          Domov
        </a>
        <a className="btn btn-ghost text-xl">Responzívny web</a>
        <a className="btn btn-ghost text-xl">O mne</a>
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
