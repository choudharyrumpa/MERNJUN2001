import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function GetData() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((result) => {
                setPosts(result.data);
            })
            .catch((error) => {
                console.log("Here is the error", error);
            });
    },[]);
  return (
    <div>
      <ul>
        {
            posts.map((post)=>(
                <li key={post.id}>{post.title}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default GetData
