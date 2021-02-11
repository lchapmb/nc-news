import React from 'react'

function CommentCard(props) {
  const { author } = props;
  // refactor with destructure
  return (
    <div className='comment-card'>
      <h4>{author}</h4>
      <p>{props.body}</p>
      <ul>
        <li>Published: {new Date(props.created_at).toDateString()}</li>
        <li>Votes: {props.votes}</li>
        <li>
          <button>Updoot</button>
          {author === props.username && (
            <button key={`del${props.comment_id}`}>Delete Comment</button>
          )}
        </li>
      </ul>
    </div>
  );
}

export default CommentCard
