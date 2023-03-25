const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>Home Page</h1>
        <a href="/places">
          <button className="btn-primary">Place Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
