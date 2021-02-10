import React, { PureComponent } from 'react'
import ArticlePreviewCard from './ArticlePreviewCard.jsx'
import * as api from '../api'
import Err from './Err';
import SortList from './SortList'

class ArticlesList extends PureComponent {
  state = { articles: [], isLoading: true, topic: '', err: null, query: {sort_by:'created_at', order:'desc'} };

  componentDidMount() {
    const { topic } = this.props;
    this.fetchArticles(topic);
  }

  componentDidUpdate(prevState) {
    const { topic } = this.props;
    const { query } = this.state;
    console.log('componentUpdate', query)
    console.log(prevState.query)
   
    if (prevState.topic !== topic) {
      this.fetchArticles(topic);
    } 
  }

  render() {
    const { articles, err } = this.state;
    if (err) return <Err {...err} />;
    return (
      <section className='article-list'>
        <h2>Top {this.state.topic ? `${this.state.topic} ` : ''}Stories</h2>
        <SortList updateQuery={this.updateQuery} />
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

  fetchArticles(topic, query) {
    api
      .getArticles(topic, query)
      .then((articles) => {
        this.setState({ articles, topic, isLoading: false, query });
      })
      .catch((err) => {
        this.setState({
          err
        });
      });
  }

  updateQuery = (query) => {
    console.log('updateQuery', query)
    const { topic } = this.props;
    console.log('update', topic)
    this.fetchArticles(topic, query);
  };
}

export default ArticlesList