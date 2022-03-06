import React, { useState, useRef } from 'react';

import Message from '../Message/Message';
import {
  Card,
  CardHeader,
  CardHeading,
  CardBox,
  CardLinkWrapper,
  CardLink,
  CardIcon,
} from '../shared/Card';
import { Button } from '../shared/Button';

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
      }, 1500);
    }
  };

  return (
    <Card hide={!isImgLoaded && !imgUrl}>
      <CardHeader>
        <CardIcon className=" material-icons">check_circle</CardIcon>
        <CardHeading>Uploaded Successfully!</CardHeading>
      </CardHeader>
      <CardBox img as="img" src={imgUrl} onLoad={cb} />
      <CardLinkWrapper>
        <CardLink ref={imgUrlRef}>{imgUrl}</CardLink>
        <Button small onClick={clipText}>
          Copy Link
        </Button>
      </CardLinkWrapper>
      {message && <Message>{message}</Message>}
    </Card>
  );
};

export default LoadedCard;
