import { useNavigate } from "react-router-dom";
const pageIdWindow = window.location.search;
const longId = new URLSearchParams(pageIdWindow);
const pageId = longId.get("_id");

function DeleteButton() {
  const navigate = useNavigate();
  function DeleteFetch() {
    fetch("http://localhost:3001/updatepost?_id=" + pageId, {
      method: "DELETE",
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
    }).then(function (response) {
      if (response.ok) {
        navigate("/main");
      } else {
        alert("erreur");
      }
    });
  }
  return (
    <div className="button-anim">
      <button className="button-send" onClick={DeleteFetch}>
        Supprimer le post
      </button>
    </div>
  );
}

export default DeleteButton;
