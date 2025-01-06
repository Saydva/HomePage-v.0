import React from "react";

function Content() {
  return (
    <div className="flex flex-col items-center p-3">
      <div className=" flex flex-row gap-4 flex-wrap justify-center">
        <div className="card bg-neutral text-neutral-content w-96 ">
          <div className="card-body items-center text-center ">
            <h2 className="card-title">Web l</h2>
            <p>
              Moderný web <br />
              1 - 2 podstránky <br />
              od 299 €
            </p>
          </div>
        </div>
        <div className="card bg-neutral text-neutral-content w-96">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Web ll</h2>
            <p>
              Moderný web <br />
              3 - 5 podstránok <br /> od 499 €
            </p>
          </div>
        </div>
        <div className="card bg-neutral text-neutral-content w-96">
          <div className="card-body items-center text-center">
            <h2 className="card-title"> Webová aplikácia</h2>
            <p>
              Interaktívna a funkčná webová aplikácia, ktorá je rýchla, bezpečná
              ale najmä používateľsky prívetivá. od 499 €
            </p>
          </div>
        </div>
        <div className="card bg-neutral m-7">
          <div className="card-body items-center text-center">
            <p className="text-primary">
              Môj web je interaktívny, funkčný a rýchly, hlavne bezpečný a
              používateľsky prívetivý.
            </p>
          </div>
        </div>
      </div>
      <div className="card bg-neutral text-neutral-content w-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title"> Redizajn</h2>
          <p>
            {" "}
            Kľudne mi napíšte aké sú vaše predstavy,čo zmeniť alebo doplniť a
            pozrieme sa spolu na to! <br /> od 99 €
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
