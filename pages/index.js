import { useEffect, useState } from "react";
import axios from 'axios';
import MainWrapper from "../components/MainWrapper";

function HomePage () {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      axios.get('/api/testApi').then(response => {
        setPosts(response.data.ourData)
      })
  },[])

  return (
  <div> 
    <h1>Hello World</h1>

    {
      posts.map(post => {
        return <div key={post.id}>{post.title}</div>
      })
    }
  </div>
  )
}



export default HomePage;