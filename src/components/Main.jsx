import React, { useEffect, useState } from "react";

import Card from "./Card";
import { СurrentUserContext } from '../contexts/CurrentUser';

import Api from "../utils/api";
import { useContext } from "react";

const Main = ({ onAddPlace, onEditAvatar, onEditProfile, onCardClick }) => {

  const currentUser = useContext(СurrentUserContext);


  const [cards, setCards] = useState([]);
  useEffect(() => {
    Api.getInitialCards().then((response) => {
      setCards(response);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const handleCardLike = (cardId, isLiked) => {
    const apiCall = isLiked ? () => Api.unlike(cardId) : () => Api.like(cardId);
    apiCall(cardId).then((response) => {
      const newCards = cards.map((cardItem) => {
        return cardItem._id === response._id ? response : cardItem;
      })
      setCards(newCards);
    }).catch((error) => {
      console.log(error);
    });
  }

  const handleCardDelete = (cardId) => {
    Api.deleteCard(cardId).then(() => {
      const newCards = cards.filter((cardItem) => {
        return cardItem._id !== cardId;
      });
      setCards(newCards);
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={currentUser.avatar} alt="Ваш аватар"></img>
          <div
            className="profile__avatar-overlay"
            onClick={onEditAvatar} />
        </div>
        <div className="profile__data-container">
          <div className="profile__name-container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__button profile__button_type_edit-profile"
              value="profile_edit"
              type="button"
              aria-label="Редактировать профиль"
              onClick={onEditProfile}
            />
          </div>
          <h2 className="profile__profession">{currentUser.about}</h2>
        </div>
        <button
          className="profile__button profile__button_type_add-card"
          type="button"
          onClick={onAddPlace}
        />
      </section>
      <section className="cards-container">
        {cards.map((cardItem, key) => {
          return (
            <Card
              card={cardItem}
              onCardClick={onCardClick}
              key={`cardItem${cardItem._id}`}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          )
        })}
      </section>
    </main>
  );
}

export default Main;