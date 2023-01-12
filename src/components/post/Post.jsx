import React from 'react'

function Post({info}) {
  const {id,title,body} = info
  return (
          <div className="card  m-5 bg-dark text-light "  key={id} >
            <div className="card-body ">
                <h5 className="card-title py-3">{title}</h5>
                <p className="card-text ">{body}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        )
  
}

export default Post
