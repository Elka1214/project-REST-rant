const React = require("react");
const Def = require("../default.jsx");

<form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
  ...
</form>;

function edit_form() {
  return (
    <Def>
      <main>
        <h1>Edit Place</h1>
      </main>
    </Def>
  );
}

module.exports = edit_form;
