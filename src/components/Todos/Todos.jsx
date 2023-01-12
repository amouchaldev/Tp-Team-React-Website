import React from 'react'
import { useState,useEffect } from 'react'
import { Table } from 'react-bootstrap';
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
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </div>
  )
}

export default Todos