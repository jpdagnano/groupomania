const { post } = require("../app");
const Post = require("../models/post");
//CREATION POST

exports.createPost = (req, res, next) => {
  const postObject = req.body;
  if (req.body.image === "undefined") {
    const post = new Post({
      ...postObject,
      image: `${req.protocol}://${req.get("host")}/images/undefinedimage.png`,
      likes: 0,
      usersLiked: [],
    });
    post
      .save()
      .then(() => {
        res.status(201).json({ message: "Article crée !" });
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  } else {
    const post = new Post({
      ...postObject,
      image: `${req.protocol}://${req.get("host")}/${req.file.path}`,

      likes: 0,
      usersLiked: [],
    });
    post
      .save()
      .then(() => {
        res.status(201).json({ message: "Article crée !" });
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  }
};

//AFFICHAGE DE TOUS LES POSTS
exports.getAllPosts = (req, res, next) => {
  Post.find()
    .sort({ date: -1 })
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

//AFFICHAGE POST D'UN USER

exports.getUserPost = (req, res, next) => {
  if (req.auth.userId === "63753ada31740d830baa0a5a")
    Post.find()
      .then((post) => {
        res.status(200).json(post);
      })
      .catch((error) => {
        res.status(404).json({
          error: error,
        });
      });
  else {
    Post.find({ userId: req.auth.userId })
      .then((post) => {
        res.status(200).json(post);
      })
      .catch((error) => {
        res.status(404).json({
          error: error,
        });
      });
  }
};

//AFFICHAGE D'UN POST

exports.getOnePost = (req, res, next) => {
  Post.findOne({
    _id: req.query._id,
  })
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};

//MODIFICATION POST

exports.modifyPost = (req, res, next) => {
  if (req.body.image === "undefined") {
    console.log("pas image");
    Post.findOne({ _id: req.query._id })
      .then((post) => {
        if (
          req.auth.userId === "63753ada31740d830baa0a5a" ||
          req.auth.userId === req.query.userId
        ) {
          Post.updateOne(
            { _id: req.query._id },
            {
              titre: req.body.titre,
              description: req.body.description,
              _id: req.params.id,
            }
          )

            .then(() =>
              res.status(200).json({ message: "Modification effectuée" })
            )
            .catch((error) => res.status(401).json({ error }));
        }
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  } else {
    console.log(" image");
    Post.findOne({ _id: req.query._id })
      .then((post) => {
        if (
          req.auth.userId === "63753ada31740d830baa0a5a" ||
          req.auth.userId === req.query.userId
        ) {
          Post.updateOne(
            { _id: req.query._id },
            {
              titre: req.body.titre,
              description: req.body.description,
              _id: req.params.id,
              image: `${req.protocol}://${req.get("host")}/${req.file.path}`,
            }
          )

            .then(() =>
              res.status(200).json({ message: "Modification effectuée" })
            )
            .catch((error) => res.status(401).json({ error }));
        } else if (post.userId != req.auth.userId) {
          res.status(401).json({ message: "Not authorized" });
        }
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  }
};

//SUPPRIMER POST

exports.deletePost = (req, res, next) => {
  Post.deleteOne({ _id: req.query._id })
    .then(() => {
      res.status(200).json({
        message: "Post supprimée!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

//MENTION LIKE

exports.like = (req, res, next) => {
  if (req.body.likes == 1)
    Post.findOne({ _id: req.body._id }).then((post) => {
      if (post.usersLiked.includes(req.auth.userId)) {
        res.status(403).json({ message: "Post déjà validé" });
      } else {
        Post.updateOne(
          {
            _id: req.body._id,
          },
          {
            $push: {
              usersLiked: req.auth.userId,
            },
            $inc: {
              likes: +1,
            },
          }
        )
          .then(() =>
            res.status(200).json({
              message: "like validé",
            })
          )
          .catch((error) =>
            res.status(400).json({
              error,
            })
          );
      }
    });
};
