import React from "react";

function Content() {
  return (
    <div className="flex flex-col items-center p-3">
      <div className=" flex flex-row gap-4">
        <div className="card bg-neutral text-neutral-content w-96">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Web stránka</h2>
            <p>
              s dizajnom na mieru <br /> jedinečná web stránka prispôsobená
              vašim potrebám, s dôrazom na moderný dizajn a responzivitu na
              zariadeniach všetkých veľkostí..
            </p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() =>
                  document.getElementById("my_modal_infowebPage").showModal()
                }
              >
                Info
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-neutral text-neutral-content w-96">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Webová aplikácia</h2>
            <p>
              Navrhujem a vyvíjam interaktívne a funkčné webové aplikácie, ktoré
              sú rýchle, bezpečné ale najmä používateľsky prívetivé.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Info</button>
            </div>
          </div>
        </div>
      </div>
      <dialog id="my_modal_infowebPage" className="modal flex justify-center">
        <div className="modal-box flex flex-row max-lg:flex-col text-center">
          <div className="flex min flex-row">
            <p>
              Moderný web s 1 - 2 podstránkami <br />
              od 299 € <br />
            </p>
            <p>
              Moderný web s 3 - 5 podstránkami <br />
              od 499 € <br />
            </p>
          </div>
          <div>
            <p className="text-secondary text-sm ">
              Vytvorenie web stránky <br />
              Responzívny dizajn <br />
              SEO optimalizácia
            </p>
          </div>
          <div className="modal-action flex justify-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Zavrieť</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Content;
