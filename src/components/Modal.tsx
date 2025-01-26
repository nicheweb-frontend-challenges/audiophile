import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import Cart from "./cart";
import useStore from "../store/store";
import { ModalType } from "../models/store-types";

type ModalProps = {
  modal: ModalType;
};

const Modal = ({ modal }: ModalProps) => {
  const dispatch = useStore(true)[1];
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (modal) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [modal]);

  const handleModalClose = () => {
    dispatch("CLOSE_MODAL");
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialog.current) {
      dispatch("CLOSE_MODAL"); // Add your logic here
    }
  };

  return createPortal(
    <dialog ref={dialog} onClose={handleModalClose} onClick={handleModalClick}>
      {modal === "cart" && <Cart />}
    </dialog>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
