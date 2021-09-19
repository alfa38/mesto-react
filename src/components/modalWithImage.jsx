import React, {useState} from "react";
import { useEffect } from "react/cjs/react.development";

const ModalWithImageComponent = ({ card, onClose }) => {
  const [link, setLink] = useState('');
  useEffect(() => {
    if (!card) {
      setTimeout(() => setLink(''), 500);
    } else {
      setLink(card.link);
    }
  }, [card]);
  return (
    <div className={`modal-overlay ${card ? "modal-overlay_open" : ""}`} id="modal-photo-viewier">
      <div className="modal-overlay__content">
        <button
          className="modal-overlay__button modal-overlay__button_type_close-modal"
          type="button"
          aria-label="Закрыть просмотр фотографии"
          onClick={onClose} />
        <figure className="photo-viewier">
          <img className="photo-viewier__image" src={link} alt={card && card.name ? card.name : ''} />
          <figcaption className="photo-viewier__caption"></figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ModalWithImageComponent;