import React from 'react';

import './App.css';

function App() {
  return (
    <>
    <div className='page'>
      <header className="header">
        <div className="header__logo"></div>
      </header>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src='https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg' alt="Ваша аватарка"></img>
            <div className="profile__avatar-overlay">
            </div>
          </div>
          <div className="profile__data-container">
            <div className="profile__name-container">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button className="profile__button profile__button_type_edit-profile" value="profile_edit" type="button" aria-label="Редактировать профиль"></button>
            </div>
            <h2 className="profile__profession">Исследователь океана</h2>
          </div>
          <button className="profile__button profile__button_type_add-card" type="button"></button>
        </section>
        <section className="cards-container">
        </section>
      </main>
      <footer className="footer">
        <p className="footer__text-container">@ 2021 Mesto Russia</p>
      </footer>
    </div>
    <div class="modal-overlay" id="modal-edit-profile">
      <div class="modal-overlay__content">
        {/* <!-- modal content start--> */}
        <button class="modal-overlay__button modal-overlay__button_type_close-modal" type="button" aria-label="Закрыть окно редактирования профиля"></button>
        <form name="form-profile-edit" class="edit-form">
          <h2 class="edit-form__header">Редактировать профиль</h2>
          <div class="edit-form__inputs-container">
            <input minlength="2" maxlength="40" name="name" id="input-name" class="edit-form__input edit-form__input_edit_name" type="text" placeholder="Введите Ваше Имя" required />
          <span class="edit-form__error input-name-error">Error</span>
          <input minlength="2" maxlength="200" name="profession" id="input-profession" class="edit-form__input edit-form__input_edit_profession" type="text" placeholder="Укажите род вашей деятельности" required />
          <span class="edit-form__error input-profession-error">Error</span>
          </div>
          
          <button class="edit-form__button edit-form__button_type_save-changes" type="submit" aria-label="Сохранить изменения">Сохранить</button>
        </form>
        {/* <!-- modal content end --> */}
      </div>
    </div>
    <div class="modal-overlay" id='modal-add-new-card'>
      <div class="modal-overlay__content">
        {/* <!-- modal content start--> */}
        <button class="modal-overlay__button modal-overlay__button_type_close-modal" type="button" aria-label="Закрыть окно редактирования профиля"></button>
        <form name="form-add-new-card" class="edit-form">
          <h2 class="edit-form__header">Новое место</h2>
          <div class="edit-form__inputs-container">
            <input name="cardName" class="edit-form__input edit-form__input_edit_name" id="input-cardname" type="text" placeholder="Название" minlength="2" maxlength="30" required />
            <span class="edit-form__error input-cardname-error">Error</span>
          <input name="cardLink"  id="input-cardlink" type="url" class="edit-form__input edit-form__input_edit_img-source" placeholder="Ссылка на картинку" required />
            <span class="edit-form__error input-cardlink-error">Error</span>
          </div>
          <button class="edit-form__button edit-form__button_type_add-card edit-form__button_disabled" type="submit" aria-label="Добавить место" disabled>Сохранить</button>
        </form>
        {/* <!-- modal content end --> */}
      </div>
    </div>
    <div class="modal-overlay" id='modal-update-avatar'>
      <div class="modal-overlay__content">
        {/* <!-- modal content start--> */}
        <button class="modal-overlay__button modal-overlay__button_type_close-modal" type="button" aria-label="Закрыть окно без обновления аватара"></button>
        <form name="form-update-avatar" class="edit-form">
          <h2 class="edit-form__header">Новое место</h2>
          <div class="edit-form__inputs-container">
          <input name="avatarLink"  id="input-avatarLink" type="url" class="edit-form__input edit-form__input_edit_img-source" placeholder="Ссылка на новую аватару" required />
            <span class="edit-form__error input-avatarLink-error">Error</span>
          </div>
          <button class="edit-form__button edit-form__button_type_add-card edit-form__button_disabled" type="submit" aria-label="Сменить аватар" disabled>Сохранить</button>
        </form>
        {/* <!-- modal content end --> */}
      </div>
    </div>
    <div class="modal-overlay" id='modal-confirm-delete'>
      <div class="modal-overlay__content">
        {/* <!-- modal content start--> */}
        <button class="modal-overlay__button modal-overlay__button_type_close-modal" type="button" aria-label="Закрыть без удаления"></button>
        <form name="form-confirm-delete" class="edit-form">
          <h2 class="edit-form__header">Вы уверены?</h2>
          <button class="edit-form__button edit-form__button_type_confirm-delete" type="submit" aria-label="Вы уверены что хотите удалить карточку?">Да</button>
        </form>
        {/* <!-- modal content end --> */}
      </div>
    </div>
    <div class="modal-overlay" id='modal-photo-viewier'>
      <div class="modal-overlay__content">
        {/* <!-- modal content start--> */}
        <button class="modal-overlay__button modal-overlay__button_type_close-modal" type="button" aria-label="Закрыть просмотр фотографии"></button>
        <figure class="photo-viewier">
          <img class="photo-viewier__image" src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg" alt="Архыз" />
          <figcaption class="photo-viewier__caption"></figcaption>
        </figure>
        {/* <!-- modal content end --> */}
      </div>
    </div>
    <template id="card-item-template">
      <div class="card-item">
        <div class="card-item__image-container">
          <img class="card-item__image" src="https://www.meme-arsenal.com/memes/c087580f123e0dbcd96faf1aec85e9b2.jpg" alt="А где?" />
          <button class="card-item__button card-item__button_type_remove-card" type="button" aria-label="Удалить"></button>
        </div>
        <div class="card-item__text-container">
          <h2 class="card-item__name">Сентинский храм, г. Карачаевск, Россия</h2>
          <div class="card-item__like-container">
            <button class="card-item__button card-item__button_type_set-like" type="button" aria-label="Поставить лайк"></button>
            <span class="card-item__like-count"></span>
          </div>
        </div>
      </div>
    </template>
    </>
  );
}

export default App;
