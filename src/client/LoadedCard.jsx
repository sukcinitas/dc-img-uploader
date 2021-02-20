import React from 'react';

const LoadedCard = ({imgUrl}) => {
  return (
    <div className="card">
      <header className="card__header">
        <span className="card__icon material-icons">check_circle</span>
        <h2 className="card__heading">Uploaded Successfully!</h2>
      </header>
      <div 
        style={{backgroundImage: `url(${imgUrl})`}}
        className="card__box card__box--img" 
      />
      <div className="card__link-wrapper">
        <p className="card__link">{imgUrl}</p>
        <button size="small" className="button button--small">Copy Link</button>
      </div>
    </div>
  )
}

export default LoadedCard;