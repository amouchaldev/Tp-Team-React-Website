import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
function Todos() {
    const [todos,setTodos]=useState([])
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/todos').then(data => {
        // console.log(data.data)
        setTodos(data.data)
      }, [])
    })
  return (
    <div className="container">
    <h2>All Todos 📫</h2>

      <div className='row'>
    {todos.map((todo) => {
      return (
         <div className="col-4 px-3 mb-3" key={todo.id}>
        <div className="card">
        <div className="card-body">
          <h5 className="card-title">{todo.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{todo.completed}</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
    </div>
       );
    })}
  </div>
    </div>
  )
}

export default Todos