import React, { useState } from 'react';
import axios from 'axios';

import Footer from './Footer';
import UploadCard from './UploadCard';
import Loader from './Loader';
import LoadedCard from './LoadedCard';
import Message from './Message';
import './App.css';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [message, setMessage] = useState('');
  const location = window.location.href === 'http://localhost:8080/' ? 'http://localhost:3000/' : 'https://boiling-citadel-16368.herokuapp.com/';

  const upload = async (formData) => {
    try {
      setIsUploading(true);
      const result = await axios.post(`${location}api/upload-image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: progressEvent => console.log(progressEvent.loaded),
      });
      setImageUrl(`${location}api/images/${result.data.data.filename}`);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setMessage('Only jpeg, png or gif files can be uploaded!');
      } else {
        setMessage('Something went wrong!');
      }
      formData.delete('image');
    } finally {
      setIsUploading(false);
      setTimeout(() => {
        setMessage('');
      }, 1500);
    }
  }

  let value;
  if (isUploading || imageUrl) {
      value = <>{(isUploading || !isImgLoaded) && <Loader />}<LoadedCard imgUrl={imageUrl} cb={() => setIsImgLoaded(true)} isImgLoaded={isImgLoaded}  /></>;
  } else {
    value = <UploadCard cb={upload} />;
  }

  console.log(isUploading || imageUrl, isUploading || !isImgLoaded , value)

  return (
    <div className="main">
      {message && <Message>{message}</Message>}
      <div className="wrapper">{value}</div>
      <Footer />
    </div>
  )
}

export default App;
