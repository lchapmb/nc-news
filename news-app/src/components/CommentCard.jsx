import React from 'react'

function CommentCard(props) {
  const {
    author,
    body,
    votes,
    username,
    comment_id,
    created_at,
    handleClick
  } = props;

  // const handleClick = (event) => {
  //   console.log(event);
  // };

  return (
    <div className='comment-card'>
      <h4>{author}</h4>
      <p>{body}</p>
      <ul>
        <li>Published: {new Date(created_at).toDateString()}</li>
        <li>Votes: {votes}</li>
        <li>
          <button>Updoot</button>
          {author === username && (
            <button onClick={handleClick} key={`del${comment_id}`}>Delete Comment</button>
          )}
        </li>
      </ul>
    </div>
  );
}

export default CommentCard
