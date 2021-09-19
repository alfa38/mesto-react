import React from 'react';

const PopupWithForm = ({ children, isOpen, name, headerTitle, okButtonText, closeAriaText, buttonAriaText, onClose }) => {
  return (
    <div className={`modal-overlay ${isOpen ? 'modal-overlay_open' : ''}`} id={`modal-${name}`}>
      <div className="modal-overlay__content">
        <button
          onClick={onClose}
          className="modal-overlay__button modal-overlay__button_type_close-modal"
          type="button"
          aria-label={closeAriaText ?? "Закрыть"}></button>
        <form name={`form-${name}`} className="edit-form">
          <h2 className="edit-form__header">{headerTitle}</h2>
          {children}
          <button
            className="edit-form__button edit-form__button_type_save-changes"
            type="submit"
            aria-label={buttonAriaText ?? "Сохранить"}>
            {okButtonText ?? "Сохранить"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
