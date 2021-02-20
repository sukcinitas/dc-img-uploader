const express = require('express');
const cors = require('cors');
const path = require('path');
const multer  = require('multer');
const fs = require('fs').promises;


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../../public/images');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage,
    limits: {
        fieldSize: 1 * 1024  * 1024// 1 MB (max file size)
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }, 
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('../../public'));

const emptyDir = async (directory) => {
    const files = await fs.readdir(directory);
    for(let i = 0; i < files.length; i++) {
        if (i === files.length - 1) {
            return;
        } else {
            await fs.unlink(path.join(directory, files[i]));
        }
    } 
}

app.post('/api/upload-image', upload.single('image'), async (req, res, next) => {
  try {
      const image = req.file;
      if (!image) {
          res.status(400).send({
              status: false,
              data: 'Pease select an image to upload. Only image files are allowed!'
          });
      } else {
          await emptyDir('../../public/images');
          console.log(image.filename);
          res.send({
              status: true,
              message: 'File is uploaded.',
              data: {
                  filename: image.filename,
                  mimetype: image.mimetype,
                  size: image.size
              }
          });
      }
  } catch (err) {
      res.status(500).send(err);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
    console.log(`App is listening on port ${port}.`)
);

