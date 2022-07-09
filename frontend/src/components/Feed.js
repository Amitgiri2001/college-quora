import React, { useEffect, useState } from "react";
import QuoraBox from "./QuoraBox";
import "./css/Feed.css";
import Post from "./Post";
import axios from "axios";

function Feed({User}) {
  const name=User.name;
  // console.log(name)
  const [posts,setPosts]=useState([]);
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
      {
        posts.map((post,index)=>(
          <Post key={index} post={post} User={User} />
        ))
      }
      {/* <Post />
      <Post />
      <Post />
      <Post />
      <Post /> */}
    </div>
  );
}

export default Feed;
