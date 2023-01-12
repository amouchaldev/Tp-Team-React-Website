
function Album({ id, title, userId }) {
  return (
 
    <div className="col-4 px-3 mb-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <button className="btn btn-primary me-2">user id :{userId}</button>
          <button className="btn btn-success">album id :{id}</button>
        </div>
      </div>
    </div>
  );
}
export default Album;
