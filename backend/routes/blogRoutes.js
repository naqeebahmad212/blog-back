const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogControllers");
const UserAuth = require("../middlewares/auth");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, `../public/uploads`));
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

router.get(`/check-user`, UserAuth.isLoggedIn, blogController.get_checkUser);
router.post(`/create`, upload.single("file"), blogController.post_createBlog);
router.get(`/`, blogController.get_posts);
router.get(`/blogs/:id`, blogController.get_singlePost);
router.delete(`/blogs/:id`, blogController.delete_singlePost);

module.exports = router;
