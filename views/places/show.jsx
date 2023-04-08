const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = <h3 className="inactive">No comments yet!</h3>;

  let rating = <h3 className="inactive">Not yet rated</h3>;
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars;
    }, 0);
    let averageRating = Math.round(sumRatings / data.place.comments.length);

    rating = <h3>{averageRating} stars</h3>;
  }

  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      return (
        <div className="border row-sm-4">
          <h2 className="rant">{c.rant ? "Rant!" : "Rave!"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong> - {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>

          <form
            action={`/places/${data.place.id}/rant/${c.id}?_method=DELETE`}
            method="POST"
          >
            <input
              type="submit"
              className="btn btn-danger"
              value="Delete Comment"
            />
          </form>
        </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <img src={data.place.pic} alt={data.place.name} />
        <h2>Rating</h2>
        {rating}
        <br />
        <h2>
          {data.place.city}, {data.place.state}
        </h2>

        <h3>{data.place.showEstablished()}</h3>
        <h2>Serving {data.place.cuisines}</h2>
        <h1>Want to leave a review?</h1>

        <form
          method="POST"
          action={`/places/${data.place.id}/rant?_method=POST`}
        >
          <div>
            <label htmlFor="author">Author</label>
            <input
              className="form-control input"
              type="text"
              name="author"
              id="author"
            />
          </div>
          <div>
            <label htmlFor="content">Content</label>
            <textarea
              className="form-control input"
              name="content"
              id="content"
              cols="30"
              rows="1"
            ></textarea>
          </div>
          <div>
            <label htmlFor="stars">Star Rating</label>
            <input
              className="form-control input"
              type="number"
              id="stars"
              name="stars"
              step={0.5}
            />
          </div>
          <div>
            <label htmlFor="rant">Rant</label>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              name="rant"
              id="rant"
            />
          </div>

          <input type="submit" />
        </form>
        <h2>Comments</h2>
        {comments}

        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
          Edit
        </a>

        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  );
}
module.exports = show;
