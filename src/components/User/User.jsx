
import React from 'react'

export default function User({info}) {
    const {id,name,username,email,address,phone,website,company} = info
    
  return (
    <div key={id} className="card container my-2 bg-dark text-light" >
    <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <h5>{username}</h5>
        <p className="card-text">{email}</p>
    </div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item"><span className='text-info'>adress: </span>{address.street}, {address.suite}, {address.city}, {address.zipcode}</li>
        <li className="list-group-item">Phone: {phone}</li>
  
    </ul>
    <div className="card-body">
        <a href="#" className="card-link">{website}</a><br />
        <h3>{company.name}</h3>
    </div>
    </div>
  )
}
