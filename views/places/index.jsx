const React = require("react");
const Def = require("../layouts/default.jsx");

function index(data) {
  let placesFormatted = data.places.map((place) => {
    const cuisines = place.cuisines;

    return (
      <div key={place.id} className="col-sm-12 col-md-6 col-lg-4 p-5">
        <a href={`/places/${place.id}`}>
          <h2>{place.name}</h2>
        </a>
        <p>
          {cuisines.map((cuisine, index) => {
            return (
              <span key={index} className="badge rounded-pill p-2 mx-1 pill">
                {cuisine}
              </span>
            );
          })}
        </p>
        <a href={`/places/${place.id}`}>
          <img
            className="img-fluid text-center w-100"
            src={place.pic}
            alt={place.name}
          />
        </a>
        <h5 className="mt-2">
          Located in {place.city}, {place.state}
        </h5>
      </div>
    );
  });

  return (
    <Def>
      <main>
        <div className="indexHead p-3">
          <div className="row align-items-center">
            <h1 className="inline-block col-sm-12 col-md-8">
              Places to Rant or Rave About
            </h1>
            <a className="col-sm-12 col-md-4 text-end" href="/places/new">
              <button className="btn btn-warning">Create New Place</button>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-around">{placesFormatted}</div>
        </div>
      </main>
    </Def>
  );
}

module.exports = index;
