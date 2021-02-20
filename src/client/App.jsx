import React, { useState } from 'react';
import axios from 'axios';

import Footer from './Footer';
import UploadCard from './UploadCard';
import Loader from './Loader';
import LoadedCard from './LoadedCard';
import './App.css';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const upload = (formData) => {
    setIsUploading(true);
    axios.post('/api/upload-image', formData,  {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: progressEvent => console.log(progressEvent.loaded),}).then(
      (res) => {
        setImageUrl(`http://localhost:3000/images/${res.data.data.filename}`);
        setIsUploading(false);
      },
      (err) => {
        console.log(err);
        setIsUploading(false);
      },
    )
  }

  return (<div className="main">
    {(!isUploading && !imageUrl) && <UploadCard cb={upload} />}
    {isUploading && <Loader />}
    {(!isUploading && imageUrl) && <LoadedCard imgUrl={imageUrl} />}
    <Footer />
  </div>)
}

export default App;
