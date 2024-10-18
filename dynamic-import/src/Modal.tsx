import "./Modal.css";

const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>Modal Title</h2>
        <p>This is a dynamically loaded modal!</p>
      </div>
    </div>
  );
};

export default Modal;
