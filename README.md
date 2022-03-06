<h1 align="center">DC Image Uploader</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://imago-uploader.netlify.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/solutions/9D72LuP3IIs87Y9rO6Ey">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

![](https://github.com/sukcinitas/media/blob/master/img-uploader/img-uploader.gif)

An application to upload images with removed EXIF data. You can find the demo [here](https://imago-uploader.netlify.app).
A complementary API can be found [here](https://github.com/sukcinitas/dc-img-uploader-api).
File upload is implemented with Node.js Multer middleware and EXIF removal with Piexifjs. Only three lastly uploaded files are stored as this app is created only for learning purposes. File size is limited to 5 MB; file size limitation is implemented on a client side.

### Built With

- [React 17](https://reactjs.org/)
- [Styled-Components](https://styled-components.com/)
- [Axios](https://www.npmjs.com/package/axios)

#### Compiling

- [Babel](https://babeljs.io/)

#### Bundling

- [Webpack 5](https://webpack.js.org/)

## Features

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx) was to build an application to complete the given user stories.

User stories:

- I can drag and drop an image to upload it
- I can select an image from my folder to upload it
- I can see a loader when uploading
- When the image is uploaded, I can see the image and copy it
- I can choose to copy image URL to the clipboard

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/sukcinitas/dc-img-uploader.git

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

```bash
# Clone complementary api repository
$ git clone https://github.com/sukcinitas/dc-img-uploader-api.git

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

More details [here](https://github.com/sukcinitas/dc-img-uploader-api#setup).

## Acknowledgements

- An example how EXIF could be removed on front-end [here](https://stackoverflow.com/a/27638728) (though, in this case it is done on server).
- [Handling File Uploads in Node.js with Express and Multer](https://stackabuse.com/handling-file-uploads-in-node-js-with-expres-and-multer/)
- [Browser Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard)
- [File size limitation couldn't be implemented with Multer](https://github.com/expressjs/multer/issues/602).
- [How To Use Styled-Components In React](https://www.smashingmagazine.com/2020/07/styled-components-react/)

## Contact

- GitHub [@sukcinitas](https://github.com/sukcinitas/)
