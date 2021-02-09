import React, { PureComponent } from 'react'
import CommentCard from './CommentCard'
import AddComment from './AddComment'
import { Link } from '@reach/router';
import * as api from '../api';

class CommentList extends PureComponent {
  state = {
    articleToDisplay: {},
    comments: [],
    isLoading: true
  };

  componentDidMount() {
    const { article_id } = this.props;
    this.fetchCommentsInfo(article_id);
  }

  render() {
    const { articleToDisplay, comments } = this.state;
    return (
      this.state.isLoading ? (<p>Loading comments...</p>) : (
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
      </main>)
    );
  }

  fetchCommentsInfo(article_id) {
    api.getSingleArticle(article_id).then((articleToDisplay) => {
      this.setState({ articleToDisplay });
    });

    api.getComments(article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    })
  }
}

export default CommentList