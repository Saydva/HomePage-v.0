import Hero from "./components/hero";
import Navbar from "./components/navbar";
import React, { useState } from "react";
import Color from "./components/colors";
import Footer from "./components/footer";
import Content from "./components/content";

function App() {
  const [output, setOutput] = useState(3);

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

  return (
    <div data-theme={array[output]}>
      <Navbar changeTheme={changeTheme} themeName={array[output]} />
      <Hero />
      <Color />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
