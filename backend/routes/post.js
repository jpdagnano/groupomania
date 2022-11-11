const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer");
const app = express();
const postCtrl = require("../controllers/post");

router.get("/main", auth, postCtrl.getAllPosts);
router.get("/userpost", auth, postCtrl.getUserPost);
router.get("/updatepost", auth, postCtrl.getOnePost);
router.delete("/updatepost", auth, postCtrl.deletePost);
router.post("/createpost", auth, multer, postCtrl.createPost);

router.put("/updatepost", auth, multer, postCtrl.modifyPost);
/* router.post("/:id/like", auth, postCtrl.likeOrDislike); * */
module.exports = router;
