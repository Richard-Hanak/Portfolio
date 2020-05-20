import React from "react";

const EditorsChoice = () => {
  return (
    <div className="editorsChoice">
      <div>
        <a
          href="https://www.epicurious.com/recipes/food/views/one-pot-chicken-and-chorizo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className="one">
            <img
              src="https://www.edamam.com/web-img/7a4/7a483e356d87b0695e0d9d91fdc2194e.jpg"
              alt="One-Pot Chicken Chorizo"
            />
            <figcaption className="figTop">One-Pot Chicken</figcaption>
          </figure>
        </a>
        <a
          href="https://www.bonappetit.com/recipe/sour-cherry-pie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className="two">
            <img
              src="https://www.edamam.com/web-img/873/873f62cf7441a71533dff9bdd4c940bb"
              alt="Sour Cherry Pie"
            />
            <figcaption className="figBottom">Sour Cherry Pie</figcaption>
          </figure>
        </a>
        <p>Editor's Choice</p>
      </div>
    </div>
  );
};

export default EditorsChoice;