import React, { createRef } from 'react';
import PopupWithForm from './PopupWithForm';

const EditAvatarPopup = ({ onClose, isOpen, onUpdateAvatar }) => {
  const inputRef = createRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar(inputRef.current.value);
  }
  return (
    <PopupWithForm
        name="update-avatar"
        headerTitle="Сменить аватар"
        buttonAriaText="Сохранить изменения"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
      >
        <div className="edit-form__inputs-container">
          <input ref={inputRef} name="avatarLink" id="input-avatarLink" type="url" className="edit-form__input edit-form__input_edit_img-source" placeholder="Ссылка на новый аватар" required />
          <span className="edit-form__error input-avatarLink-error">Error</span>
        </div>
      </PopupWithForm>
  );
}

export default EditAvatarPopup;