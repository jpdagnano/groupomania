const multer = require("multer");
const images = multer({ dest: "./images" });
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, images);
  },
  filename: (req, file, callback) => {
    console.log(file);
    const name = file.originalname;
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + "." + extension);
  },
});

module.exports = multer({ storage: storage }).single("image");
