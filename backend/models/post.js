const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  userId: { type: String },
  titre: { type: String },
  description: { type: String },
  image: { type: String },
  likes: { type: Number },
  usersLiked: { type: Array },
});

module.exports = mongoose.model("Post", postSchema);
