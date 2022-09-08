import React, { useState } from 'react';
import axios from 'axios';

import Footer from './components/Footer/Footer';
import UploadCard from './components/UploadCard/UploadCard';
import LoaderCard from './components/LoaderCard/LoaderCard';
import LoadedCard from './components/LoadedCard/LoadedCard';
import Message from './components/Message/Message';
import GlobalStyles from './components/shared/Global';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [message, setMessage] = useState('');
  const location =
    window.location.href === 'http://localhost:8080/'
      ? 'http://localhost:3000/'
      : 'https://power-sweet-archduke.glitch.me/';

  const upload = async (formData) => {
    try {
      setIsUploading(true);
      const result = await axios.post(`${location}api/upload-image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => console.log(progressEvent.loaded),
      });
      setImageUrl(`${location}api/images/${result.data.data.filename}`);
    } catch (err) {
      setMessage(
        err.response && err.response.status === 400
          ? 'Only jpeg, png or gif files can be uploaded!'
          : 'Something went wrong!'
      );
      formData.delete('image');
    } finally {
      setIsUploading(false);
      setTimeout(() => {
        setMessage('');
      }, 1500);
    }
  };

  let value = <UploadCard cb={upload} />;
  if (isUploading || imageUrl) {
    value = (
      <>
        {(isUploading || !isImgLoaded) && <LoaderCard />}
        <LoadedCard
          imgUrl={imageUrl}
          cb={() => setIsImgLoaded(true)}
          isImgLoaded={isImgLoaded}
        />
      </>
    );
  }

  return (
    <>
      <GlobalStyles />
      <div className="main">
        {message && <Message>{message}</Message>}
        <div className="wrapper">{value}</div>
        <Footer />
      </div>
    </>
  );
};

export default App;
