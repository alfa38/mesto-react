import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ModalWithImage from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import { СurrentUserContext } from '../contexts/CurrentUser';
import Api from '../utils/api';

function App() {

  const [currentUser, setCurrentUser] = useState({name: "Жак-Ив Кусто", about: "Исследователь океана", _id: 'someCompletelyAndAbsolutelyRandomId', avatar: "https://proza.ru/pics/2020/06/11/119.jpg"});
  const [isEditProfilePopupOpen, setEditProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlaceModalOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(undefined);

  const handleEditAvatarClick = () => {
    setEditAvatarOpen(true);
  }

  const handleEditProfileClick = () => {
    setEditProfileOpen(true);
  }

  const handleAddPlaceClick = () => {
    setAddPlaceModalOpen(true)
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const handleUpdateUser  = (user) => {
    Api.updateProfile(user).then((response) => {
      setCurrentUser(response);
      closeAllPopups();
    }).catch((error) => {
      console.log(error);
    });
  }

  const closeAllPopups = () => {
    setEditProfileOpen(false);
    setAddPlaceModalOpen(false);
    setEditAvatarOpen(false);
    setSelectedCard(undefined);
  }

  useEffect(() => {
    Api.getUserInfo().then((response) => {
      setCurrentUser(response);
    }).catch((error) => {
      console.log(error);
    });
  }, []);



  return (
    <СurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header />
        <Main
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
      <PopupWithForm
        name="add-new-card"
        headerTitle="Новое место"
        buttonAriaText="Добавить новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="edit-form__inputs-container">
          <input name="cardName" className="edit-form__input edit-form__input_edit_name" id="input-cardname" type="text" placeholder="Название" minLength="2" maxLength="30" required />
          <span className="edit-form__error input-cardname-error">Error</span>
          <input name="cardLink" id="input-cardlink" type="url" className="edit-form__input edit-form__input_edit_img-source" placeholder="Ссылка на картинку" required />
          <span className="edit-form__error input-cardlink-error">Error</span>
        </div>
      </PopupWithForm>
      <PopupWithForm
        name="update-avatar"
        headerTitle="Сменить аватар"
        buttonAriaText="Сохранить изменения"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="edit-form__inputs-container">
          <input name="avatarLink" id="input-avatarLink" type="url" className="edit-form__input edit-form__input_edit_img-source" placeholder="Ссылка на новый аватар" required />
          <span className="edit-form__error input-avatarLink-error">Error</span>
        </div>
      </PopupWithForm>
      <PopupWithForm
        name="confirm-delete"
        headerTitle="Вы уверены?"
        okButtonText='Да'
        buttonAriaText="Подтвердить удаление карточки"
        onClose={closeAllPopups}
      >
      </PopupWithForm>
      <ModalWithImage
        onClose={closeAllPopups}
        card={selectedCard}
        />
    </СurrentUserContext.Provider>
  );
}

export default App;
