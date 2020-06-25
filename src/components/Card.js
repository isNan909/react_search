import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card">
        {props.result}
        <div className="card-image">
          <figure className="image is-4by3">
            {/* <img src={results.image} alt="" /> */}
          </figure>
        </div>
        <p className="title is-5">result heading</p>
      </div>
    </div>
  );
}

export default Card;
