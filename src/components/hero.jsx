import React from "react";

function Hero() {
  return (
    <div className="hero bg-base-200 min-h-fit] ">
      <div className="hero-content flex-col lg:flex-row max-lg:text-center gap-x-8">
        <img src="../public/Photo.jpg" className="w-36 rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-3xl font-bold text-accent">Web na mieru !</h1>
          <div className="p-4">
            <div className=" font-semibold drop-shadow-lg text-xl mb-3">
              Web dizajn tak ako ho chceš ty !
            </div>
            Potrebuješ stránku, ktorá bude prezentovať tvoj biznis ?
            <br />
            Možno už nejakú máš, no potrebuješ aktualizovať jej obsah. <br />
            Možno nieje responzívna, alebo jej chýbajú tlačidlá, galéria,
            vizuálne efekty ? <br />
            <div className="text-primary font-semibold drop-shadow-lg text-xl my-3 border-solid bg-base-200 p-2 rounded-lg">
              Technológie ako aj trendy na webe sa extrémne <br /> rýchlo menia
              a posúvajú vpred
            </div>
            <div className="font-semibold">
              A tak ti možno dizajn, ktorý už máš príde len menej atraktívny ako
              ostatné....
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
