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

An application to upload images with removed EXIF data. You can find the demo [here](https://app.netlify.com/sites/imago-uploader/overview).
A complementary API can be found [here](https://github.com/sukcinitas/dc-img-uploader-api).
File upload is implemented with Express' Multer and EXIF removal with Piexifjs. Only three files can be uploaded at a time. File size is limited to 5 MB. File size limitation is implemented on client side, because it cannot be implemented using Multer (https://github.com/expressjs/multer/issues/602). The drop zone is limited using e.dataTransfer.effectAllowed = 'none';. If Clipboard API is accessible, it is used for copying an image URL.


### Built With

- [React 17](https://reactjs.org/)
- [Axios](https://www.npmjs.com/package/axios)

#### Compiling

- [Babel](https://babeljs.io/)

#### Bundling

- [Webpack 5](https://webpack.js.org/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx) was to build an application to complete the given user stories.

User stories:

- I can drag and drop an image to upload it
- I can select an image from my folder to upload it
- I can see a loader when uploading
- When the image is uploaded, I can see the image and copy it
- I can choose to copy image URL to the clipboard

## How To Use

<!-- Example: -->

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

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example -->

- An example how EXIF could be removed on front-end [here](https://stackoverflow.com/a/27638728) (though, in this case it is done on server).
- [Handling File Uploads in Node.js with Express and Multer](https://stackabuse.com/handling-file-uploads-in-node-js-with-expres-and-multer/)
- [Browser Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard)

## Contact

- GitHub [@sukcinitas](https://github.com/sukcinitas/)
