import React from "react";

function Hero() {
  return (
    <div className="hero bg-base-200 min-h-fit drop-shadow-md">
      <div className="hero-content flex-col lg:flex-row max-lg:text-center gap-x-8">
        <div className="drop-shadow-md">
          <img
            src="../public/Photo.jpg"
            className="w-36 rounded-lg shadow-2xl "
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-accent">Web na mieru !</h1>
          <div className="p-4">
            <div className=" font-semibold drop-shadow-lg text-xl mb-3">
              Web dizajn tak ako ho chceš ty !
            </div>
            Potrebujete stránku, ktorá bude prezentovať váš biznis ?
            <br />
            Možno už nejakú máte, no potrebujete aktualizovať jej obsah. <br />
            Možno nieje responzívna, alebo jej chýbajú tlačidlá, galéria,
            vizuálne efekty ? <br />
            <div className="text-primary font-semibold drop-shadow-lg text-xl my-3 border-solid bg-base-200 p-2 rounded-lg">
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
