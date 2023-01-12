import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Post from './Post';

function Posts() {

  const [data,setData] = useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response=>{setData(response.data)})
  },[])

  
  return (
    <div>
      {data.map((d)=>{
        return(
          <Post 
          key={d.id}
            info={d}
          />
        )
      })}
    </div>
  )
}

export default Posts
