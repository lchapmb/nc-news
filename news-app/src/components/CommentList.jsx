import React, { PureComponent } from 'react'
import CommentCard from './CommentCard'
import AddComment from './AddComment'
import { Link } from '@reach/router';

class CommentList extends PureComponent {
  state = {
    articleToDisplay: {
    "article_id": 29,
    "title": "A BRIEF HISTORY OF FOOD—NO BIG DEAL",
    "body": "Filler",
    "votes": 0,
    "topic": "cooking",
    "author": "tickle122",
    "created_at": "2017-03-11T13:20:18.573Z",
    "comment_count": "10"
  },
    comments: [
      {
        comment_id: 109,
        votes: 7,
        created_at: '2016-04-13T04:53:07.510Z',
        author: 'happyamy2016',
        body:
          'Eum sapiente aut. Doloremque optio a quis qui fuga et. Dolorem animi minima corporis alias molestiae ea ab dolorum. Sed nobis iste recusandae. Eos consequatur nemo sunt deserunt qui necessitatibus.'
      }
    ],
    isLoading: true
  };

  render() {
    const { articleToDisplay , comments} = this.state;
    return (
      <main className='comment-list'>
        <h2>{articleToDisplay.title}</h2>
        <Link to={`/article/${articleToDisplay.article_id}`}>
          <button>Back to article</button>
        </Link>
        <h3>Comments</h3>
        <AddComment />
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} {...comment} />;
        })}
      </main>
    );
  }
}

export default CommentList