import { Button } from "@mui/material";
import "./Modal.css";
import SendIcon from "@mui/icons-material/Send";

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        <Button
          style={{ position: "absolute", top: "1rem", right: "1rem" }}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Cerrar
        </Button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
