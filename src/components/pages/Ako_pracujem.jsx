import React from "react";
import ObserverProvider from "../utilities/ObserverProvider";

function O_mne() {
  return (
    <ObserverProvider>
      <div className="hero-content flex-col justify-center mx-auto lg:flex-col max-lg:text-center gap-x-8 max-w-md  ">
        <div className="card glass  w-auto intersect:motion-preset-slide-left-lg motion-delay-500">
          <figure></figure>
          <div className="card-body">
            <h2 className="card-title flex justify-center">
              Ako to teda prebieha ?
            </h2>
            <p>
              Pri prvom kontakte Vám veľmi rád odpoviem na všetky otázky,
              ohľadom tvorby nového alebo úpravy Vášho už existujúceho webu.
            </p>
          </div>
        </div>
        <div className="card glass  w-auto intersect:motion-preset-slide-right-lg motion-delay-500">
          <figure></figure>
          <div className="card-body">
            <h2 className="card-title flex justify-center">
              Nasleduje príprava
            </h2>
            <p>
              Vždy najprv pripravím dve koncepty, na ktorých potom spoločne
              dotiahneme detaily webu.
            </p>
          </div>
        </div>
        <div className="card glass  w-auto intersect:motion-preset-slide-left-lg motion-delay-500">
          <figure></figure>
          <div className="card-body">
            <h2 className="card-title flex justify-center">
              Hotovo váš web je na svete
            </h2>
            <p>
              Ak už vlastníte prestor na webe (doménu. hosting.....), hneď ho
              tam môžme zverejniť, a ak nie tak Vám pomôžem s výberom.
            </p>
          </div>
        </div>
        <div className="card glass w-auto intersect:motion-preset-slide-right-lg motion-delay-500">
          <figure></figure>
          <div className="card-body">
            <h2 className="flex justify-center card-title">
              Čo za svoje peniaze dostanete
            </h2>
            <p>
              Okrem webu <br />
              Dostanete kompletný štrukturovaný zdrojový kód. <br />
              Technický popis web technológií ktoré som použil. <br />
              Heslá na správu, zálohu.... a pod.
              <br />
              <br />
            </p>
            <h2 className="card-title">
              Ak sa rozhodnete kedykoľvek na správe Vášho webu, s iným
              developerom alebo spoločnosťou tak máte kompletnú kontrolu.
            </h2>
            <p>
              <br />
              Ak budete spokojný so mnou, budem rád ak spolu budeme ďalej
              rozvíjať Váš web.
            </p>
          </div>
        </div>
      </div>
    </ObserverProvider>
  );
}

export default O_mne;
