import React, { PureComponent } from 'react'
import ArticlePreviewCard from './ArticlePreviewCard.jsx'
import * as api from '../api'

class ArticlesList extends PureComponent {
  state = { articles: [],
    isLoading: true,
    topic: ""
  }

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
    const {articles} = this.state;
    return (
      <section className="article-list">
        <h2>Top {this.state.topic ? `${this.state.topic} ` : ""}Stories</h2>
        {this.state.isLoading ? (<p>Loading articles...</p>) :
        (articles.map((article) => {
          return <ArticlePreviewCard key={article.article_id} {...article}/>
        }))}
      </section>
    );
  }

  fetchArticles(topic) {
    api.getArticles(topic).then((articles) => {
      this.setState({articles, topic, isLoading: false})
    })
  }
}

export default ArticlesList