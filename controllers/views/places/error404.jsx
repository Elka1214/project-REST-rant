const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404</h1>
        <p>Page Not Found</p>
      </main>
    </Def>
  );
}

module.exports = error404;
