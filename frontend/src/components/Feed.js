import React, { useEffect, useState } from "react";
import QuoraBox from "./QuoraBox";
import "./css/Feed.css";
import Post from "./Post";
import axios from "axios";

function Feed({User}) {
  
  const [posts,setPosts]=useState([]);

  // we are use useEffect for get all posts in one array
  useEffect(() => {
    axios.get("/api/questions").then((res) => {
      console.log(res.data)
      setPosts(res.data.reverse());

    }).catch((e) => {
      console.log(e);;
    });


  }, [])

  return (
    <div className="feed">
      <QuoraBox User={User} />
      {/* Put all the posts */}
      {
        posts.map((post,index)=>(
          <Post key={index} post={post} User={User} />
        ))
      }
      
    </div>
  );
}

export default Feed;
