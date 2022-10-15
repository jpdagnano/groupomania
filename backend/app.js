const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const path = require("path");
const formidableMiddleware = require("express-formidable");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const postCtrl = require("./controllers/post");

app.use(express.json({ type: "*/*" }));
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  formidableMiddleware({
    uploadDir: "../images",
  })
);

app.use("/images", express.static(path.join(__dirname, "image")));
app.use("/", userRoutes);
//app.use("/", postRoutes);
app.post("/createpost", postCtrl.createPost);

mongoose
  .connect(
    "mongodb+srv://jpdagnano:StGm2d443abELqHP@p7jpdagnano.ljbrkpf.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

module.exports = app;
