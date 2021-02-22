import React, { useState, useRef } from 'react';

import Message from './Message';

const LoadedCard = ({ imgUrl }) => {
  const [message, setMessage] = useState('');
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
    // The clipboard-write permission is granted automatically to pages when they are in the active tab
    navigator.clipboard.writeText(imgUrlRef.current.innerText).then(() => {
      setMessage('Copying to clipboard was successful!');
      setTimeout(() => {
        setMessage('');
      }, 1000)
    }, (err) => {
      setMessage('Copying to clipboard failed!');
      setTimeout(() => {
        setMessage('');
      }, 1000)
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
      {message && <Message>{message}</Message>}
    </div>
  )
}

export default LoadedCard;