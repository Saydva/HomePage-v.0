import { Routes, Route } from "react-router";
import React, { useState } from "react";

import Home from "./components/pages/homePage";
import O_mne from "./components/pages/o_mne";
import Navbar from "./components/pageComponents/navbar";
import Footer from "./components/pageComponents/footer";
import Responzívny_web from "./components/pages/responzivny_web";
// import "../public/notebook.jpg";

function App() {
  const [output, setOutput] = useState(0);

  const changeTheme = () => {
    let counter = array.length;
    if (output < counter - 1) {
      setOutput(output + 1);
    } else {
      setOutput(0);
    }
  };

  var switcher;
  var background;

  const array = ["nord", "night"];
  if (array[output] == "nord") {
    switcher = true;
    background = " bg-[url('../public/notebook1.jpg')] bg-cover ";
  } else {
    switcher = false;
    background = "bg-[url('../public/pic-code1.jpg')] bg-cover";
  }
  return (
    <>
      <div data-theme={array[output]} className={` ${background}`}>
        <Navbar changeTheme={changeTheme} />
        <Routes>
          <Route path="/" element={<Home switcher={switcher} />} />
          <Route path="/Responzívny_web" element={<Responzívny_web />} />
          <Route path="/O_mne" element={<O_mne />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
