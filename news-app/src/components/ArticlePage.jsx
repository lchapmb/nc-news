import React, { PureComponent } from 'react';
import * as api from '../api';
import { Link } from '@reach/router';
import Err from './Err';
import CommentList from './CommentList';

class ArticlePage extends PureComponent {
  state = {
    articleToDisplay: {},
    isLoading: true,
    err: null
  };

  componentDidMount() {
    const { article_id } = this.props;
    this.fetchSingleArticle(article_id);
  }

  render() {
    const { articleToDisplay, err } = this.state;
    if (err) return <Err {...err} />;
    return this.state.isLoading ? (
      <p>Loading article...</p>
    ) : (
      <main className='article-page'>
        <h2>{articleToDisplay.title}</h2>
        <p>{articleToDisplay.body}</p>
        <div className='article-buttons'>
          <button
            onClick={this.handleVote}
            name={articleToDisplay.article_id}
            value={1}
          >
            Updoot
          </button>
          <button
            onClick={this.handleVote}
            name={articleToDisplay.article_id}
            value={-1}
          >
            Downdoot
          </button>
        </div>
        <ul>
          <li>Votes: {articleToDisplay.votes}</li>
          <li>Topic: {articleToDisplay.topic}</li>
          <li>Author: {articleToDisplay.author}</li>
          <li>
            Published: {new Date(articleToDisplay.created_at).toDateString()}
          </li>
          <li>Comments: {articleToDisplay.comment_count}</li>
        </ul>
        <CommentList article_id={articleToDisplay.article_id} />
      </main>
    );
  }

  handleVote = (event) => {
    const articleId = event.target.name;
    const vote = event.target.value;

    api
      .patchVote(articleId, vote)
      .then((articleToDisplay) => {
        this.setState({ articleToDisplay, isLoading: false });
      })
      .catch((err) => {
        this.setState({
          err
        });
      });
  };

  fetchSingleArticle(article_id) {
    api
      .getSingleArticle(article_id)
      .then((articleToDisplay) => {
        this.setState({ articleToDisplay, isLoading: false });
      })
      .catch((err) => {
        this.setState({
          err
        });
      });
  }
}

export default ArticlePage;
