import React from "react";

function Content() {
  const animeScale = " max-h-fit hover:scale-105 duration-300";
  function click({ target }) {
    target.classList.remove(...["motion-preset-expand", "motion-duration-600"]);
    target.classList.add(...["motion-preset-expand", "motion-duration-600"]);
    setTimeout(() => {
      target.classList.remove(
        ...["motion-preset-expand", "motion-duration-600"]
      );
    }, 500);
  }

  return (
    <div className=" flex flex-col items-center p-3 gap-3">
      <div className=" flex flex-row gap-4 flex-wrap justify-center max-w-7xl">
        <div
          onClick={click}
          className={`intersect:motion-preset-slide-left-lg motion-delay-500 shadow-lg shadow-black rounded-lg hover:${animeScale} `}
        >
          <div className="card bg-neutral text-neutral-content w-96">
            <div className="card-body items-center text-center rounded-md">
              <h2 className="card-title">Web l</h2>
              <p>
                Moderný web <br />
                1 - 2 podstránky <br />
                od 299 €
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={click}
          className={`intersect:motion-preset-slide-left-lg motion-delay-500 shadow-lg shadow-black rounded-lg hover:${animeScale}`}
        >
          <div className="card bg-neutral text-neutral-content w-96 ">
            <div className="card-body items-center text-center rounded-md">
              <h2 className="card-title">Web ll</h2>
              <p>
                Moderný web <br />
                3 - 5 podstránok <br /> od 499 €
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={click}
          className={`intersect:motion-preset-slide-left-lg motion-delay-500 shadow-lg shadow-black rounded-lg hover:${animeScale}`}
        >
          <div className="card bg-neutral text-neutral-content w-96">
            <div className="card-body items-center text-center  rounded-sm">
              <h2 className="card-title"> Webová aplikácia</h2>
              <p>
                Interaktívna a funkčná webová aplikácia, ktorá je rýchla,
                bezpečná ale najmä používateľsky prívetivá. od 499 €
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          onClick={click}
          className={`intersect:motion-preset-slide-left-lg motion-delay-500 shadow-lg shadow-black rounded-lg hover:${animeScale}`}
        >
          <div className="card bg-neutral text-neutral-content w-full">
            <div className="card-body items-center text-center  rounded-sm">
              <p>
                Môj web je interaktívny, funkčný a rýchly, hlavne bezpečný a
                používateľsky prívetivý.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={click}
        className={`intersect:motion-preset-slide-left-lg motion-delay-500 shadow-lg shadow-black rounded-lg hover:${animeScale}`}
      >
        <div className="card bg-neutral text-neutral-content w-96">
          <div className="card-body items-center text-center  rounded-lg">
            <h2 className="card-title"> Redizajn</h2>
            <p>
              {" "}
              Kľudne mi napíšte aké sú vaše predstavy <br />
              ,čo zmeniť alebo doplniť a pozrieme sa spolu na to! <br /> od 99 €
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
