const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <img id="showpagepic" src={data.place.pic} alt="restaurant pic" />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h1>Rating: Currently Unrated</h1>
            <h1>Comments: No comments yet!</h1>
          </div>
          <div>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
              Edit
            </a>
          </div>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
