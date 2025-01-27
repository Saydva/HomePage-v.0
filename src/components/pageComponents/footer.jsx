import React from "react";

function Footer() {
  const animeScale = "hover:-translate-y-1 hover:scale-110 duration-300 ";

  return (
    <footer className="footer bg-neutral text-neutral-content p-10 max-md:justify-center rounded-t-lg max-w-7xl mx-auto">
      <nav className=" flex w-full px-10 max-md:flex-col justify-center gap-8 items-center">
        <h6 className="footer-title m-0">Kontakty:</h6>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className={`btn-neutral border border-ghost p-2 rounded-md hover:${animeScale}`}
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Mobil
        </button>
        <dialog id="my_modal_1" className="modal flex justify-center">
          <div className="modal-box flex flex-col text-center">
            <div className="text-primary text-xl">+421951172771</div>
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
          className={`btn-neutral border border-ghost p-2 rounded-md hover:${animeScale}`}
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          E-mail
        </button>
        <dialog id="my_modal_2" className="modal flex justify-center">
          <div className="modal-box flex flex-col text-center">
            <address className="text-primary text-xl">
              <a href="mailto:webmaster@example.com">kacurikjozef@gmail.com</a>
            </address>
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
