import React from 'react';

import { Loader } from '../shared/Loader';
import { Card, CardHeader, CardHeading } from '../shared/Card';

const LoaderCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardHeading $left>Uploading...</CardHeading>
      </CardHeader>
      <Loader role="progress"></Loader>
    </Card>
  );
};

export default LoaderCard;
