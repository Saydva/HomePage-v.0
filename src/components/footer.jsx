import React from "react";

function Footer() {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 max-md:justify-center">
      <nav className=" flex w-full px-10 max-md:flex-col justify-center gap-8 items-center">
        <h6 className="footer-title m-0">Kontakty:</h6>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn-neutral border border-ghost p-2 rounded-md"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Mobil
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-primary">+421</h3>
            <p className="py-4 text-primary">
              <h2 className="font-bold text-lg text-primary">951172771</h2>
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Zavrieť</button>
              </form>
            </div>
          </div>
        </dialog>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn-neutral border border-ghost p-2 rounded-md"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          E-mail
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <p className="py-4">
              <h2 className="font-bold text-lg text-primary">
                <a href="">kacurikjozef@gmail.com</a>
              </h2>
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Zavrieť</button>
              </form>
            </div>
          </div>
        </dialog>
      </nav>
    </footer>
  );
}

export default Footer;
