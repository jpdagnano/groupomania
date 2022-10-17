const multer = require("multer");
const images = multer({ dest: "./images" });
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./images" );
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const extension = MIME_TYPES[file.mimetype];
    console.log(file.fieldname + '-' + uniqueSuffix + "." + extension)
    cb(null, file.fieldname + '-' + uniqueSuffix + "." + extension)
  }
});

module.exports = multer({ storage: storage }).single("image");
