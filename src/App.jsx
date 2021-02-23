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
  const [message, setMessage] = useState('');
  const location = window.location.href === 'http://localhost:8080/' ? 'http://localhost:3000/' : 'https://shining-lime-cobra.glitch.me/';
  const particle = window.location.href === 'http://localhost:8080/' ? '' : 'app/';

  const upload = async (formData) => {
    try {
      setIsUploading(true);
      const result = await axios.post(`${location}api/upload-image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: progressEvent => console.log(progressEvent.loaded),
      });
      setImageUrl(`${location}${particle}images/${result.data.data.filename}`);
    } catch (err) {
      setMessage('Something went wrong!')
    } finally {
      setIsUploading(false);
      setTimeout(() => {
        setMessage('');
      }, 1000);
    }
  }

  return (<div className="main">
    {(!isUploading && !imageUrl) && <UploadCard cb={upload} />}
    {isUploading && <Loader />}
    {(!isUploading && imageUrl) && <LoadedCard imgUrl={imageUrl} />}
    {message && <Message>{message}</Message>}
    <Footer />
  </div>)
}

export default App;
