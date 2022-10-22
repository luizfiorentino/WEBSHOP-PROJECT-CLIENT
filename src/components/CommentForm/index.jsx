import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllComments } from "../../store/comments/selectors";
import { postComment } from "../../store/comments/thunks";
import "./styles.css";

function CommentForm(props) {
  const dispatch = useDispatch();
  const comments = useSelector(selectAllComments);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  console.log("com form:", comments);
  const productId = props.id;

  function handleSubmit(event) {
    event.preventDefault();

    const userId = 1; //hardcoded for now
    if (!comment || comment === "") {
      setButtonClicked(true);
    } else {
      dispatch(postComment(productId, userId, comment));

      setName("");
      setComment("");
      setEmail("");
      setButtonClicked(false);
    }
  }

  const thisProductComments = comments.filter(
    (comment) => comment.productId === productId
  );
  console.log("this prod:", thisProductComments);

  return (
    <div className="product-review-main">
      <h4>Post your review!</h4>
      <div className="review-fields">
        <form className="form-outline" onSubmit={handleSubmit}>
          <label className="form-field">
            Comment: *{" "}
            <textarea
              className="input-field"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </label>{" "}
          <div>
            {buttonClicked === true ? (
              <p className="empty-comment-message">
                Comment field must be filled
              </p>
            ) : undefined}{" "}
          </div>
          <div className="name-and-email-fields">
            <label className="input-field-name-and-email">
              Name:{" "}
              <input
                className="input-inner"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>{" "}
            <label className="input-field-name-and-email">
              Email:{" "}
              <input
                className="input-inner"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>{" "}
          </div>
          <p>
            {" "}
            <button className="submit-review-button" type="submit">
              Submit
            </button>{" "}
          </p>
        </form>
      </div>

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
