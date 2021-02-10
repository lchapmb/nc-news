import React, { PureComponent } from 'react'
import CommentCard from './CommentCard'
import AddComment from './AddComment'
import { Link } from '@reach/router';
import * as api from '../api';
import Err from './Err';

class CommentList extends PureComponent {
  state = {
    articleToDisplay: {},
    comments: [],
    isLoading: true,
    err: null
  };

  componentDidMount() {
    const { article_id } = this.props;
    this.fetchCommentsInfo(article_id);
  }

  render() {
    const { articleToDisplay, comments , err } = this.state;
    if (err) return <Err {...err} />;
    return this.state.isLoading ? (
      <p>Loading comments...</p>
    ) : (
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

  // refactor to promise all
  fetchCommentsInfo(article_id) {
    api
      .getSingleArticle(article_id)
      .then((articleToDisplay) => {
        this.setState({ articleToDisplay });
      })
      .catch((err) => {
        this.setState({
          err
        });
      });;

    api
      .getComments(article_id)
      .then((comments) => {
        this.setState({ comments, isLoading: false });
      })
      .catch((err) => {
        this.setState({
          err
        });
      });;
  }
}

export default CommentList