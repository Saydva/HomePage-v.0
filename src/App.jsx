import Hero from "./components/hero";
import Navbar from "./components/navbar";
import React, { useState } from "react";

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

  const array = [
    "light",
    "dark",
    "cupcake",
    "emerald",
    "retro",
    "cyberpunk",
    "lofi",
    "pastel",
  ];

  console.log();
  return (
    <div data-theme={array[output]}>
      <Navbar changeTheme={changeTheme} themeName={array[output]} />
      <Hero />
    </div>
  );
}

export default App;
