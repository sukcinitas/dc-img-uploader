const express = require('express');
const cors = require('cors');
const path = require('path');
const shortid = require('shortid');
const multer  = require('multer');
const fs = require('fs').promises;


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, './images'));
    },
    filename: function(req, file, cb) {
        cb(null, shortid.generate() + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage,
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

app.use(express.static('dist'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    res.header(
      'Access-Control-Allow-Method',
      'GET, POST, PUT, PATCH, POST, DELETE, HEAD, OPTIONS',
    );
    res.header('Access-Control-Max-Age', '86400');
    next();
  });

const emptyDir = async (directory, currentFile) => {
    const files = await fs.readdir(directory);
    if(files.length < 3) {
        return;
    }
    for(let i = 0; i < files.length; i++) {
        if (files[i] === currentFile) {
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
              data: 'Only image files are allowed!'
          });
      } else {
          await emptyDir(path.resolve(__dirname, './images'), image.filename);
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

app.get('/images/:name', (req, res) => {
    res.sendFile(`${__dirname}/images/${req.params.name}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
    console.log(`App is listening on port ${port}.`)
);

