import React, { useRef } from 'react';

const LoadedCard = ({imgUrl}) => {
  const imgUrlRef = useRef(null);

  const clipText = () => {
    if (!navigator.clipboard) {
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(imgUrlRef.current);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('copy');
      return;
    }
    navigator.clipboard.writeText(imgUrlRef.current.innerText).then(() => {
      console.log('Copying to clipboard was successful!');
    }, (err) => {
      console.error(err);
    });
  }

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
        <p className="card__link" ref={imgUrlRef}>{imgUrl}</p>
        <button size="small" className="button button--small" onClick={clipText}>Copy Link</button>
      </div>
    </div>
  )
}

export default LoadedCard;