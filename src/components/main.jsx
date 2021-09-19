import React, { useEffect, useState } from "react";

import Card from "./card";

import Api from "../utils/api";

const Main = ({ onAddPlace, onEditAvatar, onEditProfile, onCardClick }) => {


  const [userName, setUserName] = useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = useState("Исследователь океана");
  const [userAvatar, setUserAvatar] = useState("https://pictures.s3.yandex.net/frontend-developer/common/ava.jpg");

  const [cards, setCards] = useState([]);
  useEffect(() => {
    Api.getUserInfo().then((response) => {
      setUserName(response.name);
      setUserAvatar(response.avatar);
      setUserDescription(response.about);
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  useEffect(() => {
    Api.getInitialCards().then((response) => {
      setCards(response);
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="Ваш аватар"></img>
          <div
            className="profile__avatar-overlay"
            onClick={onEditAvatar} />
        </div>
        <div className="profile__data-container">
          <div className="profile__name-container">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__button profile__button_type_edit-profile"
              value="profile_edit"
              type="button"
              aria-label="Редактировать профиль"
              onClick={onEditProfile}
            />
          </div>
          <h2 className="profile__profession">{userDescription}</h2>
        </div>
        <button
          className="profile__button profile__button_type_add-card"
          type="button"
          onClick={onAddPlace}
        />
      </section>
      <section className="cards-container">
        {cards.map((cardItem, key) => {
          return <Card card={cardItem} onCardClick={onCardClick} key={`cardItem${key}`}/>
        })}
      </section>
    </main>
  );
}

export default Main;