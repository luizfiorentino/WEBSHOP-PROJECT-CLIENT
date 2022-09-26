import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productDetailsThunk } from "../../store/thunks";

function DetailsPage() {
  const dispatch = useDispatch();
  const productId = useParams().id;

  useEffect(() => {
    dispatch(productDetailsThunk(productId));
  }, []);

  return (
    <div>
      <h3>Product's Details</h3> id:::{productId}
      <button>
        <Link to={"/"}>Back to Home Page</Link>
      </button>
    </div>
  );
}

export { DetailsPage };
