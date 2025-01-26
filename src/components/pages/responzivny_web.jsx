import React, { useState } from "react";

function Responzívny_web() {
  const [layout, setLayout] = useState(true);
  const [responziv, setResponziv] = useState(true);

  // const that holds content on page after load
  const [pageContent, setPageContent] = useState({
    p: "Moja navigácia",
    button1: "Tačidlo1",
    button2: "Tačidlo2",
    button3: "Tačidlo3",
    p1: "A tu niekde je moj content - teda obsah. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit blanditiis distinctio consequuntur in. Quia atque amet a minus deleniti. Aspernatur, labore? Quo accusamus, fugiat esse est nihil facere incidunt! Dicta.",
    p2: "Tu je další obsah - lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere deleniti provident consequuntur ducimus, sapiente quasi tenetur nemo quo molestiae? Provident praesentium incidunt labore natus molestias tenetur corrupti! Eligendi, tenetur fuga.",
    p3: "Layount --- Potrebujeme štruktúru,  rozloženie elementov na stránke .",
    button4: "Layout",
    p4: "Naša stránka má layout jej elementy sú na mieste, skúsme jej pridať trochu štýlu, a zopar animácií. Klikni na tlačidlo Responziv",
    button5: "Responziv",
  });

  // const that holds state for layout
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
    p3: "mb-4",
    p4: " hidden",
    button4: "btn m-3 w-24 ",
    button5: "hidden",
  });

  // constant that hold state for hidden div
  const [hiddenDiv, setHiddenDiv] = useState({
    divHiden: "hidden",
  });

  // css for layout button
  const layoutArr = [
    ["flex flex-col justify:center"],
    ["flex items-center flex-col  self-start"],
    ["flex flex-row px-6 border-slate-200 "],
    ["flex justify-center items-center"],
    ["p-3"],
    ["p-3"],
    ["p-3"],
    ["p-8"],
    ["p-14 m-3"],
    ["p-14 m-3"],
    ["p-3"],
    ["btn m-3 w-24"],
    ["btn m-3 w-24"],
  ];
  // css for responzive button
  const responzivArr = [["flex "]];

  // arr with elements have to bee hiden css if layout-boolean is false
  const elementsHidenDiv = [["divHiden"]];

  // arr with elements have to bee hiden if responzive- boolean is false
  const elementsLayout = [["p4"], ["button4"], ["button5"]];

  // function thats remove css from layout
  function erase(object, elements) {
    const empty = () => {
      return "";
    };
    let obj = {};
    for (let value in object) {
      obj[value] = empty();
    }
    obj[elements[1]] = "btn m-3 w-24";
    obj[elements[0]] = "hidden";
    obj[elements[2]] = "hidden";
    return obj;
  }

  // function that remove responzive css from page
  function eraseHiddenDiv(object, elements) {
    const empty = () => {
      return "";
    };
    let obj = {};
    for (let value in object) {
      obj[value] = empty();
    }
    obj[elements[0]] = "hidden";

    return obj;
  }

  // function that fill up css from buttons
  const fill = (object, array) => {
    let obj = object;
    Object.keys(obj).forEach((key, index) => {
      obj[key] = array[index];
    });
    return obj;
  };

  //handle boolean for layout and fill or remove css
  const changeLayout = () => {
    setLayout(!layout);
    if (layout == false) {
      setPageCss(erase(pageCss, elementsLayout));
      setHiddenDiv(eraseHiddenDiv(hiddenDiv, elementsHidenDiv));
      responziveRemoveContent();
    } else if (layout == true) {
      setPageCss(fill(pageCss, layoutArr));
    }
  };

  //handle respozive css and content
  function responziveFillContent() {
    pageCss.p += [" hidden"];
    pageCss.button1 += [
      " btn bg-neutral text-slate-200 shadow-slate-300 shadow-md ml-3 motion-preset-fade motion-duration-500 motion-preset-slide-down motion-duration-500 ",
    ];
    pageCss.button2 += [
      " btn bg-neutral text-slate-200 shadow-slate-300 shadow-md ml-3 motion-preset-fade motion-duration-1500 motion-preset-slide-down motion-duration-1500 ",
    ];
    pageCss.button3 += [
      " btn bg-neutral text-slate-200 shadow-slate-300 shadow-md ml-3 motion-preset-fade motion-duration-2000 motion-preset-slide-down motion-duration-2000 ",
    ];
    pageCss.p1 += [
      " mx-4 rounded-md bg-success opacity-65 my-5 text-slate-900 hover:motion-preset-oscillate motion-loop-once ",
    ];
    pageCss.p2 += [
      " rounded-md border-slate-100 border-2 px-4 shadow-md shadow-slate-100 hover:motion-preset-oscillate motion-loop-once ",
    ];
    pageCss.p3 += [
      " text-lg motion-preset-stretch motion-loop-twice border-slate-100 border-2 shadow-primary shadow-xl rounded-lg hover:motion-preset-oscillate motion-loop-once ",
    ];
    pageCss.p4 += [
      " p-4 motion-preset-wobble motion-loop-twice hover:motion-preset-blur-right ",
    ];
    pageCss.button4 += [
      " motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[0%] ",
    ];
    pageCss.button5 += [
      " motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[0%] ",
    ];
  }

  //handle respozive css and content
  function responziveRemoveContent() {
    pageCss.p = pageCss.p.replace(" hidden", " ");
    pageCss.button1 = pageCss.button1.replace(
      " btn bg-neutral text-slate-200 shadow-slate-300 shadow-md ml-3 motion-preset-fade motion-duration-500 motion-preset-slide-down motion-duration-500 ",
      ""
    );
    pageCss.button2 = pageCss.button2.replace(
      " btn bg-neutral text-slate-200 shadow-slate-300 shadow-md ml-3 motion-preset-fade motion-duration-1500 motion-preset-slide-down motion-duration-1500 ",
      ""
    );
    pageCss.button3 = pageCss.button3.replace(
      " btn bg-neutral text-slate-200 shadow-slate-300 shadow-md ml-3 motion-preset-fade motion-duration-2000 motion-preset-slide-down motion-duration-2000 ",
      ""
    );
    pageCss.p1 = pageCss.p1.replace(
      " mx-4 rounded-md bg-success opacity-65 my-5 text-slate-900 hover:motion-preset-oscillate motion-loop-once ",
      ""
    );
    pageCss.p2 = pageCss.p2.replace(
      " rounded-md border-slate-100 border-2 px-4 shadow-md shadow-slate-100 hover:motion-preset-oscillate motion-loop-once ",
      ""
    );
    pageCss.p3 = pageCss.p3.replace(
      " text-lg motion-preset-stretch motion-loop-twice border-slate-100 border-2 shadow-primary shadow-xl rounded-lg hover:motion-preset-oscillate motion-loop-once ",
      ""
    );
    pageCss.p4 = pageCss.p4.replace(
      " p-4 motion-preset-wobble motion-loop-twice hover:motion-preset-blur-right ",
      ""
    );
    pageCss.button4 = pageCss.button4.replace(
      " motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[0%] "
    );
    pageCss.button5 = pageCss.button5.replace(
      " motion-translate-x-in-[-100%] motion-translate-y-in-[0%] motion-opacity-in-[0%] "
    );
  }

  //handle boolean for responzive and fill or remove css
  function changeResponziv() {
    setResponziv(!responziv);
    if (responziv == false) {
      setHiddenDiv(eraseHiddenDiv(hiddenDiv, elementsHidenDiv));
      responziveRemoveContent();
    } else if (responziv == true) {
      responziveFillContent();
      setHiddenDiv(fill(hiddenDiv, responzivArr));
    }
  }

  // return here all content with variables and states
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-info"
              >
                <g data-name="15.Arrow Down">
                  <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" />
                  <path d="m12 18.414-4.707-4.707 1.414-1.414L12 15.586l3.293-3.293 1.414 1.414L12 18.414z" />
                  <path d="M11 6h2v11h-2z" />
                </g>
              </svg>
            </div>
            <button
              className={`${pageCss.button4}`}
              onClick={changeLayout}
            >{`${pageContent.button4}`}</button>
            <p className={`${pageCss.p4}`}>{`${pageContent.p4}`}</p>
            <button
              className={`${pageCss.button5}`}
              onClick={changeResponziv}
            >{`${pageContent.button5}`}</button>
          </div>
          <div className={`${hiddenDiv.divHiden}`}>
            <div className="carousel w-full m-8 motion-translate-x-in-[-1%] motion-translate-y-in-[40%] motion-opacity-in-[0%] motion-duration-[1.00s]/translate motion-duration-[1.00s]/opacity">
              <div id="slide1" className="carousel-item relative w-full ">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                  className="w-full "
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                  className="w-full "
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                  className="w-full"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                  className="w-full"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Responzívny_web;
