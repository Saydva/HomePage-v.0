import React from "react";

function Bigger_screen() {
  return (
    <div className="flex justify-center m-10 h-screen">
      <button
        className="btn bg-transparent hover:bg-error text-white"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Upozornenie
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-neutral flex-col justify-center">
          <h3 className="font-bold text-lg">Upozornenie!</h3>
          <p className="py-4">
            Túto sekciu otvorte prosím na väčšom zariadení,
            <br /> s väčším pomerom strán !! <br /> Ďakujem.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Bigger_screen;
