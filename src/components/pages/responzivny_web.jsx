import React, { useState } from "react";

function Responzívny_web() {
  const [pageContent, setPageContent] = useState({
    h1: "Moja navigácia",
    button1: "Tačidlo1",
    button2: "Tačidlo2",
    button3: "Tačidlo3",
    p1: "A tu niekde je moj content - teda obsah.",
    p2: "Prvé čo potrebuje moja stránka je obsah (aký, taký tu už máme)",
    p3: "Layount --- Potrebujeme layout, tj. rozložení prvkov na stránke, je to dôležitý krok pri navrhovaní stránok. Architektúra stánky.",
    button4: "Layout",
  });

  const layout = () => {
    return "";
  };

  return (
    <div className=" max-w-7xl mx-auto flex justify-center">
      <div className="mockup-browser bg-neutral border my-6">
        <div className="mockup-browser-toolbar">
          <div className="input text-info">https://mojaStranka.sk</div>
        </div>
        {/* next div className  */}
        {/* bg-base-200 flex justify-center px-4 py-16 */}
        <div className={`${layout}`}>
          <div className={`${layout}`}>
            <nav className={`${layout}`}>
              <h1 className={`${layout}`}>{`${pageContent.h1}`}</h1>
              <button
                className={`${layout}`}
              >{`${pageContent.button1}`}</button>
              <br />
              <button
                className={`${layout}`}
              >{`${pageContent.button2}`}</button>
              <br />
              <button
                className={`${layout}`}
              >{`${pageContent.button3}`}</button>
              <br />
            </nav>
            <p className={`${layout}`}>{`${pageContent.p1}`}</p>
            <p className={`${layout}`}>{`${pageContent.p2}`}</p>
            <br />
            <p className={`${layout}`}>{`${pageContent.p3}`}</p>
            <button className="btn m-3 motion-preset-wobble">{`${pageContent.button4}`}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Responzívny_web;
