import React from "react";
import { useSelector } from "react-redux";
import { selectAllComments } from "../../store/comments/selectors";

function CommentForm(props) {
  const comments = useSelector(selectAllComments);
  console.log("com form:", comments);
  const commentsThisProduct = comments.filter(
    (comment) => comment.productId === props.id
  );
  console.log("comments this prod::", commentsThisProduct);

  return (
    <div>
      <h3>Leave a comment!</h3>
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
