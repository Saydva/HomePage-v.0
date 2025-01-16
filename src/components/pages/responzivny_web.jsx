import React, { useState } from "react";

function Responzívny_web() {
  const [pageContent, setPageContent] = useState({
    p: "Moja navigácia",
    button1: "Tačidlo1",
    button2: "Tačidlo2",
    button3: "Tačidlo3",
    p1: "A tu niekde je moj content - teda obsah. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit blanditiis distinctio consequuntur in. Quia atque amet a minus deleniti. Aspernatur, labore? Quo accusamus, fugiat esse est nihil facere incidunt! Dicta.",
    p2: "Prvé čo potrebuje moja stránka je obsah (aký, taký tu už máme)",
    p3: "Layount --- Potrebujeme layout, tj. rozložení prvkov na stránke pri navrhovaní stránok. Architektúra stánky.",
    button4: "Layout",
    p4: "Naša stránka má layout jej elementy sú na mieste, skúsme jej pridať trochu štýlu a aj footer - pätička webu",
  });

  const [pageCss, setPageCss] = useState({
    div1: "flex justify:center",
    div2: "flex items-center flex-col  self-start",
    nav: "flex flex-row px-6 border-slate-200 ",
    p: "flex justify-center items-center",
    button1: "p-3",
    button2: "p-3",
    button3: "p-3",
    p1: "px-14 m-3",
    p2: "py-8",
    p3: "p-14 m-3",
    button4: "",
    p4: " p-3 hidden",
    empty() {
      return "";
    },
  });

  return (
    <div className=" max-w-7xl mx-auto flex justify-center  ">
      <div className="mockup-browser bg-neutral border my-6">
        <div className="mockup-browser-toolbar">
          <div className="input text-info">https://mojaStranka.sk </div>
        </div>
        {/* next div className  */}
        {/* bg-base-200 flex justify-center px-4 py-16 */}
        <div className={`${pageCss.div1}`}>
          <div className={`${pageCss.div2}`}>
            <nav className={`${pageCss.nav}`}>
              <p className={`${pageCss.p}`}>{`${pageContent.p}`}</p>
              <button
                className={`${pageCss.button1}`}
              >{`${pageContent.button1}`}</button>
              <br />
              <button
                className={`${pageCss.button2}`}
              >{`${pageContent.button2}`}</button>
              <br />
              <button
                className={`${pageCss.button3}`}
              >{`${pageContent.button3}`}</button>
              <br />
            </nav>
            <p className={`${pageCss.p1}`}>{`${pageContent.p1}`}</p>
            <p className={`${pageCss.p2}`}>{`${pageContent.p2}`}</p>
            <br />
            <p className={`${pageCss.p3}`}>{`${pageContent.p3}`}</p>
            <div className="animate-bounce w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g data-name="15.Arrow Down">
                  <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" />
                  <path d="m12 18.414-4.707-4.707 1.414-1.414L12 15.586l3.293-3.293 1.414 1.414L12 18.414z" />
                  <path d="M11 6h2v11h-2z" />
                </g>
              </svg>
            </div>
            <button className="btn m-3 w-24">{`${pageContent.button4}`}</button>
            <p className={`${pageCss.p4}`}>{`${pageContent.p4}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Responzívny_web;
