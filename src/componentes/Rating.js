import React from "react";
import ReactStars from "react-rating-stars-component";

const Stars = props => {
  return (
    <div>
      <ReactStars
        count={5}
        edit={false}
        value={4.87}
        size={45}
        color2={"#ffd700"}
      />
    </div>
  );
};

export default Stars;
