import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import Cart from "./cart/Cart";
import useStore from "../store/store";
import { ModalType } from "../models/store-types";
import EndOrder from "../layout/order/EndOrder";
import * as styles from "./Modal.module.scss";

type ModalProps = {
  modal: ModalType;
};

const Modal = ({ modal }: ModalProps) => {
  const dispatch = useStore()[1];
  const dialog = useRef<HTMLDialogElement>(null);

  let positionClass = styles.dialog__position_cart;
  if (modal === "order") {
    positionClass = styles.dialog__position_order;
  }
  useEffect(() => {
    if (modal) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [modal]);

  const handleModalClose = () => {
    if (modal === "order") {
      dispatch("CART_REMOVE_ALL_ITEMS");
    }
    dispatch("CLOSE_MODAL");
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialog.current) {
      dispatch("CLOSE_MODAL"); // Add your logic here
      if (modal === "order") {
        dispatch("CART_REMOVE_ALL_ITEMS");
      }
    }
  };

  return createPortal(
    <dialog
      className={`${styles.dialog} ${positionClass}`}
      ref={dialog}
      onClose={handleModalClose}
      onClick={handleModalClick}
    >
      {modal === "cart" && <Cart />}
      {modal === "order" && <EndOrder />}
    </dialog>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
