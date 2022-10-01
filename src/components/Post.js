function Post() {
  return (
    <div className="article-global">
      <div className="lien-image">
        <a href="post.html" className="lien">
          <div className="image-global">
            <img src="#" alt="Image" className="image" />
          </div>
          <h2 className="article-titre">Exemple titre</h2>
        </a>
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
          <div className="article-like">
            <div>36 like</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
