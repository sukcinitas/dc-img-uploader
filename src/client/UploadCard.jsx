import React, { useState } from 'react';
import image from '../../public/image.svg';

const UploadCard = ({ cb }) => {
  const handleDrop = function (e, file) {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData();
    formData.append('image', file);
    console.log(formData, 'formData');
    // axios.post('/api/upload-image', formData,  {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    //   onUploadProgress: progressEvent => console.log(progressEvent.loaded),}).then(
    //   (res) => {
    //     console.log(res.data.data.filename);
    //     // require(`../server/uploads/${res.data.data.filename}`).then(res => {
    //     //   setImageSource(res);
    //     // });
    //     setImage(res.data.data.filename);
    //     // setImage(URL.createObjectURL(selectedFile));
    //   },
    //   (err) => {
    //     console.log(err);
    //   },
    // );
  }
 const handleEv = function (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  
  return (
    <form className="card" onSubmit={cb}>
      <header className="card__header">
        <h2 className="card__heading">Upload your image</h2>
        <h4 className="card__subheading">File should be Jpeg, Png...</h4>
      </header>
      <div 
        className="card__box card__box--drop"
        onDragEnter={handleEv}
        onDrop={(e) => handleDrop(e, e.currentTarget.files[0])}
        onDragStart={handleEv}
        onDragOver={handleEv}
        onDragLeave={handleEv}
        onDragEnd={handleEv}
        onDrag={handleEv}
      >
        <img src={image} className="card__pic" alt="Icon of mountains and clouds" />
        <p className="card__additional">Drag &amp; Drop your image here</p>
      </div>
      <p className="card__additional">Or</p>
      <label className="button button--input" htmlFor="image">
        Upload an image
        <input 
          id="image"
          type="file" 
          className="button__input" 
          accept="image/png, image/jpeg"
          encType='multipart/form-data'
          onChange={(e) => handleDrop(e, e.currentTarget.files[0])}
        />
      </label>
    </form>
  )
}

export default UploadCard;