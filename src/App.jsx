import { Routes, Route } from "react-router";
import React, { useState } from "react";

import Home from "./components/pages/homePage";
import O_mne from "./components/pages/o_mne";
import Navbar from "./components/pageComponents/navbar";
import Responzívny_web from "./components/pages/responzivny_web";

function App() {
  const [output, setOutput] = useState(0);

  const effect = ({ target }) => {
    target.classList.remove("animate-fade");
    target.classList.add("animate-fade");
    // ;
  };

  const changeTheme = () => {
    let counter = array.length;
    if (output < counter - 1) {
      setOutput(output + 1);
    } else {
      setOutput(0);
    }
  };

  var opacity;

  const array = ["nord", "night"];
  if (array[output] == "nord") {
    opacity = true;
  } else {
    opacity = false;
  }
  return (
    <>
      <div data-theme={array[output]} className="bg-none">
        <Navbar changeTheme={changeTheme} effect={effect} />
        <Routes>
          <Route path="/" element={<Home opacity={opacity} />} />
          <Route path="/Responzívny_web" element={<Responzívny_web />} />
          <Route path="/O_mne" element={<O_mne />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
