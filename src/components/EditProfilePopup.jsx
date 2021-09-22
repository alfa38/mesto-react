import React, { useEffect, useState, useContext } from 'react';
import { СurrentUserContext } from '../contexts/CurrentUser';
import PopupWithForm from './PopupWithForm';

const EditProfilePopup = ({ onClose, isOpen, onUpdateUser }) => {
  const currentUser = useContext(СurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
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
        break;
      case 'description':
        setDescription(value);
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
    >
      <div className="edit-form__inputs-container">
        <input
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
        <span className="edit-form__error input-name-error">Error</span>
        <input
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
        <span className="edit-form__error input-profession-error">Error</span>
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;