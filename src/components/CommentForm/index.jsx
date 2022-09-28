import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllComments } from "../../store/comments/selectors";
import { postComment } from "../../store/comments/thunks";
import { productDetailsThunk } from "../../store/thunks";

function CommentForm(props) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const comments = useSelector(selectAllComments);
  console.log("com form:", comments);
  const commentsThisProduct = comments.filter(
    (comment) => comment.productId === props.id
  );
  console.log("comments this prod::", commentsThisProduct);

  function handleSubmit(event) {
    event.preventDefault();
    const productId = props.id;
    const userId = 1; //hardcoded for now
    // const newComment = { productId, userId, comment };
    dispatch(postComment(productId, userId, comment));
    console.log("newComment from form::");

    setName("");
    setComment("");
  }

  useEffect(() => {
    dispatch(productDetailsThunk(props.id));
  }, []);

  return (
    <div>
      <h3>Leave a comment!</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Comment:{" "}
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>{" "}
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>{" "}
        <p>
          {" "}
          <button type="submit">Submit</button>{" "}
        </p>
      </form>

      <ul>
        {commentsThisProduct.length === 0 ? (
          <p>No comments for this product yet</p>
        ) : (
          commentsThisProduct.map((comment) => <li>{comment.comment}</li>)
        )}
      </ul>
    </div>
  );
}

export { CommentForm };
