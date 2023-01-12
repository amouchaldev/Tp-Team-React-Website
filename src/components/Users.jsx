import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import User from "./User";
function Users(){

    const[data, setData] = useState([]) ;

useEffect(()=>{

    axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{
        setData(result.data);
    });
},[]);
return (
    <div>
      {data.map((item) => (
        <User info ={item} />
      ))}
    </div>
  );
}
export default Users;