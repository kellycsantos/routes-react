import { useState, useEffect } from "react";

export default function Fetch() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data.slice(0,10))
                console.log(data.slice(0,10))
            })
        } catch (error){
            setError(error)
        }

    }
    fetchPost()

  }, [])
  return (
    <>
      <p>Fetch api</p>
      {posts.length == 0 ? (
        <p> carregando...</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
      
    </>
  );
}
