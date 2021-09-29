import React, { useState, useRef } from 'react';

import Message from './Message';

const LoadedCard = ({ imgUrl, isImgLoaded, cb }) => {
  const [message, setMessage] = useState('');
  const imgUrlRef = useRef(null);

  const clipText = async () => {
    const successMsg = 'Copying to clipboard was successful!';
    const errorMsg = 'Copying to clipboard failed!';
    if (!navigator.clipboard) {
      setMessage(errorMsg);
      setTimeout(() => {
        setMessage('');
      }, 1500);
      return;
      }
    // The clipboard-write permission is granted automatically to pages when they are in the active tab
    try {
      await navigator.clipboard.writeText(imgUrlRef.current.innerText);
      setMessage(successMsg);
    } catch (err) {
      setMessage(errorMsg);
    } finally {
      setTimeout(() => {
        setMessage('');
      }, 1500)
    }
  }

  return (
    <div className={isImgLoaded && imgUrl ? 'card' : 'card card--hidden'}>
      <header className="card__header">
        <span className="card__icon material-icons">check_circle</span>
        <h2 className="card__heading">Uploaded Successfully!</h2>
      </header>
      <img className="card__box card__box--img" src={imgUrl} onLoad={cb} />
      <div className="card__link-wrapper">
        <p className="card__link" ref={imgUrlRef}>{imgUrl}</p>
        <button size="small" className="button button--small" onClick={clipText}>Copy Link</button>
      </div>
      {message && <Message>{message}</Message>}
    </div>
  )
}

export default LoadedCard;