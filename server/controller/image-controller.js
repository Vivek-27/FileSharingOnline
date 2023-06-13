const File = require('../models/file.js');

const uploadImage = async (req, res) => {
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname
  };

  try {
    const file = await File.create(fileObj);
    res
      .status(200)
      .json({ path: `https://fileshareonline.onrender.com/file/${file._id}` });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

const downloadImage = async (req, res) => {
  try {
    const file = await File.findById(req.params.file_Id);

    file.downloadContent++;

    await file.save();

    res.download(file.path, file.name);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { uploadImage, downloadImage };
