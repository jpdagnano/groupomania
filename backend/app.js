const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const path = require("path");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

app.use(express.json({ type: "*/*" }));
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/", userRoutes);
app.use("/", postRoutes);

mongoose
  .connect(
    "mongodb+srv://jpdagnano:StGm2d443abELqHP@p7jpdagnano.ljbrkpf.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

module.exports = app;
