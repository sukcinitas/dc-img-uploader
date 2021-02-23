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
  const location = window.location.href === 'http://localhost:8080/' ? 'http://localhost:3000/' : window.location.href;

  const upload = async (formData) => {
    try {
      setIsUploading(true);
      const result = await axios.post('/api/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: progressEvent => console.log(progressEvent.loaded),
      });
      setImageUrl(`${location}images/${result.data.data.filename}`);
    } catch (err) {
      setMessage('Something went wrong!')
    } finally {
      setIsUploading(false);
    }
  }

  return (<div className="main">
    {(!isUploading && !imageUrl) && <UploadCard cb={upload} />}
    {isUploading && <Loader />}
    {(!isUploading && imageUrl) && <LoadedCard imgUrl={imageUrl} />}
    {message && <Message>{{message}}</Message>}
    <Footer />
  </div>)
}

export default App;
