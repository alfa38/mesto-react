import React, { useState, createRef } from 'react';
import PopupWithForm from './PopupWithForm';

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
  const nameRef = createRef();
  const linkRef = createRef();

  const [name, setName] = useState('');
  const [isNameValid, setNameValidity] = useState(false);
  const [nameValidationMessage, setNameValidationMessage] = useState('');
  const [link, setLink] = useState('');
  const [isLinkValid, setLinkValidity] = useState(false);
  const [linkValidationMessage, setLinkValidationMessage] = useState('');

  const handleInputs = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    switch(name) {
      case 'cardName':
        setName(value);
        setNameValidity(nameRef.current.validity.valid);
        setNameValidationMessage(nameRef.current.validationMessage);
        break;
      case 'cardLink':
        setLink(value);
        setLinkValidity(linkRef.current.validity.valid);
        setLinkValidationMessage(linkRef.current.validationMessage);
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace(name, link);
  }
  return (
    <PopupWithForm
      name="add-new-card"
      headerTitle="Новое место"
      buttonAriaText="Добавить новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isSubmitDisabled={!isNameValid || !isLinkValid}
    >
      <div className="edit-form__inputs-container">
        <input
          ref={nameRef}
          name="cardName"
          className="edit-form__input edit-form__input_edit_name"
          id="input-cardname"
          value={name}
          onChange={handleInputs}
          type="text"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className={`edit-form__error input-cardname-error ${!isNameValid ? 'edit-form__error_visible' : ''}`}>{nameValidationMessage}</span>
        <input
          ref={linkRef}
          name="cardLink"
          id="input-cardlink"
          value={link}
          onChange={handleInputs}
          type="url"
          className="edit-form__input edit-form__input_edit_img-source"
          placeholder="Ссылка на картинку"
          required
        />
        <span className={`edit-form__error input-cardname-error ${!isLinkValid ? 'edit-form__error_visible' : ''}`}>{linkValidationMessage}</span>
      </div>
    </PopupWithForm>);

}

export default AddPlacePopup;