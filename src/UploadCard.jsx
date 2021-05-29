import React, { useState, useEffect, useRef } from 'react';

import Message from './Message';
import image from '../public/image.svg';

const UploadCard = ({ cb }) => {
  const [message, setMessage] = useState('');
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const dropZone = useRef();

  const passOnToTransfer = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let file;
    if (e.target === dropZone.current || e.target.parentNode === dropZone.current) {
      // for drop
      file = e.dataTransfer.files[0];
    } else if (e.currentTarget.files && e.currentTarget.files.length !== 0) {
      // for select
      file = e.currentTarget.files[0];
    } else {
      return;
    }

    // multer limits does not work ??
    if (file.size > 5 * 1024 * 1024) {
      setMessage('File size must not exceed 5 MB!');
      setTimeout(() => {
        setMessage('');
      }, 1500)
      return;
    }
    const formData = new FormData();
    formData.append('image', file);
    cb(formData);
  }

  const preventDefaultBehavior = (e) => {
    if (e.target !== dropZone.current && e.target.parentNode !== dropZone.current) {
      // controls visual feedback, which cursor is displayed
      e.dataTransfer.effectAllowed = 'none';
      dropZone.current && dropZone.current.classList.remove('card__box--drop-selected');
    } else {
      e.dataTransfer.effectAllowed = 'all';
      dropZone.current && dropZone.current.classList.add('card__box--drop-selected');
    }
    e.preventDefault();
    e.stopPropagation();
  }

  useEffect(() => {
    window.addEventListener('dragover', (e) => preventDefaultBehavior(e), false);
    window.addEventListener('drop', (e) => passOnToTransfer(e), false);  

    return function cleanup() {
      window.removeEventListener('dragover', (e) => preventDefaultBehavior(e), false);
      window.removeEventListener('drop', (e) => passOnToTransfer(e), false);
    }
  });

  
  return (
    <form className={isImgLoaded ? 'card' : 'card card--hidden'} onSubmit={cb}>
      <header className="card__header">
        <h2 className="card__heading">Upload your image</h2>
        <h4 className="card__subheading">File should be JPEG, PNG or GIF</h4>
      </header>
      <div 
        className="card__box card__box--drop"
        ref={dropZone}
        onDragEnter={preventDefaultBehavior}
        onDragLeave={preventDefaultBehavior}
      >
        <img src={image} className="card__pic" alt="Icon of mountains and clouds" onLoad={() => setIsImgLoaded(true)} />
        <p className="card__additional">Drag &amp; Drop your image here</p>
      </div>
      <p className="card__additional">Or</p>
      <label className="button button--input" htmlFor="image">
        Choose a file
        <input 
          id="image"
          type="file" 
          className=" button button__input" 
          accept="image/png, image/jpeg, image/gif"
          encType='multipart/form-data'
          onChange={(e) => passOnToTransfer(e)}
        />
      </label>
      {message && <Message>{message}</Message>}
    </form>
  )
}

export default UploadCard;