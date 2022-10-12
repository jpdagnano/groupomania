const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer");
const postCtrl = require("../controllers/post");

//router.get("/main", auth, postCtrl.getAllPosts);
// router.get("/:id", auth, postCtrl.getOneSauce);
router.post("/createpost", multer, postCtrl.createPost);
/* router.put("/:id", auth, multer, postCtrl.modifySauce);
router.delete("/:id", auth, postCtrl.deleteSauce);
router.post("/:id/like", auth, postCtrl.likeOrDislike); */
module.exports = router;
