import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import Cart from "./cart/Cart";
import useStore from "../store/store";
import { ModalType } from "../models/store-types";
import EndOrder from "../layout/order/EndOrder";

type ModalProps = {
  modal: ModalType;
};

const Modal = ({ modal }: ModalProps) => {
  const dispatch = useStore()[1];
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
      {modal === "order" && <EndOrder />}
    </dialog>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
