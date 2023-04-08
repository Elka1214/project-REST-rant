const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <div>
          <img id="i404" src="/images/404-pic.jpg" alt="Error 404" />
        </div>
        Photo by{" "}
        <a href="https://unsplash.com/@blakeverdoorn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Blake Verdoorn
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/images/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
      </main>
    </Def>
  );
}

module.exports = error404;
