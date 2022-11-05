const Post = require("../models/post");
//CREATION POST

exports.createPost = (req, res, next) => {
  console.log(req);
  console.log(req.file);
  const postObject = req.body;
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
};

//AFFICHAGE DE TOUS LES POSTS
exports.getAllPosts = (req, res, next) => {
  Post.find()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

//AFFICHAGE SAUCE D'UN USER

exports.getUserPost = (req, res, next) => {
  Post.find({
    userId: req.auth.userId,
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

//AFFICHAGE D'UN POST

exports.getOnePost = (req, res, next) => {
  Post.findOne({
    _id: req.params.id,
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

//MODIFICATION SAUCE

/* exports.modifySauce = (req, res, next) => {
  const sauceObject = req.file
    ? {
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };

  delete sauceObject.userId;
  Sauce.findOne({ _id: req.params.id })
    .then((sauce) => {
      if (sauce.userId != req.auth.userId) {
        res.status(401).json({ message: "Not authorized" });
      } else {
        Sauce.updateOne(
          { _id: req.params.id },
          { ...sauceObject, _id: req.params.id }
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
}; */

//SUPPRIMER UNE SAUCE

/* exports.deleteSauce = (req, res, next) => {
  Sauce.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Sauce supprimée!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
}; */

//MENTION LIKE OU DISLIKE

/* exports.likeOrDislike = (req, res, next) => {
  if (req.body.like === 1) {
    Sauce.updateOne(
      {
        _id: req.params.id,
      },
      {
        $push: {
          usersLiked: req.body.userId,
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
  if (req.body.like === -1) {
    Sauce.updateOne(
      {
        _id: req.params.id,
      },
      {
        $push: {
          usersDisliked: req.body.userId,
        },
        $inc: {
          dislikes: +1,
        },
      }
    )
      .then(() => {
        res.status(200).json({
          message: "dislike validé",
        });
      })
      .catch((error) =>
        res.status(400).json({
          error,
        })
      );
  }
  if (req.body.like === 0) {
    Sauce.findOne({
      _id: req.params.id,
    })
      .then((sauce) => {
        if (sauce.usersLiked.includes(req.body.userId)) {
          Sauce.updateOne(
            {
              _id: req.params.id,
            },
            {
              $pull: {
                usersLiked: req.body.userId,
              },
              $inc: {
                likes: -1,
              },
            }
          )
            .then(() =>
              res.status(200).json({
                message: "like annulé",
              })
            )
            .catch((error) =>
              res.status(400).json({
                error,
              })
            );
        }
        if (sauce.usersDisliked.includes(req.body.userId)) {
          Sauce.updateOne(
            {
              _id: req.params.id,
            },
            {
              $pull: {
                usersDisliked: req.body.userId,
              },
              $inc: {
                dislikes: -1,
              },
            }
          )
            .then(() =>
              res.status(200).json({
                message: "dislike annulé",
              })
            )
            .catch((error) =>
              res.status(400).json({
                error,
              })
            );
        }
      })
      .catch((error) =>
        res.status(404).json({
          error,
        })
      );
  }
}; */
