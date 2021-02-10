import React, { PureComponent } from 'react'
import ArticlePreviewCard from './ArticlePreviewCard.jsx'
import * as api from '../api'
import Err from './Err';

class ArticlesList extends PureComponent {
  state = { articles: [], isLoading: true, topic: '', err: null };

  componentDidMount() {
    const { topic } = this.props;
    this.fetchArticles(topic);
  }

  componentDidUpdate(prevState) {
    const { topic } = this.props;
    if (prevState.topic !== topic) {
      this.fetchArticles(topic);
    }
  }

  render() {
    const { articles , err } = this.state;
    if (err) return <Err {...err} />;
    return (
      <section className='article-list'>
        <h2>Top {this.state.topic ? `${this.state.topic} ` : ''}Stories</h2>
        <form className='sort-form'>
          <label>
            Sort articles by{' '}
            <select>
              <option value=''>All</option>
            </select>
          </label>
        </form>
        {this.state.isLoading ? (
          <p>Loading articles...</p>
        ) : (
          articles.map((article) => {
            return <ArticlePreviewCard key={article.article_id} {...article} />;
          })
        )}
      </section>
    );
  }

  fetchArticles(topic) {
    api
      .getArticles(topic)
      .then((articles) => {
        this.setState({ articles, topic, isLoading: false });
      })
      .catch((err) => {
        this.setState({
          err
        })
      })
  }
}

export default ArticlesList