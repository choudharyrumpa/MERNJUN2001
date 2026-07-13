import axios from "axios";
import { useState } from "react";

function UpdateData() {
  const [formData, setFormData] = useState({ id: "", fullname: "", age: "" });
  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleUpdate() {
    if (!formData.id) {
      setMessage("Please enter a post ID.");
      return;
    }

    try {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${formData.id}`, {
        fullname: formData.fullname,
        age: formData.age,
      });
      setMessage(`Post ${formData.id} updated successfully.`);
    } catch (error) {
      setMessage("Unable to update the post.");
      console.log("update error", error);
    }
  }

  return (
    <section>
      <h2>Update Data</h2>
      <input type="number" name="id" placeholder="Enter post ID" value={formData.id} onChange={handleChange} />
      <br />
      <input type="text" name="fullname" placeholder="Enter updated name" value={formData.fullname} onChange={handleChange} />
      <br />
      <input type="number" name="age" placeholder="Enter updated age" value={formData.age} onChange={handleChange} />
      <br />
      <button onClick={handleUpdate}>Update</button>
      {message && <p>{message}</p>}
    </section>
  );
}

export default UpdateData;
