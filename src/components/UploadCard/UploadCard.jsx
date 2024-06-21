import React, { useState, useEffect, useRef } from 'react';

import Message from '../Message/Message';
import image from '../../../public/image.svg';
import {
  Card,
  CardHeader,
  CardHeading,
  CardAdditional,
  CardBox,
  CardPic,
  CardSubheading,
} from '../shared/Card';
import { Button, Input } from '../shared/Button';

const UploadCard = ({ cb }) => {
  const [message, setMessage] = useState('');
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const dropZone = useRef();

  const passOnToTransfer = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let file;
    if (
      e.target === dropZone.current ||
      e.target.parentNode === dropZone.current
    ) {
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
      }, 1500);
      return;
    }
    const formData = new FormData();
    formData.append('image', file);
    cb(formData);
  };

  const preventDefaultBehavior = (e) => {
    if (
      e.target !== dropZone.current &&
      e.target.parentNode !== dropZone.current
    ) {
      // controls visual feedback, which cursor is displayed
      e.dataTransfer.effectAllowed = 'none';
      dropZone?.current.classList.remove('selected');
    } else {
      e.dataTransfer.effectAllowed = 'all';
      dropZone?.current.classList.add('selected');
    }
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    window.addEventListener(
      'dragover',
      (e) => preventDefaultBehavior(e),
      false
    );
    window.addEventListener('drop', (e) => passOnToTransfer(e), false);

    return function cleanup() {
      window.removeEventListener(
        'dragover',
        (e) => preventDefaultBehavior(e),
        false
      );
      window.removeEventListener('drop', (e) => passOnToTransfer(e), false);
    };
  });

  return (
    <Card as="form" $hide={!isImgLoaded} onSubmit={cb}>
      <CardHeader>
        <CardHeading>Upload your image</CardHeading>
        <CardSubheading>File should be JPEG, PNG or GIF</CardSubheading>
      </CardHeader>
      <CardBox
        $drop
        ref={dropZone}
        onDragEnter={preventDefaultBehavior}
        onDragLeave={preventDefaultBehavior}
      >
        <CardPic
          src={image}
          alt="Icon of mountains and clouds"
          onLoad={() => setIsImgLoaded(true)}
        />
        <CardAdditional>Drag &amp; Drop your image here</CardAdditional>
      </CardBox>
      <CardAdditional>Or</CardAdditional>
      <Button as="label" htmlFor="image" $relative>
        Choose a file
        <Input
          id="image"
          type="file"
          accept="image/png, image/jpeg, image/gif"
          encType="multipart/form-data"
          onChange={(e) => passOnToTransfer(e)}
        />
      </Button>
      {message && <Message>{message}</Message>}
    </Card>
  );
};

export default UploadCard;
