import React from 'react';

function CommentCard(props) {
  const {
    author,
    body,
    votes,
    username,
    comment_id,
    created_at,
    handleDelete,
    handleCommentVote
  } = props;

  return (
    <div className='comment-card'>
      <h4>{author}</h4>
      <p>{body}</p>
      <ul>
        <li>Published: {new Date(created_at).toDateString()}</li>
        <li>Votes: {votes}</li>
        <li>
          <div className='article-buttons'>
            <button onClick={handleCommentVote} name={comment_id} value={1}>
              Updoot
            </button>
            <button onClick={handleCommentVote} name={comment_id} value={-1}>
              Downdoot
            </button>
            {author === username && (
              <button
                value={comment_id}
                onClick={handleDelete}
                key={`del${comment_id}`}
              >
                Delete Comment
              </button>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default CommentCard;
