const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img id="homepagepic" src="/images/delicious-pizza.jpg" alt="Pizza" />
          <div>
            Photo by{" "}
            <a href="https://unsplash.com/ko/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Chad Montano
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/images/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
