import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllComments } from "../../store/comments/selectors";
import { postComment } from "../../store/comments/thunks";

function CommentForm(props) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const comments = useSelector(selectAllComments);
  console.log("com form:", comments);
  const productId = props.id;

  function handleSubmit(event) {
    event.preventDefault();

    const userId = 1; //hardcoded for now

    dispatch(postComment(productId, userId, comment));
    console.log("newComment from form::");

    setName("");
    setComment("");
  }

  const thisProductComments = comments.filter(
    (comment) => comment.productId === productId
  );
  console.log("this prod:", thisProductComments);

  return (
    <div>
      <h4>Post your review!</h4>
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
      {/* <ul>
        {thisProductComments.length === 0 ? (
          <p>No comments for this product yet</p>
        ) : (
          thisProductComments.map((comment) => <li>{comment.comment}</li>)
        )}
      </ul> */}
    </div>
  );
}

export { CommentForm };
