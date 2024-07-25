import "./ItemModal.css";

function ItemModal({ isOpen, onClose, card }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          className="modal__close modal__close_preview"
          type="button"
        ></button>
        <img
          src={card.imageUrl}
          alt="clothing item preview"
          className="modal__image"
        />
        <div className="modal__footer">
          <div className="modal__card-info">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <div className="modal__delete">
            <button
              className="modal__delete-button"
              type="button"
              onClick={(e) => onDeleteItem(card._id)}
            >
              Delete item
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
