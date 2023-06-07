const multer = require("multer");

//Engine Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, "img--" +file.originalname);
  },
});

//file validation
const fileFiter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    //prevent to upload
    cb({ message: "Unsupported File Format" }, false);
  }
};

const upload = multer({
  storage: storage,
  limites: { fileSize: 1024 * 1024 },
  fileFilter: fileFiter,
});

module.exports = upload;
