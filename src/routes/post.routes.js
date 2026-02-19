const express = require("express");
const postController = require("../controllers/post.controller");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const postRouter = express.Router();
const identifyUser = require("../middleware/auth.middleware");

postRouter.post(
  "/",
  upload.single("image"),
  identifyUser,
  postController.CreatePostController,
);

postRouter.get("/", identifyUser, postController.getPostController);

postRouter.get(
  "/details/:postId",
  identifyUser,
  postController.getPostDetailsController,
);

postRouter.post("/like/:postId", identifyUser,
  postController.likePostController
)

module.exports = postRouter;
