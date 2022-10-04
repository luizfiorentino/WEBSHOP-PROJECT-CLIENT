import react, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

const StarRating = () => {
  const [rating, setRating] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type="radio"
              name="rating"
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
              size={20}
            />
          </label>
        );
      })}
    </div>
  );
};
export { StarRating };
