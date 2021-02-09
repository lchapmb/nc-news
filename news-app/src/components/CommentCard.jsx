import React from 'react'

function CommentCard(comment) {
  console.log(comment)
  return (
    <div className='comment-card'>
      <h4>{comment.author}</h4>
      <p>{comment.body}</p>
      <ul>
        <li>Published: {new Date(comment.created_at).toDateString()}</li>
        <li>Votes: {comment.votes}</li>
        <li>
          <button>Updoot</button>
        </li>
      </ul>
    </div>
  );
}

export default CommentCard
