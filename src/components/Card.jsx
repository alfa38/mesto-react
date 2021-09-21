import React from "react";

const Card = ({ card, onCardClick }) => {
  const onCardClickHandler = () => {
    onCardClick(card);
  }
  return (
    <div className="card-item" >
      <div
         className="card-item__image-container"
         onClick={onCardClickHandler}
         >
        <img className="card-item__image" src={card.link} alt="Картинка" />
        <button
         className="card-item__button card-item__button_type_remove-card"
          type="button"
           aria-label="Удалить"
          />
      </div>
      <div className="card-item__text-container">
        <h2 className="card-item__name">{card.name}</h2>
        <div className="card-item__like-container">
          <button className="card-item__button card-item__button_type_set-like" type="button" aria-label="Поставить лайк" />
          <span className="card-item__like-count">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;