import React, { PureComponent } from 'react';
import CommentCard from './CommentCard';
import AddComment from './AddComment';
import { Link } from '@reach/router';
import * as api from '../api';
import Err from './Err';

class CommentList extends PureComponent {
  state = {
    articleToDisplay: {},
    comments: [],
    isLoading: true,
    err: null,
    username: 'tickle122',
    pageToUpdate: false
  };

  componentDidMount() {
    const { article_id } = this.props;
    this.fetchCommentsInfo(article_id);
  }

  componentDidUpdate() {
    const { article_id } = this.props;

    if (this.state.pageToUpdate) {
      this.fetchCommentsInfo(article_id);
      this.setState((currentState) => {
        return { pageToUpdate: false };
      });
    }
  }

  render() {
    const { articleToDisplay, comments, err, username } = this.state;
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
        <AddComment addNewComment={this.addNewComment} />
        {comments.map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              {...comment}
              username={username}
              handleDelete={this.handleDelete}
            />
          );
        })}
      </main>
    );
  }

  handleDelete = (event) => {
    const { article_id } = this.props;
    const comment_id = event.target.value;

    api
      .deleteComment(article_id, comment_id)
      .then((res) => {
        console.log(res);
        this.setState((currentState) => {
          return { pageToUpdate: true };
        });
      })
      .catch((err) => {
        this.setState({
          err
        });
      });
  };

  addNewComment = (newComment) => {
    const { article_id } = this.props;

    api
      .postNewComment(newComment, article_id)
      .then((postedComment) => {
        this.setState((currentState) => {
          return {
            comments: [postedComment, ...currentState.comments],
            pageToUpdate: true
          };
        });
      })
      .catch((err) => {
        this.setState({
          err
        });
      });
  };

  fetchCommentsInfo(article_id) {
    const articlePromise = api.getSingleArticle(article_id);
    const commentPromise = api.getComments(article_id);

    Promise.all([articlePromise, commentPromise])
      .then(([articleToDisplay, comments]) => {
        this.setState({ articleToDisplay, comments, isLoading: false });
      })
      .catch((err) => {
        this.setState({
          err
        });
      });

    // api
    //   .getSingleArticle(article_id)
    //   .then((articleToDisplay) => {
    //     this.setState({ articleToDisplay });
    //   })
    //   .catch((err) => {
    //     this.setState({
    //       err
    //     });
    //   });

    // api
    //   .getComments(article_id)
    //   .then((comments) => {
    //     this.setState({ comments, isLoading: false });
    //   })
    //   .catch((err) => {
    //     this.setState({
    //       err
    //     });
    //   });
  }
}

export default CommentList;
