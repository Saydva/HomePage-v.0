import React, { useState } from "react";

function App() {
  const [output, setOutput] = useState(0);

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

  const changeOutput = () => {
    let counter = array.length;
    if (output < counter - 1) {
      setOutput(output + 1);
    } else {
      setOutput(0);
    }
  };

  console.log(array[output]);

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen" data-theme={array[output]}>
        <div className="hero-content text-center flex-col">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary" onClick={changeOutput}>
              Theme
            </button>
          </div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-value">{array[output]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
