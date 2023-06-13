const express = require('express');
const router = express.Router();
const {
  uploadImage,
  downloadImage
} = require('../controller/image-controller.js');
const upload = require('../utils/upload.js');

router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:file_Id', downloadImage);

module.exports = router;
