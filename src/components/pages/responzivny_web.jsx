import React, { useState } from "react";

function Responzívny_web() {
  const [layout, setLayout] = useState(true);
  const [pageContent, setPageContent] = useState({
    p: "Moja navigácia",
    button1: "Tačidlo1",
    button2: "Tačidlo2",
    button3: "Tačidlo3",
    p1: "A tu niekde je moj content - teda obsah. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit blanditiis distinctio consequuntur in. Quia atque amet a minus deleniti. Aspernatur, labore? Quo accusamus, fugiat esse est nihil facere incidunt! Dicta.",
    p2: "Prvé čo potrebuje moja stránka je obsah (aký, taký tu už máme)",
    p3: "Layount --- Potrebujeme layout, tj. rozložení prvkov na stránke pri navrhovaní stránok. Architektúra stánky.",
    button4: "Layout",
    p4: "Naša stránka má layout jej elementy sú na mieste, skúsme jej pridať trochu štýlu, footer - pätičku webu, a zopar animácií.",
    button5: "Responziv",
  });

  const [pageCss, setPageCss] = useState({
    div1: "",
    div2: "",
    nav: "",
    p: "",
    button1: "",
    button2: "",
    button3: "",
    p1: "",
    p2: "",
    p3: "",
    button4: "",
    p4: " hidden",
    button5: "hidden",
  });

  const layoutArr = [
    ["flex justify:center"],
    ["flex items-center flex-col  self-start"],
    ["flex flex-row px-6 border-slate-200 "],
    ["flex justify-center items-center"],
    ["p-3"],
    ["p-3"],
    ["p-3"],
    ["px-14 m-3"],
    ["py-8"],
    ["p-14 m-3"],
    [""],
    [" p-3"],
    ["btn m-3 w-24 "],
    ["btn m-3 w-24"],
  ];
  const elements = [["button5"], ["p4"]];

  function erase(object, elements) {
    const empty = () => {
      return "";
    };
    let obj = {};
    for (let value in object) {
      obj[value] = empty();
    }
    obj[elements[1]] = "hidden";
    obj[elements[0]] = "hidden";
    return obj;
  }

  const fill = (object) => {
    let obj = object;
    Object.keys(obj).forEach((key, index) => {
      obj[key] = layoutArr[index];
    });
    return obj;
  };

  //handle boolean
  const changeLayout = () => {
    setLayout(!layout);

    if (layout == false) {
      //clone
      setPageCss(erase(pageCss, elements));
    } else if (layout == true) {
      setPageCss(fill(pageCss));
    }
  };

  // handle boolean for respinziv

  return (
    <div className=" max-w-7xl mx-auto flex justify-center  ">
      <div className="mockup-browser bg-neutral border my-6">
        <div className="mockup-browser-toolbar">
          <div className="input text-info">https://mojaStranka.sk </div>
        </div>
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
            <div className="animate-bounce w-6 h-6 fill-infoa">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g data-name="15.Arrow Down">
                  <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" />
                  <path d="m12 18.414-4.707-4.707 1.414-1.414L12 15.586l3.293-3.293 1.414 1.414L12 18.414z" />
                  <path d="M11 6h2v11h-2z" />
                </g>
              </svg>
            </div>
            <button
              className="btn m-3 w-24"
              onClick={changeLayout}
            >{`${pageContent.button4}`}</button>
            <p className={`${pageCss.p4}`}>{`${pageContent.p4}`}</p>
            <button
              className={`${pageCss.button5}`}
              onClick={changeResponziv}
            >{`${pageContent.button5}`}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Responzívny_web;
