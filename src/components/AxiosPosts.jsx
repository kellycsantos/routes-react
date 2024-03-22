import { useState, useEffect } from "react";
import axios from "axios";

export default function Axios() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const axiosPost = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
      } catch (error) {
        setError(error);
      }
    };
    axiosPost();
  });
  return (
    <>
      <h3>Axios api</h3>
      
      {posts.length > 0 ? (
        posts.map((post) => <li key={post.id}>{post.title}</li>)
      ) : (
        <p>carregando...</p>
      )}
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </>
  );
}
