import React, { useState } from 'react';
import axios from 'axios';

const Form = function (){
  const [selectedFile, setSelectedFile] = useState();
  const [image, setImage] = useState('');
  const [text, setText] = useState('');

  const clipText = function (){
    document.execCommand('copy');
    navigator.clipboard.readText().then(
      clipText => {
        console.log(clipText);
        setText(clipText);
    })
  }

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData();
    formData.append('image', e.currentTarget.files[0]);

    axios.post('/api/upload-image', formData,  {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: progressEvent => console.log(progressEvent.loaded),}).then(
      (res) => {
        console.log(res.data.data.filename);
        // require(`../server/uploads/${res.data.data.filename}`).then(res => {
        //   setImageSource(res);
        // });
        setImage(res.data.data.filename);
        // setImage(URL.createObjectURL(selectedFile));
      },
      (err) => {
        console.log(err);
      },
    );
  }
 const handleEv = function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('other');
  }
  return (
    <form 
      onDragEnter={() => console.log('Dragenter')}
      onDrop={handleDrop}
      onDragStart={handleEv}
      onDragOver={handleEv}
      onDragLeave={handleEv}
      onDragEnd={handleEv}
      onDrag={handleEv}
      onSubmit={handleDrop}
    >
      <input 
        type="file"
        accept="image/png, image/jpeg"
        encType='multipart/form-data'
        name="image"
        onChange={(e) => setSelectedFile(e.currentTarget.files[0])}
      />
      <button
        type="submit"
      >
        Submit
      </button>
      <img 
        onCopy={() => document.execCommand('copy')}
        style={{width:'100px'}} src={`http://localhost:3000/images/${image}`}>
      </img>
      <p onCopy={clipText}>Tekstas</p>
      <p>{text}</p>
    </form>
  )
}

export default Form;