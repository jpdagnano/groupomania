import React, { useState, useEffect } from "react";

const pageIdWindow = window.location.search;
const longId = new URLSearchParams(pageIdWindow);
const pageId = longId.get("_id");

function DeleteButton() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/updatepost?_id=" + pageId, {
      method: "DELETE",
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
    });
  }, []);

  return (
    <div className="delete-button">
      <button>Supprimer le post</button>
    </div>
  );
}

export default DeleteButton;
