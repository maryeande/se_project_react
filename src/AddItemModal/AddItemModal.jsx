import React from "react";
import ModalWithForm from "../components/ModalWithForm/ModalWithForm";

const AddItemModal = ({ activeModal, closeActiveModal, onAddItem }) => {
  <ModalWithForm
    title="New garment"
    buttonText="Add garment"
    activeModal={activeModal}
    onClose={closeActiveModal}
    isOpen={activeModal === "add-garment"}
    onSubmit={onAddItem}
  >
    <label htmlFor="name" className="modal__label">
      Name{" "}
      <input
        type="text"
        className="modal__input"
        id="name"
        placeholder="Name"
      />
    </label>
    <label htmlFor="imageURL" className="modal__label">
      Image{" "}
      <input
        type="url"
        className="modal__input"
        id="imageURL"
        placeholder="Image URL"
      />
    </label>
    <fieldset className="modal__radio-buttons">
      <legend className="modal__legend">Select the weather type:</legend>
      <label htmlFor="hot" className="modal__label modal__label_type_radio">
        <input
          type="radio"
          className="modal__radio-input"
          id="hot"
          name="input"
        />
        Hot
      </label>
      <label htmlFor="warm" className="modal__label modal__label_type_radio">
        <input
          type="radio"
          className="modal__radio-input"
          id="warm"
          name="input"
        />
        Warm
      </label>
      <label htmlFor="cold" className="modal__label modal__label_type_radio">
        <input
          type="radio"
          className="modal__radio-input"
          id="cold"
          name="input"
        />
        Cold
      </label>
    </fieldset>
  </ModalWithForm>;
};

export default AddItemModal;
