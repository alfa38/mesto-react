import React, { useEffect, useState, useContext, createRef } from 'react';
import { СurrentUserContext } from '../contexts/CurrentUser';
import PopupWithForm from './PopupWithForm';

const EditProfilePopup = ({ onClose, isOpen, onUpdateUser }) => {
  const nameRef = createRef();
  const descriptionRef = createRef();

  const currentUser = useContext(СurrentUserContext);
  const [name, setName] = useState('');
  const [isNameValid, setNameValidity] = useState(true);
  const [nameValidationMessage, setNameValidationMessage] = useState('');
  const [description, setDescription] = useState('');
  const [isDescriptionValid, setDescriptionValidity] = useState(true);
  const [descriptionValidationMessage, setDescriptionValidationMessage] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    switch(name) {
      case 'name':
        setName(value);
        setNameValidity(nameRef.current.validity.valid);
        setNameValidationMessage(nameRef.current.validationMessage);
        break;
      case 'description':
        setDescription(value);
        setDescriptionValidity(descriptionRef.current.validity.valid);
        setDescriptionValidationMessage(descriptionRef.current.validationMessage);
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description
    });
  }

  return (
    <PopupWithForm
      name='edit-profile'
      headerTitle="Редактировать профиль"
      buttonAriaText="Сохранить изменения профиля"
      closeAriaText="Закрыть без изменения"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      isSubmitDisabled={!isNameValid || !isDescriptionValid}
    >
      <div className="edit-form__inputs-container">
        <input
          ref={nameRef}
          minLength="2"
          maxLength="40"
          name="name"
          value={name}
          onChange={handleInputChange}
          id="input-name"
          className="edit-form__input edit-form__input_edit_name"
          type="text"
          placeholder="Введите Ваше Имя"
          required
        />
        <span className={`edit-form__error input-cardname-error ${!isNameValid ? 'edit-form__error_visible' : ''}`}>{nameValidationMessage}</span>
        <input
          ref={descriptionRef}
          minLength="2"
          maxLength="200"
          name="description"
          value={description}
          onChange={handleInputChange}
          id="input-profession"
          className="edit-form__input edit-form__input_edit_profession"
          type="text"
          placeholder="Укажите род вашей деятельности"
          required
        />
        <span className={`edit-form__error input-cardname-error ${!isDescriptionValid ? 'edit-form__error_visible' : ''}`}>{descriptionValidationMessage}</span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;