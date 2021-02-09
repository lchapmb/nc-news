import React, { PureComponent } from 'react'
import * as api from '../api';
import { Link } from '@reach/router';

class ArticlePage extends PureComponent {
  state = {
    articleToDisplay: {},
    isLoading: true
  };

  componentDidMount() {
    const { article_id } = this.props;
    this.fetchSingleArticle(article_id);
  }

  render() {
    const { articleToDisplay } = this.state;
    return (
      this.state.isLoading ? (<p>Loading article...</p>) : (
      <main className='article-page'>
        <h2>{articleToDisplay.title}</h2>
        <p>{articleToDisplay.body}</p>
        <div className='article-buttons'>
          <button>Updoot</button>

          <Link to={`/comments/${articleToDisplay.article_id}`}>
            <button>Go to Comments</button>
          </Link>
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
      </main>)
    );
  }

  fetchSingleArticle(article_id) {
    api.getSingleArticle(article_id).then((articleToDisplay) => {
      this.setState({ articleToDisplay, isLoading: false });
    });
  }
}

export default ArticlePage