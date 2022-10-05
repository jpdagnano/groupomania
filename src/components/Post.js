import React from "react";
import image200 from "../assets/image200x200.png";
import "../styles/post.css";

function Post() {
  return (
    <div className="article-global">
      <div className="lien-image">
        <div className="image-global">
          <img src={image200} alt="article" className="image-solo" />
        </div>
        <h2 className="article-titre">Exemple titre</h2>

        <p className="article-texte">
          Lorem ipsum dolor sit amet. Rem earum necessitatibus At earum culpa
          non consequatur dolorem et odio sint in rerum impedit. Est iure sunt
          id adipisci dolore sed reiciendis cupiditate non veritatis esse a quia
          officia! Et nostrum internos qui velit veniam qui dolore praesentium
          aut quasi voluptas et labore galisum et neque internos est adipisci
          temporibus. Est itaque voluptatem aut ducimus itaque sed galisum
          consequatur eum nihil molestiae est itaque impedit ab iste tenetur.
        </p>
        <div className="article-date">
          <div className="date">June 24, 2020</div>
        </div>
        <div>
          <div className="likes">
            <i className="fa-regular fa-thumbs-up"></i>
            <div className="number-likes">0 like</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
