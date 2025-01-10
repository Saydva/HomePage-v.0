import React from "react";

function Hero(props) {
  const opacity = props.opacity;
  const button = document.querySelectorAll(".test");

  console.log(button);
  return (
    <div
      className={
        opacity
          ? "hero bg-base-200 min-h-fit shadow-md "
          : "hero bg-base-200 min-h-fit shadow-slate-700 shadow-md "
      }
    >
      <div className="hero-content flex-col lg:flex-row max-lg:text-center gap-x-8 max-w-3xl">
        <img
          src="../public/Photo.jpg"
          className={
            opacity
              ? "w-36 test rounded-lg shadow-lg shadow-primary opacity-85"
              : "w-36 test rounded-lg shadow-lg shadow-primary opacity-50"
          }
        />
        <div>
          <h1 className="text-3xl font-bold text-accent">Web na mieru !</h1>
          <div className="p-4">
            <div className=" font-semibold text-xl mb-3">
              Web dizajn tak ako ho chceš ty !
            </div>
            Potrebujete stránku, ktorá bude prezentovať váš biznis ?
            <br />
            Možno už nejakú máte, no potrebujete aktualizovať jej obsah. <br />
            Možno nieje responzívna, alebo jej chýbajú tlačidlá, galéria,
            vizuálne efekty ? <br />
            <div
              className={
                opacity
                  ? "text-primary font-semibold drop-shadow-lg text-xl my-3 border-solid bg-base-200 p-2 rounded-lg"
                  : "text-primary font-semibold shadow-slate-700 shadow-lg text-xl my-3 border-solid bg-base-200 p-2 rounded-lg"
              }
            >
              Technológie ako aj trendy na webe sa extrémne <br /> rýchlo menia
              a posúvajú vpred
            </div>
            <div className="font-semibold">
              A tak vám možno dizajn, ktorý už máte príde len menej atraktívny
              ako ostatné....
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
