import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const pageIdWindow = window.location.search;
const longId = new URLSearchParams(pageIdWindow);
const pageId = longId.get("_id");

function DeleteFetch() {
  const navigate = useNavigate();
  fetch("http://localhost:3001/updatepost?_id=" + pageId, {
    method: "DELETE",
    headers: new Headers({
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }),
  }).then(function (response) {
    if (response.ok) {
      navigate("/main");
      console.log("fait");
    } else {
      alert("erreur");
    }
  });
}

function DeleteButton() {
  return (
    <div className="delete-button">
      <button onClick={DeleteFetch}>Supprimer le post</button>
    </div>
  );
}

export default DeleteButton;
