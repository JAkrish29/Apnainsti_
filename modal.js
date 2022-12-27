import React, { useState } from "react";
import "./modal.css";
import Modal from "./ProductDetails";

function Modals() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="Modal">
      <div>
        
      </div>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}
export default Modals;