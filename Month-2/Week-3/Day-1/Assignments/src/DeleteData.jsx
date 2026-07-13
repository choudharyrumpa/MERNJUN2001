import axios from "axios";
import { useState } from "react";

function DeleteData() {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  async function handleDelete() {
    if (!id) {
      setMessage("Please enter a post ID.");
      return;
    }

    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setMessage(`Post ${id} deleted successfully.`);
      setId("");
    } catch (error) {
      setMessage("Unable to delete the post.");
      console.log("delete error", error);
    }
  }

  return (
    <section>
      <h2>Delete Data</h2>
      <input
        type="number"
        placeholder="Enter post ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
      {message && <p>{message}</p>}
    </section>
  );
}

export default DeleteData;
