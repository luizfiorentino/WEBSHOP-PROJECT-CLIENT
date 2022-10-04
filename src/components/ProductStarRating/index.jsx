import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

const ProductStarRating = (props) => {
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <FaStar
              className="star"
              color={
                ratingValue <= Math.ceil(props.rating) ? "#ffc107" : "#e4e5e9"
              }
              size={20}
            />
          </label>
        );
      })}
    </div>
  );
};
export { ProductStarRating };
