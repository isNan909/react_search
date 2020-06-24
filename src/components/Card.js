import React from "react";

function Card() {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://loremflickr.com/640/360"
              alt=''
            />
          </figure>
        </div>
        <p className="title is-5">Movie Name</p>
      </div>
    </div>
  );
}

export default Card;
