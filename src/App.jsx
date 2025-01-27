import { Routes, Route } from "react-router";
import React, { useState } from "react";
import ObserverProvider from "./components/utilities/ObserverProvider";

import Home from "./components/pages/homePage";
import Ako_pracujem from "./components/pages/Ako_pracujem";
import Navbar from "./components/pageComponents/navbar";
import Footer from "./components/pageComponents/footer";
import Responzívny_web from "./components/pages/responzivny_web";
import Bigger_screen from "./components/pageComponents/bigger_screen";
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
      {" "}
      <div data-theme={array[output]} className={` ${background} `}>
        <ObserverProvider>
          <Navbar changeTheme={changeTheme} />
        </ObserverProvider>
        <Routes>
          <Route path="/" element={<Home switcher={switcher} />} />
          <Route path="/Responzívny_web" element={<Responzívny_web />} />
          <Route path="/Ako_pracujem" element={<Ako_pracujem />} />
          <Route path="/BiggerScreen" element={<Bigger_screen />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
