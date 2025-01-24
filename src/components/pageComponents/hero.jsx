import React from "react";

function Hero(props) {
  const switcher = props.switcher;
  let opacity;
  if (switcher) {
    opacity = "opacity-85";
  } else {
    opacity = "opacity-65";
  }

  return (
    <div
      className={
        switcher
          ? "hero min-h-fit shadow-md max-w-7xl mx-auto"
          : "hero min-h-fit shadow-md shadow-slate-700 mx-auto"
      }
    >
      <div className="hero-content flex-col md:flex-row max-md:text-center gap-x-8 ">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <img
              src="../public/Photo.jpg"
              className={` w-36 heroImg rounded-lg shadow-lg shadow-primary intersect:motion-preset-blur-up-lg motion-duration-1500 ${opacity}`}
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-primary">Web na mieru !</h1>
          <div className="p-4">
            <div className=" font-semibold text-xl mb-3 intersect:motion-preset-slide-up motion-delay-500">
              Web dizajn tak ako ho chceš ty !
            </div>
            Potrebujete stránku, ktorá bude prezentovať váš biznis ?
            <br />
            Možno už nejakú máte, no potrebujete aktualizovať jej obsah. <br />
            Možno nieje responzívna, alebo jej chýbajú tlačidlá, galéria,
            vizuálne efekty ? <br />
            <div
              className={
                switcher
                  ? "text-accent font-semibold drop-shadow-lg text-xl my-3 border-solid bg-base-200 bg-opacity-10 p-2 rounded-lg intersect:motion-preset-slide-up motion-delay-500"
                  : "text-primary font-semibold shadow-slate-700 shadow-lg text-xl my-3 border-solid bg-opacity-45 bg-base-200 p-2 rounded-lg intersect:motion-preset-slide-up motion-delay-500"
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
